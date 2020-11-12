<template>
  <v-container>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Ingredient
            </th>
            <th class="text-left">
              How much?
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in $store.getters['pantry/getIngredients']"
            v-bind:key="item.id"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "PantryList",
  components: {}
};
</script>

<style scoped></style>
