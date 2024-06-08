<script setup lang="ts">
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {IonAccordion, IonAccordionGroup, IonContent} from "@ionic/vue"
import SaGraffitiPart from "@/views/sanAndreas/collectibles/graffiti/SaGraffitiPart.vue"
import {saGraffitiItems} from "@/views/sanAndreas/collectibles/graffiti/saGraffitiItems"
import {graffitiService} from "@/services/sanAndreas/collectibles/graffitiService"
import {onMounted, ref} from "vue"
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"

const totalGraffitis = 100
const totalCollectedItems = ref()
const percentage = ref()

function updateGraffitiCounter() {
    totalCollectedItems.value = graffitiService.getSumOfCollectedItems()
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
                        <sa-graffiti-part
                            :image-file-name="item.imageFileName"
                            :part="item.part"
                            @update:graffiti="updateGraffitiCounter"
                        >
                            {{ item.title }}
                        </sa-graffiti-part>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
        </template>
    </gta-helper-page>
</template>
