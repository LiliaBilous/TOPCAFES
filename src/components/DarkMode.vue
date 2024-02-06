<template>
  <div class="mode-toggle" @click="modeToggle" :class="darkDark">
    <div class="toggle">
      <div id="dark-mode" type="checkbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },

  methods: {
    dark() {
      document.querySelector("body").classList.add("dark-mode");
      this.darkMode = true;
      this.$emit("dark");
    },

    light() {
      document.querySelector("body").classList.remove("dark-mode");
      this.darkMode = false;
      this.$emit("light");
    },

    modeToggle() {
      if (
        this.darkMode ||
        document.querySelector("body").classList.contains("dark-mode")
      ) {
        this.light();
      } else {
        this.dark();
      }
    },
  },

  computed: {
    darkDark() {
      return this.darkMode && "darkmode-toggled";
    },
  },
};
</script>
<style>
/* ------toggle-button------- */
body.dark-mode {
  background: var(--color-main-brown);
  color: var(--color-background);
}
.introduction-block.dark-mode,
.footer.dark-mode {
  color: var(--color-background);
}

body.dark-mode .mode-toggle {
  background-color: var(--color-background);
}
body.dark-mode .toggle {
  transform: translateX(19px);
}
body.dark-mode #dark-mode &:before {
  border-radius: 50%;
  width: 150%;
  height: 85%;
  left: 40%;
  transform: translate(-10%, -40%), rotate(-35deg);
}
</style>
