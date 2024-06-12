<script setup lang="ts">
import {saGraffitiItems} from "@/views/sanAndreas/collectibles/graffiti/saGraffitiItems"
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
import {collectibleService} from "@/services/collectibles/collectibleService"
import {saCollectibleEnum} from "@/services/collectibles/saCollectibleEnum"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Grafites"
        :items="saGraffitiItems"
        :service="collectibleService"
        :base-directory="directories.sanAndreas.collectibles.graffiti"
        :total-items="100"
        :map-image-file-name="`${directories.sanAndreas.collectibles.graffiti}/sa_graffiti_map.jpg`"
        :show-items-count="false"
        :item-enum="saCollectibleEnum.saGraffiti"
    />
</template>
