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
};
</script>
<style lang="css" scoped>
</style>
