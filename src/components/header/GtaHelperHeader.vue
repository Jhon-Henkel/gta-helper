<script setup lang="ts">
import {IonHeader, IonTitle, IonToolbar} from "@ionic/vue"

defineProps(
    {
        title: {
            type: String,
            required: true
        }
    }
)
</script>

<template>
    <ion-header>
        <ion-toolbar>
            <ion-title>{{title}}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>
