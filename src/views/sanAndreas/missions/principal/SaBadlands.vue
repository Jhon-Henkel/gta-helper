<script setup lang="ts">
import {IonLabel, IonItem} from "@ionic/vue"
import GtaHelperMissionListItem from "@/components/list/GtaHelperMissionListItem.vue"
import {badlandsMissions} from "@/dataObjects/missions/sanAndreas/badlandsMissions"
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label>II - Badlands</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <gta-helper-mission-list-item
            v-for="(mission, index) in badlandsMissions"
            :key="index"
            :mission="mission"
        />
    </div>
</template>
