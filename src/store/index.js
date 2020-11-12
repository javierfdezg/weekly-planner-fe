import Vue from "vue";
import Vuex from "vuex";
import dishes from "@/store/modules/dishes";
import ingredients from "@/store/modules/ingredients";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dishes,
    ingredients
  }
});
