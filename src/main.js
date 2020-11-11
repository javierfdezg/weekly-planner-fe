import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
