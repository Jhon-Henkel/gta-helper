import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {saHorseShoesPartEnum} from "@/dataObjects/collectibles/sanAndreas/horseShoes/saHorseShoesPartEnum"
import {saHorseShoes} from "@/dataObjects/collectibles/sanAndreas/horseShoes/saHorseShoes"

interface iSaHorseShoesService {
    getHorseShoes: (part: string) => Array<ICollectibleItem>
    updateHorseShoes: (part: string, items: Array<ICollectibleItem>) => void
    getSumOfCollectedItems: () => number
}

export const saHorseShoesService: iSaHorseShoesService = {
    getHorseShoes: function(part: string): Array<ICollectibleItem> {
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
            this.updateHorseShoes(part, items)
        }
        return items
    },
    updateHorseShoes: function(part: string, items: Array<ICollectibleItem>): void {
        utilLocalStorage.setStorageItem(part, items, null)
    },
    getSumOfCollectedItems: function(): number {
        const partOne: Array<ICollectibleItem> = this.getHorseShoes(saHorseShoesPartEnum.partOne)
        let allParts: Array<ICollectibleItem> = partOne.concat(
            this.getHorseShoes(saHorseShoesPartEnum.partTwo),
            this.getHorseShoes(saHorseShoesPartEnum.partThree),
            this.getHorseShoes(saHorseShoesPartEnum.partFour),
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
