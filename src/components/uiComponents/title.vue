<template>
    <div class="caption">
        <h2 class="text_left">
            {{ texts.news }}
        </h2>
        <a @click="$emit(texts.id,$event)" class="text_right" >{{ texts.link }} </a>
    </div>
</template>


<script>
    export default {
        name: "link-title",
        props:{
            texts:{
                type:Array,
                required: true
            }
        },
        methods:{
            evetnts () {

            }
        }
    }

</script>

<style scoped lang="sass">
    @import ../../_mixins.sass
    .caption
        @include flex_jc_aa_fd(space-between,center,row)
    .text_left
        font-weight: 600
        font-size: 32px
    .text_right
        font-weight: 600
        color: #389DDD
        font-size: 16px



</style>
