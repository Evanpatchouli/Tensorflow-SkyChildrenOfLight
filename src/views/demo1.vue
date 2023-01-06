<template>
  <div class="main">
    <h1 v-if="false">DEMO1</h1>
    <p>
      Tensorflow，当前世界上最流行的深度学习引擎之一，利用神经网络训练以求数据背后的本质奥秘
    </p>
    <div class="case" v-if="false">
      <button id="demo1" @click="demo1()">二元方程式求解</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as tf from "@tensorflow/tfjs";
export default defineComponent({
  setup() {
    const shape = [2, 3]; // 可以看做是两行三列组成
    const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
    console.log("a↓ ");
    a.print();
    // Output: [[1 , 2 , 3 ],
    //          [10, 20, 30]]
    // The shape can also be inferred:
    console.log("b↓ ");
    const b = tf.tensor([
      [1.0, 2.0, 3.0],
      [10.0, 20.0, 30.0],
    ]);
    b.print();

    console.log("0阶张量（标量）↓ ");
    tf.scalar(3.14).print(); // 3.140000104904175， 默认dtype 是 float32
    tf.scalar(3.14, "float32").print(); // 3.140000104904175
    tf.scalar(3.14, "int32").print(); // 3
    tf.scalar(3.14, "bool").print(); // 1

    // 1阶张量
    console.log("1阶张量↓ ");
    tf.tensor1d([1, 2, 3]).print(); // [1, 2, 3]

    // 2阶张量
    console.log("2阶张量↓ ");
    // Pass a nested array.
    tf.tensor2d([
      [1, 2],
      [3, 4],
    ]).print();
    // Pass a flat array and specify a shape.
    tf.tensor2d([1, 2, 3, 4], [2, 2]).print();
    // ouput
    //    [[1, 2],
    //   [3, 4]]

    // 3阶张量
    // Pass a nested array.
    console.log("3阶张量↓ ");
    tf.tensor3d([
      [[1], [2]],
      [[3], [4]],
    ]).print();
    // Pass a flat array and specify a shape.
    tf.tensor3d([1, 2, 3, 4], [2, 2, 1]).print();
    // output
    //    [[[1],
    //      [2]],

    //     [[3],
    //      [4]]]

    // 4阶张量
    // Pass a nested array.
    console.log("4阶张量↓ ");
    tf.tensor4d([
      [
        [[1], [2]],
        [[3], [4]],
      ],
    ]).print();
    // Pass a flat array and specify a shape.
    tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]).print();
    // output
    //    [[[[1],
    //       [2]],

    //      [[3],
    //       [4]]]]

    // 3x5 Tensor with all values set to 0
    console.log("零张量↓ ");
    tf.zeros([3, 5]).print();
    // Output: [[0, 0, 0, 0, 0],
    //          [0, 0, 0, 0, 0],
    //          [0, 0, 0, 0, 0]]

    // 2X2 Tensor with all values set to 1
    console.log("元张量↓ ");
    tf.ones([2, 2]).print();
    // output
    //     [[1, 1],
    //     [1, 1]]

    console.log("variables和值分配↓ ");
    const initialValues = tf.zeros([5]);
    const biases = tf.variable(initialValues); // 初始化偏差（距离原点的截距或偏移）
    biases.print(); // output: [0, 0, 0, 0, 0]

    const updatedValues = tf.tensor1d([0, 1, 0, 1, 0]);
    biases.assign(updatedValues); // update values of biases
    biases.print(); // output: [0, 1, 0, 1, 0]

    console.log("Operations操作：tf提供的运算等↓ ");
    const x = tf.tensor1d([1, 2, Math.sqrt(2), -1]);
    tf.square(x).print(); // or x.square()
    // [1, 4, 1.9999999, 1]

    const x2 = tf.tensor1d([1, 2, 4, -1]);
    tf.sqrt(x2).print(); // or x2.sqrt()
    // [1, 1.4142135, 2, NaN]

    function 二元方程求解(input: number) {
      // y = a * x ^ 2 + b * x + c
      return tf.tidy(() => {
        let a = tf.scalar(2);
        let b = tf.scalar(4);
        let c = tf.scalar(8);
        let x = tf.scalar(input);

        let ax2 = a.mul(x.square());
        let bx = b.mul(x);
        let y = ax2.add(bx).add(c);

        return y;
      });
    }

    function demo1() {
      let result = 二元方程求解(2);
      alert(result);
    }

    return {
      a,
      b,
      demo1,
    };
  },
});
</script>
<style>
.main {
  background: #171717;
  height: 89vh;
}
</style>
