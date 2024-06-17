<script setup lang="ts">
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import {IonImg, IonLabel} from "@ionic/vue"
import {directories} from "@/dataObjects/directories"
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="GTA SA - Entregador"/>
        </template>
        <template #content>
            <ion-label>
                <p>
                    Existem 3 missões de entregador, para concluir, basta chegar ao nível 4.
                </p>
            </ion-label>
            <ion-img :src="`${directories.sanAndreas.missions.deliveryman}sa_delivery_man_los_santos.jpg`"/>
            <ion-img :src="`${directories.sanAndreas.missions.deliveryman}sa_delivery_man_san_fierro.jpg`"/>
            <ion-img :src="`${directories.sanAndreas.missions.deliveryman}sa_delivery_man_las_venturas.jpg`"/>
        </template>
    </gta-helper-page>
</template>
