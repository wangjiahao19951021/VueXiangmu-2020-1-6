<template>
    <div class="banner">
       <div class="swiper-container app-banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide" 
                    v-for = "banner in banners"
                    :key = "banner.bannerId"
                >
                    <img width="100%" alt="" :src="banner.imgUrl" height="174px">
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
// 因为这里只有banner在用，所以将swiper引入banner组件
import Swiper from 'swiper'
import "../../../../node_modules/swiper/dist/css/swiper.css"

import Vue from "vue"


export default {
    name: 'Banner',
    data () {
        return {
            banners: []
        }
    },
    mounted () {
        this.$http.get("/static/json/banner.json", {
            params: {}
        }).then (res => {
            this.banners = res.data.data
            //在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
            Vue.nextTick(() => {
                new Swiper('.app-banner', {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    //自动滑动
                    autoplay: true,
                    //懒加载
                    lazy: true
                })
            })
        })

        // this.$http.get("/mz/gateway", {
        //     params: {
        //         cityId: 110100,
        //         pageNum: 1,
        //         pageSize: 10,
        //         type: 2,
        //         k: Date.now().toString().substring(5,12)

        //     }
        // }).then(res => {
            
        // })

        // this.$http.post("https://www.chinacarbon-al.com:90/news/getLimitNews?page=1&rows=4&section=1&valid=1&limit=1").then(res => {
            
        // })
        // this.$http.post('https://www.chinacarbon-al.com:90/news/getLimitNews?page=' + 1 + '&rows=' + 4 + '&&section=' + 1 + '&&valid=' + 1 + '&&limit=' + 1 + '&').then(res => {
        // })

        //使用qs fomedata传送ajax
    }
}
</script>
<style lang="css" scoped>

</style>

