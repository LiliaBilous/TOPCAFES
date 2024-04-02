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
    <div class="city-info-item">
      Рік заснування - {{ city.yearOfFoundation }} року
    </div>
    <div class="city-info-item" :class="city.cityLogoClass"></div>
    <div class="city-info-item">Населення - {{ city.population }} осіб</div>
  </div>
</template>
<script>
import { useCityStore } from "../../stores/cities";

export default {
  data() {
    return {
      cityStore: useCityStore(),
    };
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
