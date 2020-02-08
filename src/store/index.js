// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)


import buycar from "./buycar/index"
export default new Vuex.Store({
  modules: {
    buycar
  },
  buycar
  
})
