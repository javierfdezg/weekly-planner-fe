<template>
  <v-card class="mx-auto my-8">
    <v-img
      v-if="dish.imageUrl"
      :src="dish.imageUrl"
      height="250"
    ></v-img>

    <v-card-title>
      {{ dish.name }}
    </v-card-title>

    <v-card-subtitle
      ><v-icon>mdi-alarm</v-icon>{{ dish.preparationTime }}
      <v-icon>mdi-recycle</v-icon>{{ dish.portions }}
    </v-card-subtitle
    >

    <v-card-text>
      <div v-for="ingredient in dish.ingredients" v-bind:key="ingredient._id">
        <span>{{ ingredient.name }}</span>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="addToMenu(dish)">
        Add to menu
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "Dish",
  props: {
    dish: {
      id: Number,
      imageURL: String,
      name: String,
      preparationTime: Number,
      ingredients: Array
    }
  },
  methods: {
    addToMenu(dish) {
      this.$store.dispatch("planner/planDish", dish);
    }
  }
};
</script>

<style scoped></style>
