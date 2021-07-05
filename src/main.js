import { createApp } from "vue";
import App from "./App.vue";
import Cookies from "js-cookie";
import store from "./store";
import router from "./router";
import Element from "element-ui";
import "normalize.css/normalize.css"; // a modern alternative to CSS resets

createApp(App)
  .use(store)
  .use(router)
  .use(Element)
  .use(Cookies)
  .mount("#app");
