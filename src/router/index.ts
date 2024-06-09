import {createRouter, createWebHistory} from '@ionic/vue-router'
import {RouteRecordRaw} from 'vue-router'
import TabsPage from '../views/TabsPage.vue'
import DevelopmentPage from "@/views/temporary/DevelopmentPage.vue"
import SaMainPage from '@/views/sanAndreas/main/SaMainPage.vue'
import SaPrincipalMissionsPage from "@/views/sanAndreas/missions/principal/SaPrincipalMissionsPage.vue"
import SaGraffitiPage from "@/views/sanAndreas/collectibles/graffiti/SaGraffitiPage.vue"
import SaPhotosPage from "@/views/sanAndreas/collectibles/photos/SaPhotosPage.vue"
import VMainPage from "@/views/v/main/VMainPage.vue"
import VcMainPage from "@/views/viceCity/main/VcMainPage.vue"
import SaAllPropertiesPage from "@/views/sanAndreas/properties/SaAllPropertiesPage.vue"
import SaOystersPage from "@/views/sanAndreas/collectibles/oysters/SaOystersPage.vue"
import SaHorseShoesPage from "@/views/sanAndreas/collectibles/horseShoes/SaHorseShoesPage.vue"

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
                component: DevelopmentPage
            },
            {
                path: 'sa/main',
                name: 'sa-main',
                component: SaMainPage
            },
            {
                path: 'sa/principal-missions',
                name: 'sa-principal-missions',
                component: SaPrincipalMissionsPage
            },
            {
                path: 'sa/graffiti',
                name: 'sa-graffiti',
                component: SaGraffitiPage
            },
            {
                path: 'sa/photos',
                name: 'sa-photos',
                component: SaPhotosPage
            },
            {
                path: 'sa/horse-shoes',
                name: 'sa-horse-shoes',
                component: SaHorseShoesPage
            },
            {
                path: 'sa/oysters',
                name: 'sa-oysters',
                component: SaOystersPage
            },
            {
                path: 'sa/all-properties',
                name: 'sa-all-properties',
                component: SaAllPropertiesPage
            },
            {
                path: 'vc/main',
                name: 'vc-main',
                component: VcMainPage
            },
            {
                path: 'v/main',
                name: 'v-main',
                component: VMainPage
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
