<template>
    <div class="app-header">
        <nav>
            <div class="left">
                <div class="title-icon" @click = "isNavShow = !isNavShow">
                    <i class="fa fa-bars"></i>
                </div>
                <div class="title">电影</div>
            </div>
            <div class="right">
                <div class="city">北京</div>
                <div class="user">                    
                    <i class="fa fa-user-circle"></i>
                </div>
            </div>
        </nav>
        <!-- <nav-list v-if="isNavShow"></nav-list>     传入子组件 -->
        <nav-list :is-nav-show = "isNavShow" :close-nav = "closeNav"></nav-list>            
    </div>
</template>
<script>
import NavList from  "../nav/nav-list"

//组件间通信 bus  与 route index之间的通信
// import bus from "../../../modules/bus"

//引入路由
import router from "../../../router/index"

export default {
    name: "AppHeader",
    components: {
        NavList
    },
    data () {
        return {
            isNavShow: false,
        }
    },
    methods: {
        closeNav () {
            //这里的方法传给子组件 是因为isNavShow数据是父组件的
            this.isNavShow = false
        }  
    },
    created ()  {
        // bus.$on("close-nav", this.closeNav)
        //局部路由钩子
        router.beforeEach((to, from ,next) => {
            //关闭导航
            // this.closeNav()
            next()
        })
    }
}
</script>
<style lang='scss' scoped>
    .app-header{
        
        position: fixed;
        z-index: 500;
        top: 0;
        right: 0;
        left: 0;
        width: auto;
        height: 50px;
        line-height: 50px;
        overflow: hidden;

        nav {
            overflow: hidden;
            z-index: 999;
            position: relative;
            background: #282828;
        }

        .left {
            color: #fff;
            font-size: 16px;
            line-height: 50px;
            text-align: left;
            text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
            width: auto;
            height: 50px;
            margin: 0 auto;
            float: left;
            .title-icon {
                float: left;
                width: 48px;
                text-align: center;
                border-right: 1px solid #222;
                box-shadow: 1px 0 1px #363636;
                color: #999;
            }
            .title {
                    padding: 0 1em;
                    float: left;
                    font-size: 14px;
                    color: #efefef;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    displdday: inline-block;
                    overflow: hidden;
            }
            
        }

        .right {
            float: right;
            color: #999;
            .city {
                float: left;
                font-size: 14px;
                padding: 0 6px;
            }
            .user {
                float: left;
                font-size: 16px;
                width: 48px;
                text-align: center;
            }
        }
    }
</style>

