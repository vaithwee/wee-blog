import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const Home = () => import("@/views/home/Home");
const Blog = () => import("@/views/blog/Blog");

let routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'blog',
        path: '/blog',
        component: Blog
    }
];

let router = new VueRouter({
    routes,
    mode: 'history'
});

export  default router;