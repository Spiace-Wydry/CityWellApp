import { createApp } from "vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import App from "./App.vue";
import router from "./router";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "quasar/src/css/index.sass";
import iconSet from "quasar/icon-set/fontawesome-v6";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  iconSet: iconSet,
});

app.mount("#app");
