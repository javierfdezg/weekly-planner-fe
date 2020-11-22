// Dishes Store

import DishesService from "@/api/services/Dishes";

const state = () => ({
  isSearching: false,
  isCreatingDish: false,
  dishes: []
});

const getters = {
  getDishes: function(state) {
    return state.dishes;
  },
  getNewDish() {
    return Object.create({
      name: "",
      ingredients: [],
      preparationTime: 0,
      imageURL: ""
    });
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
    console.log(dish);
    commit("CREATING_DISH", true)
    DishesService.addDish().then(() => {
      commit("CREATING_DISH", false);
    });
  },
  setIsCreatingDish: function({commit}, status) {
    commit("CREATING_DISH", status);
  },
  getDishes: function({ commit }, searchString) {
    this.state.isSearching = true;
    DishesService.getDishes(searchString).then(response => {
      commit("SET_DISHES", response.data.data);
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
