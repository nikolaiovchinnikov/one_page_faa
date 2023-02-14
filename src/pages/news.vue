<template >
    <div class="conteiner">
        <myNav 
            :textListTwo = "text.textListTwo"
            :textListOne = "text.textListOne"
            :textBtn     = "text.btnText.inFaa"
        />
        <myFormDate 
        v-if="state"
        @close="state = false"/>
        <link-title 
        :texts="text.titleNews"
        @news="form"/>
        <link-title :texts="text.titleNews"/>
        <news :description="text.news"/>
        <link-title :texts="text.titleNews"/>
        <news :description="text.news"/>
        <link-title :texts="text.titleNews"/>
        <news :description="text.news"/>
        <link-title :texts="text.titleNews"/>
        <news :description="text.news"/>
    </div>
</template>
<script>

import { text } from "@/textGlobal/text";
export default {
    data() {
        return {
            text,
            state:false
        };
    },
    methods:{
        form(){
            this.state = true;
        }
    }
}
</script>
<style scoped lang="sass">

    
</style>