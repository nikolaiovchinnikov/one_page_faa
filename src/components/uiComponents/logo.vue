<template>
    <div class="logoFaa">

    </div>
</template>


<script>
    export default {
        name: "logo",
        props:{
            img:{
                type:String,
                required: true
            }
        }
    }
</script>

<style lang="sass">
    @import ../../_mixins.sass
    .logoFaa
        @include width_height(90px,48px)
        background: center / contain no-repeat url("@/assets/LOGO.png") 
</style>