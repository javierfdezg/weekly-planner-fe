<template>
  <v-layout>
    <v-container>
      <SearchDish></SearchDish>
      <DishList></DishList>
    </v-container>
  </v-layout>
</template>


<script>
import SearchDish from "@/components/Dishes/SearchDish";
import DishList from "@/components/Dishes/DishList";

export default {
name: "SelectDish",
  components: { SearchDish, DishList }
}
</script>

<style scoped>

</style>