<script setup lang="ts">
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {IonAccordion, IonAccordionGroup} from "@ionic/vue"
import {saPhotosItems} from "@/views/sanAndreas/collectibles/photos/saPhotoItems"
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {onMounted, ref} from "vue"
import {saPhotosService} from "@/services/collectibles/sanAndreas/saPhotosService"
import {directories} from "@/dataObjects/directories"
import GtaHelperPartView from "@/components/collectibles/GtaHelperPartView.vue"

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
                    <gta-helper-part-view
                        :image-file-name="`${directories.sanAndreas.collectibles.photos}${item.imageFileName}`"
                        :part="item.part"
                        :service="saPhotosService"
                        @update="updatePhotoCounter"
                    >
                        {{ item.title }}
                    </gta-helper-part-view>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>
