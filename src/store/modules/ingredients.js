// Ingredients Store

const state = () => ({
  ingredients: ["Tuna", "Bread", "Mayonnaise"]
});

const getters = {
  getIngredients: function(state) {
    return state.ingredients;
  }
};

const actions = {
  addIngredient({ commit }, ingredient) {
    commit("addIngredient", ingredient);
  },
  changeSearchString({ commit }, searchString) {
    commit("changeSearchString", searchString);
  }
};

const mutations = {
  addIngredient(state, ingredient) {
    state.dishes.unshift(ingredient);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
