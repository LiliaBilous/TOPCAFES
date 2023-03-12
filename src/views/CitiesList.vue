<template>
  <div>
    <div v-for="city in cities" :key="city.id">
      <p>{{ city.name }}</p>
      <p v-html="city.bannerText" />
      <p>{{ city.bannerTitle }}</p>
      <p>-----</p>
    </div>
  </div>
</template>
<script>
import cities from "../content/cities.json";
export default {
  data() {
    return { cities };
  },
};
</script>
