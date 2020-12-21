import api from "@/api/api";

export default {
  name: "IngredientsService",
  getIngredients(searchString) {
    let parameters = "";
    if (searchString) {
      parameters = `?search=${searchString}`;
    }

    return api().get(`/ingredients/${parameters}`);
  },
  addIngredient(ingredient) {
    console.log(ingredient);
    return api().post('/ingredients', ingredient);
  }
};
