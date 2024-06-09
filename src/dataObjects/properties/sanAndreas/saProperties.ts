import {IPropertiesItem} from "@/dataObjects/properties/iPropertiesItem"

interface iSaProperties {
    saLosSantosHouses: Array<IPropertiesItem>
    saRuralZoneHouses: Array<IPropertiesItem>
    saSanFierroHouses: Array<IPropertiesItem>
    saSanFierroBusinesses: Array<IPropertiesItem>
    saDesertHouses: Array<IPropertiesItem>
    saDesertBusinesses: Array<IPropertiesItem>
    saLasVenturasHouses: Array<IPropertiesItem>
}

export const saProperties: iSaProperties = {
    saLosSantosHouses: [
        {
            name: 'Jefferson',
            value: 10000,
        },
        {
            name: 'Verona Beach',
            value: 10000,
        },
        {
            name: 'Willowfield',
            value: 10000,
        },
        {
            name: 'El Corona',
            value: 10000,
        },
        {
            name: 'Mulholland',
            value: 30000,
        },
        {
            name: 'Santa Maria Beach',
            value: 120000,
        },
    ],
    saRuralZoneHouses: [
        {
            name: 'Blueberry',
            value: 10000,
        },
        {
            name: 'Angel Pine',
            value: 20000,
        },
        {
            name: 'Palomino Creek',
            value: 35000,
        },
        {
            name: 'Dillimore',
            value: 40000,
        },
        {
            name: 'Whetstone',
            value: 100000,
        },
    ],
    saSanFierroHouses: [
        {
            name: 'Doherty',
            value: 20000,
        },
        {
            name: 'Chinatown',
            value: 20000,
        },
        {
            name: 'Paradiso',
            value: 20000,
        },
        {
            name: 'Hashbury',
            value: 40000,
        },
        {
            name: 'Queens',
            value: 50000,
        },
        {
            name: 'Calton Heights',
            value: 100000,
        },
    ],
    saSanFierroBusinesses: [
        {
            name: 'Zero\'s RC Shop',
            value: 30000,
        },
        {
            name: 'Wang Cars',
            value: 30000,
        },
    ],
    saDesertHouses: [
        {
            name: 'El Quebrados',
            value: 20000,
        },
        {
            name: 'Tierra Robada',
            value: 20000,
        },
        {
            name: 'Fort Carson',
            value: 30000,
        },
    ],
    saDesertBusinesses: [
        {
            name: 'Abandoned Airfield',
            value: 80000,
        },
    ],
    saLasVenturasHouses: [
        {
            name: 'Pirates In Men\'s Pants',
            value: 6000,
        },
        {
            name: 'The Camel\'s Toe',
            value: 6000,
        },
        {
            name: 'The Clown\'s Pocket',
            value: 6000,
        },
        {
            name: 'Old Venturas Strip',
            value: 6000,
        },
        {
            name: 'Creek',
            value: 10000,
        },
        {
            name: 'Rockshore West',
            value: 20000,
        },
        {
            name: 'Whitewood Estate',
            value: 30000,
        },
        {
            name: 'Red sands West',
            value: 30000,
        },
        {
            name: 'Prickle Pine',
            value: 50000,
        },
    ],
}
