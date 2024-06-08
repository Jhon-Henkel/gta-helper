<script setup lang="ts">
import {graffiti} from "@/dataObjects/collectibles/sanAndreas/graffiti/graffiti"
import {directories} from "@/dataObjects/directories"
import {IonImg, IonItem, IonLabel, IonCheckbox, IonList} from "@ionic/vue"

const items = graffiti.partSix
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label slot="start">Parte 6</ion-label>
        <ion-label>0/{{ items.length }}</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <ion-img :src="`${directories.sanAndreas.collectibles.graffiti}sa_graffiti_6.png`"/>
        <ion-list>
            <ion-item v-for="(item, index) in items" :key="index">
                <ion-checkbox slot="start" v-model="item.collected"/>
                <ion-label>
                    {{ item.number }}
                    <p>{{ item.description }}</p>
                </ion-label>
            </ion-item>
        </ion-list>
    </div>
</template>
