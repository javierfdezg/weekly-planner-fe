<template>
  <v-layout>
    <v-container>
      <ShoppingItemList item-type="ingredient"></ShoppingItemList>
      <ShoppingItemList item-type="otherItem"></ShoppingItemList>
    </v-container>
  </v-layout>
</template>

<script>
import ShoppingItemList from "@/components/Shopping/ShoppingItemList";
export default {
  name: "Shopping",
  components: {ShoppingItemList}
};
</script>

<style scoped></style>
