

//调用mutation中的这个方法
import { 
    SYNC_UPDATE
} from "./const"
import { setTimeout } from "timers";
import { get } from "https";



//获取信息
//这里点击的时候获取商品信息

export default {
    
    //在app组件中获取这个购物车数据
    initCars ({commit}) {
        //在这里，从后端数据库里取出购物车信息		
        //模拟
        setTimeout ( () => {
            let cars = getCars();
            commit(SYNC_UPDATE, cars)
        }, 500)

    },

    addGoodInCar ({commit}, goodinfo) {
        //goodinfo这里是商品信息

        //在这里发送ajax请求到后端服务器，将商品添加到数据库里，再去更改vuex里的cars数据
		
        //在真正的项目中，其实我们接收一个商品id和用户id就可以了，但是在这里，我们没有后端，所以添加商品我们就添加到localStorage中，而且购物车添加的逻辑，只能自己写了
        
        setTimeout ( () => {
            // console.log(goodinfo)
            //这些都是后端的逻辑
            let cars = getCars()
            //some方法js 
            //判断当前数组中是否存在这个商品


            if (cars.length === 0) {
                goodinfo.num = 1
                cars.push(goodinfo)
            } else {
                for (var i = 0; i < cars.length; i++) {
                    if (cars[i].id == goodinfo.id) {
                        JSON.parse(cars[i].num ++)
                        var a = JSON.parse(localStorage.cars)
                        a[i].num ++
                        localStorage.cars = JSON.stringify(a)
                        commit (SYNC_UPDATE, cars)

                        // console.log(cars)
                        // commit (SYNC_UPDATE, JSON.stringify(cars))

                        return false;
                    } 
                }
                goodinfo.num = 1
                cars.push(goodinfo)

            }

            localStorage.cars = JSON.stringify(cars)
            
            // console.log(cars)
            // localStorage.cars = []


            //到这里，数据库已经更新了，做一个同步，这个时候，假设，我们后端很好，直接将处理之后的用户的购物车信息全部返回了
            //如果只是返回了ok就在mutation中自己处理信息

            //同步这个数据
            // commit(SYNC_UPDATE, JSON.stringify(cars))
            commit (SYNC_UPDATE, cars)
            


        }, 500)
    },
    //商品减去
    reduceGoodInCar ({commit}, goodinfo){
        setTimeout ( () => {
            // let cars = getCars()
            // for (var i = 0; i < cars.length; i++) {
            //     if (cars[i].id == goodinfo.id) {
            //         JSON.parse(cars[i].num --)
            //         var a = JSON.parse(localStorage.cars)
            //         a[i].num --
            //         if (a[i].num < 0) {
                        
            //         }
            //         localStorage.cars = JSON.stringify(a)
            //         commit (SYNC_UPDATE, cars)                    
            //     }
            // }
            let cars = getCars()
			
			cars = cars.filter(item => {
				if(item.id === goodinfo.id) {
					item.num -- ;
					if (item.num <= 0) {
						return false
					}
					return true
				}
				return true
			})
			
			localStorage.cars = JSON.stringify(cars)
			//同步vuex中的购物车数据
			commit(SYNC_UPDATE,cars)

        }, 500)        
    }
    
}

function getCars () {
    //如果不存在就添加一个空的cars数组
	return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}