<template>
  <main>
    <CityInfo />
    <GoogleMap />
    <CafeList />
  </main>
</template>
<script>
import CityInfo from "../components/cities/cityinfo.vue";
import GoogleMap from "../components/cities/GoogleMap.vue";
import CafeList from "../components/cities/CafeList.vue";

export default {
  components: {
    CityInfo,
    GoogleMap,
    CafeList,
  },
};
</script>
