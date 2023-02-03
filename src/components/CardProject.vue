<template>
  <div class="col-12 d-flex">
    <div class="col-4 p-5 d-flex justify-content-center">
      <img
        width="150"
        v-if="data.image_url"
        :src="data.image_url"
        alt="{{ data.title }}"
      />
    </div>
    <div
      class="col-8 px-5 d-flex flex-column align-items-center justify-content-center"
    >
      <h4>{{ data.title }}</h4>
      <p>{{ data.content }}</p>
      <a href="">{{ data.preview_link }}</a>
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
