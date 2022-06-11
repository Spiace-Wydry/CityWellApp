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
    {
      path: "/powiadomienia-krakow",
      name: "powiadomienia",
      component: () => import("../features/PowiadomieniaKrakow.vue"),
    },
    {
      path: "/zgloszenie-krakow",
      name: "zgloszenie",
      component: () => import("../features/ZgloszenieKrakow.vue"),
    },
    {
      path: "/krakow-bagry",
      name: "krakowBagry",
      component: () => import("../features/KrakowBagry.vue"),
    },
  ],
});

export default router;
