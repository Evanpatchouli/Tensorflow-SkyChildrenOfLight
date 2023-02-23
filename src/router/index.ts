import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import skypre from "../views/skypre.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // redirect: "/skypre",
  },
  {
    path: "/skypre",
    name: "skypre",
    component: skypre,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
    path: "/skypre",
    name: "skypre",
    component: () => import("../views/skypre.vue"),
  },
  {
    path: "/likeit/rotateload",
    name: "rotateload",
    component: () => import("../components/likeit/evan-rotateloading.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
