import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {saOystersPartEnum} from "@/dataObjects/collectibles/sanAndreas/oysters/saOystersPartEnum"
import {saOysters} from "@/dataObjects/collectibles/sanAndreas/oysters/saOysters"

interface iSaOystersService {
    getOysters: (part: string) => Array<ICollectibleItem>
    updateOysters: (part: string, items: Array<ICollectibleItem>) => void
    getSumOfCollectedItems: () => number
}

export const saOystersService: iSaOystersService = {
    getOysters: function(part: string): Array<ICollectibleItem> {
        let items: Array<ICollectibleItem>|null = utilLocalStorage.getStorageItem(part)
        if (! items) {
            if (part === saOystersPartEnum.partOne) {
                items = saOysters.saOystersPartOne
            } else if (part === saOystersPartEnum.partTwo) {
                items = saOysters.saOystersPartTwo
            } else if (part === saOystersPartEnum.partThree) {
                items = saOysters.saOystersPartThree
            } else if (part === saOystersPartEnum.partFour) {
                items = saOysters.saOystersPartFour
            } else {
                items = []
            }
            this.updateOysters(part, items)
        }
        return items
    },
    updateOysters: function(part: string, items: Array<ICollectibleItem>): void {
        utilLocalStorage.setStorageItem(part, items, null)
    },
    getSumOfCollectedItems: function(): number {
        const partOne: Array<ICollectibleItem> = this.getOysters(saOystersPartEnum.partOne)
        let allParts: Array<ICollectibleItem> = partOne.concat(
            this.getOysters(saOystersPartEnum.partTwo),
            this.getOysters(saOystersPartEnum.partThree),
            this.getOysters(saOystersPartEnum.partFour),
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
