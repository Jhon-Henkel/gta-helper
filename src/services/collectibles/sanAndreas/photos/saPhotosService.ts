import {ICollectibleItem} from "@/services/collectibles/iCollectibleItem"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {saPhotoPartEnum} from "@/services/collectibles/sanAndreas/photos/saPhotoPartEnum"
import {saPhoto} from "@/services/collectibles/sanAndreas/photos/saPhoto"
import {ICollectibleService} from "@/services/collectibles/ICollectibleService"

export const saPhotosService: ICollectibleService = {
    getItemsPart: function(part: string): Array<ICollectibleItem> {
        let items: Array<ICollectibleItem>|null = utilLocalStorage.getStorageItem(part)
        if (! items) {
            if (part === saPhotoPartEnum.partOne) {
                items = saPhoto.saPhotoPartOne
            } else if (part === saPhotoPartEnum.partTwo) {
                items = saPhoto.saPhotoPartTwo
            } else if (part === saPhotoPartEnum.partThree) {
                items = saPhoto.saPhotoPartThree
            } else if (part === saPhotoPartEnum.partFour) {
                items = saPhoto.saPhotoPartFour
            } else if (part === saPhotoPartEnum.partFive) {
                items = saPhoto.saPhotoPartFive
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
        const partOne: Array<ICollectibleItem> = this.getItemsPart(saPhotoPartEnum.partOne)
        let allParts: Array<ICollectibleItem> = partOne.concat(
            this.getItemsPart(saPhotoPartEnum.partTwo),
            this.getItemsPart(saPhotoPartEnum.partThree),
            this.getItemsPart(saPhotoPartEnum.partFour),
            this.getItemsPart(saPhotoPartEnum.partFive)
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
