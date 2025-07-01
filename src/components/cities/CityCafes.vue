<template>
  <div class="article-block-cafes" id="articles-cafes">
    <CafeItem v-for="cafe in cityCafes" :key="cafe.id" :cafe="cafe" />
  </div>
</template>
<script>
import CafeItem from "@/components/cafe/CafeItem.vue";
import { useCafeStore } from "@/stores/cafes";

export default {
  components: {
    CafeItem,
  },
  data() {
    return {
      cafeStore: useCafeStore(),
    };
  },
  computed: {
    cafes() {
      return this.cafeStore.getCafes;
    },
    cityCafes() {
      if (!this.cafes) {
        return null;
      }
      return this.cafes.filter((cafe) => cafe.city === this.$route.name);
    },
  },
};
</script>
