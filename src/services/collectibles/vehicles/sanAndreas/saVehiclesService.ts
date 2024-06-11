import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {ICollectibleService} from "@/services/collectibles/ICollectibleService"
import {saVehiclesListEnum} from "@/services/collectibles/vehicles/sanAndreas/saVehiclesListEnum"
import {saVehiclesList} from "@/services/collectibles/vehicles/sanAndreas/saVehiclesList"

export const saVehiclesService: ICollectibleService = {
    getItemsPart: function(part: string): Array<ICollectibleItem> {
        let items: Array<ICollectibleItem>|null = utilLocalStorage.getStorageItem(part)
        if (! items) {
            if (part === saVehiclesListEnum.listOne) {
                items = saVehiclesList.saListOne
            } else if (part === saVehiclesListEnum.listTwo) {
                items = saVehiclesList.saListTwo
            } else if (part === saVehiclesListEnum.listThree) {
                items = saVehiclesList.saListThree
            } else {
                items = []
            }
            this.updateItemsPart(part, items)
        }
        return items
    },
    updateItemsPart: function(part: string, items: Array<ICollectibleItem>): void {
        utilLocalStorage.setStorageItem(part, items, null)
    },
    getSumOfCollectedItems: function(): number {
        const partOne: Array<ICollectibleItem> = this.getItemsPart(saVehiclesListEnum.listOne)
        let allParts: Array<ICollectibleItem> = partOne.concat(
            this.getItemsPart(saVehiclesListEnum.listTwo),
            this.getItemsPart(saVehiclesListEnum.listThree),
        )
        let total: number = 0
        allParts.forEach((item: ICollectibleItem) => {
            if (item.collected) {
                total++
            }
        })

        return total
    }
}
