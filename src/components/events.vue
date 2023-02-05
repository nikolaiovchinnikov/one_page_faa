<template>
   <div class="events">
        <div class="event" v-for="text in description">
            <div class="event_bagraund"></div>
            <img class="event_img" :src="text.imgLink" alt="">
            <div class="event_info">
                <div class="event_info_header">
                    <p class="event_info_header_date">{{ text.date }}</p>
                    <p class="event_info_header_region">{{ text.region }}</p>
                </div>
                <h3 class="event_info_title">{{ text.title }}</h3>
                <a class="event_info_link" href=""> {{ text.link }}</a>
            </div>
        </div>
   </div>
    
</template>


<script>
    export default {
        name: "events",
        props:{
            description:{
                type:Array,
                required: true
            }
        }
    }
</script>

<style lang="sass">
    @import ../mixins
    .events
        @include flex_jc_aa_fd(space-between,center,row)
    .event
        position: relative
        @include width_height(400px,238px)
        @include flex_jc_aa_fd(center,center,row)
        &_bagraund
            z-index: -1
            @include width_height(400px,238px)
            background: linear-gradient(#389DDD, #389DDDC4)
            position: absolute
        &_img
            position: absolute
            z-index: -2
            @include width_height(400px,238px)
        &_info
            color: #fff
            @include flex_jc_aa_fd(space-around,start,column)
            @include width_height(350px,238px)
            &_header
                @include width_height(100%,20px)
                @include flex_jc_aa_fd(space-between,center,row)
                &_date
                &_region
            &_title
                font-size: 20px
                width: 200px
            &_link
                color: #fff
</style>