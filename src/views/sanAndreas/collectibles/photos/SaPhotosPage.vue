<script setup lang="ts">
import {saPhotosItems} from "@/views/sanAndreas/collectibles/photos/saPhotoItems"
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
import {saCollectibleEnum} from "@/services/collectibles/saCollectibleEnum"
import {collectibleService} from "@/services/collectibles/collectibleService"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Fotos"
        :items="saPhotosItems"
        :service="collectibleService"
        :base-directory="directories.sanAndreas.collectibles.photos"
        :total-items="50"
        :map-image-file-name="`${directories.sanAndreas.collectibles.photos}sa_photos_map.jpg`"
        :show-items-count="false"
        :item-enum="saCollectibleEnum.saPhotos"
    />
</template>
