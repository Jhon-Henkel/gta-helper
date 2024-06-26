<script setup lang="ts">
import {onMounted, PropType, ref} from "vue"
import {ICollectibleService} from "@/services/collectibles/ICollectibleService"
import {ICollectibleItem} from "@/services/collectibles/iCollectibleItem"
import {IonItem, IonLabel, IonImg, IonCheckbox, IonList, IonNote, IonButton} from "@ionic/vue"

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
        },
        onlyUnchecked: {
            type: Boolean,
            required: false,
            default: false
        },
        showNumber: {
            type: Boolean,
            required: false,
            default: true
        },
        showItemsCount: {
            type: Boolean,
            required: false,
            default: true
        }
    }
)

const emmit = defineEmits(["update"])
const collectedItems = ref(0)
const items = ref(props.service.getItemsPart(props.part))

function update(item: ICollectibleItem) {
    items.value.forEach((it) => {
        if (it.number === item.number) {
            it.collected = !it.collected
        }
    })
    afterUpdate()
}

function updateAllItems(value: boolean) {
    items.value.forEach((item) => {
        item.collected = value
    })
    afterUpdate()
}

function afterUpdate() {
    props.service.updateItemsPart(props.part, items.value)
    updateCollectedItems()
    emmit("update", items.value)
}

function updateCollectedItems() {
    collectedItems.value = 0
    items.value.forEach((item) => {
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
        <ion-label v-show="showItemsCount">{{ collectedItems }}/{{ items.length }}</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <ion-list
            v-for="(item, index) in items"
            :key="index"
            v-show="! onlyUnchecked || (onlyUnchecked && ! item.collected)"
        >
            <ion-item>
                <ion-checkbox slot="start" :checked="item.collected" @ionChange="update(item)"/>
                <ion-img v-show="item.imageFileName" :src="item.imageFileName ?? ''" class="item-image"/>
                <ion-label>
                    <ion-label v-if="showNumber">
                        {{ item.number }}
                        <ion-note v-show="item.description.length > 0"> - {{ item.description }}</ion-note>
                    </ion-label>
                    <ion-label v-else>
                        <ion-note v-show="item.description.length > 0">{{ item.description }}</ion-note>
                    </ion-label>
                </ion-label>
            </ion-item>
        </ion-list>
        <ion-button
            color="primary"
            expand="block"
            fill="outline"
            class="ion-padding-top"
            v-show="collectedItems < items.length"
            @click="updateAllItems(true)"
        >
            Marcar todos
        </ion-button>
        <ion-button
            color="danger"
            expand="block"
            fill="outline"
            :class="collectedItems < items.length ? '' : 'ion-padding-top'"
            v-show="collectedItems > 0"
            @click="updateAllItems(false)"
        >
            Desmarcar todos
        </ion-button>
    </div>
</template>

<style scoped>
.item-image {
    width: 100px;
    height: 100px;
    margin-right: 10px;
}
</style>
