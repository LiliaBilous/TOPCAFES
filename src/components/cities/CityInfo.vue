<template>
  <div class="photo-city-wrap" :class="city.bannerImgClass">
    <div class="city__img-holder">
      <h2 class="city__header">{{ city.bannerTitle }}</h2>
      <p class="city__text-wrap" v-html="city.bannerText" />
      <div class="button-wrapper">
        <a href="#articles-cafes" class="button">{{ city.buttonText }}</a>
      </div>
    </div>
  </div>
  <div class="desctiption-city-block">
    <p class="desctiption-text-wrap" v-html="city.descrText" />
  </div>
  <div class="city-info-wrap">
    <div class="city-info-item">Рік заснування - {{ city.yearOfFoundation }} року</div>
    <div class="city-info-item" :class="city.cityLogoClass"></div>
    <div class="city-info-item">Населення - {{ city.population }} осіб</div>
  </div>
  <div class="city-map-wrap" id="map">
  </div>
</template>
<script>
import cities from "../../content/cities.json";

export default {
  data() {
    return {
      cities,
    };
  },
  computed: {
    city() {
      return this.cities.find((city) => city.name === this.$route.name);
    },
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.4501, lng: 30.5234 }, // Координати Києва
        zoom: 12, // Масштаб мапи
      });

      // Додайте маркери кав'ярень
      const cafes = [
        { lat: 50.4391, lng: 30.5206, name: "Cafe 1" },
        { lat: 50.4547, lng: 30.5161, name: "Cafe 2" },
        // Додайте інші кав'ярні за потреби
      ];

      cafes.forEach((cafe) => {
        new google.maps.Marker({
          position: { lat: cafe.lat, lng: cafe.lng },
          map,
          title: cafe.name,
        });
      });
    },
  },
};
</script>
<style></style>
