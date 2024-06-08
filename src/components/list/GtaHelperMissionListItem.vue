<script setup lang="ts">
import {IonItem, IonLabel} from "@ionic/vue"
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
        <ion-label>
            {{ mission.title }}
            <p>{{ mission.description }}</p>
            <p>
                <strong>Recompensa(s):</strong> {{ mission.rewards }}
            </p>
        </ion-label>
    </ion-item>
</template>
