<script setup lang="ts">
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {IonAccordion, IonAccordionGroup} from "@ionic/vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import {onMounted, ref} from "vue"
import SaHorseShoesPart from "@/views/sanAndreas/collectibles/horseShoes/SaHorseShoesPart.vue"
import {saOystersService} from "@/services/sanAndreas/collectibles/saOystersService"
import {saOystersItems} from "@/views/sanAndreas/collectibles/oysters/saOystersItems"
import SaOystersPart from "@/views/sanAndreas/collectibles/oysters/SaOystersPart.vue"

const totalItems = 50
const totalCollectedItems = ref()
const percentage = ref()

function updateCounter() {
    totalCollectedItems.value = saOystersService.getSumOfCollectedItems()
    percentage.value = parseInt(String((totalCollectedItems.value / totalItems) * 100))
}

onMounted(() => {
    updateCounter()
})
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="San Andreas - Ostras"/>
        </template>
        <template #content>
            <gta-helper-card>
                <template #title>
                    Coletado
                </template>
                <template #subtitle>
                    {{ totalCollectedItems }}/{{ totalItems }} ({{ percentage }}%)
                </template>
            </gta-helper-card>
            <ion-accordion-group>
                <ion-accordion v-for="(item, index) in saOystersItems" :key="index" :value="item.accordion">
                    <sa-oysters-part
                        :image-file-name="item.imageFileName"
                        :part="item.part"
                        @update:horse-shoes="updateCounter"
                    >
                        {{ item.title }}
                    </sa-oysters-part>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>
