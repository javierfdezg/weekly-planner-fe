<template>
  <v-container>
    <ShoppingIngredientList></ShoppingIngredientList>
    <ShoppingOtherItemList></ShoppingOtherItemList>
  </v-container>
</template>

<script>
import ShoppingIngredientList from "@/components/Shopping/ShoppingIngredientList";
import ShoppingOtherItemList from "@/components/Shopping/ShoppingOtherItemList";
export default {
  name: "ShoppingList",
  components: {ShoppingOtherItemList, ShoppingIngredientList}
};
</script>

<style scoped></style>
