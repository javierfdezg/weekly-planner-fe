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
            <th class="text-left">
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in $store.getters['shopping/getItems'](itemType)"
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
import AddItem from "@/components/Shopping/AddItem";
export default {
  name: "ShoppingItemList",
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
