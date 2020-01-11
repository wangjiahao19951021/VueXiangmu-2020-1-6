<template>
    <div class="home page">
        <banner></banner>
        <home-movie-box 
            v-for = "type of types"
            :key = "type.id"
            :type = "type"
        >
        </home-movie-box>
    </div>
</template>
<script>
import Banner from "./banner"
import HomeMovieBox from "./movie-box"
export default {
    name: "Home",
    components: {
        Banner,
        HomeMovieBox
    },
    data () {
        return {
            types: [
                {id:1, url_type: 'now-playing', title:　'热映', count: 10},
                {id:2, url_type: 'coming-soon', title:　'即将上映', count: 10}
            ]
        }
    }
}
</script>
<style lang='scss' scoped>

</style>

