<template>
    <div class="page car">
        <cell
            v-for = "good in cars"
            :key = "good.id"
            :title = "good.name"
            :src = "good.src"
            :label = "good.price + ' * ' + good.num"
            
        >
            <button  type = "danger" size = "small" 
                @click = "addGoodInCar(good)"
            >+</button>
            <button  type = "danger" size = "small" 
                @click = "reduceGoodInCar(good)"
            >-</button>
        </cell>
        <total></total>
    </div>
</template>
<script>
import Total from "./total"

import { mapState, mapActions } from 'vuex'

export default({
    name: "Car",
    components: {
        Total
    },
    computed: {
        //从vuex中获取这个购物车的信息 从state中取出其信息
        ...mapState({
            cars: state => state.buycar.cars
        })
    },
    methods: {
        ...mapActions(["addGoodInCar", "reduceGoodInCar"])
    },
    created () {
        //进入时这里就获取了vuex中的数据
        // console.log(this.cars)
    }
    
})
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
        min-width: 5em;
        min-height: 2em;
    }
</style>

