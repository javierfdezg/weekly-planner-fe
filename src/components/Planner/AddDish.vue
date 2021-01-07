<template>
  <v-dialog v-model="dialog" persistent>
    <v-card>
      <div>Dishes planned for {{ meal }}:</div>
      <ul>
        <li v-for="selectedDish in getSelectedDishes()" :key="selectedDish._id">
          {{ selectedDish.name }}
          <v-chip
              class="ma-2"
              color="red"
              text-color="white"
              @click="removeSelectedDish(selectedDish)"
          >
            Remove from plan
          </v-chip>
        </li>
      </ul>
      <v-spacer></v-spacer>
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
        <template v-slot:item.actions="{ item }">
          <v-chip
            class="ma-2"
            color="green"
            text-color="white"
            @click="selectDish(item)"
          >
            Add to plan
          </v-chip>
        </template>
      </v-data-table>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="planSelectedDishes">
          Save
        </v-btn>
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
      search: "",
      currentItem: undefined
    };
  },
  created() {
    this.$store.dispatch("dishes/getDishes");
    this.currentItem = this.$store.getters['planner/getAddDishContext'];
  },
  computed: {
    meal() {
      const dishContext = this.$store.getters["planner/getAddDishContext"];
      const mealType = dishContext ? dishContext.originalItem.type : undefined;
      const mealDate = dishContext
        ? dishContext.originalItem.startDate
        : undefined;

      return `${mealType} on the ${mealDate}`;
    },
    dishes() {
      let dishes = this.$store.getters["dishes/getDishes"];

      dishes = dishes.map(dish => {
        const ingredients = dish.ingredients
          .map(ingredient => ingredient.name)
          .join(", ");

        return {
          _id: dish._id,
          name: dish.name,
          ingredients: ingredients,
          preparationTime: dish.preparationTime
        };
      });

      return dishes;
    },
    headers() {
      return [
        {
          text: "Dish",
          align: "start",
          sortable: true,
          value: "name"
        },
        {
          text: "Ingredients",
          align: "start",
          sortable: false,
          value: "ingredients"
        },
        {
          text: "Preparation Time",
          align: "start",
          sortable: true,
          value: "preparationTime"
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        },
      ];
    },
    showDialog: function() {
      return this.$store.getters["planner/getIsAddingDish"];
    }
  },
  watch: {
    dialog: function(status) {
      this.$store.dispatch("planner/setIsAddingDish", status);
      this.$store.dispatch("planner/populateSelectedDishes");
    },
    showDialog(newVal) {
      this.dialog = newVal;
    }
  },
  methods: {
    getSelectedDishes() {
      return this.$store.getters["planner/getSelectedDishes"];
    },
    planSelectedDishes() {
      this.$store.dispatch("planner/planSelectedDishes");
      this.closeDialog();
    },
    removeSelectedDish(dish) {
      this.$store.dispatch("planner/removeSelectedDish", dish);
    },
    selectDish(dish) {
      this.$store.dispatch("planner/addSelectedDish", dish);
    },
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value
          .toString()
          .toLocaleUpperCase()
          .indexOf(search) !== -1
      );
    },
    closeDialog: function() {
      this.$store.dispatch("planner/setAddDishContext", undefined);
      this.$store.dispatch("planner/setIsAddingDish", false);
      this.$store.dispatch("planner/flushSelectedDishes");
    }
  }
};
</script>

<style scoped></style>
