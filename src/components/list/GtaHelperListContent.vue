<script setup lang="ts">
import {IonContent} from "@ionic/vue"
import GtaHelperList from "@/components/list/GtaHelperList.vue"
</script>

<template>
    <ion-content>
        <gta-helper-list>
            <template v-slot:list>
                <slot name="list"/>
            </template>
        </gta-helper-list>
        <slot name="content"/>
    </ion-content>
</template>
