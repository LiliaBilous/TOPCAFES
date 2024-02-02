<template>
  <div class="toggle-button">
    <input type="checkbox" class="toggle-button-checkbox" id="chk" />
    <label class="toggle-button-label" for="chk">
      <span class="material-symbols-outlined">light_mode</span>
      <span class="material-symbols-outlined">dark_mode</span>
      <div class="toggle-button-ball"></div>
    </label>
  </div>
</template>

//
<script>
// export default {
//   data() {
//     return {
//       isDarkMode: false,
//       chkId: "chk",
//     };
//   },
//   methods: {
//     toggleDarkMode() {
//       this.isDarkMode = !this.isDarkMode;
//     }
//   }
// };
//
</script>
<style>
/* ------toggle-button------- */
.toggle-button-checkbox {
  display: none;
}

.toggle-button-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* background: rgba(108, 44, 4, 0.733);
  box-shadow: 0px 0px 50px 20px #401d14; */
  padding: 0.5rem;
  height: 2rem;
  width: 5rem;
  cursor: pointer;
}

.toggle-button-label .toggle-button-ball {
  position: absolute;
  background-color: var(--color-background);
  border-radius: 50%;
  top: 0.25rem;
  left: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  transform: translateX(0);
  transition: transform 0.3s ease;
}
.material-symbols-outlined {
  color: var(--color-main-brown);
}
.toggle-button-checkbox:checked + .toggle-button-label .toggle-button-ball {
  transform: translateX(2.5rem);
}
</style>
