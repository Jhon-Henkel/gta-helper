<script setup lang="ts">
import {saHorseShoesService} from "@/services/collectibles/sanAndreas/saHorseShoesService"
import {saHorseShoesItems} from "@/views/sanAndreas/collectibles/horseShoes/saHorseShoesItems"
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Ferraduras"
        :items="saHorseShoesItems"
        :service="saHorseShoesService"
        :base-directory="directories.sanAndreas.collectibles.horseShoes"
        :total-items="50"
    />
</template>
