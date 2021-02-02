import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import(/* webpackChunkName: "index" */ "@/views"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/components/home"),
      },
      {
        path: "/category",
        name: "Category",
        component: () =>
          import(/* webpackChunkName: "category" */ "@/components/category"),
      },
      {
        path: "/cart",
        name: "Cart",
        component: () =>
          import(/* webpackChunkName: "cart" */ "@/components/cart"),
      },
      {
        path: "/user",
        name: "User",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/components/user"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
