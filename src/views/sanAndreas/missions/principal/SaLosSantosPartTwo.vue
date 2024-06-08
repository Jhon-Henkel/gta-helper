<script setup lang="ts">
import {IonLabel, IonItem} from "@ionic/vue"
import GtaHelperMissionListItem from "@/components/list/GtaHelperMissionListItem.vue"
import {losSantosMissionsPartTwo} from "@/dataObjects/missions/sanAndreas/losSantosMissionsPartTwo"
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label>VI - Retorno a Los Santos</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <gta-helper-mission-list-item
            v-for="(mission, index) in losSantosMissionsPartTwo"
            :key="index"
            :mission="mission"
        />
    </div>
</template>
