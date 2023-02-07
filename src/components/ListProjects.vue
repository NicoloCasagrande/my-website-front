<template>
  <section class="dark">
    <h2 class="text-center pt-4">LISTA PROGETTI</h2>
    <div class="row">
      <CardProject v-for="project in projects" :data="project" />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import CardProject from "./CardProject.vue";

export default {
  name: "ListProjects",
  components: {
    CardProject,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      this.projects = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.dark {
  background: #110f16;
}
h2 {
  color: white;
}
</style>
