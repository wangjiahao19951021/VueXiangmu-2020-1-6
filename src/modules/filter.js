//这里是拦截器
import Vue from 'vue'

//  15232864354653 -> 3月118日
Vue.filter ('premiere', (value) => {
    let date = new Date(value)

    return (date.getMonth()+1)+'月'+date.getDate()+'日'
})

//时间模拟观看人数 1579046400 -> 79046400 截取了后8位暂且当做观看人数
Vue.filter ('watch', (value) => {
    let str = value.toString()
    return (str.substring(2,10))
})