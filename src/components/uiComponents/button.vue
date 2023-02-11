<template>
    <router-link v-if="name.url"
    class="come-in-faa" 
    :to= "{ path: `${name.url}`}" >
    {{ name.text }}
    </router-link>
    <a v-else class="come-in-faa">{{ name.text }}</a>
    <!-- почему нельзя напиать просто  :to="name.url"     ?? -->
</template>


<script>
    export default {
        
        name: "faa-btn",
        props:{
            className:{
                type:String,
                required: true
            },
            name:{
                type:String,
                required: true
            }
        }
    }
</script>

<style lang="sass">
    @import ../../_mixins.sass
    .come-in-faa
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

