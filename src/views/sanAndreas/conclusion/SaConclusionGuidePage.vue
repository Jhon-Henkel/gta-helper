<script setup lang="ts">
import GtaHelperCard from "@/components/card/GtaHelperCard.vue"
import {IonButton, IonCheckbox, IonLabel} from "@ionic/vue"
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {onMounted, ref} from "vue"
import {checklistConclusionService} from "@/services/checklist/checklistConclusionService"
import {checklistEnum} from "@/services/checklist/checklistEnum"
import {IonAccordion, IonAccordionGroup, IonList, IonItem} from "@ionic/vue"

const onlyUnchecked = ref(true)
const itemsComplete = ref(0)
const totalItemsToComplete = 39
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
            <ion-accordion-group>
                <ion-accordion value="first">
                    <ion-item slot="header" color="light">
                        <ion-label>Desnecessário para o 100%</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <ion-item>Missões de roubar casas</ion-item>
                        <ion-item>Competições de Low rider</ion-item>
                        <ion-item>Jogar sinuca</ion-item>
                        <ion-item>Desafios de Basquete</ion-item>
                        <ion-item>Namoradas</ion-item>
                        <ion-item>Mini game de dança</ion-item>
                        <ion-item>Triatlos</ion-item>
                        <ion-item>Comprar todas as roupas</ion-item>
                        <ion-item>Guerras de Gangue</ion-item>
                        <ion-item>Saltos Únicos</ion-item>
                        <ion-item>Arcade games</ion-item>
                        <ion-item>Status maximizados</ion-item>
                    </div>
                </ion-accordion>
                <ion-accordion value="second">
                    <ion-item slot="header" color="light">
                        <ion-label>Recompensas 100%</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">
                        <ion-item>Todos os veículos que você dirige possuem 200% de vida</ion-item>
                        <ion-item>Hydra spawna em cima da casa do Sweet</ion-item>
                        <ion-item>Rhino spawna embaixo da ponte da Grove Street</ion-item>
                        <ion-item>Ganha $1.000.000</ion-item>
                    </div>
                </ion-accordion>
            </ion-accordion-group>
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
