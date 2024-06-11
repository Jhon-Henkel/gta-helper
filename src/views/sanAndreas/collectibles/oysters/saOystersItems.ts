import {ICollectibleViewItem} from "@/views/sanAndreas/collectibles/iCollectibleViewItem"
import {saOystersPartEnum} from "@/services/collectibles/sanAndreas/oysters/saOystersPartEnum"

export const saOystersItems: Array<ICollectibleViewItem> = [
    {
        accordion: 'first',
        imageFileName: 'sa_oysters_1.png',
        part: saOystersPartEnum.partOne,
        title: 'Parte 1',
    },
    {
        accordion: 'second',
        imageFileName: 'sa_oysters_2.png',
        part: saOystersPartEnum.partTwo,
        title: 'Parte 2',
    },
    {
        accordion: 'third',
        imageFileName: 'sa_oysters_3.png',
        part: saOystersPartEnum.partThree,
        title: 'Parte 3',
    },
    {
        accordion: 'fourth',
        imageFileName: 'sa_oysters_4.png',
        part: saOystersPartEnum.partFour,
        title: 'Parte 4',
    }
]
