<script setup lang="ts">
import {onMounted, PropType, ref} from "vue"
import {ICollectibleService} from "@/services/collectibles/ICollectibleService"
import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {IonItem, IonLabel, IonImg, IonCheckbox, IonList} from "@ionic/vue"

const props = defineProps(
    {
        part: {
            type: String,
            required: true
        },
        imageFileName: {
            type: String,
            required: true
        },
        service: {
            type: Object as PropType<ICollectibleService>,
            required: true
        }
    }
)

const emmit = defineEmits(["update"])
const items = props.service.getItemsPart(props.part)
const collectedItems = ref(0)

function update(item: ICollectibleItem) {
    items.forEach((it) => {
        if (it.number === item.number) {
            it.collected = !it.collected
        }
    })
    props.service.updateItemsPart(props.part, items)
    updateCollectedItems()
    emmit("update", items)
}

function updateCollectedItems() {
    collectedItems.value = 0
    items.forEach((item) => {
        if (item.collected) {
            collectedItems.value++
        }
    })
}

onMounted(() => {
    updateCollectedItems()
})
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label slot="start">
            <slot/>
        </ion-label>
        <ion-label>{{ collectedItems }}/{{ items.length }}</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <ion-img :src="imageFileName"/>
        <ion-list>
            <ion-item v-for="(item, index) in items" :key="index">
                <ion-checkbox slot="start" v-model="item.collected" @click="update(item)"/>
                <ion-label>
                    {{ item.number }}
                    <p>{{ item.description }}</p>
                </ion-label>
            </ion-item>
        </ion-list>
    </div>
</template>