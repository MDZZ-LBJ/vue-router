import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import A from "../views/A.vue";
import B from "../views/B.vue";

Vue.use(VueRouter); // 内部会调用VueRouter插件的install方法

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
        component:A
      },
      {
        path: "b",
        component: {
          render() {
            return <h1>about b</h1>
          }
        }
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
