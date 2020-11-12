import Vue from "vue";
import Vuex from "vuex";
import dishes from "@/store/modules/dishes";
import ingredients from "@/store/modules/ingredients";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSection: "Dishes"
  },
  getters: {
    getActiveSection: (state) => {
      return state.activeSection;
    }
  },
  actions: {
    setActiveSection: function({ commit }, section) {
      commit("setActiveSection", section);
    }
  },
  mutations: {
    setActiveSection(state, section) {
      state.activeSection = section;
    }
  },
  modules: {
    dishes,
    ingredients
  }
});
