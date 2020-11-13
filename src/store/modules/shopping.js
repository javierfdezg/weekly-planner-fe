// Shopping Store

const state = () => ({
  ingredients: [
    {
      id: 0,
      name: "Sweet Corn",
      amount: "10",
      location: "Mercadona"
    },
    {
      id: 1,
      name: "Mayonnaise",
      amount: "1/2",
      location: "Mercadona"
    }
  ],
  otherItems: [
    {
      id: 0,
      name: "Washing Powder",
      amount: "1",
      location: "Mercadona"
    },
    {
      id: 1,
      name: "Diet Cola",
      amount: "2",
      location: "Mercadona"
    }
  ]
});

const getters = {
  getIngredients: function(state) {
    return state.ingredients.sort()
  },
  getOtherItems: function(state) {
    return state.otherItems.sort()
  }
};

const actions = {
  addIngredient({ commit }, ingredient) {
    commit("addIngredient", ingredient);
  },
  addOtherItem({ commit }, otherItem) {
    commit("addOtherItem", otherItem);
  }
};

const mutations = {
  addIngredient(state, ingredient) {
    state.ingredients.unshift(ingredient);
    state.ingredients = [... new Set(state.ingredients)]
  },
  addOtherItem(state, otherItem) {
    state.otherItem.unshift(otherItem);
    state.otherItem = [... new Set(state.otherItem)]
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
