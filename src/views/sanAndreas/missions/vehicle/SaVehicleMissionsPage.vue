<script setup lang="ts">
import GtaHelperMissionPage from "@/components/missions/GtaHelperMissionPage.vue"
import {saVehicleMissionsItems} from "@/views/sanAndreas/missions/vehicle/saVehicleMissionsItems"
</script>

<template>
    <gta-helper-mission-page title="San Andreas - Missões de Veículos" :missions-item-view="saVehicleMissionsItems"/>
</template>
