// Ingredients Store

import IngredientsService from "@/api/services/Ingredients";

const state = () => ({
  isSearching: false,
  ingredients: []
});

const getters = {
  getIngredients: function(state) {
    return state.ingredients.sort();
  }
};

const actions = {
  addIngredient({ commit }, ingredient) {
    IngredientsService.addIngredient(ingredient).then(() => {
      commit("ADD_INGREDIENT", ingredient);
    });
  },
  getIngredients: function({ commit }, searchString) {
    this.state.isSearching = true;
    IngredientsService.getIngredients(searchString).then(response => {
      commit("SET_INGREDIENTS", response.data.data);
    });
  }
};

const mutations = {
  ADD_INGREDIENT(state, ingredient) {
    state.ingredients.unshift(ingredient);
    state.ingredients = [...new Set(state.ingredients)];
  },
  SET_INGREDIENTS(state, ingredients) {
    state.ingredients = ingredients;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
