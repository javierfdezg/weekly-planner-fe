<template>
  <v-container>
    <ShoppingItemList item-type="ingredient"></ShoppingItemList>
    <ShoppingItemList item-type="otherItem"></ShoppingItemList>
  </v-container>
</template>

<script>
import ShoppingItemList from "@/components/Shopping/ShoppingItemList";
export default {
  name: "Shopping",
  components: {ShoppingItemList}
};
</script>

<style scoped></style>
