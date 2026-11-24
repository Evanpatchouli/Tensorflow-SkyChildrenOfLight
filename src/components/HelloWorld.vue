<template>
  <div class="hello">
    <p id="appname">光遇·复刻档案馆</p>
    <p id="start" @click="start">Start</p>
    <div class="pan">
      <div class="kid">
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season1_x.webp"
        />
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season7_x.webp"
        />
      </div>
      <div class="kid">
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season2_x.webp"
        />
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season8_x.webp"
        />
      </div>
      <div class="kid">
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season3_x.webp"
        />
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season9_x.webp"
        />
      </div>
      <div class="kid">
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season4_x.webp"
        />
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season10_x.webp"
        />
      </div>
      <div class="kid">
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season5_x.webp"
        />
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season11_x.webp"
        />
      </div>
      <div class="kid">
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season6_x.webp"
        />
        <img
          class="seasonIcon"
          alt="seasonIcon"
          src="../assets/img/icon/season12_x.webp"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function start(): void {
  void router.push("/skypre");
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#appname {
  background: black;
  position: relative;
  margin: auto;
  top: 80px;
  padding: 0;
  color: #ffd700;
  font-size: 2rem;
  font-family: var(--font-lishu);
}

#start {
  z-index: 10000;
  background: black;
  position: relative;
  margin: auto;
  width: fit-content;
  font-size: 2rem;
  font-weight: bolder;
  color: #ffd700;
  top: 260px;
  transition: all 1s ease;

  &:hover {
    cursor: pointer;
    scale: 1.5;
  }
}

.pan {
  // background: aqua;
  width: 300px;
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
    pointer-events: none;
    // background: yellowgreen;
    width: 300px;
    height: 100px;
    left: 0px;
    top: 200px;

    > .seasonIcon {
      width: 60px;
      height: 60px;
      object-fit: contain;
      position: absolute;
      pointer-events: auto;
      padding: 10px;
      top: 17.5px;
      transform: rotate(-90deg);
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
.seasonIcon {
  transition: all 1s ease(0.1, 0.4, 0.4, 0.1);
}
</style>
