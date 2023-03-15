<template>
  <div class="gallery__img-holder">
    <img :src="imageSrc" class="img-holder" />
  </div>
</template>
<script>
export default {
  props: {
    img: String,
    index: Number,
  },
  data() {
    return {
      imageSrc: null,
    };
  },
  methods: {
    async init() {
      const image = await import("../../assets/img" + this.img);
      this.imageSrc = image.default;
    },
  },
  created() {
    this.init();
  },
};
</script>
