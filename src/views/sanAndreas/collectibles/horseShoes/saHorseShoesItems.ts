import {ICollectibleViewItem} from "@/views/sanAndreas/collectibles/iCollectibleViewItem"
import {saHorseShoesPartEnum} from "@/services/collectibles/sanAndreas/horseShoes/saHorseShoesPartEnum"

export const saHorseShoesItems: Array<ICollectibleViewItem> = [
    {
        accordion: 'first',
        imageFileName: 'sa_horse_shoes_1.png',
        part: saHorseShoesPartEnum.partOne,
        title: 'Parte 1',
    },
    {
        accordion: 'second',
        imageFileName: 'sa_horse_shoes_2.png',
        part: saHorseShoesPartEnum.partTwo,
        title: 'Parte 2',
    },
    {
        accordion: 'third',
        imageFileName: 'sa_horse_shoes_3.png',
        part: saHorseShoesPartEnum.partThree,
        title: 'Parte 3',
    },
    {
        accordion: 'fourth',
        imageFileName: 'sa_horse_shoes_4.png',
        part: saHorseShoesPartEnum.partFour,
        title: 'Parte 4',
    }
]
