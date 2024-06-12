import {ICollectibleItem} from "@/services/collectibles/iCollectibleItem"

export interface ICollectibleService {
    getItemsPart(item: string): Array<ICollectibleItem>
    updateItemsPart(item: string, items: Array<ICollectibleItem>): void
    getSumOfCollectedItems(item: string): number
}
