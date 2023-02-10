<template>
    <div class="caption">
        <h2 class="caption_header">
            {{ Texts.news }}
        </h2>
        <a @click="$emit(Texts.id,$event)" class="caption_link" >{{ Texts.link }} </a>
    </div>
</template>


<script>
    export default {
        name: "link_title",
        props:{
            Texts:{
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

<style lang="sass">
    @import ../../_mixins.sass
    .caption
        @include flex_jc_aa_fd(space-between,center,row)
        &_header
            font-weight: 600
            font-size: 32px
        &_link
            font-weight: 600
            color: #389DDD
            font-size: 16px



</style>
