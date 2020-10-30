import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Beers from "../views/Beers.vue";
import Cart from "../views/Cart.vue";
import Beer from "../views/Beer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/beers",
    name: "Beers",
    component: Beers
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/beer/:id",
    name: "Beer",
    component: Beer,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
