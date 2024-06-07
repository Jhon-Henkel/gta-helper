<script setup lang="ts">
import {IonHeader, IonTitle, IonToolbar, IonIcon, IonItem} from '@ionic/vue'
import GtaHelperPage from '@/components/page/GtaHelperPage.vue'
import GtaHelperListContent from '@/components/list/GtaHelperListContent.vue'
import router from "@/router"

interface menuItem {
    routeName: string,
    icon: string,
    label: string
}

const MenuItems: Array<menuItem> = [
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Introdução'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Coisas Necessárias para o 100%'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Missões Principais'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Serviços Secundários'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Missões de Veículos'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Missões de Entregador'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Todas as Propriedades'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Ostras'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Pichações'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Fotos'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Ferradura'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Escolas'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Importação/Exportação de Veículos'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Corridas'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Desafios'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Corridas de Estádio'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Academias'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Estande de tiro'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Recompensas 100%'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Créditos'
    },

]

function goToRoute(routeName: string) {
    router.push({name: routeName})
}
</script>

<template>
    <gta-helper-page>
        <template v-slot:header>
            <ion-header>
                <ion-toolbar>
                    <ion-title>San Andreas</ion-title>
                </ion-toolbar>
            </ion-header>
        </template>
        <template v-slot:content>
            <gta-helper-list-content>
                <template v-slot:list>
                    <ion-item v-for="(item, index) in MenuItems" :key="index" button @click="goToRoute(item.routeName)">
                        <ion-icon :name="item.icon" slot="start"/>
                        {{ item.label }}
                    </ion-item>
                </template>
            </gta-helper-list-content>
        </template>
    </gta-helper-page>
</template>
