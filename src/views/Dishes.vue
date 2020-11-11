<template>
  <v-container fluid=true>
    <v-flex md12 v-for="item in items" v-bind:key="item.id">
      <v-card class="mx-auto my-8">
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Pasta Salad</v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1">
            Ingredients
          </div>

          <div>Laces, sweet corn, ham, mayonnaise</div>
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
    items: [{id: 0, name: "dish1"}, {id: 1, name: "dish2"}, {id: 2, name: "dish3"}]
  }),

  methods: {
    addToMenu() {
      console.log("TODO: Add dish to menu...");
    }
  }
};
</script>

<style scoped></style>
