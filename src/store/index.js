import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dishes: {
      namespaced: true,
      state: () => ({
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
      }),
      getters: {
        getDishes: function(state) {
          if (state.searchString) {
            return state.dishes.filter(dish => {
              return dish.name.contains(state.searchString);
            });
          }
          return state.dishes;
        }
      },
      mutations: {
        addDish(state, dish) {
          state.dishes.unshift(dish);
        },
        changeSearchString(state, searchString) {
          state.searchString = searchString;
        }
      },
      actions: {
        addDish({ commit }, dish) {
          commit("addDish", dish);
        },
        changeSearchString({ commit }, searchString) {
          commit("changeSearchString", searchString);
        }
      }
    },
    ingredients: {
      namespaced: true,
      state: () => ({
        ingredients: ["Tuna", "Bread", "Mayonnaise"]
      }),
      getters: {
        getIngredients: function(state) {
          return state.ingredients;
        }
      },
      mutations: {
        addIngredient(state, ingredient) {
          state.dishes.unshift(ingredient);
        }
      },
      actions: {
        addIngredient({ commit }, ingredient) {
          commit("addIngredient", ingredient);
        },
        changeSearchString({ commit }, searchString) {
          commit("changeSearchString", searchString);
        }
      }
    }
  }
});
