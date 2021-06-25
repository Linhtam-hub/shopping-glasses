import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Header from "../layouts/Header";
import Menu from './../layouts/Menu';
import ProductList from "./../views/Products/productList";
import ShoppingCart from "./../views/Products/shoppingCart";
Vue.use(VueRouter);
Vue.component('app-header', Header);
Vue.component('app-menu', Menu);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Product",
    component: ProductList,
  },
  {
    path: '/itemInCart',
    name: "ShoppinCart",
    component: ShoppingCart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
