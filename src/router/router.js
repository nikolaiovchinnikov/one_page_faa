import { createRouter, createWebHistory } from 'vue-router'
import main from "@/pages/main"
import authorization from "@/pages/authorizationFaa"
import news from "@/pages/news"
import school from "@/pages/school"
import articles from "@/pages/articles"
import eventsFaa from "@/pages/eventsFaa"
import resultsFaa from "@/pages/resultsFaa"
import comunity from "@/pages/comunity"
const routes = [
    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/authorization',
        name: 'authorization',
        component: authorization
    },
    {
        path: '/news',
        name: 'news',
        component: news
    },
    {
        path: "/school",
        name: "Школа альпинизма",
        component:school
    },

    {
        path: "/articles",
        name: "Статьи",
        component: articles
    },
    {
        path: "/eventsFaa",
        name: "Мероприятия ФАА",
        component: eventsFaa
    },
    {
        path: "/resultsFaa",
        name: "Результаты соревнований",
        component: resultsFaa
    },
    {

        path: "/comunity",
        name: "Членство в ФАА",
        component: comunity
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router
