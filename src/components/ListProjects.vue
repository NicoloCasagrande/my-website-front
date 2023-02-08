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
import { store } from "../store";

export default {
  name: "ListProjects",
  components: {
    CardProject,
  },
  data() {
    return {
      store,
      projects: [],
    };
  },
  created() {
    axios.get(`${this.store.api_url}/projects`).then((response) => {
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

.ms-row {
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
</style>
