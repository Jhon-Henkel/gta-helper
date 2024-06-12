import {IMissionItemView} from "@/dataObjects/missions/IMissionItemView"
import {saFiremanMission} from "@/dataObjects/missions/sanAndreas/vehicles/saFiremanMission"
import {saParamedicMission} from "@/dataObjects/missions/sanAndreas/vehicles/saParamedicMission"
import {saPolicemanMission} from "@/dataObjects/missions/sanAndreas/vehicles/saPolicemanMission"
import {saTaxiMission} from "@/dataObjects/missions/sanAndreas/vehicles/saTaxiMission"
import {saPimpingMission} from "@/dataObjects/missions/sanAndreas/vehicles/saPimpingMission"
import {saTrainDriverMission} from "@/dataObjects/missions/sanAndreas/vehicles/saTrainDriverMission"

export const saVehicleMissionsItems: Array<IMissionItemView> = [
    {
        title: "Bombeiro",
        missions: saFiremanMission,
        accordion: "first"
    },
    {
        title: "Paramédico",
        missions: saParamedicMission,
        accordion: "second"
    },
    {
        title: "Policial",
        missions: saPolicemanMission,
        accordion: "third"
    },
    {
        title: "Taxista",
        missions: saTaxiMission,
        accordion: "fourth"
    },
    {
        title: "Lenocínio",
        missions: saPimpingMission,
        accordion: "fifth"
    },
    {
        title: "Maquinista",
        missions: saTrainDriverMission,
        accordion: "sixth"
    }
]
