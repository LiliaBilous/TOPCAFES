<template>
  <main class="main-content">
    <div v-if="isLoading" class="loader">
      <div class="cup">
        <span class="steam"></span>
        <span class="steam"></span>
        <span class="steam"></span>
        <div class="cup-handle"></div>
      </div>
    </div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <template v-else-if="city">
      <CityInfo />
      <GoogleMap />
      <CafeList />
    </template>
  </main>
</template>
<script>
import { useCityStore } from "../stores/cities";
import CityInfo from "../components/cities/CityInfo.vue";
import GoogleMap from "../components/cities/GoogleMap.vue";
import CafeList from "../components/cities/CafeList.vue";

export default {
  components: {
    CityInfo,
    GoogleMap,
    CafeList,
  },
  data() {
    return {
      cityStore: useCityStore(),
      errorMessage: "",
      isLoading: true,
    };
  },
  computed: {
    cities() {
      return this.cityStore.getCities;
    },
    city() {
      if (!this.cities) {
        return null;
      }
      return this.cities.find((city) => city.name === this.$route.name);
    },
  },
  methods: {
    async init() {
      try {
        await this.cityStore.fetchCity();
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.init();
  },
};
</script>
