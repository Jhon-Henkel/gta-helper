<script setup lang="ts">
import {IonAccordion, IonAccordionGroup} from "@ionic/vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {saPropertiesItems} from "@/views/sanAndreas/properties/saPropertiesItems"
import SaPropertiesPart from "@/views/sanAndreas/properties/SaPropertiesPart.vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="San Andreas - Casas"/>
        </template>
        <template #content>
            <gta-helper-card>
                <template #title>
                    Total
                </template>
                <template #subtitle>
                    32
                </template>
            </gta-helper-card>
            <ion-accordion-group>
                <ion-accordion v-for="(item, index) in saPropertiesItems" :key="index" :value="item.accordion">
                    <sa-properties-part :items="item.items">
                        {{ item.title }}
                    </sa-properties-part>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>
