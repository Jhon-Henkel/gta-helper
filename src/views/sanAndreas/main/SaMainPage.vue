<script setup lang="ts">
import {IonIcon, IonItem} from '@ionic/vue'
import GtaHelperPage from '@/components/page/GtaHelperPage.vue'
import GtaHelperListContent from '@/components/list/GtaHelperListContent.vue'
import GtaHelperHeader from '@/components/header/GtaHelperHeader.vue'
import router from "@/router"
import {saMainMenuItems} from "@/menu/sanAndreas/saMainMenu"

const MenuItems = saMainMenuItems

function goToRoute(routeName: string) {
    router.push({name: routeName})
}
</script>

<template>
    <gta-helper-page>
        <template v-slot:header>
            <gta-helper-header title="San Andreas"/>
        </template>
        <template v-slot:content>
            <gta-helper-list-content>
                <template v-slot:list>
                    <ion-item v-for="(item, index) in MenuItems" :key="index" button @click="goToRoute(item.routeName)">
                        <ion-img :src="item.icon" slot="start"/>
                        {{ item.label }}
                    </ion-item>
                </template>
            </gta-helper-list-content>
        </template>
    </gta-helper-page>
</template>
