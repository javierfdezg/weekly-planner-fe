<template>
  <v-dialog v-model="dialog" persistent>
    <v-card>
      Dishes planned for XXXXX:
    </v-card>
    <v-card>
      <v-data-table
          :headers="headers"
          :items="dishes"
          item-key="name"
          class="elevation-1"
          :search="search"
          :custom-filter="filterOnlyCapsText"
      >
        <template v-slot:top>
          <v-text-field
              v-model="search"
              label="Search (UPPER CASE ONLY)"
              class="mx-4"
          ></v-text-field>
        </template>
      </v-data-table>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddDish",
  components: {},
  data: function() {
    return {
      dialog: false,
      search: '',
    }
  },
  created() {
    this.$store.dispatch("dishes/getDishes");
  },
  computed: {
    dishes() {
      let dishes = this.$store.getters["dishes/getDishes"];

      dishes = dishes.map(dish => {

        const ingredients = dish.ingredients.map(ingredient => ingredient.name).join(", ");

        return {
          name: dish.name,
          ingredients: ingredients,
          preparationTime: dish.preparationTime
        };
      });

      return dishes;
    },
    headers() {
      return [{
        text: 'Dish',
        align: 'start',
        sortable: true,
        value: 'name'
      }, {
        text: 'Ingredients',
        align: 'start',
        sortable: false,
        value: 'ingredients'
      }, {
        text: 'Preparation Time',
        align: 'start',
        sortable: true,
        value: 'preparationTime'
      }]
    },
    showDialog: function() {
      return this.$store.getters["planner/getIsAddingDish"];
    }
  },
  watch: {
    dialog: function(status) {
      this.$store.dispatch("planner/setIsAddingDish", status);
    },
    showDialog(newVal) {
      this.dialog = newVal;
    }
  },
  methods: {
    filterOnlyCapsText(value, search) {
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },
    closeDialog: function() {
      this.$store.dispatch("planner/setIsAddingDish", false);
      this.$store.dispatch("planner/setAddDishContext", undefined);
    },
  }
};
</script>

<style scoped></style>
