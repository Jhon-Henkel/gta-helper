<script setup lang="ts">
import {IonHeader, IonTitle, IonToolbar} from '@ionic/vue'
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
</script>

<template>
    <gta-helper-page>
        <template v-slot:header>
            <ion-header>
                <ion-toolbar>
                    <ion-title>V</ion-title>
                </ion-toolbar>
            </ion-header>
        </template>
        <template v-slot:content>
            <ion-title size="large">V Develop In Progress</ion-title>
        </template>
    </gta-helper-page>
</template>
