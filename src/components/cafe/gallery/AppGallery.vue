<template>
  <div id="gallery" class="gallery__holder">
    <GalleryImg v-for="(imageSrc, index) in imagesSrcArray" :key="imageSrc" :imgSrc="imageSrc"
      @click="openModal(imageSrc, index)" />
  </div>
  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <div class="modal__info-bar">
        <div class="numbertext">
          {{ currentIndex + 1 }} / {{ imagesSrcArray.length }}
        </div>
        <button class="close" @click="closeModal()">&times;</button>
      </div>
      <div class="mySlides">
        <img class="mySlides__img" :src="currentUrl" />
        <button class="mySlides__navButton prev" :disabled="currentIndex === 0" @click="changeSlide(-1)">
          &#10094;
        </button>
        <button class="mySlides__navButton next" :disabled="currentIndex === imagesSrcArray.length - 1"
          @click="changeSlide(1)">
          &#10095;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import GalleryImg from "@/components/cafe/gallery/GalleryImg.vue";

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
      const promises = this.gallery.map(async (img) => {
        try {
          const jpg = await import(`@/assets/img/${this.cityName}/${this.cafeName}/${img}.jpg`);
          return jpg.default;
        } catch {
          try {
            const webp = await import(`@/assets/img/${this.cityName}/${this.cafeName}/${img}.webp`);
            return webp.default;
          } catch (e) {
            console.warn(`Couldn't load image: ${img}`);
            return null;
          }
        }
      });

      const results = await Promise.all(promises);
      this.imagesSrcArray = results.filter(Boolean);
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
      if (this.currentIndex === this.imagesSrcArray.length - 1 && n === 1)
        return;
      this.currentIndex = this.currentIndex + n;
      this.currentUrl = this.imagesSrcArray[this.currentIndex];
    },
  },
  created() {
    this.init();
  },
};
</script>
