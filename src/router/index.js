import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "home" */ "../views/Public/Home.vue")
  },
  {
    path: "/menus",
    name: "Menus",
    component: () =>
      import(/* webpackChunkName: "menus" */ "../views/Private/Menus.vue")
  },
  {
    path: "/dishes",
    name: "Dishes",
    component: () =>
      import(/* webpackChunkName: "dishes" */ "../views/Private/Dishes.vue")
  },
  {
    path: "/ingredients",
    name: "Ingredients",
    component: () =>
      import(/* webpackChunkName: "ingredients" */ "../views/Private/Ingredients.vue")
  },
  {
    path: "/pantry",
    name: "Pantry",
    component: () =>
      import(/* webpackChunkName: "pantry" */ "../views/Private/Pantry.vue")
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () =>
      import(/* webpackChunkName: "shopping" */ "../views/Private/Shopping.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  store.dispatch("setActiveSection", to.name);
  next();
});

export default router;
