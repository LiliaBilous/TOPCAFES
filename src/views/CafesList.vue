<template>
  <div>
    <div class="article-block-cafes">
      <div v-for="cafe in cafes" :key="cafe.id" class="article-wrapper">
        <router-link
          :to="`/cafes/${cafe.id}`"
          class="article__link-holder"
          :class="cafe.imageUrlClass"
        >
          <h3 class="article-name">{{ cafe.title }}</h3>
        </router-link>
        <div class="article-text-">
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
    return { cafes };
  },
};
</script>
