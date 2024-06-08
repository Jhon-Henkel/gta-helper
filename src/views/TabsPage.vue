<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonPage, IonRouterOutlet, IonImg} from '@ionic/vue'
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet/>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="vc" href="/vc/main">
                    <ion-img src="/public/assets/images/gameIcons/vc_icon.png" alt="Ícone Vice City"/>
                </ion-tab-button>
                <ion-tab-button tab="sa" href="/sa/main">
                    <ion-img src="/public/assets/images/gameIcons/sa_icon.png" alt="Ícone San Andreas"/>
                </ion-tab-button>
                <ion-tab-button tab="v" href="/v/main">
                    <ion-img src="/public/assets/images/gameIcons/iv_icon.png" alt="Ícone IV"/>
                </ion-tab-button>
                <ion-tab-button tab="v" href="/v/main">
                    <ion-img src="/public/assets/images/gameIcons/v_icon.png" alt="Ícone V"/>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>
