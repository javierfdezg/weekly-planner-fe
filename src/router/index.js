import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/weekly-menus",
    name: "Menus",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Menus.vue")
  },
  {
    path: "/dishes",
    name: "Dishes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dishes.vue")
  },
  {
    path: "/ingredients",
    name: "Ingredients",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Ingredients.vue")
  },
  {
    path: "/pantry",
    name: "Pantry",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pantry.vue")
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Shopping.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
