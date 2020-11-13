import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import calendar from "vue-simple-calendar"

import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  calendar,
  render: h => h(App)
}).$mount("#app");
