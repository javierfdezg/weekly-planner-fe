<template>
  <v-form>
    <v-autocomplete
        v-model="searchString"
        :append-icon-cb="hello"
        :items="$store.getters['dishes/getDishes']"
        :loading="$store.getters['dishes/getIsSearching']"
        :open-on-click="false"
        :search-input.sync="search"
        chips
        clearable
        color="orange"
        item-text="name"
        item-value="id"
        label="Search dish"
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
    search: null
  }),
  watch: {
    search() {
      if(!this.searchString) {
        return;
      }

      this.filterDishes(this.searchString)
    }
  },
  created() {
    this.$store.dispatch('dishes/getDishes', this.searchString)
  },
  methods: {
    filterDishes(searchString) {
      // cancel pending call
      clearTimeout(this._timerId);

      this.isLoading = true;

      // delay new call 500ms
      this._timerId = setTimeout(() => {
        this.$store.dispatch('dishes/getDishes', searchString)
      }, 500);
    },
    hello() {
      console.log(this.searchString);
    }
  }
};
</script>

<style scoped></style>
