<template >
    <div class="items" >
        <div class="item" v-for="text,key in description" >
                <img class="item_img" :src="text.imgUrl" alt="">
            <h2 class="item_title">
                {{ text.title }}<br>
            </h2>
            <h3 class="item_description">
                {{ text.description }}
            </h3>
            <a class="item_link"  >
                {{ text.link }}
            </a>
            
            
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "news",
        props:{
            itemCount:{
                type:Number,
                required: true
            },
            description:{
                type:Array,
                required: true
            }
        },
        
            
        
        
        methods: {
            newsInfo (events) {
                this.$emit("create",events,this)
                
            }
        }
    }
    
</script>

<style lang="sass">
    @import ../../_mixins.sass
    .items
        @include flex_jc_aa_fd(space-between,center,row)
        
        
    .item
        @include width_height(290px,450px)
        @include flex_jc_aa_fd(space-between,start,column)
        &_img
            @include width_height(290px,196px)
        &_title
            font-size: 20px
            font-weight: 700
        &_description
            text-align: start
            font-size: 16px
            font-weight: 400
            line-height: 28px
        &_link
            font-weight: 600
            color: #389DDD
</style>
