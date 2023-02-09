<script>
import ListProjects from "../components/ListProjects.vue";
import AppHero from "../components/AppHero.vue";
export default {
  name: "HomePage",
  components: {
    ListProjects,
    AppHero,
  },
};
</script>

<template>
  <AppHero />
  <ListProjects />
</template>

<style lang="scss" scoped></style>
