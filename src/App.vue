<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div class="container-mode" :class="mode === 'dark' ? 'dark' : 'light'">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
