<script setup lang="ts">
import {PropType} from "vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {IMissionItemView} from "@/dataObjects/missions/IMissionItemView"
import GtaHelperMissionPartView from "@/components/missions/GtaHelperMissionPartView.vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import {IonAccordion, IonAccordionGroup, IonContent} from "@ionic/vue"

defineProps(
    {
        title: {
            type: String,
            required: true
        },
        missionsItemView: {
            type: Array as PropType<Array<IMissionItemView>>,
            required: true
        }
    }
)
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header :title="title"/>
        </template>
        <template #content>
            <ion-content>
                <ion-accordion-group v-for="(item, index) in missionsItemView" :key="index">
                    <ion-accordion :value="item.accordion">
                        <gta-helper-mission-part-view :title="item.title" :missions="item.missions"/>
                    </ion-accordion>
                </ion-accordion-group>
            </ion-content>
        </template>
    </gta-helper-page>
</template>
