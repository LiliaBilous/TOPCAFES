<template>
  <main class="main-content">
    <div v-for="city in cities" :key="city.id" :class="city.bannerImgClass">
      <div class="city__img-holder">
        <h2 class="city__header">{{ city.bannerTitle }}</h2>
        <p class="city__text-wrap" v-html="city.bannerText" />
        <div class="button-wrapper">
          <RouterLink :to="city.path" class="button">Перейти до огляду</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { useCityStore } from "@/stores/cities";
export default {
  data() {
    return { cityStore: useCityStore() };
  },
  computed: {
    cities() {
      return this.cityStore.getCities;
    },
    city() {
      return this.cities.find((city) => city.name === this.$route.name);
    },
  },
};
</script>
