<template>
    <a 
    v-if="text.url" 
    class="my-button_default" 
    @click="$router.push(name.url)">
    {{ text.text }}
    </a>
    
    <a v-else 
    class="my-button_default">
    {{ text.text }}
    </a>
</template>


<script>
    export default {
        name: "my-btn",
        props:{
            text:{
                type:String,
                required: true
            }
        }
    }
</script>

<style scoped lang="sass">
    @import ../../_mixins.sass
    .my-button_default
        @include flex_jc_aa_fd(center,center,row)
        @include width_height(177px,39px)
        border: 2px solid #389DDD
        border-radius: 5px
        background-color: transparent
        color: #389DDD
        font-style: normal
        font-weight: 700
        font-size: 12px
    .variant_1
        position: relative
        text-indent:-40px
        background-color:#389DDD
        color:#fff
        width: 246px
        height: 59px
        &::before
            content: ""
            position: absolute
            width: 10px
            height: 10px
            top:22px
            right: 43px
            background-image: url(@/assets/Vector.svg)

</style>

