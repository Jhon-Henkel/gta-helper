<script setup lang="ts">
import {saHorseShoesItems} from "@/views/sanAndreas/collectibles/horseShoes/saHorseShoesItems"
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
import {saCollectibleEnum} from "@/services/collectibles/saCollectibleEnum"
import {collectibleService} from "@/services/collectibles/collectibleService"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Ferraduras"
        :items="saHorseShoesItems"
        :service="collectibleService"
        :base-directory="directories.sanAndreas.collectibles.horseShoes"
        :total-items="50"
        :map-image-file-name="`${directories.sanAndreas.collectibles.horseShoes}sa_horse_shoes_map.jpg`"
        :show-items-count="false"
        :item-enum="saCollectibleEnum.saHorseShoes"
    />
</template>
