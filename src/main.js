function loadGoogleMapsScript() {
  const googleMapsApiKey = import.meta.env.VITE_MAP_API_KEY;

  if (!googleMapsApiKey) {
    console.error("Google Maps API Key is missing.");
    return;
  }

  ((g) => {
    var h,
      a,
      k,
      p = "The Google Maps JavaScript API",
      c = "google",
      l = "importLibrary",
      q = "__ib__",
      m = document,
      b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
      r = new Set(),
      e = new URLSearchParams(),
      u = () =>
        h ||
        (h = new Promise((f, n) => {
          a = m.createElement("script");
          e.set("libraries", [...r] + "");
          for (k in g)
            e.set(
              k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
              g[k]
            );
          e.set("callback", c + ".maps." + q);
          a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
          d[q] = f;
          a.onerror = () => (h = n(Error(p + " could not load.")));
          a.nonce = m.querySelector("script[nonce]")?.nonce || "";
          m.head.append(a);
        }));
    d[l]
      ? console.warn(p + " only loads once. Ignoring:", g)
      : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
  })({
    key: googleMapsApiKey,
  });
}

document.addEventListener("DOMContentLoaded", loadGoogleMapsScript);

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
