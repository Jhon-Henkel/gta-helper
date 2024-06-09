import {IPropertiesItem} from "@/dataObjects/properties/iPropertiesItem"

export interface IPropertiesViewItem {
    accordion: string;
    title: string;
    items: Array<IPropertiesItem>;
}
