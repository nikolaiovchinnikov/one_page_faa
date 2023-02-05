<template>
    <div class="title">
        <h2 class="title_header">
            {{ Texts.news }}
        </h2>
        <a class="title_link" href="">{{ Texts.link }} </a>
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
        }
    }

</script>

<style lang="sass">
    @import ../mixins
    .title
        @include flex_jc_aa_fd(space-between,center,row)
        &_header
            font-weight: 600
            font-size: 32px
        &_link
            font-weight: 600
            color: #389DDD
            font-size: 16px



</style>
