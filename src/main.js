import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
//Vuex
import store from './store'

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


//mint-ui
//按需引入
// import { Lazyload, InfiniteScroll  } from 'mint-ui';
// Vue.use(Lazyload);
// Vue.use(InfiniteScroll);


//mint-ui
//引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);

//mint-ui
// import { Lazyload, InfiniteScroll, Button, Tabbar  } from 'mint-ui';
// Vue.use(Lazyload);
// Vue.use(InfiniteScroll);
// Vue.component('mz-button',Button)
// Vue.component('mz-tab-bar',Tabbar)



//这里引入自定义组件
import Mz from "./mz_ui"
Vue.use(Mz)



// new Vue({
//   el: '#app',
//   components: { App },
//   router, //使用router
//   store,
//   template: '<App/>'
// })
// VUE推荐在绝大多数情况下使用template来创建我们的HTML。然而在一些场景中，我们真的需要JavaScript的完全编程的能力，这就是render函数，它比template更接近编译器。
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
