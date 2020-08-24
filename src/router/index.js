import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const Home = () => import("@/views/home/Home");
const Blog = () => import("@/views/blog/Blog");
const Article = () => import("@/views/article/Article");
const Search = () => import("@/views/search/Search");
const Contact = () => import("@/views/contact/Contact");

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
    component: Article
  },
  {
    name: 'search',
    path: '/search',
    component: Search
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  },
];

let router = new VueRouter({
  routes,
  // mode: 'history'
});

export default router;
