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
    commit("ADD_INGREDIENT", ingredient);
  },
  updateSearchString({ commit }, searchString) {
    commit("UPDATE_SEARCH_STRING", searchString);
  },
  updateIngredients({ commit }, ingredients) {
    commit("UPDATE_INGREDIENTS", ingredients);
  }
};

const mutations = {
  ADD_INGREDIENT(state, ingredient) {
    state.ingredients.unshift(ingredient);
    state.ingredients = [... new Set(state.ingredients)]
  },
  UPDATE_INGREDIENTS(state, ingredients) {
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
