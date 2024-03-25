import { defineStore } from "pinia";

export const useCityStore = defineStore({
  id: "city",
  state: () => ({
    cities: null,
  }),
  getters: {
    getCities(state) {
      return state.cities;
    },
  },
  actions: {
    // simulate a server error
    async fetchCity() {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          if (Math.random() > 0.9) {
            reject(
              new Error(
                "Simulated Server Error: Sorry, the server is not responding right now. Please try refreshing the page or come back later"
              )
            );
          } else {
            const response = await import("../content/cities.json");
            this.cities = response.default;
            resolve("foo");
          }
        }, 1000);
      });
    }
  },
});
