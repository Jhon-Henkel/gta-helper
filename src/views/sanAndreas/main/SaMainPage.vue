<script setup lang="ts">
import {IonImg, IonItem} from '@ionic/vue'
import GtaHelperPage from '@/components/page/GtaHelperPage.vue'
import GtaHelperListContent from '@/components/list/GtaHelperListContent.vue'
import GtaHelperHeader from '@/components/header/GtaHelperHeader.vue'
import router from "@/router"
import {saMainMenuItems} from "@/menu/sanAndreas/saMainMenu"

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
                    <ion-item
                        v-for="(item, index) in saMainMenuItems"
                        :key="index"
                        button
                        @click="goToRoute(item.routeName)"
                    >
                        <ion-img :src="item.icon" slot="start" class="icon"/>
                        {{ item.label }}
                    </ion-item>
                </template>
            </gta-helper-list-content>
        </template>
    </gta-helper-page>
</template>

<style scoped>
.icon {
    width: 16px;
    height: 16px;
}
</style>
