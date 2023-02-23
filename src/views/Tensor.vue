<template>
  <div class="main">
    <h1 v-if="false">DEMO1</h1>
    <h2>What is Tensorflow.js ?</h2>
    <p>
      TensorFlow.js是一个开源的基于硬件加速的JavaScript库，用于训练和部署机器学习模型。谷歌推出的第一个基于TensorFlow的前端深度学习框架TensorFlow.js
      是一个开源的用于开发机器学习项目的 WebGL-accelerated JavaScript 库。
    </p>
    <P>
      TensorFlow.js
      可以为你提供高性能的、易于使用的机器学习构建模块，允许你在浏览器上训练模型，或以推断模式运行预训练的模型。TensorFlow.js
      不仅可以提供低级的机器学习构建模块，还可以提供高级的类似 Keras 的 API
      来构建神经网络。
    </P>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style scoped>
.main {
  background: #171717;
  height: 89vh;
}
h2 {
  color: rgb(201, 211, 203);
}
p {
  text-indent: 2rem;
  text-align: left;

  margin-top: 0.5rem;
}
</style>
