import {iMenuItem} from "@/menu/iMenuItem"
import {directories} from "@/dataObjects/directories"

const iconsDir: string = directories.sanAndreas.icons

export const saMainMenuItems: Array<iMenuItem> = [
    {
        routeName: 'sa-conclusion-guide',
        icon: `${iconsDir}100.png`,
        label: 'Checklist para o 100%'
    },
    {
        routeName: 'sa-principal-missions',
        icon: `${iconsDir}cj.jpg`,
        label: 'Guia Missões Principais'
    },
    {
        routeName: 'sa-secondary-missions',
        icon: `${iconsDir}caligulasHeit.jpg`,
        label: 'Guia Missões Secundárias'
    },
    {
        routeName: 'sa-vehicle-missions',
        icon: `${iconsDir}car_white.png`,
        label: 'Missões de Veículos'
    },
    {
        routeName: 'sa-all-properties',
        icon: `${iconsDir}house.png`,
        label: 'Propriedades'
    },
    {
        routeName: 'sa-oysters',
        icon: `${iconsDir}oyster.png`,
        label: 'Ostras'
    },
    {
        routeName: 'sa-graffiti',
        icon: `${iconsDir}spray.png`,
        label: 'Grafites'
    },
    {
        routeName: 'sa-photos',
        icon: `${iconsDir}cam.png`,
        label: 'Fotos'
    },
    {
        routeName: 'sa-horse-shoes',
        icon: `${iconsDir}horse_shoes.png`,
        label: 'Ferradura'
    },
    {
        routeName: 'sa-import-vehicles',
        icon: `${iconsDir}car_red.png`,
        label: 'Importação de Veículos'
    },
    {
        routeName: 'sa-deliveryman',
        icon: `${iconsDir}package.png`,
        label: 'Missões de Entregador'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Desafios'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Créditos'
    },
]
