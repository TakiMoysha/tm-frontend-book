import { createApp } from "vue";

import PrimeVue from "primevue/config";

import App from "./App.vue";
import { definePreset } from "@primeuix/themes";
import Nora from "@primeuix/themes/nora";

// import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

const PrimeNoraPreset = definePreset(Nora, {});

createApp(App)
  .use(PrimeVue, {
    theme: { preset: PrimeNoraPreset },
    ripple: true,
  })
  .mount("#app")
