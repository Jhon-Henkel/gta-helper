<script setup lang="ts">
import {saGraffitiItems} from "@/views/sanAndreas/collectibles/graffiti/saGraffitiItems"
import {saGraffitiService} from "@/services/collectibles/sanAndreas/graffiti/saGraffitiService"
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Grafites"
        :items="saGraffitiItems"
        :service="saGraffitiService"
        :base-directory="directories.sanAndreas.collectibles.graffiti"
        :total-items="100"
    />
</template>
