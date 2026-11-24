import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const archivePath = new URL("../src/assets/data/archive.json", import.meta.url);
const predictionPath = new URL("../src/assets/data/prediction.json", import.meta.url);
const version = "cn-replay-v1";
const topK = [1, 3, 5];
const modelMethods = ["longest-wait", "wait-frequency"];
const firstEvaluationPeriod = 41;
const firstOfficialWindowPeriod = 79;
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
const timeFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+08:00$/;
const dayLength = 86_400_000;

function isDay(value) {
  return typeof value === "string" && dateFormat.test(value) &&
    Number.isFinite(Date.parse(value)) && new Date(value).toISOString().startsWith(value);
}

function isTime(value) {
  return typeof value === "string" && timeFormat.test(value) &&
    isDay(value.slice(0, 10)) && Number.isFinite(Date.parse(value));
}

function indexUnique(items, key) {
  const index = new Map(items.map((item) => [item[key], item]));
  assert.equal(index.size, items.length, `Duplicate ${key}`);
  return index;
}

export function validateArchive(archive) {
  const ancestors = indexUnique(archive.ancestors, "id");
  const sources = indexUnique(archive.sources, "id");
  indexUnique(archive.events, "id");
  indexUnique(archive.events, "period");
  assert.ok(Array.from(ancestors.keys()).every((id) => Number.isSafeInteger(id) && id > 0));
  const validSources = (ids) => ids.length > 0 && ids.every((id) => sources.has(id));
  const platforms = ["android", "both", "unknown"];
  let previousPeriod = 0;
  let previousDate = null;

  for (const event of archive.events) {
    assert.ok(Number.isSafeInteger(event.period) && event.period > previousPeriod);
    assert.equal(event.server, "cn");
    assert.ok(platforms.includes(event.platform));
    assert.ok(["traveling", "special", "group", "unknown"].includes(event.kind));
    assert.ok(event.startDate === null || isDay(event.startDate));
    assert.ok(event.endDate === null || isDay(event.endDate));
    assert.ok(!event.startDate || !previousDate || event.startDate >= previousDate);
    assert.ok(!event.startDate || !event.endDate || event.endDate >= event.startDate);
    assert.ok(validSources(event.sourceIds));
    assert.equal(new Set(event.ancestorIds).size, event.ancestorIds.length);
    assert.ok(event.ancestorIds.every((id) => ancestors.has(id)));
    assert.ok(event.outcomeComplete === undefined || typeof event.outcomeComplete === "boolean");
    if (event.announcedAt !== null) {
      assert.ok(isTime(event.announcedAt) || isDay(event.announcedAt));
      assert.ok(event.sourceIds.some((id) => sources.get(id).kind === "official"));
    }
    previousPeriod = event.period;
    previousDate = event.startDate ?? previousDate;
  }

  for (const record of archive.eligibility.observations) {
    assert.ok(ancestors.has(record.ancestorId));
    assert.equal(record.server, "cn");
    assert.ok(["android", "both"].includes(record.platform));
    assert.ok(["eligible", "ineligible"].includes(record.status));
    assert.ok(isDay(record.effectiveFrom));
    assert.ok(isTime(record.knownAt) || isDay(record.knownAt));
    assert.ok(validSources(record.sourceIds));
    assert.ok(record.sourceIds.some((id) => sources.get(id).kind === "official"));
  }

  assert.ok(archive.events.some((event) => event.period === archive.legacyEndPeriod));
}

function canReplayBeforeAnnouncement(event) {
  return Boolean(event.startDate && event.announcedAt &&
    event.announcedAt.slice(0, 10) < event.startDate);
}

function isTravelingObservation(event) {
  return event.kind === "traveling" && hasCompleteOutcome(event);
}

function hasCompleteOutcome(event) {
  return event.outcomeComplete !== false && event.ancestorIds.length > 0;
}

function preAnnouncementCutoff(event) {
  assert.ok(canReplayBeforeAnnouncement(event));
  const publishedDay = event.announcedAt.slice(0, 10);
  return new Date(Date.parse(publishedDay) - dayLength).toISOString().slice(0, 10);
}

function eligibilityAt(archive, target, cutoff) {
  if (cutoff === null) return new Map();
  const observations = archive.eligibility.observations.filter((record) =>
    record.server === target.server && record.platform === target.platform &&
    record.effectiveFrom <= cutoff && record.knownAt.slice(0, 10) <= cutoff);
  observations.sort((a, b) =>
    a.effectiveFrom.localeCompare(b.effectiveFrom) || a.knownAt.localeCompare(b.knownAt));
  return new Map(observations.map((record) => [record.ancestorId, record]));
}

function waitBucket(waitPeriods) {
  if (waitPeriods === null) return "debut";
  if (waitPeriods <= 5) return "1-5";
  if (waitPeriods <= 15) return "6-15";
  if (waitPeriods <= 30) return "16-30";
  return "31+";
}

function earlierReturnStats(events) {
  const previous = new Map();
  const buckets = new Map();
  let opportunities = 0;
  let returns = 0;
  let position = 0;

  for (const event of events) {
    position += 1;
    const actual = new Set(event.ancestorIds);
    for (const [id, record] of previous) {
      const wait = waitBucket(position - record.lastPosition);
      const bucket = buckets.get(wait) ?? { opportunities: 0, returns: 0 };
      const returned = Number(actual.has(id));
      bucket.opportunities += 1;
      bucket.returns += returned;
      buckets.set(wait, bucket);
      opportunities += 1;
      returns += returned;
    }
    for (const id of actual) {
      previous.set(id, {
        lastPeriod: event.period,
        lastPosition: position,
        previousReturns: (previous.get(id)?.previousReturns ?? 0) + 1,
      });
    }
  }

  // A fixed prior of 20 opportunities shrinks sparse buckets toward the prior archive rate.
  const overallRate = (returns + 1) / (opportunities + 2);
  const scoreFor = ({ waitPeriods }) => {
    const bucket = buckets.get(waitBucket(waitPeriods)) ?? { opportunities: 0, returns: 0 };
    return (bucket.returns + 20 * overallRate) / (bucket.opportunities + 20);
  };
  return { previous, nextPosition: position + 1, scoreFor };
}

function rankCandidates(candidates, scoreFor) {
  return candidates.map(({ ancestorId, waitPeriods, previousReturns }) => ({
    ancestorId,
    score: scoreFor({ waitPeriods }),
    waitPeriods,
    previousReturns,
  })).sort((a, b) => b.score - a.score ||
    (b.waitPeriods ?? 0) - (a.waitPeriods ?? 0) || a.ancestorId - b.ancestorId)
    .map((candidate, index) => ({ rank: index + 1, ...candidate }));
}

export function replayPeriod(archive, event, clock) {
  const earlier = archive.events.filter((entry) =>
    entry.period < event.period && entry.server === event.server);
  const cutoff = clock === "pre-announcement" ? preAnnouncementCutoff(event) :
    clock === "archive-cutoff" ? earlier.at(-1)?.startDate ?? null : null;
  const knownEvents = clock === "pre-announcement" ? earlier.filter((entry) =>
    entry.startDate !== null && entry.startDate <= cutoff) : earlier;
  const { previous, nextPosition, scoreFor } = earlierReturnStats(knownEvents.filter(isTravelingObservation));
  const eligibility = eligibilityAt(archive, event, cutoff);
  const candidateIds = new Set(previous.keys());
  for (const [id, record] of eligibility) {
    if (record.status === "eligible") candidateIds.add(id);
    if (record.status === "ineligible") candidateIds.delete(id);
  }

  const actual = new Set(event.ancestorIds);
  const scored = hasCompleteOutcome(event) && ["traveling", "group"].includes(event.kind);
  const candidates = Array.from(candidateIds).sort((a, b) => a - b).map((ancestorId) => {
    const known = previous.get(ancestorId);
    const evidence = eligibility.get(ancestorId);
    return {
      ancestorId,
      lastSeenPeriod: known?.lastPeriod ?? null,
      waitPeriods: known ? nextPosition - known.lastPosition : null,
      previousReturns: known?.previousReturns ?? 0,
      eligibility: evidence?.status ?? "unknown",
      eligibilitySourceIds: evidence?.sourceIds ?? [],
      label: scored ? Number(actual.has(ancestorId)) : null,
    };
  });
  const coveredAncestorIds = event.ancestorIds.filter((id) => candidateIds.has(id));
  const coldStartAncestorIds = event.ancestorIds.filter((id) => !previous.has(id));

  return {
    clock,
    asOf: {
      date: cutoff,
      beforeAnnouncement: clock === "pre-announcement" ? event.announcedAt : null,
      lastPeriod: knownEvents.at(-1)?.period ?? null,
      lastEventDate: knownEvents.at(-1)?.startDate ?? null,
    },
    target: {
      period: event.period,
      eventId: event.id,
      startDate: event.startDate,
      kind: event.kind,
      realizedAncestorIds: event.ancestorIds,
      sourceIds: event.sourceIds,
    },
    scored,
    candidates,
    coveredAncestorIds,
    coldStartAncestorIds,
    verifiedEligibleCount: candidates.filter((candidate) => candidate.eligibility === "eligible").length,
    rankings: {
      "longest-wait": rankCandidates(candidates, ({ waitPeriods }) => waitPeriods ?? 0),
      "wait-frequency": rankCandidates(candidates, scoreFor),
    },
  };
}

function uniformDraw(candidateCount, coveredCount, actualCount, k) {
  const picks = Math.min(k, candidateCount);
  let missesAll = 1;
  let coversAll = Number(coveredCount === actualCount && picks >= actualCount);
  for (let i = 0; i < picks; i += 1) {
    missesAll *= Math.max(0, candidateCount - coveredCount - i) / (candidateCount - i);
  }
  for (let i = 0; coversAll > 0 && i < actualCount; i += 1) {
    coversAll *= (picks - i) / (candidateCount - i);
  }
  return {
    hits: 1 - missesAll,
    matchedAncestors: candidateCount === 0 ? 0 : picks * coveredCount / candidateCount,
    completeHits: coversAll,
  };
}

function measureK(replay, method, k) {
  const actual = replay.target.realizedAncestorIds;
  if (method === "random") {
    return uniformDraw(replay.candidates.length, replay.coveredAncestorIds.length, actual.length, k);
  }
  const picks = new Set(replay.rankings[method].slice(0, k).map(({ ancestorId }) => ancestorId));
  const matchedAncestors = actual.filter((id) => picks.has(id)).length;
  return {
    hits: Number(matchedAncestors > 0),
    matchedAncestors,
    completeHits: Number(matchedAncestors === actual.length),
  };
}

function sum(items, read) {
  return items.reduce((total, item) => total + read(item), 0);
}

function archiveFingerprint(archive) {
  return createHash("sha256").update(JSON.stringify(archive)).digest("hex");
}

function evaluateWindow(archive, { id, label, firstPeriod, lastPeriod, clock, kind }) {
  const observed = archive.events.filter((event) => event.kind === kind &&
    event.period >= firstPeriod && event.period <= lastPeriod);
  const replays = observed.filter((event) => hasCompleteOutcome(event) &&
    (clock === "archive-order" || canReplayBeforeAnnouncement(event)))
    .map((event) => replayPeriod(archive, event, clock));
  const denominator = replays.length;
  const actualCount = sum(replays, (replay) => replay.target.realizedAncestorIds.length);
  const metrics = ["random", ...modelMethods].flatMap((method) => topK.map((k) => {
    const results = replays.map((replay) => measureK(replay, method, k));
    const hits = sum(results, (result) => result.hits);
    const matchedAncestors = sum(results, (result) => result.matchedAncestors);
    const completeHits = sum(results, (result) => result.completeHits);
    return {
      method,
      k,
      hits,
      denominator,
      hitRate: denominator === 0 ? null : hits / denominator,
      matchedAncestors,
      actualCount,
      recall: actualCount === 0 ? null : matchedAncestors / actualCount,
      completeHits,
    };
  }));
  return {
    id, label, firstPeriod, lastPeriod, clock, kind,
    observedPeriods: observed.length,
    evaluatedPeriods: denominator,
    actualCount,
    coveredCount: sum(replays, (replay) => replay.coveredAncestorIds.length),
    coldStartCount: sum(replays, (replay) => replay.coldStartAncestorIds.length),
    multiAncestorPeriods: replays.filter((replay) => replay.target.realizedAncestorIds.length > 1).length,
    verifiedEligibleCount: sum(replays, (replay) => replay.verifiedEligibleCount),
    metrics,
  };
}

export function buildPrediction(archive) {
  validateArchive(archive);
  const latest = archive.events.at(-1);
  const target = {
    id: null,
    period: latest.period + 1,
    server: latest.server,
    platform: latest.platform,
    kind: "traveling",
    startDate: null,
    ancestorIds: [],
    sourceIds: [],
  };
  const replay = replayPeriod(archive, target, "archive-cutoff");
  const windows = [
    {
      id: "archive-order",
      label: "按档号滚动回测",
      firstPeriod: firstEvaluationPeriod,
      lastPeriod: latest.period,
      clock: "archive-order",
      kind: "traveling",
    },
    {
      id: "official-announcement",
      label: "官方公告时点回测",
      firstPeriod: firstOfficialWindowPeriod,
      lastPeriod: latest.period,
      clock: "pre-announcement",
      kind: "traveling",
    },
    {
      id: "group",
      label: "集体复刻回测",
      firstPeriod: 1,
      lastPeriod: latest.period,
      clock: "archive-order",
      kind: "group",
    },
  ].map((window) => evaluateWindow(archive, window));

  return {
    version,
    archiveVersion: archive.version,
    archiveSha256: archiveFingerprint(archive),
    target: replay.target,
    asOf: replay.asOf,
    scope: {
      id: "observed-repeat-pool",
      label: "已复刻先祖代理池",
      description: "按档案截止时已观测的普通旅行复刻构建代理池，并纳入有时点证据的候选资格。首次复刻可能排在池外。",
      fullEligibilityAvailable: false,
      candidateCount: replay.candidates.length,
      verifiedEligibleCount: replay.verifiedEligibleCount,
    },
    method: {
      id: "longest-wait",
      label: "最长等待排序",
      scoreLabel: "等待档数",
      description: "按距上次普通旅行复刻的已观测档数降序，同分按先祖编号升序。",
      selectionReason: "当前档案的候选资格与公告时点样本有限，正式档案推演固定使用最长等待规则。",
    },
    ranking: replay.rankings["longest-wait"],
    backtest: {
      scope: "对档案中有结果的旅行档与集体档分别评分。首次复刻仍计入分母，随机基线取均匀无放回抽取的期望值。",
      windows,
    },
  };
}

function writeJson(value) {
  process.stdout.write(JSON.stringify(value, null, 2) + "\n");
}

function main(args) {
  const archive = JSON.parse(readFileSync(archivePath, "utf8"));
  const prediction = buildPrediction(archive);
  const [flag, period] = args;
  if (args.length === 0 || (flag === "--check" && args.length === 1)) {
    const output = JSON.stringify(prediction, null, 2) + "\n";
    if (flag === "--check") {
      assert.equal(readFileSync(predictionPath, "utf8").replaceAll("\r\n", "\n"), output,
        "Run node scripts/generate-prediction.mjs to regenerate prediction.json.");
    } else {
      writeFileSync(predictionPath, output);
    }
    return;
  }
  if (flag === "--period" && args.length === 2) {
    const event = archive.events.find((entry) => String(entry.period) === period);
    assert.ok(event, `Unknown archive period: ${period}`);
    const clock = canReplayBeforeAnnouncement(event) ? "pre-announcement" : "archive-order";
    writeJson({
      version,
      archiveVersion: archive.version,
      archiveSha256: prediction.archiveSha256,
      ...replayPeriod(archive, event, clock),
    });
    return;
  }
  if (flag === "--report" && args.length === 1) {
    writeJson({
      ...prediction,
      archiveReplays: archive.events.map((event) => replayPeriod(archive, event, "archive-order")),
      announcementReplays: archive.events.filter(canReplayBeforeAnnouncement)
        .map((event) => replayPeriod(archive, event, "pre-announcement")),
    });
    return;
  }
  throw new Error("Usage: node scripts/generate-prediction.mjs [--check | --period <n> | --report]");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main(process.argv.slice(2));
}
