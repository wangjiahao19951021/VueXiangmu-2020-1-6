<template>
    <div class="films page">
        <film-nav :type = "type" :change-type = "changeType"></film-nav>
        <film-box :type = "type"></film-box>
    </div>
</template>
<script>
import FilmNav from "./film-nav"
import FilmBox from "./film-box"
//这里引用小天使
import bus from "../../../modules/bus"
export default {
    name: "Films",
    components: {
        FilmNav,
        FilmBox
    },
    data () {
        return {
            //导航默认s为now-playing
            type: 'now-playing'
            // type: "coming-soon"
        }
    },
    methods: {
        changeType(type) {
            this.type = type
        }
    },
    created () {
        //如果从首页进来的话可能会与滑动加载发生错误，ajax可能会请求多次出现错误
        document.body.scrollTop = document.documentElement.scrollTop=0
        //这里是从首页进来判断应该在哪个类型上
        bus.$on("change-types1", (e) => {
            // console.log(e)
            this.type = e
        })
    }   
}
</script>
<style lang="scss" scoped>
    .films{
        background: #f9f9f9;
        min-height: 100vh;
        padding-left:15px; 
        padding-right:15px; 
    }
</style>

