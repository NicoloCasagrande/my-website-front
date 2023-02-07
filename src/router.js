import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ContactMe from "./pages/ContactMe.vue";
import AboutMe from "./pages/AboutMe.vue";

const router = createRouter({
  history: createWebHistory,
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/about-me",
      name: "about-me",
      component: AboutMe,
    },
    {
      path: "/contact-me",
      name: "contact-me",
      component: ContactMe,
    },
  ],
});

export { router };
