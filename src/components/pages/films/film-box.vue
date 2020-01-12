<template>
    <!-- infinite-scroll-immediate-check="false" 防止请求了两次-->
    <div class="film-box"
        v-infinite-scroll = "loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check="false"
    >
        <film-item 
            v-for = "film of films"
            :key = "film.filmId"
            :film = "film"
            :type = "type"
        ></film-item>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import FilmItem from "./film-item"
export default {
    name: "FilmBox",
    props: ['type'],
    components: {
        FilmItem
    },
    data () {
        return {
            films: [],// 存入电影的数据
            page: 1,//页数
            count: 10,//每页多少条
            loading: false,//是否正在加载的开关
            hasMore: true//是否拥有更多的开关
        }
    },
    methods: {
        getFilms () {
            //获取数据
            let { type,page,count } = this
            //开始请求
            this.loading = true;
            let toast = Toast({
                message: '正在加载...',
                duration: -1,
                iconClass: 'fa fa fa-spinner',
            });
            this.$http.get('/static/json/get_away_' + type + '.1.json', {
                params: {
                    page, count
                }
            }).then((res) => {
                this.films = this.films.concat(res.data.data.films)
                //表示请求结束
                this.loading = false
                toast.close()
                // let {current, total} = res.data.data.page
                // //判断是否还有更多的数据
                //总页数 当前第几页
                // if (total - current <= 0) {
                //     this.hasMore = false
                //     return false;
                // }

                //目前是模拟的，想要更改的话更改json中的pages总页数
                if (res.data.data.pages - (page + 1 ) < 0) {
                    this.hasMore = false
                    return false;
                }
                // 如果还有更多数据，页数++
                this.page ++
            })
        },
        loadMore() {
            //如果没有更多了
            if(!this.hasMore) {
                Toast({
                    message: '没有更多了', position: 'bottom', duration: 1000
                });
                return false;
            }
            this.getFilms ()
        }
    },
    created () {
        // this.getFilms()
    },
    watch: {
        //监听type
        //改变的话数据跟着改变
        type: {
            immediate: true,
            //自动执行
            handler() {
                //切换类型后的操作
                this.page = 1;
                this.films = [];
                this.hasMore = true;
                this.loading = false
                this.getFilms()
            }
        }
       
    }
}
</script>
<style lang="scss" scoped>

</style>