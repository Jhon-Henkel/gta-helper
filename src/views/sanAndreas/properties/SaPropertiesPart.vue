<script setup lang="ts">
import {IPropertiesItem} from "@/dataObjects/properties/iPropertiesItem"
import {PropType} from "vue"
import {IonItem, IonLabel, IonList} from "@ionic/vue"
import {utilMoney} from "@/services/util/utilMoney"

defineProps(
    {
        items: {
            type: Array as PropType<IPropertiesItem[]>,
            required: true
        }
    }
)
</script>

<template>
    <ion-item slot="header" color="light">
        <ion-label slot="start">
            <slot/>
        </ion-label>
        <ion-label>{{ items.length }}</ion-label>
    </ion-item>
    <div class="ion-padding" slot="content">
        <ion-list>
            <ion-item v-for="(item, index) in items" :key="index">
                <ion-label>
                    {{ item.name }}
                    <p>{{ utilMoney.formatValueToUs(item.value) }}</p>
                </ion-label>
            </ion-item>
        </ion-list>
    </div>
</template>
