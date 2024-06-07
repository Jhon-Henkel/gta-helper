<script setup lang="ts">
import GtaHelperPage from '@/components/page/GtaHelperPage.vue'
import {IonLabel, IonList} from '@ionic/vue'
</script>

<template>
    <gta-helper-page>
        <template v-slot:content>
            <ion-list class="ion-text-center">
                <ion-label>Em Desenvolvimento</ion-label>
            </ion-list>
        </template>
    </gta-helper-page>
</template>
