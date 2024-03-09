import { defineStore } from "pinia";

export const useCafeStore = defineStore({
  id: "cafe",
  state: () => ({
    cafes: null,
  }),
  getters: {
    getCafes(state) {
      return state.cafes;
    },
  },
  actions: {
    // simulate a server error
    async fetchCafes() {
      if (Math.random() > 0.9) {
        throw new Error(
          "Simulated Server Error: Sorry, the server is not responding right now. Please try refreshing the page or come back later"
        );
      } else {
        //simulate loading
        setTimeout(async () => {
          const response = await import("../content/cafes.json");
          this.cafes = response.default;
        }, 1000);
      }
    },
  },
});
