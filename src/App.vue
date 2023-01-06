<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/about">About</router-link> |
    <router-link to="/">Tensorflow.js-光遇复刻预测</router-link> |
    <router-link to="/DEMO1">tfjs-basic</router-link>
    <!-- |
    <router-link to="/DEMO2">线性</router-link> |
    <router-link to="/DEMO3">逻辑</router-link> |
     -->
    <!-- <router-link to="/test">test</router-link> -->
  </div>
  <router-view />
</template>

<style lang="scss">
#nav {
  padding: 30px;
  background: #171717;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
