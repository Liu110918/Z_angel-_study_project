import { createRouter, createWebHashHistory } from 'vue-router'
const Login = () => import('../views/login/index.vue') // 登录页面
const Home = () => import('../layout/index.vue')
const routes = [
  {
    path: '/',
    redirect: '/Login'
  },

  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Home',
    name: 'home',
    component: Home,
    redirect: '/Home/Css',
    children: [
      {
        path: '/Home/Css',
        name: 'Css学习',
        component: () => import(/* webpackChunkName: "about" */ '../views/Css/index.vue')
      },
      {
        path: '/Home/Js',
        name: 'Js学习',
        component: () => import(/* webpackChunkName: "about" */ '../views/Js/index.vue')
      },
      {
        path: '/Home/Vue',
        name: 'Vue学习',
        component: () => import(/* webpackChunkName: "about" */ '../views/vue/index.vue'),
        redirect: '/Home/Vue/vue_one',
        children: [
          {
            path: '/Home/Vue/vue_one',
            name: 'vue_one',
            component: () => import(/* webpackChunkName: "about" */ '../views/vue/vue_one/index.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(), // hash 模式，想要改为history 模式可以使用createWebHistory
  routes
})

export default router
