<template>
  <div class="gallery__img-holder">
    <img :src="imgSrc" class="img-holder" />
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: String,
  },
};
</script>
