<script setup lang="ts">
import {saOystersService} from "@/services/collectibles/sanAndreas/saOystersService"
import {saOystersItems} from "@/views/sanAndreas/collectibles/oysters/saOystersItems"
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Ostras"
        :items="saOystersItems"
        :service="saOystersService"
        :base-directory="directories.sanAndreas.collectibles.oysters"
        :total-items="50"
    />
</template>
