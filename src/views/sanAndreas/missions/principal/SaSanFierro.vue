<script setup lang="ts">
import {IonLabel, IonItem} from "@ionic/vue"
import GtaHelperMissionListItem from "@/components/list/GtaHelperMissionListItem.vue"
import {sanFierroMissions} from "@/dataObjects/missions/sanAndreas/sanFierroMissions"
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label>III - San Fierro</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <gta-helper-mission-list-item
            v-for="(mission, index) in sanFierroMissions"
            :key="index"
            :mission="mission"
        />
    </div>
</template>
