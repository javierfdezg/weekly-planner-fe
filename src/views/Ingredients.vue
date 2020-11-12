<template>
  <v-container fluid>
    <IngredientList/>
  </v-container>
</template>

<script>
import IngredientList from "@/components/Ingredients/IngredientList";
export default {
  name: "Ingredients",
  components: { IngredientList }
};
</script>

<style scoped></style>