import {IPropertiesViewItem} from "@/views/sanAndreas/properties/iPropertiesViewItem"
import {saProperties} from "@/dataObjects/properties/sanAndreas/saProperties"

export const saPropertiesItems: Array<IPropertiesViewItem> = [
    {
        accordion: 'first',
        title: 'Casas em Los Santos',
        items: saProperties.saLosSantosHouses
    },
    {
        accordion: 'second',
        title: 'Casas na Zona Rural',
        items: saProperties.saRuralZoneHouses
    },
    {
        accordion: 'third',
        title: 'Casas em San Fierro',
        items: saProperties.saSanFierroHouses
    },
    {
        accordion: 'fourth',
        title: 'Pontos Comerciais em San Fierro',
        items: saProperties.saSanFierroBusinesses
    },
    {
        accordion: 'fifth',
        title: 'Casas no Deserto',
        items: saProperties.saDesertHouses
    },
    {
        accordion: 'sixth',
        title: 'Pontos Comerciais no Deserto',
        items: saProperties.saDesertBusinesses
    },
    {
        accordion: 'seventh',
        title: 'Casas em Las Venturas',
        items: saProperties.saLasVenturasHouses
    },
]
