import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CafeView from "../views/CafeView.vue";

const router = createRouter({
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/cities",
      name: "CitiesList",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CitiesList.vue"),
    },
    {
      path: "/cafes",
      name: "CafesList",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CafesList.vue"),
    },
    {
      path: "/franyk",
      name: "franyk",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    {
      path: "/lviv",
      name: "lviv",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    {
      path: "/kyiv",
      name: "kyiv",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    {
      path: "/cherkasy",
      name: "cherkasy",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    {
      path: "/odesa",
      name: "odesa",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CityView.vue"),
    },
    { path: "/cafes/:id", component: CafeView },
  ],
});

export default router;
