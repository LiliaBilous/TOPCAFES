<template>
  <div id="gallery" class="gallery__holder">
    <GalleryImg
      v-for="(image, index) in gallery"
      :key="image"
      :index="index"
      :img="image"
      @imgClick="openModal($event)"
    />
  </div>
  <div v-if="isModalVisible" class="modal">
    <span class="close cursor" @click="closeModal()">&times;</span>
    <div class="modal-content">
      <div class="mySlides">
        <div class="numbertext">{{}} / {{ gallery.length }}</div>
        <img :src="currentUrl" />
      </div>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
  </div>
</template>
<script>
import GalleryImg from "../cafe/GalleryImg.vue";

export default {
  components: { GalleryImg },
  props: { gallery: Array },
  data() {
    return {
      slideIndex: 1,
      isModalVisible: false,
      currentUrl: "",
    };
  },
  methods: {
    openModal: function (event) {
      this.isModalVisible = true;
      this.currentUrl = event.target.src;
    },
    closeModal: function () {
      this.isModalVisible = false;
      this.currentUrl = "";
    },
    showSlides: function (n) {
      let slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
    },
    plusSlides: function (n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide: function (n) {
      this.showSlides((this.slideIndex = n));
    },
  },
};
</script>
