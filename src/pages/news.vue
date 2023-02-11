<template >
    <div class="conteiner">
        <myNav 
            :textListTwo = "text.textListTwo"
            :textListOne = "text.textListOne"
            :textBtn     = "text.btnText.inFaa"
        />
        <myFormDate/>
        
    </div>
</template>
<script>

import { text } from "@/textGlobal/text";
export default {
    data() {
        return {
            text,
        };
    },
}
</script>
<style scoped lang="sass">

    
</style>