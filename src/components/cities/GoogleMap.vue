<template>
  <div class="city-map-wrap" id="map"></div>
</template>
<script>
import cities from "../../content/cities.json";
import cafes from "../../content/cafes.json";

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

      // added custom cafes markers
      const coffeeFlagImg = {
        url: "../coffee-bean-filled-roast-brew-svgrepo-com.svg",
        scaledSize: new window.google.maps.Size(25, 25),
      };

      this.cityCafes.forEach((cafe) => {
        new window.google.maps.Marker({
          position: { lat: Number(cafe.lat), lng: Number(cafe.lng) },
          map: this.map,
          title: cafe.name,
          icon: coffeeFlagImg,
        });
      });
    },
  },
};
</script>
