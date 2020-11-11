<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <router-link to="/weekly-menus">Weekly Menu</router-link> | <br />
      <router-link to="/dishes">Dishes</router-link> | <br />
      <router-link to="/leftovers">Leftovers</router-link> | <br />
      <router-link to="/pantry">Pantry</router-link> | <br />
      <router-link to="/shopping">Shopping</router-link>
    </v-navigation-drawer>

    <v-app-bar app>
      <h1>App bar</h1>
    </v-app-bar>

    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <h1>Footer</h1>
    </v-footer>
  </v-app>
</template>

<style>

</style>
