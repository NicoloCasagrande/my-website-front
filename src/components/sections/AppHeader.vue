<script>
import AppLogo from "../AppLogo.vue";
export default {
  name: "AppHeader",
  components: {
    AppLogo,
  },
};
</script>

<template>
  <header class="bg-light py-3">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"
            ><img
              width="80"
              src="../assets/—Pngtree—modern abstract 3d logo_4092287.png"
              alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <router-link :to="{ name: 'homepage' }"><AppLogo /></router-link>
            <ul class="navbar-nav">
              <li class="nav-item"></li>
              <li class="nav-item">
                <router-link
                  class="nav-link text-dark fw-semibold fs-6 fst-italic"
                  :to="{ name: 'about-me' }"
                  >CHI SONO</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link text-dark fw-semibold fst-italic"
                  :to="{ name: 'contact-me' }"
                  >CONTATTAMI</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  z-index: 100;
}
</style>
