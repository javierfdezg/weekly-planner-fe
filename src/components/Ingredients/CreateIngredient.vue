<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Add Ingredient
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add Ingredient</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  v-model="ingredient"
                  label="Ingredient*"
                  required
              ></v-text-field>
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
        <v-btn color="blue darken-1" text @click="addIngredient">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateIngredient",
  data: function() {
    return {
      dialog: false,
      ingredient: "",
    };
  },
  methods: {
    addIngredient: function() {
      this.$store.dispatch("item/addIngredient", this.ingredient);
      this.closeDialog();
    },
    closeDialog: function() {
      this.dialog = false;
      this.clearIngredient();
    },
    clearIngredient: function() {
      this.ingredient = ""
    }
  }
};
</script>

<style scoped></style>
