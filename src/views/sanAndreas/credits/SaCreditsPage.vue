<script setup lang="ts">
import GtaHelperPage from "@/components/page/GtaHelperPage.vue"
import GtaHelperHeader from "@/components/header/GtaHelperHeader.vue"
import {IonList, IonNote, IonLabel, IonItem} from "@ionic/vue"
</script>

<template>
    <gta-helper-page>
        <template #header>
            <gta-helper-header title="GTA SA - Créditos"/>
        </template>
        <template #content>
            <ion-list>
                <ion-item>
                    <ion-label>Desenvolvido por:</ion-label>
                    <ion-note slot="end">Jhonatan Henkel</ion-note>
                </ion-item>
                <ion-item>
                    <ion-label>
                        Links no qual peguei conteúdo:
                        <p>
                            <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1974532552">steamcommunity</a>
                        </p>
                        <p>
                            <a href="https://gta.fandom.com/pt/wiki/Miss%C3%B5es_do_GTA_San_Andreas">gta.fandom</a>
                        </p>
                        <p>
                            <a href="https://www.gtaall.com.br/gta-san-andreas/missions-gta-san-andreas.html">gtaall</a>
                        </p>
                        <p>
                            <a href="https://mapgenie.io/grand-theft-auto-san-andreas/checklist">mapgenie</a>
                        </p>
                    </ion-label>
                </ion-item>
            </ion-list>
        </template>
    </gta-helper-page>
</template>
