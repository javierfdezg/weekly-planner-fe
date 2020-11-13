<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Add {{ itemTypeString }}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add {{ itemTypeString }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="item.name"
                v-bind:label="itemTypeString+'*'"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="item.amount"
                label="Amount*"
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
        <v-btn color="blue darken-1" text @click="addItem">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AddItem",
  data: function() {
    return {
      dialog: false,
      item: {
        name: "",
        amount: ""
      }
    };
  },
  props: {
    itemType: String
  },
  computed: {
    itemTypeString: function() {
      return this.itemType == "ingredient" ? "Ingredient" : "Other Item";
    }
  },
  methods: {
    addItem: function() {
      this.item.type = this.itemType;
      this.$store.dispatch("pantry/addItem", this.item);
      this.closeDialog();
    },
    closeDialog: function() {
      this.dialog = false;
      this.clearItem();
    },
    clearItem: function() {
      this.item = this.$store.getters["pantry/getNewItem"](this.itemType);
    }
  }
};
</script>

<style scoped></style>
