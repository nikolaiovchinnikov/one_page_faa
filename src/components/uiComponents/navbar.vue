<template>
    <div class="nav_menu">
        <a v-for="text in listTexts">{{ text }}</a>
    </div>
    
</template>


<script>
    export default {
        name: "nav_bar_text",
        props:{
            listTexts:{
                type:Array,
                required: true
            }
        }
    }

</script>

<style lang="sass">
    @import ../../_mixins.sass
    .nav_menu
        @include flex_jc_aa_fd(space-between,center,row)
        font-size: 13px
        font-weight: 600
</style>
