<script>
import AppLogoFooter from "../AppLogoFooter.vue";
export default {
  name: "AppFooter",
  components: {
    AppLogoFooter,
  },
};
</script>

<template>
  <footer class="bg-dark">
    <div class="container py-3">
      <div class="row">
        <div class="col-5 d-flex flex-column">
          <router-link :to="{ name: 'homepage' }"
            ><AppLogoFooter class="footer-logo"
          /></router-link>
          <span class="mt-3"
            >Sviluppatore Full Stack per la realizzazione dei tuoi siti
            Web.</span
          >
        </div>
        <div class="col-3">
          <ul class="list-style-none d-flex flex-column justify-content-around">
            <li>Chi sono</li>
            <li>Progetti</li>
            <li>Contattami</li>
          </ul>
        </div>
        <div
          class="col-4 text-center d-flex flex-column justify-content-around"
        >
          <span class="fw-bold">SEGUIMI</span>
          <div class="text-center">
            <i class="fa-brands fa-square-twitter me-3"></i>
            <i class="fa-brands fa-square-facebook me-3"></i>
            <i class="fa-brands fa-linkedin me-3"></i>
            <i class="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: white;
  font-size: 0.875rem;
  .footer-logo {
    margin-left: -3.75rem;
  }
  ul {
    list-style: none;
    height: 100%;
  }
  i {
    color: white;
    font-size: x-large;
  }
}
</style>
