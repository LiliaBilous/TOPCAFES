<template>
  <div class="nav-bar">
    <button @click="goToPreviousCafe" class="button nav-item">Попередня кав'ярня</button>
    <button :to="{ cityName }" class="button nav-item">
      Повернутись на сторінку міста
    </button>
    <button @click="goToNextCafe" class="button nav-item">Наступна кавярн'я</button>
  </div>
</template>
<script>
import cities from "../../content/cities.json";
import cafes from "../../content/cafes.json";

export default {
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
    goToPreviousCafe() {
      const currentIndex = cafes.findIndex(
        (cafe) => cafe.id === +this.cafeId && cafe.city === this.cityName
      );
      const previousCafe = cafes[currentIndex - 1];
      if (previousCafe) {
        this.$router.push({
          name: this.cityName,
          params: { id: previousCafe.id.toString() },
        });
      }
    },
    goToNextCafe() {},
  },
};
</script>
