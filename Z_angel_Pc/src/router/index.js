import { createRouter, createWebHashHistory } from 'vue-router'
const Login = () => import('../views/login/index.vue') // 登录页面
const Home = () => import('../layout/index.vue')
const routes = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(), // hash 模式，想要改为history 模式可以使用createWebHistory
  routes
})

export default router
