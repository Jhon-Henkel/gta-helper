<script setup lang="ts">
import {directories} from "@/dataObjects/directories"
import {IonImg, IonItem, IonLabel, IonCheckbox, IonList} from "@ionic/vue"
import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {onMounted, ref} from "vue"
import {saOystersService} from "@/services/sanAndreas/collectibles/saOystersService"

const props = defineProps(
    {
        part: {
            type: String,
            required: true
        },
        imageFileName: {
            type: String,
            required: true
        }
    }
)
const emmit = defineEmits(["update:oysters"])

const items = saOystersService.getOysters(props.part)
const collectedItems = ref(0)

function update(item: ICollectibleItem) {
    items.forEach((it) => {
        if (it.number === item.number) {
            it.collected = !it.collected
        }
    })
    saOystersService.updateOysters(props.part, items)
    updateCollectedItems()
    emmit("update:oysters", items)
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
        <ion-img :src="`${directories.sanAndreas.collectibles.oysters}${imageFileName}`"/>
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
