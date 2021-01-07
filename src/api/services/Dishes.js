import api from "@/api/api";

export default {
  name: "DishesService",
  getDishes(searchString) {
    let parameters = "";
    if (searchString) {
      parameters = `?search=${searchString}`;
    }

    return api().get(`/dishes/${parameters}`);
  },
  getDish: function (id) {
    return api().get(`/dishes/${id}`);
  },
  addDish: function(dish) {
    // TODO: should this be in this layer?
    let ingredients = null;
    if (dish.ingredients && dish.ingredients.length !== 0) {
      ingredients = dish.ingredients.map(ingredient => ingredient._id);
    }

    dish.ingredients = ingredients;

    return api().post("/dishes", {
      name: dish.name,
      imageURL: dish.imageURL,
      ingredients: dish.ingredients,
      preparationTime: dish.preparationTime
    });
  }
};
