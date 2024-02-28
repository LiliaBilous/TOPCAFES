<template>
  <div class="cafe__wrapper">
    <div v-if="isLoading" class="loader">Loading</div>
    <div v-else-if="errorMessage" class="error">{{ errorMessage }}</div>
    <template v-else-if="cafe">
      <div class="cafe-photo-wrap" :key="cafeId" :cafeId="cafeId">
        <div class="cafe__img-holder" :class="cafe.imageUrlClass">
          <div class="cafe__main-img">
            <div class="cide__rating">
              <i class="material-icons">star_rate</i>Рейтинг GoogleMaps:
              {{ cafe.rating }}
            </div>
            <div class="cide__price">
              <i class="material-icons">&#xe227;</i>Цінник: {{ cafe.price }}
            </div>
          </div>
        </div>
        <div class="cafe__cide-description">
          <h1 class="cide__title">{{ cafe.title }}</h1>
          <div class="cide__wrapper">
            <div class="cide__bar">
              <div class="icon-holder">
                <span class="material-icons">location_on</span> Адреса:
              </div>
              <p class="addres-holder">{{ cafe.address }}</p>
            </div>
            <div class="cide__bar">
              <div class="icon-holder">
                <i class="material-icons">call</i>Контактний телефон:
              </div>
              <p class="addres-holder">{{ cafe.telephone }}</p>
            </div>
            <div class="cide__bar">
              <div class="icon-holder">
                <i class="material-icons">access_time</i>Робочі години:
              </div>
              <p class="addres-holder">{{ cafe.workHours }}</p>
            </div>
          </div>
          <div class="cide_contacts">
            <a :href="cafe.socialLink" class="cafe__link" target="_blank">Social Media</a>
            <a :href="cafe.linkToCafe" class="cafe__link" target="_blank">Web-cite</a>
          </div>
        </div>
      </div>
      <div class="cafe__central-holder" :key="cafeId" :cafeId="cafeId">
        <div class="central-holder__comments">
          <h2 class="comments__title">Особисті рекомендації</h2>
          <p>{{ cafe.comments }}</p>
        </div>
        <div class="central-holder__description">
          <h2 class="description__title">Опис закладу</h2>
          <p class="description__subtitle">{{ cafe.text }}</p>
        </div>
      </div>
      <div class="cafe__gallery" :key="cafeId" :cafeId="cafeId">
        <h2 class="gallery__title">Photo Gallery</h2>
        <AppGallery
          :gallery="cafe.photoGallery"
          :city-name="cafe.city"
          :cafe-name="cafe.name"
        />
      </div>
      <CafeNavButtons></CafeNavButtons>
    </template>
  </div>
</template>
<script>
import { useCafeStore } from "../stores/cafes";
import AppGallery from "../components/cafe/gallery/AppGallery.vue";
import CafeNavButtons from "../components/cafe/CafeNavButtons.vue";

export default {
  components: { AppGallery, CafeNavButtons },
  data() {
    return {
      cafeId: this.$route.params.id,
      cafeStore: useCafeStore(),
      isLoading: true,
      errorMessage: "",
    };
  },
  watch: {
    "$route.params.id"(newCafeId) {
      this.cafeId = newCafeId;
    },
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
    async init() {
      this.isLoading = true;
      try {
        await this.cafeStore.fetchCafes();
      } catch (error) {
        this.errorMessage = error.message;
        console.info(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.init();
  },
};
</script>
