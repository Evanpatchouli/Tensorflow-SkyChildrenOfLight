<template>
  <div class="main">
    <h2>{{ title }}</h2>
    <div class="trainBox">
      <el-button @click="train">训练</el-button>
      <el-input
        type="number"
        size="5"
        v-model.number="numx"
        placeholder="请输入坐标X"
      >
      </el-input>
      <el-input
        type="number"
        size="5"
        v-model.number="numy"
        placeholder="请输入坐标y"
      >
      </el-input>
      <el-button @click="predict()">预测</el-button>
    </div>
    <el-dialog :width="400" :showClose="false" v-model.lazy="visible">
      <div id="result">预测结果：{{ result }}</div>
      <el-button type="primary" @click="close" id="elbtn1">确认</el-button>
    </el-dialog>
    <el-dialog
      :width="400"
      :showClose="false"
      v-model.lazy="visible2"
      :close-on-click-modal="false"
    >
      <div>正在训练中请稍后</div>
    </el-dialog>
  </div>
</template>
<script lang="js">
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

let model;
const data = [
    { label: 1, x: 1, y: 0 },
    { label: 1, x: 2, y: 0 },
    { label: 1, x: 3, y: 1 },
    { label: 1, x: 0, y: 2 },
    { label: 0, x: -1, y: 0 },
    { label: -1, x: 100, y: -1 },
];
tfvis.render.scatterplot(
    { name: "逻辑回归训练数据" },
    {
        values: [
            data.filter((p) => p.label === 1),
            data.filter((p) => p.label === 0),
        ],
    }
);
const modelTmp = tf.sequential();
modelTmp.add(
    tf.layers.dense({
        units: 1,
        inputShape: [2],
        activation: "sigmoid",
    })
);
modelTmp.compile({
    loss: tf.losses.logLoss,
    optimizer: tf.train.adam(0.1),
});
export default {
    data() {
        return {
            title: "逻辑回归",
            visible: false,
            visible2: false,
            numx: 0,
            numy: 0,
            result: 0
        }
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    methods: {
        async train() {
            this.visible2 = true;
            //   alert("visible: " + this.visible);
            const inputs = tf.tensor(data.map((p) => [p.x, p.y]));
            const labels = tf.tensor(data.map((p) => p.label));
            await modelTmp.fit(inputs, labels, {
                batchSize: 40,
                epochs: 20,
                callbacks: tfvis.show.fitCallbacks({ name: "训练效果" }, ["loss"]),
            });
            this.visible2 = false
            model = modelTmp;
        },

        predict() {
            //   alert("visible: " + this.visible);
            this.visible = true
            let pred = model.predict(tf.tensor([[this.numx * 1, this.numy * 1]])).dataSync()[0];
            this.result = pred;
        },

        close() {
            this.visible = false;
        }
    },
}
</script>
<style lang="scss" scoped>
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
