<template>
  <button class="mode-toggle" @click="toggleDark()">
    <div class="toggle-icon darkMode" :class="{ hidden: isDark }">
      <span class="material-symbols-outlined">dark_mode</span>
    </div>
    <div class="toggle-icon lightMode" :class="{ hidden: !isDark }">
      <span class="material-symbols-outlined">light_mode</span>
    </div>
  </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
</script>

<style>

</style>
