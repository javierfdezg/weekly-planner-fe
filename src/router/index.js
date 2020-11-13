import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Public/Home.vue")
  },
  {
    path: "/menus",
    name: "Menus",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Private/Menus.vue")
  },
  {
    path: "/dishes",
    name: "Dishes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Private/Dishes.vue")
  },
  {
    path: "/ingredients",
    name: "Ingredients",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Private/Ingredients.vue")
  },
  {
    path: "/pantry",
    name: "Pantry",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Private/Pantry.vue")
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Private/Shopping.vue")
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
