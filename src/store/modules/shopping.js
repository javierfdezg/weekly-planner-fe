// Shopping Store

const state = () => ({
  items: [
    {
      id: 0,
      name: "Sweet Corn",
      amount: "10",
      location: "Mercadona",
      type: "ingredient"
    },
    {
      id: 1,
      name: "Mayonnaise",
      amount: "1/2",
      location: "Mercadona",
      type: "ingredient"
    },
    {
      id: 2,
      name: "Washing Powder",
      amount: "1",
      location: "Mercadona",
      type: "otherItem"
    },
    {
      id: 3,
      name: "Diet Cola",
      amount: "2",
      location: "Mercadona",
      type: "otherItem"
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
    commit("addItem", item);
  }
};

const mutations = {
  addItem(state, item) {
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
