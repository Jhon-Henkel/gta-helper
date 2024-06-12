import {iMenuItem} from "@/menu/iMenuItem"
import {directories} from "@/dataObjects/directories"

const iconsDir: string = directories.sanAndreas.icons

export const saMainMenuItems: Array<iMenuItem> = [
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Introdução'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Guia para o 100%'
    },
    {
        routeName: 'sa-principal-missions',
        icon: `${iconsDir}cj.jpg`,
        label: 'Guia Missões Principais'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Serviços Secundários'
    },
    {
        routeName: 'sa-vehicle-missions',
        icon: `${iconsDir}car_white.png`,
        label: 'Missões de Veículos'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Missões de Entregador'
    },
    {
        routeName: 'sa-all-properties',
        icon: `${iconsDir}house.png`,
        label: 'Todas as Propriedades'
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
        routeName: 'in-development',
        icon: 'map',
        label: 'Escolas'
    },
    {
        routeName: 'sa-import-vehicles',
        icon: `${iconsDir}car_red.png`,
        label: 'Importação de Veículos'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Corridas'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Desafios'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Corridas de Estádio'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Academias'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Estande de tiro'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Recompensas 100%'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Créditos'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Troféus e Conquistas'
    },
    {
        routeName: 'in-development',
        icon: 'map',
        label: 'Armas'
    },
]
