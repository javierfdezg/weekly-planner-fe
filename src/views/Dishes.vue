<template>
  <v-container fluid>
    <v-flex md12 v-for="dish in dishes" v-bind:key="dish.id">
      <v-card class="mx-auto my-8">
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>
          Pasta Salad
        </v-card-title>

        <v-card-subtitle><v-icon>alarm</v-icon>{{ dish.preparationTime }}</v-card-subtitle>

        <v-card-text>
          <div v-for="ingredient in dish.ingredients" v-bind:key="ingredient"><span>{{ingredient}}</span></div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text @click="addToMenu">
            Add to menu
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Dishes",
  data: () => ({
    dishes: [
      { id: 0, name: "dish1", ingredients: ["Laces", "Sweet corn", "Ham"], preparationTime: 10 },
      { id: 1, name: "dish2", ingredients: ["Laces", "Sweet corn", "Ham"], preparationTime: 10 },
      { id: 2, name: "dish3", ingredients: ["Laces", "Sweet corn", "Ham"], preparationTime: 10 }
    ]
  }),

  methods: {
    addToMenu() {
      console.log("TODO: Add dish to menu...");
    }
  }
};
</script>

<style scoped></style>
