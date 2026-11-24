import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/skypre",
    component: () => import("../views/skypre.vue"),
    children: [
      {
        path: "",
        name: "skypre",
        component: () => import("../views/RetroHistory.vue"),
      },
      {
        path: "prediction",
        name: "skypre-prediction",
        component: () => import("../views/RetroPrediction.vue"),
      },
      {
        path: "experiment",
        name: "skypre-experiment",
        component: () => import("../views/RetroExperiment.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/tensorflow",
    name: "tensorflow",
    component: () => import("../views/Tensor.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/test.vue"),
  },
  {
    path: "/likeit/rotateload",
    name: "rotateload",
    component: () => import("../components/likeit/evan-rotateloading.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
