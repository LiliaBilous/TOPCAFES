<template>
  <section class="google-map">
    <div v-if="isLoading" class="loader">
      <div class="cup">
        <span class="steam"></span>
        <span class="steam"></span>
        <span class="steam"></span>
        <div class="cup-handle"></div>
      </div>
    </div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <div class="city-map-wrap" id="map"></div>
  </section>
</template>
<script>
import { useCityStore } from "../../stores/cities";
import { useCafeStore } from "../../stores/cafes";

export default {
  data() {
    return {
      errorMessage: "",
      isLoading: true,
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
      return this.cafes.filter((cafe) => cafe.city === this.$route.name);
    },
  },
  methods: {
    async initMap() {
      const { Map } = await window.google.maps.importLibrary("maps");

      this.map = new Map(document.getElementById("map"), {
        center: { lat: Number(this.city.lat), lng: Number(this.city.lng) },
        zoom: 14,
      });

      // added custom cafes markers
      const coffeeFlagImg = {
        url: "/TOPCAFES/coffee-bean.svg",
        scaledSize: new window.google.maps.Size(20, 20),
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
    this.cafeStore
      .fetchCafes()
      .then(() => {
        this.initMap();
      })
      .catch((error) => {
        this.errorMessage = error.message;
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
<style>
/* google map style */
.google-map {
  max-height: 30rem;
}
.city-map-wrap {
  width: 96%;
  height: 400px;
  margin: 2rem auto;
  padding: 0 2rem;
}
/*  */
.google-map .loader {
  min-height: 30rem;
}
</style>
