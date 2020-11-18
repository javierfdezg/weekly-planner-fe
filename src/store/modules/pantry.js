// Pantry Store

const state = () => ({
  items: [
    {
      id: 0,
      name: "Sweet Corn",
      amount: "10",
      type: "ingredient"
    },
    {
      id: 1,
      name: "Mayonnaise",
      amount: "1/2",
      type: "ingredient"
    },
    {
      id: 2,
      name: "Diet Cola",
      amount: "1",
      type: "Other item"
    }
  ]
});

const getters = {
  getItems: (state) => (itemType) => {
    return state.items.filter((item) => {
      return item.type === itemType;
    });
  },
  getNewItem: () => (itemType) => {
    return Object.create({
      name: "",
      amount: 0,
      type: itemType
    });
  }
};

const actions = {
  addItem({ commit }, item) {
    commit("ADD_ITEM", item);
  }
};

const mutations = {
  ADD_ITEM(state, item) {
    state.items.unshift(item);
    state.items = [...new Set(state.items)];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
