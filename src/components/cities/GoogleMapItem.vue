<template>
  <div class="city-map-wrap" id="map"></div>
</template>
<script>
// mounted() {
//     this.initMap();
//   },
//   methods: {
//     initMap() {
//       const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 50.4501, lng: 30.5234 }, // Координати Києва
//         zoom: 12, // Масштаб мапи
//       });

//       // Додайте маркери кав'ярень
//       const cafes = [
//         { lat: 50.4391, lng: 30.5206, name: "Cafe 1" },
//         { lat: 50.4547, lng: 30.5161, name: "Cafe 2" },
//         // Додайте інші кав'ярні за потреби
//       ];

//       cafes.forEach((cafe) => {
//         new google.maps.Marker({
//           position: { lat: cafe.lat, lng: cafe.lng },
//           map,
//           title: cafe.name,
//         });
//       });
//     },
//   },
</script>
<style>
.city-map-wrap {
  width: 96%;
  height: 400px;
  margin: 2rem auto;
  background: var(--color-main-brown);
}
</style>
