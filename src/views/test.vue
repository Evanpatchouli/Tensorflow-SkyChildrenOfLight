<template>
  <div @click="test" id="test">测试</div>
  <div class="pan">
    <div class="kid">
      <img
        class="seasonIcon"
        alt="seasonIcon"
        src="../components/likeit/img/icon/season1_x.png"
        style="width: 100px; height: 100px"
      />
      <img
        class="seasonIcon"
        alt="seasonIcon"
        src="../components/likeit/img/icon/season5_x.png"
        style="width: 100px; height: 100px"
      />
    </div>
    <div class="kid">
      <img
        class="seasonIcon"
        alt="seasonIcon"
        src="../components/likeit/img/icon/season2_x.png"
        style="width: 100px; height: 100px"
      />
      <img
        class="seasonIcon"
        alt="seasonIcon"
        src="../components/likeit/img/icon/season6_x.png"
        style="width: 100px; height: 100px"
      />
    </div>
    <div class="kid">
      <img
        class="seasonIcon"
        alt="seasonIcon"
        src="../components/likeit/img/icon/season3_x.png"
        style="width: 100px; height: 100px"
      />
      <img
        class="seasonIcon"
        alt="seasonIcon"
        src="../components/likeit/img/icon/season7_x.png"
        style="width: 100px; height: 100px"
      />
    </div>
    <div class="kid">
      <img
        class="seasonIcon"
        alt="seasonIcon"
        src="../components/likeit/img/icon/season4_x.png"
        style="width: 100px; height: 100px"
      />
      <img
        class="seasonIcon"
        alt="seasonIcon"
        src="../components/likeit/img/icon/season8_x.png"
        style="width: 100px; height: 100px"
      />
    </div>
  </div>
  <!-- <evan-tabs v-model:current="tab.current"></evan-tabs>
  <evan-rotateloading id="loading"></evan-rotateloading>
  <evan-tabs-vue
    v-model:current="current"
    @click="handleClick"
    v-if="false"
  ></evan-tabs-vue> -->
</template>
<style lang="scss" scoped>
.pan {
  --sacleXX: 1;
}
.pan {
  scale: var(--sacleXX);
  background: aqua;
  width: 600px;
  height: 600px;
  position: absolute;
  top: 0px;
  padding: 0;
  overflow: hidden;

  > .kid {
    margin: 0;
    padding: 0;
    text-align: left;
    position: absolute;
    background: yellowgreen;
    width: 600px;
    height: 100px;
    left: 0px;
    top: 250px;

    > .seasonIcon {
      transform: rotate(-90deg);
      transition: all 0.5s ease;
      &:hover {
        cursor: pointer;
        scale: 1.5;
      }
      &:active {
        scale: 1.2;
      }
      &:visited {
        scale: 0.8;
      }
    }

    :nth-child(2) {
      float: right;
      transform: rotate(90deg);
    }
  }
  :nth-child(1) {
    transform: rotate(0deg);
  }
  :nth-child(2) {
    transform: rotate(45deg);
  }
  :nth-child(3) {
    transform: rotate(90deg);
  }
  :nth-child(4) {
    transform: rotate(135deg);
  }
}
</style>
<script>
import evanTabsVue from "@/components/likeit/evan-tabs.vue";
import evanRotateloading from "../components/likeit/evan-rotateloading";
export default {
  components: { evanTabsVue, evanRotateloading },
  name: "test",
  data() {
    return {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      ancestor: require("../assets/data/ancestor.json"),
      current: 1,
    };
  },
  methods: {
    test() {
      console.log(this.ancestor[0]);
    },
    handleClick() {
      alert(this.current);
    },
  },
};
</script>

<style lang="scss" scoped>
#test {
  background: azure;

  &:hover {
    cursor: pointer;
  }
}
</style>
