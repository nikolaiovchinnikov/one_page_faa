<template >
    <div class="box_items">
        <div v-for="text in texts" 
        :key="text" class="box_item"  
        @click="event" 
        :style="state? 'color : rgb(56, 157, 221)':'color :#000'">
            <div 
            class="selectImg"
            :style="state? 'opacity:1':'opacity:0'"
            ></div>
            <input class="selectDefolt"
            type="checkbox">
            {{text}}
        </div>
    </div>
    
</template>
<script>
export default {
    name:"check-box",
    data() {
        return {
        }
    },
    props:{
        texts:{
            type:Array,
            required: true
        },
        state:{
            type:Boolean,
            required: true
        }
    },
    methods:{
        event(e){
            let elementParent = e.target.parentElement
            let elmentIcon = e.target.parentNode.children[0]
            if(e.target.checked){
                elementParent.style.color = "rgb(56, 157, 221)"
                elmentIcon.style.opacity = "1"
            }else{
                elementParent.style.color = "#000"
                elmentIcon.style.opacity = "0"
            }
        }
    }

}
</script>
<style scoped lang="sass">
    .box_items
        display: flex
    .box_item
        position: relative
        display: flex
        align-items: center
    .month_check_box_choice
        display: flex
        justify-content: space-between
    .selectDefolt
        position: absolute
        width: 100%
        height: 100%
        opacity: 0
    .selectImg
        opacity: 0
        width: 15px
        height: 15px
        background: center / cover url("@/assets/select.svg")
    
</style>