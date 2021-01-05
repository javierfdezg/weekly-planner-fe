<template>
  <v-layout>
    <v-container>
      <CreateDish></CreateDish>
      <SelectDish></SelectDish>
    </v-container>
  </v-layout>
</template>

<script>
import CreateDish from "@/components/Dishes/CreateDish";
import SelectDish from "@/components/Dishes/SelectDish";

export default {
  name: "Dishes",
  created: function() {},
  components: {SelectDish, CreateDish },
  data: () => ({}),
  methods: {}
};
</script>

<style scoped></style>
