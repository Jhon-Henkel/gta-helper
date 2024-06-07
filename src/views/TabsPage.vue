<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet/>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="sa" href="/sa/main">
                    <ion-icon aria-hidden="true" :icon="triangle"/>
                    <ion-label>San Andreas</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="vc" href="/vc/main">
                    <ion-icon aria-hidden="true" :icon="ellipse"/>
                    <ion-label>Vice City</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="v" href="/v/main">
                    <ion-icon aria-hidden="true" :icon="square"/>
                    <ion-label>V</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet} from '@ionic/vue'
import {ellipse, square, triangle} from 'ionicons/icons'
</script>
