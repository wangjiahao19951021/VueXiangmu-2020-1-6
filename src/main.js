import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import router from './router'
// import store from './store'

//阻止了提示
Vue.config.productionTip = false

// 引入scss
import './stylesheets/main.scss'
// 引入rem.js
import "./modules/rem"
// 引入animate.css 会从全局检测
import "animate.css"
//处理axios，让组件通过this.$http来使用
import axios from "axios"
Vue.prototype.$http = axios

//引入拦截器filter
import "./modules/filter"







new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
