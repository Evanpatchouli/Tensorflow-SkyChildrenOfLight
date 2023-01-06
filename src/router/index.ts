import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";
import skypreVue from "../views/skypre.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: skypreVue,
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
    path: "/DEMO1",
    name: "DEMO1",
    component: () => import("../views/demo1.vue"),
  },
  {
    path: "/DEMO2",
    name: "DEMO2",
    component: () => import("../views/demo2.vue"),
  },
  {
    path: "/DEMO3",
    name: "DEMO3",
    component: () => import("../views/demo3.vue"),
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
