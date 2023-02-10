import { createRouter, createWebHistory } from 'vue-router'
import main from "@/pages/main"
import authorization from "@/pages/authorizationFaa"

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
  }

]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router
