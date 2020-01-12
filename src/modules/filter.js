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


//15232864354653 -> 星期几
Vue.filter ('day', (value) => {
    let date = new Date(value)
    let result = ''
    switch (date.getDay()) {
        case 1: result = '一';break;
        case 2: result = '二';break;
        case 3: result = '三';break;
        case 4: result = '四';break;
        case 5: result = '五';break;
        case 6: result = '六';break;
        case 0: result = '日';break;
    }
    return '星期'+result;
})