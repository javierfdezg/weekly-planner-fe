<template>
  <DishList :dishes="dishes" />
</template>

<script>
import DishList from "@/components/DishList";
export default {
  name: "Dishes",
  components: {DishList},
  data: () => {
    return ({
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
  }
};
</script>

<style scoped></style>
