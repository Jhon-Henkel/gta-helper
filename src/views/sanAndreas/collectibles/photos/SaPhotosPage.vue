<script setup lang="ts">
import {saPhotosItems} from "@/views/sanAndreas/collectibles/photos/saPhotoItems"
import {saPhotosService} from "@/services/collectibles/sanAndreas/saPhotosService"
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Fotos"
        :items="saPhotosItems"
        :service="saPhotosService"
        :base-directory="directories.sanAndreas.collectibles.photos"
        :total-items="50"
    />
</template>
