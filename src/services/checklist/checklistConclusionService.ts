import {IConclusionItem} from "@/views/sanAndreas/conclusion/IConclusionItem"
import {utilLocalStorage} from "@/services/util/utilLocalStorage"
import {checklistEnum} from "@/services/checklist/checklistEnum"
import {saConclusionItems} from "@/views/sanAndreas/conclusion/saConclusionItems"

export const checklistConclusionService = {
    getItems: function(item: string): Array<IConclusionItem> {
        let items: Array<IConclusionItem>|null = utilLocalStorage.getStorageItem(item)
        if (! items) {
            if (item === checklistEnum.saConclusionItem) {
                items = saConclusionItems
            } else {
                items = []
            }
            this.updateItems(item, items)
        }
        return items
    },
    updateItems: function(item: string, items: Array<IConclusionItem>): void {
        utilLocalStorage.setStorageItem(item, items, null)
    },
    getSumOfItemsDone: function(item: string): number {
        const items: Array<IConclusionItem> = this.getItems(item)
        let total: number = 0
        items.forEach((item: IConclusionItem) => {
            if (item.done) {
                total++
            }
        })
        return total
    }
}
