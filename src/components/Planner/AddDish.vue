<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <SelectDish></SelectDish>
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
import SelectDish from "@/components/Dishes/SelectDish";
export default {
  name: "AddDish",
  components: {SelectDish},
  data: function() {
    return {
      dialog: false,
    }
  },
  computed: {
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
    closeDialog: function() {
      this.$store.dispatch("planner/setIsAddingDish", false);
      this.$store.dispatch("planner/setAddDishContext", undefined);
    },
  }
};
</script>

<style scoped></style>
