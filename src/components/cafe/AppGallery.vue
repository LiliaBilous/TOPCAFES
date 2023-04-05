<template>
  <div id="gallery" class="gallery__holder">
    <GalleryImg
      v-for="(imageSrc, index) in imagesSrcArray"
      :key="imageSrc"
      :imgSrc="imageSrc"
      @click="openModal(imageSrc, index)"
    />
  </div>
  <div v-if="isModalVisible" class="modal">
    <span class="close cursor" @click="closeModal()">&times;</span>
    <div class="modal-content">
      <div class="mySlides">
        <div class="numbertext">{{ currentIndex + 1 }} / {{ imagesSrcArray.length }}</div>
        <img :src="currentUrl" />
      </div>
      <button class="prev" :disabled="currentIndex === 0" @click="changeSlide(-1)">
        &#10094;
      </button>
      <button
        class="next"
        :disabled="currentIndex === imagesSrcArray.length - 1"
        @click="changeSlide(1)"
      >
        &#10095;
      </button>
    </div>
  </div>
</template>
<script>
import GalleryImg from "../cafe/GalleryImg.vue";

export default {
  components: { GalleryImg },
  props: { gallery: Array, cityName: String, cafeName: String },
  data() {
    return {
      slideIndex: 1,
      isModalVisible: false,
      currentUrl: "",
      imagesSrcArray: [],
      currentIndex: null,
    };
  },
  methods: {
    async init() {
      for (const img of this.gallery) {
        try {
          const image = await import(
            `../../assets/img/${this.cityName}/${this.cafeName}/${img}.jpg`
          );
          this.imagesSrcArray.push(image.default);
        } catch (error) {
          console.error(error);
        }
      }
      // const arrayWithPromises = this.gallery.map(async (img) => {
      //   const image = await import(
      //     `../../assets/img/${this.cityName}/${this.cafeName}/${img}.jpg`
      //   );
      //   return image.default;
      // });
      // this.imagesSrcArray = await Promise.all(arrayWithPromises);
    },
    openModal: function (url, index) {
      this.isModalVisible = true;
      this.currentUrl = url;
      this.currentIndex = index;
    },
    closeModal: function () {
      this.isModalVisible = false;
      this.currentUrl = "";
    },
    changeSlide: function (n) {
      if (this.currentIndex === 0 && n === -1) return;
      if (this.currentIndex === this.imagesSrcArray.length - 1 && n === 1) return;
      this.currentIndex = this.currentIndex + n;
      this.currentUrl = this.imagesSrcArray[this.currentIndex];
    },
  },
  created() {
    this.init();
  },
};
</script>
