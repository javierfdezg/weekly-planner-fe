<template>
  <v-app>
    <v-navigation-drawer app permanent expand-on-hover class="navigation-menu">
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://media-exp1.licdn.com/dms/image/C4E03AQF6JdnUMLS4Zw/profile-displayphoto-shrink_200_200/0?e=1611187200&v=beta&t=Ei0T9gcrGksPWoKTQUAeOdj-DBF1cdzSzxot-Cym-pw"></v-img>
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
            <v-icon>mdi-silverware-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dishes</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/ingredients">
          <v-list-item-icon>
            <v-icon>mdi-food-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Ingredients</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/pantry">
          <v-list-item-icon>
            <v-icon>mdi-fridge</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Pantry</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/shopping">
          <v-list-item-icon>
            <v-icon>mdi-cart</v-icon>
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
      <v-container>

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
.navigation-menu .v-list-item__content {
    padding: 16px 12px;
}
</style>