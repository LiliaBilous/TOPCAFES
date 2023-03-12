<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <div class="wrapper-header">
      <RouterLink class="header__logo" to="/">Top cafes</RouterLink>
      <div class="header__text-wrapper">
        <RouterLink class="header__item" to="/">Головна</RouterLink>
        <a href="#" class="header__item cities">Міста</a>
        <a href="#" class="header__item cafes">Кав'ярні</a>
        <a href="#" class="header__item burger-menu">
          <input
            type="checkbox"
            id="burger-menu__checkbox"
            class="burger-menu__input"
          />
          <label for="burger-menu__checkbox" class="burger-menu__label">
            <i class="material-icons">&#xe5d2;</i>
          </label>
          <nav class="burger-menu-wrapper">
            <ul class="header__nav-menu">
              <li class="nav-menu-item">
                <RouterLink to="/franyk">Івано-Франківськ</RouterLink>
              </li>
              <li class="nav-menu-item">
                <RouterLink to="/сherkasy">Черкаси</RouterLink>
              </li>
              <li class="nav-menu-item">
                <RouterLink to="/kyiv">Київ</RouterLink>
              </li>
              <li class="nav-menu-item">
                <RouterLink to="/lviv">Львів</RouterLink>
              </li>
              <li class="nav-menu-item">
                <RouterLink to="/odesa">Одеса</RouterLink>
              </li>
            </ul>
          </nav>
        </a>
        <!--  -->
        <a href="#" class="header__item dark-theme">
          <i class="material-icons">&#xe430;</i>
        </a>
        <a href="#" class="header__item language">EN</a>
      </div>
    </div>
  </header>
</template>
