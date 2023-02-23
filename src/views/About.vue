<template>
  <div class="about">
    <h1>{{ app_name }}</h1>
    <h1>{{ title }}</h1>
    <img alt="gitee挂件" :src="URL" style="width: 90%" />
    <button @click="doML()" class="btnDoML" v-if="false">
      machine learning
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as tf from "@tensorflow/tfjs";

export default defineComponent({
  setup() {
    const app_name = "光遇复刻档案馆";
    const URL =
      "https://gitee.com/jun-laner/tensorflow-skypre/widgets/widget_card.svg?colors=eae9d7,000000,272822,484a45,eae9d7,747571";
    const title = "AI预测复刻 结果仅供娱乐";
    function doML() {
      const model = tf.sequential();
      model.add(
        tf.layers.dense({ units: 100, activation: "relu", inputShape: [10] })
      );
      model.add(tf.layers.dense({ units: 1, activation: "linear" }));
      model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

      const xs = tf.randomNormal([100, 10]);
      const ys = tf.randomNormal([100, 1]);

      model.fit(xs, ys, {
        epochs: 100,
        callbacks: {
          onEpochEnd: (epoch, log) =>
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            console.log(`Epoch ${epoch}: loss = ${log!.loss}`),
        },
      });
    }

    return {
      app_name,
      title,
      URL,
      doML,
    };
  },
});
</script>
<style lang="scss" scoped>
.btnDoML:hover {
  cursor: pointer;
}
* {
  background: #171717;
}
.about {
  height: 89vh;
}
</style>
