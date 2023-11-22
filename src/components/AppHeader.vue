<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
// const burgerMenu = document.querySelector(".header__burger");
// const navMenu = document.querySelector(".header__nav-menu");
// burgerMenu.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
const isBurgerMenuVisible = ref(false);
</script>
<template>
  <header>
    <div class="wrapper-header">
      <div class="header__logo">
        <RouterLink class="header__home" to="/">Top cafes</RouterLink>
      </div>
      <div class="header__text-wrapper">
        <RouterLink to="/cafes" class="header__item cafes">Кав'ярні</RouterLink>
        <RouterLink to="/cities" class="header__item cities">Міста</RouterLink>
        <a href="#" class="header__item language">EN</a>
        <a href="#" class="header__item dark-theme">
          <i class="material-icons">&#xe430;</i>
        </a>
        <a
          @click="isBurgerMenuVisible = !isBurgerMenuVisible"
          class="header__item header__burger"
        >
          <span class="humburger__line"></span>
          <span class="humburger__line"></span>
          <span class="humburger__line"></span>
        </a>
        <Transition>
          <nav v-if="isBurgerMenuVisible" class="header__nav-menu">
            <RouterLink to="/franyk" class="nav-menu-item"
              >Івано-Франківськ</RouterLink
            >
            <RouterLink to="/сherkasy" class="nav-menu-item"
              >Черкаси</RouterLink
            >
            <RouterLink to="/kyiv" class="nav-menu-item">Київ</RouterLink>
            <RouterLink to="/lviv" class="nav-menu-item">Львів</RouterLink>
            <RouterLink to="/odesa" class="nav-menu-item">Одеса</RouterLink>
          </nav>
        </Transition>
      </div>
    </div>
  </header>
</template>
