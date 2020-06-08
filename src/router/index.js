import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Open from '../components/Open.vue'
import Experience from '../components/Experience.vue'
import Html from '../components/categories/Html.vue'
import Css from '../components/categories/Css.vue'
import Js from '../components/categories/Js.vue'
import Article0 from '../components/article/0.vue'
import Article1 from '../components/article/1.vue'
import Article2 from '../components/article/2.vue'
import Article3 from '../components/article/3.vue'
import Article4 from '../components/article/4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/open',
    component: Open
  },
  {
    path: '/experience',
    component: Experience
  },
  {
    path: '/categories/html',
    component: Html
  },
  {
    path: '/categories/css',
    component: Css
  },
  {
    path: '/categories/javascript',
    component: Js
  },
  {
    path: '/article/0',
    component: Article0
  },
  {
    path: '/article/1',
    component: Article1
  },
  {
    path: '/article/2',
    component: Article2
  },
  {
    path: '/article/3',
    component: Article3
  },
  {
    path: '/article/4',
    component: Article4
  }
]

const router = new VueRouter({
  routes
})

export default router
