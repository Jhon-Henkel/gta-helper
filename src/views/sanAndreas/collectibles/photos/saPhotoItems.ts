import {saPhotoPartEnum} from "@/services/collectibles/sanAndreas/photos/saPhotoPartEnum"
import {ICollectibleViewItem} from "@/views/sanAndreas/collectibles/iCollectibleViewItem"

export const saPhotosItems: Array<ICollectibleViewItem> = [
    {
        accordion: 'first',
        imageFileName: 'sa_photos_1.png',
        part: saPhotoPartEnum.partOne,
        title: 'Parte 1',
    },
    {
        accordion: 'second',
        imageFileName: 'sa_photos_2.png',
        part: saPhotoPartEnum.partTwo,
        title: 'Parte 2',
    },
    {
        accordion: 'third',
        imageFileName: 'sa_photos_3.png',
        part: saPhotoPartEnum.partThree,
        title: 'Parte 3',
    },
    {
        accordion: 'fourth',
        imageFileName: 'sa_photos_4.png',
        part: saPhotoPartEnum.partFour,
        title: 'Parte 4',
    },
    {
        accordion: 'fifth',
        imageFileName: 'sa_photos_5.png',
        part: saPhotoPartEnum.partFive,
        title: 'Parte 5',
    }
]
