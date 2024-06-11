import {ICollectibleItem} from "@/services/collectibles/iCollectibleItem"
import {directories} from "@/dataObjects/directories"

interface IVehicleList {
    saListOne: Array<ICollectibleItem>
    saListTwo: Array<ICollectibleItem>
    saListThree: Array<ICollectibleItem>
}

export const saVehiclesList: IVehicleList = {
    saListOne: [
        {
            number: 1,
            description: 'Patriot',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_patriot.jpg`
        },
        {
            number: 2,
            description: 'Sanchez',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_sanchez.jpg`
        },
        {
            number: 3,
            description: 'Stretch',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_stretch.jpg`
        },
        {
            number: 4,
            description: 'Feltzer',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_feltzer.jpg`
        },
        {
            number: 5,
            description: 'Remington',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_remington.jpg`
        },
        {
            number: 6,
            description: 'Buffalo',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_buffalo.jpg`
        },
        {
            number: 7,
            description: 'Sentinel',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_sentinel.jpg`
        },
        {
            number: 8,
            description: 'Infernus',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_infernus.jpg`
        },
        {
            number: 9,
            description: 'Camper',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_camper.jpg`
        },
        {
            number: 10,
            description: 'Admiral',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_admiral.jpg`
        }
    ],
    saListTwo: [
        {
            number: 11,
            description: 'Slam van',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_slam_van.jpg`
        },
        {
            number: 12,
            description: 'Balista Compact',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_balista_compact.jpg`
        },
        {
            number: 13,
            description: 'Stafford',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_stafford.jpg`
        },
        {
            number: 14,
            description: 'Sabre',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_sabre.jpg`
        },
        {
            number: 15,
            description: 'FCR-900',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_fcr_900.jpg`
        },
        {
            number: 16,
            description: 'Cheetah',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_cheetah.jpg`
        },
        {
            number: 17,
            description: 'Rancher',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_rancher.jpg`
        },
        {
            number: 18,
            description: 'Stallion',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_stallion.jpg`
        },
        {
            number: 19,
            description: 'Tanker',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_tanker.jpg`
        },
        {
            number: 20,
            description: 'Comet',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_comet.jpg`
        }
    ],
    saListThree: [
        {
            number: 21,
            description: 'Blade',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_blade.jpg`
        },
        {
            number: 22,
            description: 'Freeway',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_freeway.jpg`
        },
        {
            number: 23,
            description: 'Mesa',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_mesa.jpg`
        },
        {
            number: 24,
            description: 'ZR-350',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_zr_350.jpg`
        },
        {
            number: 25,
            description: 'Euros',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_euros.jpg`
        },
        {
            number: 26,
            description: 'Banshee',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_banshee.jpg`
        },
        {
            number: 27,
            description: 'Super GT',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_super_gt.jpg`
        },
        {
            number: 28,
            description: 'Journey',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_journey.jpg`
        },
        {
            number: 29,
            description: 'Huntley',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_huntley.jpg`
        },
        {
            number: 30,
            description: 'BF Injection',
            collected: false,
            imageFileName: `${directories.sanAndreas.collectibles.vehicles}sa_bf_injection.png`
        }
    ]
}
