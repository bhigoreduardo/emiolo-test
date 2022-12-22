import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

createApp(App).use(router, bootstrap).component('fa', FontAwesomeIcon).mount("#app");
