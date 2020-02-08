
import Cell from "./cell/cell"

//use就相当于在执行install方法，也就相当于在注册我们的组件
export default {
    install (Vue) {
        Vue.component("cell", Cell)
    }
}