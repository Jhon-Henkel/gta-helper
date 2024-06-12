import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {directories} from "@/dataObjects/directories"

export const saFiremanMission: Array<IMissionItem> = [
    {
        title: "Bombeiro",
        description: "Você pode encontrar um Firetruck em qualquer departamento de Bombeiros ou se você colocar " +
            "fogo em lugares, eles também virão. Para finalizar todas as missões de bombeiro, é necessário chegar " +
            "ao nível 12 do serviço.",
        rewards: "Você se torna a prova de fogo e ganha $ a cada nível concluído.",
        icon: `${directories.sanAndreas.missions.vehicles}sa_fireman_car.jpg`,
    }
]
