<template>
    <myNav 
    :textListTwo = "text.textListTwo"
    :textListOne = "text.textListOne"
    :textBtn     = "text.btnText.inFaa"
    />

    <header class="header">
        <div class="conteiner">
            <titlesImg 
            :description="text.titlesImg[count]" 
            @nextTarget=" (poxsy,event) => this.count = event.target.id"/>
        </div>
    </header>

    <main class="main">
        <div class="conteiner">
            <link_title 
            @news="this.itemNewsCount = this.text.news.length" 
            class="main_content" 
            :Texts="text.titleNews"/>
            <news class="main_content" :description="filters( text.news, itemNewsCount )"/>

            <link_title 
            @events="this.itemEventCount = this.text.events.length"
            class="main_content" 
            :Texts="text.titleEvents"/>
            <events class="main_content" :description="filters( text.events, itemEventCount )"/>

            <link_title 
            @results="this.itemResultCount = this.text.results.length" 
            class="main_content" 
            :Texts="text.titleResults"/>
            <result class="main_content" :description="filters( text.results, itemResultCount )" />

        </div>
    </main>

    <footer>
        <div class="conteiner">

        </div>
    </footer>
</template>


<style lang="sass">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap')
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap')
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap')
    @import mixins
    @import reset
    body
        font-family: 'Montserrat'
    .conteiner
        margin: 0 auto
        width: 1279px
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
    .header
        position: relative
        height: 500px
        background: linear-gradient(to left,#043656CC, #04365600),linear-gradient( to right,#043656CC, #04365600),center / cover no-repeat url("@/assets/PhotoPlace.jpg")
    .main
        &_content
            margin: 150px 0 0 0
            &:nth-child(even)
                margin: 70px 0 0 0
</style>

<script>
import { text } from "@/textGlobal/text";

export default {
    data() {
        return {
            itemNewsCount: 4,
            itemResultCount: 3,
            itemEventCount: 3,
            count : 0,
            text,
        }
    },
    methods: {
        filters(map,count){
            return map.filter( (item,idx,arr) => {
                if ( idx < count ){
                    return arr;
                }
            });
        },
    }
}
</script>