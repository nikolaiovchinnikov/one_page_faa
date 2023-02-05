<template>
    <nav class="nav">
        <div class="conteiner">
            <div class="nav_top">
                <logo/>
                <search/>
                <nav-bar :style="widthListTextTop" :listTexts="text.textListTwo" />
            </div>
            <div class="nav_bottom">
                <nav-bar :style="widthListTextBottom" :listTexts="text.textListOne" />
                <faa-btn :name="text.btnText.inFaa"/>
            </div>
        </div>
    </nav>
    
    <header class="header">
        <div class="conteiner">
            <div class="header_title">
                <h1 class="header_title_main" >
                    Альпинистское двоеборье:<wbr/>неожиданный финал
                </h1>
                <h1 class=" header_title_description">
                    Также рамки и место обучения кадров позволяет <br> оценить значение направлений прогрессивного развития. 
                </h1>
                <faa-btn :name="text.btnText.inFaa"/>
            </div>
        </div>
    </header>
    <main class="main">
        <div class="conteiner">
            <link_title class="main_content" :Texts="text.titleNews"/>
            <news class="main_content" :description="text.news"/>
            <link_title class="main_content" :Texts="text.titleEvents"/>
            <events class="main_content" :description="text.events"/>
            <link_title class="main_content" :Texts="text.titleResults"/>
            <result class="main_content" :description="text.results" />
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
        &_title
            display: flex
            justify-content: center
            align-items: flex-start
            flex-direction: column
            height: 500px
            
            &_main
                width: 731px
                height: 121px
                color: #FFFFFF
                font-size: 45px
                font-weight: 700
            &_description
                width: 620px
                height: 57px
                color: #FFFFFF
                font-size: 18px
                font-weight: 400
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
        widthListTextTop:{ width: "555px" },
        widthListTextBottom: { width: "946px" },
        text,
    }
  }
}
//     methods: {
//       addLike() {
//         this.like++;
//       },
//       addDislike() {
//         this.dislike--;
//       }
//   }
// }
</script>