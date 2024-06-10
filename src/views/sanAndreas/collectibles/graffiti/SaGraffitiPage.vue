<script setup lang="ts">
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {IonAccordion, IonAccordionGroup, IonContent} from "@ionic/vue"
import {saGraffitiItems} from "@/views/sanAndreas/collectibles/graffiti/saGraffitiItems"
import {saGraffitiService} from "@/services/collectibles/sanAndreas/saGraffitiService"
import {onMounted, ref} from "vue"
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import GtaHelperPartView from "@/components/collectibles/GtaHelperPartView.vue"
import {directories} from "@/dataObjects/directories"

const totalGraffitis = 100
const totalCollectedItems = ref()
const percentage = ref()

function updateGraffitiCounter() {
    totalCollectedItems.value = saGraffitiService.getSumOfCollectedItems()
    percentage.value = parseInt(String((totalCollectedItems.value / totalGraffitis) * 100))
}

onMounted(() => {
    updateGraffitiCounter()
})
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="San Andreas - Grafites"/>
        </template>
        <template #content>
            <ion-content>
                <gta-helper-card>
                    <template #title>
                        Coletado
                    </template>
                    <template #subtitle>
                        {{ totalCollectedItems }}/{{ totalGraffitis }} ({{ percentage }}%)
                    </template>
                </gta-helper-card>
                <ion-accordion-group>
                    <ion-accordion v-for="(item, index) in saGraffitiItems" :key="index" :value="item.accordion">
                        <gta-helper-part-view
                            :image-file-name="`${directories.sanAndreas.collectibles.graffiti}${item.imageFileName}`"
                            :part="item.part"
                            :service="saGraffitiService"
                            @update="updateGraffitiCounter"
                        >
                            {{ item.title }}
                        </gta-helper-part-view>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
        </template>
    </gta-helper-page>
</template>
