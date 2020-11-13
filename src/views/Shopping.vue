<template>
  <v-container>
    <ShoppingList></ShoppingList>
  </v-container>
</template>

<script>
import ShoppingList from "@/components/Shopping/ShoppingList";
export default {
  name: "Shopping",
  components: {ShoppingList}
};
</script>

<style scoped></style>
