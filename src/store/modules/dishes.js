// Dishes Store

import DishesService from "@/api/services/Dishes";

const state = () => ({
  isSearching: false,
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
  }
};

const actions = {
  addDish: function({ commit }, dish) {
    commit("ADD_DISH", dish);
    this.dispatch("ingredients/updateIngredients", dish.ingredients, {
      root: true
    });
  },
  getDishes: function({ commit }, searchString) {
    this.state.isSearching = true;
    DishesService.getDishes(searchString).then(response => {
      commit("SET_DISHES", response.data.dishes);
    });
  }
};

const mutations = {
  ADD_DISH(state, dish) {
    state.dishes.unshift(dish);
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
