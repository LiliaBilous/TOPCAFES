<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isBurgerMenuVisible = ref(false);
const visible = ref(false);
function toggleBurgerMenu() {
  isBurgerMenuVisible.value = !isBurgerMenuVisible.value;
  visible.value = !visible.value;
}
</script>
<template>
  <header>
    <div class="header__wrapper">
      <div class="header__logo">
        <RouterLink class="header__home" to="/">Top cafes</RouterLink>
      </div>
      <div class="header__text-wrapper">
        <RouterLink to="/cafes" class="header__item cafes">Кав'ярні</RouterLink>
        <RouterLink to="/cities" class="header__item cities">Міста</RouterLink>
      </div>
      <div class="header__burger">
        <div
          class="burger"
          :class="{ visible: visible }"
          @click="toggleBurgerMenu"
        >
          <span class="humburger__line"></span>
          <span class="humburger__line"></span>
          <span class="humburger__line"></span>
        </div>
        <Transition name="fade">
          <nav v-if="isBurgerMenuVisible" class="header__nav-menu">
            <RouterLink to="/" class="nav-menu-item">Top cafes</RouterLink>
            <RouterLink to="/cafes" class="nav-menu-item">Кав'ярні</RouterLink>
            <RouterLink to="/cities" class="nav-menu-item">Міста</RouterLink>
          </nav>
        </Transition>
      </div>
    </div>
  </header>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
