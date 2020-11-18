import api from "@/api/api";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

let dishList = [
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
];
mock.onGet("/dishes").reply(200, {
  dishes: dishList
});

export default {
  name: "DishesService",
  getDishes(searchString) {
    let parameters = "";
    if (searchString) {
      parameters = `?search=${searchString}`;
    }

    return api().get(`/dishes${parameters}`);
  }
};
