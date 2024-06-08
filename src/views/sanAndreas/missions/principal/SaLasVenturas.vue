<script setup lang="ts">
import {IonLabel, IonItem} from "@ionic/vue"
import GtaHelperMissionListItem from "@/components/list/GtaHelperMissionListItem.vue"
import {lasVenturasMissions} from "@/dataObjects/missions/sanAndreas/lasVenturasMissions"
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label>V - Las Venturas</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <gta-helper-mission-list-item
            v-for="(mission, index) in lasVenturasMissions"
            :key="index"
            :mission="mission"
        />
    </div>
</template>
