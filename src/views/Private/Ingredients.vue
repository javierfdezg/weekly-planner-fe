<template>
  <v-layout>
    <v-container>
      <CreateIngredient></CreateIngredient>
      <IngredientList></IngredientList>
    </v-container>
  </v-layout>
</template>

<script>
import CreateIngredient from "@/components/Ingredients/CreateIngredient";
import IngredientList from "@/components/Ingredients/IngredientList";
export default {
  name: "Ingredients",
  components: { CreateIngredient, IngredientList },
  created() {
    this.$store.dispatch('ingredients/getIngredients');
  }
};
</script>

<style scoped></style>