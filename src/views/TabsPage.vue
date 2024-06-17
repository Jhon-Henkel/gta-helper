<script setup lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonPage, IonRouterOutlet, IonImg} from '@ionic/vue'
</script>

<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet/>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="vc" href="/vc/main" class="in-development">
                    <ion-img src="/public/assets/images/appIcons/vc_icon.png" alt="Ícone Vice City"/>
                </ion-tab-button>
                <ion-tab-button tab="sa" href="/sa/main">
                    <ion-img src="/public/assets/images/appIcons/sa_icon.png" alt="Ícone San Andreas"/>
                </ion-tab-button>
                <ion-tab-button tab="v" href="/v/main" class="in-development">
                    <ion-img src="/public/assets/images/appIcons/iv_icon.png" alt="Ícone IV"/>
                </ion-tab-button>
                <ion-tab-button tab="v" href="/v/main" class="in-development">
                    <ion-img src="/public/assets/images/appIcons/v_icon.png" alt="Ícone V"/>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<style scoped>
.in-development {
    display: none;
}
</style>
