import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { buildPrediction, replayPeriod } from "./generate-prediction.mjs";

function readData(file) {
  const path = new URL(`../src/assets/data/${file}`, import.meta.url);
  return JSON.parse(readFileSync(path, "utf8").replace(/^\uFEFF/, ""));
}

function metric(window, method, k) {
  return window.metrics.find((result) => result.method === method && result.k === k);
}

function fixtureSource(archive) {
  archive.sources.push({
    id: "fixture",
    title: "Test fixture",
    kind: "official",
    url: "https://example.invalid/fixture",
  });
}

test("the archive preserves all original period–ancestor rows and the combined event", () => {
  const archive = readData("archive.json");
  const originals = readData("legacy/record.json").map(({ f1, f2 }) => [f1, f2]);
  const imported = archive.events.filter(({ period }) => period <= archive.legacyEndPeriod)
    .flatMap(({ period, ancestorIds }) => ancestorIds.map((id) => [period, id]));
  assert.equal(archive.legacyEndPeriod, 82);
  assert.equal(originals.length, 83);
  assert.deepEqual(imported, originals);

  const combined = archive.events.find(({ period }) => period === 10);
  assert.deepEqual(combined.ancestorIds, [22, 24]);
  assert.equal(combined.kind, "special");
  const replay = replayPeriod(archive, combined, "archive-order");
  assert.equal(replay.scored, false);
  assert.ok(replay.candidates.every(({ label }) => label === null));
});

test("the official replay uses information available before the announcement", () => {
  const archive = readData("archive.json");
  const event = archive.events.find(({ period }) => period === 83);
  const before = replayPeriod(archive, event, "pre-announcement");
  assert.equal(before.asOf.date, "2023-02-20");
  assert.equal(before.asOf.lastPeriod, 82);
  assert.deepEqual(before.target.realizedAncestorIds, [8]);
  assert.equal(before.candidates.find(({ ancestorId }) => ancestorId === 8).lastSeenPeriod, 23);
  assert.ok(before.candidates.every(({ eligibility }) => eligibility === "unknown"));

  event.ancestorIds = [68];
  const altered = replayPeriod(archive, event, "pre-announcement");
  assert.deepEqual(altered.rankings, before.rankings);
  assert.deepEqual(altered.coldStartAncestorIds, [68]);
  assert.deepEqual(altered.coveredAncestorIds, []);
  assert.ok(altered.candidates.every(({ label }) => label === 0));
});

test("eligibility requires matching platform, effective date and evidence available by cutoff", () => {
  const archive = readData("archive.json");
  fixtureSource(archive);
  const evidence = {
    server: "cn",
    platform: "both",
    effectiveFrom: "2023-02-19",
    knownAt: "2023-02-19",
    sourceIds: ["fixture"],
  };
  archive.eligibility.observations.push(
    { ...evidence, ancestorId: 68, status: "eligible" },
    { ...evidence, ancestorId: 1, status: "ineligible" },
    { ...evidence, ancestorId: 67, status: "eligible", knownAt: "2023-02-21" },
    { ...evidence, ancestorId: 66, status: "eligible", effectiveFrom: "2023-02-21" },
    { ...evidence, ancestorId: 65, status: "eligible", platform: "android" },
  );
  const event = archive.events.at(-1);
  const replay = replayPeriod(archive, event, "pre-announcement");
  assert.equal(replay.verifiedEligibleCount, 1);
  assert.deepEqual(replay.candidates.find(({ ancestorId }) => ancestorId === 68), {
    ancestorId: 68,
    lastSeenPeriod: null,
    waitPeriods: null,
    previousReturns: 0,
    eligibility: "eligible",
    eligibilitySourceIds: ["fixture"],
    label: 0,
  });
  for (const id of [1, 65, 66, 67]) {
    assert.ok(!replay.candidates.some(({ ancestorId }) => ancestorId === id));
  }
});

test("a new dated traveling event advances the target, candidates and both ordinary windows", () => {
  const archive = readData("archive.json");
  fixtureSource(archive);
  const before = buildPrediction(archive);
  assert.equal(before.target.period, 84);
  assert.equal(before.target.startDate, null);
  assert.equal(before.scope.verifiedEligibleCount, 0);
  const latest = {
    ...archive.events.at(-1),
    id: "cn-84",
    period: 84,
    startDate: "2023-03-09",
    endDate: "2023-03-13",
    announcedAt: "2023-03-07T12:00:00+08:00",
    ancestorIds: [68],
    sourceIds: ["fixture"],
  };
  archive.events.push(latest);
  const after = buildPrediction(archive);
  assert.equal(after.target.period, 85);
  assert.notEqual(after.archiveSha256, before.archiveSha256);
  assert.equal(after.asOf.lastPeriod, 84);
  assert.equal(after.asOf.date, latest.startDate);
  assert.equal(after.scope.candidateCount, before.scope.candidateCount + 1);
  assert.equal(after.ranking.find(({ ancestorId }) => ancestorId === 68).previousReturns, 1);
  for (let index = 0; index < 2; index += 1) {
    const previous = before.backtest.windows[index];
    const updated = after.backtest.windows[index];
    assert.equal(updated.evaluatedPeriods, previous.evaluatedPeriods + 1);
    assert.equal(updated.actualCount, previous.actualCount + 1);
    assert.equal(updated.coldStartCount, previous.coldStartCount + 1);
    assert.equal(updated.coveredCount, previous.coveredCount);
    for (const metric of updated.metrics) assert.equal(metric.denominator, updated.evaluatedPeriods);
  }
});

test("multiple known group labels contribute per ancestor while ordinary waiting stays unchanged", () => {
  const archive = readData("archive.json");
  fixtureSource(archive);
  const before = buildPrediction(archive);
  const group = {
    ...archive.events.at(-1),
    id: "cn-86",
    period: 86,
    kind: "group",
    startDate: "2023-03-09",
    endDate: "2023-03-13",
    announcedAt: null,
    ancestorIds: [before.ranking[0].ancestorId, before.ranking[1].ancestorId, 68],
    sourceIds: ["fixture"],
  };
  archive.events.push(group);
  const after = buildPrediction(archive);
  const groupWindow = after.backtest.windows.find(({ id }) => id === "group");
  assert.equal(after.target.period, 87);
  assert.deepEqual(after.ranking, before.ranking);
  assert.equal(after.backtest.windows[0].evaluatedPeriods, before.backtest.windows[0].evaluatedPeriods);
  assert.equal(groupWindow.evaluatedPeriods, 1);
  assert.equal(groupWindow.multiAncestorPeriods, 1);
  assert.equal(groupWindow.actualCount, 3);
  assert.equal(groupWindow.coveredCount, 2);
  assert.equal(groupWindow.coldStartCount, 1);
  assert.equal(metric(groupWindow, "longest-wait", 1).hits, 1);
  assert.equal(metric(groupWindow, "longest-wait", 1).recall, 1 / 3);
  assert.equal(metric(groupWindow, "longest-wait", 3).recall, 2 / 3);
  assert.equal(metric(groupWindow, "longest-wait", 3).completeHits, 0);
  const randomTop1 = metric(groupWindow, "random", 1);
  assert.ok(Math.abs(randomTop1.hitRate - 2 / before.scope.candidateCount) < 1e-12);
  assert.equal(randomTop1.recall, 2 / (3 * before.scope.candidateCount));

  group.outcomeComplete = false;
  const incomplete = buildPrediction(archive).backtest.windows.find(({ id }) => id === "group");
  assert.equal(incomplete.observedPeriods, 1);
  assert.equal(incomplete.evaluatedPeriods, 0);
  assert.equal(metric(incomplete, "random", 1).hitRate, null);
  const replay = replayPeriod(archive, group, "archive-order");
  assert.ok(replay.candidates.every(({ label }) => label === null));
});
