<template>
  <div class="city-map-wrap" id="map"></div>
</template>
<script>
import cities from "../../content/cities.json";
import cafes from "../../content/cafes.json";

// const GOOGLE_MAPS_API_KEY = "AIzaSyBmMeJI2nhe3jL63KM-GeLN0jw9WHjc7GE";

export default {
  data() {
    return {
      cities,
      cafes,
      map: null,
    };
  },
  computed: {
    city() {
      return this.cities.find((city) => city.name === this.$route.name);
    },
    cityCafes() {
      return this.cafes.filter((cafe) => cafe.city === this.$route.name);
    },
  },
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      const { Map } = await window.google.maps.importLibrary("maps");

      this.map = new Map(document.getElementById("map"), {
        center: { lat: Number(this.city.lat), lng: Number(this.city.lng) }, // Використовуємо координати міста
        zoom: 13,
      });
    },
  },
};
</script>
<style>
.city-map-wrap {
  width: 96%;
  height: 400px;
  margin: 2rem auto;
  background: var(--color-main-brown);
}
</style>
