<template>
    <div class="films page">
        <film-nav :type = "type" :change-type = "changeType"></film-nav>
        <film-box :type = "type"></film-box>
    </div>
</template>
<script>
import FilmNav from "./film-nav"
import FilmBox from "./film-box"
export default {
    name: "Films",
    components: {
        FilmNav,
        FilmBox
    },
    data () {
        return {
            //导航默认s为now-playing
            type: 'now-playing'
        }
    },
    methods: {
        changeType(type) {
            this.type = type
        }
    }
}
</script>
<style lang="scss" scoped>
    .films{
        background: #f9f9f9;
        min-height: 100vh;
        padding-left:15px; 
        padding-right:15px; 
    }
</style>

