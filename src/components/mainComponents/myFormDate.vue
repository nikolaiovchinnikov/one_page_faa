<template >
    <form class="form" action="" >
            <div class="title_top">
                <h2 class="top_text">
                    Фильтр
                </h2>
                <a class="close" @click="close"></a>
            </div>
            <div class="block_date_min_max">
                <h2 class="min_max_title">
                    Показывать новости
                </h2>
                <div class="min_max_texts">
                    <p :style=" State ? 'color: #000' : 'color: #389DDD' ">
                        По убыванию даты
                    </p>
                    <div class="check_box">
                        <div class="circle" :class=" State ? 'left' : 'right' ">
                        </div>
                        <input @click="checkBoxsState" class="input" type="checkbox" name="" id="">
                    </div>
                    <p :style=" State ? 'color: #389DDD' : 'color: #000' ">
                        По возрастанию даты
                    </p>
                </div>

                <div class="age_check_box">
                    <div class="age_title">
                        <h2>Год</h2>
                        <a>Выбрать все</a>
                    </div>
                    <check-box :texts="listMount"/>
                </div>

                <div class="month_check_box">
                    <div class="month_title">
                        <h2>Месяц</h2>
                        <a>Выбрать все</a>
                    </div>
                    <check-box :texts="listAge"/>
                </div>
                <div>
                    <faa-btn :name="text.btnText.formReset"/>
                    <faa-btn :name="text.btnText.formFilter"/>
                </div>
            </div>
        </form>
</template>

<script>
import {text} from "@/textGlobal/text";
export default {
    name: "myFormDate",
    data() {
        return {
            State: false,
            text,
            listMount:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
            listAge:[2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]
        };
    },
    methods: {
        close(e){
            let elemntForm = e.target.parentElement.parentElement;
            elemntForm.style.display="none"
        },
        checkBoxsState(event) {
            this.State = event.target.checked;
            console.log(event.target);
            return event.target.checked;
        }
    },
}
</script>


<style scoped lang="sass">
    .form
        width: 627px
        height: 727px
    .title_top
        display: flex
        justify-content: space-between
        align-items: center
        background-color: #389DDD
        width: 627px
        height: 106px
    .top_text
        margin: 0 0 0 20px
        color: #fff
        font-size: 20px
    .close
        margin: 0 20px 0 0
        background: center / cover url("@/assets/close.svg")
        background-repeat: no-repeat
        width: 50px
        height: 50px
        display: block
    .block_date_min_max
        height: 160px
        width: 627px
    .min_max_title
    .min_max_texts
        display: flex
    .input
        position: absolute
        top: -8px
        left: -9px
        width: 50px
        height: 20px
        opacity: 0
    .check_box
        position: relative
        background-color: #389DDD
        width: 40px
        height: 11px
        border-radius: 10px
    .circle
        top: -4px
        background-color: #389DDD
        position: absolute
        width: 20px
        height: 20px
        border: solid 1px #000
        border-radius: 50%
    .left
        transform: translate( 20px, 0 )
    .right
        transform: translate( 0, 0 )
    .age_check_box
        display: flex
        justify-content: space-between
        flex-direction: column
    .age_title
        display: flex
        justify-content: space-between
    .age_check_box_choice
        display: flex
        justify-content: space-between
    .month_check_box
        display: flex
        justify-content: space-between
        flex-direction: column
    .month_title
        display: flex
        justify-content: space-between
    
</style>