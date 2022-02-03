import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { constantRouterMap as routes } from '@/config/router.config'

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    // history: createWebHashHistory(process.env.BASE_URL),
    routes
})
