<script setup lang="ts">
import {onMounted, PropType, ref} from "vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import GtaHelperCollectiblePartView from "@/components/collectibles/GtaHelperCollectiblePartView.vue"
import {IonAccordion, IonAccordionGroup, IonButton} from "@ionic/vue"
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
        type: Array<ICollectibleViewItem>,
        required: true
    },
    headerTitle: {
        type: String,
        required: true
    },
    showNumber: {
        type: Boolean,
        required: false,
        default: true
    },
    mapImageFileName: {
        type: String,
        required: true
    },
    showItemsCount: {
        type: Boolean,
        required: false,
        default: true
    },
    itemEnum: {
        type: String,
        required: true
    }
})

const totalCollectedItems = ref()
const percentage = ref()
const onlyUnchecked = ref(true)

function updateCounter() {
    totalCollectedItems.value = props.service.getSumOfCollectedItems(props.itemEnum)
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
            <iframe :src="mapImageFileName" width="100%" height="300px"/>
            <div class="ion-text-end">
                <ion-button fill="clear" @click="onlyUnchecked = !onlyUnchecked">
                    {{ onlyUnchecked ? 'Todos' : 'Somente Não Coletados' }}
                </ion-button>
            </div>
            <ion-accordion-group>
                <ion-accordion v-for="(item, index) in items" :key="index" :value="item.accordion">
                    <gta-helper-collectible-part-view
                        :image-file-name="`${baseDirectory}${item.imageFileName}`"
                        :part="item.part"
                        :service="service"
                        :onlyUnchecked="onlyUnchecked"
                        :show-number="showNumber"
                        :show-items-count="showItemsCount"
                        @update="updateCounter"
                    >
                        {{ item.title }}
                    </gta-helper-collectible-part-view>
                </ion-accordion>
            </ion-accordion-group>
        </template>
    </gta-helper-page>
</template>

<style scoped>
iframe {
    -webkit-overflow-scrolling: touch;
}
</style>
