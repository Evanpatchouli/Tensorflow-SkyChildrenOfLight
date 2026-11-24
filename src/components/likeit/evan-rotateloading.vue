<template>
  <div class="container" :style="{ '--color': `#${colorx}`, '--side': `${side}px`, '--radius': `${radius}px` }">
    <div class="loader">
      <span v-for="index in 20" :key="index" :style="{ '--i': index }"></span>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: "evanRotateloading" });

const { colorx = "5656e3", side = 120, radius = 5 } = defineProps<{
  colorx?: string;
  side?: number;
  radius?: number;
}>();
</script>
<style scoped>
.container {
  width: var(--side);
  height: var(--side);
}
.container .loader {
  position: relative;
  width: 100%;
  height: 100%;
}
.container .loader span {
  position: absolute;
  top: calc(var(--radius) * 4);
  left: calc(var(--radius) * 4);
  width: calc(var(--side) - var(--radius) * 8);
  height: calc(var(--side) - var(--radius) * 8);
  transform: rotate(calc(18deg * var(--i)));
}
.container .loader span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: calc(var(--radius) * 2);
  height: calc(var(--radius) * 2);
  background: var(--color);
  border-radius: 50%;
  animation: animate 2s linear infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes animate {
  0% {
    transform: scale(1);
  }
  80%,
  100% {
    transform: scale(0);
  }
}
</style>
