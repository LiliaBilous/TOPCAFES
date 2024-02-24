<template>
  <div class="nav-bar">
    <button :disabled="cafe.id === 0" @click="goToPreviousCafe()" class="button nav-item">
      Попередня кав'ярня
    </button>
    <button @click="goToCity" class="button nav-item">
      Повернутись на сторінку міста
    </button>
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
      cafeId: this.$route.params.id,
    };
  },
  computed: {
    cafe() {
      return cafes.find((cafe) => cafe.id === +this.cafeId);
    },
  },
  methods: {
    goToCity() {
      this.$router.push(`/${this.cafe.city}`);
    },
    goToPreviousCafe() {},
    goToNextCafe() {},
  },
};
</script>
