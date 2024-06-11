<script setup lang="ts">
import {directories} from "@/dataObjects/directories"
import GtaHelperCollectiblePage from "@/components/collectibles/GtaHelperCollectiblePage.vue"
import {saVehiclesItems} from "@/services/collectibles/vehicles/sanAndreas/saVehiclesItems"
import {saVehiclesService} from "@/services/collectibles/vehicles/sanAndreas/saVehiclesService"
</script>

<template>
    <gta-helper-collectible-page
        header-title="San Andreas - Importações"
        :items="saVehiclesItems"
        :service="saVehiclesService"
        :base-directory="directories.sanAndreas.collectibles.vehicles"
        :total-items="30"
        :show-number="false"
    />
</template>
