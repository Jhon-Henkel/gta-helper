<script setup lang="ts">
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {IonAccordion, IonAccordionGroup} from "@ionic/vue"
import {saPhotosItems} from "@/views/sanAndreas/collectibles/photos/saPhotoItems"
import SaPhotosPart from "@/views/sanAndreas/collectibles/photos/SaPhotosPart.vue"
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {onMounted, ref} from "vue"
import {saPhotosService} from "@/services/sanAndreas/collectibles/saPhotosService"

const totalItems = 50
const totalCollectedItems = ref()
const percentage = ref()

function updatePhotoCounter() {
    totalCollectedItems.value = saPhotosService.getSumOfCollectedItems()
    percentage.value = parseInt(String((totalCollectedItems.value / totalItems) * 100))
}

onMounted(() => {
    updatePhotoCounter()
})
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="San Andreas - Fotos"/>
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
                <ion-accordion v-for="(item, index) in saPhotosItems" :key="index" :value="item.accordion">
                    <sa-photos-part
                        :image-file-name="item.imageFileName"
                        :part="item.part"
                        @update:graffiti="updatePhotoCounter"
                    >
                        {{ item.title }}
                    </sa-photos-part>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>
