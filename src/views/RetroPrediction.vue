<template>
  <section aria-labelledby="prediction-title">
    <h1 id="prediction-title">下期预测</h1>
    <p class="archive-intro">从已收录的历史档案推演第 {{ prediction.target.period }} 期。排名以档案截至期为准，仅供娱乐。</p>

    <dl class="prediction-context">
      <div>
        <dt>预测目标</dt>
        <dd>第 {{ prediction.target.period }} 期 · {{ prediction.target.startDate ?? "日期待核验" }}</dd>
      </div>
      <div>
        <dt>数据截至</dt>
        <dd>第 {{ prediction.asOf.lastPeriod }} 期<template v-if="prediction.asOf.date"> · {{ prediction.asOf.date }}</template></dd>
      </div>
      <div>
        <dt>实际结果</dt>
        <dd>{{ actualNames.join("、") || "结果待核验" }}</dd>
      </div>
    </dl>

    <section aria-labelledby="ranking-title" class="prediction-section">
      <h2 id="ranking-title">候选排名</h2>
      <p class="archive-intro">
        {{ prediction.scope.label }} · {{ prediction.scope.candidateCount }} 位候选。{{ prediction.scope.description }}
        {{ prediction.method.label }}。{{ prediction.method.description }}{{ prediction.method.selectionReason }}
      </p>
      <table class="archive-table" aria-labelledby="ranking-title">
        <thead>
          <tr>
            <th scope="col">排名</th>
            <th scope="col">先祖</th>
            <th v-if="hasDistinctWait" scope="col" class="archive-wide-column">距上次普通复刻</th>
            <th scope="col" class="archive-wide-column">此前普通复刻</th>
            <th scope="col">{{ prediction.method.scoreLabel }}</th>
          </tr>
        </thead>
        <tbody id="prediction-ranking">
          <tr v-for="row in visibleRanking" :key="row.ancestorId">
            <td>{{ row.rank }}</td>
            <th scope="row">
              {{ row.name }}
              <div class="archive-secondary">{{ row.season }} · {{ row.map }}</div>
              <div class="archive-secondary archive-mobile-meta">
                <template v-if="hasDistinctWait">{{ formatWait(row.waitPeriods) }} · </template>此前普通复刻 {{ row.previousReturns }} 次
              </div>
            </th>
            <td v-if="hasDistinctWait" class="archive-wide-column">{{ formatWait(row.waitPeriods) }}</td>
            <td class="archive-wide-column">{{ row.previousReturns }} 次</td>
            <td>{{ scoreFormat.format(row.score) }}</td>
          </tr>
        </tbody>
      </table>
      <button
        v-if="ranking.length > previewSize"
        class="prediction-toggle"
        type="button"
        :aria-expanded="showFullRanking"
        aria-controls="prediction-ranking"
        @click="showFullRanking = !showFullRanking"
      >
        {{ showFullRanking ? `收起至前 ${previewSize} 名` : `查看全部 ${ranking.length} 位候选` }}
      </button>
    </section>

    <section aria-labelledby="backtest-title" class="prediction-section">
      <h2 id="backtest-title">历史回测</h2>
      <p class="archive-intro">
        {{ prediction.backtest.scope }} 随机基线列出期望命中数。单档有多个实际人选时，命中任一人即计作当期命中。
      </p>
      <article v-for="window in prediction.backtest.windows" :key="window.id" class="backtest-window">
        <h3 :id="`backtest-${window.id}`">
          {{ window.label }}
          <template v-if="window.firstPeriod !== null && window.lastPeriod !== null"> · 第 {{ window.firstPeriod }}–{{ window.lastPeriod }} 期</template>
        </h3>
        <p class="archive-secondary backtest-coverage">
          <template v-if="window.id === 'group' && window.observedPeriods === 0">暂无符合口径的集体复刻档。</template>
          <template v-else>
            观察 {{ window.observedPeriods }} 期，评估 {{ window.evaluatedPeriods }} 期。候选覆盖 {{ window.coveredCount }}/{{ window.actualCount }} 实际人次，
            {{ window.coldStartCount }} 人次在此前档案中未出现。多归属 {{ window.multiAncestorPeriods }} 期。
          </template>
        </p>
        <table v-if="window.evaluatedPeriods > 0" class="archive-table" :aria-labelledby="`backtest-${window.id}`">
          <thead>
            <tr>
              <th scope="col">方法</th>
              <th scope="col">前 K 名</th>
              <th scope="col">档期命中</th>
              <th scope="col" class="archive-wide-column">实际人选召回</th>
              <th v-if="window.id === 'group'" scope="col" class="archive-wide-column">人选全中</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="metric in window.metrics" :key="`${metric.method}-${metric.k}`">
              <th scope="row">{{ methodLabels.get(metric.method) ?? metric.method }}</th>
              <td>{{ metric.k }}</td>
              <td>
                {{ formatRate(metric.hitRate) }}
                <div class="archive-secondary">{{ metricFormat.format(metric.hits) }} / {{ metric.denominator }}</div>
                <div class="archive-secondary archive-mobile-meta">人选召回 {{ formatRate(metric.recall) }}</div>
                <div v-if="window.id === 'group'" class="archive-secondary archive-mobile-meta">人选全中 {{ metricFormat.format(metric.completeHits) }} 期</div>
              </td>
              <td class="archive-wide-column">
                {{ formatRate(metric.recall) }}
                <div class="archive-secondary">{{ metricFormat.format(metric.matchedAncestors) }} / {{ metric.actualCount }}</div>
              </td>
              <td v-if="window.id === 'group'" class="archive-wide-column">{{ metricFormat.format(metric.completeHits) }} 期</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { mapName } from "../archive-presentation";
import archive from "../assets/data/archive.json";
import prediction from "../assets/data/prediction.json";

const ancestorsById = new Map(archive.ancestors.map((ancestor) => [ancestor.id, ancestor]));
const actualNames = prediction.target.realizedAncestorIds.map((id) => ancestorsById.get(id)?.name ?? `先祖 ${id}`);
const ranking = prediction.ranking.map((row) => {
  const ancestor = ancestorsById.get(row.ancestorId);
  return {
    ...row,
    name: ancestor?.name ?? `先祖 ${row.ancestorId}`,
    season: ancestor?.seasonName ?? "季节未记录",
    map: ancestor ? mapName(ancestor.mapId) : "地图未记录",
  };
});
const previewSize = 10;
const showFullRanking = ref(false);
const visibleRanking = computed(() => showFullRanking.value ? ranking : ranking.slice(0, previewSize));
const hasDistinctWait = prediction.method.id !== "longest-wait";
const scoreFormat = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 6 });
const metricFormat = new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 2 });
const rateFormat = new Intl.NumberFormat("zh-CN", { style: "percent", maximumFractionDigits: 1 });
const methodLabels = new Map([
  ["random", "随机基线"],
  ["longest-wait", "最长等待"],
  ["wait-frequency", "等待时段模型"],
]);

function formatWait(wait: number | null) {
  return wait === null ? "未曾入档" : `相隔 ${wait} 期`;
}

function formatRate(rate: number | null) {
  return rate === null ? "—" : rateFormat.format(rate);
}
</script>

<style scoped>
.prediction-context {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 13rem), 1fr));
  gap: 0.75rem 1.5rem;
  padding: 1rem clamp(0.75rem, 3vw, 1.3rem);
  background: var(--archive-panel);
  border: 1px solid var(--archive-border);
  border-radius: 0.65rem;
}

.prediction-context dt {
  color: var(--archive-muted);
  font-size: 0.86rem;
}

.prediction-context dd {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.prediction-section {
  margin-top: clamp(1.5rem, 5vw, 2.75rem);
}

.prediction-toggle {
  margin-top: 0.85rem;
  min-height: 2.75rem;
  padding: 0.5rem 0.9rem;
  background: transparent;
  color: var(--archive-accent);
  border: 1px solid var(--archive-border);
  border-radius: 0.4rem;
  font: inherit;
  cursor: pointer;
}

.prediction-toggle:hover {
  border-color: var(--archive-accent);
}

.backtest-window + .backtest-window {
  margin-top: 1.5rem;
}

.backtest-window h3 {
  font-size: 1rem;
}

.backtest-coverage {
  margin-block: 0.35rem 0.75rem;
}
</style>
