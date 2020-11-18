// Dishes Store

import DishesService from "@/api/services/Dishes";

const state = () => ({
  searchString: "",
  dishes: []
});

const getters = {
  getDishes: function(state) {
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
  addDish: function({ commit }, dish) {
    commit("ADD_DISH", dish);
    this.dispatch("ingredients/updateIngredients", dish.ingredients, {
      root: true
    });
  },
  changeSearchString({ commit }, searchString) {
    commit("UPDATE_SEARCH_STRING", searchString);
  },
  getDishes: function({ commit }) {
    DishesService.getDishes().then(response => {
      commit("SET_DISHES", response.data.dishes);
    });
  }
};

const mutations = {
  ADD_DISH(state, dish) {
    state.dishes.unshift(dish);
  },
  UPDATE_SEARCH_STRING(state, searchString) {
    state.searchString = searchString;
  },
  SET_DISHES(state, dishes) {
    console.log(dishes)
    state.dishes = dishes
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
