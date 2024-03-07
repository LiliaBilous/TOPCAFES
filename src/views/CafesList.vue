<template>
  <div>
    <div class="article-block-filter">
      <button class="button filter" :class="{ active: !isActive }">Усі кав'ярні</button>
      <div class="dropdown">
        <button
          class="button price-filter dropdown-btn"
          :class="{ active: isActive }"
          @click="activeBtn"
        >
          Ціна<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <div class="dropdown-content price">
          <button class="dropdown-item" @click="filterByPrice($$$)">$$$</button>
          <button class="dropdown-item" @click="filterByPrice($$)">$$</button>
          <button class="dropdown-item" @click="filterByPrice($)">$</button>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="button city-filter dropdown-btn"
          :class="{ active: isActive }"
          @click="activeBtn"
        >
          Місто<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <div class="dropdown-content city">
          <button class="dropdown-item" @click="filterByCity(franyk)">
            Івано-Франківськ
          </button>
          <button class="dropdown-item" @click="filterByCity(kyiv)">Київ</button>
          <button class="dropdown-item" @click="filterByCity(cherkasy)">Черкаси</button>
          <button class="dropdown-item" @click="filterByCity(lviv)">Львів</button>
          <button class="dropdown-item" @click="filterByCity(odesa)">Одеса</button>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="button rating-filter dropdown-btn"
          :class="{ active: isActive }"
          @click="activeBtn"
        >
          Рейтинг<span class="material-symbols-outlined"> expand_more </span>
        </button>
        <div class="dropdown-content rating">
          <button class="dropdown-item" @click="filterByRating()">
            Рейтинг 5.0 - 4.6
          </button>
          <button class="dropdown-item" @click="filterByRating()">
            Рейтинг 4.5 - 4.0
          </button>
          <button class="dropdown-item" @click="filterByRating()">
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
    };
  },
  methods: {
    activeBtn(event) {
      document.querySelectorAll(".dropdown-btn").forEach(function (el) {
        if (el !== event.target) el.classList.remove("active");
      });
      if (event.target.matches(".dropdown-btn")) {
        event.target
          .closest(".dropdown")
          .querySelector(".dropdown-btn")
          .classList.toggle("active");
      }
    },
    filterByCity(city) {
      // Фільтруємо кав'ярні за містом
      this.cafes = cafes.filter((cafe) => cafe.city === city);
      this.showDropdown = false;
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
  display: none;
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
  display: block;
  padding: 1rem;
  text-align: center;
  width: 100%;
  color: var(--color-background);
}

.dropdown-content button:hover {
  color: var(--color-light-brown);
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
