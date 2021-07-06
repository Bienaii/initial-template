import { createApp } from "vue";
import App from "./App.vue";
import Cookies from "js-cookie";
import store from "./store";
import router from "./router";
import ElementPlus from 'element-plus';
import "normalize.css/normalize.css"; // a modern alternative to CSS resets

// 创建实例
const app = createApp(App);

app.use(ElementPlus).use(Cookies);

app.use(store);
app.use(router);
app.mount("#app");
