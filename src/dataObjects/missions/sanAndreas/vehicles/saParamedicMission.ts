import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {directories} from "@/dataObjects/directories"

export const saParamedicMission: Array<IMissionItem> = [
    {
        title: "Paramédico",
        description: "Você pode encontrar as ambulâncias perto de hospitais ou ao matar uma pessoa, eles também " +
            "virão. Para finalizar todas as missões de paramédico, é necessário chegar ao nível 12 do serviço. Uma " +
            "dica é fazer essas missões assim que chegar em ",
        rewards: "Aumentará sua barra de saúde para 178 e ganha $ a cada nível concluído.",
        icon: `${directories.sanAndreas.missions.vehicles}sa_ambulance.jpg`,
    }
]
