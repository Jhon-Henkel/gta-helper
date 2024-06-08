<script setup lang="ts">
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {IonContent, IonAccordionGroup, IonAccordion} from "@ionic/vue"
import SaLosSantosPartOne from "@/views/sanAndreas/missions/principal/SaLosSantosPartOne.vue"
import SaBadlands from "@/views/sanAndreas/missions/principal/SaBadlands.vue"
import SaSanFierro from "@/views/sanAndreas/missions/principal/SaSanFierro.vue"
import SaDesert from "@/views/sanAndreas/missions/principal/SaDesert.vue"
import SaLasVenturas from "@/views/sanAndreas/missions/principal/SaLasVenturas.vue"
import SaLosSantosPartTwo from "@/views/sanAndreas/missions/principal/SaLosSantosPartTwo.vue"
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="San Andreas - Missões Principais"/>
        </template>
        <template #content>
            <ion-content>
                <ion-accordion-group>
                    <ion-accordion value="first">
                        <sa-los-santos-part-one/>
                    </ion-accordion>
                    <ion-accordion value="second">
                        <sa-badlands/>
                    </ion-accordion>
                    <ion-accordion value="third">
                        <sa-san-fierro/>
                    </ion-accordion>
                    <ion-accordion value="fourth">
                        <sa-desert/>
                    </ion-accordion>
                    <ion-accordion value="fifth">
                        <sa-las-venturas/>
                    </ion-accordion>
                    <ion-accordion value="sixth">
                        <sa-los-santos-part-two/>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
        </template>
    </gta-helper-page>
</template>
