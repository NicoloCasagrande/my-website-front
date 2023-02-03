<template>
  <div class="col-12 d-flex">
    <div class="col-6 p-5">
      <img src="" alt="" />
      <h4>ciao</h4>
    </div>
    <div class="col-6 p-3">
      <h4>{{ data.title }}</h4>
      <p>{{ data.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.carousel-item {
  color: black;
}
</style>
