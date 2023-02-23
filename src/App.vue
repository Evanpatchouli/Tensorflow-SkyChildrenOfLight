<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> | -->
    <router-link to="/about">关于</router-link> |
    <router-link to="/skypre">光遇·复刻档案馆</router-link> |
    <router-link to="/tensorflow">tensorflow</router-link>
    <!-- <router-link to="/test">test</router-link> -->
  </div>
  <router-view />
</template>

<style lang="scss">
#nav {
  padding: 30px;
  background: #171717;

  a {
    font-family: CTLiShuSF;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
