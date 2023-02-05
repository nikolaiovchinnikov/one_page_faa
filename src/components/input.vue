<template>
    <div class="conteiner-input">
        <input class="search" type="text">
    </div>
    
</template>


<script>
    export default {
        name: "search",
        props:{
            name:{
                type:String,
                required: true
            }
        }
    }
</script>

<style lang="sass">
    @import ../mixins
    .search
        @include width_height(433px,39px)
        border: 1px solid rgba(0, 0, 0, 0.1)
        border-radius: 10px
        background-color: transparent
        font-style: normal
        font-weight: 500
        font-size: 20px
    .conteiner-input
        display: inline-block
        position: relative
        &::after
            content: ""
            position: absolute
            background-image: url(@/assets/Union.png)
            background-size: cover
            @include width_height(16px,16px)
            top: 12px
            right: 13px

</style>
