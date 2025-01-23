const pokemonData = {
    1: {
        identifier: "bulbizarre",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 7,
        weight: 69,
        base_experience: 64
    },
    2: {
        identifier: "herbizarre",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 10,
        weight: 130,
        base_experience: 142
    },
    3: {
        identifier: "florizarre",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 20,
        weight: 1000,
        base_experience: 236
    },
    4: {
        identifier: "salameche",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 6,
        weight: 85,
        base_experience: 62
    },
    5: {
        identifier: "reptincel",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 11,
        weight: 190,
        base_experience: 142
    },
    6: {
        identifier: "dracaufeu",
        type: ["Feu", "Vol"],
        weaknesses: ["Eau", "Roche", "Électrik"],
        height: 17,
        weight: 905,
        base_experience: 240
    },
    7: {
        identifier: "carapuce",
        type: ["Eau"],
        weaknesses: ["Électrik", "Plante"],
        height: 5,
        weight: 90,
        base_experience: 63
    },
    8: {
        identifier: "carabaffe",
        type: ["Eau"],
        weaknesses: ["Électrik", "Plante"],
        height: 10,
        weight: 225,
        base_experience: 142
    },
    9: {
        identifier: "tortank",
        type: ["Eau"],
        weaknesses: ["Électrik", "Plante"],
        height: 16,
        weight: 855,
        base_experience: 239
    },
    10: {
        identifier: "chenipan",
        type: ["Insecte"],
        weaknesses: ["Feu", "Vol", "Roche"],
        height: 3,
        weight: 29,
        base_experience: 39
    },
    11: {
        identifier: "chrysacier",
        type: ["Insecte"],
        weaknesses: ["Feu", "Vol", "Roche"],
        height: 7,
        weight: 99,
        base_experience: 72
    },
    12: {
        identifier: "papilusion",
        type: ["Insecte", "Vol"],
        weaknesses: ["Feu", "Électrik", "Glace", "Vol", "Roche"],
        height: 11,
        weight: 320,
        base_experience: 178
    },
    13: {
        identifier: "aspicot",
        type: ["Insecte", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Roche"],
        height: 3,
        weight: 32,
        base_experience: 39
    },
    14: {
        identifier: "coconfort",
        type: ["Insecte", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Roche"],
        height: 6,
        weight: 100,
        base_experience: 72
    },
    15: {
        identifier: "dardargnan",
        type: ["Insecte", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Roche"],
        height: 10,
        weight: 295,
        base_experience: 178
    },
    16: {
        identifier: "roucool",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 3,
        weight: 18,
        base_experience: 50
    },
    17: {
        identifier: "roucoups",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 11,
        weight: 300,
        base_experience: 122
    },
    18: {
        identifier: "roucarnage",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 15,
        weight: 395,
        base_experience: 216
    },
    19: {
        identifier: "rattata",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 3,
        weight: 35,
        base_experience: 51
    },
    20: {
        identifier: "rattatac",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 7,
        weight: 185,
        base_experience: 145
    },
    21: {
        identifier: "piafabec",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 3,
        weight: 20,
        base_experience: 52
    },
    22: {
        identifier: "rapasdepic",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 12,
        weight: 380,
        base_experience: 155
    },
    23: {
        identifier: "abo",
        type: ["Poison"],
        weaknesses: ["Psy", "Sol"],
        height: 20,
        weight: 69,
        base_experience: 58
    },
    24: {
        identifier: "arbok",
        type: ["Poison"],
        weaknesses: ["Psy", "Sol"],
        height: 35,
        weight: 650,
        base_experience: 153
    },
    25: {
        identifier: "pikachu",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 4,
        weight: 60,
        base_experience: 112
    },
    26: {
        identifier: "raichu",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 8,
        weight: 300,
        base_experience: 218
    },
    27: {
        identifier: "sabelette",
        type: ["Sol"],
        weaknesses: ["Eau", "Glace", "Plante"],
        height: 6,
        weight: 120,
        base_experience: 60
    },
    28: {
        identifier: "sablaireau",
        type: ["Sol"],
        weaknesses: ["Eau", "Glace", "Plante"],
        height: 10,
        weight: 295,
        base_experience: 158
    },
    29: {
        identifier: "nidoran",
        type: ["Poison"],
        weaknesses: ["Psy", "Sol"],
        height: 4,
        weight: 70,
        base_experience: 55
    },
    30: {
        identifier: "nidorina",
        type: ["Poison"],
        weaknesses: ["Psy", "Sol"],
        height: 8,
        weight: 200,
        base_experience: 128
    },
    31: {
        identifier: "nidoqueen",
        type: ["Poison", "Sol"],
        weaknesses: ["Eau", "Psy", "Glace"],
        height: 13,
        weight: 600,
        base_experience: 227
    },
    32: {
        identifier: "nidoran",
        type: ["Poison"],
        weaknesses: ["Psy", "Sol"],
        height: 5,
        weight: 90,
        base_experience: 55
    },
    33: {
        identifier: "nidorino",
        type: ["Poison"],
        weaknesses: ["Psy", "Sol"],
        height: 9,
        weight: 195,
        base_experience: 128
    },
    34: {
        identifier: "nidoking",
        type: ["Poison", "Sol"],
        weaknesses: ["Eau", "Psy", "Glace"],
        height: 14,
        weight: 620,
        base_experience: 227
    },
    35: {
        identifier: "melofée",
        type: ["Fée"],
        weaknesses: ["Acier", "Poison"],
        height: 6,
        weight: 75,
        base_experience: 113
    },
    36: {
        identifier: "melodelfe",
        type: ["Fée"],
        weaknesses: ["Acier", "Poison"],
        height: 13,
        weight: 400,
        base_experience: 217
    },
    37: {
        identifier: "goupix",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 6,
        weight: 99,
        base_experience: 60
    },
    38: {
        identifier: "feunard",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 11,
        weight: 199,
        base_experience: 177
    },
    39: {
        identifier: "rondoudou",
        type: ["Normal", "Fée"],
        weaknesses: ["Acier", "Poison"],
        height: 5,
        weight: 55,
        base_experience: 95
    },
    40: {
        identifier: "grodoudou",
        type: ["Normal", "Fée"],
        weaknesses: ["Acier", "Poison"],
        height: 10,
        weight: 120,
        base_experience: 196
    },
    41: {
        identifier: "nosferapti",
        type: ["Poison", "Vol"],
        weaknesses: ["Électrik", "Glace", "Psy", "Roche"],
        height: 8,
        weight: 75,
        base_experience: 49
    },
    42: {
        identifier: "nosferalto",
        type: ["Poison", "Vol"],
        weaknesses: ["Électrik", "Glace", "Psy", "Roche"],
        height: 16,
        weight: 550,
        base_experience: 159
    },
    43: {
        identifier: "mystherbe",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 5,
        weight: 54,
        base_experience: 64
    },
    44: {
        identifier: "ortide",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 8,
        weight: 86,
        base_experience: 138
    },
    45: {
        identifier: "rafflesia",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 12,
        weight: 186,
        base_experience: 221
    },
    46: {
        identifier: "paras",
        type: ["Insecte", "Plante"],
        weaknesses: ["Feu", "Vol", "Glace", "Poison", "Roche", "Insecte"],
        height: 3,
        weight: 54,
        base_experience: 57
    },
    47: {
        identifier: "parasect",
        type: ["Insecte", "Plante"],
        weaknesses: ["Feu", "Vol", "Glace", "Poison", "Roche", "Insecte"],
        height: 10,
        weight: 295,
        base_experience: 142
    },
    48: {
        identifier: "mimitoss",
        type: ["Insecte", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Roche"],
        height: 10,
        weight: 300,
        base_experience: 61
    },
    49: {
        identifier: "aéromite",
        type: ["Insecte", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Roche"],
        height: 15,
        weight: 125,
        base_experience: 158
    },
    50: {
        identifier: "taupiqueur",
        type: ["Sol"],
        weaknesses: ["Eau", "Glace", "Plante"],
        height: 2,
        weight: 8,
        base_experience: 53
    },
    51: {
        identifier: "triopikeur",
        type: ["Sol"],
        weaknesses: ["Eau", "Glace", "Plante"],
        height: 7,
        weight: 333,
        base_experience: 142
    },
    52: {
        identifier: "miaouss",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 4,
        weight: 42,
        base_experience: 58
    },
    53: {
        identifier: "persian",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 10,
        weight: 320,
        base_experience: 154
    },
    54: {
        identifier: "psykokwak",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 8,
        weight: 196,
        base_experience: 64
    },
    55: {
        identifier: "akwakwak",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 17,
        weight: 766,
        base_experience: 175
    },
    56: {
        identifier: "férosinge",
        type: ["Combat"],
        weaknesses: ["Psy", "Vol", "Fée"],
        height: 5,
        weight: 280,
        base_experience: 61
    },
    57: {
        identifier: "colossinge",
        type: ["Combat"],
        weaknesses: ["Psy", "Vol", "Fée"],
        height: 10,
        weight: 320,
        base_experience: 159
    },
    58: {
        identifier: "caninos",
        type: ["Feu"],
        weaknesses: ["Eau", "Sol", "Roche"],
        height: 7,
        weight: 190,
        base_experience: 70
    },
    59: {
        identifier: "arcanin",
        type: ["Feu"],
        weaknesses: ["Eau", "Sol", "Roche"],
        height: 19,
        weight: 1550,
        base_experience: 194
    },
    60: {
        identifier: "ptitard",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 6,
        weight: 124,
        base_experience: 60
    },
    61: {
        identifier: "têtarte",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 10,
        weight: 200,
        base_experience: 135
    },
    62: {
        identifier: "tartard",
        type: ["Eau", "Combat"],
        weaknesses: ["Plante", "Électrik", "Fée", "Vol", "Psy"],
        height: 13,
        weight: 540,
        base_experience: 230
    },
    63: {
        identifier: "abra",
        type: ["Psy"],
        weaknesses: ["Insecte", "Ténèbres", "Spectre"],
        height: 9,
        weight: 195,
        base_experience: 62
    },
    64: {
        identifier: "kadabra",
        type: ["Psy"],
        weaknesses: ["Insecte", "Ténèbres", "Spectre"],
        height: 13,
        weight: 565,
        base_experience: 140
    },
    65: {
        identifier: "alakazam",
        type: ["Psy"],
        weaknesses: ["Insecte", "Ténèbres", "Spectre"],
        height: 15,
        weight: 480,
        base_experience: 225
    },
    66: {
        identifier: "machoc",
        type: ["Combat"],
        weaknesses: ["Psy", "Vol", "Fée"],
        height: 8,
        weight: 195,
        base_experience: 61
    },
    67: {
        identifier: "machopeur",
        type: ["Combat"],
        weaknesses: ["Psy", "Vol", "Fée"],
        height: 15,
        weight: 705,
        base_experience: 142
    },
    68: {
        identifier: "mackogneur",
        type: ["Combat"],
        weaknesses: ["Psy", "Vol", "Fée"],
        height: 16,
        weight: 1300,
        base_experience: 227
    },
    69: {
        identifier: "chétiiflor",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 7,
        weight: 40,
        base_experience: 60
    },
    70: {
        identifier: "boustiflor",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 10,
        weight: 64,
        base_experience: 137
    },
    71: {
        identifier: "empiflor",
        type: ["Plante", "Poison"],
        weaknesses: ["Feu", "Vol", "Psy", "Glace"],
        height: 17,
        weight: 155,
        base_experience: 221
    },
    72: {
        identifier: "tentacool",
        type: ["Eau", "Poison"],
        weaknesses: ["Psy", "Sol", "Électrik"],
        height: 9,
        weight: 455,
        base_experience: 67
    },
    73: {
        identifier: "tentacruel",
        type: ["Eau", "Poison"],
        weaknesses: ["Psy", "Sol", "Électrik"],
        height: 16,
        weight: 550,
        base_experience: 180
    },
    74: {
        identifier: "racaillou",
        type: ["Roche", "Sol"],
        weaknesses: ["Eau", "Plante", "Glace", "Combat", "Acier"],
        height: 4,
        weight: 200,
        base_experience: 60
    },
    75: {
        identifier: "gravalanch",
        type: ["Roche", "Sol"],
        weaknesses: ["Eau", "Plante", "Glace", "Combat", "Acier"],
        height: 10,
        weight: 1050,
        base_experience: 137
    },
    76: {
        identifier: "grolem",
        type: ["Roche", "Sol"],
        weaknesses: ["Eau", "Plante", "Glace", "Combat", "Acier"],
        height: 14,
        weight: 3000,
        base_experience: 223
    },
    77: {
        identifier: "ponyta",
        type: ["Feu"],
        weaknesses: ["Eau", "Sol", "Roche"],
        height: 10,
        weight: 300,
        base_experience: 82
    },
    78: {
        identifier: "galopa",
        type: ["Feu"],
        weaknesses: ["Eau", "Sol", "Roche"],
        height: 17,
        weight: 950,
        base_experience: 175
    },
    79: {
        identifier: "ramoloss",
        type: ["Eau", "Psy"],
        weaknesses: ["Plante", "Électrik", "Ténèbres", "Insecte", "Spectre"],
        height: 12,
        weight: 360,
        base_experience: 63
    },
    80: {
        identifier: "flagadoss",
        type: ["Eau", "Psy"],
        weaknesses: ["Plante", "Électrik", "Ténèbres", "Insecte", "Spectre"],
        height: 16,
        weight: 785,
        base_experience: 172
    },
    81: {
        identifier: "magnéti",
        type: ["Électrik", "Acier"],
        weaknesses: ["Feu", "Combat", "Sol"],
        height: 3,
        weight: 60,
        base_experience: 65
    },
    82: {
        identifier: "magnéton",
        type: ["Électrik", "Acier"],
        weaknesses: ["Feu", "Combat", "Sol"],
        height: 10,
        weight: 600,
        base_experience: 163
    },
    83: {
        identifier: "canarticho",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 8,
        weight: 150,
        base_experience: 123
    },
    84: {
        identifier: "doduo",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 14,
        weight: 392,
        base_experience: 62
    },
    85: {
        identifier: "dodrio",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 18,
        weight: 852,
        base_experience: 161
    },
    86: {
        identifier: "otaria",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 11,
        weight: 900,
        base_experience: 65
    },
    87: {
        identifier: "lamantine",
        type: ["Eau", "Glace"],
        weaknesses: ["Plante", "Électrik", "Roche", "Combat"],
        height: 17,
        weight: 1200,
        base_experience: 166
    },
    88: {
        identifier: "tadmorv",
        type: ["Poison"],
        weaknesses: ["Psy", "Sol"],
        height: 9,
        weight: 300,
        base_experience: 65
    },
    89: {
        identifier: "grotadmorv",
        type: ["Poison"],
        weaknesses: ["Psy", "Sol"],
        height: 12,
        weight: 300,
        base_experience: 175
    },
    90: {
        identifier: "kokiyas",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 3,
        weight: 40,
        base_experience: 61
    },
    91: {
        identifier: "crustabri",
        type: ["Eau", "Glace"],
        weaknesses: ["Plante", "Électrik", "Roche", "Combat"],
        height: 15,
        weight: 1325,
        base_experience: 184
    },
    92: {
        identifier: "fantominus",
        type: ["Spectre", "Poison"],
        weaknesses: ["Spectre", "Psy", "Ténèbres"],
        height: 13,
        weight: 1,
        base_experience: 62
    },
    93: {
        identifier: "spectrum",
        type: ["Spectre", "Poison"],
        weaknesses: ["Spectre", "Psy", "Ténèbres"],
        height: 16,
        weight: 1,
        base_experience: 142
    },
    94: {
        identifier: "ectoplasma",
        type: ["Spectre", "Poison"],
        weaknesses: ["Spectre", "Psy", "Ténèbres"],
        height: 15,
        weight: 405,
        base_experience: 225
    },
    95: {
        identifier: "onix",
        type: ["Roche", "Sol"],
        weaknesses: ["Eau", "Plante", "Glace", "Acier", "Combat"],
        height: 88,
        weight: 2100,
        base_experience: 77
    },
    96: {
        identifier: "soporifik",
        type: ["Psy"],
        weaknesses: ["Insecte", "Ténèbres", "Spectre"],
        height: 10,
        weight: 324,
        base_experience: 66
    },
    97: {
        identifier: "hypnomade",
        type: ["Psy"],
        weaknesses: ["Insecte", "Ténèbres", "Spectre"],
        height: 16,
        weight: 756,
        base_experience: 169
    },
    98: {
        identifier: "krabby",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 4,
        weight: 65,
        base_experience: 65
    },
    99: {
        identifier: "krabboss",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 13,
        weight: 600,
        base_experience: 166
    },
    100: {
        identifier: "Voltorbe",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 5,
        weight: 104,
        base_experience: 66
    },
    101: {
        identifier: "Électrode",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 12,
        weight: 666,
        base_experience: 168
    },
    102: {
        identifier: "Noeunoeuf",
        type: ["Plante", "Psy"],
        weaknesses: ["Feu", "Vol", "Glace", "Ténèbres", "Insecte", "Spectre"],
        height: 4,
        weight: 25,
        base_experience: 65
    },
    103: {
        identifier: "Noadkoko",
        type: ["Plante", "Psy"],
        weaknesses: ["Feu", "Vol", "Glace", "Ténèbres", "Insecte", "Spectre"],
        height: 20,
        weight: 1200,
        base_experience: 182
    },
    104: {
        identifier: "Osselait",
        type: ["Sol"],
        weaknesses: ["Eau", "Plante", "Glace"],
        height: 4,
        weight: 65,
        base_experience: 64
    },
    105: {
        identifier: "Ossatueur",
        type: ["Sol"],
        weaknesses: ["Eau", "Plante", "Glace"],
        height: 10,
        weight: 450,
        base_experience: 149
    },
    106: {
        identifier: "Kicklee",
        type: ["Combat"],
        weaknesses: ["Vol", "Psy", "Fée"],
        height: 15,
        weight: 498,
        base_experience: 159
    },
    107: {
        identifier: "Tygnon",
        type: ["Combat"],
        weaknesses: ["Vol", "Psy", "Fée"],
        height: 14,
        weight: 502,
        base_experience: 159
    },
    108: {
        identifier: "Excelangue",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 12,
        weight: 655,
        base_experience: 77
    },
    109: {
        identifier: "Smogo",
        type: ["Poison"],
        weaknesses: ["Sol", "Psy"],
        height: 6,
        weight: 10,
        base_experience: 68
    },
    110: {
        identifier: "Smogogo",
        type: ["Poison"],
        weaknesses: ["Sol", "Psy"],
        height: 12,
        weight: 95,
        base_experience: 172
    },
    111: {
        identifier: "Rhinocorne",
        type: ["Sol", "Roche"],
        weaknesses: ["Eau", "Plante", "Glace", "Combat", "Acier"],
        height: 10,
        weight: 1150,
        base_experience: 69
    },
    112: {
        identifier: "Rhinoféros",
        type: ["Sol", "Roche"],
        weaknesses: ["Eau", "Plante", "Glace", "Combat", "Acier"],
        height: 19,
        weight: 1200,
        base_experience: 170
    },
    113: {
        identifier: "Leveinard",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 11,
        weight: 346,
        base_experience: 395
    },
    114: {
        identifier: "Saquedeneu",
        type: ["Plante"],
        weaknesses: ["Feu", "Glace", "Poison", "Vol", "Insecte"],
        height: 10,
        weight: 350,
        base_experience: 87
    },
    115: {
        identifier: "Kangourex",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 22,
        weight: 800,
        base_experience: 172
    },
    116: {
        identifier: "Hypotrempe",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 4,
        weight: 80,
        base_experience: 59
    },
    117: {
        identifier: "Hypocéan",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 12,
        weight: 250,
        base_experience: 154
    },
    118: {
        identifier: "Poissirène",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 6,
        weight: 150,
        base_experience: 64
    },
    119: {
        identifier: "Poissoroy",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 13,
        weight: 390,
        base_experience: 158
    },
    120: {
        identifier: "Stari",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 8,
        weight: 345,
        base_experience: 68
    },
    121: {
        identifier: "Staross",
        type: ["Eau", "Psy"],
        weaknesses: ["Plante", "Électrik", "Ténèbres", "Insecte", "Spectre"],
        height: 11,
        weight: 800,
        base_experience: 182
    },
    122: {
        identifier: "M. Mime",
        type: ["Psy", "Fée"],
        weaknesses: ["Acier", "Poison", "Spectre"],
        height: 13,
        weight: 545,
        base_experience: 161
    },
    123: {
        identifier: "Insécateur",
        type: ["Insecte", "Vol"],
        weaknesses: ["Feu", "Électrik", "Glace", "Roche", "Vol"],
        height: 15,
        weight: 560,
        base_experience: 100
    },
    124: {
        identifier: "Lippoutou",
        type: ["Glace", "Psy"],
        weaknesses: ["Feu", "Ténèbres", "Spectre", "Acier", "Roche", "Insecte"],
        height: 14,
        weight: 406,
        base_experience: 159
    },
    125: {
        identifier: "Élektek",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 11,
        weight: 300,
        base_experience: 172
    },
    126: {
        identifier: "Magmar",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 13,
        weight: 445,
        base_experience: 173
    },
    127: {
        identifier: "Scarabrute",
        type: ["Insecte"],
        weaknesses: ["Feu", "Vol", "Roche"],
        height: 15,
        weight: 550,
        base_experience: 175
    },
    128: {
        identifier: "Tauros",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 14,
        weight: 884,
        base_experience: 172
    },
    129: {
        identifier: "Magicarpe",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 9,
        weight: 100,
        base_experience: 40
    },
    130: {
        identifier: "Léviator",
        type: ["Eau", "Vol"],
        weaknesses: ["Électrik", "Roche"],
        height: 65,
        weight: 2350,
        base_experience: 189
    },
    131: {
        identifier: "Lokhlass",
        type: ["Eau", "Glace"],
        weaknesses: ["Plante", "Électrik", "Combat", "Roche"],
        height: 25,
        weight: 2200,
        base_experience: 187
    },
    132: {
        identifier: "Métamorph",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 3,
        weight: 40,
        base_experience: 101
    },
    133: {
        identifier: "Évoli",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 3,
        weight: 65,
        base_experience: 65
    },
    134: {
        identifier: "Aquali",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 10,
        weight: 290,
        base_experience: 184
    },
    135: {
        identifier: "Voltali",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 8,
        weight: 245,
        base_experience: 184
    },
    136: {
        identifier: "Pyroli",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 9,
        weight: 250,
        base_experience: 184
    },
    137: {
        identifier: "Porygon",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 8,
        weight: 365,
        base_experience: 79
    },
    138: {
        identifier: "Amonita",
        type: ["Roche", "Eau"],
        weaknesses: ["Plante", "Électrik", "Combat", "Sol"],
        height: 4,
        weight: 75,
        base_experience: 71
    },
    139: {
        identifier: "Amonistar",
        type: ["Roche", "Eau"],
        weaknesses: ["Plante", "Électrik", "Combat", "Sol"],
        height: 10,
        weight: 350,
        base_experience: 173
    },
    140: {
        identifier: "Kabuto",
        type: ["Roche", "Eau"],
        weaknesses: ["Plante", "Électrik", "Combat", "Sol"],
        height: 5,
        weight: 115,
        base_experience: 71
    },
    141: {
        identifier: "Kabutops",
        type: ["Roche", "Eau"],
        weaknesses: ["Plante", "Électrik", "Combat", "Sol"],
        height: 13,
        weight: 405,
        base_experience: 173
    },
    142: {
        identifier: "Ptéra",
        type: ["Roche", "Vol"],
        weaknesses: ["Eau", "Électrik", "Glace", "Acier", "Roche"],
        height: 18,
        weight: 590,
        base_experience: 180
    },
    143: {
        identifier: "Ronflex",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 21,
        weight: 4600,
        base_experience: 189
    },
    144: {
        identifier: "Artikodin",
        type: ["Glace", "Vol"],
        weaknesses: ["Feu", "Électrik", "Roche", "Acier"],
        height: 17,
        weight: 554,
        base_experience: 261
    },
    145: {
        identifier: "Électhor",
        type: ["Électrik", "Vol"],
        weaknesses: ["Glace", "Roche"],
        height: 16,
        weight: 526,
        base_experience: 261
    },
    146: {
        identifier: "Sulfura",
        type: ["Feu", "Vol"],
        weaknesses: ["Eau", "Électrik", "Roche"],
        height: 20,
        weight: 600,
        base_experience: 261
    },
    147: {
        identifier: "Minidraco",
        type: ["Dragon"],
        weaknesses: ["Glace", "Dragon", "Fée"],
        height: 18,
        weight: 33,
        base_experience: 60
    },
    148: {
        identifier: "Draco",
        type: ["Dragon"],
        weaknesses: ["Glace", "Dragon", "Fée"],
        height: 40,
        weight: 165,
        base_experience: 147
    },
    149: {
        identifier: "Dracolosse",
        type: ["Dragon", "Vol"],
        weaknesses: ["Glace", "Dragon", "Fée", "Roche"],
        height: 22,
        weight: 2100,
        base_experience: 270
    },
    150: {
        identifier: "Mewtwo",
        type: ["Psy"],
        weaknesses: ["Insecte", "Spectre", "Ténèbres"],
        height: 20,
        weight: 1220,
        base_experience: 306
    },
    151: {
        identifier: "mew",
        type: ["Psy"],
        weaknesses: ["Insecte", "Spectre", "Ténèbres"],
        height: 4,
        weight: 40,
        base_experience: 270
    },
    152: {
        identifier: "germignon",
        type: ["Plante"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison"],
        height: 9,
        weight: 64,
        base_experience: 64
    },
    153: {
        identifier: "macronium",
        type: ["Plante"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison"],
        height: 12,
        weight: 158,
        base_experience: 142
    },
    154: {
        identifier: "méganium",
        type: ["Plante"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison"],
        height: 18,
        weight: 1005,
        base_experience: 236
    },
    155: {
        identifier: "héricendre",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 5,
        weight: 79,
        base_experience: 62
    },
    156: {
        identifier: "feurisson",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 9,
        weight: 190,
        base_experience: 142
    },
    157: {
        identifier: "typhlosion",
        type: ["Feu"],
        weaknesses: ["Eau", "Roche", "Sol"],
        height: 17,
        weight: 795,
        base_experience: 240
    },
    158: {
        identifier: "kaïminus",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 6,
        weight: 95,
        base_experience: 63
    },
    159: {
        identifier: "crocrodil",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 11,
        weight: 250,
        base_experience: 142
    },
    160: {
        identifier: "aligatueur",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 23,
        weight: 888,
        base_experience: 239
    },
    161: {
        identifier: "fouinette",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 8,
        weight: 60,
        base_experience: 43
    },
    162: {
        identifier: "fouinar",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 18,
        weight: 325,
        base_experience: 145
    },
    163: {
        identifier: "hoothoot",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 7,
        weight: 212,
        base_experience: 52
    },
    164: {
        identifier: "noarfang",
        type: ["Normal", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche"],
        height: 16,
        weight: 408,
        base_experience: 155
    },
    165: {
        identifier: "coxy",
        type: ["Insecte", "Vol"],
        weaknesses: ["Feu", "Vol", "Roche", "Glace", "Électrik"],
        height: 10,
        weight: 108,
        base_experience: 53
    },
    166: {
        identifier: "coxyclaque",
        type: ["Insecte", "Vol"],
        weaknesses: ["Feu", "Vol", "Roche", "Glace", "Électrik"],
        height: 14,
        weight: 356,
        base_experience: 137
    },
    167: {
        identifier: "mimigal",
        type: ["Insecte", "Poison"],
        weaknesses: ["Feu", "Psy", "Roche", "Vol"],
        height: 5,
        weight: 85,
        base_experience: 50
    },
    168: {
        identifier: "migalos",
        type: ["Insecte", "Poison"],
        weaknesses: ["Feu", "Psy", "Roche", "Vol"],
        height: 11,
        weight: 335,
        base_experience: 137
    },
    169: {
        identifier: "nostenfer",
        type: ["Poison", "Vol"],
        weaknesses: ["Psy", "Électrik", "Roche", "Glace"],
        height: 18,
        weight: 750,
        base_experience: 241
    },
    170: {
        identifier: "loupio",
        type: ["Eau", "Électrik"],
        weaknesses: ["Plante", "Sol"],
        height: 5,
        weight: 120,
        base_experience: 66
    },
    171: {
        identifier: "lanturn",
        type: ["Eau", "Électrik"],
        weaknesses: ["Plante", "Sol"],
        height: 12,
        weight: 225,
        base_experience: 161
    },
    172: {
        identifier: "pichu",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 3,
        weight: 20,
        base_experience: 41
    },
    173: {
        identifier: "mélo",
        type: ["Fée"],
        weaknesses: ["Acier", "Poison"],
        height: 3,
        weight: 30,
        base_experience: 44
    },
    174: {
        identifier: "toudoudou",
        type: ["Normal", "Fée"],
        weaknesses: ["Acier", "Poison", "Combat"],
        height: 3,
        weight: 10,
        base_experience: 42
    },
    175: {
        identifier: "togepi",
        type: ["Fée"],
        weaknesses: ["Acier", "Poison"],
        height: 3,
        weight: 15,
        base_experience: 49
    },
    176: {
        identifier: "togetic",
        type: ["Fée", "Vol"],
        weaknesses: ["Acier", "Poison", "Électrik", "Glace", "Roche"],
        height: 6,
        weight: 32,
        base_experience: 142
    },
    177: {
        identifier: "natu",
        type: ["Psy", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche", "Spectre", "Ténèbres"],
        height: 2,
        weight: 20,
        base_experience: 64
    },
    178: {
        identifier: "xatu",
        type: ["Psy", "Vol"],
        weaknesses: ["Électrik", "Glace", "Roche", "Spectre", "Ténèbres"],
        height: 15,
        weight: 150,
        base_experience: 165
    },
    179: {
        identifier: "wattouat",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 6,
        weight: 78,
        base_experience: 56
    },
    180: {
        identifier: "lainergie",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 8,
        weight: 133,
        base_experience: 128
    },
    181: {
        identifier: "pharamp",
        type: ["Électrik"],
        weaknesses: ["Sol"],
        height: 14,
        weight: 615,
        base_experience: 230
    },
    182: {
        identifier: "joliflor",
        type: ["Plante"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison"],
        height: 4,
        weight: 58,
        base_experience: 221
    },
    183: {
        identifier: "marill",
        type: ["Eau", "Fée"],
        weaknesses: ["Plante", "Électrik", "Acier", "Poison"],
        height: 4,
        weight: 85,
        base_experience: 88
    },
    184: {
        identifier: "azumarill",
        type: ["Eau", "Fée"],
        weaknesses: ["Plante", "Électrik", "Acier", "Poison"],
        height: 8,
        weight: 285,
        base_experience: 189
    },
    185: {
        identifier: "simularbre",
        type: ["Roche"],
        weaknesses: ["Eau", "Plante", "Combat", "Acier", "Sol"],
        height: 12,
        weight: 380,
        base_experience: 144
    },
    186: {
        identifier: "tarpaud",
        type: ["Eau"],
        weaknesses: ["Plante", "Électrik"],
        height: 11,
        weight: 339,
        base_experience: 225
    },
    187: {
        identifier: "granivol",
        type: ["Plante", "Vol"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison", "Roche"],
        height: 4,
        weight: 5,
        base_experience: 50
    },
    188: {
        identifier: "floravol",
        type: ["Plante", "Vol"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison", "Roche"],
        height: 6,
        weight: 10,
        base_experience: 119
    },
    189: {
        identifier: "cotovol",
        type: ["Plante", "Vol"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison", "Roche"],
        height: 8,
        weight: 30,
        base_experience: 207
    },
    190: {
        identifier: "capumain",
        type: ["Normal"],
        weaknesses: ["Combat"],
        height: 8,
        weight: 115,
        base_experience: 72
    },
    191: {
        identifier: "tournegrin",
        type: ["Plante"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison"],
        height: 3,
        weight: 18,
        base_experience: 36
    },
    192: {
        identifier: "héliatronc",
        type: ["Plante"],
        weaknesses: ["Feu", "Vol", "Glace", "Insecte", "Poison"],
        height: 8,
        weight: 85,
        base_experience: 149
    },
    193: {
        identifier: "yanma",
        type: ["Insecte", "Vol"],
        weaknesses: ["Feu", "Électrik", "Glace", "Vol", "Roche"],
        height: 12,
        weight: 380,
        base_experience: 78
    },
    194: {
        identifier: "axoloto",
        type: ["Eau", "Sol"],
        weaknesses: ["Plante"],
        height: 4,
        weight: 85,
        base_experience: 42
    },
    195: {
        identifier: "maraiste",
        type: ["Eau", "Sol"],
        weaknesses: ["Plante"],
        height: 14,
        weight: 750,
        base_experience: 151
    },
    196: {
        identifier: "mentali",
        type: ["Psy"],
        weaknesses: ["Insecte", "Spectre", "Ténèbres"],
        height: 9,
        weight: 265,
        base_experience: 184
    },
    197: {
        identifier: "noctali",
        type: ["Ténèbres"],
        weaknesses: ["Fée", "Combat", "Insecte"],
        height: 10,
        weight: 270,
        base_experience: 184
    },
    198: {
        identifier: "cornèbre",
        type: ["Ténèbres", "Vol"],
        weaknesses: ["Fée", "Glace", "Électrik", "Roche"],
        height: 5,
        weight: 21,
        base_experience: 81
    },
    199: {
        identifier: "roigada",
        type: ["Eau", "Psy"],
        weaknesses: ["Plante", "Électrik", "Insecte", "Spectre", "Ténèbres"],
        height: 20,
        weight: 795,
        base_experience: 172
    },
    200: {
        identifier: "feuforêve",
        type: ["Spectre"],
        weaknesses: ["Spectre", "Ténèbres"],
        height: 7,
        weight: 10,
        base_experience: 87
    }
}