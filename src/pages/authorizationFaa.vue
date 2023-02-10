<template >
    <myNav 
    :textListTwo = "text.textListTwo"
    :textListOne = "text.textListOne"
    :textBtn     = "text.btnText.inFaa"
    />
    <header>
        <div class="conteiner">
            <div class="">
                <h1>Членство в Федерации Альпинизма города Алматы</h1>
                <div>
                    <p>
                        Регистрация новых членов ФАА
                    </p>
                    <p>
                        Продления членства в ФАА
                    </p>
                </div>
            <aside>
                <p>
                    Регистрация или продление членства в ФАА
                </p>
                <p>
                    О членстве в ФАА
                </p>
                <p>
                    Как вступить в члены ФАА
                </p>
                <p>
                    Как продлить членство ФАА
                </p>
                <p>
                    Сервисы для членов ФАА
                </p>
                <p>
                    Список членов ФАА
                </p>
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
    
</style>