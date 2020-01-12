
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/home/home'
import NotFound from '../components/pages/not-found/not-found'
import Films from "../components/pages/films/films"
import Mine from "../components/pages/mine/mine"

Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'home',component: Home},
  {path: '/home', name: 'home', component: Home},
  {path: '/films', name: 'films', component: Films},
  {path: '/mine', name: 'mine', component: Mine},
  {path: '/not-found', name: 'not-found', component: NotFound},
  {path: '**', redirect: '/not-found'}
]

const router = new VueRouter({
  routes,
  //去掉地址中的哈希#
  mode:"history",
})

//组件间通信 bus 与app-header组件通信 
//这里做的是路由跳转nav-list遮罩切换回去
// import bus from "../modules/bus"
// router.beforeEach((to, from, next) => {
//   bus.$emit('close-nav')
//   next();
// })

export default router
