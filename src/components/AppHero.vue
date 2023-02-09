<template>
  <div>
    <img src="../assets/hero.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "AppHero",
};
</script>

<style lang="scss" scoped>
img {
  height: 500px;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: bottom;
}
</style>
