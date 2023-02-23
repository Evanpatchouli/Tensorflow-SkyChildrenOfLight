<template>
  <div class="evan-tabs-main">
    <div
      class="urltip"
      v-for="(item, index) in tabs"
      :key="index"
      @click="handleClick(item.id)"
    >
      <div>
        <a href="#">{{ item.text }}</a>
      </div>
      <div><img alt="icon" src="@/assets/img/icon/TechCircle.svg" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "evan-tabs",
  props: {
    current: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      itself: {
        current: this.current,
      },
      tabs: [
        { id: 1, text: "预测结果" },
        { id: 2, text: "历史复刻" },
        { id: 3, text: "先祖图鉴" },
      ],
    };
  },
  methods: {
    handleClick(val) {
      this.itself.current = val;
      // alert("this.itself.current: " + this.itself.current);
      this.send();
    },
    send() {
      this.$emit("update:current", this.itself.current);
    },
  },
  //   watch: {
  //     deep: true,
  //     "itself.current": {
  //       handler() {
  //         // alert("this.itself.current: " + this.itself.current);
  //         this.send();
  //       },
  //     },
  //   },
};
</script>

<style lang="scss">
.evan-tabs-main {
  height: 30.6vh;
}
.urltip {
  position: relative;
  margin: 0;
  padding: 0;
  right: 0;
  top: 1rem;
}

.urltip div {
  float: left;
  height: 8vh;
  width: 100px;
  background-color: black;
  text-align: center;
  line-height: 8vh;
  margin-bottom: 1vh;
  overflow: hidden;
}

.urltip a {
  color: white;
  font-size: 1.2rem;
  font-family: "Georgia", Tahoma, Sans-Serif;
  font-weight: bolder;
  text-decoration-line: none;
}

.urltip img {
  position: absolute;
  width: 9.4vh;
  height: 9.4vh;
  margin: auto;
  top: 0;
  bottom: 0;
  right: -20%;
  animation: spin_inactive 5s ease-in-out infinite;
}

.urltip div:nth-child(even) {
  width: 50px;
  position: relative;
  border-radius: 0 4vh 4vh 0;
  clear: right;
}
.urltip div:nth-child(odd) {
  clear: left;
}

.urltip:hover {
  right: -100px;
  transition: all 0.5s ease-out;
  cursor: pointer;
  > div > img {
    animation: spin_active 1s linear infinite;
  }
}

div {
  transition: all 1s ease-in-out;
}

@keyframes spin_inactive {
  0% {
    transform: rotate(0deg);
  }

  30% {
    transform: rotate(-40deg);
  }

  40% {
    transform: rotate(-45deg);
  }

  50% {
    transform: rotate(45deg);
  }

  80% {
    transform: rotate(40deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
@keyframes spin_active {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
