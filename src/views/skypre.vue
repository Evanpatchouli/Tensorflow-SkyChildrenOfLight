<!-- eslint-disable prettier/prettier -->
<template>
  <div class="main">
    <div class="trainBox">
      <p style="font-family: 'CTLiShuSF'; color: aliceblue;" id="tabname">{{ tab.currentName }}</p>
      <el-button @click="train" type="primary">训练</el-button>
      <el-button @click="adjust()" type="warning">调参</el-button>
      <el-button @click="predict()" type="success">预测</el-button>
      <el-button @click="save()" type="danger" v-if="false">保存</el-button>
    </div>
    <evan-tabs-vue v-model:current="tab.current" id="tabTool"></evan-tabs-vue>
    <div id="tabs">
      <div class="mytab" v-if="tab.current == 1">
        <el-table id="table" :data="result" style="width: 100%" height="70vh" ref="tableref"
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
      <div class="mytab" v-if="tab.current == 2">
        <el-table id="table" :data="recordCN" style="width: 100%" height="70vh" ref="tableref"
          :cell-style="{ 'text-align': 'center' }" :header-cell-style="{ 'background': '#171717' }">
          <el-table-column prop="id" label="档期" align="center"> </el-table-column>
          <el-table-column prop="name" label="先祖" align="center" width="200">
            <template #default="scope">
              <p id="t2name" @click="sliteTab(3)">{{ scope.row.name }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="count" label="第几次复刻" align="center"> </el-table-column>
          <el-table-column prop="leave" label="距离上次复刻" align="center" width="180" > </el-table-column>
          <el-table-column prop="season" label="季节" align="center" > </el-table-column>
          <el-table-column prop="map" label="地图" align="center" > </el-table-column>        
        </el-table>
      </div>
      <div class="mytab" v-if="tab.current == 3" id="mytab3">
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
    <el-dialog :width="400" :showClose="false" v-model="visible" v-if="visible" id="dialog1">
      <div id="result">预测完成</div>
      <el-button type="primary" @click="close(1)" id="elbtn1">确认</el-button>
    </el-dialog>
    <el-dialog :width="400" :showClose="false" v-model.lazy="visible2" v-if="visible2" :close-on-click-modal="false"
      id="dialog2">
      <evan-rotateloading id="loading"></evan-rotateloading>
      <div id="text">{{ dialog2 }}</div>
    </el-dialog>
    <el-dialog title="调整源参数的权重" :width="400" :showClose="false" v-model.lazy="visible3" :close-on-click-modal="false"
      v-if="visible3" id="dialog3">
      <div id="dog3remark">调整后请点击一下训练，即使是把参数都调回1</div>
      <div v-for="(item, index) in ratios" :key="index">
        <span style="font-family:YouYuan;">{{ item.name }}</span>
        <el-slider v-model="item.ratio" :step="1" max="10" :disabled="index == 0"></el-slider>
      </div>
      <el-button type="primary" @click="close(3)" id="elbtn1">确认</el-button>
    </el-dialog>
  </div>
</template>
<script lang="js">
import * as tf from "@tensorflow/tfjs";
import { string } from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
import evanRotateloading from "../components/likeit/evan-rotateloading";
import evanTabsVue from "@/components/likeit/evan-tabs.vue";
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let arr1 = [], arr2 = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].result > arr[0].result) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr1 = quickSort(arr1);
  arr2 = quickSort(arr2);
  arr1.push(arr[0]);
  return arr1.concat(arr2)
}

async function init() {
  const inputs = tf.tensor(data.map((p) => [p.f1, p.f2, p.f3, p.f4, p.f5, p.f6, p.f7, p.f8]));
  const labels = tf.tensor(data.map((p) => p.target));
  modelTmp.fit(inputs, labels, {
    batchSize: 50,
    epochs: 20,
    callbacks: tfvis.show.fitCallbacks({ name: "训练效果" }, ["loss"]),
  });
  model = await tf.loadLayersModel('skypre-model.json');
}

let xwidth = window.screen.width;
document.documentElement.style.setProperty("--screenWidth", xwidth + "px");

let model;
// eslint-disable-next-line @typescript-eslint/no-var-requires
let data = require("../assets/data/history.json");
// eslint-disable-next-line @typescript-eslint/no-var-requires
let ancestors = Array;
// eslint-disable-next-line @typescript-eslint/no-var-requires
let record = require("../assets/data/record.json");
// eslint-disable-next-line @typescript-eslint/no-var-requires
ancestors = require("../assets/data/ancestor.json");
// console.log(ancestors.find(o => o.id === 1));
const modelTmp = tf.sequential();
modelTmp.add(
  tf.layers.dense({
    units: 1,
    inputShape: [8],
    activation: "sigmoid",
  })
);
modelTmp.compile({
  loss: tf.losses.logLoss,
  optimizer: tf.train.adam(0.1),
});
tfvis.show.fitCallbacks({ name: "训练效果" }, ["loss"]);
init();
export default {
  name: "skypre",
  components: { evanRotateloading, evanTabsVue },
  data() {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      pre: {
        p1: Number,
        p2: Number,
        p3: Number,
        p4: Number,
        p5: Number,
        p6: Number,
        p7: Number,
        p8: Number,
      },
      ratios: [
        { name: "下期复刻档数(锁定1作为基准)", ratio: 1 },
        { name: "先祖序号", ratio: 1 },
        { name: "多久没复刻了", ratio: 1 },
        { name: "所属季节", ratio: 1 },
        { name: "所在地图(六大地图)", ratio: 1 },
        { name: "先祖热度", ratio: 1 },
        { name: "是否受政治等特殊因素影响", ratio: 1 },
        { name: "已经复刻几次了", ratio: 1 },
      ],
      maps: [
        { id: 1, name: '晨岛' },
        { id: 2, name: '云野' },
        { id: 3, name: '雨林' },
        { id: 4, name: '霞谷' },
        { id: 5, name: '墓土' },
        { id: 6, name: '禁阁' },
      ],
      tab: {
        current: 2,
        currentName: '历史复刻'
      },
      dialog2: '',
      result: [],
      recordCN: []
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mounted() {
    let rds = [];
    for (let element of record) {
      let a = ancestors.filter(o => o.id === element.f2)[0];
      //console.log(a);
      let rd = {
      id: Number,
      name: string,
      leave: string,
      season: string,
      map: string,
      count: Number
    };
        rd.id = element.f1;
        rd.name = a.name;
        let leave;
        if(element.f3 != -1){
          leave = element.f3;
        }else {
          leave = '未曾复刻';
        }
        rd.leave = leave;
        rd.season = a.seasonname;
        rd.map = this.maps[a.mapid-1].name;
        rd.count = element.f8;
        rds.push(rd);
    }
    this.recordCN = rds;
    // console.log(this.recordCN);
  },
  watch: {
    'tab.current': {
      handler(newVal){
        if(newVal==1){
          this.tab.currentName = "预测结果";
        }else if(newVal==2){
          this.tab.currentName = "历史复刻";
        }else {
          this.tab.currentName = "先祖图鉴";
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    async train() {
      this.dialog2 = "正在训练中请稍后..."
      this.visible2 = true;
      model = null;
      let isChangeRatio = false;
      for (let element of this.ratios) {
        if(element.ratio != 1){
          isChangeRatio = true;
          break;
        }
      }
      if (isChangeRatio) {  //这代表参数改了，使用临时训练的新模型
          const inputs = tf.tensor(data.map((p) => [p.f1, p.f2, p.f3, p.f4, p.f5, p.f6, p.f7, p.f8]));
          const labels = tf.tensor(data.map((p) => p.target));
          await modelTmp.fit(inputs, labels, {
            batchSize: 50,
            epochs: 20,
            callbacks: tfvis.show.fitCallbacks({ name: "训练效果" }, ["loss"]),
          });
          model = modelTmp;
        } else {
          model = await tf.loadLayersModel('skypre-model.json');
        }
      //   alert("visible: " + this.visible);
      this.visible2 = false
    },
    adjust() {
      this.visible3 = true;
    },
    async predict() {
      //   alert("visible: " + this.visible);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      this.dialog2 = "正在预测中请稍后..."
      this.visible2 = true;
      setTimeout(this.premain, 5000);
    },
    async premain(){
        this.pre.p1 = record.length;
        let result = [];
        let ancestorNum = ancestors.length;
        for (let i = 0; i < ancestorNum; i++) {
          //console.log('--------------------')
          //console.log('id: ' + ancestors[i].id + ' name: ' + ancestors[i].name);
          let rds = record.filter(o => o.f2 === i + 1);
          let retro = rds.length;
          //console.log("复刻次数: " + retro)

          this.pre.p2 = ancestors[i].id
          if (retro != 0) {
            this.pre.p3 = this.pre.p1 - rds[rds.length - 1].f1
          } else {
            this.pre.p3 = -1
          }
          this.pre.p4 = ancestors[i].seasonid
          this.pre.p5 = ancestors[i].mapid
          this.pre.p6 = ancestors[i].hotscore
          this.pre.p7 = 0
          this.pre.p8 = ancestors[i].retro + 1

          let preInputs = tf.tensor([[
            this.pre.p1 * this.ratios[0].ratio,
            this.pre.p2 * this.ratios[1].ratio,
            this.pre.p3 * this.ratios[2].ratio,
            this.pre.p4 * this.ratios[3].ratio,
            this.pre.p5 * this.ratios[4].ratio,
            this.pre.p6 * this.ratios[5].ratio,
            this.pre.p7 * this.ratios[6].ratio,
            this.pre.p8 * this.ratios[7].ratio
          ]]);
          let pred = await model.predict(preInputs).dataSync()[0].toFixed(8);
          this.visible2 = false;
          let pre_rs = {
            rank: Number,
            id: Number,
            name: string,
            result: Number,
            season: string,
            map: string,
            hot: Number,
            retro: Number
          }
          pre_rs.id = ancestors[i].id
          pre_rs.name = ancestors[i].name
          pre_rs.result = pred
          pre_rs.season = ancestors[i].seasonname
          pre_rs.map = this.maps[ancestors[i].mapid-1].name
          pre_rs.hot = ancestors[i].hotscore
          pre_rs.retro = ancestors[i].retro
          result.push(pre_rs);
          // console.log(pre_rs);
        }
        result = quickSort(result);
        for(let j = 0 ; j < result.length ; j++){
          result[j].rank = j + 1;
        }
        // console.log('JS快排后');
        this.result = result;
        await this.$nextTick(async () => {
          await this.$refs.tableref.doLayout()
        })
        this.visible = true;
        //console.log(result);
        //let pred = model.predict(tf.tensor([[this.pre.p1 * 1, this.pre.p2 * 1, this.pre.p3 * 1, this.pre.p4 * 1, this.pre.p5 * 1, this.pre.p6 * 1, this.pre.p7 * 1, this.pre.p8 * 1]])).dataSync()[0];
        //this.result = pred;
       },
    save() {
      model.save('downloads://skypre-model');
    },
    close(id) {
      if (id == 1) {
        this.visible = false;
      } else if (id == 3) {
        this.visible3 = false;
      }
    },
    sliteTab(tab) {
      this.tab.current = tab;
    },
    switchSeason(name) {
      alert(name);
    }
  }
}
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
  .css-q2ki5z,
  [data-css-q2ki5z] {
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

.css-1x8bgru:hover {
  cursor: pointer;
}

.css-omocl {
  display: none;
}

#loading {
  position: relative;
  left: 120px;
  bottom: 20px;
}

#tfjs-visor-container
  > div
  > div.css-mmb2gq.visor-controls
  > button.css-1x8bgru.css-omocl {
  display: none;
}

// .css-q2ki5z {
//   right: unset;
//   top: 500px;
// }

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

:root {
  --screenWidth: 500px;
}
.info {
  position: absolute;
  z-index: 999;
  top: 50px;
  left: calc((var(--screenWidth) - 550px) / 2 - 185px - 20px);
  @media screen and (max-width: 1000px) {
    left: calc(var(--screenWidth) / 2 - 185px - 20px);
  }
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
