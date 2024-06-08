<script setup lang="ts">
import {IonList} from "@ionic/vue"
</script>

<template>
    <ion-list :inset="true">
        <slot name="list"/>
    </ion-list>
</template>
