<template>
  <div>
    <div class="article-block-filter">
      <button class="button filter" :class="{ active: !isActive }">Усі кав'ярні</button>
      <div class="dropdown">
        <button
          class="button price-filter dropdown-btn"
          :class="{ active: priceActive }"
          @click="openPriceDropdown"
        >
          Ціна<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <div class="dropdown-content price" v-show="priceActive">
          <button class="dropdown-item" @click="filterByPrice('$$$')">$$$</button>
          <button class="dropdown-item" @click="filterByPrice('$$')">$$</button>
          <button class="dropdown-item" @click="filterByPrice('$')">$</button>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="button city-filter dropdown-btn"
          :class="{ active: cityActive }"
          @click="openCityDropdown"
        >
          Місто<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <div class="dropdown-content city" v-show="cityActive">
          <button class="dropdown-item" @click="filterByCity('franyk')">
            Івано-Франківськ
          </button>
          <button class="dropdown-item" @click="filterByCity('kyiv')">Київ</button>
          <button class="dropdown-item" @click="filterByCity('cherkasy')">Черкаси</button>
          <button class="dropdown-item" @click="filterByCity('lviv')">Львів</button>
          <button class="dropdown-item" @click="filterByCity('odesa')">Одеса</button>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="button rating-filter dropdown-btn"
          :class="{ active: ratingActive }"
          @click="openRatingDropdown"
        >
          Рейтинг<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <div class="dropdown-content rating" v-show="ratingActive">
          <button class="dropdown-item" @click="filterByRating(5.0, 4.6)">
            Рейтинг 5.0 - 4.6
          </button>
          <button class="dropdown-item" @click="filterByRating(4.5, 4.0)">
            Рейтинг 4.5 - 4.0
          </button>
          <button class="dropdown-item" @click="filterByRating(4.0, 1)">
            Рейтинг нижче 4.0
          </button>
        </div>
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
  </div>
</template>
<script>
import cafes from "../content/cafes.json";
export default {
  data() {
    return {
      cafes,
      isActive: false,
      priceActive: false,
      cityActive: false,
      ratingActive: false,
    };
  },
  methods: {
    openPriceDropdown() {
      this.priceActive = !this.priceActive;
    },
    openCityDropdown() {
      this.cityActive = !this.cityActive;
    },
    openRatingDropdown() {
      this.ratingActive = !this.ratingActive;
    },
    filterByPrice(price) {
      this.cafes = cafes.filter((cafe) => cafe.price === price);
      this.ratingActive = false;
    },
    filterByCity(city) {
      this.cafes = cafes.filter((cafe) => cafe.city === city);
      this.cityActive = false;
    },
    filterByRating(maxRating, minRating) {
      this.cafes = cafes.filter((cafe) => {
        const cafeRating = parseFloat(cafe.rating);
        return cafeRating >= minRating && cafeRating <= maxRating;
      });
      this.ratingActive = false;
    },
  },
};
</script>
<style>
.active {
  background-color: var(--hover-shadow-light);
  border: 1px solid var(--color-background);
  color: var(--color-main-brown);
}
.dropdown {
  position: relative;
  display: inline-block;
}

.filter {
}
.dropdown-btn {
}

.dropdown-content {
  position: absolute;
  width: -webkit-fill-available;
  width: -moz-available;
  background-color: var(--color-main-brown);
  opacity: 0.85;
  transition: 0.3s all ease-in-out;
}
.price {
}
.dropdown-item {
  padding: 1rem;
  text-align: center;
  width: 100%;
  color: var(--color-background);
}

.dropdown-content button:hover {
  color: var(--color-light-brown);
}
</style>
