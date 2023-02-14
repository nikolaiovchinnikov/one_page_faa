<template>
    <nav class="nav">
        <div class="conteiner">
            <div class="nav_top">
                <logo/>
                <search/>
                <nav_bar_text
                :style     = "widthListTextTop" 
                :listTexts = "textListTwo"/>
            </div>
            <div class="nav_bottom">
                <nav_bar_text 
                :style     = "widthListTextBottom" 
                :listTexts = "textListOne"/>
                <my-btn :text="textBtn"/>
            </div>
        </div>
    </nav>
</template>


<script>
    export default {
        name: "myNav",
        data () {
            return {
                widthListTextTop:{ width: "555px" },
                widthListTextBottom: { width: "946px" },
            }
        },
        props:{
            textListTwo:{
                type:Array,
                required: true
            },
            textListOne:{
                type:Array,
                required: true
            },
            textBtn:{
                type:String,
                required: true
            },
        }
    }

</script>

<style lang="sass">
    @import ../../_mixins.sass
    .nav
        &_top
            height: 86px
            display: flex
            justify-content: space-between
            align-items: center
        &_bottom
            height: 72px
            display: flex
            justify-content: space-between
            align-items: center
</style>