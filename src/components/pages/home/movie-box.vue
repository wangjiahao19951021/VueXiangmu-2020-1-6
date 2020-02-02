<template>
    <div class="home-movie-box">        
        <ul class="movie-list">
            <home-movie-item 
                :type = "type"
                v-for = "film of films"
                :key = "film.filmId"
                :info = "film"
            >
            </home-movie-item>
       </ul>
       <!-- <router-link
            tag = "div"
            :to = "{name: 'films'}"
        class="more-button">更多{{ type.title }}电影</router-link> -->
        <router-link
            tag = "div"
            :to = "{name: 'films'}"
            @click.native = "getaa"
        class="more-button">更多{{ type.title }}电影</router-link>
    </div>
</template>
<script>
import HomeMovieItem from "./movie-item"
//借用小天使
import bus from "../../../modules/bus"
export default ({
    name: "HomeMovieBox",
    data () {
        return {
            films: [],
            page: 10
        }
    },
    props: ["type"],
    components: {
        HomeMovieItem
    },
    methods: {
        getFilms () {
          let { page } = this
          let {count, url_type} = this.type
          this.$http.get('/static/json/get_away_'+ url_type +'.json',{
              params: {
                  page, count, 
                  __t: Date.now()
              }
          }).then (res => {
              this.films = res.data.data.films
          })
      },
      //这里是router-link上的点击时添加小天使
      getaa () {
        // bus.$emit('change-types1', "coming-soon")
              if (this.type.title == "热映") {
                    bus.$emit('change-types1', "now-playing")
                } else if (this.type.title == "即将上映" ) {
                    bus.$emit('change-types1', "coming-soon")
                }
         }
    },
    created () {
      //在这里获取初始的电影数据
      this.getFilms()
    }
})
</script>
<style lang="scss" scoped>
    .home-movie-box {

        .movie-list {
            padding-top: 18px;
            margin-bottom: 10px;
        }

        .more-button {
            width: 160px;
            height: 30px;
            border: 1px solid #aaa;
            border-radius: 15px;
            margin: 10px auto 30px;
            text-align: center;
            line-height: 30px;
            font-size: 12px;
            color: #616161;
            cursor: pointer;
        }
    }
</style>

