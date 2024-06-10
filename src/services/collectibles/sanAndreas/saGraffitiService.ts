import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {graffiti} from "@/dataObjects/collectibles/sanAndreas/graffiti/graffiti"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {graffitiPartEnum} from "@/dataObjects/collectibles/sanAndreas/graffiti/graffitiPartEnum"
import {ICollectibleService} from "@/services/collectibles/ICollectibleService"

export const saGraffitiService: ICollectibleService = {
    getItemsPart: function(part: string): Array<ICollectibleItem> {
        let items: Array<ICollectibleItem>|null = utilLocalStorage.getStorageItem(part)
        if (! items) {
            if (part === graffitiPartEnum.partOne) {
                items = graffiti.saGrafitiPartOne
            } else if (part === graffitiPartEnum.partTwo) {
                items = graffiti.saGrafitiPartTwo
            } else if (part === graffitiPartEnum.partThree) {
                items = graffiti.saGrafitiPartThree
            } else if (part === graffitiPartEnum.partFour) {
                items = graffiti.saGrafitiPartFour
            } else if (part === graffitiPartEnum.partFive) {
                items = graffiti.saGrafitiPartFive
            } else if (part === graffitiPartEnum.partSix) {
                items = graffiti.saGrafitiPartSix
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
        const partOne: Array<ICollectibleItem> = this.getItemsPart(graffitiPartEnum.partOne)
        let allParts: Array<ICollectibleItem> = partOne.concat(
            this.getItemsPart(graffitiPartEnum.partTwo),
            this.getItemsPart(graffitiPartEnum.partThree),
            this.getItemsPart(graffitiPartEnum.partFour),
            this.getItemsPart(graffitiPartEnum.partFive),
            this.getItemsPart(graffitiPartEnum.partSix)
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
