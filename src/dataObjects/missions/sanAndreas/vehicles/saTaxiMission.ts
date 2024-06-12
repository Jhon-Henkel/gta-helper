import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {directories} from "@/dataObjects/directories"

export const saTaxiMission: Array<IMissionItem> = [
    {
        title: "Taxista",
        description: "Você pode encontrar os táxis nas cidades. Para finalizar todas as missões de taxista, é " +
            "necessário completar 50 passageiros entregues. Não é necessário ser em sequência.",
        rewards: "Os táxis irão pular quando utilizar a buzina e terão nitro. e ganha $ a cada corrida.",
        icon: `${directories.sanAndreas.missions.vehicles}sa_taxi_car.jpg`,
    }
]
