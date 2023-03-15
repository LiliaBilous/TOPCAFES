<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <div class="wrapper-header">
      <div class="header__logo">
        <a class="nav-menu">Top cafes</a>
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
      </div>
      <div class="header__text-wrapper">
        <RouterLink class="header__item" to="/">Головна</RouterLink>
        <RouterLink to="/cities" class="header__item cities">Міста</RouterLink>
        <RouterLink to="/cafes" class="header__item cafes">Кав'ярні</RouterLink>

        <!--  -->
        <a href="#" class="header__item dark-theme">
          <i class="material-icons">&#xe430;</i>
        </a>
        <a href="#" class="header__item language">EN</a>
      </div>
    </div>
  </header>
</template>
