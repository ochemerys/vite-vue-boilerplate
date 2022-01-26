import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

const head = createHead();

createApp(App).use(router).use(store).use(head).mount("#app");
