<template >
    <myNav 
        :textListTwo = "text.textListTwo"
        :textListOne = "text.textListOne"
        :textBtn     = "text.btnText.inFaa"
    />
    <header>
        <div class="conteiner ">
            <div class="autorization">
                <div class="autorization_title">
                    <h1>Членство в Федерации Альпинизма города Алматы</h1>
                    <div class="autorization_link">
                        <a>
                            Регистрация новых членов ФАА
                        </a>
                        <a>
                            Продления членства в ФАА
                        </a>
                    </div>
                </div>
                <aside class="aside_menu">
                    <a>
                        Регистрация или продление членства в ФАА
                    </a>
                    <a>
                        О членстве в ФАА
                    </a>
                    <a>
                        Как вступить в члены ФАА
                    </a>
                    <a>
                        Как продлить членство ФАА
                    </a>
                    <a>
                        Сервисы для членов ФАА
                    </a>
                    <a>
                        Список членов ФАА
                    </a>
                </aside>
            </div>
            <faa-btn :name="text.btnText.inFaa"/>
        </div>
    </header>
</template>
<script>
import { text } from "@/textGlobal/text";
export default {
    name:"pageAuthorization",
    data() {
        return {
            text
        }
    },
}
</script>
<style lang="sass">
    .autorization
        height: 900px
        display: flex
        justify-content: space-between
        &_title
            height: 200px
            width: 902px
            display: flex
            flex-direction: column
            justify-content: space-between
            align-items: center
            &_link
                display: flex
                justify-content: space-between
    .aside_menu
        display: flex
        flex-direction: column
</style>