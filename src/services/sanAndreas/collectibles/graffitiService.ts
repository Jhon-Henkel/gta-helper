import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {graffiti} from "@/dataObjects/collectibles/sanAndreas/graffiti/graffiti"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {graffitiPartEnum} from "@/dataObjects/collectibles/sanAndreas/graffiti/graffitiPartEnum"

interface iGraffitiService {
    getGraffiti: (part: string) => Array<ICollectibleItem>
    updateGraffiti: (part: string, items: Array<ICollectibleItem>) => void
    getSumOfCollectedItems: () => number
}

export const graffitiService: iGraffitiService = {
    getGraffiti: function(part: string): Array<ICollectibleItem> {
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
            this.updateGraffiti(part, items)
        }
        return items
    },
    updateGraffiti: function(part: string, items: Array<ICollectibleItem>): void {
        utilLocalStorage.setStorageItem(part, items, null)
    },
    getSumOfCollectedItems: function(): number {
        const partOne: Array<ICollectibleItem> = this.getGraffiti(graffitiPartEnum.partOne)
        let allParts: Array<ICollectibleItem> = partOne.concat(
            this.getGraffiti(graffitiPartEnum.partTwo),
            this.getGraffiti(graffitiPartEnum.partThree),
            this.getGraffiti(graffitiPartEnum.partFour),
            this.getGraffiti(graffitiPartEnum.partFive),
            this.getGraffiti(graffitiPartEnum.partSix)
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
