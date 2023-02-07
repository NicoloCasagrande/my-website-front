import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import ContactMe from "./pages/ContactMe.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/chi-sono",
      name: "about-me",
      component: AboutMe,
    },
    {
      path: "/contattami",
      name: "contact-me",
      component: ContactMe,
    },
  ],
});

export default router;
