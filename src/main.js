import { createApp } from 'vue'
import App from './App.vue'
import components from "@/UI/index"
import routs from "@/router/router"
console.log(components)
console.log(routs)
const app = createApp(App)

components.forEach((component) => {
    app.component(component.name, component)
})


app
    .use(routs)
    .mount('#app')
