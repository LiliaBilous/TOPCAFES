<template>
  <div class="nav-bar">
    <button :disabled="cafe.id === 0" @click="goToPreviousCafe()" class="button nav-item">
      Попередня кав'ярня
    </button>
    <button class="button nav-item">Повернутись на сторінку міста</button>
    <button :disabled="cafe.id === 50" @click="goToNextCafe()" class="button nav-item">
      Наступна кавярн'я
    </button>
  </div>
</template>
<script>
import cities from "../../content/cities.json";
import cafes from "../../content/cafes.json";

export default {
  props: {},
  data() {
    return {
      cities,
      cityName: this.$route.name,
      cafeId: this.$route.params.id,
    };
  },
  computed: {
    city() {
      return this.cities.find((city) => city.name === this.$route.name);
    },
    cafe() {
      return cafes.find((cafe) => cafe.id === +this.cafeId);
    },
  },
  methods: {
    goToPreviousCafe() {},
    goToNextCafe() {},
  },
};
</script>
