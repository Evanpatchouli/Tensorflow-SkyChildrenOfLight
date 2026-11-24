<template>
  <section aria-labelledby="experiment-title">
    <h1 id="experiment-title">模型实验</h1>
    <p class="archive-intro">
      用旧版 TensorFlow.js 模型比较第 {{ legacyTarget }} 期的 {{ ancestors.length }} 位候选先祖。
      候选数据截至第 {{ lastLegacyPeriod }} 期。临时训练沿用第 1–79 期的旧样本，输出为实验分数。
    </p>

    <div class="experiment-controls" :aria-busy="Boolean(busyMessage)">
      <div class="experiment-actions">
        <button class="experiment-primary" type="button" :disabled="Boolean(busyMessage)" @click="runPresetPrediction">
          运行预置预测
        </button>
        <button type="button" :disabled="Boolean(busyMessage)" @click="adjustDialog?.showModal()">调参</button>
        <button type="button" :disabled="Boolean(busyMessage)" @click="train">训练临时模型</button>
        <button type="button" :disabled="Boolean(busyMessage) || !canPredictTemporary" @click="runTemporaryPrediction">
          运行临时预测
        </button>
      </div>
      <label v-if="canShowVisor" class="experiment-visor-option">
        <input v-model="showVisor" type="checkbox" :disabled="Boolean(busyMessage)" />
        训练时打开损失曲线面板
      </label>
    </div>

    <p class="experiment-status" role="status">
      {{ busyMessage || statusMessage }}
      <template v-if="trainingProgress"> 第 {{ trainingProgress.epoch }} / 20 轮 · 损失 {{ trainingProgress.loss.toFixed(4) }}</template>
    </p>
    <p v-if="operationError" class="experiment-error" role="alert">{{ operationError }}</p>

    <section v-if="result" aria-labelledby="experiment-result-title">
      <h2 id="experiment-result-title">{{ result.modelLabel }}实验结果</h2>
      <table class="archive-table" aria-labelledby="experiment-result-title">
        <thead>
          <tr><th scope="col">排名</th><th scope="col">先祖</th><th scope="col">实验分数</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in result.rows" :key="row.ancestor.id">
            <td>{{ row.rank }}</td>
            <th scope="row">
              {{ row.ancestor.name }}
              <div class="archive-secondary">{{ row.ancestor.seasonname }} · {{ mapName(row.ancestor.mapid) }}</div>
            </th>
            <td>{{ row.score }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <dialog ref="adjustDialog" class="experiment-dialog" aria-labelledby="experiment-adjust-title">
      <form method="dialog">
        <h2 id="experiment-adjust-title">调整特征权重</h2>
        <p class="archive-secondary">训练和预测使用相同权重。修改后请重新训练临时模型。</p>
        <div v-for="(feature, index) in featureWeights" :key="feature.name" class="experiment-weight">
          <span>{{ feature.name }}</span>
          <span>{{ feature.weight }}</span>
          <ElSlider
            :ariaLabel="feature.name"
            :model-value="feature.weight"
            :min="0"
            :max="10"
            :step="1"
            :disabled="index === 0"
            :show-tooltip="false"
            @update:model-value="setWeight(index, $event)"
          />
        </div>
        <button class="experiment-primary" type="submit" autofocus>完成</button>
      </form>
    </dialog>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { ElSlider } from "element-plus";
import "element-plus/es/components/slider/style/css";
import type { LayersModel } from "@tensorflow/tfjs";
import { mapName } from "../archive-presentation";
import ancestors from "../assets/data/legacy/ancestor.json";
import records from "../assets/data/legacy/record.json";

type Backend = typeof import("../skypre-model");
type Visor = ReturnType<(typeof import("@tensorflow/tfjs-vis"))["visor"]>;
type Ancestor = (typeof ancestors)[number];

interface Result {
  modelLabel: string;
  rows: { rank: number; ancestor: Ancestor; score: string }[];
}

const lastVisit = new Map(records.map(({ f1, f2 }) => [f2, f1]));
const lastLegacyPeriod = Math.max(...records.map(({ f1 }) => f1));
const legacyTarget = lastLegacyPeriod + 1;
const featureWeights = ref([
  "预测档期（固定）",
  "先祖序号",
  "距上次复刻的期数",
  "所属季节",
  "所在地图",
  "先祖热度",
  "特殊因素",
  "复刻次数",
].map((name) => ({ name, weight: 1 })));

const adjustDialog = ref<HTMLDialogElement>();
const busyMessage = ref("");
const operationError = ref("");
const statusMessage = ref("");
const trainingProgress = ref<{ epoch: number; loss: number }>();
const result = ref<Result>();
const canShowVisor = ref(false);
const showVisor = ref(false);
const trainedWeights = ref<readonly number[]>();
const weights = computed(() => featureWeights.value.map(({ weight }) => weight));
const canPredictTemporary = computed(() => trainedWeights.value?.every((weight, index) => weight === weights.value[index]) === true);

let presetModel: LayersModel | undefined;
let temporaryModel: LayersModel | undefined;
let unmounted = false;
let closeTrainingVisor: (() => void) | undefined;

onMounted(() => {
  canShowVisor.value = window.matchMedia("(min-width: 1001px)").matches;
});

onBeforeUnmount(() => {
  unmounted = true;
  closeTrainingVisor?.();
  if (!busyMessage.value) disposeModels();
});

function setWeight(index: number, value: number | number[]) {
  if (typeof value === "number") featureWeights.value[index].weight = value;
}

function disposeModels() {
  presetModel?.dispose();
  temporaryModel?.dispose();
  presetModel = undefined;
  temporaryModel = undefined;
}

function openTrainingVisor(visor: Visor) {
  if (!closeTrainingVisor) {
    const app = document.getElementById("app");
    const syncLayout = () => app?.classList.toggle("tfjs-visor-open", visor.isOpen());
    const observer = new MutationObserver(syncLayout);
    observer.observe(visor.el, { attributeFilter: ["data-isopen"], subtree: true });
    syncLayout();
    closeTrainingVisor = () => {
      observer.disconnect();
      visor.close();
      visor.unbindKeys();
      app?.classList.remove("tfjs-visor-open");
    };
  }
  visor.bindKeys();
  visor.open();
}

async function runAction(message: string, failure: string, action: (backend: Backend) => Promise<void>) {
  if (busyMessage.value) return;
  busyMessage.value = message;
  statusMessage.value = "";
  operationError.value = "";
  trainingProgress.value = undefined;
  try {
    const backend = await import("../skypre-model");
    if (!unmounted) await action(backend);
  } catch (error) {
    if (!unmounted) {
      operationError.value = failure;
      console.error(error);
    }
  } finally {
    busyMessage.value = "";
    if (unmounted) disposeModels();
  }
}

function train() {
  return runAction("正在训练临时模型…", "训练失败，请重试。", async (backend) => {
    const selectedWeights = weights.value;
    const model = await backend.trainTemporaryModel({
      weights: selectedWeights,
      isActive: () => !unmounted,
      onEpoch: (epoch, loss) => { trainingProgress.value = { epoch, loss }; },
      showVisor: showVisor.value && window.matchMedia("(min-width: 1001px)").matches ? openTrainingVisor : undefined,
    });
    if (!model) return;
    if (unmounted) {
      model.dispose();
      return;
    }
    temporaryModel?.dispose();
    temporaryModel = model;
    trainedWeights.value = selectedWeights;
    statusMessage.value = "临时模型训练完成，可以运行预测。";
  });
}

function runPresetPrediction() {
  return runAction("正在运行预置预测…", "预置预测失败，请重试。", async (backend) => {
    presetModel ??= await backend.loadPresetModel();
    if (!unmounted) await predict(backend, presetModel, featureWeights.value.map(() => 1), "预置模型");
  });
}

function runTemporaryPrediction() {
  if (!temporaryModel || !canPredictTemporary.value) return;
  const model = temporaryModel;
  const selectedWeights = weights.value;
  return runAction("正在运行临时预测…", "临时预测失败，请重试。", (backend) =>
    predict(backend, model, selectedWeights, "临时模型"),
  );
}

async function predict(backend: Backend, model: LayersModel, selectedWeights: readonly number[], modelLabel: string) {
  const features = ancestors.map((ancestor) => {
    const lastPeriod = lastVisit.get(ancestor.id);
    return [
      records.length,
      ancestor.id,
      lastPeriod === undefined ? -1 : records.length - lastPeriod,
      ancestor.seasonid,
      ancestor.mapid,
      ancestor.hotscore,
      0,
      ancestor.retro + 1,
    ].map((value, index) => value * selectedWeights[index]);
  });
  const scores = await backend.predictScores(model, features);
  if (unmounted) return;
  const rows = ancestors.map((ancestor, index) => ({ ancestor, score: scores[index].toFixed(8) }));
  rows.sort((first, second) => Number(second.score) - Number(first.score));
  result.value = { modelLabel, rows: rows.map((row, index) => ({ ...row, rank: index + 1 })) };
  statusMessage.value = "预测完成";
}
</script>

<style scoped>
.experiment-controls {
  padding: 1rem;
  background: var(--archive-panel);
  border: 1px solid var(--archive-border);
  border-radius: 0.65rem;
}

.experiment-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

button {
  min-height: 2.75rem;
  padding: 0.5rem 0.9rem;
  background: transparent;
  color: var(--archive-ink);
  border: 1px solid var(--archive-muted);
  border-radius: 0.4rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.experiment-primary {
  background: var(--archive-accent);
  border-color: var(--archive-accent);
  color: var(--archive-background);
}

button:disabled {
  opacity: 0.48;
  cursor: default;
}

.experiment-visor-option {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  width: fit-content;
  min-height: 2.75rem;
  margin-top: 0.4rem;
  color: var(--archive-muted);
}

.experiment-status,
.experiment-error {
  margin-block: 0.85rem;
  min-height: 1.55rem;
}

.experiment-error {
  color: #ffb5a8;
}

.experiment-dialog {
  width: min(29rem, calc(100% - 2rem));
  max-height: calc(100% - 2rem);
  margin: auto;
  padding: 1.25rem;
  background: var(--archive-panel);
  color: var(--archive-ink);
  border: 1px solid var(--archive-border);
  border-radius: 0.65rem;
}

.experiment-dialog::backdrop {
  background: rgb(0 0 0 / 65%);
}

.experiment-weight {
  display: grid;
  grid-template-columns: 1fr auto;
  margin-block: 0.65rem;
  font-size: 0.88rem;
}

.experiment-weight :deep(.el-slider) {
  grid-column: 1 / -1;
  padding-inline: 0.65rem;
  --el-slider-main-bg-color: var(--archive-accent);
  --el-slider-runway-bg-color: #4c5046;
}
</style>
