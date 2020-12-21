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
                v-model="ingredients"
                item-text="name"
                item-value="_id"
                :search-input.sync="searchInput"
                @change="onIngredientsChange"
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
        <v-btn color="blue darken-1" text @click="closeDialog">
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
import IngredientsService from "@/api/services/Ingredients";

export default {
  name: "CreateDish",
  data: function() {
    return {
      dialog: false,
      searchInput: "",
      dish: {
        name: "",
        ingredients: [],
        preparationTime: 0,
        imageURL: ""
      },
      ingredients: []
    };
  },
  created() {
    this.$store.dispatch("ingredients/getIngredients");
  },
  computed: {
    showDialog: function() {
      return this.$store.getters["dishes/getIsCreatingDish"];
    }
  },
  watch: {
    dialog: function(status) {
      this.$store.dispatch("dishes/setIsCreatingDish", status);
    },
    showDialog(newVal) {
      this.dialog = newVal;
    }
  },
  methods: {
    addDish: function() {
      let newDish = Object.create(this.dish);
      newDish.ingredients = this.ingredients;
      this.$store.dispatch("dishes/addDish", newDish);
    },
    closeDialog: function() {
      this.$store.dispatch("dishes/setIsCreatingDish", false);
      //this.getNewDish();
    },
    getNewDish: function() {
      this.dish = this.$store.getters["dishes/getNewDish"];
    },
    onIngredientsChange: function(ingredients) {
      this.searchInput = "";

      let ingredientList = [];
      ingredients.forEach(ingredient => {
        if (typeof ingredient === "string") {
          IngredientsService.addIngredient({ name: ingredient }).then(response => {
            return ingredientList.push(response.data.data);
          });
        }

        if (typeof ingredient === "object") {
          ingredientList.push(ingredient);
        }
      });

      this.ingredients = ingredientList;
    }
  }
};
</script>

<style scoped></style>
