export default {
    
    // 这里计算价格
    totalInfo (state) {
        let total = {
            price: 0,
            num: 0
        }
        state.cars.forEach(item => {
            total.num += item.num
            total.price += item.num * item.price
        });
        return total
    }
}