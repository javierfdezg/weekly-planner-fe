
// Dishes Store

const state = () => ({
  searchString: "",
  dishes: [
    {
      id: 0,
      name: "Pasta Salad",
      ingredients: ["Laces", "Sweet corn", "Ham"],
      preparationTime: 10,
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
    },
    {
      id: 1,
      name: "Pasta Salad",
      ingredients: ["Laces", "Sweet corn", "Ham"],
      preparationTime: 10,
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
    },
    {
      id: 2,
      name: "Pasta Salad",
      ingredients: ["Laces", "Sweet corn", "Ham"],
      preparationTime: 10,
      imageUrl: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
    }
  ]
});

const getters = {
  getDishes: function(state) {
    if (state.searchString) {
      return state.dishes.filter(dish => {
        return dish.name.contains(state.searchString);
      });
    }
    return state.dishes;
  },
  getNewDish() {
    return Object.create({
      name: "",
      ingredients: [],
      preparationTime: 0,
      imageURL: ""
    });
  }
};

const actions = {
  addDish: function ({commit}, dish) {
    commit("addDish", dish);
    this.dispatch("ingredients/updateIngredients", dish.ingredients, {root: true})
  },
  changeSearchString({ commit }, searchString) {
    commit("changeSearchString", searchString);
  }
};

const mutations = {
  addDish(state, dish) {
    state.dishes.unshift(dish);
  },
  changeSearchString(state, searchString) {
    state.searchString = searchString;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
