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
