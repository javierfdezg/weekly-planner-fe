// Ingredients Store

const state = () => ({
  ingredients: ["Tuna", "Bread", "Mayonnaise"]
});

const getters = {
  getIngredients: function(state) {
    return state.ingredients.sort()
  }
};

const actions = {
  addIngredient({ commit }, ingredient) {
    commit("addIngredient", ingredient);
  },
  changeSearchString({ commit }, searchString) {
    commit("changeSearchString", searchString);
  },
  updateIngredients({ commit }, ingredients) {
    commit("updateIngredients", ingredients);
  }
};

const mutations = {
  addIngredient(state, ingredient) {
    state.dishes.unshift(ingredient);
  },
  updateIngredients(state, ingredients) {
    state.ingredients = [... new Set(state.ingredients.concat(ingredients))]
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
