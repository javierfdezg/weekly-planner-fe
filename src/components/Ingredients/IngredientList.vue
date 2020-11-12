<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $store.getters['ingredients/getIngredients']" v-bind:key="item">
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "IngredientList"
};
</script>

<style scoped></style>
