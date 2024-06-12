import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {iconsDir} from "@/dataObjects/missions/iconsDir"

export const saZeroMissions: Array<IMissionItem> = [
    {
        title: "1 - Ataque Aéreo",
        description: "Compra zero RC store-30 mil dólares. Usando o mini-gun para proteger a antena de aviões " +
            "controlados por rádio. Aguentem três minutos. Abatam todos os aviões.",
        rewards: "$3.000",
        icon: `${iconsDir.sanAndreas}zero.jpg`,
    },
    {
        title: "2 - Linhas de Suprimentos",
        description: "É simples. Atire em todos os correios com a ajuda de um avião controlado por rádio.",
        rewards: "$5.000",
        icon: `${iconsDir.sanAndreas}zero.jpg`,
    },
    {
        title: "3 - Exército Novo",
        description: "Ajude a máquina zero a conduzir todo o caminho com a ajuda de um helicóptero controlado por " +
            "rádio. Largar bombas nos tanques, construir pontes, limpar a estrada dos barris. Temos de o fazer em " +
            "dois minutos.",
        rewards: "$7.000 e a loja Zero RC rende $5.000 por dia",
        icon: `${iconsDir.sanAndreas}zero.jpg`,
    }
]
