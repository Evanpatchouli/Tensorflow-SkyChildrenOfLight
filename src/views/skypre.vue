<!-- eslint-disable prettier/prettier -->
<template>
  <div class="main">
    <div class="trainBox">
      <el-button @click="train" type="primary">训练</el-button>
      <el-button @click="adjust()" type="warning">调参</el-button>
      <el-button @click="predict()" type="success">预测</el-button>
      <el-button @click="save()" type="danger" v-if="false">保存</el-button>
    </div>
    <evan-tabs-vue v-model:current="tab.current" @click="sliteTab" id="tabTool"></evan-tabs-vue>
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
          <el-table-column prop="name" label="先祖" align="center" width="200"> </el-table-column>
          <el-table-column prop="leave" label="距离上次复刻" align="center" width="180"> </el-table-column>
          <el-table-column prop="season" label="季节" align="center"> </el-table-column>
          <el-table-column prop="map" label="地图" align="center"> </el-table-column>
          <el-table-column prop="count" label="第几次复刻" align="center"> </el-table-column>
        </el-table>
      </div>
      <div class="mytab" v-if="tab.current == 3" id="mytab3">
        <div>
          <div class="info" >
            <img alt="兑换树" src="../assets/img/ancestor/13.png" class="duihuanTree"  @touch-start="gtouchstart()" @touch-end="showDeleteButton()"/>
            <div><img alt="上一张" src="../components/likeit/img/icon/last.png" class="huantu"/>
              <img alt="下一张" src="../components/likeit/img/icon/next.png" class="huantu"/>
            </div>
          </div>
        </div>
        <div class="pan">
          <div class="kid">
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season1_x.png"
            />
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season7_x.png"
            />
          </div>
          <div class="kid">
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season2_x.png"
            />
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season8_x.png"
            />
          </div>
          <div class="kid">
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season3_x.png"
            />
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season9_x.png"
            />
          </div>
          <div class="kid">
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season4_x.png"
            />
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season10_x.png"
            />
          </div>
          <div class="kid">
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season5_x.png"
            />
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season11_x.png"
            />
          </div>
          <div class="kid">
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season6_x.png"
            />
            <img
              class="seasonIcon"
              alt="seasonIcon"
              src="../components/likeit/img/icon/season12_x.png"
            />
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
      <div>{{ dialog2 }}</div>
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

let timeOutEvent = null //定时器
let duihuanTreeScale = 1;
//长按事件设置定时器
let gtouchstart=()=>{
        console.log("click")
        timeOutEvent= setTimeout(()=>{
            longPress()
        },200)
    }
    //手释放，如果在200毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    let showDeleteButton=()=>{
      duihuanTreeScale =1;
        clearTimeout(timeOutEvent); //清除定时器
        if (timeOutEvent != 0) {
          duihuanTreeScale =1;
        }
        document.documentElement.style.setProperty("--dhTree", duihuanTreeScale);
        return false;
    }
//真正长按后应该执行的内容
    let longPress=()=> {
        timeOutEvent = 0
        duihuanTreeScale = 1.5;
        document.documentElement.style.setProperty("--dhTree", duihuanTreeScale);
        // alert("长按了")
    }

let model;
// eslint-disable-next-line @typescript-eslint/no-var-requires
let data = require("../assets/data/history.json");
// eslint-disable-next-line @typescript-eslint/no-var-requires
let ancestors = Array;
// eslint-disable-next-line @typescript-eslint/no-var-requires
let record = require("../assets/data/record.json");
// eslint-disable-next-line @typescript-eslint/no-var-requires
ancestors = require("../assets/data/ancestor.json");
console.log(ancestors.find(o => o.id === 1));
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
        current: 1,
      },
      dialog2: '',
      result: [],
      recordCN: []
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mounted() {
    let rds = [];
    for (let i = 0; i < record.length; i++) {
      let a = ancestors.filter(o => o.id === record[i].f2)[0];
      //console.log(a);
      let rd = {
      id: Number,
      name: string,
      leave: string,
      season: string,
      map: string,
      count: Number
    };
        rd.id = record[i].f1;
        rd.name = a.name;
        let leave;
        if(record[i].f3 != -1){
          leave = record[i].f3;
        }else {
          leave = '未曾复刻';
        }
        rd.leave = leave;
        rd.season = a.seasonname;
        rd.map = this.maps[a.mapid-1].name;
        rd.count = record[i].f8;
        rds.push(rd);
    }
    this.recordCN = rds;
    console.log(this.recordCN);
  },
  methods: {
    async train() {
      this.dialog2 = "正在训练中请稍后..."
      this.visible2 = true;
      model = null;
      let isChangeRatio = false;
      for (let i = 0; i < this.ratios.length; i++) {
        if(this.ratios[i].ratio != 1){
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
        let pred = model.predict(preInputs).dataSync()[0].toFixed(8);
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
        console.log(pre_rs);
      }
      result = quickSort(result);
      for(let j = 0 ; j < result.length ; j++){
        result[j].rank = j + 1;
      }
      // console.log('JS快排后');
      this.result = result;
      await this.$nextTick(() => {
        this.$refs.tableref.doLayout()
      })
      this.visible2 = false;
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
    sliteTab() {
      // alert(this.tab.current)
    },
  },
  watch: {
    visible: {
      // 此处监听variable变量，当期有变化时执行
      handler(item1, item2) {
        console.log("新: " + item1 + "旧: " + item2);
      }
    }
  }
}
</script>
<style lang="scss">
#dog3remark {
  font-size: small;
  color: rgb(193, 188, 188);
  margin-top: -5vh;
  margin-bottom: 1vh;
}
#result {
  margin-top: -30px;
}

#elbtn1 {
  margin-top: 15px;
}

.trainBox > * {
  display: inline;
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
  font-size: calc(2rem);
}

.el-table tbody tr td .cell {
  overflow: unset;
}
</style>
<style lang="scss" scoped>
// #table {
//   font-family: STHupo;
// }

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
  font-size: 2rem;
  font-family: STHupo, sans-serif;
  cursor: pointer;
  background-color: #2b2a2a;
}

.el-table .cell:hover .el-tag {
  color: white;
  font-size: 2rem;
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

// #tabs {
//   position: relative;
//   top: 0;
//   z-index: 1;
// }
#mytab3 {
  position: relative;
}
.seasonIcon {
  transition: all 0.5s ease;
}
</style>
<style lang="scss" scoped>
.pan {
  // background: aqua;
  width: 600px;
  height: 600px;
  position: relative;
  margin: auto;
  top: 0px;
  padding: 0;
  overflow: visible;

  :root {
    --panAngle: 90deg;
  }
  > .kid {
    margin: 0;
    padding: 0;
    text-align: left;
    position: absolute;
    // background: yellowgreen;
    width: 600px;
    height: 100px;
    left: 0px;
    top: 250px;

    > .seasonIcon {
      width: 70px;
      height: 70px;
      position: absolute;
      padding: 10px;
      top: 17.5px;
      transform: rotate(-90deg);
      transition: all 0.3s ease(0.1, 0.4, 0.4, 0.1);
      &:hover {
        cursor: pointer;
        scale: 1.8;
      }
      &:active {
        scale: 1.4;
      }
    }

    :nth-child(2) {
      right: 0;
      transform: rotate(90deg);
    }
  }
  :nth-child(1) {
    transform: rotate(90deg);
  }
  :nth-child(2) {
    transform: rotate(120deg);
  }
  :nth-child(3) {
    transform: rotate(150deg);
  }
  :nth-child(4) {
    transform: rotate(180deg);
  }
  :nth-child(5) {
    transform: rotate(210deg);
  }
  :nth-child(6) {
    transform: rotate(240deg);
  }
}
:root {
  --screenWidth: 500px;
}
.info {
  position: absolute;
  z-index: 999;
  top: 175px;
  left: calc((var(--screenWidth) - 550px) / 2 - 185px - 20px);
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
      top: 70px;
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
