<template>
  <section aria-labelledby="history-title">
    <h1 id="history-title">历史复刻</h1>
    <p class="archive-intro">
      {{ archive.context.platformScope }} 已入档至第 {{ latestPeriod }} 期，按档期从新到旧排列。
    </p>
    <div class="history-filter">
      <label for="history-search">查找档期、先祖或季节</label>
      <input id="history-search" v-model="search" type="search" autocomplete="off" />
      <p class="archive-secondary" role="status">{{ visibleRows.length }} 个档期</p>
    </div>
    <table class="archive-table" aria-labelledby="history-title">
      <thead>
        <tr>
          <th scope="col">档期</th>
          <th scope="col">先祖</th>
          <th scope="col" class="archive-wide-column">季节 · 地图</th>
          <th scope="col" class="archive-wide-column">入档次数</th>
          <th scope="col" class="archive-wide-column">距上次入档</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in visibleRows" :key="row.event.id">
          <th scope="row">
            第 {{ row.event.period }} 期
            <div class="archive-secondary">
              <time v-if="row.event.startDate" :datetime="row.event.startDate">{{ row.event.startDate }}</time>
              <span v-else>日期待核验</span>
            </div>
            <div v-if="row.kindLabel" class="archive-secondary">{{ row.kindLabel }}</div>
            <a v-if="row.source" class="archive-secondary history-source-link" :href="row.source.url">公告来源</a>
          </th>
          <td>
            <div v-for="visit in row.visits" :key="visit.id" class="history-visit">
              <span class="history-name">{{ visit.name }}</span>
              <div class="archive-secondary archive-mobile-meta">
                {{ visit.season }} · {{ visit.map }}
                <br />第 {{ visit.count }} 次入档 · {{ formatWait(visit.wait) }}
              </div>
            </div>
            <span v-if="row.visits.length === 0" class="archive-secondary">人选待核验</span>
            <p v-if="row.event.kind === 'special' && row.event.note" class="archive-secondary">{{ row.event.note }}</p>
          </td>
          <td class="archive-wide-column">
            <div v-for="visit in row.visits" :key="visit.id" class="history-visit">{{ visit.season }} · {{ visit.map }}</div>
          </td>
          <td class="archive-wide-column">
            <div v-for="visit in row.visits" :key="visit.id" class="history-visit">{{ visit.count }} 次</div>
          </td>
          <td class="archive-wide-column">
            <div v-for="visit in row.visits" :key="visit.id" class="history-visit">{{ formatWait(visit.wait) }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="visibleRows.length === 0" class="history-empty">没有找到符合条件的档期。</p>
    <details class="history-sources">
      <summary>档案来源与入档口径</summary>
      <p>同一档可收录多条人选或原档归属。入档次数按先祖在档案中的记录统计。</p>
      <ul>
        <li v-for="source in archive.sources" :key="source.id">
          <a :href="source.url">{{ source.title }}</a>
          <span v-if="source.note" class="archive-secondary"> · {{ source.note }}</span>
        </li>
      </ul>
    </details>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { mapName } from "../archive-presentation";
import archive from "../assets/data/archive.json";

const eventKinds = new Map([
  ["special", "特殊复刻"],
  ["group", "集体复刻"],
  ["unknown", "活动类型待核验"],
]);
const ancestorsById = new Map(archive.ancestors.map((ancestor) => [ancestor.id, ancestor]));
const sourcesById = new Map(archive.sources.map((source) => [source.id, source]));
const latestPeriod = Math.max(...archive.events.map((event) => event.period));
const previousById = new Map<number, { count: number; period: number }>();
const rows = archive.events.map((event) => {
  const visits = event.ancestorIds.map((id) => {
    const ancestor = ancestorsById.get(id);
    const previous = previousById.get(id);
    const count = (previous?.count ?? 0) + 1;
    previousById.set(id, { count, period: event.period });
    return {
      id,
      name: ancestor?.name ?? `先祖 ${id}`,
      nick: ancestor?.nick ?? "",
      season: ancestor?.seasonName ?? "季节未记录",
      map: ancestor ? mapName(ancestor.mapId) : "地图未记录",
      count,
      wait: previous ? event.period - previous.period : null,
    };
  });
  const source = event.sourceIds.map((id) => sourcesById.get(id)).find((entry) => entry?.kind === "official");
  return { event, visits, source, kindLabel: eventKinds.get(event.kind) };
}).reverse();

const search = ref("");
const visibleRows = computed(() => {
  const query = search.value.trim().toLocaleLowerCase();
  if (!query) return rows;
  return rows.filter(({ event, visits }) =>
    String(event.period) === query ||
    `第${event.period}期` === query.replace(/\s/g, "") ||
    visits.some(({ name, nick, season }) => [name, nick, season].some((value) => value.toLocaleLowerCase().includes(query))),
  );
});

function formatWait(wait: number | null) {
  return wait === null ? "首次入档" : `相隔 ${wait} 期`;
}
</script>

<style scoped>
.history-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 0.8rem;
  margin-bottom: 1rem;
}

.history-filter input {
  flex: 1 1 13rem;
  max-width: 20rem;
  min-height: 2.75rem;
  padding: 0.5rem 0.7rem;
  background: var(--archive-panel);
  color: var(--archive-ink);
  border: 1px solid var(--archive-border);
  border-radius: 0.4rem;
  font: inherit;
}

.history-name {
  font-weight: 600;
}

time {
  white-space: nowrap;
}

.history-visit + .history-visit {
  margin-top: 0.45rem;
}

.history-empty,
.history-sources {
  margin-top: 1rem;
}

.history-sources :is(summary, a),
.history-source-link {
  color: var(--archive-accent);
}

.history-sources summary {
  width: fit-content;
  cursor: pointer;
}

.history-sources ul {
  padding-inline-start: 1.25rem;
}

.history-sources :is(ul, p) {
  margin-top: 0.5rem;
}
</style>
