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
    @import ../mixins
    .logoFaa
        @include width_height(90px,48px)
        background: center / contain no-repeat url("@/assets/LOGO.png") 
</style>