import {graffitiPartEnum} from "@/dataObjects/collectibles/sanAndreas/graffiti/graffitiPartEnum"
import {ICollectibleViewItem} from "@/views/sanAndreas/collectibles/iCollectibleViewItem"

export const saGraffitiItems: Array<ICollectibleViewItem> = [
    {
        accordion: 'first',
        imageFileName: 'sa_graffiti_1.png',
        part: graffitiPartEnum.partOne,
        title: 'Parte 1',
    },
    {
        accordion: 'second',
        imageFileName: 'sa_graffiti_2.png',
        part: graffitiPartEnum.partTwo,
        title: 'Parte 2',
    },
    {
        accordion: 'third',
        imageFileName: 'sa_graffiti_3.png',
        part: graffitiPartEnum.partThree,
        title: 'Parte 3',
    },
    {
        accordion: 'fourth',
        imageFileName: 'sa_graffiti_4.png',
        part: graffitiPartEnum.partFour,
        title: 'Parte 4',
    },
    {
        accordion: 'fifth',
        imageFileName: 'sa_graffiti_5.png',
        part: graffitiPartEnum.partFive,
        title: 'Parte 5',
    },
    {
        accordion: 'sixth',
        imageFileName: 'sa_graffiti_6.png',
        part: graffitiPartEnum.partSix,
        title: 'Parte 6',
    },
]
