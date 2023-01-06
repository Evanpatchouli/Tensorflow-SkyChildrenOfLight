<!-- eslint-disable prettier/prettier -->
<template>
  <div class="main">
    <h2>线性回归</h2>
    <div class="trainBox">
      <el-button @click="train">训练</el-button>
      <el-input type="number" 
      size="5" 
      v-model.number="numx"
      placeholder="请输入数字">
      </el-input><el-button @click="predict()">预测</el-button>
    </div>
    <el-dialog 
    :width="400"
    :showClose="false"
    v-model="visible"> 
      <div id="result">预测结果：{{ result }}</div>
      <el-button type="primary" @click="close" id="elbtn1">确认</el-button>
    </el-dialog>
    <el-dialog
    :width="400"
    :showClose="false"
    v-model="visible2"
    :close-on-click-modal="false">
      <div>正在训练中请稍后</div>
    </el-dialog>
  </div>
</template>
// eslint-disable-next-line prettier/prettier
<script lang="js">
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";
const xs = [1, 3, 4];
const ys = [1, 5, 7];
tfvis.render.scatterplot(
  { name: "线性回归训练集" },
  { values: xs.map((x, i) => ({ x, y: ys[i] })) },
  { xAxisDomain: [0, 8], yAxisDomain: [0, 10] }
);

const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({
  loss: tf.losses.meanSquaredError,
  optimizer: tf.train.sgd(0.1),
});
export default {
  name: "demo2",
  data() {
    return {
      visible: false,
      visible2: false,
      numx: Number,
      result: 0
    };
  },
  methods: {
    async train() {
      this.visible2 = true;
      const inputs = tf.tensor(xs);
      const labels = tf.tensor(ys);
      await model.fit(inputs, labels, {
        batchSize: 3,
        epochs: 100,
        callbacks: tfvis.show.fitCallbacks({ name: "训练过程" }, ["loss"]),
      });
      this.visible2 = false;
    },
    predict() {
      console.log(this.numx);
      let output = model.predict(tf.tensor([this.numx]));
      this.result = Math.round(output.dataSync()[0]);
      this.visible = true;
    },
    close() {
      this.visible = false;
    }
  },
};
</script>

<style>
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
</style>
