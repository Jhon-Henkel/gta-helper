import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {directories} from "@/dataObjects/directories"

export const saPimpingMission: Array<IMissionItem> = [
    {
        title: "Lenocínio",
        description: "Você pode encontrar o \"cafetão móvel\" do lado de fora do prédio do Jizzy. Para finalizar " +
            "todas as missões de Lenocínio, é necessário chegar ao nível 10 do serviço.",
        rewards: "♥♥♥♥ irão pagar para fazer sexo com você",
        icon: `${directories.sanAndreas.missions.vehicles}sa_pimping_car.jpg`,
    }
]
