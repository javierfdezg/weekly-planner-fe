<template>
  <v-container>
  <CreateIngredient></CreateIngredient>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Ingredient
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $store.getters['item/getIngredients']" v-bind:key="item">
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-container>
</template>

<script>
import CreateIngredient from "@/components/Ingredients/CreateIngredient";
export default {
  name: "IngredientList",
  components: {CreateIngredient}
};
</script>

<style scoped></style>
