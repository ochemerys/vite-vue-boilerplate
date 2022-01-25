import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Boilerplate: Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./pages/about.vue"),
    meta: {
      title: "Boilerplate: About",
    },
  },
  // { path: '/hi/:name', name: 'Home', component: defineAsyncComponent(() => import('../pages/hi/[name].vue')), props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
