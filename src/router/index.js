import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const Home = () => import("@/views/home/Home");

let routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    }
];

let router = new VueRouter({
    routes,
});

export  default router;