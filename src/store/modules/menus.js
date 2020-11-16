// Menus Store

const state = () => ({
  items: []
});

function getDate(day, month, year, h, m) {
  return new Date(year, month, day, h || 0, m || 0);
}

function getItemDate(type, day, month, year) {
  let data = {};

  switch (type) {
    case "breakfast":
      data = {
        startDate: getDate(day, month, year, 10, 0),
        endDate: getDate(day, month, year, 12, 0)
      };
      break;
    case "dinner":
      data = {
        startDate: getDate(day, month, year, 18, 0),
        endDate: getDate(day, month, year, 22, 0)
      };
      break;
    default:
      data = {
        startDate: getDate(day, month, year, 12, 0),
        endDate: getDate(day, month, year, 18, 0)
      };
      break;
  }

  return data;
}

const getters = {
  getItems: function(state) {
    return state.items;
  },
  getNewItem: () => {
    return function(type, day, month, year) {
      let newItemDate = getItemDate(type, day, month, year);

      return Object.create({
        id: `${year}-${month}-${day}-${type}`,
        startDate: newItemDate.startDate,
        endDate: newItemDate.endDate,
        title: type
      });
    };
  }
};

const actions = {
  updateItems: function ({commit}, items) {
    commit("updateItems", items);
  }
};

const mutations = {
  updateItems(state, items) {
    state.items = items
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
