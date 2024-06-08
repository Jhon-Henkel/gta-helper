<script setup lang="ts">
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {IonAccordion, IonAccordionGroup, IonContent} from "@ionic/vue"
import SaGraffitiPartOne from "@/views/sanAndreas/collectibles/graffiti/SaGraffitiPartOne.vue"
import SaGraffitiPartTwo from "@/views/sanAndreas/collectibles/graffiti/SaGraffitiPartTwo.vue"
import SaGraffitiPartTree from "@/views/sanAndreas/collectibles/graffiti/SaGraffitiPartTree.vue"
import SaGraffitiPartFour from "@/views/sanAndreas/collectibles/graffiti/SaGraffitiPartFour.vue"
import SaGraffitiPartFive from "@/views/sanAndreas/collectibles/graffiti/SaGraffitiPartFive.vue"
import SaGraffitiPartSix from "@/views/sanAndreas/collectibles/graffiti/SaGraffitiPartSix.vue"
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="San Andreas - Grafites"/>
        </template>
        <template #content>
            <ion-content>
                <ion-accordion-group>
                    <ion-accordion value="first">
                        <sa-graffiti-part-one/>
                    </ion-accordion>
                    <ion-accordion value="second">
                        <sa-graffiti-part-two/>
                    </ion-accordion>
                    <ion-accordion value="third">
                        <sa-graffiti-part-tree/>
                    </ion-accordion>
                    <ion-accordion value="fourth">
                        <sa-graffiti-part-four/>
                    </ion-accordion>
                    <ion-accordion value="fifth">
                        <sa-graffiti-part-five/>
                    </ion-accordion>
                    <ion-accordion value="sixth">
                        <sa-graffiti-part-six/>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
        </template>
    </gta-helper-page>
</template>
