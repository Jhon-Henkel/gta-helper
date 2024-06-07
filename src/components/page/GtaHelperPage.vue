<script setup lang="ts">
import {IonContent, IonPage} from '@ionic/vue'
</script>

<template>
    <ion-page>
        <slot name="header"/>
        <ion-content :fullscreen="true">
            <slot name="content"/>
        </ion-content>
    </ion-page>
</template>
