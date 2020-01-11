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
       <div class="more-button">更多{{ type.title }}电影</div>
    </div>
</template>
<script>
import HomeMovieItem from "./movie-item"
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
      }
    },
    created () {
      //在这里获取初始的电影数据
      this.getFilms()
    },
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

