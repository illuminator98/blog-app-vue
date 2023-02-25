import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'signup',
   component:SignupView
  },
  {
    path: '/login',
    name: 'login',
   component:LoginView
  },
  {
    path: '/home',
    name: 'home',
   component:HomeView
  },
  {
    path: '/user/:username',
    name: 'user',
   component:UserView
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
