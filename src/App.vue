<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
// const toggle = () => {
//     if(document.body.classList.contains("dark")){
//       document.body.classList.remove("dark");
//     }else{
//       document.body.classList.add("dark");
//     }
//   }
</script>

<template>
  <div class="container" :class="{'theme-dark': nightMode} ">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
