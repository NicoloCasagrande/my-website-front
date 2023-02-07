<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppMain,
    AppFooter,
    AppHeader,
  },
};
</script>

<template>
  <AppHeader class="position-sticky top-0 end-0 start-0" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@import "./style/global.scss";
</style>
