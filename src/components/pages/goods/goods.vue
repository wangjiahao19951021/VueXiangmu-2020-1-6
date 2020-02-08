<template>
    <div class="page goods-box">
        <cell
            v-for = "good in goods"
            :key = "good.id"
            :title = "good.name"
            :src = "good.src"
            :label = "good.price + '/' + good.shuliang"
        >
        <!-- 调用vuex中这个方法 -->
        <!-- 将商品信息传递过去 -->
            <button  type = "danger" size = "small" 
                @click = "addGoodInCar(good)"
            >加入购物车</button>
        </cell>
    </div>
</template>
<script>
//引入一个辅助方法 点击的时候调用acitos中的方法
import {mapActions} from "vuex"

export default {
    name: "GoodsBox",
    data () {
        return {
            goods: [
                {id: 1, name: "芒果", price: "100", src: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3633432064,242998264&fm=111&gp=0.jpg", shuliang: "300g"},
                {id: 2, name: "橘子(优质)", price: "10", src: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3633432064,242998264&fm=111&gp=0.jpg", shuliang: "50g"},
                {id: 3, name: "香蕉", price: "80", src: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3633432064,242998264&fm=111&gp=0.jpg", shuliang: "100g"},
                {id: 4, name: "西瓜(南极进口)", price: "90", src: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3633432064,242998264&fm=111&gp=0.jpg", shuliang: "80g"},
                {id: 5, name: "葡萄", price: "50", src: "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3633432064,242998264&fm=111&gp=0.jpg", shuliang: "150g"},
            ]
        }
    },
    methods: {
        // getGoods () {
		// 		this.$http.get('/static/json/data.json').then(res => {
		// 			this.goods = res.data
		// 		})
        // }
        
        //引一个方法，在acitos中
        ...mapActions(["addGoodInCar"])
    },
    created () {
        // this.getGoods()
    }
}
</script>

<style lang="scss" scoped>
    button {
        color: white;
        background: rgb(227, 5, 5);
        border: none;
        padding: 3px 5px;
        border-radius: 10px;
        font-size: 12px;
        outline: none;
    }
</style>

