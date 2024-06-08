<script setup lang="ts">
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/vue"
</script>

<template>
    <ion-card color="light">
        <ion-card-header>
            <ion-card-title>
                <slot name="title"/>
            </ion-card-title>
            <ion-card-subtitle>
                <slot name="subtitle"/>
            </ion-card-subtitle>
        </ion-card-header>
    </ion-card>
</template>
