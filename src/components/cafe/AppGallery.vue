<template>
  <ul class="gallery__holder">
    <GalleryImg v-for="image in gallery" :key="image" :img="image" />
  </ul>
</template>
<script>
import GalleryImg from "../cafe/GalleryImg.vue";

export default {
  components: { GalleryImg },
  props: { gallery: Array },
  created() {
    console.log(this.gallery);
    console.log(document.querySelectorAll(".gallery__holder"));
  },
  mounted() {
    console.log(document.querySelectorAll(".gallery__holder"));
  },
};
</script>
<style lang="css" scoped></style>
