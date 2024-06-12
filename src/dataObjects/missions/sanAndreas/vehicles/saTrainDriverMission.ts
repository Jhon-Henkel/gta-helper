import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {directories} from "@/dataObjects/directories"

export const saTrainDriverMission: Array<IMissionItem> = [
    {
        title: "Maquinista",
        description: "Para finalizar todas as missões de maquinista, é necessário chegar ao nível 02 do serviço.",
        rewards: "$50,000 após completar os dois níveis",
        icon: `${directories.sanAndreas.missions.vehicles}sa_train.jpg`,
    }
]
