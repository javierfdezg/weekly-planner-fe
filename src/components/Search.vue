<template>
  <v-form>
    <v-autocomplete
      v-model="searchString"
      :append-icon-cb="hello"
      :disabled="isUpdating"
      :items="$store.getters['dishes/getDishes']"
      :open-on-click="false"
      append-icon="search"
      chips
      clearable
      color="orange"
      item-text="name"
      item-value="id"
      label="Search"
      multiple
      solo
    >
    </v-autocomplete>
  </v-form>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    searchString: "",
    isUpdating: false
  }),
  methods: {
    hello() {
      console.log(this.searchString);
    }
  }
};
</script>

<style scoped></style>
