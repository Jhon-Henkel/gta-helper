<script setup lang="ts">
import GtaHelperMissionListItem from "@/components/missions/GtaHelperMissionListItem.vue"
import {PropType} from "vue"
import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {IonLabel, IonItem} from "@ionic/vue"

defineProps(
    {
        title: {
            type: String,
            required: true
        },
        missions: {
            type: Array as PropType<Array<IMissionItem>>,
            required: true
        }
    }
)
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label>{{ title }}</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <gta-helper-mission-list-item v-for="(mission, index) in missions" :key="index" :mission="mission"/>
    </div>
</template>
