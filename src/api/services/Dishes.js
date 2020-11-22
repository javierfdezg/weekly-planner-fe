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
  addDish() {
    return api().post('/dishes')
  }
};
