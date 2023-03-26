<template>
  <div class="gallery__img-holder">
    <img :src="img" class="img-holder" @click="$emit('imgClick', $event)" />
  </div>
</template>
<script>
export default {
  props: {
    img: String,
    index: Number,
  },
};
</script>
