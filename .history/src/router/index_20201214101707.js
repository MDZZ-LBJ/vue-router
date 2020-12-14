import Vue from "vue";
import VueRouter from "@/my-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import A from "../views/A.vue";
import B from "../views/B.vue";

/* 
 Vuew.use 原理 内部会调用VueRouter插件的install方法
 Vue.use = function (plugin, options) {
  plugin.install(this) // this -> Vue
}
  
*/

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    children: [
      {
        path: "a",
        component: A
      },
      {
        path: "b",
        component: B
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
