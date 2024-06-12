import {ICollectibleItem} from "@/services/collectibles/iCollectibleItem"
import {saGraffiti} from "@/services/collectibles/sanAndreas/graffiti/saGraffiti"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {ICollectibleService} from "@/services/collectibles/ICollectibleService"
import {saCollectibleEnum} from "@/services/collectibles/saCollectibleEnum"
import {saPhoto} from "@/services/collectibles/sanAndreas/photos/saPhoto"
import {saOysters} from "@/services/collectibles/sanAndreas/oysters/saOysters"
import {saHorseShoes} from "@/services/collectibles/sanAndreas/horseShoes/saHorseShoes"

export const collectibleService: ICollectibleService = {
    getItemsPart: function(item: string): Array<ICollectibleItem> {
        let items: Array<ICollectibleItem>|null = utilLocalStorage.getStorageItem(item)
        if (! items) {
            if (item === saCollectibleEnum.saGraffiti) {
                items = saGraffiti.saGrafitiItems
            } else if (item === saCollectibleEnum.saPhotos) {
                items = saPhoto.saPhotoItems
            } else if (item === saCollectibleEnum.saOysters) {
                items = saOysters.saOystersItems
            } else if (item === saCollectibleEnum.saHorseShoes) {
                items = saHorseShoes.saHorseShoesItems
            } else {
                items = []
            }
            this.updateItemsPart(item, items)
        }
        return items
    },
    updateItemsPart: function(item: string, items: Array<ICollectibleItem>): void {
        utilLocalStorage.setStorageItem(item, items, null)
    },
    getSumOfCollectedItems: function(item: string): number {
        const items: Array<ICollectibleItem> = this.getItemsPart(item)
        let total: number = 0
        items.forEach((item: ICollectibleItem) => {
            if (item.collected) {
                total++
            }
        })
        return total
    }
}
