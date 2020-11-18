<template>
  <v-layout>
    <v-container>
      <Search></Search>
      <CreateDish></CreateDish>
      <v-flex
        md12
        v-for="dish in $store.getters['dishes/getDishes']"
        v-bind:key="dish.id"
      >
        <Dish :dish="dish" />
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
import CreateDish from "@/components/Dishes/CreateDish";
import Dish from "@/components/Dishes/Dish";
import Search from "@/components/Search";
export default {
  name: "DishList",
  created: function() {
    this.$store.dispatch('dishes/getDishes')
  },
  components: { Search, Dish, CreateDish },
  data: () => ({}),
  methods: {}
};
</script>

<style scoped></style>
