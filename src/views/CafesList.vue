<template>
  <div>
    <!-- створити фільтр по містам, ціннику, рейтингу -->
    <div class="article-block-filter">
      <button class="button filter">Ціна $$$</button>
      <button class="button filter">Ціна $$</button>
      <button class="button filter">Ціна $</button>
      <button class="button filter">Київ</button>
      <button class="button filter">Львів</button>
      <button class="button filter">Одеса</button>
      <button class="button filter">Черкаси</button>
      <button class="button filter">Івано-Франківськ</button>
      <button class="button filter">Рейтинг 5.0 - 4.6</button>
      <button class="button filter">Рейтинг 4.5 - 4.0</button>
      <button class="button filter">Рейтинг нижче 4.0</button>
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
    return { cafes };
  },
};
</script>
