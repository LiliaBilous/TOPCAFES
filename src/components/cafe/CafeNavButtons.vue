<template>
  <div class="nav-bar">
    <button
      @click="goToPreviousCafe"
      :disabled="!cafe || cafe.id === 0"
      class="button nav-item"
    >
      Попередня кав'ярня
    </button>
    <button @click="goToCity" class="button nav-item">
      Повернутись на сторінку міста
    </button>
    <button
      @click="goToNextCafe"
      :disabled="!cafe || cafe.id >= 50"
      class="button nav-item"
    >
      Наступна кавярн'я
    </button>
  </div>
</template>
<script>
import cafes from "../../content/cafes.json";

export default {
  data() {
    return {
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
    goToPreviousCafe() {
      const previousCafeId = +this.cafeId - 1;
      this.$router.push(`/cafes/${previousCafeId}`);
      this.cafeId = previousCafeId;
      console.log(previousCafeId);
    },

    goToNextCafe() {
      const nextCafeId = +this.cafeId + 1;
      this.$router.push(`/cafes/${nextCafeId}`);
      this.cafeId = nextCafeId;
      console.log(nextCafeId);
    },
  },
};
</script>
