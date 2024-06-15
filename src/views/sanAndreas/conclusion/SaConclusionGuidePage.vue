<script setup lang="ts">
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {IonButton, IonCheckbox} from "@ionic/vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {onMounted, ref} from "vue"
import {checklistConclusionService} from "@/services/checklist/checklistConclusionService"
import {checklistEnum} from "@/services/checklist/checklistEnum"

const onlyUnchecked = ref(false)
const itemsComplete = ref(0)
const totalItemsToComplete = 34
const percentage = ref(0)
const items = ref(checklistConclusionService.getItems(checklistEnum.saConclusionItem))

function update(item: any) {
    items.value.forEach((it) => {
        if (it.title === item.title) {
            it.done = !it.done
        }
    })
    checklistConclusionService.updateItems(checklistEnum.saConclusionItem, items.value)
    updateCounter()
}

function updateCounter() {
    itemsComplete.value = checklistConclusionService.getSumOfItemsDone(checklistEnum.saConclusionItem)
    percentage.value = parseInt(String((itemsComplete.value / totalItemsToComplete) * 100))
}

onMounted(() => {
    updateCounter()
})
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="Checklist para o 100%"/>
        </template>
        <template #content>
            <gta-helper-card>
                <template #title>
                    Completado
                </template>
                <template #subtitle>
                    {{ itemsComplete }}/{{ totalItemsToComplete }} ({{ percentage }}%)
                </template>
            </gta-helper-card>
            <div class="ion-text-end">
                <ion-button fill="clear" @click="onlyUnchecked = !onlyUnchecked">
                    {{ onlyUnchecked ? 'Todos' : 'Somente Faltantes' }}
                </ion-button>
            </div>
            <ion-list
                v-for="(item, index) in items"
                :key="index"
                v-show="! onlyUnchecked || (onlyUnchecked && ! item.done)"
            >
                <ion-item>
                    <ion-checkbox slot="start" :checked="item.done" @ionChange="update(item)"/>
                    {{ item.title }}
                </ion-item>
            </ion-list>
        </template>
    </gta-helper-page>
</template>
