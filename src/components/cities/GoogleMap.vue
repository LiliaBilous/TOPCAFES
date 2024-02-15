<template>
  <div class="city-map-wrap" :id="city.name" :ref="city.name + 'Map'"></div>
  <div class="lat-coordinate">{{ city.lat }}</div>
  <div class="lng-coordinate">{{ city.lng }}</div>
</template>
<script>
import { Loader } from "@googlemaps/js-api-loader";
import cities from "../../content/cities.json";
import cafes from "../../content/cafes.json";
import { ref, onMounted } from "vue";

const GOOGLE_MAPS_API_KEY = "AIzaSyBmMeJI2nhe3jL63KM-GeLN0jw9WHjc7GE";

export default {
  data() {
    return {
      cities,
      cafes,
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
    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);

    onMounted(async () => {
      if (!this.city) return; // Перевірка наявності даних про місто

      await loader.load();
      new window.google.maps.Map(mapDiv.value, {
        center: { lat: Number(this.city.lat), lng: Number(this.city.lng)},
        zoom: 12,
      });
    });

    return { mapDiv };
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
