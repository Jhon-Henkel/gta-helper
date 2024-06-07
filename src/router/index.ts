import {createRouter, createWebHistory} from '@ionic/vue-router'
import {RouteRecordRaw} from 'vue-router'
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/sa/main'
            },
            {
                path: 'sa/main',
                component: () => import('../views/sanAndreas/main/SaMainPage.vue')
            },
            {
                path: 'vc/main',
                component: () => import('../views/viceCity/main/VcMainPage.vue')
            },
            {
                path: 'v/main',
                component: () => import('../views/v/main/VMainPage.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
