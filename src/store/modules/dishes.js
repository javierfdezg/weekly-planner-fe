// Dishes Store

import DishesService from "@/api/services/Dishes";

const state = () => ({
  isSearching: false,
  isCreatingDish: false,
  dishes: [],
  newDish: {
    name: "",
    ingredients: [],
    preparationTime: 0,
    imageUrl: ""
  }
});

const getters = {
  getDishes: function(state) {
    return state.dishes;
  },
  getNewDish(state) {
    return Object.create(state.newDish);
  },
  getIsSearching: function(state) {
    return state.isSearching;
  },
  getIsCreatingDish: function(state) {
    return state.isCreatingDish;
  }
};

const actions = {
  addDish: function({ commit }, dish) {
    DishesService.addDish(dish).then((response) => {
      commit("ADD_DISH", response.data.data)
      commit("CREATING_DISH", false);
    });
  },
  setIsCreatingDish: function({commit}, status) {
    commit("CREATING_DISH", status);
  },
  getDishes: function({ commit }, searchString) {
    commit("SET_SEARCH_DISH", true);
    DishesService.getDishes(searchString).then(response => {
      commit("SET_DISHES", response.data.data);
      commit("SET_SEARCH_DISH", false);
    });
  }
};

const mutations = {
  ADD_DISH(state, dish) {
    state.dishes.unshift(dish);
  },
  CREATING_DISH(state, status) {
    state.isCreatingDish = status;
  },
  SET_DISHES(state, dishes) {
    state.dishes = dishes;
    this.state.isSearching = false;
  },
  SET_SEARCH_DISH(state, status) {
    this.state.isSearching = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
