import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView'
import CreatePostView from '../views/CreatePostView.vue'
import HomeView from '../views/HomeView.vue'
import SinglePostView from '../views/SinglePostView.vue'
import UserView from '../views/UserView.vue'

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
    path: '/posts/create',
    name: 'createPost',
   component:CreatePostView
  },
  {
    path: '/home',
    name: 'home',
   component:HomeView
  },
  {
    path: '/user/<username>',
    name: 'user',
   component:UserView
  },
  {
    path: '/posts/<id>',
    name: 'singlePost',
   component:SinglePostView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
