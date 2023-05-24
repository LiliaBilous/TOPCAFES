<template>
  <div>
    <div v-for="city in cities" :key="city.id" :class="city.bannerImgClass">
      <div>
        <div class="city__img-holder">
          <h2 class="city__header">{{ city.bannerTitle }}</h2>
          <p class="city__text-wrap" v-html="city.bannerText" />
          <div class="button-wrapper">
            <RouterLink :to="`/cities/${cities.path}`" class="button"
              >Перейти до огляду</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cities from "../content/cities.json";
export default {
  data() {
    return { cities };
  },
  computed: {
    city() {
      //return cities[0];
      return this.cities.find((city) => city.name === this.$route.name);
    },
  },
};
</script>

// v-for="city in cities" :key="city.path"
