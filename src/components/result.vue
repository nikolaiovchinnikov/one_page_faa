<template>
    <div class="results">
        <div class="result" v-for="text in description" >
            <p class="result_date">{{ text.date }}</p>
            <h2 class="result_title">{{ text.title }}</h2>
                <div class="result_linkLoad">
                    <a class="result_linkLoad_link" href="">{{ text.link }}</a>
                    <a class="result_linkLoad_load" href=""></a>
                </div>
        </div>
    </div>
    
</template>


<script>
    export default {
        name: "result",
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
    .results
        @include flex_jc_aa_fd(space-between,center,row)
    .result
        @include width_height(300px,150px)
        @include flex_jc_aa_fd(space-between,start,column)
        &_title
            width: 300px
            font-style: normal
            font-weight: 700
            font-size: 20px
            line-height: 28px
        &_linkLoad
            @include width_height(300px,20px)
            @include flex_jc_aa_fd(space-between,center,row)
            &_load
                @include width_height(20px,20px)
                display: inline-block
                background: no-repeat url(@/assets/downloAD.svg)
            &_link
                color: #389DDD
</style>
