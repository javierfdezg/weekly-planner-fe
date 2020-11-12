<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Add dish
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add Dish</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="dish.name"
                label="Name*"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="number"
                v-model="dish.preparationTime"
                label="Preparation Time"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-combobox
                :items="$store.getters['ingredients/getIngredients']"
                v-model="dish.ingredients"
                clearable
                hide-selected
                multiple
                persistent-hint
                small-chips
              ></v-combobox>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="addDish">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateDish",
  data: () => ({
    dialog: false,
  }),
  props: {
    dish: {
      name: String,
      preparationTime: Number,
      ingredients: Array
    }
  },
  methods: {
    addDish: function() {
      this.$store.dispatch("dishes/addDish", this.dish);
      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
