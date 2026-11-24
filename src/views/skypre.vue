<!-- eslint-disable prettier/prettier -->
<template>
  <div class="main">
    <div class="trainBox">
      <p style="font-family: var(--font-lishu, 'CTLiShuSF'); color: aliceblue;" id="tabname">{{ tabNames[tab] }}</p>
      <el-button @click="train" type="primary" :disabled="!!loadingMessage">训练</el-button>
      <el-button @click="showAdjust = true" type="warning" :disabled="!!loadingMessage">调参</el-button>
      <el-button @click="predict" type="success" :disabled="!!loadingMessage">预测</el-button>
    </div>
    <el-alert v-if="operationError" :title="operationError" type="error" show-icon @close="operationError = ''" />
    <evan-tabs-vue v-model:current="tab" id="tabTool"></evan-tabs-vue>
    <div id="tabs">
      <div class="mytab" v-if="tab === 1">
        <el-table id="table" :data="result" style="width: 100%" height="70vh"
          :cell-style="{ 'text-align': 'center' }" :header-cell-style="{ 'background': '#171717' }">
          <el-table-column prop="rank" label="排名" align="center"> </el-table-column>
          <el-table-column prop="name" label="先祖" align="center">
            <template #default="scope">
              <el-popover effect="light" trigger="hover" placement="top">
                <template #default>
                  <p>先祖的id: {{ scope.row.id }}</p>
                  <p>所属季节: {{ scope.row.season }}</p>
                  <p>所属地图: {{ scope.row.map }}</p>
                  <p>先祖人气: {{ scope.row.hot }}</p>
                  <p>已经复刻: {{ scope.row.retro }}&nbsp;次</p>
                </template>
                <template #reference>
                  <div class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="result" label="复刻指数" align="center"> </el-table-column>
        </el-table>
      </div>
      <div class="mytab" v-if="tab === 2">
        <el-table id="table" :data="recordCN" style="width: 100%" height="70vh"
          :cell-style="{ 'text-align': 'center' }" :header-cell-style="{ 'background': '#171717' }">
          <el-table-column prop="id" label="档期" align="center"> </el-table-column>
          <el-table-column prop="name" label="先祖" align="center" width="200">
            <template #default="scope">
              <p id="t2name" @click="tab = 3">{{ scope.row.name }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="count" label="第几次复刻" align="center"> </el-table-column>
          <el-table-column prop="leave" label="距离上次复刻" align="center" width="180" > </el-table-column>
          <el-table-column prop="season" label="季节" align="center" > </el-table-column>
          <el-table-column prop="map" label="地图" align="center" > </el-table-column>        
        </el-table>
      </div>
      <div class="mytab" v-if="tab === 3" id="mytab3">
        <div>
          <p style="font-size: 2rem">Unfinished</p>
          <div class="info">
            <img alt="兑换树" src="../assets/img/ancestor/13.png" class="duihuanTree">
            <div><img alt="上一张" src="../assets/img/icon/last.png" class="huantu"/>
              <img alt="下一张" src="../assets/img/icon/next.png" class="huantu"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :width="400" :showClose="false" v-model="showResult" v-if="showResult" id="dialog1">
      <div id="result">预测完成</div>
      <el-button type="primary" @click="showResult = false" id="elbtn1">确认</el-button>
    </el-dialog>
    <el-dialog :width="400" :showClose="false" :model-value="!!loadingMessage" v-if="loadingMessage"
      :close-on-click-modal="false" :close-on-press-escape="false" id="dialog2">
      <evan-rotateloading id="loading"></evan-rotateloading>
      <div id="text">{{ loadingMessage }}</div>
    </el-dialog>
    <el-dialog title="调整源参数的权重" :width="400" :showClose="false" v-model="showAdjust" :close-on-click-modal="false"
      v-if="showAdjust" id="dialog3">
      <div id="dog3remark">调整后请点击一下训练，即使是把参数都调回1</div>
      <div v-for="(item, index) in ratios" :key="index">
        <span style="font-family:YouYuan;">{{ item.name }}</span>
        <el-slider v-model="item.ratio" :step="1" :max="10" :disabled="index === 0"></el-slider>
      </div>
      <el-button type="primary" @click="showAdjust = false" id="elbtn1">确认</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { onBeforeUnmount, reactive, ref } from "vue";
import evanRotateloading from "../components/likeit/evan-rotateloading.vue";
import evanTabsVue from "@/components/likeit/evan-tabs.vue";
import ancestors from "../assets/data/ancestor.json";
import record from "../assets/data/record.json";

const maps = ["晨岛", "云野", "雨林", "霞谷", "墓土", "禁阁"];
const tabNames = { 1: "预测结果", 2: "历史复刻", 3: "先祖图鉴" };
const ancestorsById = new Map(ancestors.map((ancestor) => [ancestor.id, ancestor]));
const lastRetroByAncestor = new Map(record.map(({ f1, f2 }) => [f2, f1]));
const recordCN = record.map(({ f1, f2, f3, f8 }) => {
  const ancestor = ancestorsById.get(f2);
  return {
    id: f1,
    name: ancestor.name,
    leave: f3 === -1 ? "未曾复刻" : f3,
    season: ancestor.seasonname,
    map: maps[ancestor.mapid - 1],
    count: f8,
  };
});

export default {
  name: "skypre",
  components: { evanRotateloading, evanTabsVue },
  setup() {
    const tab = ref(2);
    const result = ref([]);
    const showResult = ref(false);
    const showAdjust = ref(false);
    const loadingMessage = ref("");
    const operationError = ref("");
    const ratios = reactive([
      { name: "下期复刻档数(锁定1作为基准)", ratio: 1 },
      { name: "先祖序号", ratio: 1 },
      { name: "多久没复刻了", ratio: 1 },
      { name: "所属季节", ratio: 1 },
      { name: "所在地图(六大地图)", ratio: 1 },
      { name: "先祖热度", ratio: 1 },
      { name: "是否受政治等特殊因素影响", ratio: 1 },
      { name: "已经复刻几次了", ratio: 1 },
    ]);
    let activeModel;
    let usesTemporaryModel = false;
    let unmounted = false;
    let closeTrainingVisor;

    function activateModel(model, isTemporary = false) {
      const previousModel = activeModel;
      activeModel = model;
      usesTemporaryModel = isTemporary;
      if (previousModel) previousModel.dispose();
    }

    function showTrainingVisor(visor) {
      if (!closeTrainingVisor) {
        const app = document.getElementById("app");
        const syncLayout = () => app.classList.toggle("tfjs-visor-open", visor.isOpen());
        const observer = new MutationObserver(syncLayout);
        observer.observe(visor.el, { subtree: true, attributeFilter: ["data-isopen"] });
        syncLayout();
        closeTrainingVisor = () => {
          observer.disconnect();
          visor.close();
          visor.unbindKeys();
          app.classList.remove("tfjs-visor-open");
        };
      }
      visor.bindKeys();
      visor.open();
    }

    onBeforeUnmount(() => {
      unmounted = true;
      if (closeTrainingVisor) closeTrainingVisor();
      if (!loadingMessage.value) activateModel();
    });

    async function runModelAction(message, failureMessage, action) {
      if (loadingMessage.value) return;
      operationError.value = "";
      loadingMessage.value = message;
      try {
        const backend = await import(/* webpackChunkName: "skypre-model" */ "../skypre-model");
        if (!unmounted) await action(backend);
      } catch (error) {
        if (!unmounted) {
          operationError.value = failureMessage;
          console.error(error);
        }
      } finally {
        loadingMessage.value = "";
        if (unmounted) activateModel();
      }
    }

    function train() {
      return runModelAction("正在准备模型，请稍后…", "准备模型失败，请重试。", async (backend) => {
        if (ratios.some(({ ratio }) => ratio !== 1)) {
          loadingMessage.value = "正在训练中，请稍后…";
          const model = await backend.trainTemporaryModel(showTrainingVisor, () => !unmounted);
          if (model) activateModel(model, true);
        } else if (!activeModel || usesTemporaryModel) {
          activateModel(await backend.loadPresetModel());
        }
      });
    }

    function predict() {
      return runModelAction("正在预测中，请稍后…", "预测失败，请重试。", async (backend) => {
        if (!activeModel) activateModel(await backend.loadPresetModel());
        if (unmounted) return;

        const weights = ratios.map(({ ratio }) => ratio);
        const features = ancestors.map((ancestor) => {
          const lastRetro = lastRetroByAncestor.get(ancestor.id);
          return [
            record.length,
            ancestor.id,
            lastRetro === undefined ? -1 : record.length - lastRetro,
            ancestor.seasonid,
            ancestor.mapid,
            ancestor.hotscore,
            0,
            ancestor.retro + 1,
          ].map((value, index) => value * weights[index]);
        });
        const scores = await backend.predictScores(activeModel, features);
        if (unmounted) return;

        const ranked = ancestors.map((ancestor, index) => ({
          id: ancestor.id,
          name: ancestor.name,
          result: scores[index].toFixed(8),
          season: ancestor.seasonname,
          map: maps[ancestor.mapid - 1],
          hot: ancestor.hotscore,
          retro: ancestor.retro,
        }));
        ranked.sort((first, second) => Number(second.result) - Number(first.result));
        result.value = ranked.map((row, index) => ({ rank: index + 1, ...row }));
        tab.value = 1;
        showResult.value = true;
      });
    }

    return {
      tab, tabNames, recordCN, result, ratios, showResult, showAdjust,
      loadingMessage, operationError, train, predict,
    };
  },
};
</script>
<style lang="scss">
#tabname {
  font-size: 1.5rem;
}
@media screen and (max-width: 1000px) {
  #tabname {
    font-size: 1rem;
  }
  #dialog1 {
    width: 80vw;
  }
}
#dog3remark {
  font-size: small;
  color: rgb(193, 188, 188);
  margin-top: -5vh;
  margin-bottom: 1vh;
}
#result {
  margin-top: -30px;
}

@media screen and (max-width: 1000px) {
  #tfjs-visor-container {
    display: none;
  }
}

#elbtn1 {
  margin-top: 15px;
}

.trainBox > * {
  display: inline;
}

.trainBox > p {
  position: absolute;
  left: 16px;
}

.main {
  padding: 20px;
  padding-bottom: 40px;
}

#tfjs-visor-container .visor-controls button:hover {
  cursor: pointer;
}

#loading {
  position: relative;
  left: 120px;
  bottom: 20px;
}

/deep/ th.gutter {
  display: table-cell !important;
}

.el-table tbody tr:hover > td {
  background: #2b2a2a !important;
  color: white;
  // font-size: calc(1.5rem);
}

.el-table tbody tr td .cell {
  overflow: unset;
}
</style>
<style lang="scss" scoped>
// #table {
//   font-family: STHupo;
// }
.el-table {
  --el-table-border: none;
}

.main {
  background: #171717;
  height: 89vh;
}

:deep .el-table__empty-block {
  background-color: #171717;
}

:deep .el-table__row {
  background-color: #171717;
}

:deep .el-table--border th.el-table__cell {
  background-color: #171717;
}

:deep .el-tabs {
  background-color: #171717;

  > * {
    background-color: #171717;
  }
}

:deep .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background-color: #171717;
}

.el-tag {
  background-color: #171717;
  font-size: large;
  color: #344659;
  border: none;
  transition: all 1s ease-in-out;
}

.el-table tbody tr:hover .el-tag {
  color: white;
  // font-size: 2rem;
  font-family: STHupo, sans-serif;
  cursor: pointer;
  background-color: #2b2a2a;
}

.el-table .cell:hover .el-tag {
  color: white;
  // font-size: 2rem;
  font-family: STHupo, sans-serif;
  cursor: pointer;
  background-color: #2b2a2a;
}

#tabTool {
  position: absolute;
  left: -100px;
  z-index: 10000;
  // border: 2px solid green;
}

#tabs {
  margin-top: 16px;
}

#mytab3 {
  position: relative;
}
.seasonIcon {
  transition: all 0.5s ease;
}
:deep #dialog2 {
  background: none;
}
</style>
<style lang="scss" scoped>
#text {
  color: hsl(0, 0%, 70%);
}
#t2name {
  &:hover {
    cursor: pointer;
  }
}

.info {
  position: absolute;
  z-index: 999;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  // border: 1px white solid;

  width: 370px;
  height: fit-content;

  > * {
    float: left;
  }

  > img {
    --dhTree: 1;
    margin: 10px;
    width: 350px;
    scale: var(--dhTree);
    // height: 340px;
    // background: gray;
  }

  > div {
    :nth-child(1) {
      left: -50px;
    }
    :nth-child(2) {
      right: -50px;
    }
    > img {
      opacity: 0;
      // display: none;
      z-index: 10000;
      position: absolute;
      top: 75px;
      width: 100px;
    }
  }
}
.info:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 50px 30px #181818 inset;
}
.info:hover {
  .huantu {
    cursor: pointer;
    // display: block;
    opacity: 100%;
  }
}
.huantu {
  transition: all 0.3s ease-out;
  &:hover {
    scale: 1.2;
    filter: invert(50%);
  }
  &:active {
    scale: 0.8;
    filter: invert(100%);
  }
}
</style>
