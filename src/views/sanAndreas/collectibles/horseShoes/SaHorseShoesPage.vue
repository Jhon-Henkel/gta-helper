<script setup lang="ts">
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {IonAccordion, IonAccordionGroup} from "@ionic/vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import {onMounted, ref} from "vue"
import SaHorseShoesPart from "@/views/sanAndreas/collectibles/horseShoes/SaHorseShoesPart.vue"
import {saHorseShoesService} from "@/services/sanAndreas/collectibles/saHorseShoesService"
import {saHorseShoesItems} from "@/views/sanAndreas/collectibles/horseShoes/saHorseShoesItems"

const totalItems = 50
const totalCollectedItems = ref()
const percentage = ref()

function updateHorseShoesCounter() {
    totalCollectedItems.value = saHorseShoesService.getSumOfCollectedItems()
    percentage.value = parseInt(String((totalCollectedItems.value / totalItems) * 100))
}

onMounted(() => {
    updateHorseShoesCounter()
})
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="San Andreas - Ferraduras"/>
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
                <ion-accordion v-for="(item, index) in saHorseShoesItems" :key="index" :value="item.accordion">
                    <sa-horse-shoes-part
                        :image-file-name="item.imageFileName"
                        :part="item.part"
                        @update:horse-shoes="updateHorseShoesCounter"
                    >
                        {{ item.title }}
                    </sa-horse-shoes-part>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>
