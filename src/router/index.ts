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
                path: 'in-development',
                name: 'in-development',
                component: () => import('../views/temporary/DevelopmentPage.vue')
            },
            {
                path: 'sa/main',
                name: 'sa-main',
                component: () => import('../views/sanAndreas/main/SaMainPage.vue')
            },
            {
                path: 'sa/principal-missions',
                name: 'sa-principal-missions',
                component: () => import('../views/sanAndreas/missions/principal/SaPrincipalMissionsPage.vue')
            },
            {
                path: 'sa/graffiti',
                name: 'sa-graffiti',
                component: () => import('../views/sanAndreas/collectibles/graffiti/SaGraffitiPage.vue')
            },
            {
                path: 'vc/main',
                name: 'vc-main',
                component: () => import('../views/viceCity/main/VcMainPage.vue')
            },
            {
                path: 'v/main',
                name: 'v-main',
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
