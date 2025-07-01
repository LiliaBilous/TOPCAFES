<template>
  <main class="cafe__wrapper main-content">
    <div v-if="isLoading" class="loader">
      <div class="cup">
        <span class="steam"></span>
        <span class="steam"></span>
        <span class="steam"></span>
        <div class="cup-handle"></div>
      </div>
    </div>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    <template v-else-if="cafe">
      <div class="cafe__container">
        <div
          class="cafe__photo-wrap"
          :key="cafeId"
          :cafeId="cafeId"
          :class="cafe.imageUrlClass"
        >
          <div class="cafe__img-shadow"></div>
        </div>
        <div class="cafe__cide-holder">
          <h1 class="cafe__title">{{ cafe.title }}</h1>
          <div class="cafe_google-info">
            <div class="cafe_rating">
              <i class="material-icons">star_rate</i>Рейтинг GoogleMaps:
              <p class="text-holder">{{ cafe.rating }}</p>
            </div>
            <div class="cafe_price">
              <i class="material-icons">&#xe227;</i>Середній цінник:
              <p class="text-holder">{{ cafe.price }}</p>
            </div>
          </div>
          <div class="cafe_contacts">
            <div class="cafe__contact-work-hour">
              <i class="material-icons">access_time</i>Робочі години:
              <p class="text-holder">{{ cafe.workHours }}</p>
            </div>
            <div class="cafe_contact-telefone">
              <i class="material-icons">call</i>Контактний телефон:
              <p class="text-holder">{{ cafe.telephone }}</p>
            </div>
            <div class="cafe_contact-address">
              <span class="material-icons">location_on</span> Адреса:
              <a :href="cafe.addressUrl" target="_blank" class="text-holder">{{
                cafe.address
              }}</a>
            </div>
          </div>
          <div class="cafe_social">
            <a
              :href="cafe.socialLink"
              class="cafe__social-link"
              target="_blank"
              :class="{ 'inactive-link': !cafe.socialLink }"
              >Instagram</a
            >
            <a
              :href="cafe.linkToCafe"
              class="cafe__social-link"
              target="_blank"
              :class="{ 'inactive-link': !cafe.socialLink }"
              >Web-cite</a
            >
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
      <CafeNavButtons />
    </template>
  </main>
</template>
<script>
import { useCafeStore } from "@/stores/cafes";
import AppGallery from "@/components/cafe/gallery/AppGallery.vue";
import CafeNavButtons from "@/components/cafe/CafeNavButtons.vue";

export default {
  components: { AppGallery, CafeNavButtons },
  data() {
    return {
      cafeId: this.$route.params.id,
      cafeStore: useCafeStore(),
      errorMessage: "",
      isLoading: false,
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
    async initCafes() {
      if (!this.cafes) {
        try {
          this.isLoading = true;
          await this.cafeStore.fetchCafes();
        } catch (error) {
          this.errorMessage = error.message;
        } finally {
          this.isLoading = false;
        }
      }

      // this.cafeStore
      //   .fetchCafes()
      //   .then(() => {
      //     console.log("success");
      //   })
      //   .catch((error) => {
      //     this.errorMessage = error.message;
      //     console.log(error);
      //   })
      //   .finally(() => {
      //     this.isLoading = false;
      //   });
    },
  },
  created() {
    this.initCafes();
  },
};
</script>
