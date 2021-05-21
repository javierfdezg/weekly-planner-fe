import api from "@/api/api";

export default {
  name: "MealsService",
  getMealsForRange(range) {
    console.log(range);
    return api().get(`/meals`);
  },
  getMeal: function (id) {
    return api().get(`/meals/${id}`);
  },
  addMeal: function(item) {
    return api().post("/meals", item);
  }
};
