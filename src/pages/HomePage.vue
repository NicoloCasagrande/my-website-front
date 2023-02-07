<script>
import ListProjects from "../components/ListProjects.vue";
export default {
  name: "HomePage",
  components: {
    ListProjects,
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center my-4">HomePage</h1>
    <ListProjects />
  </div>
</template>

<style lang="scss" scoped></style>
