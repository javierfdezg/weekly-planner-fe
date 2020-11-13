<template>
  <v-container>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Ingredients
            </th>
            <th class="text-left">
              Amount
            </th>
            <th class="text-left">
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in $store.getters['shopping/getIngredients']"
            v-bind:key="item.id"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.amount }}</td>
            <td>{{ item.location }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "ShoppingIngredientList",
  components: {}
};
</script>

<style scoped></style>
