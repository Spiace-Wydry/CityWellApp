import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/krakow",
      name: "krakow",
      component: () => import("../features/wizard/KrakowPage.vue"),
    },
    {
      path: "/pogoda-krakow",
      name: "pogoda",
      component: () => import("../features/PogodaKrakow.vue"),
    },
  ],
});

export default router;
