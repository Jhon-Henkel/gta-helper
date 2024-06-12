<script setup lang="ts">
import {saOystersItems} from "@/views/sanAndreas/collectibles/oysters/saOystersItems"
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
import {saCollectibleEnum} from "@/services/collectibles/saCollectibleEnum"
import {collectibleService} from "@/services/collectibles/collectibleService"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Ostras"
        :items="saOystersItems"
        :service="collectibleService"
        :base-directory="directories.sanAndreas.collectibles.oysters"
        :total-items="50"
        :map-image-file-name="`${directories.sanAndreas.collectibles.oysters}/sa_oysters_map.jpg`"
        :show-items-count="false"
        :item-enum="saCollectibleEnum.saOysters"
    />
</template>
