'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let books = [
      {
          "id": 1,
          "titulo": "Recess: School's Out",
          "quantidade_paginas": 99,
          "autor": "Cheryl Herculeson",
          "ano_lancamento": "2005",
          "estoque": 75,
          "sigla_pais": null
      },
      {
          "id": 2,
          "titulo": "'Human' Factor, The (Human Factor, The)",
          "quantidade_paginas": 393,
          "autor": "Rickard Itschakov",
          "ano_lancamento": "2001",
          "estoque": 51,
          "sigla_pais": null
      },
      {
          "id": 3,
          "titulo": "Riding Alone for Thousands of Miles (Qian li zou dan qi)",
          "quantidade_paginas": 402,
          "autor": "Cicely Plaide",
          "ano_lancamento": "1993",
          "estoque": 39,
          "sigla_pais": null
      },
      {
          "id": 4,
          "titulo": "Player, The",
          "quantidade_paginas": 178,
          "autor": "Binny Tofpik",
          "ano_lancamento": "2000",
          "estoque": 64,
          "sigla_pais": null
      },
      {
          "id": 5,
          "titulo": "Needle, The (Igla)",
          "quantidade_paginas": 274,
          "autor": "Charleen Gundrey",
          "ano_lancamento": "1993",
          "estoque": 56,
          "sigla_pais": null
      },
      {
          "id": 6,
          "titulo": "End of the Game (Der Richter und sein Henker)",
          "quantidade_paginas": 269,
          "autor": "Peri Rigbye",
          "ano_lancamento": "2008",
          "estoque": 25,
          "sigla_pais": null
      },
      {
          "id": 7,
          "titulo": "Maid in Sweden",
          "quantidade_paginas": 336,
          "autor": "Konstance Vautre",
          "ano_lancamento": "2006",
          "estoque": 42,
          "sigla_pais": null
      },
      {
          "id": 8,
          "titulo": "Why Stop Now",
          "quantidade_paginas": 307,
          "autor": "Marice Rupprecht",
          "ano_lancamento": "2009",
          "estoque": 8,
          "sigla_pais": null
      },
      {
          "id": 9,
          "titulo": "Almost You",
          "quantidade_paginas": 90,
          "autor": "Siana Mably",
          "ano_lancamento": "1994",
          "estoque": 44,
          "sigla_pais": null
      },
      {
          "id": 10,
          "titulo": "Prom Night III: The Last Kiss",
          "quantidade_paginas": 497,
          "autor": "Parnell Corson",
          "ano_lancamento": "2003",
          "estoque": 96,
          "sigla_pais": null
      },
      {
          "id": 11,
          "titulo": "Bothersome Man, The (Brysomme mannen, Den)",
          "quantidade_paginas": 283,
          "autor": "Sutherlan Newiss",
          "ano_lancamento": "1991",
          "estoque": 77,
          "sigla_pais": null
      },
      {
          "id": 12,
          "titulo": "Hustler, The",
          "quantidade_paginas": 218,
          "autor": "Deeann Jochanany",
          "ano_lancamento": "1996",
          "estoque": 30,
          "sigla_pais": null
      },
      {
          "id": 13,
          "titulo": "Along Came Jones",
          "quantidade_paginas": 333,
          "autor": "Alejandro Warters",
          "ano_lancamento": "2008",
          "estoque": 9,
          "sigla_pais": null
      },
      {
          "id": 14,
          "titulo": "Barbershop 2: Back in Business",
          "quantidade_paginas": 52,
          "autor": "Carlie Shall",
          "ano_lancamento": "2011",
          "estoque": 58,
          "sigla_pais": null
      },
      {
          "id": 15,
          "titulo": "Bridge, The (Die Brücke)",
          "quantidade_paginas": 309,
          "autor": "Amber Blevin",
          "ano_lancamento": "1990",
          "estoque": 35,
          "sigla_pais": null
      },
      {
          "id": 16,
          "titulo": "Telling You",
          "quantidade_paginas": 252,
          "autor": "Ignace MacDiarmond",
          "ano_lancamento": "1998",
          "estoque": 64,
          "sigla_pais": null
      },
      {
          "id": 17,
          "titulo": "Blood of Redemption",
          "quantidade_paginas": 428,
          "autor": "Ignacius Ridesdale",
          "ano_lancamento": "1998",
          "estoque": 20,
          "sigla_pais": null
      },
      {
          "id": 18,
          "titulo": "Carry on Spying (Agent Oooh!)",
          "quantidade_paginas": 490,
          "autor": "Carlota Storm",
          "ano_lancamento": "2000",
          "estoque": 1,
          "sigla_pais": null
      },
      {
          "id": 19,
          "titulo": "Nomads",
          "quantidade_paginas": 155,
          "autor": "Galvin Barroux",
          "ano_lancamento": "1996",
          "estoque": 54,
          "sigla_pais": null
      },
      {
          "id": 20,
          "titulo": "Life and Death of Colonel Blimp, The",
          "quantidade_paginas": 500,
          "autor": "Augie Levin",
          "ano_lancamento": "1992",
          "estoque": 16,
          "sigla_pais": null
      },
      {
          "id": 21,
          "titulo": "Waterloo",
          "quantidade_paginas": 284,
          "autor": "Judd Oxbrough",
          "ano_lancamento": "1999",
          "estoque": 79,
          "sigla_pais": null
      },
      {
          "id": 22,
          "titulo": "Heart Is Deceitful Above All Things, The",
          "quantidade_paginas": 119,
          "autor": "Loleta Comazzo",
          "ano_lancamento": "2011",
          "estoque": 3,
          "sigla_pais": null
      },
      {
          "id": 23,
          "titulo": "Soldiers of Fortune",
          "quantidade_paginas": 229,
          "autor": "Mikaela Flintoffe",
          "ano_lancamento": "2008",
          "estoque": 3,
          "sigla_pais": null
      },
      {
          "id": 24,
          "titulo": "Simply Irresistible",
          "quantidade_paginas": 286,
          "autor": "Tina Coldbathe",
          "ano_lancamento": "1998",
          "estoque": 32,
          "sigla_pais": null
      },
      {
          "id": 25,
          "titulo": "Subject Two",
          "quantidade_paginas": 109,
          "autor": "Osbourn Darbey",
          "ano_lancamento": "2007",
          "estoque": 4,
          "sigla_pais": null
      },
      {
          "id": 26,
          "titulo": "Go for Broke!",
          "quantidade_paginas": 378,
          "autor": "Alanna Plaster",
          "ano_lancamento": "2010",
          "estoque": 93,
          "sigla_pais": null
      },
      {
          "id": 27,
          "titulo": "Archie To Riverdale and Back Again",
          "quantidade_paginas": 417,
          "autor": "Meggi Beadles",
          "ano_lancamento": "1988",
          "estoque": 59,
          "sigla_pais": null
      },
      {
          "id": 28,
          "titulo": "Alla älskar Alice",
          "quantidade_paginas": 225,
          "autor": "Jeffry Gibbeson",
          "ano_lancamento": "2004",
          "estoque": 56,
          "sigla_pais": null
      },
      {
          "id": 29,
          "titulo": "Surgeon, The",
          "quantidade_paginas": 264,
          "autor": "Garvey Cleworth",
          "ano_lancamento": "1992",
          "estoque": 87,
          "sigla_pais": null
      },
      {
          "id": 30,
          "titulo": "Daughter of Dr. Jeckyll",
          "quantidade_paginas": 165,
          "autor": "Edythe Maurice",
          "ano_lancamento": "2002",
          "estoque": 89,
          "sigla_pais": null
      },
      {
          "id": 31,
          "titulo": "Chambermaid on the Titanic, The (Femme de chambre du Titanic, La)",
          "quantidade_paginas": 115,
          "autor": "Marnia Cubberley",
          "ano_lancamento": "1998",
          "estoque": 75,
          "sigla_pais": null
      },
      {
          "id": 32,
          "titulo": "The Hearts of Age",
          "quantidade_paginas": 378,
          "autor": "Tymon Girodin",
          "ano_lancamento": "2010",
          "estoque": 68,
          "sigla_pais": null
      },
      {
          "id": 33,
          "titulo": "Mr. Kinky",
          "quantidade_paginas": 117,
          "autor": "Russ Collocott",
          "ano_lancamento": "2009",
          "estoque": 66,
          "sigla_pais": null
      },
      {
          "id": 34,
          "titulo": "Play it to the Bone",
          "quantidade_paginas": 376,
          "autor": "Haily Stilldale",
          "ano_lancamento": "1976",
          "estoque": 74,
          "sigla_pais": null
      },
      {
          "id": 35,
          "titulo": "Love Field",
          "quantidade_paginas": 126,
          "autor": "Johna Burgin",
          "ano_lancamento": "2012",
          "estoque": 52,
          "sigla_pais": null
      },
      {
          "id": 36,
          "titulo": "Dirty Love",
          "quantidade_paginas": 210,
          "autor": "Hort Restorick",
          "ano_lancamento": "2012",
          "estoque": 40,
          "sigla_pais": null
      },
      {
          "id": 37,
          "titulo": "The Beaver Trilogy",
          "quantidade_paginas": 127,
          "autor": "Maurene Rickell",
          "ano_lancamento": "1995",
          "estoque": 0,
          "sigla_pais": null
      },
      {
          "id": 38,
          "titulo": "Doppelgänger Paul",
          "quantidade_paginas": 51,
          "autor": "Marrissa Woolford",
          "ano_lancamento": "1994",
          "estoque": 70,
          "sigla_pais": null
      },
      {
          "id": 39,
          "titulo": "Annabelle",
          "quantidade_paginas": 123,
          "autor": "John Osbourn",
          "ano_lancamento": "2003",
          "estoque": 80,
          "sigla_pais": null
      },
      {
          "id": 40,
          "titulo": "Wild Wild West Revisited, The",
          "quantidade_paginas": 158,
          "autor": "Daveen Boak",
          "ano_lancamento": "2007",
          "estoque": 40,
          "sigla_pais": null
      },
      {
          "id": 41,
          "titulo": "Aristocats, The",
          "quantidade_paginas": 77,
          "autor": "Jason Ratie",
          "ano_lancamento": "2009",
          "estoque": 55,
          "sigla_pais": null
      },
      {
          "id": 42,
          "titulo": "Lionheart",
          "quantidade_paginas": 184,
          "autor": "Adolf Detloff",
          "ano_lancamento": "2009",
          "estoque": 39,
          "sigla_pais": null
      },
      {
          "id": 43,
          "titulo": "Sometime in August (Mitte Ende August)",
          "quantidade_paginas": 480,
          "autor": "Kitti Punshon",
          "ano_lancamento": "2007",
          "estoque": 13,
          "sigla_pais": null
      },
      {
          "id": 44,
          "titulo": "Criss Cross",
          "quantidade_paginas": 53,
          "autor": "Ronica Shildrick",
          "ano_lancamento": "2008",
          "estoque": 94,
          "sigla_pais": null
      },
      {
          "id": 45,
          "titulo": "That Awkward Moment",
          "quantidade_paginas": 140,
          "autor": "Trip Riguard",
          "ano_lancamento": "1983",
          "estoque": 50,
          "sigla_pais": null
      },
      {
          "id": 46,
          "titulo": "Last Days, The (Últimos días, Los)",
          "quantidade_paginas": 281,
          "autor": "Armando Doswell",
          "ano_lancamento": "2006",
          "estoque": 86,
          "sigla_pais": null
      },
      {
          "id": 47,
          "titulo": "Fled",
          "quantidade_paginas": 134,
          "autor": "Kenon Yong",
          "ano_lancamento": "1995",
          "estoque": 56,
          "sigla_pais": null
      },
      {
          "id": 48,
          "titulo": "Hope Springs",
          "quantidade_paginas": 65,
          "autor": "Arther Mercy",
          "ano_lancamento": "2006",
          "estoque": 48,
          "sigla_pais": null
      },
      {
          "id": 49,
          "titulo": "Final Inquiry, The (Inquiry, The) (inchiesta, L')",
          "quantidade_paginas": 162,
          "autor": "Hannie Seres",
          "ano_lancamento": "1994",
          "estoque": 70,
          "sigla_pais": null
      },
      {
          "id": 50,
          "titulo": "Resurrecting the Champ",
          "quantidade_paginas": 140,
          "autor": "Fraze Whickman",
          "ano_lancamento": "1997",
          "estoque": 75,
          "sigla_pais": null
      },
      {
          "id": 51,
          "titulo": "Given Word, The (O Pagador de Promessas)",
          "quantidade_paginas": 121,
          "autor": "Xever Nelsen",
          "ano_lancamento": "2005",
          "estoque": 69,
          "sigla_pais": null
      },
      {
          "id": 52,
          "titulo": "Cave, The",
          "quantidade_paginas": 448,
          "autor": "Prince Saladine",
          "ano_lancamento": "1995",
          "estoque": 79,
          "sigla_pais": null
      },
      {
          "id": 53,
          "titulo": "Treasure of the Yankee Zephyr (Race for the Yankee Zephyr)",
          "quantidade_paginas": 470,
          "autor": "Fawne Wakeham",
          "ano_lancamento": "2007",
          "estoque": 45,
          "sigla_pais": null
      },
      {
          "id": 54,
          "titulo": "Lake Placid",
          "quantidade_paginas": 183,
          "autor": "Genevieve Coe",
          "ano_lancamento": "2007",
          "estoque": 97,
          "sigla_pais": null
      },
      {
          "id": 55,
          "titulo": "Vivre sa vie: Film en douze tableaux (My Life to Live)",
          "quantidade_paginas": 412,
          "autor": "Elle Patton",
          "ano_lancamento": "1989",
          "estoque": 34,
          "sigla_pais": null
      },
      {
          "id": 56,
          "titulo": "Kevin Hart: Let Me Explain",
          "quantidade_paginas": 244,
          "autor": "Marwin Petrelluzzi",
          "ano_lancamento": "1998",
          "estoque": 52,
          "sigla_pais": null
      },
      {
          "id": 57,
          "titulo": "Return of the Secaucus 7",
          "quantidade_paginas": 110,
          "autor": "Ervin Dowse",
          "ano_lancamento": "1987",
          "estoque": 76,
          "sigla_pais": null
      },
      {
          "id": 58,
          "titulo": "Flaming Star",
          "quantidade_paginas": 248,
          "autor": "Jennee Warburton",
          "ano_lancamento": "1997",
          "estoque": 31,
          "sigla_pais": null
      },
      {
          "id": 59,
          "titulo": "Misunderstood",
          "quantidade_paginas": 149,
          "autor": "Sarajane Kemball",
          "ano_lancamento": "2008",
          "estoque": 17,
          "sigla_pais": null
      },
      {
          "id": 60,
          "titulo": "Drones",
          "quantidade_paginas": 423,
          "autor": "Kinsley Le Prevost",
          "ano_lancamento": "2009",
          "estoque": 67,
          "sigla_pais": null
      },
      {
          "id": 61,
          "titulo": "In Eagle Shadow Fist (Ding tian li di) (Fist of Anger)",
          "quantidade_paginas": 269,
          "autor": "Johna Betteney",
          "ano_lancamento": "1999",
          "estoque": 6,
          "sigla_pais": null
      },
      {
          "id": 62,
          "titulo": "Istanbul",
          "quantidade_paginas": 149,
          "autor": "Petra Clark",
          "ano_lancamento": "2001",
          "estoque": 87,
          "sigla_pais": null
      },
      {
          "id": 63,
          "titulo": "Anvil! The Story of Anvil",
          "quantidade_paginas": 430,
          "autor": "Sallie Menloe",
          "ano_lancamento": "1987",
          "estoque": 6,
          "sigla_pais": null
      },
      {
          "id": 64,
          "titulo": "Thale",
          "quantidade_paginas": 437,
          "autor": "Emelen Samples",
          "ano_lancamento": "2001",
          "estoque": 7,
          "sigla_pais": null
      },
      {
          "id": 65,
          "titulo": "Day of the Dolphin, The",
          "quantidade_paginas": 283,
          "autor": "Rochella Alessandretti",
          "ano_lancamento": "2007",
          "estoque": 37,
          "sigla_pais": null
      },
      {
          "id": 66,
          "titulo": "Istanbul",
          "quantidade_paginas": 65,
          "autor": "Don McKissack",
          "ano_lancamento": "1999",
          "estoque": 7,
          "sigla_pais": null
      },
      {
          "id": 67,
          "titulo": "HealtH",
          "quantidade_paginas": 173,
          "autor": "Colette Lauga",
          "ano_lancamento": "1995",
          "estoque": 17,
          "sigla_pais": null
      },
      {
          "id": 68,
          "titulo": "Tales from the Script",
          "quantidade_paginas": 334,
          "autor": "Malcolm Ionn",
          "ano_lancamento": "2012",
          "estoque": 10,
          "sigla_pais": null
      },
      {
          "id": 69,
          "titulo": "Desert Hearts",
          "quantidade_paginas": 355,
          "autor": "Bernarr Rayne",
          "ano_lancamento": "2005",
          "estoque": 24,
          "sigla_pais": null
      },
      {
          "id": 70,
          "titulo": "Golden Coach, The (Le carrosse d'or)",
          "quantidade_paginas": 294,
          "autor": "Elsie Petroselli",
          "ano_lancamento": "1995",
          "estoque": 46,
          "sigla_pais": null
      },
      {
          "id": 71,
          "titulo": "Patsy",
          "quantidade_paginas": 339,
          "autor": "Laney Van Daalen",
          "ano_lancamento": "1988",
          "estoque": 11,
          "sigla_pais": null
      },
      {
          "id": 72,
          "titulo": "Jeff, Who Lives at Home",
          "quantidade_paginas": 281,
          "autor": "Shandy Godain",
          "ano_lancamento": "1992",
          "estoque": 13,
          "sigla_pais": null
      },
      {
          "id": 73,
          "titulo": "Two Deaths",
          "quantidade_paginas": 385,
          "autor": "Tyrus Tesyro",
          "ano_lancamento": "1992",
          "estoque": 17,
          "sigla_pais": null
      },
      {
          "id": 74,
          "titulo": "Thieves' Highway",
          "quantidade_paginas": 165,
          "autor": "Bren Cartmail",
          "ano_lancamento": "2011",
          "estoque": 2,
          "sigla_pais": null
      },
      {
          "id": 75,
          "titulo": "Foosball (Metegol)",
          "quantidade_paginas": 265,
          "autor": "Brandais Verman",
          "ano_lancamento": "1993",
          "estoque": 66,
          "sigla_pais": null
      },
      {
          "id": 76,
          "titulo": "Aelita: The Queen of Mars (Aelita)",
          "quantidade_paginas": 95,
          "autor": "Gabriel Stitcher",
          "ano_lancamento": "2010",
          "estoque": 53,
          "sigla_pais": null
      },
      {
          "id": 77,
          "titulo": "Belarmino",
          "quantidade_paginas": 365,
          "autor": "Lucina Ganniclifft",
          "ano_lancamento": "2011",
          "estoque": 49,
          "sigla_pais": null
      },
      {
          "id": 78,
          "titulo": "Unknown Soldier, The (Tuntematon sotilas)",
          "quantidade_paginas": 404,
          "autor": "Martha Kembrey",
          "ano_lancamento": "1997",
          "estoque": 50,
          "sigla_pais": null
      },
      {
          "id": 79,
          "titulo": "Dawn of the Dead",
          "quantidade_paginas": 62,
          "autor": "Ron Wadie",
          "ano_lancamento": "2012",
          "estoque": 74,
          "sigla_pais": null
      },
      {
          "id": 80,
          "titulo": "Sicko",
          "quantidade_paginas": 484,
          "autor": "Alejoa Slimming",
          "ano_lancamento": "1998",
          "estoque": 92,
          "sigla_pais": null
      },
      {
          "id": 81,
          "titulo": "Greetings",
          "quantidade_paginas": 155,
          "autor": "Alessandro MacNulty",
          "ano_lancamento": "1993",
          "estoque": 84,
          "sigla_pais": null
      },
      {
          "id": 82,
          "titulo": "Sexy Beast",
          "quantidade_paginas": 55,
          "autor": "Barnaby Martyntsev",
          "ano_lancamento": "1998",
          "estoque": 14,
          "sigla_pais": null
      },
      {
          "id": 83,
          "titulo": "Scarlet Street",
          "quantidade_paginas": 423,
          "autor": "Valli Skitteral",
          "ano_lancamento": "2006",
          "estoque": 18,
          "sigla_pais": null
      },
      {
          "id": 84,
          "titulo": "Trois",
          "quantidade_paginas": 489,
          "autor": "Rosanne Grelka",
          "ano_lancamento": "1997",
          "estoque": 0,
          "sigla_pais": null
      },
      {
          "id": 85,
          "titulo": "Kid With a Bike, The (Le gamin au vélo)",
          "quantidade_paginas": 336,
          "autor": "Dynah Trott",
          "ano_lancamento": "2005",
          "estoque": 10,
          "sigla_pais": null
      },
      {
          "id": 86,
          "titulo": "Arsène Lupin",
          "quantidade_paginas": 346,
          "autor": "Jacquenetta Worshall",
          "ano_lancamento": "2000",
          "estoque": 92,
          "sigla_pais": null
      },
      {
          "id": 87,
          "titulo": "Arn: The Knight Templar (Arn - Tempelriddaren)",
          "quantidade_paginas": 75,
          "autor": "Sloan Turfes",
          "ano_lancamento": "1993",
          "estoque": 100,
          "sigla_pais": null
      },
      {
          "id": 88,
          "titulo": "Satan Bug, The",
          "quantidade_paginas": 315,
          "autor": "Orson Endricci",
          "ano_lancamento": "2012",
          "estoque": 98,
          "sigla_pais": null
      },
      {
          "id": 89,
          "titulo": "Devils on the Doorstep (Guizi lai le)",
          "quantidade_paginas": 436,
          "autor": "Val Fealey",
          "ano_lancamento": "2011",
          "estoque": 10,
          "sigla_pais": null
      },
      {
          "id": 90,
          "titulo": "Wicked Little Things",
          "quantidade_paginas": 482,
          "autor": "Aguie Leatherland",
          "ano_lancamento": "1998",
          "estoque": 54,
          "sigla_pais": null
      },
      {
          "id": 91,
          "titulo": "Indie Game: The Movie",
          "quantidade_paginas": 349,
          "autor": "Emmit Robotham",
          "ano_lancamento": "2011",
          "estoque": 89,
          "sigla_pais": null
      },
      {
          "id": 92,
          "titulo": "Eden",
          "quantidade_paginas": 260,
          "autor": "Fons Grigorini",
          "ano_lancamento": "1999",
          "estoque": 15,
          "sigla_pais": null
      },
      {
          "id": 93,
          "titulo": "Notorious C.H.O.",
          "quantidade_paginas": 404,
          "autor": "Teddie Bradly",
          "ano_lancamento": "2005",
          "estoque": 78,
          "sigla_pais": null
      },
      {
          "id": 94,
          "titulo": "Hands Across the Table",
          "quantidade_paginas": 174,
          "autor": "Boote Wildber",
          "ano_lancamento": "2013",
          "estoque": 91,
          "sigla_pais": null
      },
      {
          "id": 95,
          "titulo": "Honey (Miele)",
          "quantidade_paginas": 467,
          "autor": "Brigitta Parkman",
          "ano_lancamento": "2001",
          "estoque": 43,
          "sigla_pais": null
      },
      {
          "id": 96,
          "titulo": "From Beyond the Grave (Creatures)",
          "quantidade_paginas": 170,
          "autor": "Beau Pizer",
          "ano_lancamento": "1998",
          "estoque": 23,
          "sigla_pais": null
      },
      {
          "id": 97,
          "titulo": "Hangar 18",
          "quantidade_paginas": 236,
          "autor": "Rancell Wickliffe",
          "ano_lancamento": "1985",
          "estoque": 33,
          "sigla_pais": null
      },
      {
          "id": 98,
          "titulo": "Sons and Lovers",
          "quantidade_paginas": 437,
          "autor": "Chantal Kid",
          "ano_lancamento": "1985",
          "estoque": 79,
          "sigla_pais": null
      },
      {
          "id": 99,
          "titulo": "Frost/Nixon",
          "quantidade_paginas": 203,
          "autor": "Patrizia Fairbourne",
          "ano_lancamento": "2009",
          "estoque": 105,
          "sigla_pais": null
      },
      {
          "id": 100,
          "titulo": "Train of Shadows (Tren de sombras)",
          "quantidade_paginas": 413,
          "autor": "Barry Briztman",
          "ano_lancamento": "1986",
          "estoque": 70,
          "sigla_pais": null
      },
      {
          "id": 106,
          "titulo": "Harry Potter. Reliquias da Morte",
          "quantidade_paginas": 200,
          "autor": "Any People",
          "ano_lancamento": "2015",
          "estoque": 100,
          "sigla_pais": null
      },
      {
          "id": 108,
          "titulo": "Harry Potter. Reliquias da Morte",
          "quantidade_paginas": 200,
          "autor": "Any People",
          "ano_lancamento": "2015",
          "estoque": 100,
          "sigla_pais": null
      },
      {
          "id": 111,
          "titulo": "O Senhor dos Anéis: A Sociedade do Anel",
          "quantidade_paginas": 576,
          "autor": "John Ronald Reuel Tolkien",
          "ano_lancamento": "1954",
          "estoque": 5,
          "sigla_pais": "fr"
      },
      {
          "id": 112,
          "titulo": "O Senhor dos Anéis: As duas torres",
          "quantidade_paginas": 464,
          "autor": "John Ronald Reuel Tolkien",
          "ano_lancamento": "1953",
          "estoque": 1,
          "sigla_pais": "br"
      }
    ]
    await queryInterface.bulkInsert('livros', books, {});
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', null, {});
  }
};
