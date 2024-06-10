<script setup lang="ts">
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {IonAccordion, IonAccordionGroup} from "@ionic/vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import {onMounted, ref} from "vue"
import {saHorseShoesService} from "@/services/collectibles/sanAndreas/saHorseShoesService"
import {saHorseShoesItems} from "@/views/sanAndreas/collectibles/horseShoes/saHorseShoesItems"
import GtaHelperPartView from "@/components/collectibles/GtaHelperPartView.vue"
import {directories} from "@/dataObjects/directories"

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
                    <gta-helper-part-view
                        :image-file-name="`${directories.sanAndreas.collectibles.horseShoes}${item.imageFileName}`"
                        :part="item.part"
                        :service="saHorseShoesService"
                        @update="updateHorseShoesCounter"
                    >
                        {{ item.title }}
                    </gta-helper-part-view>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>
