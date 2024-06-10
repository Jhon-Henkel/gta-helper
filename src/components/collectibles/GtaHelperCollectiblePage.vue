<script setup lang="ts">
import {onMounted, PropType, ref} from "vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import GtaHelperCollectiblePartView from "@/components/collectibles/GtaHelperCollectiblePartView.vue"
import {IonAccordion, IonAccordionGroup} from "@ionic/vue"
import {ICollectibleService} from "@/services/collectibles/ICollectibleService"
import {ICollectibleViewItem} from "@/views/sanAndreas/collectibles/iCollectibleViewItem"

const props = defineProps({
    totalItems: {
        type: Number,
        required: true
    },
    baseDirectory: {
        type: String,
        required: true
    },
    service: {
        type: Object as PropType<ICollectibleService>,
        required: true
    },
    items: {
        type: Array as PropType<Array<ICollectibleViewItem>>,
        required: true
    },
    headerTitle: {
        type: String,
        required: true
    }
})

const totalCollectedItems = ref()
const percentage = ref()

function updateCounter() {
    totalCollectedItems.value = props.service.getSumOfCollectedItems()
    percentage.value = parseInt(String((totalCollectedItems.value / props.totalItems) * 100))
}

onMounted(() => {
    updateCounter()
})
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header :title="headerTitle"/>
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
                <ion-accordion v-for="(item, index) in items" :key="index" :value="item.accordion">
                    <gta-helper-collectible-part-view
                        :image-file-name="`${baseDirectory}${item.imageFileName}`"
                        :part="item.part"
                        :service="service"
                        @update="updateCounter"
                    >
                        {{ item.title }}
                    </gta-helper-collectible-part-view>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>
