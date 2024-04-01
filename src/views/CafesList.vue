<template>
  <main class="main-content">
    <div class="article-block-filter">
      <button class="button filter" :class="{ active: !isActive }">Усі кав'ярні</button>
      <div class="dropdown price-filter">
        <button
          class="button dropdown-btn"
          :class="{ active: priceActive }"
          @click="this.priceActive = !this.priceActive"
        >
          Ціна<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <Transition name="fade">
          <div class="dropdown-content price" v-show="priceActive">
            <button class="dropdown-item" @click="filterByPrice('$$$')">$$$</button>
            <button class="dropdown-item" @click="filterByPrice('$$')">$$</button>
            <button class="dropdown-item" @click="filterByPrice('$')">$</button>
          </div>
        </Transition>
      </div>
      <div class="dropdown city-filter">
        <button
          class="button dropdown-btn"
          :class="{ active: cityActive }"
          @click="this.cityActive = !this.cityActive"
        >
          Місто<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <Transition name="fade">
          <div class="dropdown-content city" v-show="cityActive">
            <button class="dropdown-item" @click="filterByCity('franyk')">
              Івано-Франківськ
            </button>
            <button class="dropdown-item" @click="filterByCity('kyiv')">Київ</button>
            <button class="dropdown-item" @click="filterByCity('cherkasy')">
              Черкаси
            </button>
            <button class="dropdown-item" @click="filterByCity('lviv')">Львів</button>
            <button class="dropdown-item" @click="filterByCity('odesa')">Одеса</button>
          </div>
        </Transition>
      </div>
      <div class="dropdown rating-filter">
        <button
          class="button dropdown-btn"
          :class="{ active: ratingActive }"
          @click="this.ratingActive = !this.ratingActive"
        >
          Рейтинг<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <Transition name="fade">
          <div class="dropdown-content rating" v-show="ratingActive">
            <button class="dropdown-item" @click="filterByRating(5.0, 4.8)">
              Рейтинг 5.0 - 4.8
            </button>
            <button class="dropdown-item" @click="filterByRating(4.7, 4.5)">
              Рейтинг 4.7 - 4.5
            </button>
            <button class="dropdown-item" @click="filterByRating(4.4, 1)">
              Рейтинг нижче 4.5
            </button>
          </div>
        </Transition>
      </div>
    </div>
    <div class="article-block-cafes">
      <div v-for="cafe in cafes" :key="cafe.id" class="article-wrapper">
        <router-link
          :to="`/cafes/${cafe.id}`"
          class="article__link-holder"
          :class="cafe.imageUrlClass"
        >
          <h3 class="article-name">{{ cafe.title }}</h3>
        </router-link>
        <div class="article-text">
          <p class="article-description">{{ cafe.text }}</p>
          <RouterLink :to="`/cafes/${cafe.id}`" class="button"
            >Відвідати заклад</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { useCafeStore } from "../stores/cafes";

export default {
  data() {
    return {
      cafeStore: useCafeStore(),
      errorMessage: "",
      isLoading: true,
      isActive: false,
      priceActive: false,
      cityActive: false,
      ratingActive: false,
    };
  },
  computed: {
    cafes() {
      return this.cafeStore.getCafes;
    },
    cafe() {
      if (!this.cafes) {
        return null;
      }
      return this.cafes.find((cafe) => cafe.id === +this.cafeId);
    },
  },
  methods: {
    async initCafes() {
      try {
        await this.cafeStore.fetchCafes();
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    filterByPrice(price) {
      this.cafeStore.getCafes = this.cafeStore.getCafes.filter((cafe) => cafe.price === price);
      this.ratingActive = false;
    },
    filterByCity(city) {
      this.cafes = this.cafes.filter((cafe) => cafe.city === city);
      this.cityActive = false;
    },
    filterByRating(maxRating, minRating) {
      this.cafes = this.cafes.filter((cafe) => {
        const cafeRating = parseFloat(cafe.rating);
        return cafeRating >= minRating && cafeRating <= maxRating;
      });
      this.ratingActive = false;
    },
  },
  created() {
    this.initCafes();
  },
};
</script>
