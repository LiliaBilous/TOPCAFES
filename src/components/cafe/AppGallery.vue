<template>
  <div id="gallery" class="gallery__holder">
    <GalleryImg
      v-for="(image, index) in gallery"
      :key="image"
      :index="index"
      :img="image"
      @click="
        openModal();
        currentSlide(index + 1);
      "
    />
  </div>
  <div id="myModal" class="modal">
    <span class="close cursor" @click="closeModal()">&times;</span>
    <div class="modal-content">
      <div class="mySlides" v-for="(image, index) in gallery" :key="image">
        <div class="numbertext">{{ index + 1 }} / {{ gallery.length }}</div>
        <img :src="'/src/assets/img' + image" />
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
    };
  },
  methods: {
    openModal: function () {
      document.getElementById("myModal").style.display = "block";
    },
    closeModal: function () {
      document.getElementById("myModal").style.display = "none";
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
