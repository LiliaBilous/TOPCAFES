<template>
  <div class="header__item dark-theme">
    <i class="material-icons wb_sunny" v-if="nigthMode" @click="toggle()"
      >&#xe430;</i
    >
    <i class="material-icons mode_night" v-else @click="nigthMode = !nigthMode"
      >&#xf036;</i
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      nigthMode: false,
    };
  },
  watch: {
    nigthMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nigthMode));
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
};
</script>
<style>

</style>