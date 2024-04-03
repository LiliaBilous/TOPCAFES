<template>
  <div class="article-block-filter">
    <button class="button filter" :class="{ active: !isActive }">Усі кав'ярні</button>
    <div class="dropdown price-filter">
      <button
        class="button dropdown-btn"
        :class="{ active: priceActive }"
        @click="allCafes"
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
          <button class="dropdown-item" @click="filterByCity('cherkasy')">Черкаси</button>
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
</template>
<script>
export default {
  props: { cafesArr: Array },
  data() {
    return {
      cafesList: this.cafesArr,
      cafesFilter: [],
      isActive: false,
      priceActive: false,
      cityActive: false,
      ratingActive: false,
    };
  },
  methods: {
    allCafes() {
      this.priceActive = !this.priceActive;
      this.cafesList;
    },
    filterByPrice(price) {
      this.cafesFilter.push(this.cafesList.filter((cafe) => cafe.price === price));
      this.ratingActive = false;
      console.log(this.cafesFilter);
    },
    // filterByCity(city) {
    //   this.cafes = this.cafes.filter((cafe) => cafe.city === city);
    //   this.cityActive = false;
    // },
    // filterByRating(maxRating, minRating) {
    //   this.cafes = this.cafes.filter((cafe) => {
    //     const cafeRating = parseFloat(cafe.rating);
    //     return cafeRating >= minRating && cafeRating <= maxRating;
    //   });
    //   this.ratingActive = false;
    // },
  },
  created() {},
  mounted() {},
};
</script>
