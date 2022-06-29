import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import LoginComp from '../views/LoginComp'
import RegisterView from '../views/RegisterView'
import LogoutComp from '../views/LogoutComp'
Vue.use(VueRouter)

const routes = [
  {path:'',component:HomeView},
  {path:'/login',component:LoginComp},
  {path:'/logout',component:LogoutComp},
  {path:'/register',component:RegisterView},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
