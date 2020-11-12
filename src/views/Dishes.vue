<template>
  <v-container fluid>
    <DishList :dishes="$store.getters['dishes/getDishes']" />
  </v-container>
</template>

<script>
import DishList from "@/components/DishList";
export default {
  name: "Dishes",
  components: { DishList }
};
</script>

<style scoped></style>
