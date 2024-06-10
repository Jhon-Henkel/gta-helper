import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {saHorseShoesPartEnum} from "@/dataObjects/collectibles/sanAndreas/horseShoes/saHorseShoesPartEnum"
import {saHorseShoes} from "@/dataObjects/collectibles/sanAndreas/horseShoes/saHorseShoes"
import {ICollectibleService} from "@/services/collectibles/ICollectibleService"

export const saHorseShoesService: ICollectibleService = {
    getItemsPart: function(part: string): Array<ICollectibleItem> {
        let items: Array<ICollectibleItem>|null = utilLocalStorage.getStorageItem(part)
        if (! items) {
            if (part === saHorseShoesPartEnum.partOne) {
                items = saHorseShoes.saHorseShoesPartOne
            } else if (part === saHorseShoesPartEnum.partTwo) {
                items = saHorseShoes.saHorseShoesPartTwo
            } else if (part === saHorseShoesPartEnum.partThree) {
                items = saHorseShoes.saHorseShoesPartThree
            } else if (part === saHorseShoesPartEnum.partFour) {
                items = saHorseShoes.saHorseShoesPartFour
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
        const partOne: Array<ICollectibleItem> = this.getItemsPart(saHorseShoesPartEnum.partOne)
        let allParts: Array<ICollectibleItem> = partOne.concat(
            this.getItemsPart(saHorseShoesPartEnum.partTwo),
            this.getItemsPart(saHorseShoesPartEnum.partThree),
            this.getItemsPart(saHorseShoesPartEnum.partFour),
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
