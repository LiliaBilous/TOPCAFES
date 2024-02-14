<template>
  <main>
    <CityInfo />
    <GoogleMapItem />
    <CafeList />
  </main>
</template>
<script>
import CityInfo from "../components/cities/CityInfo.vue";
import GoogleMapItem from "../components/cities/GoogleMapItem.vue";
import CafeList from "../components/cities/CafeList.vue";

export default {
  components: {
    CityInfo,
    GoogleMapItem,
    CafeList,
},
};
</script>
