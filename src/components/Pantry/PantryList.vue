<template>
  <v-container>
    <PantryItemList item-type="ingredient"></PantryItemList>
    <PantryItemList item-type="otherItem"></PantryItemList>
  </v-container>
</template>

<script>
import PantryItemList from "@/components/Pantry/PantryItemList";
export default {
  name: "PantryList",
  components: {PantryItemList}
};
</script>

<style scoped></style>
