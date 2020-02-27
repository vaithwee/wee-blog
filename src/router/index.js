import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const Home = () => import("@/views/home/Home");
const Blog = () => import("@/views/blog/Blog");
const Artcile = () => import("@/views/article/Article");

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
        component: Blog,
    },
    {
        name: 'article',
        path: '/article/:id',
        component: Artcile
    }
];

let router = new VueRouter({
    routes,
    mode: 'history'
});

export  default router;
