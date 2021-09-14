import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cats from "../views/Cats.vue"
import Dogs from "../views/Dogs.vue"
import Pet from "../views/Pet.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pets/:species/:id",
    name: "Pet",
    component: Pet
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: Dogs
  },
  {
    path: "/cats",
    name: "Cats",
    component: Cats
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
