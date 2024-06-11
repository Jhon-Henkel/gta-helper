import {saVehiclesListEnum} from "@/services/collectibles/vehicles/sanAndreas/saVehiclesListEnum"
import {ICollectibleViewItem} from "@/views/sanAndreas/collectibles/iCollectibleViewItem"

export const saVehiclesItems: Array<ICollectibleViewItem> = [
    {
        accordion: 'first',
        part: saVehiclesListEnum.listOne,
        imageFileName: 'sa_vehicles_map.jpg',
        title: 'Lista 1',
    },
    {
        accordion: 'second',
        part: saVehiclesListEnum.listTwo,
        imageFileName: 'sa_vehicles_map.jpg',
        title: 'Lista 2',
    },
    {
        accordion: 'third',
        part: saVehiclesListEnum.listThree,
        imageFileName: 'sa_vehicles_map.jpg',
        title: 'Lista 3',
    }
]
