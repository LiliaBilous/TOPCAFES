<template>
  <div class="article-wrapper">
    <router-link
      :to="`/cafes/${cafe.id}`"
      class="article__link-holder"
      :class="cafe.imageUrlClass"
    >
      <h3 class="article-name">{{ cafe.title }}</h3>
    </router-link>
    <div class="article-text-">
      <p class="article-description">{{ cafe.text }}</p>
      <RouterLink :to="`/cafes/${cafe.id}`" class="button"> Відвідати заклад </RouterLink>
    </div>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    cafe: Object,
  },
  components: { RouterLink },
};
</script>
<style>
.article-block-cafes {
  padding: 4.5rem 2rem 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.article-wrapper {
  height: 50rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.article-wrapper:nth-child(4n-3) {
  background: var(--light-gradient);
}

.article-wrapper:nth-child(4n-2) {
  background: var(--dark-gradient);
}

.article-wrapper:nth-child(4n-1) {
  background: var(--dark-gradient);
}

.article-wrapper:nth-child(4n) {
  background: var(--light-gradient);
}

.article__link-holder {
  width: 100%;
  height: 30rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 90% 10%;
}

.article-name {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 30rem;
  width: 100%;
  color: var(--color-background);
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 2.5rem;
}

.article-text {
  color: var(--color-main-brown);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.article-description {
  margin: 1.5rem 0;
  text-align: justify;
  color: var(--color-background);

  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  white-space: normal;
}

.article-wrapper:nth-child(4n) .article-description,
.article-wrapper:nth-child(4n-3) .article-description {
  color: var(--color-main-brown);
}

/* article buttons */
.article-wrapper:nth-child(4n-3) .button,
.article-wrapper:nth-child(4n) .button {
  color: var(--color-main-brown);
  border: 1px solid var(--color-main-brown);
}

.article-wrapper:nth-child(4n-3) .button:hover,
.article-wrapper:nth-child(4n) .button:hover {
  background-color: rgba(64, 29, 20, 0.35);
  border: 1px solid var(--color-main-brown);
  color: var(--color-white);
}
/* addaptive styles */
@media (max-width: 48rem) {
  .article-block-cafes {
    display: flex;
    flex-direction: column;
  }

  .article-wrapper {
    width: 100%;
    padding: 2rem;
  }
  .article-wrapper:nth-child(4n-3),
  .article-wrapper:nth-child(4n-1) {
    background: var(--light-gradient);
  }

  .article-wrapper:nth-child(4n-2),
  .article-wrapper:nth-child(4n) {
    background: var(--dark-gradient);
  }
  .article-wrapper:nth-child(4n) .article-description,
  .article-wrapper:nth-child(4n-2) .article-description {
    color: var(--color-background);
  }
  .article-wrapper:nth-child(4n-1) .article-description,
  .article-wrapper:nth-child(4n-3) .article-description {
    color: var(--color-main-brown);
  }

  /* article buttons */
  .article-wrapper:nth-child(4n-3) .button,
  .article-wrapper:nth-child(4n-1) .button {
    color: var(--color-main-brown);
    border: 1px solid var(--color-main-brown);
  }

  .article-wrapper:nth-child(4n) .button,
  .article-wrapper:nth-child(4n-2) .button {
    color: var(--color-background);
    border: 1px solid var(--color-background);
  }

  .article-wrapper:nth-child(4n-3) .button:hover,
  .article-wrapper:nth-child(4n-1) .button:hover {
    background-color: var(--hover-shadow-dark);
    color: var(--color-white);
  }

  .article-wrapper:nth-child(4n) .button:hover,
  .article-wrapper:nth-child(4n-2) .button:hover {
    background-color: var(--hover-shadow-light);
    color: var(--color-main-brown);
  }
}

@media (max-width: 28rem) {
  .article-block-cafes {
    padding: 4rem 0 0;
  }
  .article__link-holder {
    height: 20rem;
  }
  .article-name {
    height: 20rem;
    font-size: 2rem;
    line-height: 2rem;
  }
  .article-description {
    font-size: medium;
  }
}
</style>
