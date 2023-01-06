<template>
  <div class="container">
    <div class="loader" style="margin-right: 200px">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 7"></span>
      <span style="--i: 8"></span>
      <span style="--i: 9"></span>
      <span style="--i: 10"></span>
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 13"></span>
      <span style="--i: 14"></span>
      <span style="--i: 15"></span>
      <span style="--i: 16"></span>
      <span style="--i: 17"></span>
      <span style="--i: 18"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "evanRotateloading",
  props: {
    colorx: {
      type: String,
      default: "5656e3",
    },
    side: {
      type: Number,
      default: 120,
    },
    radius: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      itself: {
        color: this.colorx,
        side: this.side,
        radius: this.radius,
      },
    };
  },
  mounted() {
    console.log(this.itself.color);
    document.documentElement.style.setProperty(
      "--color",
      "#" + this.itself.color
    );
    document.documentElement.style.setProperty(
      "--side",
      this.itself.side + "px"
    );
    document.documentElement.style.setProperty(
      "--radius",
      this.itself.radius + "px"
    );
  },
};
</script>
<style>
:root {
  --side: 120px;
  --radius: 5px;
  --color: #5656e3;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: var(--side);
  height: var(--side);
}
.container .loader {
  /* border: black 1px solid; */
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
