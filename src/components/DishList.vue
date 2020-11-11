<template>
  <v-container fluid>
    <v-flex md12 v-for="dish in dishes" v-bind:key="dish.id">
      <Dish :dish=dish />
    </v-flex>
  </v-container>
</template>

<script>
import Dish from "@/components/Dish";
export default {
  name: "DishList",
  components: {Dish},
  props: {
    dishes: Array
  }
}
</script>

<style scoped>

</style>