<template>
    <div class="page detail"  v-if = "film.name">
        <div class="img-background img-box">
            <img width="100%"  v-lazy = "film.poster">
        </div>
        {{film.name}} <br/>
        {{ film.synopsis }}
    </div>
</template>
<script>
import bus from "../../../modules/bus"
export default {
    name: "Detail",
    props: ['id'],
    data () {
        return {
            film: {},
        }
    },
    methods: {
        getItem () {
            //这里可以根据请求的结果跳转404,防止地址栏更改信息显示错误
            let id  = this.id
            this.$http.get("/static/json/movie_item.json", {
                params: {
                    _t: Date.now(),
                    id
                }
            }).then(res =>{
                this.film = res.data.data.film
            })
        }
    },
    created () {
        this.getItem();
        bus.$emit('change-title',this.$route.query.name)
    }
}
</script>
<style lang="scss" scoped>
.img-box {
        width: 100%;
        height: 2.1094rem;
}
</style>


