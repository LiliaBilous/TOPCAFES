<template>
  <div class="nav-bar" v-if="cafe">
    <button @click="goToPreviousCafe" :disabled="!previousCafe" :class="{ 'inactive-button': !previousCafe }"
      class="button nav-item">
      Попередня кав'ярня
    </button>

    <button @click="goToCity" class="button nav-item">
      Повернутись на сторінку міста
    </button>

    <button @click="goToNextCafe" :disabled="!nextCafe" :class="{ 'inactive-button': !nextCafe }"
      class="button nav-item">
      Наступна кав'ярня
    </button>
  </div>
</template>

<script>
import { useCafeStore } from "@/stores/cafes";

export default {
  data() {
    return {
      cafeStore: useCafeStore(),
    };
  },
  computed: {
    cafes() {
      return this.cafeStore.getCafes;
    },
    cafeRoute() {
      return this.$route.params.cafeRoute;
    },
    cafe() {
      return this.cafes.find((cafe) => cafe.cafeRoute === this.cafeRoute);
    },
    currentIndex() {
      return this.cafes.findIndex((cafe) => cafe.cafeRoute === this.cafeRoute);
    },
    previousCafe() {
      return this.cafes[this.currentIndex - 1] || null;
    },
    nextCafe() {
      return this.cafes[this.currentIndex + 1] || null;
    },
    city() {
      return this.cafe?.city ?? '';
    },
  },
  methods: {
    goToCity() {
      this.$router.push(`/${this.city}`);
    },
    goToPreviousCafe() {
      if (this.previousCafe) {
        this.$router.push(`/cafes/${this.previousCafe.cafeRoute}`);
      }
    },
    goToNextCafe() {
      if (this.nextCafe) {
        this.$router.push(`/cafes/${this.nextCafe.cafeRoute}`);
      }
    },
  },
};
</script>

<style>
.inactive-button {
  cursor: not-allowed;
  background: var(--hover-shadow-light);
}
</style>
