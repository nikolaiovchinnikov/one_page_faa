<template>
    <div class="titles">
        <div class="title">
            <h1 class="title_main" >
                {{ description.titleText }}
            </h1>
            <h1 class="title_description">
                {{ description.titleParagraph }}
            </h1>
            <my-btn class="variant_1" :text="description.btnText"/>
            
        </div>
        
        <div class="title_block">
            <a class="title_block_page" id="0" @click="events"></a>
            <a class="title_block_page" id="1" @click="events"></a>
            <a class="title_block_page" id="2" @click="events"></a>
            <a class="title_block_page" id="3" @click="events"></a>
        </div>
    </div>
 </template>
 
 
 <script>
     export default {
         name: "titlesImg",
         props:{
             description:{
                 type:Array,
                 required: true
             }
         },
         methods : {
            events (event) {
                this.$emit("nextTarget",this,event)
            }
         }

     }
 </script>
 
 <style lang="sass">
     @import ../../_mixins.sass
     .titles
        display: flex
        justify-content: space-between
        align-items: flex-start
        flex-direction: column
        height: 500px
    .title
        height: 350px
        display: flex
        justify-content: end
        align-items: flex-start
        flex-direction: column
        &_main
            width: 700px
            min-height: 150px
            color: #FFFFFF
            font-size: 45px
            font-weight: 700
        &_description
            width: 620px
            height: 57px
            color: #FFFFFF
            font-size: 18px
            font-weight: 400
        &_block
            margin-bottom: 30px
            width: 100%
            display: flex
            justify-content: center
            align-items: center
            &_page
                margin: 0 10px 0 0
                width: 15px
                height: 15px
                background-color: #45B7FF
                border-radius: 50%
 </style>