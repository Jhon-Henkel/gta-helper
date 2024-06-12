import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {directories} from "@/dataObjects/directories"

export const saPolicemanMission: Array<IMissionItem> = [
    {
        title: "Policial",
        description: "Você pode utilizar qualquer veículo policial para fazer as missões. Para finalizar todas as " +
            "missões de vigilante, é necessário chegar ao nível 12 do serviço.",
        rewards: "Aumentará o colete para 150 e ganha $ a cada nível concluído.",
        icon: `${directories.sanAndreas.missions.vehicles}sa_police_car.jpg`,
    }
]
