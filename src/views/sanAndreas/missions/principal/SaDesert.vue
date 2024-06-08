<script setup lang="ts">
import {IonLabel, IonItem} from "@ionic/vue"
import GtaHelperMissionListItem from "@/components/list/GtaHelperMissionListItem.vue"
import {desertMissions} from "@/dataObjects/missions/sanAndreas/desertMissions"
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label>IV - Deserto</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <gta-helper-mission-list-item
            v-for="(mission, index) in desertMissions"
            :key="index"
            :mission="mission"
        />
    </div>
</template>
