<script setup lang="ts">
import {IonItem, IonLabel, IonImg} from "@ionic/vue"
import {IMissionItem} from "@/dataObjects/missions/iMissionItem"

defineProps(
    {
        mission: {
            type: Object as () => IMissionItem,
            required: true
        }
    }
)
</script>

<template>
    <ion-item>
        <ion-img slot="start" :src="mission.icon" alt="Ícone da missão"/>
        <ion-label>
            {{ mission.title }}
            <br>
            <br>
            <p>{{ mission.description }}</p>
            <br>
            <p>
                <strong>Recompensa(s):</strong> {{ mission.rewards }}
            </p>
        </ion-label>
    </ion-item>
</template>
