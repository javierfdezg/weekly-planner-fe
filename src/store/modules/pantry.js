// Pantry Store

const state = () => ({
  ingredients: [
    {
      id: 0,
      name: "Sweet Corn",
      amount: "10"
    },
    {
      id: 1,
      name: "Mayonnaise",
      amount: "1/2"
    }
  ]
});

const getters = {
  getIngredients: function(state) {
    return state.ingredients.sort()
  }
};

const actions = {
  addIngredient({ commit }, ingredient) {
    commit("addIngredient", ingredient);
  }
};

const mutations = {
  addIngredient(state, ingredient) {
    state.ingredients.unshift(ingredient);
    state.ingredients = [... new Set(state.ingredients)]
  },

};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
