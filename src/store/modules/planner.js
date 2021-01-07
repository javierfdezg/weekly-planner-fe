// Planner Store
import DishesService from "@/api/services/Dishes";

const state = () => ({
  isAddingDish: false,
  addDishContext: undefined,
  selectedDishes: [],
  items: [
    {
      id: `2020-10-16-lunch`,
      startDate: getDate(16, 10, 2020, 12, 0),
      endDate: getDate(16, 10, 2020, 18, 0),
      title: "Real1",
      type: "lunch",
      dishes: [
        {
          id: "d0",
          name: "Pumpkin puree",
          preparationTime: 120
        },
        {
          id: "d1",
          name: "Roasted chicken",
          preparationTime: 20
        }
      ]
    },
    {
      id: `2020-10-17-lunch`,
      startDate: getDate(17, 10, 2020, 12, 0),
      endDate: getDate(17, 10, 2020, 18, 0),
      title: "Real2",
      type: "lunch",
      dishes: [
        {
          id: "d0",
          name: "Pasta salad",
          preparationTime: 20
        },
        {
          id: "d1",
          name: "Tuna sandwich",
          preparationTime: 15
        }
      ]
    }
  ]
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

function getNewItem(type, day, month, year, placeholder) {
  let newItemDate = getItemDate(type, day, month, year);

  return Object.create({
    id: `${year}-${month}-${day}-${type}`,
    startDate: newItemDate.startDate,
    endDate: newItemDate.endDate,
    title: type,
    isPlaceHolder: placeholder,
    type: type
  });
}

function getMealsForDay(state, dateString) {
  let items = state.items.filter(item => {
    let itemDate = new Date(item.startDate.toDateString())
      .toISOString()
      .split("T")[0];
    let date = new Date(dateString).toISOString().split("T")[0];

    return itemDate === date;
  });

  return items;
}

function getCountForMealType(meals, type) {
  return meals.filter(meal => {
    return meal.type === type;
  }).length;
}

const getters = {
  getSelectedDishes: function(state) {
      return state.selectedDishes;
  },
  getAddDishContext: function(state) {
    return state.addDishContext;
  },
  getIsAddingDish: function(state) {
    return state.isAddingDish;
  },
  getItems: function(state) {
    return state.items;
  },
  getItemsForRange: state => {
    return function(range) {
      let start = Date.parse(range.periodStart);
      let end = Date.parse(range.periodEnd);

      let loop = new Date(start);
      let items = [];

      while (loop <= end) {
        let meals = getMealsForDay(state, new Date(loop).toDateString());

        let breakfastCount = getCountForMealType(meals, "breakfast");
        let lunchCount = getCountForMealType(meals, "lunch");
        let dinnerCount = getCountForMealType(meals, "dinner");

        if (0 === breakfastCount) {
          items.push(
            getNewItem(
              "breakfast",
              loop.getDate(),
              loop.getMonth(),
              loop.getFullYear(),
              true
            )
          );
        } else {
          items.push(
            meals.filter(meal => {
              return meal.type === "breakfast";
            })[0]
          );
        }

        if (0 === lunchCount) {
          items.push(
            getNewItem(
              "lunch",
              loop.getDate(),
              loop.getMonth(),
              loop.getFullYear(),
              true
            )
          );
        } else {
          items.push(
            meals.filter(meal => {
              return meal.type === "lunch";
            })[0]
          );
        }

        if (0 === dinnerCount) {
          items.push(
            getNewItem(
              "dinner",
              loop.getDate(),
              loop.getMonth(),
              loop.getFullYear(),
              true
            )
          );
        } else {
          items.push(
            meals.filter(meal => {
              return meal.type === "dinner";
            })[0]
          );
        }

        let newDate = loop.setDate(loop.getDate() + 1);
        loop = new Date(newDate);
      }

      return items;
    };
  }
};

const actions = {
  addItem: function({ commit }, item) {
    commit("ADD_OR_REPLACE_ITEM", item);
  },
  updateItems: function({ commit }, items) {
    commit("UPDATE_ITEMS", items);
  },
  setIsAddingDish: function({ commit }, status) {
    commit("ADDING_DISH", status);
  },
  setAddDishContext: function({ commit }, context) {
    commit("ADDING_DISH_CONTEXT", context);
  },
  addSelectedDish: function({ commit }, dish) {
    DishesService.getDish(dish._id).then(response => {
      commit("ADD_SELECTED_DISH", response.data.data);
    });
  },
  removeSelectedDish: function({ commit }, dish) {
    commit("REMOVE_SELECTED_DISH", dish);
  },
  flushSelectedDishes: function({ commit }) {
    commit("FLUSH_SELECTED_DISHES");
  },
  planSelectedDishes: function({ commit, state }) {

    let dishes = [];
    let originalDishes = [];

    if (state.selectedDishes.length === 0) {
      console.log('No dishes to plan');
      return;
    }

    state.selectedDishes.forEach(dish => {
      originalDishes.push(dish);

      dishes.push({
        id: dish._id,
        name: dish.name,
        preparationTime: dish.preparationTime
      });
    });

    let item = {
      id: state.addDishContext.id,
      startDate: state.addDishContext.startDate,
      endDate: state.addDishContext.endDate,
      title: state.addDishContext.id,
      type: state.addDishContext.originalItem.type,
      dishes: dishes,
      originalDishes: originalDishes
    };

    commit("ADD_OR_REPLACE_ITEM", item);
    commit("ADDING_DISH", false);
    commit("ADDING_DISH_CONTEXT", undefined);
  },
  populateSelectedDishes: function ({state}) {
    if (state.addDishContext &&
      state.addDishContext.originalItem &&
      state.addDishContext.originalItem.originalDishes) {

      state.selectedDishes = state.addDishContext.originalItem.originalDishes;
      return;
    }

    if (state.selectedDishes.length > 0) {
      return;
    }

    state.selectedDishes = [];
  }
};

const mutations = {
  ADD_OR_REPLACE_ITEM(state, item) {
    console.log(state.items);
    let foundIndex = state.items.findIndex(x => x.id == item.id);
    console.log(foundIndex);
    if (foundIndex === -1) {
      state.items.push(item);
      return;
    }

    state.items[foundIndex] = item;
  },
  UPDATE_ITEMS(state, items) {
    state.items = items;
  },
  ADDING_DISH(state, status) {
    state.isAddingDish = status;
  },
  ADDING_DISH_CONTEXT(state, context) {
    state.addDishContext = context;
  },
  ADD_SELECTED_DISH(state, dish) {
    state.selectedDishes.push(dish);
  },
  REMOVE_SELECTED_DISH(state, dish) {
    state.selectedDishes = state.selectedDishes.filter(function(selectedDish) {
      return selectedDish._id !== dish._id;
    });
  },
  FLUSH_SELECTED_DISHES(state) {
    state.selectedDishes = [];
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
