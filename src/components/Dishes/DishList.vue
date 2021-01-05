<template>
  <v-container>
    <v-flex
        md12
        v-for="dish in $store.getters['dishes/getDishes']"
        v-bind:key="dish._id"
    >
      <Dish :dish="dish" />
    </v-flex>
  </v-container>
</template>

<script>

import Dish from "@/components/Dishes/Dish";

export default {
  name: "DishList",
  components: {Dish}
}
</script>

<style scoped>

</style>