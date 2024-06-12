import {IMissionItemView} from "@/dataObjects/missions/IMissionItemView"
import {saLosSantosMissionsPartOne} from "@/dataObjects/missions/sanAndreas/principal/saLosSantosMissionsPartOne"
import {saBadlandsMissions} from "@/dataObjects/missions/sanAndreas/principal/saBadlandsMissions"
import {saSanFierroMissions} from "@/dataObjects/missions/sanAndreas/principal/saSanFierroMissions"
import {saDesertMissions} from "@/dataObjects/missions/sanAndreas/principal/saDesertMissions"
import {saLasVenturasMissions} from "@/dataObjects/missions/sanAndreas/principal/saLasVenturasMissions"
import {saLosSantosMissionsPartTwo} from "@/dataObjects/missions/sanAndreas/principal/saLosSantosMissionsPartTwo"

export const saMissionsItemView: Array<IMissionItemView> = [
    {
        title: "I - Los Santos Part I",
        missions: saLosSantosMissionsPartOne,
        accordion: "first"
    },
    {
        title: "II - Badlands",
        missions: saBadlandsMissions,
        accordion: "second"
    },
    {
        title: "III - San Fierro",
        missions: saSanFierroMissions,
        accordion: "third"
    },
    {
        title: "IV - Desert",
        missions: saDesertMissions,
        accordion: "fourth"
    },
    {
        title: "V - Las Venturas",
        missions: saLasVenturasMissions,
        accordion: "fifth"
    },
    {
        title: "VI - Los Santos Part II",
        missions: saLosSantosMissionsPartTwo,
        accordion: "sixth"
    }
]
