import {ICollectibleItem} from "@/dataObjects/collectibles/iCollectibleItem"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {saPhotoPartEnum} from "@/dataObjects/collectibles/sanAndreas/photo/saPhotoPartEnum"
import {saPhoto} from "@/dataObjects/collectibles/sanAndreas/photo/saPhoto"

interface iSaPhotosService {
    getPhotos: (part: string) => Array<ICollectibleItem>
    updatePhotos: (part: string, items: Array<ICollectibleItem>) => void
    getSumOfCollectedItems: () => number
}

export const saPhotosService: iSaPhotosService = {
    getPhotos: function(part: string): Array<ICollectibleItem> {
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
            this.updatePhotos(part, items)
        }
        return items
    },
    updatePhotos: function(part: string, items: Array<ICollectibleItem>): void {
        utilLocalStorage.setStorageItem(part, items, null)
    },
    getSumOfCollectedItems: function(): number {
        const partOne: Array<ICollectibleItem> = this.getPhotos(saPhotoPartEnum.partOne)
        let allParts: Array<ICollectibleItem> = partOne.concat(
            this.getPhotos(saPhotoPartEnum.partTwo),
            this.getPhotos(saPhotoPartEnum.partThree),
            this.getPhotos(saPhotoPartEnum.partFour),
            this.getPhotos(saPhotoPartEnum.partFive)
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
