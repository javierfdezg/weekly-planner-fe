<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Javier Fernández
            </v-list-item-title>
            <v-list-item-subtitle>javierfdezg@uoc.edu</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
          nav
          dense
      >
        <v-list-item link to="/menus">
          <v-list-item-icon>
            <v-icon>mdi-calendar</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Menus</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/dishes">
          <v-list-item-icon>
            <v-icon>mdi-food-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dishes</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/ingredients">
          <v-list-item-icon>
            <v-icon>mdi-food-apple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Ingredients</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/pantry">
          <v-list-item-icon>
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Pantry</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/shopping">
          <v-list-item-icon>
            <v-icon>mdi-shopping</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shopping</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <h1>{{ $store.getters['getActiveSection'] }}</h1>
    </v-app-bar>

    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fill-height>

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