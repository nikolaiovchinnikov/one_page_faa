<template>
    <a 
    v-if="name.url" 
    class="my-button" 
    @click="$router.push(name.url)">{{ name.text }}</a>

    <a v-else 
    class="my-button">{{ name.text }}</a>

</template>


<script>
    export default {
        
        name: "faa-btn",
        props:{
            name:{
                type:String,
                required: true
            }
        }
    }
</script>

<style scoped lang="sass">
    @import ../../_mixins.sass
    .my-button
        @include flex_jc_aa_fd(center,center,row)
        @include width_height(177px,39px)
        border: 2px solid #389DDD
        border-radius: 5px
        background-color: transparent
        color: #389DDD
        font-style: normal
        font-weight: 700
        font-size: 12px
    
</style>

