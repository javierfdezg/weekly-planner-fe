<template>
  <v-container fluid>
    <Search></Search>
    <CreateDish></CreateDish>
    <v-flex md12 v-for="dish in dishes" v-bind:key="dish.id">
      <Dish :dish="dish" />
    </v-flex>
  </v-container>
</template>

<script>
import CreateDish from "@/components/CreateDish";
import Dish from "@/components/Dish";
import Search from "@/components/Search";
export default {
  name: "DishList",
  components: { Search, Dish,  CreateDish},
  data: () => ({}),
  props: {
    dishes: Array
  },
  methods: {
  }
};
</script>

<style scoped></style>
