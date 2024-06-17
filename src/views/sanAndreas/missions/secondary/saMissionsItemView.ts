import {IMissionItemView} from "@/dataObjects/missions/IMissionItemView"
import {saCaligulasHeitMissions} from "@/dataObjects/missions/sanAndreas/secondary/saCaligulasHeitMissions"
import {saZeroMissions} from "@/dataObjects/missions/sanAndreas/secondary/saZeroMissions"

export const saSecondaryMissionsItemView: Array<IMissionItemView> = [
    {
        title: "Caligulas Heit's",
        missions: saCaligulasHeitMissions,
        accordion: "first"
    },
    {
        title: "Zero RC",
        missions: saZeroMissions,
        accordion: "second"
    }
]
