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
                path: 'sa/secondary-missions',
                name: 'sa-secondary-missions',
                component: () => import('../views/sanAndreas/missions/secondary/SaSecondaryMissionsPage.vue')
            },
            {
                path: 'sa/deliveryman',
                name: 'sa-deliveryman',
                component: () => import('../views/sanAndreas/deliveryman/SaDeliverymanPage.vue')
            },
            {
                path: 'sa/challenges',
                name: 'sa-challenges',
                component: () => import('../views/sanAndreas/challenges/SaChallengesPage.vue')
            },
            {
                path: 'sa/graffiti',
                name: 'sa-graffiti',
                component: () => import('../views/sanAndreas/collectibles/graffiti/SaGraffitiPage.vue')
            },
            {
                path: 'sa/photos',
                name: 'sa-photos',
                component: () => import('../views/sanAndreas/collectibles/photos/SaPhotosPage.vue')
            },
            {
                path: 'sa/horse-shoes',
                name: 'sa-horse-shoes',
                component: () => import('../views/sanAndreas/collectibles/horseShoes/SaHorseShoesPage.vue')
            },
            {
                path: 'sa/oysters',
                name: 'sa-oysters',
                component: () => import('../views/sanAndreas/collectibles/oysters/SaOystersPage.vue')
            },
            {
                path: 'sa/all-properties',
                name: 'sa-all-properties',
                component: () => import('../views/sanAndreas/properties/SaAllPropertiesPage.vue')
            },
            {
                path: 'sa/import-vehicles',
                name: 'sa-import-vehicles',
                component: () => import('../views/sanAndreas/collectibles/vehicles/SaVehiclesImportationPage.vue')
            },
            {
                path: 'sa/vehicle-missions',
                name: 'sa-vehicle-missions',
                component: () => import('../views/sanAndreas/missions/vehicle/SaVehicleMissionsPage.vue')
            },
            {
                path: 'sa/conclusion-guide',
                name: 'sa-conclusion-guide',
                component: () => import('../views/sanAndreas/conclusion/SaConclusionGuidePage.vue')
            },
            {
                path: 'sa/credits',
                name: 'sa-credits',
                component: () => import('../views/sanAndreas/credits/SaCreditsPage.vue')
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
    history: createWebHistory(),
    routes
})

export default router
