import {IMissionItem} from "@/dataObjects/missions/iMissionItem"
import {iconsDir} from "@/dataObjects/missions/iconsDir"

export const desertMissions: Array<IMissionItem> = [
    {
        title: "57 - Monster",
        description: "Depois de atender o telefonema de Toreno, siga para Tierra Robada em Las Venturras, entre " +
            "no Big-Foot e siga pegando os checkpoints, termine antes de 6:30 min. para completar a missão.",
        rewards: "$3.000",
        icon: `${iconsDir.sanAndreas}interrogation.jpg`,
    },
    {
        title: "58 - Sequestro",
        description: "CJ leva um susto ao saber que o novo contato é Toreno, porque pensou que tinha matado ele " +
            "quando explodiu o helicóptero na missão O Último Voo Do Toreno. Mas ele continua vivo e agora você terá " +
            "que fazer missões pra ele. A primeira missão é interceptar um caminhão e levá-lo pra garagem. Suba na " +
            "moto com César, siga pela ponte em direção a San Fierro, chegando do outro lado permaneça perto da " +
            "porta do motorista do caminhão para que César possa pular e tomar o caminhão, cuidado com os carros " +
            "e obstáculos. Quando César pegar o caminhão, entre nele e leve-o para a garagem indicada.",
        rewards: "$7.000",
        icon: `${iconsDir.sanAndreas}interrogation.jpg`,
    },
    {
        title: "59 - Interdição",
        description: "Corra para El Castillo Del Diablo. Chegando lá pegue o lança-mísseis e escolha um veículo " +
            "para subir o morro até o ponto indicado. Quando os helicópteros inimigos chegarem, atire neles com o " +
            "lança-mísseis, cuidado para não atingir o helicóptero de carga. Depois siga para o ponto marcado no " +
            "mapa para pegar o contrabando e leve-o para a garagem na cidade fantasma.",
        rewards: "$1.000",
        icon: `${iconsDir.sanAndreas}toreno.jpg`,
    },
    {
        title: "60 - Verdant Meadows",
        description: "Compre o aeródromo de Verdant Meadows por $80.000 e faça as missões de pilotagem.",
        rewards: "Respeito e Licença de Piloto",
        icon: `${iconsDir.sanAndreas}toreno.jpg`,
    },
    {
        title: "61 - N.O.E.",
        description: "Voe abaixo do radar até Angel Pine e volte.",
        rewards: "$15.000",
        icon: `${iconsDir.sanAndreas}air_plane.jpg`,
    },
    {
        title: "62 - Lugar Isolado",
        description: "Suba na moto e entre no compartimento de carga do avião. Acelerar a moto pode ser " +
            "uma chave para subir, seguir exatamente o avião. Mata todos os agentes lá dentro, usa uma faca ou uma " +
            "katana. Coloque os explosivos, pegue o pára-quedas e salte do avião.",
        rewards: "$20.000",
        icon: `${iconsDir.sanAndreas}air_plane.jpg`,
    },
    {
        title: "63 - Projeto Negro",
        description: "O nosso velho amigo Truth pede para roubar um certo projeto negro na base militar. Mate todos " +
            "os soldados, por conveniência, disparar nos holofotes. Através da ventilação, vai até à base, e toma" +
            " posse do cartão de acesso, tem como desabilitar os misseis guiados por dentro da base, depois saia " +
            "com o jetpack. Não se esqueça de olhar para os cantos onde a saúde escondida e colete. Vai para o " +
            "ponto marcado.",
        rewards: "Nada",
        icon: `${iconsDir.sanAndreas}air_plane.jpg`,
    },
    {
        title: "64 - Gosma Verde",
        description: "Agora temos\" algo \" para roubar do comboio. Vai para o comboio, mata os soldados e encontra " +
            "a gosma verde para o jetpack. Regressem ao aeródromo abandonado.",
        rewards: "$20.000, O aeródromo vai render $10.000 por dia e a jetpack está desbloqueada no aeródromo",
        icon: `${iconsDir.sanAndreas}air_plane.jpg`,
    }
]
