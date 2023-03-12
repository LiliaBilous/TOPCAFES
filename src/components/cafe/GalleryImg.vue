<template>
  <li class="gallery__img-holder">
    <div>
      <img alt="img1" :src="imageSrc" class="gallery__img" />
    </div>
  </li>
</template>
<script>
export default {
  props: { img: String },
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
