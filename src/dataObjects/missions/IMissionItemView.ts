import {IMissionItem} from "@/dataObjects/missions/iMissionItem"

export interface IMissionItemView {
    title: string
    missions: Array<IMissionItem>
    accordion: string
}
