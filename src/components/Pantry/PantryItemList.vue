<template>
  <v-container>
    <AddItem :item-type="itemType"></AddItem>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              {{ itemTypeString }}
            </th>
            <th class="text-left">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in $store.getters['pantry/getItems'](itemType)"
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
import AddItem from "@/components/Pantry/AddItem";
export default {
  name: "PantryItemList",
  components: {AddItem},
  computed: {
    itemTypeString: function () {
      return this.itemType === "ingredient" ? "Ingredients" : "Other Items";
    }
  },
  props: {
    itemType: String
  }
};
</script>

<style scoped></style>
