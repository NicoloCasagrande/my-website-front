<script>
import ListProjects from "./ListProjects.vue";

export default {
  name: "AppMain",
  components: {
    ListProjects,
  },
};
</script>

<template>
  <main>
    <div class="container">
      <ListProjects />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
