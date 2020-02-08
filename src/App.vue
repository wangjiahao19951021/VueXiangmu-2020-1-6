<template>
  <div id="app">
    <app-header></app-header>
    <!-- <home></home> -->
    <router-view></router-view>
  </div>
</template>
<script>
import AppHeader from  "./components/commons/header/app-header"
// import Home from  "./components/pages/home/home"
export default {
  name: "app",
  components: {
    AppHeader,  
    // Home
  },
  created () {
    //这里获取购物车的数据
    //dispatch调用actions  commit调用mutation
    this.$store.dispatch('initCars')
  }
}
</script>


<style lang="scss" scoped>
// scoped 属性是一个布尔属性。
// 如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。
// 局部样式，只作用于当前组件

// $base-color: red;
// #app{
//   color: $base-color;
// }

</style>
