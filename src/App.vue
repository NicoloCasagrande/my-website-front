<script>
import AppFooter from "./components/sections/AppFooter.vue";
import AppHeader from "./components/sections/AppHeader.vue";
import AppMain from "./components/sections/AppMain.vue";

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
