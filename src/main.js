import Vue from "vue";
import vuetify from "@/plugins/vuetify";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
