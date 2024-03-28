<template>
  <div class="city-map-wrap" id="map"></div>
</template>
<script>
import { useCityStore } from "../../stores/cities";
import { useCafeStore } from "../../stores/cafes";

export default {
  data() {
    return {
      cityStore: useCityStore(),
      cafeStore: useCafeStore(),
      map: null,
      marker: null,
    };
  },
  computed: {
    cities() {
      return this.cityStore.getCities;
    },
    city() {
      return this.cities.find((city) => city.name === this.$route.name);
    },
    cafes() {
      return this.cafeStore.getCafes;
    },
    cityCafes() {
      console.log(this.cafes);
      return this.cafes.filter((cafe) => cafe.city === this.$route.name);
    },
  },
  methods: {
    async initMap() {
      const { Map } = await window.google.maps.importLibrary("maps");

      this.map = new Map(document.getElementById("map"), {
        center: { lat: Number(this.city.lat), lng: Number(this.city.lng) },
        zoom: 13,
      });

      // added custom cafes markers
      const coffeeFlagImg = {
        url: "/coffee-bean.svg",
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
  mounted() {
    this.cafeStore.fetchCafes().then(() => {
      this.initMap();
    });
  },
};
</script>
