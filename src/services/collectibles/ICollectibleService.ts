import {ICollectibleItem} from "@/services/collectibles/iCollectibleItem"

export interface ICollectibleService {
    getItemsPart(part: string): Array<ICollectibleItem>
    updateItemsPart(part: string, items: Array<ICollectibleItem>): void
    getSumOfCollectedItems(): number
}
