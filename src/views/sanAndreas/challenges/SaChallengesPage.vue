<script setup lang="ts">
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import { IonItem, IonList, IonLabel } from "@ionic/vue"
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="GTA SA - Desafios"/>
        </template>
        <template #content>
            <ion-list>
                <ion-item>
                    <ion-label><p>Desafios Mountain Bike no topo do Mont Chilliad (3)</p></ion-label>
                </ion-item>
            </ion-list>
            <ion-list>
                <ion-item>
                    <ion-label><p>Desafio BMX na pista de Skate em Los Santos</p></ion-label>
                </ion-item>
            </ion-list>
            <ion-list>
                <ion-item>
                    <ion-label><p>Desafio NGR-500 nas docas em San Fierro</p></ion-label>
                </ion-item>
            </ion-list>
        </template>
    </gta-helper-page>
</template>
