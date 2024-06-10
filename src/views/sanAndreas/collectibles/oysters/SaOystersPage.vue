<script setup lang="ts">
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {IonAccordion, IonAccordionGroup} from "@ionic/vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import {onMounted, ref} from "vue"
import {saOystersService} from "@/services/collectibles/sanAndreas/saOystersService"
import {saOystersItems} from "@/views/sanAndreas/collectibles/oysters/saOystersItems"
import {directories} from "@/dataObjects/directories"
import GtaHelperPartView from "@/components/collectibles/GtaHelperPartView.vue"

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
                    <gta-helper-part-view
                        :image-file-name="`${directories.sanAndreas.collectibles.oysters}${item.imageFileName}`"
                        :part="item.part"
                        :service="saOystersService"
                        @update="updateCounter"
                    >
                        {{ item.title }}
                    </gta-helper-part-view>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>
