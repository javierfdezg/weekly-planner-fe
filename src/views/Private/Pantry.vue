<template>
  <v-layout>
    <v-container>
      <PantryItemList item-type="ingredient"></PantryItemList>
      <PantryItemList item-type="otherItem"></PantryItemList>
  </v-container>
  </v-layout>
</template>

<script>
import PantryItemList from "@/components/Pantry/PantryItemList";
export default {
  name: "Pantry",
  components: {PantryItemList}
};
</script>

<style scoped></style>
