import Vue from "vue";
import Router from "vue-router";

import Home from "../src/views/Home.vue";

Vue.use(Router);


export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
    path: "/",
    name: "Home",
    component: Home
    }
  ]
});