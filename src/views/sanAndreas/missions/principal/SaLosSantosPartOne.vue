<script setup lang="ts">
import {IonLabel, IonItem} from "@ionic/vue"
import GtaHelperMissionListItem from "@/components/list/GtaHelperMissionListItem.vue"
import {losSantosMissionsPartOne} from "@/dataObjects/missions/sanAndreas/losSantosMissionsPartOne"
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label>I - Los Santos</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <gta-helper-mission-list-item
            v-for="(mission, index) in losSantosMissionsPartOne"
            :key="index"
            :mission="mission"
        />
    </div>
</template>
