
export type PlayerRole =
  | "TOP_ORDER"
  | "MIDDLE_ORDER"
  | "FINISHER"
  | "BOWLER";

export type PlayerSeason = {
  id: string;
  playerName: string;
  season: number;
  role: PlayerRole;
  runs: number;
  strikeRate: number;
  wickets: number;
  economy: number;
};

export const playerSeasons: PlayerSeason[] = [
  {
    "id": "V-Kohli-2016",
    "playerName": "V Kohli",
    "season": 2016,
    "role": "TOP_ORDER",
    "runs": 973,
    "strikeRate": 148.5,
    "wickets": 0,
    "economy": 9.75
  },
  {
    "id": "SR-Watson-2008",
    "playerName": "SR Watson",
    "season": 2008,
    "role": "BOWLER",
    "runs": 472,
    "strikeRate": 146.6,
    "wickets": 20,
    "economy": 6.89
  },
  {
    "id": "DJ-Bravo-2013",
    "playerName": "DJ Bravo",
    "season": 2013,
    "role": "BOWLER",
    "runs": 121,
    "strikeRate": 108,
    "wickets": 34,
    "economy": 7.73
  },
  {
    "id": "JH-Kallis-2010",
    "playerName": "JH Kallis",
    "season": 2010,
    "role": "BOWLER",
    "runs": 572,
    "strikeRate": 110.6,
    "wickets": 15,
    "economy": 8.3
  },
  {
    "id": "SR-Watson-2013",
    "playerName": "SR Watson",
    "season": 2013,
    "role": "BOWLER",
    "runs": 543,
    "strikeRate": 138.2,
    "wickets": 16,
    "economy": 7.48
  },
  {
    "id": "SP-Narine-2024",
    "playerName": "SP Narine",
    "season": 2024,
    "role": "BOWLER",
    "runs": 488,
    "strikeRate": 167.1,
    "wickets": 18,
    "economy": 6.75
  },
  {
    "id": "HV-Patel-2021",
    "playerName": "HV Patel",
    "season": 2021,
    "role": "BOWLER",
    "runs": 59,
    "strikeRate": 122.9,
    "wickets": 35,
    "economy": 7.66
  },
  {
    "id": "DJ-Bravo-2015",
    "playerName": "DJ Bravo",
    "season": 2015,
    "role": "BOWLER",
    "runs": 195,
    "strikeRate": 129.1,
    "wickets": 28,
    "economy": 8.19
  },
  {
    "id": "Shubman-Gill-2023",
    "playerName": "Shubman Gill",
    "season": 2023,
    "role": "TOP_ORDER",
    "runs": 890,
    "strikeRate": 152.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JP-Faulkner-2013",
    "playerName": "JP Faulkner",
    "season": 2013,
    "role": "BOWLER",
    "runs": 57,
    "strikeRate": 100,
    "wickets": 33,
    "economy": 6.62
  },
  {
    "id": "DJ-Bravo-2012",
    "playerName": "DJ Bravo",
    "season": 2012,
    "role": "BOWLER",
    "runs": 371,
    "strikeRate": 136.9,
    "wickets": 20,
    "economy": 7.8
  },
  {
    "id": "JC-Buttler-2022",
    "playerName": "JC Buttler",
    "season": 2022,
    "role": "TOP_ORDER",
    "runs": 863,
    "strikeRate": 144.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Russell-2022",
    "playerName": "AD Russell",
    "season": 2022,
    "role": "BOWLER",
    "runs": 335,
    "strikeRate": 167.5,
    "wickets": 21,
    "economy": 9.61
  },
  {
    "id": "K-Rabada-2020",
    "playerName": "K Rabada",
    "season": 2020,
    "role": "BOWLER",
    "runs": 56,
    "strikeRate": 107.7,
    "wickets": 32,
    "economy": 8.19
  },
  {
    "id": "DA-Warner-2016",
    "playerName": "DA Warner",
    "season": 2016,
    "role": "TOP_ORDER",
    "runs": 848,
    "strikeRate": 146.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Gayle-2011",
    "playerName": "CH Gayle",
    "season": 2011,
    "role": "TOP_ORDER",
    "runs": 608,
    "strikeRate": 177.8,
    "wickets": 9,
    "economy": 6.99
  },
  {
    "id": "Rashid-Khan-2023",
    "playerName": "Rashid Khan",
    "season": 2023,
    "role": "BOWLER",
    "runs": 130,
    "strikeRate": 197,
    "wickets": 28,
    "economy": 8.21
  },
  {
    "id": "HH-Pandya-2019",
    "playerName": "HH Pandya",
    "season": 2019,
    "role": "BOWLER",
    "runs": 409,
    "strikeRate": 181.8,
    "wickets": 16,
    "economy": 8.86
  },
  {
    "id": "JH-Kallis-2012",
    "playerName": "JH Kallis",
    "season": 2012,
    "role": "BOWLER",
    "runs": 409,
    "strikeRate": 104.1,
    "wickets": 16,
    "economy": 7.32
  },
  {
    "id": "CH-Gayle-2013",
    "playerName": "CH Gayle",
    "season": 2013,
    "role": "TOP_ORDER",
    "runs": 720,
    "strikeRate": 148.8,
    "wickets": 3,
    "economy": 9.84
  },
  {
    "id": "AD-Russell-2019",
    "playerName": "AD Russell",
    "season": 2019,
    "role": "TOP_ORDER",
    "runs": 514,
    "strikeRate": 187.6,
    "wickets": 11,
    "economy": 9.49
  },
  {
    "id": "JH-Kallis-2013",
    "playerName": "JH Kallis",
    "season": 2013,
    "role": "BOWLER",
    "runs": 311,
    "strikeRate": 95.1,
    "wickets": 19,
    "economy": 7.42
  },
  {
    "id": "SP-Narine-2018",
    "playerName": "SP Narine",
    "season": 2018,
    "role": "BOWLER",
    "runs": 357,
    "strikeRate": 180.3,
    "wickets": 17,
    "economy": 7.65
  },
  {
    "id": "MM-Sharma-2023",
    "playerName": "MM Sharma",
    "season": 2023,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 31,
    "economy": 8.1
  },
  {
    "id": "HV-Patel-2024",
    "playerName": "HV Patel",
    "season": 2024,
    "role": "BOWLER",
    "runs": 13,
    "strikeRate": 68.4,
    "wickets": 30,
    "economy": 9.18
  },
  {
    "id": "NLTC-Perera-2013",
    "playerName": "NLTC Perera",
    "season": 2013,
    "role": "BOWLER",
    "runs": 235,
    "strikeRate": 135.8,
    "wickets": 21,
    "economy": 7.97
  },
  {
    "id": "B-Sai-Sudharsan-2025",
    "playerName": "B Sai Sudharsan",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 759,
    "strikeRate": 149.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SL-Malinga-2011",
    "playerName": "SL Malinga",
    "season": 2011,
    "role": "BOWLER",
    "runs": 8,
    "strikeRate": 88.9,
    "wickets": 30,
    "economy": 5.94
  },
  {
    "id": "JJ-Bumrah-2020",
    "playerName": "JJ Bumrah",
    "season": 2020,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 166.7,
    "wickets": 30,
    "economy": 6.81
  },
  {
    "id": "A-Symonds-2010",
    "playerName": "A Symonds",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 429,
    "strikeRate": 120.5,
    "wickets": 13,
    "economy": 7.11
  },
  {
    "id": "SR-Watson-2016",
    "playerName": "SR Watson",
    "season": 2016,
    "role": "BOWLER",
    "runs": 179,
    "strikeRate": 132.6,
    "wickets": 23,
    "economy": 8.17
  },
  {
    "id": "M-Morkel-2012",
    "playerName": "M Morkel",
    "season": 2012,
    "role": "BOWLER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 30,
    "economy": 7.19
  },
  {
    "id": "R-Vinay-Kumar-2013",
    "playerName": "R Vinay Kumar",
    "season": 2013,
    "role": "BOWLER",
    "runs": 70,
    "strikeRate": 159.1,
    "wickets": 27,
    "economy": 8.31
  },
  {
    "id": "V-Kohli-2024",
    "playerName": "V Kohli",
    "season": 2024,
    "role": "TOP_ORDER",
    "runs": 741,
    "strikeRate": 149.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JA-Morkel-2008",
    "playerName": "JA Morkel",
    "season": 2008,
    "role": "BOWLER",
    "runs": 241,
    "strikeRate": 143.5,
    "wickets": 20,
    "economy": 8.01
  },
  {
    "id": "Harbhajan-Singh-2013",
    "playerName": "Harbhajan Singh",
    "season": 2013,
    "role": "BOWLER",
    "runs": 116,
    "strikeRate": 141.5,
    "wickets": 25,
    "economy": 6.5
  },
  {
    "id": "K-Rabada-2019",
    "playerName": "K Rabada",
    "season": 2019,
    "role": "BOWLER",
    "runs": 14,
    "strikeRate": 93.3,
    "wickets": 29,
    "economy": 7.69
  },
  {
    "id": "HH-Pandya-2018",
    "playerName": "HH Pandya",
    "season": 2018,
    "role": "BOWLER",
    "runs": 260,
    "strikeRate": 126.8,
    "wickets": 19,
    "economy": 8.69
  },
  {
    "id": "KS-Williamson-2018",
    "playerName": "KS Williamson",
    "season": 2018,
    "role": "TOP_ORDER",
    "runs": 735,
    "strikeRate": 140.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Narine-2012",
    "playerName": "SP Narine",
    "season": 2012,
    "role": "BOWLER",
    "runs": 9,
    "strikeRate": 112.5,
    "wickets": 29,
    "economy": 5.58
  },
  {
    "id": "CH-Gayle-2012",
    "playerName": "CH Gayle",
    "season": 2012,
    "role": "TOP_ORDER",
    "runs": 733,
    "strikeRate": 155.3,
    "wickets": 0,
    "economy": 13.4
  },
  {
    "id": "MEK-Hussey-2013",
    "playerName": "MEK Hussey",
    "season": 2013,
    "role": "TOP_ORDER",
    "runs": 733,
    "strikeRate": 126.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AJ-Tye-2018",
    "playerName": "AJ Tye",
    "season": 2018,
    "role": "BOWLER",
    "runs": 32,
    "strikeRate": 80,
    "wickets": 28,
    "economy": 7.8
  },
  {
    "id": "SR-Watson-2018",
    "playerName": "SR Watson",
    "season": 2018,
    "role": "TOP_ORDER",
    "runs": 555,
    "strikeRate": 150.8,
    "wickets": 7,
    "economy": 8.59
  },
  {
    "id": "YS-Chahal-2022",
    "playerName": "YS Chahal",
    "season": 2022,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 62.5,
    "wickets": 29,
    "economy": 7.5
  },
  {
    "id": "F-du-Plessis-2023",
    "playerName": "F du Plessis",
    "season": 2023,
    "role": "TOP_ORDER",
    "runs": 730,
    "strikeRate": 151.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Yadav-2025",
    "playerName": "SA Yadav",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 717,
    "strikeRate": 163.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PWH-de-Silva-2022",
    "playerName": "PWH de Silva",
    "season": 2022,
    "role": "BOWLER",
    "runs": 38,
    "strikeRate": 79.2,
    "wickets": 27,
    "economy": 7.61
  },
  {
    "id": "Mohammed-Shami-2023",
    "playerName": "Mohammed Shami",
    "season": 2023,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 62.5,
    "wickets": 28,
    "economy": 7.92
  },
  {
    "id": "B-Kumar-2017",
    "playerName": "B Kumar",
    "season": 2017,
    "role": "BOWLER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 28,
    "economy": 7.11
  },
  {
    "id": "SK-Raina-2010",
    "playerName": "SK Raina",
    "season": 2010,
    "role": "TOP_ORDER",
    "runs": 528,
    "strikeRate": 136.4,
    "wickets": 7,
    "economy": 7.39
  },
  {
    "id": "IK-Pathan-2010",
    "playerName": "IK Pathan",
    "season": 2010,
    "role": "BOWLER",
    "runs": 276,
    "strikeRate": 146.8,
    "wickets": 17,
    "economy": 9
  },
  {
    "id": "KA-Pollard-2010",
    "playerName": "KA Pollard",
    "season": 2010,
    "role": "BOWLER",
    "runs": 273,
    "strikeRate": 179.6,
    "wickets": 17,
    "economy": 7.11
  },
  {
    "id": "AD-Russell-2024",
    "playerName": "AD Russell",
    "season": 2024,
    "role": "BOWLER",
    "runs": 222,
    "strikeRate": 157.4,
    "wickets": 19,
    "economy": 9.7
  },
  {
    "id": "IK-Pathan-2009",
    "playerName": "IK Pathan",
    "season": 2009,
    "role": "BOWLER",
    "runs": 196,
    "strikeRate": 119.5,
    "wickets": 20,
    "economy": 7.61
  },
  {
    "id": "DA-Warner-2019",
    "playerName": "DA Warner",
    "season": 2019,
    "role": "TOP_ORDER",
    "runs": 692,
    "strikeRate": 139.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Jadeja-2023",
    "playerName": "RA Jadeja",
    "season": 2023,
    "role": "BOWLER",
    "runs": 190,
    "strikeRate": 137.7,
    "wickets": 20,
    "economy": 7.45
  },
  {
    "id": "A-Mishra-2013",
    "playerName": "A Mishra",
    "season": 2013,
    "role": "BOWLER",
    "runs": 89,
    "strikeRate": 86.4,
    "wickets": 24,
    "economy": 6.3
  },
  {
    "id": "HH-Pandya-2022",
    "playerName": "HH Pandya",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 487,
    "strikeRate": 125.8,
    "wickets": 8,
    "economy": 7.17
  },
  {
    "id": "AB-de-Villiers-2016",
    "playerName": "AB de Villiers",
    "season": 2016,
    "role": "TOP_ORDER",
    "runs": 687,
    "strikeRate": 165.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YK-Pathan-2008",
    "playerName": "YK Pathan",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 435,
    "strikeRate": 171.9,
    "wickets": 10,
    "economy": 8.22
  },
  {
    "id": "RR-Pant-2018",
    "playerName": "RR Pant",
    "season": 2018,
    "role": "TOP_ORDER",
    "runs": 684,
    "strikeRate": 166,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Avesh-Khan-2021",
    "playerName": "Avesh Khan",
    "season": 2021,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 166.7,
    "wickets": 27,
    "economy": 7.3
  },
  {
    "id": "SL-Malinga-2012",
    "playerName": "SL Malinga",
    "season": 2012,
    "role": "BOWLER",
    "runs": 55,
    "strikeRate": 100,
    "wickets": 25,
    "economy": 6.07
  },
  {
    "id": "JD-Unadkat-2017",
    "playerName": "JD Unadkat",
    "season": 2017,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 27,
    "economy": 7.1
  },
  {
    "id": "MP-Stoinis-2020",
    "playerName": "MP Stoinis",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 352,
    "strikeRate": 140.8,
    "wickets": 13,
    "economy": 9.36
  },
  {
    "id": "KL-Rahul-2020",
    "playerName": "KL Rahul",
    "season": 2020,
    "role": "TOP_ORDER",
    "runs": 676,
    "strikeRate": 127.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Russell-2015",
    "playerName": "AD Russell",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 326,
    "strikeRate": 186.3,
    "wickets": 14,
    "economy": 7.84
  },
  {
    "id": "DP-Conway-2023",
    "playerName": "DP Conway",
    "season": 2023,
    "role": "TOP_ORDER",
    "runs": 672,
    "strikeRate": 136.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Narine-2013",
    "playerName": "SP Narine",
    "season": 2013,
    "role": "BOWLER",
    "runs": 21,
    "strikeRate": 105,
    "wickets": 26,
    "economy": 5.47
  },
  {
    "id": "SM-Curran-2024",
    "playerName": "SM Curran",
    "season": 2024,
    "role": "BOWLER",
    "runs": 270,
    "strikeRate": 117.4,
    "wickets": 16,
    "economy": 9.97
  },
  {
    "id": "KA-Pollard-2012",
    "playerName": "KA Pollard",
    "season": 2012,
    "role": "BOWLER",
    "runs": 220,
    "strikeRate": 135,
    "wickets": 18,
    "economy": 7.38
  },
  {
    "id": "KA-Pollard-2013",
    "playerName": "KA Pollard",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 420,
    "strikeRate": 144.8,
    "wickets": 10,
    "economy": 8.89
  },
  {
    "id": "BA-Stokes-2017",
    "playerName": "BA Stokes",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 316,
    "strikeRate": 139.2,
    "wickets": 14,
    "economy": 7.16
  },
  {
    "id": "DR-Smith-2014",
    "playerName": "DR Smith",
    "season": 2014,
    "role": "TOP_ORDER",
    "runs": 566,
    "strikeRate": 133.2,
    "wickets": 4,
    "economy": 9.58
  },
  {
    "id": "AD-Russell-2016",
    "playerName": "AD Russell",
    "season": 2016,
    "role": "BOWLER",
    "runs": 188,
    "strikeRate": 150.4,
    "wickets": 19,
    "economy": 8.06
  },
  {
    "id": "RG-Sharma-2009",
    "playerName": "RG Sharma",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 362,
    "strikeRate": 112.1,
    "wickets": 12,
    "economy": 6.99
  },
  {
    "id": "RV-Uthappa-2014",
    "playerName": "RV Uthappa",
    "season": 2014,
    "role": "TOP_ORDER",
    "runs": 660,
    "strikeRate": 136.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KL-Rahul-2018",
    "playerName": "KL Rahul",
    "season": 2018,
    "role": "TOP_ORDER",
    "runs": 659,
    "strikeRate": 154.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RP-Singh-2009",
    "playerName": "RP Singh",
    "season": 2009,
    "role": "BOWLER",
    "runs": 8,
    "strikeRate": 47.1,
    "wickets": 26,
    "economy": 6.75
  },
  {
    "id": "V-Kohli-2025",
    "playerName": "V Kohli",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 657,
    "strikeRate": 141,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SL-Malinga-2015",
    "playerName": "SL Malinga",
    "season": 2015,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 54.5,
    "wickets": 26,
    "economy": 7.19
  },
  {
    "id": "C-Green-2023",
    "playerName": "C Green",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 452,
    "strikeRate": 157.5,
    "wickets": 8,
    "economy": 9.29
  },
  {
    "id": "MM-Sharma-2014",
    "playerName": "MM Sharma",
    "season": 2014,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 26,
    "economy": 8.46
  },
  {
    "id": "TA-Boult-2020",
    "playerName": "TA Boult",
    "season": 2020,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 26,
    "economy": 8.02
  },
  {
    "id": "Shubman-Gill-2025",
    "playerName": "Shubman Gill",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 650,
    "strikeRate": 149.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Imran-Tahir-2019",
    "playerName": "Imran Tahir",
    "season": 2019,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 26,
    "economy": 6.8
  },
  {
    "id": "M-Prasidh-Krishna-2025",
    "playerName": "M Prasidh Krishna",
    "season": 2025,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 26,
    "economy": 8.34
  },
  {
    "id": "JH-Kallis-2011",
    "playerName": "JH Kallis",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 424,
    "strikeRate": 109.8,
    "wickets": 9,
    "economy": 6.8
  },
  {
    "id": "RA-Jadeja-2014",
    "playerName": "RA Jadeja",
    "season": 2014,
    "role": "BOWLER",
    "runs": 146,
    "strikeRate": 129.2,
    "wickets": 20,
    "economy": 8.06
  },
  {
    "id": "S-Dhawan-2012",
    "playerName": "S Dhawan",
    "season": 2012,
    "role": "TOP_ORDER",
    "runs": 569,
    "strikeRate": 127,
    "wickets": 3,
    "economy": 9.73
  },
  {
    "id": "B-Kumar-2016",
    "playerName": "B Kumar",
    "season": 2016,
    "role": "BOWLER",
    "runs": 43,
    "strikeRate": 153.6,
    "wickets": 24,
    "economy": 7.29
  },
  {
    "id": "DA-Warner-2017",
    "playerName": "DA Warner",
    "season": 2017,
    "role": "TOP_ORDER",
    "runs": 641,
    "strikeRate": 138.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Russell-2018",
    "playerName": "AD Russell",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 316,
    "strikeRate": 176.5,
    "wickets": 13,
    "economy": 9.04
  },
  {
    "id": "Shakib-Al-Hasan-2018",
    "playerName": "Shakib Al Hasan",
    "season": 2018,
    "role": "BOWLER",
    "runs": 239,
    "strikeRate": 117.7,
    "wickets": 16,
    "economy": 7.97
  },
  {
    "id": "V-Kohli-2023",
    "playerName": "V Kohli",
    "season": 2023,
    "role": "TOP_ORDER",
    "runs": 639,
    "strikeRate": 135.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "ST-Jayasuriya-2008",
    "playerName": "ST Jayasuriya",
    "season": 2008,
    "role": "TOP_ORDER",
    "runs": 514,
    "strikeRate": 154.4,
    "wickets": 5,
    "economy": 7.7
  },
  {
    "id": "V-Kohli-2013",
    "playerName": "V Kohli",
    "season": 2013,
    "role": "TOP_ORDER",
    "runs": 639,
    "strikeRate": 135.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MG-Johnson-2013",
    "playerName": "MG Johnson",
    "season": 2013,
    "role": "BOWLER",
    "runs": 39,
    "strikeRate": 105.4,
    "wickets": 24,
    "economy": 7.01
  },
  {
    "id": "PC-Valthaty-2011",
    "playerName": "PC Valthaty",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 463,
    "strikeRate": 131.9,
    "wickets": 7,
    "economy": 7.8
  },
  {
    "id": "Sohail-Tanvir-2008",
    "playerName": "Sohail Tanvir",
    "season": 2008,
    "role": "BOWLER",
    "runs": 36,
    "strikeRate": 116.1,
    "wickets": 24,
    "economy": 6.23
  },
  {
    "id": "RD-Gaikwad-2021",
    "playerName": "RD Gaikwad",
    "season": 2021,
    "role": "TOP_ORDER",
    "runs": 635,
    "strikeRate": 134,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Rashid-Khan-2018",
    "playerName": "Rashid Khan",
    "season": 2018,
    "role": "BOWLER",
    "runs": 59,
    "strikeRate": 184.4,
    "wickets": 23,
    "economy": 6.8
  },
  {
    "id": "SK-Raina-2009",
    "playerName": "SK Raina",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 434,
    "strikeRate": 136.5,
    "wickets": 8,
    "economy": 6.07
  },
  {
    "id": "F-du-Plessis-2021",
    "playerName": "F du Plessis",
    "season": 2021,
    "role": "TOP_ORDER",
    "runs": 633,
    "strikeRate": 134.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "IK-Pathan-2008",
    "playerName": "IK Pathan",
    "season": 2008,
    "role": "BOWLER",
    "runs": 131,
    "strikeRate": 109.2,
    "wickets": 20,
    "economy": 6.45
  },
  {
    "id": "MR-Marsh-2025",
    "playerName": "MR Marsh",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 627,
    "strikeRate": 156.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KL-Rahul-2021",
    "playerName": "KL Rahul",
    "season": 2021,
    "role": "TOP_ORDER",
    "runs": 626,
    "strikeRate": 134.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Nehra-2015",
    "playerName": "A Nehra",
    "season": 2015,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 14.3,
    "wickets": 25,
    "economy": 7.06
  },
  {
    "id": "YBK-Jaiswal-2023",
    "playerName": "YBK Jaiswal",
    "season": 2023,
    "role": "TOP_ORDER",
    "runs": 625,
    "strikeRate": 157.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "K-Rabada-2022",
    "playerName": "K Rabada",
    "season": 2022,
    "role": "BOWLER",
    "runs": 48,
    "strikeRate": 102.1,
    "wickets": 23,
    "economy": 8.2
  },
  {
    "id": "S-Dhawan-2020",
    "playerName": "S Dhawan",
    "season": 2020,
    "role": "TOP_ORDER",
    "runs": 618,
    "strikeRate": 142.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SR-Tendulkar-2010",
    "playerName": "SR Tendulkar",
    "season": 2010,
    "role": "TOP_ORDER",
    "runs": 618,
    "strikeRate": 126.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KL-Rahul-2022",
    "playerName": "KL Rahul",
    "season": 2022,
    "role": "TOP_ORDER",
    "runs": 616,
    "strikeRate": 130.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SE-Marsh-2008",
    "playerName": "SE Marsh",
    "season": 2008,
    "role": "TOP_ORDER",
    "runs": 616,
    "strikeRate": 136.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JP-Duminy-2015",
    "playerName": "JP Duminy",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 414,
    "strikeRate": 126.6,
    "wickets": 8,
    "economy": 7.18
  },
  {
    "id": "JC-Archer-2020",
    "playerName": "JC Archer",
    "season": 2020,
    "role": "BOWLER",
    "runs": 113,
    "strikeRate": 171.2,
    "wickets": 20,
    "economy": 6.49
  },
  {
    "id": "YK-Pathan-2011",
    "playerName": "YK Pathan",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 283,
    "strikeRate": 138,
    "wickets": 13,
    "economy": 6.07
  },
  {
    "id": "Noor-Ahmad-2025",
    "playerName": "Noor Ahmad",
    "season": 2025,
    "role": "BOWLER",
    "runs": 7,
    "strikeRate": 41.2,
    "wickets": 24,
    "economy": 7.95
  },
  {
    "id": "V-Kohli-2011",
    "playerName": "V Kohli",
    "season": 2011,
    "role": "TOP_ORDER",
    "runs": 557,
    "strikeRate": 117.8,
    "wickets": 2,
    "economy": 7.92
  },
  {
    "id": "JP-Faulkner-2014",
    "playerName": "JP Faulkner",
    "season": 2014,
    "role": "BOWLER",
    "runs": 181,
    "strikeRate": 182.8,
    "wickets": 17,
    "economy": 9.69
  },
  {
    "id": "SA-Yadav-2023",
    "playerName": "SA Yadav",
    "season": 2023,
    "role": "TOP_ORDER",
    "runs": 605,
    "strikeRate": 177.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harbhajan-Singh-2010",
    "playerName": "Harbhajan Singh",
    "season": 2010,
    "role": "BOWLER",
    "runs": 105,
    "strikeRate": 164.1,
    "wickets": 20,
    "economy": 6.92
  },
  {
    "id": "SS-Iyer-2025",
    "playerName": "SS Iyer",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 604,
    "strikeRate": 167.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shakib-Al-Hasan-2014",
    "playerName": "Shakib Al Hasan",
    "season": 2014,
    "role": "BOWLER",
    "runs": 229,
    "strikeRate": 143.1,
    "wickets": 15,
    "economy": 6.63
  },
  {
    "id": "S-Kaul-2018",
    "playerName": "S Kaul",
    "season": 2018,
    "role": "BOWLER",
    "runs": 3,
    "strikeRate": 21.4,
    "wickets": 24,
    "economy": 8.33
  },
  {
    "id": "AR-Patel-2017",
    "playerName": "AR Patel",
    "season": 2017,
    "role": "BOWLER",
    "runs": 227,
    "strikeRate": 132.7,
    "wickets": 15,
    "economy": 7.47
  },
  {
    "id": "AT-Rayudu-2018",
    "playerName": "AT Rayudu",
    "season": 2018,
    "role": "TOP_ORDER",
    "runs": 602,
    "strikeRate": 146.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YS-Chahal-2015",
    "playerName": "YS Chahal",
    "season": 2015,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 24,
    "economy": 8.82
  },
  {
    "id": "PP-Chawla-2023",
    "playerName": "PP Chawla",
    "season": 2023,
    "role": "BOWLER",
    "runs": 25,
    "strikeRate": 113.6,
    "wickets": 23,
    "economy": 8.07
  },
  {
    "id": "TU-Deshpande-2023",
    "playerName": "TU Deshpande",
    "season": 2023,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 24,
    "economy": 9.46
  },
  {
    "id": "MF-Maharoof-2008",
    "playerName": "MF Maharoof",
    "season": 2008,
    "role": "BOWLER",
    "runs": 125,
    "strikeRate": 158.2,
    "wickets": 19,
    "economy": 6.77
  },
  {
    "id": "P-Simran-Singh-2025",
    "playerName": "P Simran Singh",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 599,
    "strikeRate": 159.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Azhar-Mahmood-2013",
    "playerName": "Azhar Mahmood",
    "season": 2013,
    "role": "BOWLER",
    "runs": 196,
    "strikeRate": 124.1,
    "wickets": 16,
    "economy": 7.53
  },
  {
    "id": "CH-Morris-2016",
    "playerName": "CH Morris",
    "season": 2016,
    "role": "BOWLER",
    "runs": 195,
    "strikeRate": 171.1,
    "wickets": 16,
    "economy": 7.01
  },
  {
    "id": "KL-Rahul-2019",
    "playerName": "KL Rahul",
    "season": 2019,
    "role": "TOP_ORDER",
    "runs": 593,
    "strikeRate": 132.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Vinay-Kumar-2012",
    "playerName": "R Vinay Kumar",
    "season": 2012,
    "role": "BOWLER",
    "runs": 68,
    "strikeRate": 104.6,
    "wickets": 21,
    "economy": 8.46
  },
  {
    "id": "Harbhajan-Singh-2015",
    "playerName": "Harbhajan Singh",
    "season": 2015,
    "role": "BOWLER",
    "runs": 117,
    "strikeRate": 144.4,
    "wickets": 19,
    "economy": 7.7
  },
  {
    "id": "JJ-Bumrah-2017",
    "playerName": "JJ Bumrah",
    "season": 2017,
    "role": "BOWLER",
    "runs": 16,
    "strikeRate": 133.3,
    "wickets": 23,
    "economy": 7.32
  },
  {
    "id": "DJ-Bravo-2018",
    "playerName": "DJ Bravo",
    "season": 2018,
    "role": "BOWLER",
    "runs": 141,
    "strikeRate": 151.6,
    "wickets": 18,
    "economy": 9.55
  },
  {
    "id": "Rashid-Khan-2022",
    "playerName": "Rashid Khan",
    "season": 2022,
    "role": "BOWLER",
    "runs": 91,
    "strikeRate": 206.8,
    "wickets": 20,
    "economy": 6.65
  },
  {
    "id": "RD-Gaikwad-2023",
    "playerName": "RD Gaikwad",
    "season": 2023,
    "role": "TOP_ORDER",
    "runs": 590,
    "strikeRate": 143.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "G-Gambhir-2012",
    "playerName": "G Gambhir",
    "season": 2012,
    "role": "TOP_ORDER",
    "runs": 590,
    "strikeRate": 137.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KK-Cooper-2013",
    "playerName": "KK Cooper",
    "season": 2013,
    "role": "BOWLER",
    "runs": 39,
    "strikeRate": 177.3,
    "wickets": 22,
    "economy": 8.02
  },
  {
    "id": "GJ-Maxwell-2021",
    "playerName": "GJ Maxwell",
    "season": 2021,
    "role": "TOP_ORDER",
    "runs": 513,
    "strikeRate": 137.5,
    "wickets": 3,
    "economy": 8.18
  },
  {
    "id": "S-Dhawan-2021",
    "playerName": "S Dhawan",
    "season": 2021,
    "role": "TOP_ORDER",
    "runs": 587,
    "strikeRate": 122.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LS-Livingstone-2022",
    "playerName": "LS Livingstone",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 437,
    "strikeRate": 167.4,
    "wickets": 6,
    "economy": 8.42
  },
  {
    "id": "PJ-Cummins-2024",
    "playerName": "PJ Cummins",
    "season": 2024,
    "role": "BOWLER",
    "runs": 136,
    "strikeRate": 137.4,
    "wickets": 18,
    "economy": 9.14
  },
  {
    "id": "SL-Malinga-2013",
    "playerName": "SL Malinga",
    "season": 2013,
    "role": "BOWLER",
    "runs": 9,
    "strikeRate": 47.4,
    "wickets": 23,
    "economy": 7.22
  },
  {
    "id": "RD-Gaikwad-2024",
    "playerName": "RD Gaikwad",
    "season": 2024,
    "role": "TOP_ORDER",
    "runs": 583,
    "strikeRate": 137.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Nortje-2020",
    "playerName": "A Nortje",
    "season": 2020,
    "role": "BOWLER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 23,
    "economy": 8.44
  },
  {
    "id": "Umran-Malik-2022",
    "playerName": "Umran Malik",
    "season": 2022,
    "role": "BOWLER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 23,
    "economy": 8.72
  },
  {
    "id": "KH-Pandya-2018",
    "playerName": "KH Pandya",
    "season": 2018,
    "role": "FINISHER",
    "runs": 228,
    "strikeRate": 139,
    "wickets": 14,
    "economy": 7.02
  },
  {
    "id": "Mohammed-Shami-2020",
    "playerName": "Mohammed Shami",
    "season": 2020,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 23,
    "economy": 8.46
  },
  {
    "id": "TA-Boult-2025",
    "playerName": "TA Boult",
    "season": 2025,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 23,
    "economy": 8.74
  },
  {
    "id": "GJ-Maxwell-2014",
    "playerName": "GJ Maxwell",
    "season": 2014,
    "role": "TOP_ORDER",
    "runs": 552,
    "strikeRate": 176.9,
    "wickets": 1,
    "economy": 11.4
  },
  {
    "id": "RA-Jadeja-2013",
    "playerName": "RA Jadeja",
    "season": 2013,
    "role": "BOWLER",
    "runs": 201,
    "strikeRate": 144.6,
    "wickets": 15,
    "economy": 7.47
  },
  {
    "id": "JJ-Bumrah-2019",
    "playerName": "JJ Bumrah",
    "season": 2019,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 23,
    "economy": 6.8
  },
  {
    "id": "M-Pathirana-2023",
    "playerName": "M Pathirana",
    "season": 2023,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 23,
    "economy": 7.47
  },
  {
    "id": "HH-Pandya-2025",
    "playerName": "HH Pandya",
    "season": 2025,
    "role": "FINISHER",
    "runs": 224,
    "strikeRate": 151.4,
    "wickets": 14,
    "economy": 9.04
  },
  {
    "id": "DJ-Bravo-2016",
    "playerName": "DJ Bravo",
    "season": 2016,
    "role": "BOWLER",
    "runs": 99,
    "strikeRate": 112.5,
    "wickets": 19,
    "economy": 8.66
  },
  {
    "id": "Kuldeep-Yadav-2022",
    "playerName": "Kuldeep Yadav",
    "season": 2022,
    "role": "BOWLER",
    "runs": 48,
    "strikeRate": 88.9,
    "wickets": 21,
    "economy": 8.24
  },
  {
    "id": "R-Parag-2024",
    "playerName": "R Parag",
    "season": 2024,
    "role": "TOP_ORDER",
    "runs": 573,
    "strikeRate": 140.8,
    "wickets": 0,
    "economy": 8.53
  },
  {
    "id": "SK-Raina-2013",
    "playerName": "SK Raina",
    "season": 2013,
    "role": "TOP_ORDER",
    "runs": 548,
    "strikeRate": 148.1,
    "wickets": 1,
    "economy": 11.5
  },
  {
    "id": "ML-Hayden-2009",
    "playerName": "ML Hayden",
    "season": 2009,
    "role": "TOP_ORDER",
    "runs": 572,
    "strikeRate": 139.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Warne-2008",
    "playerName": "SK Warne",
    "season": 2008,
    "role": "BOWLER",
    "runs": 70,
    "strikeRate": 116.7,
    "wickets": 20,
    "economy": 7.69
  },
  {
    "id": "P-Negi-2017",
    "playerName": "P Negi",
    "season": 2017,
    "role": "BOWLER",
    "runs": 144,
    "strikeRate": 126.3,
    "wickets": 17,
    "economy": 6.06
  },
  {
    "id": "KA-Pollard-2015",
    "playerName": "KA Pollard",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 419,
    "strikeRate": 155.2,
    "wickets": 6,
    "economy": 8.96
  },
  {
    "id": "HV-Patel-2022",
    "playerName": "HV Patel",
    "season": 2022,
    "role": "BOWLER",
    "runs": 43,
    "strikeRate": 102.4,
    "wickets": 21,
    "economy": 7.47
  },
  {
    "id": "DJ-Bravo-2009",
    "playerName": "DJ Bravo",
    "season": 2009,
    "role": "FINISHER",
    "runs": 218,
    "strikeRate": 103.3,
    "wickets": 14,
    "economy": 7.54
  },
  {
    "id": "Yuvraj-Singh-2011",
    "playerName": "Yuvraj Singh",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 343,
    "strikeRate": 127.5,
    "wickets": 9,
    "economy": 6.62
  },
  {
    "id": "TM-Head-2024",
    "playerName": "TM Head",
    "season": 2024,
    "role": "TOP_ORDER",
    "runs": 567,
    "strikeRate": 184.7,
    "wickets": 0,
    "economy": 19.2
  },
  {
    "id": "JJ-Bumrah-2021",
    "playerName": "JJ Bumrah",
    "season": 2021,
    "role": "BOWLER",
    "runs": 16,
    "strikeRate": 94.1,
    "wickets": 22,
    "economy": 7.3
  },
  {
    "id": "A-Kumble-2009",
    "playerName": "A Kumble",
    "season": 2009,
    "role": "BOWLER",
    "runs": 16,
    "strikeRate": 80,
    "wickets": 22,
    "economy": 5.92
  },
  {
    "id": "PP-Chawla-2008",
    "playerName": "PP Chawla",
    "season": 2008,
    "role": "BOWLER",
    "runs": 90,
    "strikeRate": 147.5,
    "wickets": 19,
    "economy": 8.31
  },
  {
    "id": "S-Gopal-2019",
    "playerName": "S Gopal",
    "season": 2019,
    "role": "BOWLER",
    "runs": 63,
    "strikeRate": 137,
    "wickets": 20,
    "economy": 7.27
  },
  {
    "id": "SK-Raina-2011",
    "playerName": "SK Raina",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 438,
    "strikeRate": 130.7,
    "wickets": 5,
    "economy": 7.25
  },
  {
    "id": "S-Aravind-2011",
    "playerName": "S Aravind",
    "season": 2011,
    "role": "BOWLER",
    "runs": 13,
    "strikeRate": 130,
    "wickets": 22,
    "economy": 7.85
  },
  {
    "id": "DA-Warner-2015",
    "playerName": "DA Warner",
    "season": 2015,
    "role": "TOP_ORDER",
    "runs": 562,
    "strikeRate": 152.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MC-Henriques-2015",
    "playerName": "MC Henriques",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 287,
    "strikeRate": 132.9,
    "wickets": 11,
    "economy": 6.27
  },
  {
    "id": "MA-Starc-2015",
    "playerName": "MA Starc",
    "season": 2015,
    "role": "BOWLER",
    "runs": 11,
    "strikeRate": 78.6,
    "wickets": 22,
    "economy": 6.75
  },
  {
    "id": "Avesh-Khan-2024",
    "playerName": "Avesh Khan",
    "season": 2024,
    "role": "BOWLER",
    "runs": 10,
    "strikeRate": 200,
    "wickets": 22,
    "economy": 9.24
  },
  {
    "id": "AM-Rahane-2012",
    "playerName": "AM Rahane",
    "season": 2012,
    "role": "TOP_ORDER",
    "runs": 560,
    "strikeRate": 125,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Narine-2014",
    "playerName": "SP Narine",
    "season": 2014,
    "role": "BOWLER",
    "runs": 10,
    "strikeRate": 66.7,
    "wickets": 22,
    "economy": 6.61
  },
  {
    "id": "YBK-Jaiswal-2025",
    "playerName": "YBK Jaiswal",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 559,
    "strikeRate": 155.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Rashid-Khan-2021",
    "playerName": "Rashid Khan",
    "season": 2021,
    "role": "BOWLER",
    "runs": 83,
    "strikeRate": 116.9,
    "wickets": 19,
    "economy": 6.84
  },
  {
    "id": "AR-Patel-2023",
    "playerName": "AR Patel",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 283,
    "strikeRate": 131,
    "wickets": 11,
    "economy": 7.17
  },
  {
    "id": "DL-Chahar-2019",
    "playerName": "DL Chahar",
    "season": 2019,
    "role": "BOWLER",
    "runs": 7,
    "strikeRate": 70,
    "wickets": 22,
    "economy": 7.29
  },
  {
    "id": "PP-Chawla-2012",
    "playerName": "PP Chawla",
    "season": 2012,
    "role": "BOWLER",
    "runs": 106,
    "strikeRate": 120.5,
    "wickets": 18,
    "economy": 7.37
  },
  {
    "id": "AR-Patel-2015",
    "playerName": "AR Patel",
    "season": 2015,
    "role": "FINISHER",
    "runs": 206,
    "strikeRate": 113.8,
    "wickets": 14,
    "economy": 8.28
  },
  {
    "id": "SN-Thakur-2021",
    "playerName": "SN Thakur",
    "season": 2021,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 83.3,
    "wickets": 22,
    "economy": 8.21
  },
  {
    "id": "C-Green-2024",
    "playerName": "C Green",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 255,
    "strikeRate": 137.8,
    "wickets": 12,
    "economy": 8.21
  },
  {
    "id": "Mukesh-Kumar-2024",
    "playerName": "Mukesh Kumar",
    "season": 2024,
    "role": "BOWLER",
    "runs": 3,
    "strikeRate": 30,
    "wickets": 22,
    "economy": 10.2
  },
  {
    "id": "PP-Ojha-2010",
    "playerName": "PP Ojha",
    "season": 2010,
    "role": "BOWLER",
    "runs": 3,
    "strikeRate": 37.5,
    "wickets": 22,
    "economy": 7.32
  },
  {
    "id": "SR-Tendulkar-2011",
    "playerName": "SR Tendulkar",
    "season": 2011,
    "role": "TOP_ORDER",
    "runs": 553,
    "strikeRate": 108.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DW-Steyn-2013",
    "playerName": "DW Steyn",
    "season": 2013,
    "role": "BOWLER",
    "runs": 53,
    "strikeRate": 143.2,
    "wickets": 20,
    "economy": 5.79
  },
  {
    "id": "RA-Jadeja-2021",
    "playerName": "RA Jadeja",
    "season": 2021,
    "role": "FINISHER",
    "runs": 227,
    "strikeRate": 133.5,
    "wickets": 13,
    "economy": 6.94
  },
  {
    "id": "Arshdeep-Singh-2025",
    "playerName": "Arshdeep Singh",
    "season": 2025,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 33.3,
    "wickets": 22,
    "economy": 8.62
  },
  {
    "id": "UT-Yadav-2012",
    "playerName": "UT Yadav",
    "season": 2012,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 28.6,
    "wickets": 22,
    "economy": 7.19
  },
  {
    "id": "Mohammed-Shami-2019",
    "playerName": "Mohammed Shami",
    "season": 2019,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 22,
    "economy": 8.65
  },
  {
    "id": "YS-Chahal-2020",
    "playerName": "YS Chahal",
    "season": 2020,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 20,
    "wickets": 22,
    "economy": 7.14
  },
  {
    "id": "SM-Curran-2023",
    "playerName": "SM Curran",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 276,
    "strikeRate": 129.6,
    "wickets": 11,
    "economy": 9.97
  },
  {
    "id": "RA-Jadeja-2025",
    "playerName": "RA Jadeja",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 301,
    "strikeRate": 131.4,
    "wickets": 10,
    "economy": 8.41
  },
  {
    "id": "A-Nehra-2009",
    "playerName": "A Nehra",
    "season": 2009,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 22,
    "economy": 6.52
  },
  {
    "id": "JR-Hazlewood-2025",
    "playerName": "JR Hazlewood",
    "season": 2025,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 22,
    "economy": 8.64
  },
  {
    "id": "MM-Patel-2011",
    "playerName": "MM Patel",
    "season": 2011,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 22,
    "economy": 6.88
  },
  {
    "id": "YS-Chahal-2023",
    "playerName": "YS Chahal",
    "season": 2023,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 22,
    "economy": 7.99
  },
  {
    "id": "YS-Chahal-2016",
    "playerName": "YS Chahal",
    "season": 2016,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 22,
    "economy": 7.97
  },
  {
    "id": "JA-Morkel-2010",
    "playerName": "JA Morkel",
    "season": 2010,
    "role": "FINISHER",
    "runs": 199,
    "strikeRate": 147.4,
    "wickets": 14,
    "economy": 8.34
  },
  {
    "id": "JC-Buttler-2018",
    "playerName": "JC Buttler",
    "season": 2018,
    "role": "TOP_ORDER",
    "runs": 548,
    "strikeRate": 150.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Warner-2020",
    "playerName": "DA Warner",
    "season": 2020,
    "role": "TOP_ORDER",
    "runs": 548,
    "strikeRate": 129.6,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "SK-Raina-2014",
    "playerName": "SK Raina",
    "season": 2014,
    "role": "TOP_ORDER",
    "runs": 523,
    "strikeRate": 141.4,
    "wickets": 1,
    "economy": 7.43
  },
  {
    "id": "SR-Watson-2015",
    "playerName": "SR Watson",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 347,
    "strikeRate": 128.5,
    "wickets": 8,
    "economy": 8.49
  },
  {
    "id": "D-Wiese-2015",
    "playerName": "D Wiese",
    "season": 2015,
    "role": "BOWLER",
    "runs": 122,
    "strikeRate": 135.6,
    "wickets": 17,
    "economy": 8.24
  },
  {
    "id": "SP-Narine-2025",
    "playerName": "SP Narine",
    "season": 2025,
    "role": "FINISHER",
    "runs": 246,
    "strikeRate": 153.8,
    "wickets": 12,
    "economy": 7.79
  },
  {
    "id": "KL-Rahul-2025",
    "playerName": "KL Rahul",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 546,
    "strikeRate": 148,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AK-Markram-2025",
    "playerName": "AK Markram",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 445,
    "strikeRate": 145.4,
    "wickets": 4,
    "economy": 9
  },
  {
    "id": "Priyansh-Arya-2025",
    "playerName": "Priyansh Arya",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 545,
    "strikeRate": 175.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JR-Hazlewood-2022",
    "playerName": "JR Hazlewood",
    "season": 2022,
    "role": "BOWLER",
    "runs": 18,
    "strikeRate": 66.7,
    "wickets": 21,
    "economy": 7.89
  },
  {
    "id": "A-Mishra-2011",
    "playerName": "A Mishra",
    "season": 2011,
    "role": "BOWLER",
    "runs": 68,
    "strikeRate": 130.8,
    "wickets": 19,
    "economy": 6.83
  },
  {
    "id": "HH-Pandya-2024",
    "playerName": "HH Pandya",
    "season": 2024,
    "role": "FINISHER",
    "runs": 216,
    "strikeRate": 140.3,
    "wickets": 13,
    "economy": 10.33
  },
  {
    "id": "BJ-Hodge-2009",
    "playerName": "BJ Hodge",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 365,
    "strikeRate": 115.1,
    "wickets": 7,
    "economy": 8.15
  },
  {
    "id": "AM-Rahane-2015",
    "playerName": "AM Rahane",
    "season": 2015,
    "role": "TOP_ORDER",
    "runs": 540,
    "strikeRate": 127.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LMP-Simmons-2015",
    "playerName": "LMP Simmons",
    "season": 2015,
    "role": "TOP_ORDER",
    "runs": 540,
    "strikeRate": 118.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Mishra-2010",
    "playerName": "A Mishra",
    "season": 2010,
    "role": "BOWLER",
    "runs": 39,
    "strikeRate": 72.2,
    "wickets": 20,
    "economy": 6.77
  },
  {
    "id": "JC-Buttler-2025",
    "playerName": "JC Buttler",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 538,
    "strikeRate": 159.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JA-Morkel-2011",
    "playerName": "JA Morkel",
    "season": 2011,
    "role": "BOWLER",
    "runs": 138,
    "strikeRate": 127.8,
    "wickets": 16,
    "economy": 8.36
  },
  {
    "id": "RG-Sharma-2013",
    "playerName": "RG Sharma",
    "season": 2013,
    "role": "TOP_ORDER",
    "runs": 538,
    "strikeRate": 129.6,
    "wickets": 0,
    "economy": 4
  },
  {
    "id": "UT-Yadav-2013",
    "playerName": "UT Yadav",
    "season": 2013,
    "role": "BOWLER",
    "runs": 38,
    "strikeRate": 97.4,
    "wickets": 20,
    "economy": 8.67
  },
  {
    "id": "JJ-Bumrah-2024",
    "playerName": "JJ Bumrah",
    "season": 2024,
    "role": "BOWLER",
    "runs": 12,
    "strikeRate": 100,
    "wickets": 21,
    "economy": 6.24
  },
  {
    "id": "Z-Khan-2012",
    "playerName": "Z Khan",
    "season": 2012,
    "role": "BOWLER",
    "runs": 12,
    "strikeRate": 70.6,
    "wickets": 21,
    "economy": 7.59
  },
  {
    "id": "AR-Patel-2014",
    "playerName": "AR Patel",
    "season": 2014,
    "role": "BOWLER",
    "runs": 62,
    "strikeRate": 101.6,
    "wickets": 19,
    "economy": 6.31
  },
  {
    "id": "SM-Curran-2020",
    "playerName": "SM Curran",
    "season": 2020,
    "role": "FINISHER",
    "runs": 186,
    "strikeRate": 128.3,
    "wickets": 14,
    "economy": 7.88
  },
  {
    "id": "JH-Kallis-2009",
    "playerName": "JH Kallis",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 361,
    "strikeRate": 103.4,
    "wickets": 7,
    "economy": 7.52
  },
  {
    "id": "Azhar-Mahmood-2012",
    "playerName": "Azhar Mahmood",
    "season": 2012,
    "role": "FINISHER",
    "runs": 186,
    "strikeRate": 128.3,
    "wickets": 14,
    "economy": 7.49
  },
  {
    "id": "Rashid-Khan-2020",
    "playerName": "Rashid Khan",
    "season": 2020,
    "role": "BOWLER",
    "runs": 35,
    "strikeRate": 109.4,
    "wickets": 20,
    "economy": 5.45
  },
  {
    "id": "Abhishek-Sharma-2024",
    "playerName": "Abhishek Sharma",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 484,
    "strikeRate": 195.2,
    "wickets": 2,
    "economy": 7.29
  },
  {
    "id": "KH-Pandya-2025",
    "playerName": "KH Pandya",
    "season": 2025,
    "role": "BOWLER",
    "runs": 109,
    "strikeRate": 122.5,
    "wickets": 17,
    "economy": 8.06
  },
  {
    "id": "G-Gambhir-2008",
    "playerName": "G Gambhir",
    "season": 2008,
    "role": "TOP_ORDER",
    "runs": 534,
    "strikeRate": 135.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MP-Stoinis-2023",
    "playerName": "MP Stoinis",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 408,
    "strikeRate": 145.2,
    "wickets": 5,
    "economy": 8.78
  },
  {
    "id": "MM-Ali-2021",
    "playerName": "MM Ali",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 357,
    "strikeRate": 132.2,
    "wickets": 7,
    "economy": 6.35
  },
  {
    "id": "MC-Henriques-2016",
    "playerName": "MC Henriques",
    "season": 2016,
    "role": "FINISHER",
    "runs": 182,
    "strikeRate": 112.3,
    "wickets": 14,
    "economy": 7.89
  },
  {
    "id": "M-Prasidh-Krishna-2022",
    "playerName": "M Prasidh Krishna",
    "season": 2022,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 50,
    "wickets": 21,
    "economy": 7.83
  },
  {
    "id": "SV-Samson-2024",
    "playerName": "SV Samson",
    "season": 2024,
    "role": "TOP_ORDER",
    "runs": 531,
    "strikeRate": 144.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "V-Kohli-2018",
    "playerName": "V Kohli",
    "season": 2018,
    "role": "TOP_ORDER",
    "runs": 530,
    "strikeRate": 137.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Tewatia-2020",
    "playerName": "R Tewatia",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 255,
    "strikeRate": 136.4,
    "wickets": 11,
    "economy": 6.86
  },
  {
    "id": "SR-Watson-2011",
    "playerName": "SR Watson",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 330,
    "strikeRate": 128.9,
    "wickets": 8,
    "economy": 6.58
  },
  {
    "id": "V-Kohli-2015",
    "playerName": "V Kohli",
    "season": 2015,
    "role": "TOP_ORDER",
    "runs": 505,
    "strikeRate": 127.8,
    "wickets": 1,
    "economy": 5.45
  },
  {
    "id": "Q-de-Kock-2019",
    "playerName": "Q de Kock",
    "season": 2019,
    "role": "TOP_ORDER",
    "runs": 529,
    "strikeRate": 130.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Warner-2014",
    "playerName": "DA Warner",
    "season": 2014,
    "role": "TOP_ORDER",
    "runs": 528,
    "strikeRate": 136.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Sai-Sudharsan-2024",
    "playerName": "B Sai Sudharsan",
    "season": 2024,
    "role": "TOP_ORDER",
    "runs": 527,
    "strikeRate": 135.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Ashwin-2011",
    "playerName": "R Ashwin",
    "season": 2011,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 33.3,
    "wickets": 21,
    "economy": 6.2
  },
  {
    "id": "DS-Kulkarni-2016",
    "playerName": "DS Kulkarni",
    "season": 2016,
    "role": "BOWLER",
    "runs": 27,
    "strikeRate": 168.8,
    "wickets": 20,
    "economy": 7.37
  },
  {
    "id": "PP-Ojha-2009",
    "playerName": "PP Ojha",
    "season": 2009,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 14.3,
    "wickets": 21,
    "economy": 6.59
  },
  {
    "id": "Yuvraj-Singh-2014",
    "playerName": "Yuvraj Singh",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 376,
    "strikeRate": 130.6,
    "wickets": 6,
    "economy": 8.19
  },
  {
    "id": "B-Kumar-2014",
    "playerName": "B Kumar",
    "season": 2014,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 21,
    "economy": 6.64
  },
  {
    "id": "JJ-Bumrah-2025",
    "playerName": "JJ Bumrah",
    "season": 2025,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 21,
    "economy": 6.69
  },
  {
    "id": "SL-Malinga-2009",
    "playerName": "SL Malinga",
    "season": 2009,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 21,
    "economy": 6.15
  },
  {
    "id": "MM-Sharma-2013",
    "playerName": "MM Sharma",
    "season": 2013,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 21,
    "economy": 6.31
  },
  {
    "id": "Mohammed-Shami-2022",
    "playerName": "Mohammed Shami",
    "season": 2022,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 21,
    "economy": 7.79
  },
  {
    "id": "CV-Varun-2024",
    "playerName": "CV Varun",
    "season": 2024,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 21,
    "economy": 7.98
  },
  {
    "id": "SP-Narine-2017",
    "playerName": "SP Narine",
    "season": 2017,
    "role": "FINISHER",
    "runs": 224,
    "strikeRate": 165.9,
    "wickets": 12,
    "economy": 6.83
  },
  {
    "id": "N-Pooran-2025",
    "playerName": "N Pooran",
    "season": 2025,
    "role": "TOP_ORDER",
    "runs": 524,
    "strikeRate": 180.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SC-Ganguly-2008",
    "playerName": "SC Ganguly",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 349,
    "strikeRate": 107.7,
    "wickets": 7,
    "economy": 6.55
  },
  {
    "id": "DR-Smith-2016",
    "playerName": "DR Smith",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 324,
    "strikeRate": 143.4,
    "wickets": 8,
    "economy": 8.18
  },
  {
    "id": "S-Dhawan-2019",
    "playerName": "S Dhawan",
    "season": 2019,
    "role": "TOP_ORDER",
    "runs": 521,
    "strikeRate": 133.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SN-Thakur-2022",
    "playerName": "SN Thakur",
    "season": 2022,
    "role": "BOWLER",
    "runs": 120,
    "strikeRate": 133.3,
    "wickets": 16,
    "economy": 9.24
  },
  {
    "id": "KL-Rahul-2024",
    "playerName": "KL Rahul",
    "season": 2024,
    "role": "TOP_ORDER",
    "runs": 520,
    "strikeRate": 130.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Iyer-2020",
    "playerName": "SS Iyer",
    "season": 2020,
    "role": "TOP_ORDER",
    "runs": 519,
    "strikeRate": 119.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Kumar-2023",
    "playerName": "B Kumar",
    "season": 2023,
    "role": "BOWLER",
    "runs": 42,
    "strikeRate": 85.7,
    "wickets": 19,
    "economy": 8.13
  },
  {
    "id": "MJ-McClenaghan-2017",
    "playerName": "MJ McClenaghan",
    "season": 2017,
    "role": "BOWLER",
    "runs": 16,
    "strikeRate": 100,
    "wickets": 20,
    "economy": 8.9
  },
  {
    "id": "Ishan-Kishan-2020",
    "playerName": "Ishan Kishan",
    "season": 2020,
    "role": "TOP_ORDER",
    "runs": 516,
    "strikeRate": 142.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Ashwin-2022",
    "playerName": "R Ashwin",
    "season": 2022,
    "role": "FINISHER",
    "runs": 191,
    "strikeRate": 136.4,
    "wickets": 13,
    "economy": 7.25
  },
  {
    "id": "DA-Warner-2023",
    "playerName": "DA Warner",
    "season": 2023,
    "role": "TOP_ORDER",
    "runs": 516,
    "strikeRate": 127.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammed-Shami-2021",
    "playerName": "Mohammed Shami",
    "season": 2021,
    "role": "BOWLER",
    "runs": 13,
    "strikeRate": 76.5,
    "wickets": 20,
    "economy": 7.43
  },
  {
    "id": "MP-Stoinis-2024",
    "playerName": "MP Stoinis",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 388,
    "strikeRate": 142.6,
    "wickets": 5,
    "economy": 8.76
  },
  {
    "id": "AB-de-Villiers-2015",
    "playerName": "AB de Villiers",
    "season": 2015,
    "role": "TOP_ORDER",
    "runs": 513,
    "strikeRate": 169.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Yadav-2018",
    "playerName": "SA Yadav",
    "season": 2018,
    "role": "TOP_ORDER",
    "runs": 512,
    "strikeRate": 130.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Narine-2021",
    "playerName": "SP Narine",
    "season": 2021,
    "role": "BOWLER",
    "runs": 62,
    "strikeRate": 121.6,
    "wickets": 18,
    "economy": 6.44
  },
  {
    "id": "AR-Patel-2024",
    "playerName": "AR Patel",
    "season": 2024,
    "role": "FINISHER",
    "runs": 235,
    "strikeRate": 128.4,
    "wickets": 11,
    "economy": 7.7
  },
  {
    "id": "KD-Karthik-2013",
    "playerName": "KD Karthik",
    "season": 2013,
    "role": "TOP_ORDER",
    "runs": 510,
    "strikeRate": 120.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Starc-2014",
    "playerName": "MA Starc",
    "season": 2014,
    "role": "BOWLER",
    "runs": 85,
    "strikeRate": 101.2,
    "wickets": 17,
    "economy": 7.39
  },
  {
    "id": "Rashid-Khan-2019",
    "playerName": "Rashid Khan",
    "season": 2019,
    "role": "BOWLER",
    "runs": 34,
    "strikeRate": 130.8,
    "wickets": 19,
    "economy": 6.47
  },
  {
    "id": "MA-Starc-2024",
    "playerName": "MA Starc",
    "season": 2024,
    "role": "BOWLER",
    "runs": 9,
    "strikeRate": 81.8,
    "wickets": 20,
    "economy": 10.11
  },
  {
    "id": "Q-de-Kock-2022",
    "playerName": "Q de Kock",
    "season": 2022,
    "role": "TOP_ORDER",
    "runs": 508,
    "strikeRate": 145.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Jadeja-2011",
    "playerName": "RA Jadeja",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 283,
    "strikeRate": 120.9,
    "wickets": 9,
    "economy": 7.06
  },
  {
    "id": "Q-de-Kock-2020",
    "playerName": "Q de Kock",
    "season": 2020,
    "role": "TOP_ORDER",
    "runs": 506,
    "strikeRate": 137.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Morris-2017",
    "playerName": "CH Morris",
    "season": 2017,
    "role": "FINISHER",
    "runs": 154,
    "strikeRate": 158.8,
    "wickets": 14,
    "economy": 7.65
  },
  {
    "id": "Arshdeep-Singh-2024",
    "playerName": "Arshdeep Singh",
    "season": 2024,
    "role": "BOWLER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 20,
    "economy": 9.46
  },
  {
    "id": "SE-Marsh-2011",
    "playerName": "SE Marsh",
    "season": 2011,
    "role": "TOP_ORDER",
    "runs": 504,
    "strikeRate": 144.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "UT-Yadav-2018",
    "playerName": "UT Yadav",
    "season": 2018,
    "role": "BOWLER",
    "runs": 3,
    "strikeRate": 25,
    "wickets": 20,
    "economy": 7.69
  },
  {
    "id": "Harbhajan-Singh-2011",
    "playerName": "Harbhajan Singh",
    "season": 2011,
    "role": "BOWLER",
    "runs": 103,
    "strikeRate": 139.2,
    "wickets": 16,
    "economy": 6.82
  },
  {
    "id": "CV-Varun-2021",
    "playerName": "CV Varun",
    "season": 2021,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 20,
    "economy": 6.58
  },
  {
    "id": "Arshdeep-Singh-2021",
    "playerName": "Arshdeep Singh",
    "season": 2021,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 20,
    "economy": 7.94
  },
  {
    "id": "R-Vinay-Kumar-2010",
    "playerName": "R Vinay Kumar",
    "season": 2010,
    "role": "BOWLER",
    "runs": 27,
    "strikeRate": 77.1,
    "wickets": 19,
    "economy": 8.54
  },
  {
    "id": "GJ-Maxwell-2022",
    "playerName": "GJ Maxwell",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 301,
    "strikeRate": 163.6,
    "wickets": 8,
    "economy": 6.82
  },
  {
    "id": "CV-Varun-2023",
    "playerName": "CV Varun",
    "season": 2023,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 9.1,
    "wickets": 20,
    "economy": 8.27
  },
  {
    "id": "Mohammed-Siraj-2023",
    "playerName": "Mohammed Siraj",
    "season": 2023,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 20,
    "economy": 7.2
  },
  {
    "id": "G-Gambhir-2016",
    "playerName": "G Gambhir",
    "season": 2016,
    "role": "TOP_ORDER",
    "runs": 501,
    "strikeRate": 118.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Dhawan-2016",
    "playerName": "S Dhawan",
    "season": 2016,
    "role": "TOP_ORDER",
    "runs": 501,
    "strikeRate": 114.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TA-Boult-2018",
    "playerName": "TA Boult",
    "season": 2018,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 20,
    "economy": 8.73
  },
  {
    "id": "KK-Ahmed-2019",
    "playerName": "KK Ahmed",
    "season": 2019,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 20,
    "economy": 7.89
  },
  {
    "id": "DE-Bollinger-2011",
    "playerName": "DE Bollinger",
    "season": 2011,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 20,
    "economy": 7
  },
  {
    "id": "T-Natarajan-2022",
    "playerName": "T Natarajan",
    "season": 2022,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 20,
    "economy": 9.04
  },
  {
    "id": "T-Natarajan-2024",
    "playerName": "T Natarajan",
    "season": 2024,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 20,
    "economy": 8.48
  },
  {
    "id": "Harshit-Rana-2024",
    "playerName": "Harshit Rana",
    "season": 2024,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 20,
    "economy": 8.75
  },
  {
    "id": "DP-Nannes-2009",
    "playerName": "DP Nannes",
    "season": 2009,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 20,
    "economy": 7.2
  },
  {
    "id": "N-Pooran-2024",
    "playerName": "N Pooran",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 499,
    "strikeRate": 168.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "G-Gambhir-2017",
    "playerName": "G Gambhir",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 498,
    "strikeRate": 123,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KD-Karthik-2018",
    "playerName": "KD Karthik",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 498,
    "strikeRate": 142.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Dhawan-2018",
    "playerName": "S Dhawan",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 497,
    "strikeRate": 131.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Avesh-Khan-2022",
    "playerName": "Avesh Khan",
    "season": 2022,
    "role": "BOWLER",
    "runs": 22,
    "strikeRate": 169.2,
    "wickets": 19,
    "economy": 8.46
  },
  {
    "id": "PJ-Cummins-2025",
    "playerName": "PJ Cummins",
    "season": 2025,
    "role": "BOWLER",
    "runs": 97,
    "strikeRate": 167.2,
    "wickets": 16,
    "economy": 8.85
  },
  {
    "id": "R-Parag-2025",
    "playerName": "R Parag",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 397,
    "strikeRate": 160.7,
    "wickets": 4,
    "economy": 8.02
  },
  {
    "id": "CR-Woakes-2017",
    "playerName": "CR Woakes",
    "season": 2017,
    "role": "BOWLER",
    "runs": 46,
    "strikeRate": 97.9,
    "wickets": 18,
    "economy": 8.48
  },
  {
    "id": "AC-Gilchrist-2009",
    "playerName": "AC Gilchrist",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 495,
    "strikeRate": 146.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "V-Sehwag-2012",
    "playerName": "V Sehwag",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 495,
    "strikeRate": 156.2,
    "wickets": 0,
    "economy": 11.25
  },
  {
    "id": "RR-Pant-2019",
    "playerName": "RR Pant",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 494,
    "strikeRate": 158.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HV-Patel-2015",
    "playerName": "HV Patel",
    "season": 2015,
    "role": "BOWLER",
    "runs": 19,
    "strikeRate": 135.7,
    "wickets": 19,
    "economy": 7.48
  },
  {
    "id": "KH-Pandya-2017",
    "playerName": "KH Pandya",
    "season": 2017,
    "role": "FINISHER",
    "runs": 243,
    "strikeRate": 130.6,
    "wickets": 10,
    "economy": 6.83
  },
  {
    "id": "SC-Ganguly-2010",
    "playerName": "SC Ganguly",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 493,
    "strikeRate": 112,
    "wickets": 0,
    "economy": 10.32
  },
  {
    "id": "R-Ashwin-2012",
    "playerName": "R Ashwin",
    "season": 2012,
    "role": "BOWLER",
    "runs": 18,
    "strikeRate": 120,
    "wickets": 19,
    "economy": 6.55
  },
  {
    "id": "CH-Morris-2021",
    "playerName": "CH Morris",
    "season": 2021,
    "role": "BOWLER",
    "runs": 67,
    "strikeRate": 126.4,
    "wickets": 17,
    "economy": 9.07
  },
  {
    "id": "MEK-Hussey-2011",
    "playerName": "MEK Hussey",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 492,
    "strikeRate": 116.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Kumar-2015",
    "playerName": "B Kumar",
    "season": 2015,
    "role": "BOWLER",
    "runs": 17,
    "strikeRate": 170,
    "wickets": 19,
    "economy": 7.78
  },
  {
    "id": "CA-Lynn-2018",
    "playerName": "CA Lynn",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 491,
    "strikeRate": 128.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Raina-2012",
    "playerName": "SK Raina",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 441,
    "strikeRate": 131.6,
    "wickets": 2,
    "economy": 7.48
  },
  {
    "id": "RA-Jadeja-2012",
    "playerName": "RA Jadeja",
    "season": 2012,
    "role": "FINISHER",
    "runs": 191,
    "strikeRate": 124.8,
    "wickets": 12,
    "economy": 7.72
  },
  {
    "id": "CH-Gayle-2015",
    "playerName": "CH Gayle",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 491,
    "strikeRate": 136.8,
    "wickets": 0,
    "economy": 7.38
  },
  {
    "id": "CH-Gayle-2019",
    "playerName": "CH Gayle",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 490,
    "strikeRate": 145,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TA-Boult-2022",
    "playerName": "TA Boult",
    "season": 2022,
    "role": "BOWLER",
    "runs": 40,
    "strikeRate": 133.3,
    "wickets": 18,
    "economy": 7.77
  },
  {
    "id": "Yuvraj-Singh-2009",
    "playerName": "Yuvraj Singh",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 340,
    "strikeRate": 107.3,
    "wickets": 6,
    "economy": 7.04
  },
  {
    "id": "RG-Sharma-2016",
    "playerName": "RG Sharma",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 489,
    "strikeRate": 131.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Rana-2023",
    "playerName": "N Rana",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 413,
    "strikeRate": 136.3,
    "wickets": 3,
    "economy": 8.33
  },
  {
    "id": "AM-Rahane-2013",
    "playerName": "AM Rahane",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 488,
    "strikeRate": 103.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "H-Klaasen-2025",
    "playerName": "H Klaasen",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 487,
    "strikeRate": 165.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GJ-Maxwell-2017",
    "playerName": "GJ Maxwell",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 310,
    "strikeRate": 166.7,
    "wickets": 7,
    "economy": 6.57
  },
  {
    "id": "JO-Holder-2021",
    "playerName": "JO Holder",
    "season": 2021,
    "role": "BOWLER",
    "runs": 85,
    "strikeRate": 116.4,
    "wickets": 16,
    "economy": 7.33
  },
  {
    "id": "YS-Chahal-2021",
    "playerName": "YS Chahal",
    "season": 2021,
    "role": "BOWLER",
    "runs": 10,
    "strikeRate": 37,
    "wickets": 19,
    "economy": 7.08
  },
  {
    "id": "MS-Gony-2008",
    "playerName": "MS Gony",
    "season": 2008,
    "role": "BOWLER",
    "runs": 35,
    "strikeRate": 140,
    "wickets": 18,
    "economy": 7.37
  },
  {
    "id": "BJ-Hodge-2011",
    "playerName": "BJ Hodge",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 285,
    "strikeRate": 116.3,
    "wickets": 8,
    "economy": 6.9
  },
  {
    "id": "JP-Duminy-2014",
    "playerName": "JP Duminy",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 410,
    "strikeRate": 131.8,
    "wickets": 3,
    "economy": 7.12
  },
  {
    "id": "SV-Samson-2021",
    "playerName": "SV Samson",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 484,
    "strikeRate": 130.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MJ-McClenaghan-2016",
    "playerName": "MJ McClenaghan",
    "season": 2016,
    "role": "BOWLER",
    "runs": 34,
    "strikeRate": 147.8,
    "wickets": 18,
    "economy": 8.11
  },
  {
    "id": "KH-Pandya-2019",
    "playerName": "KH Pandya",
    "season": 2019,
    "role": "FINISHER",
    "runs": 183,
    "strikeRate": 115.8,
    "wickets": 12,
    "economy": 7.17
  },
  {
    "id": "Shubman-Gill-2022",
    "playerName": "Shubman Gill",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 483,
    "strikeRate": 129.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MM-Patel-2009",
    "playerName": "MM Patel",
    "season": 2009,
    "role": "BOWLER",
    "runs": 33,
    "strikeRate": 126.9,
    "wickets": 18,
    "economy": 6.74
  },
  {
    "id": "YK-Pathan-2010",
    "playerName": "YK Pathan",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 333,
    "strikeRate": 158.6,
    "wickets": 6,
    "economy": 7.12
  },
  {
    "id": "Sandeep-Sharma-2016",
    "playerName": "Sandeep Sharma",
    "season": 2016,
    "role": "BOWLER",
    "runs": 8,
    "strikeRate": 88.9,
    "wickets": 19,
    "economy": 7.26
  },
  {
    "id": "RG-Sharma-2015",
    "playerName": "RG Sharma",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 482,
    "strikeRate": 142.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Jadeja-2019",
    "playerName": "RA Jadeja",
    "season": 2019,
    "role": "BOWLER",
    "runs": 106,
    "strikeRate": 112.8,
    "wickets": 15,
    "economy": 6.39
  },
  {
    "id": "DA-Miller-2022",
    "playerName": "DA Miller",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 481,
    "strikeRate": 138.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Starc-2025",
    "playerName": "MA Starc",
    "season": 2025,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 54.5,
    "wickets": 19,
    "economy": 10.11
  },
  {
    "id": "V-Sehwag-2008",
    "playerName": "V Sehwag",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 406,
    "strikeRate": 177.3,
    "wickets": 3,
    "economy": 12
  },
  {
    "id": "A-Kumble-2010",
    "playerName": "A Kumble",
    "season": 2010,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 50,
    "wickets": 19,
    "economy": 6.51
  },
  {
    "id": "AJ-Finch-2013",
    "playerName": "AJ Finch",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 456,
    "strikeRate": 132.6,
    "wickets": 1,
    "economy": 12.25
  },
  {
    "id": "MG-Johnson-2014",
    "playerName": "MG Johnson",
    "season": 2014,
    "role": "BOWLER",
    "runs": 56,
    "strikeRate": 109.8,
    "wickets": 17,
    "economy": 7.94
  },
  {
    "id": "AB-de-Villiers-2018",
    "playerName": "AB de Villiers",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 480,
    "strikeRate": 171.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Yadav-2020",
    "playerName": "SA Yadav",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 480,
    "strikeRate": 141.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Sai-Kishore-2025",
    "playerName": "R Sai Kishore",
    "season": 2025,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 50,
    "wickets": 19,
    "economy": 9.07
  },
  {
    "id": "AM-Rahane-2016",
    "playerName": "AM Rahane",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 480,
    "strikeRate": 124,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Dhawan-2017",
    "playerName": "S Dhawan",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 479,
    "strikeRate": 125.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PP-Shaw-2021",
    "playerName": "PP Shaw",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 479,
    "strikeRate": 155.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "H-Klaasen-2024",
    "playerName": "H Klaasen",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 479,
    "strikeRate": 163.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CL-White-2012",
    "playerName": "CL White",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 479,
    "strikeRate": 146.5,
    "wickets": 0,
    "economy": 8.1
  },
  {
    "id": "T-Natarajan-2020",
    "playerName": "T Natarajan",
    "season": 2020,
    "role": "BOWLER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 19,
    "economy": 8.02
  },
  {
    "id": "Shubman-Gill-2021",
    "playerName": "Shubman Gill",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 478,
    "strikeRate": 115.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PJ-Cummins-2017",
    "playerName": "PJ Cummins",
    "season": 2017,
    "role": "BOWLER",
    "runs": 77,
    "strikeRate": 142.6,
    "wickets": 16,
    "economy": 8.16
  },
  {
    "id": "Sandeep-Sharma-2014",
    "playerName": "Sandeep Sharma",
    "season": 2014,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 19,
    "economy": 8.42
  },
  {
    "id": "DJ-Hooda-2022",
    "playerName": "DJ Hooda",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 451,
    "strikeRate": 132.6,
    "wickets": 1,
    "economy": 10.75
  },
  {
    "id": "Imran-Tahir-2017",
    "playerName": "Imran Tahir",
    "season": 2017,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 19,
    "economy": 7.76
  },
  {
    "id": "GJ-Maxwell-2023",
    "playerName": "GJ Maxwell",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 400,
    "strikeRate": 177.8,
    "wickets": 3,
    "economy": 8.91
  },
  {
    "id": "M-Jansen-2025",
    "playerName": "M Jansen",
    "season": 2025,
    "role": "BOWLER",
    "runs": 75,
    "strikeRate": 115.4,
    "wickets": 16,
    "economy": 8.96
  },
  {
    "id": "VG-Arora-2025",
    "playerName": "VG Arora",
    "season": 2025,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 19,
    "economy": 9.51
  },
  {
    "id": "S-Sreesanth-2008",
    "playerName": "S Sreesanth",
    "season": 2008,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 19,
    "economy": 8.15
  },
  {
    "id": "IK-Pathan-2011",
    "playerName": "IK Pathan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 150,
    "strikeRate": 102.7,
    "wickets": 13,
    "economy": 7.35
  },
  {
    "id": "R-Vinay-Kumar-2011",
    "playerName": "R Vinay Kumar",
    "season": 2011,
    "role": "BOWLER",
    "runs": 50,
    "strikeRate": 104.2,
    "wickets": 17,
    "economy": 7.45
  },
  {
    "id": "YS-Chahal-2024",
    "playerName": "YS Chahal",
    "season": 2024,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 19,
    "economy": 9.08
  },
  {
    "id": "Mustafizur-Rahman-2016",
    "playerName": "Mustafizur Rahman",
    "season": 2016,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 19,
    "economy": 6.81
  },
  {
    "id": "RK-Singh-2023",
    "playerName": "RK Singh",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 474,
    "strikeRate": 142.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Symonds-2009",
    "playerName": "A Symonds",
    "season": 2009,
    "role": "FINISHER",
    "runs": 249,
    "strikeRate": 145.6,
    "wickets": 9,
    "economy": 6.61
  },
  {
    "id": "Z-Khan-2010",
    "playerName": "Z Khan",
    "season": 2010,
    "role": "BOWLER",
    "runs": 24,
    "strikeRate": 184.6,
    "wickets": 18,
    "economy": 7.89
  },
  {
    "id": "D-Padikkal-2020",
    "playerName": "D Padikkal",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 473,
    "strikeRate": 118.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SPD-Smith-2017",
    "playerName": "SPD Smith",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 472,
    "strikeRate": 118,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SM-Pollock-2008",
    "playerName": "SM Pollock",
    "season": 2008,
    "role": "FINISHER",
    "runs": 147,
    "strikeRate": 126.7,
    "wickets": 13,
    "economy": 6.58
  },
  {
    "id": "JP-Duminy-2009",
    "playerName": "JP Duminy",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 372,
    "strikeRate": 111.4,
    "wickets": 4,
    "economy": 5.38
  },
  {
    "id": "JA-Morkel-2009",
    "playerName": "JA Morkel",
    "season": 2009,
    "role": "BOWLER",
    "runs": 97,
    "strikeRate": 132.9,
    "wickets": 15,
    "economy": 7.95
  },
  {
    "id": "V-Kohli-2020",
    "playerName": "V Kohli",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 471,
    "strikeRate": 117.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Raina-2008",
    "playerName": "SK Raina",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 421,
    "strikeRate": 138.5,
    "wickets": 2,
    "economy": 9
  },
  {
    "id": "KA-Pollard-2011",
    "playerName": "KA Pollard",
    "season": 2011,
    "role": "FINISHER",
    "runs": 146,
    "strikeRate": 103.5,
    "wickets": 13,
    "economy": 8.16
  },
  {
    "id": "DJ-Hussey-2012",
    "playerName": "DJ Hussey",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 396,
    "strikeRate": 126.5,
    "wickets": 3,
    "economy": 7.31
  },
  {
    "id": "R-Dravid-2013",
    "playerName": "R Dravid",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 471,
    "strikeRate": 108.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Ashwin-2014",
    "playerName": "R Ashwin",
    "season": 2014,
    "role": "BOWLER",
    "runs": 45,
    "strikeRate": 93.8,
    "wickets": 17,
    "economy": 7.06
  },
  {
    "id": "DW-Steyn-2012",
    "playerName": "DW Steyn",
    "season": 2012,
    "role": "BOWLER",
    "runs": 19,
    "strikeRate": 90.5,
    "wickets": 18,
    "economy": 6.02
  },
  {
    "id": "F-du-Plessis-2022",
    "playerName": "F du Plessis",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 468,
    "strikeRate": 124.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "STR-Binny-2013",
    "playerName": "STR Binny",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 293,
    "strikeRate": 143.6,
    "wickets": 7,
    "economy": 6.56
  },
  {
    "id": "DR-Smith-2013",
    "playerName": "DR Smith",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 418,
    "strikeRate": 119.1,
    "wickets": 2,
    "economy": 11.06
  },
  {
    "id": "SK-Raina-2017",
    "playerName": "SK Raina",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 442,
    "strikeRate": 142.6,
    "wickets": 1,
    "economy": 8.5
  },
  {
    "id": "SS-Iyer-2019",
    "playerName": "SS Iyer",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 467,
    "strikeRate": 117,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Ashwin-2019",
    "playerName": "R Ashwin",
    "season": 2019,
    "role": "BOWLER",
    "runs": 42,
    "strikeRate": 150,
    "wickets": 17,
    "economy": 7.02
  },
  {
    "id": "RA-Jadeja-2024",
    "playerName": "RA Jadeja",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 267,
    "strikeRate": 139.8,
    "wickets": 8,
    "economy": 7.81
  },
  {
    "id": "KV-Sharma-2014",
    "playerName": "KV Sharma",
    "season": 2014,
    "role": "BOWLER",
    "runs": 42,
    "strikeRate": 140,
    "wickets": 17,
    "economy": 7.68
  },
  {
    "id": "P-Kumar-2009",
    "playerName": "P Kumar",
    "season": 2009,
    "role": "BOWLER",
    "runs": 65,
    "strikeRate": 141.3,
    "wickets": 16,
    "economy": 7.71
  },
  {
    "id": "AB-de-Villiers-2009",
    "playerName": "AB de Villiers",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 465,
    "strikeRate": 129.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Iqbal-Abdulla-2011",
    "playerName": "Iqbal Abdulla",
    "season": 2011,
    "role": "BOWLER",
    "runs": 15,
    "strikeRate": 125,
    "wickets": 18,
    "economy": 6.16
  },
  {
    "id": "DT-Christian-2011",
    "playerName": "DT Christian",
    "season": 2011,
    "role": "FINISHER",
    "runs": 190,
    "strikeRate": 118,
    "wickets": 11,
    "economy": 7.36
  },
  {
    "id": "V-Kohli-2019",
    "playerName": "V Kohli",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 464,
    "strikeRate": 139.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Kumar-2025",
    "playerName": "B Kumar",
    "season": 2025,
    "role": "BOWLER",
    "runs": 14,
    "strikeRate": 53.8,
    "wickets": 18,
    "economy": 9.25
  },
  {
    "id": "MJ-McClenaghan-2015",
    "playerName": "MJ McClenaghan",
    "season": 2015,
    "role": "BOWLER",
    "runs": 13,
    "strikeRate": 216.7,
    "wickets": 18,
    "economy": 7.77
  },
  {
    "id": "Kuldeep-Yadav-2018",
    "playerName": "Kuldeep Yadav",
    "season": 2018,
    "role": "BOWLER",
    "runs": 12,
    "strikeRate": 48,
    "wickets": 18,
    "economy": 8.13
  },
  {
    "id": "R-Dravid-2012",
    "playerName": "R Dravid",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 462,
    "strikeRate": 109,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Rashid-Khan-2017",
    "playerName": "Rashid Khan",
    "season": 2017,
    "role": "BOWLER",
    "runs": 11,
    "strikeRate": 122.2,
    "wickets": 18,
    "economy": 6.73
  },
  {
    "id": "MS-Dhoni-2013",
    "playerName": "MS Dhoni",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 461,
    "strikeRate": 154.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "UT-Yadav-2017",
    "playerName": "UT Yadav",
    "season": 2017,
    "role": "BOWLER",
    "runs": 10,
    "strikeRate": 76.9,
    "wickets": 18,
    "economy": 8.53
  },
  {
    "id": "AB-de-Villiers-2020",
    "playerName": "AB de Villiers",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 460,
    "strikeRate": 155.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Dhawan-2022",
    "playerName": "S Dhawan",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 460,
    "strikeRate": 116.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Bhatia-2012",
    "playerName": "R Bhatia",
    "season": 2012,
    "role": "BOWLER",
    "runs": 35,
    "strikeRate": 116.7,
    "wickets": 17,
    "economy": 7.43
  },
  {
    "id": "AB-Dinda-2013",
    "playerName": "AB Dinda",
    "season": 2013,
    "role": "BOWLER",
    "runs": 9,
    "strikeRate": 81.8,
    "wickets": 18,
    "economy": 9.2
  },
  {
    "id": "AD-Russell-2021",
    "playerName": "AD Russell",
    "season": 2021,
    "role": "FINISHER",
    "runs": 183,
    "strikeRate": 144.1,
    "wickets": 11,
    "economy": 9.3
  },
  {
    "id": "Mustafizur-Rahman-2021",
    "playerName": "Mustafizur Rahman",
    "season": 2021,
    "role": "BOWLER",
    "runs": 8,
    "strikeRate": 57.1,
    "wickets": 18,
    "economy": 8.22
  },
  {
    "id": "KH-Pandya-2022",
    "playerName": "KH Pandya",
    "season": 2022,
    "role": "FINISHER",
    "runs": 183,
    "strikeRate": 122,
    "wickets": 11,
    "economy": 6.96
  },
  {
    "id": "SV-Samson-2022",
    "playerName": "SV Samson",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 458,
    "strikeRate": 142.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JO-Holder-2022",
    "playerName": "JO Holder",
    "season": 2022,
    "role": "BOWLER",
    "runs": 58,
    "strikeRate": 126.1,
    "wickets": 16,
    "economy": 9
  },
  {
    "id": "SK-Warne-2009",
    "playerName": "SK Warne",
    "season": 2009,
    "role": "FINISHER",
    "runs": 108,
    "strikeRate": 91.5,
    "wickets": 14,
    "economy": 7.07
  },
  {
    "id": "M-Vijay-2010",
    "playerName": "M Vijay",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 458,
    "strikeRate": 150.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JJ-Bumrah-2016",
    "playerName": "JJ Bumrah",
    "season": 2016,
    "role": "BOWLER",
    "runs": 8,
    "strikeRate": 72.7,
    "wickets": 18,
    "economy": 7.7
  },
  {
    "id": "R-Dhawan-2014",
    "playerName": "R Dhawan",
    "season": 2014,
    "role": "BOWLER",
    "runs": 82,
    "strikeRate": 109.3,
    "wickets": 15,
    "economy": 7.61
  },
  {
    "id": "YS-Chahal-2019",
    "playerName": "YS Chahal",
    "season": 2019,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 37.5,
    "wickets": 18,
    "economy": 7.68
  },
  {
    "id": "PJ-Sangwan-2009",
    "playerName": "PJ Sangwan",
    "season": 2009,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 60,
    "wickets": 18,
    "economy": 7.56
  },
  {
    "id": "RJ-Harris-2011",
    "playerName": "RJ Harris",
    "season": 2011,
    "role": "BOWLER",
    "runs": 31,
    "strikeRate": 79.5,
    "wickets": 17,
    "economy": 8.16
  },
  {
    "id": "MS-Dhoni-2018",
    "playerName": "MS Dhoni",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 455,
    "strikeRate": 141.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "UT-Yadav-2022",
    "playerName": "UT Yadav",
    "season": 2022,
    "role": "BOWLER",
    "runs": 55,
    "strikeRate": 134.1,
    "wickets": 16,
    "economy": 7.15
  },
  {
    "id": "V-Sehwag-2014",
    "playerName": "V Sehwag",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 455,
    "strikeRate": 136.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ishan-Kishan-2023",
    "playerName": "Ishan Kishan",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 454,
    "strikeRate": 139.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RG-Sharma-2010",
    "playerName": "RG Sharma",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 404,
    "strikeRate": 130.3,
    "wickets": 2,
    "economy": 8.02
  },
  {
    "id": "P-Awana-2012",
    "playerName": "P Awana",
    "season": 2012,
    "role": "BOWLER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 18,
    "economy": 7.74
  },
  {
    "id": "T-Stubbs-2024",
    "playerName": "T Stubbs",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 378,
    "strikeRate": 185.3,
    "wickets": 3,
    "economy": 6.92
  },
  {
    "id": "DJ-Bravo-2008",
    "playerName": "DJ Bravo",
    "season": 2008,
    "role": "FINISHER",
    "runs": 178,
    "strikeRate": 129.9,
    "wickets": 11,
    "economy": 7.92
  },
  {
    "id": "M-Vijay-2016",
    "playerName": "M Vijay",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 453,
    "strikeRate": 121.4,
    "wickets": 0,
    "economy": 6.86
  },
  {
    "id": "Arshdeep-Singh-2023",
    "playerName": "Arshdeep Singh",
    "season": 2023,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 18,
    "economy": 9.2
  },
  {
    "id": "RP-Singh-2008",
    "playerName": "RP Singh",
    "season": 2008,
    "role": "BOWLER",
    "runs": 27,
    "strikeRate": 108,
    "wickets": 17,
    "economy": 8.47
  },
  {
    "id": "PP-Ojha-2013",
    "playerName": "PP Ojha",
    "season": 2013,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 18,
    "economy": 7.38
  },
  {
    "id": "Harbhajan-Singh-2019",
    "playerName": "Harbhajan Singh",
    "season": 2019,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 18,
    "economy": 7.03
  },
  {
    "id": "CH-Morris-2015",
    "playerName": "CH Morris",
    "season": 2015,
    "role": "BOWLER",
    "runs": 76,
    "strikeRate": 161.7,
    "wickets": 15,
    "economy": 7.47
  },
  {
    "id": "TU-Deshpande-2024",
    "playerName": "TU Deshpande",
    "season": 2024,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 18,
    "economy": 8.42
  },
  {
    "id": "SL-Malinga-2019",
    "playerName": "SL Malinga",
    "season": 2019,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 18,
    "economy": 9.69
  },
  {
    "id": "F-du-Plessis-2020",
    "playerName": "F du Plessis",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 449,
    "strikeRate": 136.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Sharma-2011",
    "playerName": "R Sharma",
    "season": 2011,
    "role": "BOWLER",
    "runs": 24,
    "strikeRate": 104.3,
    "wickets": 17,
    "economy": 5.52
  },
  {
    "id": "DJG-Sammy-2013",
    "playerName": "DJG Sammy",
    "season": 2013,
    "role": "FINISHER",
    "runs": 174,
    "strikeRate": 127.9,
    "wickets": 11,
    "economy": 7.35
  },
  {
    "id": "SK-Raina-2015",
    "playerName": "SK Raina",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 374,
    "strikeRate": 117.2,
    "wickets": 3,
    "economy": 7.23
  },
  {
    "id": "DJ-Bravo-2022",
    "playerName": "DJ Bravo",
    "season": 2022,
    "role": "BOWLER",
    "runs": 23,
    "strikeRate": 88.5,
    "wickets": 17,
    "economy": 7.94
  },
  {
    "id": "H-Klaasen-2023",
    "playerName": "H Klaasen",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 448,
    "strikeRate": 171,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PP-Chawla-2011",
    "playerName": "PP Chawla",
    "season": 2011,
    "role": "BOWLER",
    "runs": 48,
    "strikeRate": 87.3,
    "wickets": 16,
    "economy": 8.06
  },
  {
    "id": "Kuldeep-Yadav-2024",
    "playerName": "Kuldeep Yadav",
    "season": 2024,
    "role": "BOWLER",
    "runs": 47,
    "strikeRate": 106.8,
    "wickets": 16,
    "economy": 8.45
  },
  {
    "id": "PJ-Cummins-2020",
    "playerName": "PJ Cummins",
    "season": 2020,
    "role": "FINISHER",
    "runs": 146,
    "strikeRate": 121.7,
    "wickets": 12,
    "economy": 7.93
  },
  {
    "id": "HH-Pandya-2023",
    "playerName": "HH Pandya",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 346,
    "strikeRate": 136.2,
    "wickets": 4,
    "economy": 9.27
  },
  {
    "id": "RR-Pant-2024",
    "playerName": "RR Pant",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 446,
    "strikeRate": 150.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HV-Patel-2025",
    "playerName": "HV Patel",
    "season": 2025,
    "role": "BOWLER",
    "runs": 21,
    "strikeRate": 77.8,
    "wickets": 17,
    "economy": 9.1
  },
  {
    "id": "DA-Miller-2014",
    "playerName": "DA Miller",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 446,
    "strikeRate": 145.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Raina-2018",
    "playerName": "SK Raina",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 445,
    "strikeRate": 125.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JM-Bairstow-2019",
    "playerName": "JM Bairstow",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 445,
    "strikeRate": 152.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "VR-Iyer-2021",
    "playerName": "VR Iyer",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 370,
    "strikeRate": 123.7,
    "wickets": 3,
    "economy": 7.89
  },
  {
    "id": "Ravi-Bishnoi-2023",
    "playerName": "Ravi Bishnoi",
    "season": 2023,
    "role": "BOWLER",
    "runs": 20,
    "strikeRate": 71.4,
    "wickets": 17,
    "economy": 7.58
  },
  {
    "id": "RA-Jadeja-2009",
    "playerName": "RA Jadeja",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 295,
    "strikeRate": 106.9,
    "wickets": 6,
    "economy": 6.5
  },
  {
    "id": "DPMD-Jayawardene-2010",
    "playerName": "DPMD Jayawardene",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 445,
    "strikeRate": 142.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Q-de-Kock-2016",
    "playerName": "Q de Kock",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 445,
    "strikeRate": 130.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MM-Ali-2022",
    "playerName": "MM Ali",
    "season": 2022,
    "role": "FINISHER",
    "runs": 244,
    "strikeRate": 133.3,
    "wickets": 8,
    "economy": 6.53
  },
  {
    "id": "AB-de-Villiers-2019",
    "playerName": "AB de Villiers",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 442,
    "strikeRate": 150.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Ashwin-2023",
    "playerName": "R Ashwin",
    "season": 2023,
    "role": "BOWLER",
    "runs": 67,
    "strikeRate": 121.8,
    "wickets": 15,
    "economy": 7.18
  },
  {
    "id": "V-Nigam-2025",
    "playerName": "V Nigam",
    "season": 2025,
    "role": "FINISHER",
    "runs": 142,
    "strikeRate": 173.2,
    "wickets": 12,
    "economy": 8.88
  },
  {
    "id": "SV-Samson-2018",
    "playerName": "SV Samson",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 441,
    "strikeRate": 135.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JO-Holder-2020",
    "playerName": "JO Holder",
    "season": 2020,
    "role": "BOWLER",
    "runs": 66,
    "strikeRate": 122.2,
    "wickets": 15,
    "economy": 8.15
  },
  {
    "id": "MA-Agarwal-2021",
    "playerName": "MA Agarwal",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 441,
    "strikeRate": 136.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GC-Smith-2008",
    "playerName": "GC Smith",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 441,
    "strikeRate": 117.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SN-Thakur-2018",
    "playerName": "SN Thakur",
    "season": 2018,
    "role": "BOWLER",
    "runs": 15,
    "strikeRate": 300,
    "wickets": 17,
    "economy": 8.81
  },
  {
    "id": "Shubman-Gill-2020",
    "playerName": "Shubman Gill",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 440,
    "strikeRate": 115.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AR-Patel-2021",
    "playerName": "AR Patel",
    "season": 2021,
    "role": "BOWLER",
    "runs": 40,
    "strikeRate": 76.9,
    "wickets": 16,
    "economy": 6.63
  },
  {
    "id": "VY-Mahesh-2008",
    "playerName": "VY Mahesh",
    "season": 2008,
    "role": "BOWLER",
    "runs": 15,
    "strikeRate": 53.6,
    "wickets": 17,
    "economy": 8.57
  },
  {
    "id": "Abhishek-Sharma-2025",
    "playerName": "Abhishek Sharma",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 439,
    "strikeRate": 181.4,
    "wickets": 0,
    "economy": 10.12
  },
  {
    "id": "CH-Morris-2013",
    "playerName": "CH Morris",
    "season": 2013,
    "role": "BOWLER",
    "runs": 14,
    "strikeRate": 82.4,
    "wickets": 17,
    "economy": 7.96
  },
  {
    "id": "SS-Iyer-2015",
    "playerName": "SS Iyer",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 439,
    "strikeRate": 121.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "F-du-Plessis-2024",
    "playerName": "F du Plessis",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 438,
    "strikeRate": 158.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DW-Steyn-2010",
    "playerName": "DW Steyn",
    "season": 2010,
    "role": "BOWLER",
    "runs": 13,
    "strikeRate": 76.5,
    "wickets": 17,
    "economy": 6.52
  },
  {
    "id": "AC-Gilchrist-2008",
    "playerName": "AC Gilchrist",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 436,
    "strikeRate": 132.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YK-Pathan-2009",
    "playerName": "YK Pathan",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 261,
    "strikeRate": 135.9,
    "wickets": 7,
    "economy": 6.73
  },
  {
    "id": "BB-McCullum-2015",
    "playerName": "BB McCullum",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 436,
    "strikeRate": 148.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AR-Patel-2016",
    "playerName": "AR Patel",
    "season": 2016,
    "role": "FINISHER",
    "runs": 111,
    "strikeRate": 137,
    "wickets": 13,
    "economy": 8.06
  },
  {
    "id": "JJ-Bumrah-2018",
    "playerName": "JJ Bumrah",
    "season": 2018,
    "role": "BOWLER",
    "runs": 10,
    "strikeRate": 90.9,
    "wickets": 17,
    "economy": 6.9
  },
  {
    "id": "CV-Varun-2020",
    "playerName": "CV Varun",
    "season": 2020,
    "role": "BOWLER",
    "runs": 10,
    "strikeRate": 62.5,
    "wickets": 17,
    "economy": 6.84
  },
  {
    "id": "PD-Salt-2024",
    "playerName": "PD Salt",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 435,
    "strikeRate": 174,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YBK-Jaiswal-2024",
    "playerName": "YBK Jaiswal",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 435,
    "strikeRate": 151,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Ashwin-2013",
    "playerName": "R Ashwin",
    "season": 2013,
    "role": "BOWLER",
    "runs": 35,
    "strikeRate": 70,
    "wickets": 16,
    "economy": 6.73
  },
  {
    "id": "VR-Aaron-2014",
    "playerName": "VR Aaron",
    "season": 2014,
    "role": "BOWLER",
    "runs": 35,
    "strikeRate": 102.9,
    "wickets": 16,
    "economy": 7.79
  },
  {
    "id": "M-Vijay-2011",
    "playerName": "M Vijay",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 434,
    "strikeRate": 124.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RV-Uthappa-2013",
    "playerName": "RV Uthappa",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 434,
    "strikeRate": 112.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Mathews-2010",
    "playerName": "AD Mathews",
    "season": 2010,
    "role": "FINISHER",
    "runs": 233,
    "strikeRate": 118.3,
    "wickets": 8,
    "economy": 8.27
  },
  {
    "id": "RG-Sharma-2012",
    "playerName": "RG Sharma",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 433,
    "strikeRate": 123.7,
    "wickets": 0,
    "economy": 16
  },
  {
    "id": "Sandeep-Sharma-2017",
    "playerName": "Sandeep Sharma",
    "season": 2017,
    "role": "BOWLER",
    "runs": 7,
    "strikeRate": 100,
    "wickets": 17,
    "economy": 8.04
  },
  {
    "id": "MA-Agarwal-2020",
    "playerName": "MA Agarwal",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 432,
    "strikeRate": 151.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Warner-2022",
    "playerName": "DA Warner",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 432,
    "strikeRate": 143.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harshit-Rana-2025",
    "playerName": "Harshit Rana",
    "season": 2025,
    "role": "BOWLER",
    "runs": 57,
    "strikeRate": 105.6,
    "wickets": 15,
    "economy": 9.93
  },
  {
    "id": "JA-Morkel-2012",
    "playerName": "JA Morkel",
    "season": 2012,
    "role": "FINISHER",
    "runs": 107,
    "strikeRate": 150.7,
    "wickets": 13,
    "economy": 7.47
  },
  {
    "id": "Mandeep-Singh-2012",
    "playerName": "Mandeep Singh",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 432,
    "strikeRate": 123.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Jadeja-2015",
    "playerName": "RA Jadeja",
    "season": 2015,
    "role": "FINISHER",
    "runs": 132,
    "strikeRate": 103.1,
    "wickets": 12,
    "economy": 7.77
  },
  {
    "id": "MM-Sharma-2016",
    "playerName": "MM Sharma",
    "season": 2016,
    "role": "BOWLER",
    "runs": 32,
    "strikeRate": 118.5,
    "wickets": 16,
    "economy": 8.09
  },
  {
    "id": "JP-Behrendorff-2023",
    "playerName": "JP Behrendorff",
    "season": 2023,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 66.7,
    "wickets": 17,
    "economy": 9.05
  },
  {
    "id": "V-Sehwag-2010",
    "playerName": "V Sehwag",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 356,
    "strikeRate": 156.8,
    "wickets": 3,
    "economy": 4.06
  },
  {
    "id": "RG-Sharma-2008",
    "playerName": "RG Sharma",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 404,
    "strikeRate": 146.4,
    "wickets": 1,
    "economy": 6.24
  },
  {
    "id": "MR-Marsh-2023",
    "playerName": "MR Marsh",
    "season": 2023,
    "role": "FINISHER",
    "runs": 128,
    "strikeRate": 132,
    "wickets": 12,
    "economy": 7.82
  },
  {
    "id": "IK-Pathan-2013",
    "playerName": "IK Pathan",
    "season": 2013,
    "role": "FINISHER",
    "runs": 153,
    "strikeRate": 96.2,
    "wickets": 11,
    "economy": 7.45
  },
  {
    "id": "RD-Chahar-2022",
    "playerName": "RD Chahar",
    "season": 2022,
    "role": "FINISHER",
    "runs": 77,
    "strikeRate": 110,
    "wickets": 14,
    "economy": 7.55
  },
  {
    "id": "MM-Patel-2012",
    "playerName": "MM Patel",
    "season": 2012,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 28.6,
    "wickets": 17,
    "economy": 7.79
  },
  {
    "id": "SL-Malinga-2014",
    "playerName": "SL Malinga",
    "season": 2014,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 17,
    "economy": 6.59
  },
  {
    "id": "K-Gowtham-2018",
    "playerName": "K Gowtham",
    "season": 2018,
    "role": "FINISHER",
    "runs": 126,
    "strikeRate": 188.1,
    "wickets": 12,
    "economy": 7.89
  },
  {
    "id": "Abhishek-Sharma-2022",
    "playerName": "Abhishek Sharma",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 426,
    "strikeRate": 129.5,
    "wickets": 0,
    "economy": 9.75
  },
  {
    "id": "Shubman-Gill-2024",
    "playerName": "Shubman Gill",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 426,
    "strikeRate": 144.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CV-Varun-2025",
    "playerName": "CV Varun",
    "season": 2025,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 17,
    "economy": 7.6
  },
  {
    "id": "SL-Malinga-2010",
    "playerName": "SL Malinga",
    "season": 2010,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 17,
    "economy": 6.97
  },
  {
    "id": "IK-Pathan-2012",
    "playerName": "IK Pathan",
    "season": 2012,
    "role": "FINISHER",
    "runs": 176,
    "strikeRate": 132.3,
    "wickets": 10,
    "economy": 7.82
  },
  {
    "id": "MK-Pandey-2020",
    "playerName": "MK Pandey",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 425,
    "strikeRate": 121.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Dhawan-2011",
    "playerName": "S Dhawan",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 400,
    "strikeRate": 127,
    "wickets": 1,
    "economy": 6
  },
  {
    "id": "KK-Ahmed-2024",
    "playerName": "KK Ahmed",
    "season": 2024,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 17,
    "economy": 9.13
  },
  {
    "id": "SA-Yadav-2019",
    "playerName": "SA Yadav",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 424,
    "strikeRate": 129.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Pant-2021",
    "playerName": "RR Pant",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 424,
    "strikeRate": 123.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "V-Sehwag-2011",
    "playerName": "V Sehwag",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 424,
    "strikeRate": 171.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DR-Smith-2015",
    "playerName": "DR Smith",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 399,
    "strikeRate": 117,
    "wickets": 1,
    "economy": 8.5
  },
  {
    "id": "DJ-Bravo-2021",
    "playerName": "DJ Bravo",
    "season": 2021,
    "role": "BOWLER",
    "runs": 47,
    "strikeRate": 213.6,
    "wickets": 15,
    "economy": 7.17
  },
  {
    "id": "BA-Stokes-2018",
    "playerName": "BA Stokes",
    "season": 2018,
    "role": "FINISHER",
    "runs": 196,
    "strikeRate": 118.1,
    "wickets": 9,
    "economy": 7.94
  },
  {
    "id": "S-Dube-2024",
    "playerName": "S Dube",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 396,
    "strikeRate": 152.9,
    "wickets": 1,
    "economy": 14
  },
  {
    "id": "ST-Jayasuriya-2009",
    "playerName": "ST Jayasuriya",
    "season": 2009,
    "role": "FINISHER",
    "runs": 221,
    "strikeRate": 107.8,
    "wickets": 8,
    "economy": 8.32
  },
  {
    "id": "SR-Watson-2014",
    "playerName": "SR Watson",
    "season": 2014,
    "role": "FINISHER",
    "runs": 246,
    "strikeRate": 120,
    "wickets": 7,
    "economy": 7.57
  },
  {
    "id": "HM-Amla-2017",
    "playerName": "HM Amla",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 420,
    "strikeRate": 141.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RJ-Harris-2010",
    "playerName": "RJ Harris",
    "season": 2010,
    "role": "BOWLER",
    "runs": 45,
    "strikeRate": 115.4,
    "wickets": 15,
    "economy": 7.35
  },
  {
    "id": "NM-Coulter-Nile-2015",
    "playerName": "NM Coulter-Nile",
    "season": 2015,
    "role": "BOWLER",
    "runs": 20,
    "strikeRate": 100,
    "wickets": 16,
    "economy": 7.52
  },
  {
    "id": "N-Rana-2019",
    "playerName": "N Rana",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 344,
    "strikeRate": 143.3,
    "wickets": 3,
    "economy": 8.76
  },
  {
    "id": "EJG-Morgan-2020",
    "playerName": "EJG Morgan",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 419,
    "strikeRate": 133.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Tiwary-2010",
    "playerName": "SS Tiwary",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 419,
    "strikeRate": 131.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LMP-Simmons-2014",
    "playerName": "LMP Simmons",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 394,
    "strikeRate": 131.8,
    "wickets": 1,
    "economy": 11.33
  },
  {
    "id": "SP-Narine-2019",
    "playerName": "SP Narine",
    "season": 2019,
    "role": "FINISHER",
    "runs": 143,
    "strikeRate": 158.9,
    "wickets": 11,
    "economy": 7.76
  },
  {
    "id": "Ishan-Kishan-2022",
    "playerName": "Ishan Kishan",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 418,
    "strikeRate": 117.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Dube-2023",
    "playerName": "S Dube",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 418,
    "strikeRate": 150.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RG-Sharma-2025",
    "playerName": "RG Sharma",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 418,
    "strikeRate": 143.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Kuldeep-Yadav-2025",
    "playerName": "Kuldeep Yadav",
    "season": 2025,
    "role": "BOWLER",
    "runs": 18,
    "strikeRate": 112.5,
    "wickets": 16,
    "economy": 7.26
  },
  {
    "id": "TM-Dilshan-2009",
    "playerName": "TM Dilshan",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 418,
    "strikeRate": 117.1,
    "wickets": 0,
    "economy": 6.19
  },
  {
    "id": "DA-Miller-2013",
    "playerName": "DA Miller",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 418,
    "strikeRate": 162.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Anureet-Singh-2015",
    "playerName": "Anureet Singh",
    "season": 2015,
    "role": "BOWLER",
    "runs": 18,
    "strikeRate": 58.1,
    "wickets": 16,
    "economy": 8.89
  },
  {
    "id": "RG-Sharma-2024",
    "playerName": "RG Sharma",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 417,
    "strikeRate": 142.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JD-Ryder-2011",
    "playerName": "JD Ryder",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 292,
    "strikeRate": 145.3,
    "wickets": 5,
    "economy": 7.6
  },
  {
    "id": "MS-Dhoni-2019",
    "playerName": "MS Dhoni",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 416,
    "strikeRate": 131.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Tilak-Varma-2024",
    "playerName": "Tilak Varma",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 416,
    "strikeRate": 143,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "RA-Jadeja-2016",
    "playerName": "RA Jadeja",
    "season": 2016,
    "role": "FINISHER",
    "runs": 191,
    "strikeRate": 101.1,
    "wickets": 9,
    "economy": 7.77
  },
  {
    "id": "RG-Sharma-2014",
    "playerName": "RG Sharma",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 390,
    "strikeRate": 127,
    "wickets": 1,
    "economy": 8.67
  },
  {
    "id": "NM-Coulter-Nile-2017",
    "playerName": "NM Coulter-Nile",
    "season": 2017,
    "role": "BOWLER",
    "runs": 14,
    "strikeRate": 107.7,
    "wickets": 16,
    "economy": 7.82
  },
  {
    "id": "TA-Boult-2024",
    "playerName": "TA Boult",
    "season": 2024,
    "role": "BOWLER",
    "runs": 14,
    "strikeRate": 87.5,
    "wickets": 16,
    "economy": 8.07
  },
  {
    "id": "MS-Dhoni-2008",
    "playerName": "MS Dhoni",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 414,
    "strikeRate": 129.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "K-Rabada-2021",
    "playerName": "K Rabada",
    "season": 2021,
    "role": "BOWLER",
    "runs": 13,
    "strikeRate": 216.7,
    "wickets": 16,
    "economy": 8.05
  },
  {
    "id": "RA-Tripathi-2022",
    "playerName": "RA Tripathi",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 413,
    "strikeRate": 152.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KH-Pandya-2023",
    "playerName": "KH Pandya",
    "season": 2023,
    "role": "FINISHER",
    "runs": 188,
    "strikeRate": 109.3,
    "wickets": 9,
    "economy": 7.59
  },
  {
    "id": "AR-Patel-2025",
    "playerName": "AR Patel",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 263,
    "strikeRate": 153.8,
    "wickets": 6,
    "economy": 8.6
  },
  {
    "id": "R-Rampaul-2013",
    "playerName": "R Rampaul",
    "season": 2013,
    "role": "BOWLER",
    "runs": 38,
    "strikeRate": 97.4,
    "wickets": 15,
    "economy": 7.02
  },
  {
    "id": "R-Ashwin-2020",
    "playerName": "R Ashwin",
    "season": 2020,
    "role": "BOWLER",
    "runs": 37,
    "strikeRate": 108.8,
    "wickets": 15,
    "economy": 7.56
  },
  {
    "id": "P-Kumar-2008",
    "playerName": "P Kumar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 112,
    "strikeRate": 112,
    "wickets": 12,
    "economy": 8.2
  },
  {
    "id": "KH-Pandya-2016",
    "playerName": "KH Pandya",
    "season": 2016,
    "role": "FINISHER",
    "runs": 237,
    "strikeRate": 186.6,
    "wickets": 7,
    "economy": 7.36
  },
  {
    "id": "SS-Iyer-2018",
    "playerName": "SS Iyer",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 411,
    "strikeRate": 129.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MJ-McClenaghan-2018",
    "playerName": "MJ McClenaghan",
    "season": 2018,
    "role": "BOWLER",
    "runs": 11,
    "strikeRate": 91.7,
    "wickets": 16,
    "economy": 8.16
  },
  {
    "id": "D-Padikkal-2021",
    "playerName": "D Padikkal",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 411,
    "strikeRate": 120.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AR-Patel-2019",
    "playerName": "AR Patel",
    "season": 2019,
    "role": "FINISHER",
    "runs": 110,
    "strikeRate": 122.2,
    "wickets": 12,
    "economy": 7.19
  },
  {
    "id": "DA-Warner-2013",
    "playerName": "DA Warner",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 410,
    "strikeRate": 123.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Z-Khan-2008",
    "playerName": "Z Khan",
    "season": 2008,
    "role": "BOWLER",
    "runs": 34,
    "strikeRate": 79.1,
    "wickets": 15,
    "economy": 8.58
  },
  {
    "id": "Harbhajan-Singh-2009",
    "playerName": "Harbhajan Singh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 84,
    "strikeRate": 147.4,
    "wickets": 13,
    "economy": 6.09
  },
  {
    "id": "Yuvraj-Singh-2010",
    "playerName": "Yuvraj Singh",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 259,
    "strikeRate": 125.7,
    "wickets": 6,
    "economy": 6.69
  },
  {
    "id": "MK-Pandey-2014",
    "playerName": "MK Pandey",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 409,
    "strikeRate": 113.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Noor-Ahmad-2023",
    "playerName": "Noor Ahmad",
    "season": 2023,
    "role": "BOWLER",
    "runs": 8,
    "strikeRate": 88.9,
    "wickets": 16,
    "economy": 7.53
  },
  {
    "id": "M-Muralitharan-2009",
    "playerName": "M Muralitharan",
    "season": 2009,
    "role": "BOWLER",
    "runs": 8,
    "strikeRate": 100,
    "wickets": 16,
    "economy": 5.27
  },
  {
    "id": "AK-Markram-2022",
    "playerName": "AK Markram",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 381,
    "strikeRate": 137.5,
    "wickets": 1,
    "economy": 10.67
  },
  {
    "id": "Mukesh-Choudhary-2022",
    "playerName": "Mukesh Choudhary",
    "season": 2022,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 100,
    "wickets": 16,
    "economy": 8.76
  },
  {
    "id": "G-Gambhir-2013",
    "playerName": "G Gambhir",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 406,
    "strikeRate": 114.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CA-Lynn-2019",
    "playerName": "CA Lynn",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 405,
    "strikeRate": 136.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RG-Sharma-2019",
    "playerName": "RG Sharma",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 405,
    "strikeRate": 127,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DJ-Bravo-2019",
    "playerName": "DJ Bravo",
    "season": 2019,
    "role": "FINISHER",
    "runs": 80,
    "strikeRate": 117.6,
    "wickets": 13,
    "economy": 7.67
  },
  {
    "id": "V-Kohli-2021",
    "playerName": "V Kohli",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 405,
    "strikeRate": 116.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LH-Ferguson-2022",
    "playerName": "LH Ferguson",
    "season": 2022,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 125,
    "wickets": 16,
    "economy": 8.72
  },
  {
    "id": "J-Botha-2011",
    "playerName": "J Botha",
    "season": 2011,
    "role": "FINISHER",
    "runs": 230,
    "strikeRate": 115,
    "wickets": 7,
    "economy": 6.63
  },
  {
    "id": "RV-Uthappa-2012",
    "playerName": "RV Uthappa",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 405,
    "strikeRate": 113.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SR-Watson-2012",
    "playerName": "SR Watson",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 255,
    "strikeRate": 149.1,
    "wickets": 6,
    "economy": 6.88
  },
  {
    "id": "BB-McCullum-2014",
    "playerName": "BB McCullum",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 405,
    "strikeRate": 118.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Rana-2018",
    "playerName": "N Rana",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 304,
    "strikeRate": 127.7,
    "wickets": 4,
    "economy": 6.95
  },
  {
    "id": "VR-Iyer-2023",
    "playerName": "VR Iyer",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 404,
    "strikeRate": 140.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Basil-Thampi-2017",
    "playerName": "Basil Thampi",
    "season": 2017,
    "role": "BOWLER",
    "runs": 28,
    "strikeRate": 93.3,
    "wickets": 15,
    "economy": 9.24
  },
  {
    "id": "Nithish-Kumar-Reddy-2024",
    "playerName": "Nithish Kumar Reddy",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 303,
    "strikeRate": 137.1,
    "wickets": 4,
    "economy": 10.62
  },
  {
    "id": "PD-Salt-2025",
    "playerName": "PD Salt",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 403,
    "strikeRate": 169.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammed-Siraj-2025",
    "playerName": "Mohammed Siraj",
    "season": 2025,
    "role": "BOWLER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 16,
    "economy": 8.83
  },
  {
    "id": "MM-Sharma-2015",
    "playerName": "MM Sharma",
    "season": 2015,
    "role": "BOWLER",
    "runs": 28,
    "strikeRate": 155.6,
    "wickets": 15,
    "economy": 8.26
  },
  {
    "id": "RD-Chahar-2020",
    "playerName": "RD Chahar",
    "season": 2020,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 16,
    "economy": 8.15
  },
  {
    "id": "TG-Southee-2022",
    "playerName": "TG Southee",
    "season": 2022,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 16.7,
    "wickets": 16,
    "economy": 7.75
  },
  {
    "id": "AD-Russell-2023",
    "playerName": "AD Russell",
    "season": 2023,
    "role": "FINISHER",
    "runs": 227,
    "strikeRate": 140.1,
    "wickets": 7,
    "economy": 10.48
  },
  {
    "id": "MM-Sharma-2024",
    "playerName": "MM Sharma",
    "season": 2024,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 12.5,
    "wickets": 16,
    "economy": 10.48
  },
  {
    "id": "DL-Chahar-2021",
    "playerName": "DL Chahar",
    "season": 2021,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 16,
    "economy": 8.02
  },
  {
    "id": "SS-Iyer-2022",
    "playerName": "SS Iyer",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 401,
    "strikeRate": 129.4,
    "wickets": 0,
    "economy": 7
  },
  {
    "id": "KK-Ahmed-2025",
    "playerName": "KK Ahmed",
    "season": 2025,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 16,
    "economy": 9.39
  },
  {
    "id": "M-Muralitharan-2010",
    "playerName": "M Muralitharan",
    "season": 2010,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 16,
    "economy": 6.98
  },
  {
    "id": "P-Awana-2013",
    "playerName": "P Awana",
    "season": 2013,
    "role": "BOWLER",
    "runs": 1,
    "strikeRate": 11.1,
    "wickets": 16,
    "economy": 7.52
  },
  {
    "id": "HH-Pandya-2017",
    "playerName": "HH Pandya",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 250,
    "strikeRate": 145.3,
    "wickets": 6,
    "economy": 8.11
  },
  {
    "id": "S-Kaul-2017",
    "playerName": "S Kaul",
    "season": 2017,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 16,
    "economy": 8.23
  },
  {
    "id": "JJ-Bumrah-2022",
    "playerName": "JJ Bumrah",
    "season": 2022,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 16,
    "economy": 7.19
  },
  {
    "id": "KK-Ahmed-2022",
    "playerName": "KK Ahmed",
    "season": 2022,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 16,
    "economy": 7.81
  },
  {
    "id": "MM-Patel-2008",
    "playerName": "MM Patel",
    "season": 2008,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 16,
    "economy": 7.55
  },
  {
    "id": "NLTC-Perera-2016",
    "playerName": "NLTC Perera",
    "season": 2016,
    "role": "FINISHER",
    "runs": 150,
    "strikeRate": 154.6,
    "wickets": 10,
    "economy": 9.68
  },
  {
    "id": "Akash-Madhwal-2023",
    "playerName": "Akash Madhwal",
    "season": 2023,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 16,
    "economy": 8.32
  },
  {
    "id": "Yash-Dayal-2024",
    "playerName": "Yash Dayal",
    "season": 2024,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 16,
    "economy": 8.8
  },
  {
    "id": "YS-Chahal-2025",
    "playerName": "YS Chahal",
    "season": 2025,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 16,
    "economy": 9.34
  },
  {
    "id": "I-Sharma-2013",
    "playerName": "I Sharma",
    "season": 2013,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 16,
    "economy": 7.56
  },
  {
    "id": "SK-Raina-2016",
    "playerName": "SK Raina",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 399,
    "strikeRate": 124.3,
    "wickets": 0,
    "economy": 8.26
  },
  {
    "id": "SR-Watson-2019",
    "playerName": "SR Watson",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 398,
    "strikeRate": 124,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "F-du-Plessis-2012",
    "playerName": "F du Plessis",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 398,
    "strikeRate": 128.4,
    "wickets": 0,
    "economy": 16
  },
  {
    "id": "RA-Tripathi-2021",
    "playerName": "RA Tripathi",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 397,
    "strikeRate": 139.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Tilak-Varma-2022",
    "playerName": "Tilak Varma",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 397,
    "strikeRate": 126.8,
    "wickets": 0,
    "economy": 6.5
  },
  {
    "id": "KL-Rahul-2016",
    "playerName": "KL Rahul",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 397,
    "strikeRate": 143.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Pandey-2017",
    "playerName": "MK Pandey",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 396,
    "strikeRate": 125.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Markande-2018",
    "playerName": "M Markande",
    "season": 2018,
    "role": "BOWLER",
    "runs": 21,
    "strikeRate": 84,
    "wickets": 15,
    "economy": 8.42
  },
  {
    "id": "F-du-Plessis-2019",
    "playerName": "F du Plessis",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 396,
    "strikeRate": 121.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JR-Hopes-2008",
    "playerName": "JR Hopes",
    "season": 2008,
    "role": "FINISHER",
    "runs": 221,
    "strikeRate": 145.4,
    "wickets": 7,
    "economy": 10
  },
  {
    "id": "S-Badrinath-2011",
    "playerName": "S Badrinath",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 396,
    "strikeRate": 123.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Z-Khan-2011",
    "playerName": "Z Khan",
    "season": 2011,
    "role": "BOWLER",
    "runs": 21,
    "strikeRate": 87.5,
    "wickets": 15,
    "economy": 7.48
  },
  {
    "id": "PA-Patel-2017",
    "playerName": "PA Patel",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 395,
    "strikeRate": 128.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KA-Pollard-2017",
    "playerName": "KA Pollard",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 395,
    "strikeRate": 134.4,
    "wickets": 0,
    "economy": 15
  },
  {
    "id": "MM-Ali-2019",
    "playerName": "MM Ali",
    "season": 2019,
    "role": "FINISHER",
    "runs": 220,
    "strikeRate": 160.6,
    "wickets": 7,
    "economy": 6.72
  },
  {
    "id": "KA-Pollard-2021",
    "playerName": "KA Pollard",
    "season": 2021,
    "role": "FINISHER",
    "runs": 245,
    "strikeRate": 136.1,
    "wickets": 6,
    "economy": 6.71
  },
  {
    "id": "RM-Patidar-2024",
    "playerName": "RM Patidar",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 395,
    "strikeRate": 166.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AT-Rayudu-2011",
    "playerName": "AT Rayudu",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 395,
    "strikeRate": 111.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-de-Villiers-2014",
    "playerName": "AB de Villiers",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 395,
    "strikeRate": 154.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DJ-Hussey-2008",
    "playerName": "DJ Hussey",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 319,
    "strikeRate": 119.5,
    "wickets": 3,
    "economy": 10.18
  },
  {
    "id": "RV-Uthappa-2016",
    "playerName": "RV Uthappa",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 394,
    "strikeRate": 131.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Rahane-2019",
    "playerName": "AM Rahane",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 393,
    "strikeRate": 136,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SN-Thakur-2025",
    "playerName": "SN Thakur",
    "season": 2025,
    "role": "BOWLER",
    "runs": 18,
    "strikeRate": 120,
    "wickets": 15,
    "economy": 9.98
  },
  {
    "id": "AJ-Finch-2016",
    "playerName": "AJ Finch",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 393,
    "strikeRate": 126.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AR-Patel-2020",
    "playerName": "AR Patel",
    "season": 2020,
    "role": "FINISHER",
    "runs": 117,
    "strikeRate": 130,
    "wickets": 11,
    "economy": 6.41
  },
  {
    "id": "JC-Buttler-2023",
    "playerName": "JC Buttler",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 392,
    "strikeRate": 131.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Gayle-2010",
    "playerName": "CH Gayle",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 292,
    "strikeRate": 148.2,
    "wickets": 4,
    "economy": 9
  },
  {
    "id": "MS-Dhoni-2011",
    "playerName": "MS Dhoni",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 392,
    "strikeRate": 158.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Bhatia-2014",
    "playerName": "R Bhatia",
    "season": 2014,
    "role": "FINISHER",
    "runs": 67,
    "strikeRate": 121.8,
    "wickets": 13,
    "economy": 7.42
  },
  {
    "id": "RA-Tripathi-2017",
    "playerName": "RA Tripathi",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 391,
    "strikeRate": 142.2,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "Shakib-Al-Hasan-2012",
    "playerName": "Shakib Al Hasan",
    "season": 2012,
    "role": "FINISHER",
    "runs": 91,
    "strikeRate": 118.2,
    "wickets": 12,
    "economy": 6.58
  },
  {
    "id": "JC-Archer-2018",
    "playerName": "JC Archer",
    "season": 2018,
    "role": "BOWLER",
    "runs": 15,
    "strikeRate": 71.4,
    "wickets": 15,
    "economy": 7.93
  },
  {
    "id": "Shahbaz-Ahmed-2024",
    "playerName": "Shahbaz Ahmed",
    "season": 2024,
    "role": "FINISHER",
    "runs": 215,
    "strikeRate": 124.3,
    "wickets": 7,
    "economy": 10.01
  },
  {
    "id": "AM-Rahane-2025",
    "playerName": "AM Rahane",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 390,
    "strikeRate": 141.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Morkel-2011",
    "playerName": "M Morkel",
    "season": 2011,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 160,
    "wickets": 14,
    "economy": 7.36
  },
  {
    "id": "RA-Jadeja-2018",
    "playerName": "RA Jadeja",
    "season": 2018,
    "role": "FINISHER",
    "runs": 89,
    "strikeRate": 111.3,
    "wickets": 12,
    "economy": 7.44
  },
  {
    "id": "Umar-Gul-2008",
    "playerName": "Umar Gul",
    "season": 2008,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 205.3,
    "wickets": 14,
    "economy": 7.76
  },
  {
    "id": "RV-Uthappa-2017",
    "playerName": "RV Uthappa",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 388,
    "strikeRate": 162.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DR-Sams-2022",
    "playerName": "DR Sams",
    "season": 2022,
    "role": "FINISHER",
    "runs": 38,
    "strikeRate": 95,
    "wickets": 14,
    "economy": 8.21
  },
  {
    "id": "RD-Rickelton-2025",
    "playerName": "RD Rickelton",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 388,
    "strikeRate": 145.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Yuvraj-Singh-2013",
    "playerName": "Yuvraj Singh",
    "season": 2013,
    "role": "FINISHER",
    "runs": 238,
    "strikeRate": 123.3,
    "wickets": 6,
    "economy": 6.86
  },
  {
    "id": "Mohammed-Siraj-2024",
    "playerName": "Mohammed Siraj",
    "season": 2024,
    "role": "BOWLER",
    "runs": 12,
    "strikeRate": 133.3,
    "wickets": 15,
    "economy": 8.69
  },
  {
    "id": "TL-Suman-2009",
    "playerName": "TL Suman",
    "season": 2009,
    "role": "FINISHER",
    "runs": 237,
    "strikeRate": 122.8,
    "wickets": 6,
    "economy": 7.12
  },
  {
    "id": "PP-Chawla-2010",
    "playerName": "PP Chawla",
    "season": 2010,
    "role": "FINISHER",
    "runs": 62,
    "strikeRate": 98.4,
    "wickets": 13,
    "economy": 7.52
  },
  {
    "id": "SV-Samson-2017",
    "playerName": "SV Samson",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 386,
    "strikeRate": 140.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DW-Steyn-2011",
    "playerName": "DW Steyn",
    "season": 2011,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 97.3,
    "wickets": 14,
    "economy": 6.38
  },
  {
    "id": "YK-Pathan-2016",
    "playerName": "YK Pathan",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 361,
    "strikeRate": 141,
    "wickets": 1,
    "economy": 5.21
  },
  {
    "id": "Mujeeb-Ur-Rahman-2018",
    "playerName": "Mujeeb Ur Rahman",
    "season": 2018,
    "role": "BOWLER",
    "runs": 10,
    "strikeRate": 142.9,
    "wickets": 15,
    "economy": 6.9
  },
  {
    "id": "KV-Sharma-2013",
    "playerName": "KV Sharma",
    "season": 2013,
    "role": "FINISHER",
    "runs": 85,
    "strikeRate": 95.5,
    "wickets": 12,
    "economy": 6.68
  },
  {
    "id": "SK-Raina-2019",
    "playerName": "SK Raina",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 383,
    "strikeRate": 119.3,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "N-Rana-2021",
    "playerName": "N Rana",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 383,
    "strikeRate": 117.8,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "WG-Jacks-2025",
    "playerName": "WG Jacks",
    "season": 2025,
    "role": "FINISHER",
    "runs": 233,
    "strikeRate": 134.7,
    "wickets": 6,
    "economy": 8.07
  },
  {
    "id": "AC-Gilchrist-2011",
    "playerName": "AC Gilchrist",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 383,
    "strikeRate": 123.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Rahane-2017",
    "playerName": "AM Rahane",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 382,
    "strikeRate": 116.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "E-Lewis-2018",
    "playerName": "E Lewis",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 382,
    "strikeRate": 131.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Jadeja-2020",
    "playerName": "RA Jadeja",
    "season": 2020,
    "role": "FINISHER",
    "runs": 232,
    "strikeRate": 163.4,
    "wickets": 6,
    "economy": 8.63
  },
  {
    "id": "KA-Pollard-2020",
    "playerName": "KA Pollard",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 281,
    "strikeRate": 179,
    "wickets": 4,
    "economy": 8.26
  },
  {
    "id": "RG-Sharma-2021",
    "playerName": "RG Sharma",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 381,
    "strikeRate": 124.1,
    "wickets": 0,
    "economy": 11.14
  },
  {
    "id": "HV-Patel-2023",
    "playerName": "HV Patel",
    "season": 2023,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 100,
    "wickets": 15,
    "economy": 9.3
  },
  {
    "id": "M-Muralitharan-2012",
    "playerName": "M Muralitharan",
    "season": 2012,
    "role": "BOWLER",
    "runs": 6,
    "strikeRate": 66.7,
    "wickets": 15,
    "economy": 6.47
  },
  {
    "id": "PP-Chawla-2014",
    "playerName": "PP Chawla",
    "season": 2014,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 155,
    "wickets": 14,
    "economy": 7.66
  },
  {
    "id": "SK-Trivedi-2008",
    "playerName": "SK Trivedi",
    "season": 2008,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 41.7,
    "wickets": 15,
    "economy": 8.14
  },
  {
    "id": "R-Ashwin-2010",
    "playerName": "R Ashwin",
    "season": 2010,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 75,
    "wickets": 14,
    "economy": 6.22
  },
  {
    "id": "PV-Tambe-2014",
    "playerName": "PV Tambe",
    "season": 2014,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 55.6,
    "wickets": 15,
    "economy": 7.2
  },
  {
    "id": "F-du-Plessis-2015",
    "playerName": "F du Plessis",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 380,
    "strikeRate": 119.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Imran-Tahir-2015",
    "playerName": "Imran Tahir",
    "season": 2015,
    "role": "BOWLER",
    "runs": 5,
    "strikeRate": 83.3,
    "wickets": 15,
    "economy": 8.59
  },
  {
    "id": "DT-Christian-2017",
    "playerName": "DT Christian",
    "season": 2017,
    "role": "FINISHER",
    "runs": 79,
    "strikeRate": 151.9,
    "wickets": 12,
    "economy": 7.3
  },
  {
    "id": "KR-Mayers-2023",
    "playerName": "KR Mayers",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 379,
    "strikeRate": 137.3,
    "wickets": 0,
    "economy": 7.7
  },
  {
    "id": "Shashank-Singh-2024",
    "playerName": "Shashank Singh",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 354,
    "strikeRate": 157.3,
    "wickets": 1,
    "economy": 5
  },
  {
    "id": "A-Badoni-2025",
    "playerName": "A Badoni",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 329,
    "strikeRate": 140,
    "wickets": 2,
    "economy": 7.8
  },
  {
    "id": "VRV-Singh-2008",
    "playerName": "VRV Singh",
    "season": 2008,
    "role": "BOWLER",
    "runs": 4,
    "strikeRate": 133.3,
    "wickets": 15,
    "economy": 8.61
  },
  {
    "id": "KV-Sharma-2015",
    "playerName": "KV Sharma",
    "season": 2015,
    "role": "FINISHER",
    "runs": 104,
    "strikeRate": 119.5,
    "wickets": 11,
    "economy": 8.49
  },
  {
    "id": "G-Gambhir-2011",
    "playerName": "G Gambhir",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 378,
    "strikeRate": 113.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harbhajan-Singh-2014",
    "playerName": "Harbhajan Singh",
    "season": 2014,
    "role": "FINISHER",
    "runs": 28,
    "strikeRate": 107.7,
    "wickets": 14,
    "economy": 6.52
  },
  {
    "id": "R-Ashwin-2018",
    "playerName": "R Ashwin",
    "season": 2018,
    "role": "FINISHER",
    "runs": 102,
    "strikeRate": 134.2,
    "wickets": 11,
    "economy": 7.85
  },
  {
    "id": "PP-Chawla-2018",
    "playerName": "PP Chawla",
    "season": 2018,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 75,
    "wickets": 14,
    "economy": 8.49
  },
  {
    "id": "Sandeep-Sharma-2023",
    "playerName": "Sandeep Sharma",
    "season": 2023,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 28.6,
    "wickets": 15,
    "economy": 8.23
  },
  {
    "id": "Naveen-ul-Haq-2024",
    "playerName": "Naveen-ul-Haq",
    "season": 2024,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 15,
    "economy": 9.7
  },
  {
    "id": "NV-Ojha-2010",
    "playerName": "NV Ojha",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 377,
    "strikeRate": 128.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RP-Singh-2011",
    "playerName": "RP Singh",
    "season": 2011,
    "role": "BOWLER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 15,
    "economy": 6.97
  },
  {
    "id": "B-Kumar-2013",
    "playerName": "B Kumar",
    "season": 2013,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 72.2,
    "wickets": 13,
    "economy": 6.37
  },
  {
    "id": "S-Dhawan-2014",
    "playerName": "S Dhawan",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 377,
    "strikeRate": 113.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MM-Sharma-2017",
    "playerName": "MM Sharma",
    "season": 2017,
    "role": "FINISHER",
    "runs": 51,
    "strikeRate": 100,
    "wickets": 13,
    "economy": 8.92
  },
  {
    "id": "D-Padikkal-2022",
    "playerName": "D Padikkal",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 376,
    "strikeRate": 118.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Mishra-2009",
    "playerName": "A Mishra",
    "season": 2009,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 130,
    "wickets": 14,
    "economy": 6.87
  },
  {
    "id": "SV-Samson-2020",
    "playerName": "SV Samson",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 375,
    "strikeRate": 155,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Yash-Thakur-2023",
    "playerName": "Yash Thakur",
    "season": 2023,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 15,
    "economy": 8.61
  },
  {
    "id": "Sandeep-Sharma-2024",
    "playerName": "Sandeep Sharma",
    "season": 2024,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 15,
    "economy": 7.98
  },
  {
    "id": "M-Pathirana-2025",
    "playerName": "M Pathirana",
    "season": 2025,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 15,
    "economy": 9.08
  },
  {
    "id": "SB-Jakati-2010",
    "playerName": "SB Jakati",
    "season": 2010,
    "role": "BOWLER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 15,
    "economy": 7.76
  },
  {
    "id": "KV-Sharma-2017",
    "playerName": "KV Sharma",
    "season": 2017,
    "role": "FINISHER",
    "runs": 49,
    "strikeRate": 116.7,
    "wickets": 13,
    "economy": 6.89
  },
  {
    "id": "TM-Head-2025",
    "playerName": "TM Head",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 374,
    "strikeRate": 150.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Yuvraj-Singh-2008",
    "playerName": "Yuvraj Singh",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 299,
    "strikeRate": 156.5,
    "wickets": 3,
    "economy": 9.11
  },
  {
    "id": "RV-Uthappa-2010",
    "playerName": "RV Uthappa",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 374,
    "strikeRate": 167,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Bhatia-2013",
    "playerName": "R Bhatia",
    "season": 2013,
    "role": "FINISHER",
    "runs": 99,
    "strikeRate": 122.2,
    "wickets": 11,
    "economy": 7.53
  },
  {
    "id": "PA-Patel-2019",
    "playerName": "PA Patel",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 373,
    "strikeRate": 136.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohsin-Khan-2022",
    "playerName": "Mohsin Khan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 121.1,
    "wickets": 14,
    "economy": 5.88
  },
  {
    "id": "S-Dhawan-2023",
    "playerName": "S Dhawan",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 373,
    "strikeRate": 135.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RS-Bopara-2010",
    "playerName": "RS Bopara",
    "season": 2010,
    "role": "FINISHER",
    "runs": 248,
    "strikeRate": 111.2,
    "wickets": 5,
    "economy": 9.66
  },
  {
    "id": "AB-de-Villiers-2013",
    "playerName": "AB de Villiers",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 373,
    "strikeRate": 165,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RG-Sharma-2011",
    "playerName": "RG Sharma",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 372,
    "strikeRate": 122.4,
    "wickets": 0,
    "economy": 12.72
  },
  {
    "id": "P-Kumar-2013",
    "playerName": "P Kumar",
    "season": 2013,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 114.6,
    "wickets": 13,
    "economy": 6.68
  },
  {
    "id": "MS-Dhoni-2015",
    "playerName": "MS Dhoni",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 372,
    "strikeRate": 120.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WP-Saha-2023",
    "playerName": "WP Saha",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 371,
    "strikeRate": 124.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Dravid-2008",
    "playerName": "R Dravid",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 371,
    "strikeRate": 124.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HH-Gibbs-2009",
    "playerName": "HH Gibbs",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 371,
    "strikeRate": 107.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JR-Hopes-2011",
    "playerName": "JR Hopes",
    "season": 2011,
    "role": "FINISHER",
    "runs": 196,
    "strikeRate": 121,
    "wickets": 7,
    "economy": 8.39
  },
  {
    "id": "MS-Dhoni-2014",
    "playerName": "MS Dhoni",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 371,
    "strikeRate": 143.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MP-Stoinis-2016",
    "playerName": "MP Stoinis",
    "season": 2016,
    "role": "FINISHER",
    "runs": 146,
    "strikeRate": 131.5,
    "wickets": 9,
    "economy": 8.7
  },
  {
    "id": "AM-Rahane-2018",
    "playerName": "AM Rahane",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 370,
    "strikeRate": 115.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SM-Curran-2019",
    "playerName": "SM Curran",
    "season": 2019,
    "role": "FINISHER",
    "runs": 95,
    "strikeRate": 172.7,
    "wickets": 11,
    "economy": 9.42
  },
  {
    "id": "VR-Iyer-2024",
    "playerName": "VR Iyer",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 370,
    "strikeRate": 155.5,
    "wickets": 0,
    "economy": 28
  },
  {
    "id": "JEC-Franklin-2012",
    "playerName": "JEC Franklin",
    "season": 2012,
    "role": "FINISHER",
    "runs": 220,
    "strikeRate": 96.1,
    "wickets": 6,
    "economy": 8.22
  },
  {
    "id": "DT-Christian-2012",
    "playerName": "DT Christian",
    "season": 2012,
    "role": "FINISHER",
    "runs": 145,
    "strikeRate": 118.9,
    "wickets": 9,
    "economy": 8.52
  },
  {
    "id": "N-Wadhera-2025",
    "playerName": "N Wadhera",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 369,
    "strikeRate": 141.4,
    "wickets": 0,
    "economy": 10.8
  },
  {
    "id": "JP-Faulkner-2015",
    "playerName": "JP Faulkner",
    "season": 2015,
    "role": "FINISHER",
    "runs": 144,
    "strikeRate": 124.1,
    "wickets": 9,
    "economy": 9.25
  },
  {
    "id": "CH-Gayle-2018",
    "playerName": "CH Gayle",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 368,
    "strikeRate": 141,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LH-Ferguson-2021",
    "playerName": "LH Ferguson",
    "season": 2021,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 138.5,
    "wickets": 14,
    "economy": 7.29
  },
  {
    "id": "RD-Gaikwad-2022",
    "playerName": "RD Gaikwad",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 368,
    "strikeRate": 123.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JC-Archer-2019",
    "playerName": "JC Archer",
    "season": 2019,
    "role": "FINISHER",
    "runs": 67,
    "strikeRate": 163.4,
    "wickets": 12,
    "economy": 6.95
  },
  {
    "id": "AD-Russell-2025",
    "playerName": "AD Russell",
    "season": 2025,
    "role": "FINISHER",
    "runs": 167,
    "strikeRate": 150.5,
    "wickets": 8,
    "economy": 11.47
  },
  {
    "id": "RR-Pant-2017",
    "playerName": "RR Pant",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 366,
    "strikeRate": 161.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "C-Sakariya-2021",
    "playerName": "C Sakariya",
    "season": 2021,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 64,
    "wickets": 14,
    "economy": 7.8
  },
  {
    "id": "MC-Henriques-2013",
    "playerName": "MC Henriques",
    "season": 2013,
    "role": "FINISHER",
    "runs": 165,
    "strikeRate": 129.9,
    "wickets": 8,
    "economy": 8.5
  },
  {
    "id": "CJ-Anderson-2014",
    "playerName": "CJ Anderson",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 265,
    "strikeRate": 142.5,
    "wickets": 4,
    "economy": 9.89
  },
  {
    "id": "SR-Tendulkar-2009",
    "playerName": "SR Tendulkar",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 364,
    "strikeRate": 115.6,
    "wickets": 0,
    "economy": 9.57
  },
  {
    "id": "V-Kohli-2012",
    "playerName": "V Kohli",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 364,
    "strikeRate": 109.3,
    "wickets": 0,
    "economy": 16.33
  },
  {
    "id": "RV-Uthappa-2015",
    "playerName": "RV Uthappa",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 364,
    "strikeRate": 126.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YS-Chahal-2017",
    "playerName": "YS Chahal",
    "season": 2017,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 50,
    "wickets": 14,
    "economy": 7.77
  },
  {
    "id": "JC-Archer-2025",
    "playerName": "JC Archer",
    "season": 2025,
    "role": "FINISHER",
    "runs": 63,
    "strikeRate": 123.5,
    "wickets": 12,
    "economy": 9.14
  },
  {
    "id": "Y-Venugopal-Rao-2008",
    "playerName": "Y Venugopal Rao",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 288,
    "strikeRate": 132.7,
    "wickets": 3,
    "economy": 9.34
  },
  {
    "id": "B-Kumar-2019",
    "playerName": "B Kumar",
    "season": 2019,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 63.2,
    "wickets": 14,
    "economy": 7.62
  },
  {
    "id": "Sandeep-Sharma-2020",
    "playerName": "Sandeep Sharma",
    "season": 2020,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 80,
    "wickets": 14,
    "economy": 7.08
  },
  {
    "id": "B-Sai-Sudharsan-2023",
    "playerName": "B Sai Sudharsan",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 362,
    "strikeRate": 137.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SV-Samson-2023",
    "playerName": "SV Samson",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 362,
    "strikeRate": 150.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SPD-Smith-2012",
    "playerName": "SPD Smith",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 362,
    "strikeRate": 133.1,
    "wickets": 0,
    "economy": 15
  },
  {
    "id": "WP-Saha-2014",
    "playerName": "WP Saha",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 362,
    "strikeRate": 142,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YK-Pathan-2015",
    "playerName": "YK Pathan",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 312,
    "strikeRate": 128.4,
    "wickets": 2,
    "economy": 10
  },
  {
    "id": "KD-Karthik-2017",
    "playerName": "KD Karthik",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 361,
    "strikeRate": 134.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Rana-2022",
    "playerName": "N Rana",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 361,
    "strikeRate": 139.4,
    "wickets": 0,
    "economy": 11.5
  },
  {
    "id": "AT-Rayudu-2014",
    "playerName": "AT Rayudu",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 361,
    "strikeRate": 122,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "I-Sharma-2019",
    "playerName": "I Sharma",
    "season": 2019,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 333.3,
    "wickets": 14,
    "economy": 7.66
  },
  {
    "id": "SR-Watson-2010",
    "playerName": "SR Watson",
    "season": 2010,
    "role": "FINISHER",
    "runs": 185,
    "strikeRate": 158.1,
    "wickets": 7,
    "economy": 7.99
  },
  {
    "id": "SK-Warne-2011",
    "playerName": "SK Warne",
    "season": 2011,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 50,
    "wickets": 14,
    "economy": 6.25
  },
  {
    "id": "AT-Rayudu-2020",
    "playerName": "AT Rayudu",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 359,
    "strikeRate": 124.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JC-Buttler-2024",
    "playerName": "JC Buttler",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 359,
    "strikeRate": 135,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RP-Singh-2010",
    "playerName": "RP Singh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 45,
    "wickets": 14,
    "economy": 8.68
  },
  {
    "id": "MK-Tiwary-2011",
    "playerName": "MK Tiwary",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 359,
    "strikeRate": 106.8,
    "wickets": 0,
    "economy": 10.62
  },
  {
    "id": "V-Kohli-2014",
    "playerName": "V Kohli",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 359,
    "strikeRate": 119.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Simran-Singh-2023",
    "playerName": "P Simran Singh",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 358,
    "strikeRate": 146.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Pooran-2023",
    "playerName": "N Pooran",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 358,
    "strikeRate": 165,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KC-Sangakkara-2011",
    "playerName": "KC Sangakkara",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 358,
    "strikeRate": 120.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Dhoni-2012",
    "playerName": "MS Dhoni",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 358,
    "strikeRate": 126.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Morris-2019",
    "playerName": "CH Morris",
    "season": 2019,
    "role": "FINISHER",
    "runs": 32,
    "strikeRate": 84.2,
    "wickets": 13,
    "economy": 9.15
  },
  {
    "id": "Ravi-Bishnoi-2020",
    "playerName": "Ravi Bishnoi",
    "season": 2020,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 58.3,
    "wickets": 14,
    "economy": 7.19
  },
  {
    "id": "S-Dube-2025",
    "playerName": "S Dube",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 357,
    "strikeRate": 123.5,
    "wickets": 0,
    "economy": 15.23
  },
  {
    "id": "KC-Sangakkara-2010",
    "playerName": "KC Sangakkara",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 357,
    "strikeRate": 137.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BB-McCullum-2011",
    "playerName": "BB McCullum",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 357,
    "strikeRate": 122.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YK-Pathan-2013",
    "playerName": "YK Pathan",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 332,
    "strikeRate": 134.4,
    "wickets": 1,
    "economy": 8.07
  },
  {
    "id": "DA-Miller-2015",
    "playerName": "DA Miller",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 357,
    "strikeRate": 130.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KK-Nair-2016",
    "playerName": "KK Nair",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 357,
    "strikeRate": 117.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AT-Rayudu-2010",
    "playerName": "AT Rayudu",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 356,
    "strikeRate": 138,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Badrinath-2010",
    "playerName": "S Badrinath",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 356,
    "strikeRate": 114.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Tewatia-2021",
    "playerName": "R Tewatia",
    "season": 2021,
    "role": "FINISHER",
    "runs": 155,
    "strikeRate": 102,
    "wickets": 8,
    "economy": 8.96
  },
  {
    "id": "SK-Trivedi-2012",
    "playerName": "SK Trivedi",
    "season": 2012,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 83.3,
    "wickets": 14,
    "economy": 7.17
  },
  {
    "id": "Ishan-Kishan-2025",
    "playerName": "Ishan Kishan",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 354,
    "strikeRate": 143.9,
    "wickets": 0,
    "economy": 24
  },
  {
    "id": "Yash-Dayal-2025",
    "playerName": "Yash Dayal",
    "season": 2025,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 14,
    "economy": 9.42
  },
  {
    "id": "GD-McGrath-2008",
    "playerName": "GD McGrath",
    "season": 2008,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 14,
    "economy": 6.67
  },
  {
    "id": "L-Balaji-2009",
    "playerName": "L Balaji",
    "season": 2009,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 40,
    "wickets": 14,
    "economy": 8.38
  },
  {
    "id": "PP-Chawla-2015",
    "playerName": "PP Chawla",
    "season": 2015,
    "role": "FINISHER",
    "runs": 54,
    "strikeRate": 110.2,
    "wickets": 12,
    "economy": 7.78
  },
  {
    "id": "A-Mishra-2016",
    "playerName": "A Mishra",
    "season": 2016,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 28.6,
    "wickets": 14,
    "economy": 7.39
  },
  {
    "id": "BB-McCullum-2016",
    "playerName": "BB McCullum",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 354,
    "strikeRate": 129.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BB-Sran-2016",
    "playerName": "BB Sran",
    "season": 2016,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 14,
    "economy": 8.08
  },
  {
    "id": "AJ-Tye-2017",
    "playerName": "AJ Tye",
    "season": 2017,
    "role": "FINISHER",
    "runs": 53,
    "strikeRate": 176.7,
    "wickets": 12,
    "economy": 6.84
  },
  {
    "id": "PP-Shaw-2019",
    "playerName": "PP Shaw",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 353,
    "strikeRate": 130.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Pooran-2020",
    "playerName": "N Pooran",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 353,
    "strikeRate": 164.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Nehra-2008",
    "playerName": "A Nehra",
    "season": 2008,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 23.1,
    "wickets": 14,
    "economy": 7.65
  },
  {
    "id": "S-Dhawan-2015",
    "playerName": "S Dhawan",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 353,
    "strikeRate": 120.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Rana-2020",
    "playerName": "N Rana",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 352,
    "strikeRate": 135.4,
    "wickets": 0,
    "economy": 10.62
  },
  {
    "id": "Rashid-Khan-2024",
    "playerName": "Rashid Khan",
    "season": 2024,
    "role": "FINISHER",
    "runs": 102,
    "strikeRate": 136,
    "wickets": 10,
    "economy": 8.52
  },
  {
    "id": "RV-Uthappa-2018",
    "playerName": "RV Uthappa",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 351,
    "strikeRate": 128.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TA-Boult-2021",
    "playerName": "TA Boult",
    "season": 2021,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 14,
    "economy": 7.74
  },
  {
    "id": "MR-Marsh-2022",
    "playerName": "MR Marsh",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 251,
    "strikeRate": 130.7,
    "wickets": 4,
    "economy": 8.05
  },
  {
    "id": "SS-Iyer-2024",
    "playerName": "SS Iyer",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 351,
    "strikeRate": 140.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DS-Rathi-2025",
    "playerName": "DS Rathi",
    "season": 2025,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 14,
    "economy": 8.13
  },
  {
    "id": "S-Gopal-2018",
    "playerName": "S Gopal",
    "season": 2018,
    "role": "FINISHER",
    "runs": 50,
    "strikeRate": 106.4,
    "wickets": 12,
    "economy": 7.63
  },
  {
    "id": "Sandeep-Sharma-2018",
    "playerName": "Sandeep Sharma",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 14,
    "economy": 7.34
  },
  {
    "id": "Ravi-Bishnoi-2022",
    "playerName": "Ravi Bishnoi",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 14,
    "economy": 8.15
  },
  {
    "id": "Shashank-Singh-2025",
    "playerName": "Shashank Singh",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 350,
    "strikeRate": 147.1,
    "wickets": 0,
    "economy": 13.5
  },
  {
    "id": "Mustafizur-Rahman-2024",
    "playerName": "Mustafizur Rahman",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 14,
    "economy": 8.64
  },
  {
    "id": "Mukesh-Kumar-2025",
    "playerName": "Mukesh Kumar",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 14,
    "economy": 9.67
  },
  {
    "id": "E-Malinga-2025",
    "playerName": "E Malinga",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 14,
    "economy": 8.87
  },
  {
    "id": "YA-Abdulla-2009",
    "playerName": "YA Abdulla",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 14,
    "economy": 8.13
  },
  {
    "id": "BW-Hilfenhaus-2012",
    "playerName": "BW Hilfenhaus",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 14,
    "economy": 6.75
  },
  {
    "id": "RP-Singh-2013",
    "playerName": "RP Singh",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 14,
    "economy": 8.03
  },
  {
    "id": "JD-Unadkat-2018",
    "playerName": "JD Unadkat",
    "season": 2018,
    "role": "FINISHER",
    "runs": 49,
    "strikeRate": 128.9,
    "wickets": 12,
    "economy": 9.41
  },
  {
    "id": "B-Kumar-2022",
    "playerName": "B Kumar",
    "season": 2022,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 85.7,
    "wickets": 13,
    "economy": 7.16
  },
  {
    "id": "MM-Ali-2023",
    "playerName": "MM Ali",
    "season": 2023,
    "role": "FINISHER",
    "runs": 124,
    "strikeRate": 134.8,
    "wickets": 9,
    "economy": 7.57
  },
  {
    "id": "MN-Samuels-2012",
    "playerName": "MN Samuels",
    "season": 2012,
    "role": "FINISHER",
    "runs": 124,
    "strikeRate": 100,
    "wickets": 9,
    "economy": 7.4
  },
  {
    "id": "DL-Vettori-2011",
    "playerName": "DL Vettori",
    "season": 2011,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 76.7,
    "wickets": 13,
    "economy": 6.06
  },
  {
    "id": "KA-Pollard-2014",
    "playerName": "KA Pollard",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 273,
    "strikeRate": 131.3,
    "wickets": 3,
    "economy": 9.94
  },
  {
    "id": "RE-van-der-Merwe-2009",
    "playerName": "RE van der Merwe",
    "season": 2009,
    "role": "FINISHER",
    "runs": 122,
    "strikeRate": 120.8,
    "wickets": 9,
    "economy": 7.55
  },
  {
    "id": "Avesh-Khan-2025",
    "playerName": "Avesh Khan",
    "season": 2025,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 150,
    "wickets": 13,
    "economy": 9.94
  },
  {
    "id": "ML-Hayden-2010",
    "playerName": "ML Hayden",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 346,
    "strikeRate": 117.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Pandey-2019",
    "playerName": "MK Pandey",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 345,
    "strikeRate": 128.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Pant-2020",
    "playerName": "RR Pant",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 345,
    "strikeRate": 108.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JM-Bairstow-2020",
    "playerName": "JM Bairstow",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 345,
    "strikeRate": 121.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Yadav-2024",
    "playerName": "SA Yadav",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 345,
    "strikeRate": 165.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SB-Jakati-2009",
    "playerName": "SB Jakati",
    "season": 2009,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 125,
    "wickets": 13,
    "economy": 7.71
  },
  {
    "id": "SK-Trivedi-2010",
    "playerName": "SK Trivedi",
    "season": 2010,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 133.3,
    "wickets": 13,
    "economy": 7.32
  },
  {
    "id": "RS-Bopara-2015",
    "playerName": "RS Bopara",
    "season": 2015,
    "role": "FINISHER",
    "runs": 145,
    "strikeRate": 119.8,
    "wickets": 8,
    "economy": 8
  },
  {
    "id": "Tilak-Varma-2023",
    "playerName": "Tilak Varma",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 343,
    "strikeRate": 151.8,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "DJ-Mitchell-2024",
    "playerName": "DJ Mitchell",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 318,
    "strikeRate": 139.5,
    "wickets": 1,
    "economy": 11.05
  },
  {
    "id": "Tilak-Varma-2025",
    "playerName": "Tilak Varma",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 343,
    "strikeRate": 132.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DE-Bollinger-2010",
    "playerName": "DE Bollinger",
    "season": 2010,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 105.9,
    "wickets": 13,
    "economy": 6.62
  },
  {
    "id": "R-Dravid-2011",
    "playerName": "R Dravid",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 343,
    "strikeRate": 107.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SC-Ganguly-2012",
    "playerName": "SC Ganguly",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 268,
    "strikeRate": 93.1,
    "wickets": 3,
    "economy": 9.54
  },
  {
    "id": "SV-Samson-2019",
    "playerName": "SV Samson",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 342,
    "strikeRate": 143.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "V-Kohli-2022",
    "playerName": "V Kohli",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 341,
    "strikeRate": 111.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TA-Boult-2023",
    "playerName": "TA Boult",
    "season": 2023,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 94.1,
    "wickets": 13,
    "economy": 8.07
  },
  {
    "id": "A-Mishra-2012",
    "playerName": "A Mishra",
    "season": 2012,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 76.2,
    "wickets": 13,
    "economy": 7.91
  },
  {
    "id": "RR-Pant-2022",
    "playerName": "RR Pant",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 340,
    "strikeRate": 145.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PP-Chawla-2024",
    "playerName": "PP Chawla",
    "season": 2024,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 100,
    "wickets": 13,
    "economy": 8.71
  },
  {
    "id": "S-Dhawan-2008",
    "playerName": "S Dhawan",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 340,
    "strikeRate": 110.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "OA-Shah-2012",
    "playerName": "OA Shah",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 340,
    "strikeRate": 126.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RD-Chahar-2021",
    "playerName": "RD Chahar",
    "season": 2021,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 93.3,
    "wickets": 13,
    "economy": 7.45
  },
  {
    "id": "G-Coetzee-2024",
    "playerName": "G Coetzee",
    "season": 2024,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 63.6,
    "wickets": 13,
    "economy": 9.92
  },
  {
    "id": "PP-Chawla-2013",
    "playerName": "PP Chawla",
    "season": 2013,
    "role": "FINISHER",
    "runs": 64,
    "strikeRate": 106.7,
    "wickets": 11,
    "economy": 7.38
  },
  {
    "id": "SV-Samson-2014",
    "playerName": "SV Samson",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 339,
    "strikeRate": 121.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Rahane-2014",
    "playerName": "AM Rahane",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 339,
    "strikeRate": 113.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PA-Patel-2015",
    "playerName": "PA Patel",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 339,
    "strikeRate": 132.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Iyer-2017",
    "playerName": "SS Iyer",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 338,
    "strikeRate": 135.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RD-Chahar-2019",
    "playerName": "RD Chahar",
    "season": 2019,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 109.1,
    "wickets": 13,
    "economy": 6.48
  },
  {
    "id": "DL-Chahar-2025",
    "playerName": "DL Chahar",
    "season": 2025,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 148,
    "wickets": 12,
    "economy": 8.62
  },
  {
    "id": "Washington-Sundar-2020",
    "playerName": "Washington Sundar",
    "season": 2020,
    "role": "FINISHER",
    "runs": 111,
    "strikeRate": 113.3,
    "wickets": 9,
    "economy": 5.96
  },
  {
    "id": "Y-Venugopal-Rao-2011",
    "playerName": "Y Venugopal Rao",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 336,
    "strikeRate": 115.1,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "M-Vijay-2012",
    "playerName": "M Vijay",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 336,
    "strikeRate": 123.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SE-Marsh-2012",
    "playerName": "SE Marsh",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 336,
    "strikeRate": 116.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BA-Stokes-2020",
    "playerName": "BA Stokes",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 285,
    "strikeRate": 137.7,
    "wickets": 2,
    "economy": 9.94
  },
  {
    "id": "P-Kumar-2012",
    "playerName": "P Kumar",
    "season": 2012,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 109.4,
    "wickets": 12,
    "economy": 6.76
  },
  {
    "id": "DPMD-Jayawardene-2012",
    "playerName": "DPMD Jayawardene",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 335,
    "strikeRate": 109.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "G-Gambhir-2014",
    "playerName": "G Gambhir",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 335,
    "strikeRate": 111.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KD-Karthik-2016",
    "playerName": "KD Karthik",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 335,
    "strikeRate": 122.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RG-Sharma-2020",
    "playerName": "RG Sharma",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 334,
    "strikeRate": 121.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Morris-2020",
    "playerName": "CH Morris",
    "season": 2020,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 161.9,
    "wickets": 12,
    "economy": 6.24
  },
  {
    "id": "P-Simran-Singh-2024",
    "playerName": "P Simran Singh",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 334,
    "strikeRate": 154.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "L-Balaji-2013",
    "playerName": "L Balaji",
    "season": 2013,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 90,
    "wickets": 13,
    "economy": 7.7
  },
  {
    "id": "Sandeep-Sharma-2015",
    "playerName": "Sandeep Sharma",
    "season": 2015,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 64.3,
    "wickets": 13,
    "economy": 6.93
  },
  {
    "id": "AT-Rayudu-2016",
    "playerName": "AT Rayudu",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 334,
    "strikeRate": 117.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RG-Sharma-2017",
    "playerName": "RG Sharma",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 333,
    "strikeRate": 119.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Rana-2017",
    "playerName": "N Rana",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 333,
    "strikeRate": 120.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RM-Patidar-2022",
    "playerName": "RM Patidar",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 333,
    "strikeRate": 143.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Dhruv-Jurel-2025",
    "playerName": "Dhruv Jurel",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 333,
    "strikeRate": 152.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AT-Rayudu-2012",
    "playerName": "AT Rayudu",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 333,
    "strikeRate": 127.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Agarwal-2019",
    "playerName": "MA Agarwal",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 332,
    "strikeRate": 137.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AR-Patel-2022",
    "playerName": "AR Patel",
    "season": 2022,
    "role": "FINISHER",
    "runs": 182,
    "strikeRate": 149.2,
    "wickets": 6,
    "economy": 7.43
  },
  {
    "id": "RG-Sharma-2023",
    "playerName": "RG Sharma",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 332,
    "strikeRate": 128.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Dhoni-2009",
    "playerName": "MS Dhoni",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 332,
    "strikeRate": 123,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KC-Sangakkara-2009",
    "playerName": "KC Sangakkara",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 332,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Narine-2016",
    "playerName": "SP Narine",
    "season": 2016,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 50,
    "wickets": 13,
    "economy": 7.1
  },
  {
    "id": "Sandeep-Sharma-2019",
    "playerName": "Sandeep Sharma",
    "season": 2019,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 150,
    "wickets": 13,
    "economy": 8.04
  },
  {
    "id": "PP-Chawla-2009",
    "playerName": "PP Chawla",
    "season": 2009,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 79.5,
    "wickets": 12,
    "economy": 7.01
  },
  {
    "id": "DPMD-Jayawardene-2013",
    "playerName": "DPMD Jayawardene",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 331,
    "strikeRate": 102.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KD-Karthik-2022",
    "playerName": "KD Karthik",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 330,
    "strikeRate": 175.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "J-Fraser-McGurk-2024",
    "playerName": "J Fraser-McGurk",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 330,
    "strikeRate": 220,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KP-Pietersen-2012",
    "playerName": "KP Pietersen",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 305,
    "strikeRate": 145.2,
    "wickets": 1,
    "economy": 7.95
  },
  {
    "id": "KK-Nair-2014",
    "playerName": "KK Nair",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 330,
    "strikeRate": 139.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JP-Faulkner-2017",
    "playerName": "JP Faulkner",
    "season": 2017,
    "role": "FINISHER",
    "runs": 54,
    "strikeRate": 90,
    "wickets": 11,
    "economy": 10.21
  },
  {
    "id": "CJ-Jordan-2020",
    "playerName": "CJ Jordan",
    "season": 2020,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 87.9,
    "wickets": 12,
    "economy": 9.14
  },
  {
    "id": "LS-Livingstone-2023",
    "playerName": "LS Livingstone",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 279,
    "strikeRate": 159.4,
    "wickets": 2,
    "economy": 13.43
  },
  {
    "id": "L-Balaji-2011",
    "playerName": "L Balaji",
    "season": 2011,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 200,
    "wickets": 13,
    "economy": 8.15
  },
  {
    "id": "M-Morkel-2014",
    "playerName": "M Morkel",
    "season": 2014,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 13,
    "economy": 7.4
  },
  {
    "id": "DS-Kulkarni-2015",
    "playerName": "DS Kulkarni",
    "season": 2015,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 33.3,
    "wickets": 13,
    "economy": 7.87
  },
  {
    "id": "UT-Yadav-2015",
    "playerName": "UT Yadav",
    "season": 2015,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 181.3,
    "wickets": 12,
    "economy": 8.73
  },
  {
    "id": "JC-Buttler-2020",
    "playerName": "JC Buttler",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 328,
    "strikeRate": 140.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PD-Collingwood-2010",
    "playerName": "PD Collingwood",
    "season": 2010,
    "role": "FINISHER",
    "runs": 203,
    "strikeRate": 127.7,
    "wickets": 5,
    "economy": 6.73
  },
  {
    "id": "CJ-Jordan-2016",
    "playerName": "CJ Jordan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 75,
    "wickets": 13,
    "economy": 8.82
  },
  {
    "id": "MC-Henriques-2017",
    "playerName": "MC Henriques",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 277,
    "strikeRate": 135.1,
    "wickets": 2,
    "economy": 10.05
  },
  {
    "id": "Abishek-Porel-2024",
    "playerName": "Abishek Porel",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 327,
    "strikeRate": 153.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DS-Kulkarni-2008",
    "playerName": "DS Kulkarni",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 11.8,
    "wickets": 13,
    "economy": 7.52
  },
  {
    "id": "DW-Steyn-2008",
    "playerName": "DW Steyn",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 13,
    "economy": 6.44
  },
  {
    "id": "JD-Unadkat-2013",
    "playerName": "JD Unadkat",
    "season": 2013,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 13,
    "economy": 7.48
  },
  {
    "id": "G-Gambhir-2015",
    "playerName": "G Gambhir",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 327,
    "strikeRate": 113.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PP-Chawla-2016",
    "playerName": "PP Chawla",
    "season": 2016,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 103.8,
    "wickets": 12,
    "economy": 7.58
  },
  {
    "id": "A-Mishra-2018",
    "playerName": "A Mishra",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 13,
    "economy": 7.04
  },
  {
    "id": "Ravi-Bishnoi-2021",
    "playerName": "Ravi Bishnoi",
    "season": 2021,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 20,
    "wickets": 13,
    "economy": 6.55
  },
  {
    "id": "AM-Rahane-2023",
    "playerName": "AM Rahane",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 326,
    "strikeRate": 168.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NT-Ellis-2023",
    "playerName": "NT Ellis",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 14.3,
    "wickets": 13,
    "economy": 8.81
  },
  {
    "id": "DL-Chahar-2023",
    "playerName": "DL Chahar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 13,
    "economy": 8.43
  },
  {
    "id": "KD-Karthik-2024",
    "playerName": "KD Karthik",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 326,
    "strikeRate": 167.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Nehra-2013",
    "playerName": "A Nehra",
    "season": 2013,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 12.5,
    "wickets": 13,
    "economy": 8.66
  },
  {
    "id": "SN-Thakur-2017",
    "playerName": "SN Thakur",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 13,
    "economy": 8.01
  },
  {
    "id": "Mohammed-Siraj-2018",
    "playerName": "Mohammed Siraj",
    "season": 2018,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 108.7,
    "wickets": 12,
    "economy": 8.45
  },
  {
    "id": "Shivam-Mavi-2021",
    "playerName": "Shivam Mavi",
    "season": 2021,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 119,
    "wickets": 12,
    "economy": 7.12
  },
  {
    "id": "Yash-Dayal-2022",
    "playerName": "Yash Dayal",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 13,
    "economy": 8.66
  },
  {
    "id": "SK-Trivedi-2011",
    "playerName": "SK Trivedi",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 13,
    "economy": 8.22
  },
  {
    "id": "KD-Karthik-2014",
    "playerName": "KD Karthik",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 325,
    "strikeRate": 124.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "L-Ngidi-2018",
    "playerName": "L Ngidi",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 13,
    "economy": 5.96
  },
  {
    "id": "T-Natarajan-2023",
    "playerName": "T Natarajan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 13,
    "economy": 9.04
  },
  {
    "id": "M-Pathirana-2024",
    "playerName": "M Pathirana",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 13,
    "economy": 7.24
  },
  {
    "id": "AB-Dinda-2016",
    "playerName": "AB Dinda",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 13,
    "economy": 7.38
  },
  {
    "id": "MK-Tiwary-2017",
    "playerName": "MK Tiwary",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 324,
    "strikeRate": 133.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Warner-2011",
    "playerName": "DA Warner",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 324,
    "strikeRate": 115.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SR-Tendulkar-2012",
    "playerName": "SR Tendulkar",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 324,
    "strikeRate": 109.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Vohra-2014",
    "playerName": "M Vohra",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 324,
    "strikeRate": 132.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Mathews-2013",
    "playerName": "AD Mathews",
    "season": 2013,
    "role": "FINISHER",
    "runs": 172,
    "strikeRate": 122,
    "wickets": 6,
    "economy": 7.82
  },
  {
    "id": "DW-Steyn-2014",
    "playerName": "DW Steyn",
    "season": 2014,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 84.6,
    "wickets": 12,
    "economy": 7.74
  },
  {
    "id": "Mohammad-Nabi-2019",
    "playerName": "Mohammad Nabi",
    "season": 2019,
    "role": "FINISHER",
    "runs": 121,
    "strikeRate": 149.4,
    "wickets": 8,
    "economy": 6.89
  },
  {
    "id": "SP-Narine-2022",
    "playerName": "SP Narine",
    "season": 2022,
    "role": "FINISHER",
    "runs": 71,
    "strikeRate": 177.5,
    "wickets": 10,
    "economy": 5.6
  },
  {
    "id": "Arshdeep-Singh-2022",
    "playerName": "Arshdeep Singh",
    "season": 2022,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 70,
    "wickets": 12,
    "economy": 7.61
  },
  {
    "id": "M-Markande-2023",
    "playerName": "M Markande",
    "season": 2023,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 150,
    "wickets": 12,
    "economy": 7.83
  },
  {
    "id": "BB-McCullum-2017",
    "playerName": "BB McCullum",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 320,
    "strikeRate": 141,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Kuldeep-Yadav-2017",
    "playerName": "Kuldeep Yadav",
    "season": 2017,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 90.9,
    "wickets": 12,
    "economy": 8.28
  },
  {
    "id": "Ishan-Kishan-2024",
    "playerName": "Ishan Kishan",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 320,
    "strikeRate": 144.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KC-Sangakkara-2008",
    "playerName": "KC Sangakkara",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 320,
    "strikeRate": 154.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RV-Uthappa-2008",
    "playerName": "RV Uthappa",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 320,
    "strikeRate": 110,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SPD-Smith-2019",
    "playerName": "SPD Smith",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 319,
    "strikeRate": 112.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shahbaz-Ahmed-2022",
    "playerName": "Shahbaz Ahmed",
    "season": 2022,
    "role": "FINISHER",
    "runs": 219,
    "strikeRate": 111.2,
    "wickets": 4,
    "economy": 9.3
  },
  {
    "id": "AB-de-Villiers-2012",
    "playerName": "AB de Villiers",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 319,
    "strikeRate": 157.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AC-Gilchrist-2013",
    "playerName": "AC Gilchrist",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 294,
    "strikeRate": 125.6,
    "wickets": 1,
    "economy": 0
  },
  {
    "id": "AD-Mathews-2015",
    "playerName": "AD Mathews",
    "season": 2015,
    "role": "FINISHER",
    "runs": 144,
    "strikeRate": 132.1,
    "wickets": 7,
    "economy": 8.08
  },
  {
    "id": "PJ-Cummins-2021",
    "playerName": "PJ Cummins",
    "season": 2021,
    "role": "FINISHER",
    "runs": 93,
    "strikeRate": 155,
    "wickets": 9,
    "economy": 8.46
  },
  {
    "id": "PVD-Chameera-2022",
    "playerName": "PVD Chameera",
    "season": 2022,
    "role": "FINISHER",
    "runs": 43,
    "strikeRate": 134.4,
    "wickets": 11,
    "economy": 8.48
  },
  {
    "id": "KS-Williamson-2020",
    "playerName": "KS Williamson",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 317,
    "strikeRate": 131.5,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "SA-Yadav-2021",
    "playerName": "SA Yadav",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 317,
    "strikeRate": 140.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WP-Saha-2022",
    "playerName": "WP Saha",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 317,
    "strikeRate": 119.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harbhajan-Singh-2016",
    "playerName": "Harbhajan Singh",
    "season": 2016,
    "role": "FINISHER",
    "runs": 92,
    "strikeRate": 101.1,
    "wickets": 9,
    "economy": 8.04
  },
  {
    "id": "R-Ashwin-2016",
    "playerName": "R Ashwin",
    "season": 2016,
    "role": "FINISHER",
    "runs": 41,
    "strikeRate": 107.9,
    "wickets": 11,
    "economy": 6.93
  },
  {
    "id": "MR-Marsh-2013",
    "playerName": "MR Marsh",
    "season": 2013,
    "role": "FINISHER",
    "runs": 140,
    "strikeRate": 128.4,
    "wickets": 7,
    "economy": 9.05
  },
  {
    "id": "SO-Hetmyer-2022",
    "playerName": "SO Hetmyer",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 314,
    "strikeRate": 142.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-de-Villiers-2021",
    "playerName": "AB de Villiers",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 313,
    "strikeRate": 145.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LR-Shukla-2008",
    "playerName": "LR Shukla",
    "season": 2008,
    "role": "FINISHER",
    "runs": 163,
    "strikeRate": 128.3,
    "wickets": 6,
    "economy": 9.69
  },
  {
    "id": "A-Nortje-2023",
    "playerName": "A Nortje",
    "season": 2023,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 127.6,
    "wickets": 11,
    "economy": 8.84
  },
  {
    "id": "RM-Patidar-2025",
    "playerName": "RM Patidar",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 312,
    "strikeRate": 138.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Mishra-2008",
    "playerName": "A Mishra",
    "season": 2008,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 88.1,
    "wickets": 11,
    "economy": 6.83
  },
  {
    "id": "SW-Tait-2010",
    "playerName": "SW Tait",
    "season": 2010,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 92.3,
    "wickets": 12,
    "economy": 8.02
  },
  {
    "id": "AB-de-Villiers-2011",
    "playerName": "AB de Villiers",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 312,
    "strikeRate": 125.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Vijay-2013",
    "playerName": "M Vijay",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 312,
    "strikeRate": 106.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JC-Buttler-2019",
    "playerName": "JC Buttler",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 311,
    "strikeRate": 146,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SPD-Smith-2020",
    "playerName": "SPD Smith",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 311,
    "strikeRate": 125.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Ashwin-2024",
    "playerName": "R Ashwin",
    "season": 2024,
    "role": "FINISHER",
    "runs": 86,
    "strikeRate": 113.2,
    "wickets": 9,
    "economy": 8.13
  },
  {
    "id": "SA-Asnodkar-2008",
    "playerName": "SA Asnodkar",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 311,
    "strikeRate": 129,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KP-Pietersen-2010",
    "playerName": "KP Pietersen",
    "season": 2010,
    "role": "FINISHER",
    "runs": 236,
    "strikeRate": 148.4,
    "wickets": 3,
    "economy": 7.7
  },
  {
    "id": "A-Nehra-2012",
    "playerName": "A Nehra",
    "season": 2012,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 84.6,
    "wickets": 12,
    "economy": 8.47
  },
  {
    "id": "S-Dhawan-2013",
    "playerName": "S Dhawan",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 311,
    "strikeRate": 118.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Warne-2010",
    "playerName": "SK Warne",
    "season": 2010,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 47.6,
    "wickets": 12,
    "economy": 7.65
  },
  {
    "id": "A-Ashish-Reddy-2012",
    "playerName": "A Ashish Reddy",
    "season": 2012,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 116.7,
    "wickets": 11,
    "economy": 8.45
  },
  {
    "id": "JM-Sharma-2023",
    "playerName": "JM Sharma",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 309,
    "strikeRate": 150.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AJ-Finch-2014",
    "playerName": "AJ Finch",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 309,
    "strikeRate": 115.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "UT-Yadav-2016",
    "playerName": "UT Yadav",
    "season": 2016,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 150,
    "wickets": 12,
    "economy": 9.06
  },
  {
    "id": "V-Kohli-2017",
    "playerName": "V Kohli",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 308,
    "strikeRate": 119.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CR-Brathwaite-2016",
    "playerName": "CR Brathwaite",
    "season": 2016,
    "role": "FINISHER",
    "runs": 83,
    "strikeRate": 207.5,
    "wickets": 9,
    "economy": 8.06
  },
  {
    "id": "DL-Chahar-2020",
    "playerName": "DL Chahar",
    "season": 2020,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 58.3,
    "wickets": 12,
    "economy": 7.51
  },
  {
    "id": "M-Theekshana-2022",
    "playerName": "M Theekshana",
    "season": 2022,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 100,
    "wickets": 12,
    "economy": 7.56
  },
  {
    "id": "TL-Suman-2010",
    "playerName": "TL Suman",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 307,
    "strikeRate": 116.3,
    "wickets": 0,
    "economy": 11.08
  },
  {
    "id": "V-Kohli-2010",
    "playerName": "V Kohli",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 307,
    "strikeRate": 142.1,
    "wickets": 0,
    "economy": 9.27
  },
  {
    "id": "EJG-Morgan-2013",
    "playerName": "EJG Morgan",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 307,
    "strikeRate": 122.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SM-Curran-2021",
    "playerName": "SM Curran",
    "season": 2021,
    "role": "FINISHER",
    "runs": 56,
    "strikeRate": 186.7,
    "wickets": 10,
    "economy": 9.53
  },
  {
    "id": "N-Pooran-2022",
    "playerName": "N Pooran",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 306,
    "strikeRate": 134.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "T-Stubbs-2025",
    "playerName": "T Stubbs",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 306,
    "strikeRate": 150.7,
    "wickets": 0,
    "economy": 20
  },
  {
    "id": "Shahid-Afridi-2008",
    "playerName": "Shahid Afridi",
    "season": 2008,
    "role": "FINISHER",
    "runs": 81,
    "strikeRate": 176.1,
    "wickets": 9,
    "economy": 7.69
  },
  {
    "id": "MG-Johnson-2015",
    "playerName": "MG Johnson",
    "season": 2015,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 81.6,
    "wickets": 11,
    "economy": 8.99
  },
  {
    "id": "Z-Khan-2016",
    "playerName": "Z Khan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 46.2,
    "wickets": 12,
    "economy": 7.55
  },
  {
    "id": "WPUJC-Vaas-2010",
    "playerName": "WPUJC Vaas",
    "season": 2010,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 88.2,
    "wickets": 11,
    "economy": 6.63
  },
  {
    "id": "JP-Duminy-2011",
    "playerName": "JP Duminy",
    "season": 2011,
    "role": "FINISHER",
    "runs": 205,
    "strikeRate": 116.5,
    "wickets": 4,
    "economy": 8.05
  },
  {
    "id": "Z-Khan-2017",
    "playerName": "Z Khan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 30.8,
    "wickets": 12,
    "economy": 7.88
  },
  {
    "id": "P-Kumar-2010",
    "playerName": "P Kumar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 12,
    "economy": 8.17
  },
  {
    "id": "Shakib-Al-Hasan-2011",
    "playerName": "Shakib Al Hasan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 126.1,
    "wickets": 11,
    "economy": 6.72
  },
  {
    "id": "M-Morkel-2015",
    "playerName": "M Morkel",
    "season": 2015,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 133.3,
    "wickets": 12,
    "economy": 7.31
  },
  {
    "id": "SA-Yadav-2022",
    "playerName": "SA Yadav",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 303,
    "strikeRate": 144.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Trivedi-2013",
    "playerName": "SK Trivedi",
    "season": 2013,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 42.9,
    "wickets": 12,
    "economy": 6.93
  },
  {
    "id": "F-du-Plessis-2014",
    "playerName": "F du Plessis",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 303,
    "strikeRate": 126.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Yuvraj-Singh-2017",
    "playerName": "Yuvraj Singh",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 252,
    "strikeRate": 134,
    "wickets": 2,
    "economy": 11.5
  },
  {
    "id": "Navdeep-Saini-2019",
    "playerName": "Navdeep Saini",
    "season": 2019,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 12,
    "economy": 8.23
  },
  {
    "id": "PA-Patel-2008",
    "playerName": "PA Patel",
    "season": 2008,
    "role": "MIDDLE_ORDER",
    "runs": 302,
    "strikeRate": 95.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CRD-Fernando-2008",
    "playerName": "CRD Fernando",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 200,
    "wickets": 12,
    "economy": 7.69
  },
  {
    "id": "AD-Mathews-2012",
    "playerName": "AD Mathews",
    "season": 2012,
    "role": "FINISHER",
    "runs": 127,
    "strikeRate": 115.5,
    "wickets": 7,
    "economy": 7.41
  },
  {
    "id": "UT-Yadav-2014",
    "playerName": "UT Yadav",
    "season": 2014,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 12,
    "economy": 8.08
  },
  {
    "id": "R-Ashwin-2015",
    "playerName": "R Ashwin",
    "season": 2015,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 152.9,
    "wickets": 10,
    "economy": 5.72
  },
  {
    "id": "KK-Nair-2018",
    "playerName": "KK Nair",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 301,
    "strikeRate": 133.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Prasidh-Krishna-2018",
    "playerName": "M Prasidh Krishna",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 20,
    "wickets": 12,
    "economy": 8.85
  },
  {
    "id": "V-Shankar-2023",
    "playerName": "V Shankar",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 301,
    "strikeRate": 151.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "I-Sharma-2024",
    "playerName": "I Sharma",
    "season": 2024,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 12.5,
    "wickets": 12,
    "economy": 8.77
  },
  {
    "id": "Abishek-Porel-2025",
    "playerName": "Abishek Porel",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 301,
    "strikeRate": 143.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "L-Balaji-2014",
    "playerName": "L Balaji",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 12,
    "economy": 8.67
  },
  {
    "id": "YS-Chahal-2014",
    "playerName": "YS Chahal",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 12,
    "economy": 7.01
  },
  {
    "id": "Karanveer-Singh-2014",
    "playerName": "Karanveer Singh",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 12,
    "economy": 7.81
  },
  {
    "id": "AJ-Finch-2017",
    "playerName": "AJ Finch",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 300,
    "strikeRate": 157.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DL-Chahar-2018",
    "playerName": "DL Chahar",
    "season": 2018,
    "role": "FINISHER",
    "runs": 50,
    "strikeRate": 166.7,
    "wickets": 10,
    "economy": 6.8
  },
  {
    "id": "YS-Chahal-2018",
    "playerName": "YS Chahal",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 7.17
  },
  {
    "id": "M-Prasidh-Krishna-2021",
    "playerName": "M Prasidh Krishna",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 8.47
  },
  {
    "id": "A-Raghuvanshi-2025",
    "playerName": "A Raghuvanshi",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 300,
    "strikeRate": 138.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-Dinda-2010",
    "playerName": "AB Dinda",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 6.46
  },
  {
    "id": "A-Singh-2012",
    "playerName": "A Singh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 9.32
  },
  {
    "id": "V-Pratap-Singh-2012",
    "playerName": "V Pratap Singh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 8.53
  },
  {
    "id": "SE-Marsh-2013",
    "playerName": "SE Marsh",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 300,
    "strikeRate": 117.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Zampa-2016",
    "playerName": "A Zampa",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 6.82
  },
  {
    "id": "A-Nortje-2021",
    "playerName": "A Nortje",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 6.35
  },
  {
    "id": "Yash-Thakur-2024",
    "playerName": "Yash Thakur",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 10.8
  },
  {
    "id": "JD-Unadkat-2025",
    "playerName": "JD Unadkat",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 7.27
  },
  {
    "id": "PP-Ojha-2011",
    "playerName": "PP Ojha",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 7.53
  },
  {
    "id": "L-Balaji-2012",
    "playerName": "L Balaji",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 12,
    "economy": 5.37
  },
  {
    "id": "A-Mishra-2017",
    "playerName": "A Mishra",
    "season": 2017,
    "role": "FINISHER",
    "runs": 49,
    "strikeRate": 87.5,
    "wickets": 10,
    "economy": 8.73
  },
  {
    "id": "SR-Watson-2020",
    "playerName": "SR Watson",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 299,
    "strikeRate": 117.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SO-Hetmyer-2023",
    "playerName": "SO Hetmyer",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 299,
    "strikeRate": 145.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JH-Kallis-2008",
    "playerName": "JH Kallis",
    "season": 2008,
    "role": "FINISHER",
    "runs": 199,
    "strikeRate": 105.9,
    "wickets": 4,
    "economy": 9.16
  },
  {
    "id": "DPMD-Jayawardene-2011",
    "playerName": "DPMD Jayawardene",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 299,
    "strikeRate": 109.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JM-Bairstow-2024",
    "playerName": "JM Bairstow",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 298,
    "strikeRate": 151.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Kumar-2024",
    "playerName": "B Kumar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 76.7,
    "wickets": 11,
    "economy": 9.33
  },
  {
    "id": "SPD-Smith-2015",
    "playerName": "SPD Smith",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 298,
    "strikeRate": 130.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "J-Suchith-2015",
    "playerName": "J Suchith",
    "season": 2015,
    "role": "FINISHER",
    "runs": 48,
    "strikeRate": 145.5,
    "wickets": 10,
    "economy": 8.49
  },
  {
    "id": "Q-de-Kock-2021",
    "playerName": "Q de Kock",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 297,
    "strikeRate": 113.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shubman-Gill-2019",
    "playerName": "Shubman Gill",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 296,
    "strikeRate": 122.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Mishra-2019",
    "playerName": "A Mishra",
    "season": 2019,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 80.8,
    "wickets": 11,
    "economy": 6.69
  },
  {
    "id": "SP-Narine-2023",
    "playerName": "SP Narine",
    "season": 2023,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 75,
    "wickets": 11,
    "economy": 7.89
  },
  {
    "id": "CA-Lynn-2017",
    "playerName": "CA Lynn",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 295,
    "strikeRate": 168.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Gayle-2020",
    "playerName": "CH Gayle",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 295,
    "strikeRate": 131.1,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "Mohammed-Siraj-2021",
    "playerName": "Mohammed Siraj",
    "season": 2021,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 76.9,
    "wickets": 11,
    "economy": 6.84
  },
  {
    "id": "K-Rabada-2024",
    "playerName": "K Rabada",
    "season": 2024,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 117.6,
    "wickets": 11,
    "economy": 8.84
  },
  {
    "id": "V-Sehwag-2013",
    "playerName": "V Sehwag",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 295,
    "strikeRate": 120.9,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "GJ-Maxwell-2018",
    "playerName": "GJ Maxwell",
    "season": 2018,
    "role": "FINISHER",
    "runs": 169,
    "strikeRate": 138.5,
    "wickets": 5,
    "economy": 8.08
  },
  {
    "id": "V-Shankar-2019",
    "playerName": "V Shankar",
    "season": 2019,
    "role": "FINISHER",
    "runs": 244,
    "strikeRate": 124.5,
    "wickets": 2,
    "economy": 8.08
  },
  {
    "id": "YK-Pathan-2012",
    "playerName": "YK Pathan",
    "season": 2012,
    "role": "FINISHER",
    "runs": 194,
    "strikeRate": 108.4,
    "wickets": 4,
    "economy": 8.06
  },
  {
    "id": "PA-Patel-2013",
    "playerName": "PA Patel",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 294,
    "strikeRate": 112.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KP-Pietersen-2014",
    "playerName": "KP Pietersen",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 294,
    "strikeRate": 123,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Nayar-2009",
    "playerName": "AM Nayar",
    "season": 2009,
    "role": "FINISHER",
    "runs": 193,
    "strikeRate": 124.5,
    "wickets": 4,
    "economy": 6.55
  },
  {
    "id": "BJ-Hodge-2013",
    "playerName": "BJ Hodge",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 293,
    "strikeRate": 130.8,
    "wickets": 0,
    "economy": 3
  },
  {
    "id": "PP-Chawla-2019",
    "playerName": "PP Chawla",
    "season": 2019,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 110.5,
    "wickets": 10,
    "economy": 9.1
  },
  {
    "id": "AD-Russell-2020",
    "playerName": "AD Russell",
    "season": 2020,
    "role": "FINISHER",
    "runs": 117,
    "strikeRate": 142.7,
    "wickets": 7,
    "economy": 9.37
  },
  {
    "id": "Mohammed-Siraj-2020",
    "playerName": "Mohammed Siraj",
    "season": 2020,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 121.4,
    "wickets": 11,
    "economy": 8.51
  },
  {
    "id": "MK-Pandey-2021",
    "playerName": "MK Pandey",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 292,
    "strikeRate": 118.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Naveen-ul-Haq-2023",
    "playerName": "Naveen-ul-Haq",
    "season": 2023,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 72.7,
    "wickets": 11,
    "economy": 7.78
  },
  {
    "id": "SE-Rutherford-2025",
    "playerName": "SE Rutherford",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 291,
    "strikeRate": 143.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "I-Sharma-2009",
    "playerName": "I Sharma",
    "season": 2009,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 123.1,
    "wickets": 11,
    "economy": 6.73
  },
  {
    "id": "P-Negi-2015",
    "playerName": "P Negi",
    "season": 2015,
    "role": "FINISHER",
    "runs": 116,
    "strikeRate": 150.6,
    "wickets": 7,
    "economy": 8.49
  },
  {
    "id": "SV-Samson-2016",
    "playerName": "SV Samson",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 291,
    "strikeRate": 109.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Dhoni-2017",
    "playerName": "MS Dhoni",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 290,
    "strikeRate": 111.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JL-Pattinson-2020",
    "playerName": "JL Pattinson",
    "season": 2020,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 115.4,
    "wickets": 11,
    "economy": 8.68
  },
  {
    "id": "KA-Jamieson-2021",
    "playerName": "KA Jamieson",
    "season": 2021,
    "role": "FINISHER",
    "runs": 65,
    "strikeRate": 118.2,
    "wickets": 9,
    "economy": 9.08
  },
  {
    "id": "MJ-Santner-2025",
    "playerName": "MJ Santner",
    "season": 2025,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 117.6,
    "wickets": 10,
    "economy": 7.68
  },
  {
    "id": "DR-Smith-2017",
    "playerName": "DR Smith",
    "season": 2017,
    "role": "FINISHER",
    "runs": 239,
    "strikeRate": 151.3,
    "wickets": 2,
    "economy": 11.05
  },
  {
    "id": "S-Dube-2022",
    "playerName": "S Dube",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 289,
    "strikeRate": 149,
    "wickets": 0,
    "economy": 17.14
  },
  {
    "id": "M-Jansen-2023",
    "playerName": "M Jansen",
    "season": 2023,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 86.7,
    "wickets": 10,
    "economy": 9.2
  },
  {
    "id": "AC-Gilchrist-2010",
    "playerName": "AC Gilchrist",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 289,
    "strikeRate": 144.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BB-McCullum-2012",
    "playerName": "BB McCullum",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 289,
    "strikeRate": 100.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SN-Thakur-2023",
    "playerName": "SN Thakur",
    "season": 2023,
    "role": "FINISHER",
    "runs": 113,
    "strikeRate": 156.9,
    "wickets": 7,
    "economy": 10.09
  },
  {
    "id": "Vijaykumar-Vyshak-2023",
    "playerName": "Vijaykumar Vyshak",
    "season": 2023,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 130,
    "wickets": 11,
    "economy": 9.92
  },
  {
    "id": "KD-Karthik-2009",
    "playerName": "KD Karthik",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 288,
    "strikeRate": 128.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KK-Cooper-2012",
    "playerName": "KK Cooper",
    "season": 2012,
    "role": "FINISHER",
    "runs": 38,
    "strikeRate": 190,
    "wickets": 10,
    "economy": 7.53
  },
  {
    "id": "S-Gopal-2020",
    "playerName": "S Gopal",
    "season": 2020,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 90.2,
    "wickets": 10,
    "economy": 8.44
  },
  {
    "id": "MS-Dhoni-2010",
    "playerName": "MS Dhoni",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 287,
    "strikeRate": 133.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WD-Parnell-2011",
    "playerName": "WD Parnell",
    "season": 2011,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 88.1,
    "wickets": 10,
    "economy": 7.24
  },
  {
    "id": "SR-Tendulkar-2013",
    "playerName": "SR Tendulkar",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 287,
    "strikeRate": 118.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RG-Sharma-2018",
    "playerName": "RG Sharma",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 286,
    "strikeRate": 128.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AS-Rajpoot-2018",
    "playerName": "AS Rajpoot",
    "season": 2018,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 61.1,
    "wickets": 11,
    "economy": 8.31
  },
  {
    "id": "MA-Wood-2023",
    "playerName": "MA Wood",
    "season": 2023,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 220,
    "wickets": 11,
    "economy": 8.35
  },
  {
    "id": "G-Gambhir-2009",
    "playerName": "G Gambhir",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 286,
    "strikeRate": 101.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BB-McCullum-2009",
    "playerName": "BB McCullum",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 286,
    "strikeRate": 115.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YK-Pathan-2018",
    "playerName": "YK Pathan",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 260,
    "strikeRate": 123.2,
    "wickets": 1,
    "economy": 7
  },
  {
    "id": "JJ-Roy-2023",
    "playerName": "JJ Roy",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 285,
    "strikeRate": 145.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SV-Samson-2025",
    "playerName": "SV Samson",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 285,
    "strikeRate": 139,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Theekshana-2025",
    "playerName": "M Theekshana",
    "season": 2025,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 37,
    "wickets": 11,
    "economy": 9.12
  },
  {
    "id": "TM-Dilshan-2012",
    "playerName": "TM Dilshan",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 285,
    "strikeRate": 104,
    "wickets": 0,
    "economy": 10.64
  },
  {
    "id": "MK-Pandey-2018",
    "playerName": "MK Pandey",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 284,
    "strikeRate": 110.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RV-Uthappa-2019",
    "playerName": "RV Uthappa",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 284,
    "strikeRate": 110.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PWH-de-Silva-2025",
    "playerName": "PWH de Silva",
    "season": 2025,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 60,
    "wickets": 11,
    "economy": 8.99
  },
  {
    "id": "DL-Vettori-2009",
    "playerName": "DL Vettori",
    "season": 2009,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 106.3,
    "wickets": 10,
    "economy": 7.91
  },
  {
    "id": "MS-Dhoni-2016",
    "playerName": "MS Dhoni",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 284,
    "strikeRate": 129.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Jadeja-2017",
    "playerName": "RA Jadeja",
    "season": 2017,
    "role": "FINISHER",
    "runs": 158,
    "strikeRate": 133.9,
    "wickets": 5,
    "economy": 9.22
  },
  {
    "id": "HH-Pandya-2020",
    "playerName": "HH Pandya",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 283,
    "strikeRate": 169.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PP-Shaw-2022",
    "playerName": "PP Shaw",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 283,
    "strikeRate": 146.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "OC-McCoy-2022",
    "playerName": "OC McCoy",
    "season": 2022,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 160,
    "wickets": 11,
    "economy": 8.39
  },
  {
    "id": "KH-Pandya-2024",
    "playerName": "KH Pandya",
    "season": 2024,
    "role": "FINISHER",
    "runs": 133,
    "strikeRate": 118.8,
    "wickets": 6,
    "economy": 7.55
  },
  {
    "id": "R-Bhatia-2009",
    "playerName": "R Bhatia",
    "season": 2009,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 44.4,
    "wickets": 11,
    "economy": 6.9
  },
  {
    "id": "J-Botha-2012",
    "playerName": "J Botha",
    "season": 2012,
    "role": "FINISHER",
    "runs": 58,
    "strikeRate": 105.5,
    "wickets": 9,
    "economy": 7.27
  },
  {
    "id": "Imran-Tahir-2014",
    "playerName": "Imran Tahir",
    "season": 2014,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 80,
    "wickets": 11,
    "economy": 8.06
  },
  {
    "id": "SL-Malinga-2017",
    "playerName": "SL Malinga",
    "season": 2017,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 233.3,
    "wickets": 11,
    "economy": 8.11
  },
  {
    "id": "AT-Rayudu-2019",
    "playerName": "AT Rayudu",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 282,
    "strikeRate": 91.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Nithish-Kumar-Reddy-2025",
    "playerName": "Nithish Kumar Reddy",
    "season": 2025,
    "role": "FINISHER",
    "runs": 182,
    "strikeRate": 113,
    "wickets": 4,
    "economy": 8.29
  },
  {
    "id": "DA-Warner-2010",
    "playerName": "DA Warner",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 282,
    "strikeRate": 144.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KD-Karthik-2011",
    "playerName": "KD Karthik",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 282,
    "strikeRate": 125.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KK-Nair-2017",
    "playerName": "KK Nair",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 281,
    "strikeRate": 122.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KA-Pollard-2019",
    "playerName": "KA Pollard",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 281,
    "strikeRate": 151.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Kuldeep-Yadav-2023",
    "playerName": "Kuldeep Yadav",
    "season": 2023,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 62,
    "wickets": 10,
    "economy": 7.32
  },
  {
    "id": "MF-Maharoof-2010",
    "playerName": "MF Maharoof",
    "season": 2010,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 129.2,
    "wickets": 10,
    "economy": 8.46
  },
  {
    "id": "JD-Ryder-2012",
    "playerName": "JD Ryder",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 256,
    "strikeRate": 118.5,
    "wickets": 1,
    "economy": 10.33
  },
  {
    "id": "RP-Singh-2012",
    "playerName": "RP Singh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 50,
    "wickets": 11,
    "economy": 7.57
  },
  {
    "id": "AT-Rayudu-2015",
    "playerName": "AT Rayudu",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 281,
    "strikeRate": 144.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WG-Jacks-2024",
    "playerName": "WG Jacks",
    "season": 2024,
    "role": "FINISHER",
    "runs": 230,
    "strikeRate": 172.9,
    "wickets": 2,
    "economy": 10.91
  },
  {
    "id": "LRPL-Taylor-2009",
    "playerName": "LRPL Taylor",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 280,
    "strikeRate": 132.7,
    "wickets": 0,
    "economy": 11.14
  },
  {
    "id": "DP-Nannes-2010",
    "playerName": "DP Nannes",
    "season": 2010,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 30.8,
    "wickets": 11,
    "economy": 6.47
  },
  {
    "id": "I-Sharma-2011",
    "playerName": "I Sharma",
    "season": 2011,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 11,
    "economy": 7.07
  },
  {
    "id": "KV-Sharma-2023",
    "playerName": "KV Sharma",
    "season": 2023,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 11,
    "economy": 10.41
  },
  {
    "id": "JP-Inglis-2025",
    "playerName": "JP Inglis",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 278,
    "strikeRate": 157.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KD-Karthik-2010",
    "playerName": "KD Karthik",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 278,
    "strikeRate": 114.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MJ-Lumb-2010",
    "playerName": "MJ Lumb",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 278,
    "strikeRate": 141.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ishan-Kishan-2017",
    "playerName": "Ishan Kishan",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 277,
    "strikeRate": 129.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harpreet-Brar-2023",
    "playerName": "Harpreet Brar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 123.8,
    "wickets": 9,
    "economy": 7.92
  },
  {
    "id": "Naman-Dhir-2025",
    "playerName": "Naman Dhir",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 252,
    "strikeRate": 177.5,
    "wickets": 1,
    "economy": 5.25
  },
  {
    "id": "AB-Dinda-2008",
    "playerName": "AB Dinda",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 11,
    "economy": 6.51
  },
  {
    "id": "PP-Ojha-2008",
    "playerName": "PP Ojha",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 11,
    "economy": 7.6
  },
  {
    "id": "G-Gambhir-2010",
    "playerName": "G Gambhir",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 277,
    "strikeRate": 124.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Kumar-2011",
    "playerName": "P Kumar",
    "season": 2011,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 81.8,
    "wickets": 10,
    "economy": 7.48
  },
  {
    "id": "M-Kartik-2013",
    "playerName": "M Kartik",
    "season": 2013,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 11,
    "economy": 7.22
  },
  {
    "id": "CH-Gayle-2016",
    "playerName": "CH Gayle",
    "season": 2016,
    "role": "FINISHER",
    "runs": 227,
    "strikeRate": 142.8,
    "wickets": 2,
    "economy": 6
  },
  {
    "id": "JD-Unadkat-2019",
    "playerName": "JD Unadkat",
    "season": 2019,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 11,
    "economy": 10.27
  },
  {
    "id": "Abhishek-Sharma-2023",
    "playerName": "Abhishek Sharma",
    "season": 2023,
    "role": "FINISHER",
    "runs": 226,
    "strikeRate": 136.1,
    "wickets": 2,
    "economy": 10.16
  },
  {
    "id": "VG-Arora-2024",
    "playerName": "VG Arora",
    "season": 2024,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 11,
    "economy": 8.48
  },
  {
    "id": "AC-Thomas-2011",
    "playerName": "AC Thomas",
    "season": 2011,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 11,
    "economy": 7.5
  },
  {
    "id": "A-Nehra-2016",
    "playerName": "A Nehra",
    "season": 2016,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 11,
    "economy": 7.45
  },
  {
    "id": "Ishan-Kishan-2018",
    "playerName": "Ishan Kishan",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 275,
    "strikeRate": 147.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Arshdeep-Singh-2020",
    "playerName": "Arshdeep Singh",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 8.32
  },
  {
    "id": "M-Muralitharan-2008",
    "playerName": "M Muralitharan",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 6.76
  },
  {
    "id": "L-Balaji-2008",
    "playerName": "L Balaji",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 8.58
  },
  {
    "id": "R-Bhatia-2011",
    "playerName": "R Bhatia",
    "season": 2011,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 108.7,
    "wickets": 10,
    "economy": 6.59
  },
  {
    "id": "JR-Hazlewood-2021",
    "playerName": "JR Hazlewood",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 8.43
  },
  {
    "id": "Suyash-Sharma-2023",
    "playerName": "Suyash Sharma",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 8.28
  },
  {
    "id": "M-Theekshana-2023",
    "playerName": "M Theekshana",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 8.07
  },
  {
    "id": "Ashwani-Kumar-2025",
    "playerName": "Ashwani Kumar",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 10.64
  },
  {
    "id": "IC-Pandey-2015",
    "playerName": "IC Pandey",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 7.24
  },
  {
    "id": "S-Aravind-2016",
    "playerName": "S Aravind",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 11,
    "economy": 7.32
  },
  {
    "id": "AT-Rayudu-2022",
    "playerName": "AT Rayudu",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 274,
    "strikeRate": 119.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KL-Rahul-2023",
    "playerName": "KL Rahul",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 274,
    "strikeRate": 110.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "STR-Binny-2015",
    "playerName": "STR Binny",
    "season": 2015,
    "role": "FINISHER",
    "runs": 74,
    "strikeRate": 107.2,
    "wickets": 8,
    "economy": 7.21
  },
  {
    "id": "P-Kumar-2016",
    "playerName": "P Kumar",
    "season": 2016,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 88.9,
    "wickets": 10,
    "economy": 7.67
  },
  {
    "id": "JC-Buttler-2017",
    "playerName": "JC Buttler",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 273,
    "strikeRate": 146.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BA-Stokes-2019",
    "playerName": "BA Stokes",
    "season": 2019,
    "role": "FINISHER",
    "runs": 123,
    "strikeRate": 123,
    "wickets": 6,
    "economy": 11.01
  },
  {
    "id": "RA-Tripathi-2023",
    "playerName": "RA Tripathi",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 273,
    "strikeRate": 125.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AK-Markram-2023",
    "playerName": "AK Markram",
    "season": 2023,
    "role": "FINISHER",
    "runs": 248,
    "strikeRate": 124,
    "wickets": 1,
    "economy": 8.69
  },
  {
    "id": "Yuvraj-Singh-2015",
    "playerName": "Yuvraj Singh",
    "season": 2015,
    "role": "FINISHER",
    "runs": 248,
    "strikeRate": 115.3,
    "wickets": 1,
    "economy": 8.18
  },
  {
    "id": "R-Vinay-Kumar-2009",
    "playerName": "R Vinay Kumar",
    "season": 2009,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 106.8,
    "wickets": 9,
    "economy": 8.23
  },
  {
    "id": "M-Kartik-2010",
    "playerName": "M Kartik",
    "season": 2010,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 100,
    "wickets": 10,
    "economy": 6.58
  },
  {
    "id": "SP-Narine-2020",
    "playerName": "SP Narine",
    "season": 2020,
    "role": "FINISHER",
    "runs": 121,
    "strikeRate": 131.5,
    "wickets": 6,
    "economy": 8.03
  },
  {
    "id": "RD-Chahar-2024",
    "playerName": "RD Chahar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 140,
    "wickets": 10,
    "economy": 8.89
  },
  {
    "id": "R-Dravid-2009",
    "playerName": "R Dravid",
    "season": 2009,
    "role": "MIDDLE_ORDER",
    "runs": 271,
    "strikeRate": 113.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KS-Williamson-2021",
    "playerName": "KS Williamson",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 270,
    "strikeRate": 108,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Agarwal-2023",
    "playerName": "MA Agarwal",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 270,
    "strikeRate": 123.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BJ-Hodge-2012",
    "playerName": "BJ Hodge",
    "season": 2012,
    "role": "FINISHER",
    "runs": 245,
    "strikeRate": 136.1,
    "wickets": 1,
    "economy": 11
  },
  {
    "id": "WP-Saha-2016",
    "playerName": "WP Saha",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 270,
    "strikeRate": 126.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SPD-Smith-2016",
    "playerName": "SPD Smith",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 270,
    "strikeRate": 146.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Pant-2025",
    "playerName": "RR Pant",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 269,
    "strikeRate": 129.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JP-Duminy-2012",
    "playerName": "JP Duminy",
    "season": 2012,
    "role": "FINISHER",
    "runs": 244,
    "strikeRate": 125.1,
    "wickets": 1,
    "economy": 8
  },
  {
    "id": "KMA-Paul-2019",
    "playerName": "KMA Paul",
    "season": 2019,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 69.2,
    "wickets": 10,
    "economy": 7.97
  },
  {
    "id": "LH-Ferguson-2020",
    "playerName": "LH Ferguson",
    "season": 2020,
    "role": "FINISHER",
    "runs": 43,
    "strikeRate": 148.3,
    "wickets": 9,
    "economy": 7.23
  },
  {
    "id": "AJ-Finch-2020",
    "playerName": "AJ Finch",
    "season": 2020,
    "role": "MIDDLE_ORDER",
    "runs": 268,
    "strikeRate": 105.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KH-Pandya-2021",
    "playerName": "KH Pandya",
    "season": 2021,
    "role": "FINISHER",
    "runs": 143,
    "strikeRate": 113.5,
    "wickets": 5,
    "economy": 7.63
  },
  {
    "id": "RG-Sharma-2022",
    "playerName": "RG Sharma",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 268,
    "strikeRate": 114.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "L-Balaji-2010",
    "playerName": "L Balaji",
    "season": 2010,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 90,
    "wickets": 10,
    "economy": 8.73
  },
  {
    "id": "YK-Pathan-2014",
    "playerName": "YK Pathan",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 268,
    "strikeRate": 159.5,
    "wickets": 0,
    "economy": 10
  },
  {
    "id": "KM-Jadhav-2017",
    "playerName": "KM Jadhav",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 267,
    "strikeRate": 137.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HH-Gibbs-2010",
    "playerName": "HH Gibbs",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 267,
    "strikeRate": 109.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Jadeja-2022",
    "playerName": "RA Jadeja",
    "season": 2022,
    "role": "FINISHER",
    "runs": 116,
    "strikeRate": 110.5,
    "wickets": 6,
    "economy": 7.45
  },
  {
    "id": "AB-Agarkar-2009",
    "playerName": "AB Agarkar",
    "season": 2009,
    "role": "FINISHER",
    "runs": 66,
    "strikeRate": 113.8,
    "wickets": 8,
    "economy": 8.83
  },
  {
    "id": "GH-Vihari-2013",
    "playerName": "GH Vihari",
    "season": 2013,
    "role": "FINISHER",
    "runs": 241,
    "strikeRate": 84,
    "wickets": 1,
    "economy": 6.32
  },
  {
    "id": "Rashid-Khan-2025",
    "playerName": "Rashid Khan",
    "season": 2025,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 125,
    "wickets": 9,
    "economy": 9.34
  },
  {
    "id": "AB-McDonald-2010",
    "playerName": "AB McDonald",
    "season": 2010,
    "role": "FINISHER",
    "runs": 65,
    "strikeRate": 120.4,
    "wickets": 8,
    "economy": 9.74
  },
  {
    "id": "B-Kumar-2012",
    "playerName": "B Kumar",
    "season": 2012,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 97.6,
    "wickets": 9,
    "economy": 7.33
  },
  {
    "id": "GB-Hogg-2012",
    "playerName": "GB Hogg",
    "season": 2012,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 93.8,
    "wickets": 10,
    "economy": 7.15
  },
  {
    "id": "AT-Rayudu-2013",
    "playerName": "AT Rayudu",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 265,
    "strikeRate": 112.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SE-Marsh-2017",
    "playerName": "SE Marsh",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 264,
    "strikeRate": 133.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RV-Uthappa-2011",
    "playerName": "RV Uthappa",
    "season": 2011,
    "role": "MIDDLE_ORDER",
    "runs": 264,
    "strikeRate": 122.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Kumar-2018",
    "playerName": "B Kumar",
    "season": 2018,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 72.2,
    "wickets": 10,
    "economy": 7.49
  },
  {
    "id": "PJ-Cummins-2022",
    "playerName": "PJ Cummins",
    "season": 2022,
    "role": "FINISHER",
    "runs": 63,
    "strikeRate": 262.5,
    "wickets": 8,
    "economy": 10.35
  },
  {
    "id": "SN-Thakur-2020",
    "playerName": "SN Thakur",
    "season": 2020,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 57.1,
    "wickets": 10,
    "economy": 8.25
  },
  {
    "id": "MK-Tiwary-2010",
    "playerName": "MK Tiwary",
    "season": 2010,
    "role": "FINISHER",
    "runs": 237,
    "strikeRate": 123.4,
    "wickets": 1,
    "economy": 9.43
  },
  {
    "id": "MP-Stoinis-2019",
    "playerName": "MP Stoinis",
    "season": 2019,
    "role": "FINISHER",
    "runs": 211,
    "strikeRate": 132.7,
    "wickets": 2,
    "economy": 8.56
  },
  {
    "id": "Lalit-Yadav-2022",
    "playerName": "Lalit Yadav",
    "season": 2022,
    "role": "FINISHER",
    "runs": 161,
    "strikeRate": 105.9,
    "wickets": 4,
    "economy": 8.29
  },
  {
    "id": "D-Padikkal-2023",
    "playerName": "D Padikkal",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 261,
    "strikeRate": 126.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JM-Sharma-2025",
    "playerName": "JM Sharma",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 261,
    "strikeRate": 168.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harpreet-Brar-2025",
    "playerName": "Harpreet Brar",
    "season": 2025,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 84.6,
    "wickets": 10,
    "economy": 8.51
  },
  {
    "id": "MEK-Hussey-2012",
    "playerName": "MEK Hussey",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 261,
    "strikeRate": 108.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Tiwary-2012",
    "playerName": "MK Tiwary",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 260,
    "strikeRate": 103.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mandeep-Singh-2013",
    "playerName": "Mandeep Singh",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 260,
    "strikeRate": 114,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KH-Pandya-2020",
    "playerName": "KH Pandya",
    "season": 2020,
    "role": "FINISHER",
    "runs": 109,
    "strikeRate": 118.5,
    "wickets": 6,
    "economy": 7.37
  },
  {
    "id": "DA-Miller-2023",
    "playerName": "DA Miller",
    "season": 2023,
    "role": "MIDDLE_ORDER",
    "runs": 259,
    "strikeRate": 140.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Bhatia-2008",
    "playerName": "R Bhatia",
    "season": 2008,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 121.4,
    "wickets": 9,
    "economy": 8.28
  },
  {
    "id": "GJ-Bailey-2015",
    "playerName": "GJ Bailey",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 259,
    "strikeRate": 132.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YBK-Jaiswal-2022",
    "playerName": "YBK Jaiswal",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 258,
    "strikeRate": 130.3,
    "wickets": 0,
    "economy": 36
  },
  {
    "id": "PWH-de-Silva-2023",
    "playerName": "PWH de Silva",
    "season": 2023,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 110,
    "wickets": 9,
    "economy": 8.88
  },
  {
    "id": "Harbhajan-Singh-2012",
    "playerName": "Harbhajan Singh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 108,
    "strikeRate": 131.7,
    "wickets": 6,
    "economy": 6.97
  },
  {
    "id": "AT-Rayudu-2021",
    "playerName": "AT Rayudu",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 257,
    "strikeRate": 146.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Azmatullah-Omarzai-2025",
    "playerName": "Azmatullah Omarzai",
    "season": 2025,
    "role": "FINISHER",
    "runs": 57,
    "strikeRate": 132.6,
    "wickets": 8,
    "economy": 10.01
  },
  {
    "id": "SB-Jakati-2012",
    "playerName": "SB Jakati",
    "season": 2012,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 58.3,
    "wickets": 10,
    "economy": 8.15
  },
  {
    "id": "M-Morkel-2013",
    "playerName": "M Morkel",
    "season": 2013,
    "role": "FINISHER",
    "runs": 57,
    "strikeRate": 190,
    "wickets": 8,
    "economy": 8.28
  },
  {
    "id": "GJ-Bailey-2014",
    "playerName": "GJ Bailey",
    "season": 2014,
    "role": "MIDDLE_ORDER",
    "runs": 257,
    "strikeRate": 135.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GB-Hogg-2015",
    "playerName": "GB Hogg",
    "season": 2015,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 10,
    "economy": 6.99
  },
  {
    "id": "KS-Williamson-2017",
    "playerName": "KS Williamson",
    "season": 2017,
    "role": "MIDDLE_ORDER",
    "runs": 256,
    "strikeRate": 150.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MP-Stoinis-2022",
    "playerName": "MP Stoinis",
    "season": 2022,
    "role": "FINISHER",
    "runs": 156,
    "strikeRate": 134.5,
    "wickets": 4,
    "economy": 10.77
  },
  {
    "id": "Sandeep-Sharma-2025",
    "playerName": "Sandeep Sharma",
    "season": 2025,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 100,
    "wickets": 10,
    "economy": 9.28
  },
  {
    "id": "R-Dravid-2010",
    "playerName": "R Dravid",
    "season": 2010,
    "role": "MIDDLE_ORDER",
    "runs": 256,
    "strikeRate": 126.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Warner-2012",
    "playerName": "DA Warner",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 256,
    "strikeRate": 159,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "K-Rabada-2017",
    "playerName": "K Rabada",
    "season": 2017,
    "role": "FINISHER",
    "runs": 55,
    "strikeRate": 80.9,
    "wickets": 8,
    "economy": 8.67
  },
  {
    "id": "Mohammed-Siraj-2022",
    "playerName": "Mohammed Siraj",
    "season": 2022,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 90.9,
    "wickets": 9,
    "economy": 9.69
  },
  {
    "id": "NV-Ojha-2012",
    "playerName": "NV Ojha",
    "season": 2012,
    "role": "MIDDLE_ORDER",
    "runs": 255,
    "strikeRate": 110.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Bisla-2013",
    "playerName": "MS Bisla",
    "season": 2013,
    "role": "MIDDLE_ORDER",
    "runs": 255,
    "strikeRate": 102.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JC-Buttler-2016",
    "playerName": "JC Buttler",
    "season": 2016,
    "role": "MIDDLE_ORDER",
    "runs": 255,
    "strikeRate": 134.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TG-Southee-2016",
    "playerName": "TG Southee",
    "season": 2016,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 150,
    "wickets": 9,
    "economy": 7.46
  },
  {
    "id": "KD-Karthik-2019",
    "playerName": "KD Karthik",
    "season": 2019,
    "role": "MIDDLE_ORDER",
    "runs": 254,
    "strikeRate": 141.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Ashwin-2020",
    "playerName": "M Ashwin",
    "season": 2020,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 10,
    "economy": 7.54
  },
  {
    "id": "S-Dube-2020",
    "playerName": "S Dube",
    "season": 2020,
    "role": "FINISHER",
    "runs": 129,
    "strikeRate": 118.3,
    "wickets": 5,
    "economy": 8.18
  },
  {
    "id": "Kartik-Tyagi-2020",
    "playerName": "Kartik Tyagi",
    "season": 2020,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 66.7,
    "wickets": 10,
    "economy": 9.26
  },
  {
    "id": "JC-Buttler-2021",
    "playerName": "JC Buttler",
    "season": 2021,
    "role": "MIDDLE_ORDER",
    "runs": 254,
    "strikeRate": 146.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ravi-Bishnoi-2024",
    "playerName": "Ravi Bishnoi",
    "season": 2024,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 66.7,
    "wickets": 10,
    "economy": 8.53
  },
  {
    "id": "AB-Agarkar-2008",
    "playerName": "AB Agarkar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 54,
    "strikeRate": 110.2,
    "wickets": 8,
    "economy": 7.54
  },
  {
    "id": "PP-Ojha-2012",
    "playerName": "PP Ojha",
    "season": 2012,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 28.6,
    "wickets": 10,
    "economy": 7.16
  },
  {
    "id": "R-Vinay-Kumar-2014",
    "playerName": "R Vinay Kumar",
    "season": 2014,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 57.1,
    "wickets": 10,
    "economy": 9.09
  },
  {
    "id": "JM-Bairstow-2022",
    "playerName": "JM Bairstow",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 253,
    "strikeRate": 140.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Rasikh-Salam-2024",
    "playerName": "Rasikh Salam",
    "season": 2024,
    "role": "FINISHER",
    "runs": 28,
    "strikeRate": 93.3,
    "wickets": 9,
    "economy": 10.42
  },
  {
    "id": "Kamran-Khan-2009",
    "playerName": "Kamran Khan",
    "season": 2009,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 10,
    "economy": 7.34
  },
  {
    "id": "DE-Bollinger-2012",
    "playerName": "DE Bollinger",
    "season": 2012,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 10,
    "economy": 8.5
  },
  {
    "id": "Mohammed-Shami-2014",
    "playerName": "Mohammed Shami",
    "season": 2014,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 37.5,
    "wickets": 10,
    "economy": 8.14
  },
  {
    "id": "Mandeep-Singh-2018",
    "playerName": "Mandeep Singh",
    "season": 2018,
    "role": "MIDDLE_ORDER",
    "runs": 252,
    "strikeRate": 130.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TG-Southee-2018",
    "playerName": "TG Southee",
    "season": 2018,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 113,
    "wickets": 8,
    "economy": 8.62
  },
  {
    "id": "DP-Conway-2022",
    "playerName": "DP Conway",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 252,
    "strikeRate": 143.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohsin-Khan-2024",
    "playerName": "Mohsin Khan",
    "season": 2024,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 200,
    "wickets": 10,
    "economy": 9.75
  },
  {
    "id": "V-Suryavanshi-2025",
    "playerName": "V Suryavanshi",
    "season": 2025,
    "role": "MIDDLE_ORDER",
    "runs": 252,
    "strikeRate": 195.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-Dinda-2012",
    "playerName": "AB Dinda",
    "season": 2012,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 10,
    "economy": 6.66
  },
  {
    "id": "Washington-Sundar-2022",
    "playerName": "Washington Sundar",
    "season": 2022,
    "role": "FINISHER",
    "runs": 101,
    "strikeRate": 132.9,
    "wickets": 6,
    "economy": 8.44
  },
  {
    "id": "I-Sharma-2023",
    "playerName": "I Sharma",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 10,
    "economy": 8.03
  },
  {
    "id": "LH-Ferguson-2024",
    "playerName": "LH Ferguson",
    "season": 2024,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 10,
    "economy": 10.61
  },
  {
    "id": "TM-Dilshan-2011",
    "playerName": "TM Dilshan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 226,
    "strikeRate": 122.2,
    "wickets": 1,
    "economy": 8.76
  },
  {
    "id": "A-Singh-2011",
    "playerName": "A Singh",
    "season": 2011,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 10,
    "economy": 7.61
  },
  {
    "id": "CL-White-2013",
    "playerName": "CL White",
    "season": 2013,
    "role": "FINISHER",
    "runs": 226,
    "strikeRate": 113,
    "wickets": 1,
    "economy": 8
  },
  {
    "id": "JH-Kallis-2014",
    "playerName": "JH Kallis",
    "season": 2014,
    "role": "FINISHER",
    "runs": 151,
    "strikeRate": 115.3,
    "wickets": 4,
    "economy": 8.64
  },
  {
    "id": "JD-Unadkat-2014",
    "playerName": "JD Unadkat",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 16.7,
    "wickets": 10,
    "economy": 8.83
  },
  {
    "id": "KW-Richardson-2014",
    "playerName": "KW Richardson",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 10,
    "economy": 7.51
  },
  {
    "id": "M-Vijay-2015",
    "playerName": "M Vijay",
    "season": 2015,
    "role": "MIDDLE_ORDER",
    "runs": 251,
    "strikeRate": 107.7,
    "wickets": 0,
    "economy": 7
  },
  {
    "id": "M-Morkel-2016",
    "playerName": "M Morkel",
    "season": 2016,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 10,
    "economy": 8.15
  },
  {
    "id": "UT-Yadav-2019",
    "playerName": "UT Yadav",
    "season": 2019,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 96.2,
    "wickets": 9,
    "economy": 9.45
  },
  {
    "id": "KK-Ahmed-2020",
    "playerName": "KK Ahmed",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 9.3
  },
  {
    "id": "R-Powell-2022",
    "playerName": "R Powell",
    "season": 2022,
    "role": "MIDDLE_ORDER",
    "runs": 250,
    "strikeRate": 143.7,
    "wickets": 0,
    "economy": 14.57
  },
  {
    "id": "RP-Meredith-2022",
    "playerName": "RP Meredith",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 7.99
  },
  {
    "id": "Harpreet-Brar-2024",
    "playerName": "Harpreet Brar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 75,
    "strikeRate": 127.1,
    "wickets": 7,
    "economy": 8.06
  },
  {
    "id": "Q-de-Kock-2024",
    "playerName": "Q de Kock",
    "season": 2024,
    "role": "MIDDLE_ORDER",
    "runs": 250,
    "strikeRate": 128.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harmeet-Singh-2010",
    "playerName": "Harmeet Singh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 7.03
  },
  {
    "id": "S-Aravind-2015",
    "playerName": "S Aravind",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 7.2
  },
  {
    "id": "A-Nehra-2017",
    "playerName": "A Nehra",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 9
  },
  {
    "id": "Mohammed-Siraj-2017",
    "playerName": "Mohammed Siraj",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 9.11
  },
  {
    "id": "L-Ngidi-2020",
    "playerName": "L Ngidi",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 9.75
  },
  {
    "id": "KK-Ahmed-2023",
    "playerName": "KK Ahmed",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 8.75
  },
  {
    "id": "SB-Jakati-2011",
    "playerName": "SB Jakati",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 7.54
  },
  {
    "id": "TA-Boult-2015",
    "playerName": "TA Boult",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 10,
    "economy": 7.92
  },
  {
    "id": "YBK-Jaiswal-2021",
    "playerName": "YBK Jaiswal",
    "season": 2021,
    "role": "FINISHER",
    "runs": 249,
    "strikeRate": 148.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JD-Unadkat-2024",
    "playerName": "JD Unadkat",
    "season": 2024,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 88.9,
    "wickets": 9,
    "economy": 9.63
  },
  {
    "id": "MK-Pandey-2010",
    "playerName": "MK Pandey",
    "season": 2010,
    "role": "FINISHER",
    "runs": 249,
    "strikeRate": 106.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Sohal-2011",
    "playerName": "S Sohal",
    "season": 2011,
    "role": "FINISHER",
    "runs": 249,
    "strikeRate": 123.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WP-Saha-2015",
    "playerName": "WP Saha",
    "season": 2015,
    "role": "FINISHER",
    "runs": 249,
    "strikeRate": 121.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JM-Bairstow-2021",
    "playerName": "JM Bairstow",
    "season": 2021,
    "role": "FINISHER",
    "runs": 248,
    "strikeRate": 138.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Pandey-2016",
    "playerName": "MK Pandey",
    "season": 2016,
    "role": "FINISHER",
    "runs": 248,
    "strikeRate": 130.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "D-Padikkal-2025",
    "playerName": "D Padikkal",
    "season": 2025,
    "role": "FINISHER",
    "runs": 247,
    "strikeRate": 142.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "V-Kohli-2009",
    "playerName": "V Kohli",
    "season": 2009,
    "role": "FINISHER",
    "runs": 246,
    "strikeRate": 109.3,
    "wickets": 0,
    "economy": 7.08
  },
  {
    "id": "MK-Pandey-2011",
    "playerName": "MK Pandey",
    "season": 2011,
    "role": "FINISHER",
    "runs": 246,
    "strikeRate": 105.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JA-Morkel-2013",
    "playerName": "JA Morkel",
    "season": 2013,
    "role": "FINISHER",
    "runs": 46,
    "strikeRate": 124.3,
    "wickets": 8,
    "economy": 6.72
  },
  {
    "id": "MG-Johnson-2017",
    "playerName": "MG Johnson",
    "season": 2017,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 117.6,
    "wickets": 9,
    "economy": 7.06
  },
  {
    "id": "PP-Shaw-2018",
    "playerName": "PP Shaw",
    "season": 2018,
    "role": "FINISHER",
    "runs": 245,
    "strikeRate": 148.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SO-Hetmyer-2025",
    "playerName": "SO Hetmyer",
    "season": 2025,
    "role": "FINISHER",
    "runs": 245,
    "strikeRate": 134.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AL-Menaria-2012",
    "playerName": "AL Menaria",
    "season": 2012,
    "role": "FINISHER",
    "runs": 220,
    "strikeRate": 106.3,
    "wickets": 1,
    "economy": 6.9
  },
  {
    "id": "R-Ashwin-2021",
    "playerName": "R Ashwin",
    "season": 2021,
    "role": "FINISHER",
    "runs": 44,
    "strikeRate": 102.3,
    "wickets": 8,
    "economy": 7.21
  },
  {
    "id": "KA-Pollard-2022",
    "playerName": "KA Pollard",
    "season": 2022,
    "role": "FINISHER",
    "runs": 144,
    "strikeRate": 98.6,
    "wickets": 4,
    "economy": 8.97
  },
  {
    "id": "CJ-Anderson-2017",
    "playerName": "CJ Anderson",
    "season": 2017,
    "role": "FINISHER",
    "runs": 142,
    "strikeRate": 109.2,
    "wickets": 4,
    "economy": 9.27
  },
  {
    "id": "SO-Hetmyer-2021",
    "playerName": "SO Hetmyer",
    "season": 2021,
    "role": "FINISHER",
    "runs": 242,
    "strikeRate": 158.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Tewatia-2022",
    "playerName": "R Tewatia",
    "season": 2022,
    "role": "FINISHER",
    "runs": 217,
    "strikeRate": 139.1,
    "wickets": 1,
    "economy": 12.67
  },
  {
    "id": "AM-Rahane-2024",
    "playerName": "AM Rahane",
    "season": 2024,
    "role": "FINISHER",
    "runs": 242,
    "strikeRate": 121,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ishan-Kishan-2021",
    "playerName": "Ishan Kishan",
    "season": 2021,
    "role": "FINISHER",
    "runs": 241,
    "strikeRate": 132.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Wadhera-2023",
    "playerName": "N Wadhera",
    "season": 2023,
    "role": "FINISHER",
    "runs": 241,
    "strikeRate": 140.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TH-David-2024",
    "playerName": "TH David",
    "season": 2024,
    "role": "FINISHER",
    "runs": 241,
    "strikeRate": 143.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Joginder-Sharma-2008",
    "playerName": "Joginder Sharma",
    "season": 2008,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 145.5,
    "wickets": 9,
    "economy": 9.15
  },
  {
    "id": "JP-Duminy-2016",
    "playerName": "JP Duminy",
    "season": 2016,
    "role": "FINISHER",
    "runs": 191,
    "strikeRate": 121.7,
    "wickets": 2,
    "economy": 7.67
  },
  {
    "id": "A-Mhatre-2025",
    "playerName": "A Mhatre",
    "season": 2025,
    "role": "FINISHER",
    "runs": 240,
    "strikeRate": 183.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DR-Smith-2009",
    "playerName": "DR Smith",
    "season": 2009,
    "role": "FINISHER",
    "runs": 215,
    "strikeRate": 160.4,
    "wickets": 1,
    "economy": 9.04
  },
  {
    "id": "HV-Patel-2012",
    "playerName": "HV Patel",
    "season": 2012,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 88.2,
    "wickets": 9,
    "economy": 8.48
  },
  {
    "id": "SN-Thakur-2019",
    "playerName": "SN Thakur",
    "season": 2019,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 200,
    "wickets": 9,
    "economy": 9
  },
  {
    "id": "SC-Ganguly-2009",
    "playerName": "SC Ganguly",
    "season": 2009,
    "role": "FINISHER",
    "runs": 189,
    "strikeRate": 88.7,
    "wickets": 2,
    "economy": 8.05
  },
  {
    "id": "S-Nadeem-2013",
    "playerName": "S Nadeem",
    "season": 2013,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 51.9,
    "wickets": 9,
    "economy": 5.93
  },
  {
    "id": "Shakib-Al-Hasan-2016",
    "playerName": "Shakib Al Hasan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 114,
    "strikeRate": 105.6,
    "wickets": 5,
    "economy": 7.8
  },
  {
    "id": "S-Badree-2017",
    "playerName": "S Badree",
    "season": 2017,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 52,
    "wickets": 9,
    "economy": 7.59
  },
  {
    "id": "A-Badoni-2023",
    "playerName": "A Badoni",
    "season": 2023,
    "role": "FINISHER",
    "runs": 238,
    "strikeRate": 128,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ravi-Bishnoi-2025",
    "playerName": "Ravi Bishnoi",
    "season": 2025,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 81.3,
    "wickets": 9,
    "economy": 10.35
  },
  {
    "id": "JDP-Oram-2009",
    "playerName": "JDP Oram",
    "season": 2009,
    "role": "FINISHER",
    "runs": 88,
    "strikeRate": 93.6,
    "wickets": 6,
    "economy": 8.87
  },
  {
    "id": "KD-Karthik-2012",
    "playerName": "KD Karthik",
    "season": 2012,
    "role": "FINISHER",
    "runs": 238,
    "strikeRate": 109.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TG-Southee-2015",
    "playerName": "TG Southee",
    "season": 2015,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 144.4,
    "wickets": 9,
    "economy": 8.74
  },
  {
    "id": "V-Shankar-2018",
    "playerName": "V Shankar",
    "season": 2018,
    "role": "FINISHER",
    "runs": 212,
    "strikeRate": 135.9,
    "wickets": 1,
    "economy": 10.24
  },
  {
    "id": "M-Ashwin-2022",
    "playerName": "M Ashwin",
    "season": 2022,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 85.7,
    "wickets": 9,
    "economy": 7.81
  },
  {
    "id": "UT-Yadav-2024",
    "playerName": "UT Yadav",
    "season": 2024,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 80,
    "wickets": 9,
    "economy": 9.81
  },
  {
    "id": "Mohammed-Shami-2017",
    "playerName": "Mohammed Shami",
    "season": 2017,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 150,
    "wickets": 8,
    "economy": 9.02
  },
  {
    "id": "Aniket-Verma-2025",
    "playerName": "Aniket Verma",
    "season": 2025,
    "role": "FINISHER",
    "runs": 236,
    "strikeRate": 159.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Sharma-2013",
    "playerName": "R Sharma",
    "season": 2013,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 64.7,
    "wickets": 9,
    "economy": 6.85
  },
  {
    "id": "Yuvraj-Singh-2016",
    "playerName": "Yuvraj Singh",
    "season": 2016,
    "role": "FINISHER",
    "runs": 236,
    "strikeRate": 129,
    "wickets": 0,
    "economy": 8.21
  },
  {
    "id": "HV-Patel-2018",
    "playerName": "HV Patel",
    "season": 2018,
    "role": "FINISHER",
    "runs": 60,
    "strikeRate": 181.8,
    "wickets": 7,
    "economy": 9.3
  },
  {
    "id": "Shivam-Mavi-2020",
    "playerName": "Shivam Mavi",
    "season": 2020,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 71.4,
    "wickets": 9,
    "economy": 7.93
  },
  {
    "id": "A-Zampa-2023",
    "playerName": "A Zampa",
    "season": 2023,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 58.8,
    "wickets": 9,
    "economy": 8.53
  },
  {
    "id": "A-Badoni-2024",
    "playerName": "A Badoni",
    "season": 2024,
    "role": "FINISHER",
    "runs": 235,
    "strikeRate": 130.6,
    "wickets": 0,
    "economy": 12.5
  },
  {
    "id": "PJ-Sangwan-2010",
    "playerName": "PJ Sangwan",
    "season": 2010,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 66.7,
    "wickets": 9,
    "economy": 7.84
  },
  {
    "id": "DJ-Hussey-2013",
    "playerName": "DJ Hussey",
    "season": 2013,
    "role": "FINISHER",
    "runs": 235,
    "strikeRate": 111.9,
    "wickets": 0,
    "economy": 8.21
  },
  {
    "id": "SMSM-Senanayake-2013",
    "playerName": "SMSM Senanayake",
    "season": 2013,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 58.8,
    "wickets": 9,
    "economy": 6.49
  },
  {
    "id": "WP-Saha-2017",
    "playerName": "WP Saha",
    "season": 2017,
    "role": "FINISHER",
    "runs": 234,
    "strikeRate": 120.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Washington-Sundar-2017",
    "playerName": "Washington Sundar",
    "season": 2017,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 75,
    "wickets": 9,
    "economy": 6.23
  },
  {
    "id": "Shahbaz-Ahmed-2021",
    "playerName": "Shahbaz Ahmed",
    "season": 2021,
    "role": "FINISHER",
    "runs": 59,
    "strikeRate": 107.3,
    "wickets": 7,
    "economy": 6.57
  },
  {
    "id": "JM-Sharma-2022",
    "playerName": "JM Sharma",
    "season": 2022,
    "role": "FINISHER",
    "runs": 234,
    "strikeRate": 157,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JD-Unadkat-2022",
    "playerName": "JD Unadkat",
    "season": 2022,
    "role": "FINISHER",
    "runs": 59,
    "strikeRate": 159.5,
    "wickets": 7,
    "economy": 9.32
  },
  {
    "id": "A-Mishra-2015",
    "playerName": "A Mishra",
    "season": 2015,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 61.5,
    "wickets": 9,
    "economy": 7.52
  },
  {
    "id": "MS-Dhoni-2022",
    "playerName": "MS Dhoni",
    "season": 2022,
    "role": "FINISHER",
    "runs": 232,
    "strikeRate": 117.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mukesh-Kumar-2023",
    "playerName": "Mukesh Kumar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 70,
    "wickets": 9,
    "economy": 9.99
  },
  {
    "id": "TU-Deshpande-2025",
    "playerName": "TU Deshpande",
    "season": 2025,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 77.8,
    "wickets": 9,
    "economy": 9.68
  },
  {
    "id": "AB-Agarkar-2011",
    "playerName": "AB Agarkar",
    "season": 2011,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 100,
    "wickets": 9,
    "economy": 8.63
  },
  {
    "id": "DR-Smith-2012",
    "playerName": "DR Smith",
    "season": 2012,
    "role": "FINISHER",
    "runs": 157,
    "strikeRate": 153.9,
    "wickets": 3,
    "economy": 7.44
  },
  {
    "id": "S-Nadeem-2014",
    "playerName": "S Nadeem",
    "season": 2014,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 35,
    "wickets": 9,
    "economy": 8.02
  },
  {
    "id": "NV-Ojha-2014",
    "playerName": "NV Ojha",
    "season": 2014,
    "role": "FINISHER",
    "runs": 232,
    "strikeRate": 136.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TH-David-2023",
    "playerName": "TH David",
    "season": 2023,
    "role": "FINISHER",
    "runs": 231,
    "strikeRate": 149,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Nayar-2008",
    "playerName": "AM Nayar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 206,
    "strikeRate": 145.1,
    "wickets": 1,
    "economy": 9.63
  },
  {
    "id": "RA-Tripathi-2020",
    "playerName": "RA Tripathi",
    "season": 2020,
    "role": "FINISHER",
    "runs": 230,
    "strikeRate": 123.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Dube-2021",
    "playerName": "S Dube",
    "season": 2021,
    "role": "FINISHER",
    "runs": 230,
    "strikeRate": 112.2,
    "wickets": 0,
    "economy": 10.26
  },
  {
    "id": "RV-Uthappa-2022",
    "playerName": "RV Uthappa",
    "season": 2022,
    "role": "FINISHER",
    "runs": 230,
    "strikeRate": 127.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AL-Menaria-2011",
    "playerName": "AL Menaria",
    "season": 2011,
    "role": "FINISHER",
    "runs": 180,
    "strikeRate": 113.9,
    "wickets": 2,
    "economy": 7.81
  },
  {
    "id": "M-Vohra-2017",
    "playerName": "M Vohra",
    "season": 2017,
    "role": "FINISHER",
    "runs": 229,
    "strikeRate": 134.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SJ-Srivastava-2011",
    "playerName": "SJ Srivastava",
    "season": 2011,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 133.3,
    "wickets": 9,
    "economy": 8.77
  },
  {
    "id": "PP-Shaw-2020",
    "playerName": "PP Shaw",
    "season": 2020,
    "role": "FINISHER",
    "runs": 228,
    "strikeRate": 134.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mustafizur-Rahman-2022",
    "playerName": "Mustafizur Rahman",
    "season": 2022,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 9,
    "economy": 7.48
  },
  {
    "id": "Mohammad-Asif-2008",
    "playerName": "Mohammad Asif",
    "season": 2008,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 50,
    "wickets": 9,
    "economy": 9.26
  },
  {
    "id": "MM-Ali-2018",
    "playerName": "MM Ali",
    "season": 2018,
    "role": "FINISHER",
    "runs": 77,
    "strikeRate": 167.4,
    "wickets": 6,
    "economy": 7.26
  },
  {
    "id": "Navdeep-Saini-2020",
    "playerName": "Navdeep Saini",
    "season": 2020,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 100,
    "wickets": 8,
    "economy": 8
  },
  {
    "id": "Rahmanullah-Gurbaz-2023",
    "playerName": "Rahmanullah Gurbaz",
    "season": 2023,
    "role": "FINISHER",
    "runs": 227,
    "strikeRate": 127.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WD-Parnell-2023",
    "playerName": "WD Parnell",
    "season": 2023,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 33.3,
    "wickets": 9,
    "economy": 9.06
  },
  {
    "id": "GJ-Maxwell-2024",
    "playerName": "GJ Maxwell",
    "season": 2024,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 113,
    "wickets": 7,
    "economy": 7.9
  },
  {
    "id": "J-Theron-2010",
    "playerName": "J Theron",
    "season": 2010,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 33.3,
    "wickets": 9,
    "economy": 7.75
  },
  {
    "id": "R-Sharma-2012",
    "playerName": "R Sharma",
    "season": 2012,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 18.2,
    "wickets": 9,
    "economy": 8.17
  },
  {
    "id": "TM-Head-2017",
    "playerName": "TM Head",
    "season": 2017,
    "role": "FINISHER",
    "runs": 151,
    "strikeRate": 138.5,
    "wickets": 3,
    "economy": 10.13
  },
  {
    "id": "C-de-Grandhomme-2017",
    "playerName": "C de Grandhomme",
    "season": 2017,
    "role": "FINISHER",
    "runs": 126,
    "strikeRate": 137,
    "wickets": 4,
    "economy": 8
  },
  {
    "id": "RA-Tripathi-2018",
    "playerName": "RA Tripathi",
    "season": 2018,
    "role": "FINISHER",
    "runs": 226,
    "strikeRate": 130.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Laughlin-2018",
    "playerName": "B Laughlin",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 9,
    "economy": 9.49
  },
  {
    "id": "Mustafizur-Rahman-2018",
    "playerName": "Mustafizur Rahman",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 9,
    "economy": 8.34
  },
  {
    "id": "OF-Smith-2022",
    "playerName": "OF Smith",
    "season": 2022,
    "role": "FINISHER",
    "runs": 51,
    "strikeRate": 102,
    "wickets": 7,
    "economy": 11.31
  },
  {
    "id": "A-Nortje-2022",
    "playerName": "A Nortje",
    "season": 2022,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 14.3,
    "wickets": 9,
    "economy": 9.19
  },
  {
    "id": "A-Singh-2009",
    "playerName": "A Singh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 9,
    "economy": 5.61
  },
  {
    "id": "SE-Bond-2010",
    "playerName": "SE Bond",
    "season": 2010,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 9,
    "economy": 7.07
  },
  {
    "id": "VR-Aaron-2012",
    "playerName": "VR Aaron",
    "season": 2012,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 9,
    "economy": 8.72
  },
  {
    "id": "CR-Brathwaite-2018",
    "playerName": "CR Brathwaite",
    "season": 2018,
    "role": "FINISHER",
    "runs": 75,
    "strikeRate": 138.9,
    "wickets": 6,
    "economy": 9
  },
  {
    "id": "S-Lamichhane-2019",
    "playerName": "S Lamichhane",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 9,
    "economy": 9.17
  },
  {
    "id": "D-Brevis-2025",
    "playerName": "D Brevis",
    "season": 2025,
    "role": "FINISHER",
    "runs": 225,
    "strikeRate": 174.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MV-Boucher-2008",
    "playerName": "MV Boucher",
    "season": 2008,
    "role": "FINISHER",
    "runs": 225,
    "strikeRate": 124.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MR-Marsh-2011",
    "playerName": "MR Marsh",
    "season": 2011,
    "role": "FINISHER",
    "runs": 50,
    "strikeRate": 100,
    "wickets": 7,
    "economy": 7.12
  },
  {
    "id": "BA-Bhatt-2011",
    "playerName": "BA Bhatt",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 9,
    "economy": 8.13
  },
  {
    "id": "MA-Agarwal-2012",
    "playerName": "MA Agarwal",
    "season": 2012,
    "role": "FINISHER",
    "runs": 225,
    "strikeRate": 137.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Pandey-2015",
    "playerName": "MK Pandey",
    "season": 2015,
    "role": "FINISHER",
    "runs": 225,
    "strikeRate": 120.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Vinay-Kumar-2015",
    "playerName": "R Vinay Kumar",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 9,
    "economy": 8.4
  },
  {
    "id": "J-Little-2023",
    "playerName": "J Little",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 9,
    "economy": 8.42
  },
  {
    "id": "Suyash-Sharma-2025",
    "playerName": "Suyash Sharma",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 9,
    "economy": 8.93
  },
  {
    "id": "P-Awana-2014",
    "playerName": "P Awana",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 9,
    "economy": 10.19
  },
  {
    "id": "BW-Hilfenhaus-2014",
    "playerName": "BW Hilfenhaus",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 9,
    "economy": 8.74
  },
  {
    "id": "Y-Venugopal-Rao-2009",
    "playerName": "Y Venugopal Rao",
    "season": 2009,
    "role": "FINISHER",
    "runs": 124,
    "strikeRate": 105.1,
    "wickets": 4,
    "economy": 8.02
  },
  {
    "id": "KD-Karthik-2021",
    "playerName": "KD Karthik",
    "season": 2021,
    "role": "FINISHER",
    "runs": 223,
    "strikeRate": 129.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "STR-Binny-2014",
    "playerName": "STR Binny",
    "season": 2014,
    "role": "FINISHER",
    "runs": 123,
    "strikeRate": 100.8,
    "wickets": 4,
    "economy": 7.22
  },
  {
    "id": "R-Ravindra-2024",
    "playerName": "R Ravindra",
    "season": 2024,
    "role": "FINISHER",
    "runs": 222,
    "strikeRate": 152.1,
    "wickets": 0,
    "economy": 3.5
  },
  {
    "id": "AK-Markram-2024",
    "playerName": "AK Markram",
    "season": 2024,
    "role": "FINISHER",
    "runs": 220,
    "strikeRate": 117.6,
    "wickets": 0,
    "economy": 6.92
  },
  {
    "id": "R-Shepherd-2025",
    "playerName": "R Shepherd",
    "season": 2025,
    "role": "FINISHER",
    "runs": 70,
    "strikeRate": 280,
    "wickets": 6,
    "economy": 10.4
  },
  {
    "id": "MS-Gony-2013",
    "playerName": "MS Gony",
    "season": 2013,
    "role": "FINISHER",
    "runs": 45,
    "strikeRate": 166.7,
    "wickets": 7,
    "economy": 8.95
  },
  {
    "id": "D-Pretorius-2022",
    "playerName": "D Pretorius",
    "season": 2022,
    "role": "FINISHER",
    "runs": 44,
    "strikeRate": 157.1,
    "wickets": 7,
    "economy": 9.26
  },
  {
    "id": "DPMD-Jayawardene-2009",
    "playerName": "DPMD Jayawardene",
    "season": 2009,
    "role": "FINISHER",
    "runs": 219,
    "strikeRate": 127.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DJ-Hooda-2016",
    "playerName": "DJ Hooda",
    "season": 2016,
    "role": "FINISHER",
    "runs": 144,
    "strikeRate": 115.2,
    "wickets": 3,
    "economy": 7.27
  },
  {
    "id": "PD-Salt-2023",
    "playerName": "PD Salt",
    "season": 2023,
    "role": "FINISHER",
    "runs": 218,
    "strikeRate": 161.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KP-Pietersen-2009",
    "playerName": "KP Pietersen",
    "season": 2009,
    "role": "FINISHER",
    "runs": 93,
    "strikeRate": 104.5,
    "wickets": 5,
    "economy": 6.6
  },
  {
    "id": "MS-Bisla-2010",
    "playerName": "MS Bisla",
    "season": 2010,
    "role": "FINISHER",
    "runs": 218,
    "strikeRate": 115.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RJ-Harris-2012",
    "playerName": "RJ Harris",
    "season": 2012,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 163.6,
    "wickets": 8,
    "economy": 7.49
  },
  {
    "id": "CR-Woakes-2018",
    "playerName": "CR Woakes",
    "season": 2018,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 89.5,
    "wickets": 8,
    "economy": 9.97
  },
  {
    "id": "N-Rana-2025",
    "playerName": "N Rana",
    "season": 2025,
    "role": "FINISHER",
    "runs": 217,
    "strikeRate": 153.9,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "B-Lee-2012",
    "playerName": "B Lee",
    "season": 2012,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 200,
    "wickets": 7,
    "economy": 7.77
  },
  {
    "id": "Harbhajan-Singh-2017",
    "playerName": "Harbhajan Singh",
    "season": 2017,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 94.1,
    "wickets": 8,
    "economy": 6.53
  },
  {
    "id": "AB-de-Villiers-2017",
    "playerName": "AB de Villiers",
    "season": 2017,
    "role": "FINISHER",
    "runs": 216,
    "strikeRate": 126.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KS-Williamson-2022",
    "playerName": "KS Williamson",
    "season": 2022,
    "role": "FINISHER",
    "runs": 216,
    "strikeRate": 91.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "I-Udana-2020",
    "playerName": "I Udana",
    "season": 2020,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 136.4,
    "wickets": 8,
    "economy": 9.43
  },
  {
    "id": "V-Kohli-2008",
    "playerName": "V Kohli",
    "season": 2008,
    "role": "FINISHER",
    "runs": 165,
    "strikeRate": 98.2,
    "wickets": 2,
    "economy": 7.59
  },
  {
    "id": "R-McLaren-2011",
    "playerName": "R McLaren",
    "season": 2011,
    "role": "FINISHER",
    "runs": 90,
    "strikeRate": 89.1,
    "wickets": 5,
    "economy": 9.84
  },
  {
    "id": "WP-Saha-2020",
    "playerName": "WP Saha",
    "season": 2020,
    "role": "FINISHER",
    "runs": 214,
    "strikeRate": 134.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sikandar-Raza-2023",
    "playerName": "Sikandar Raza",
    "season": 2023,
    "role": "FINISHER",
    "runs": 139,
    "strikeRate": 133.7,
    "wickets": 3,
    "economy": 9.79
  },
  {
    "id": "A-Kamboj-2025",
    "playerName": "A Kamboj",
    "season": 2025,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 107.7,
    "wickets": 8,
    "economy": 7.98
  },
  {
    "id": "DA-Miller-2019",
    "playerName": "DA Miller",
    "season": 2019,
    "role": "FINISHER",
    "runs": 213,
    "strikeRate": 122.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Kumble-2008",
    "playerName": "A Kumble",
    "season": 2008,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 76.5,
    "wickets": 8,
    "economy": 7.98
  },
  {
    "id": "MS-Bisla-2012",
    "playerName": "MS Bisla",
    "season": 2012,
    "role": "FINISHER",
    "runs": 213,
    "strikeRate": 124.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Agarwal-2015",
    "playerName": "MA Agarwal",
    "season": 2015,
    "role": "FINISHER",
    "runs": 213,
    "strikeRate": 113.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SB-Styris-2008",
    "playerName": "SB Styris",
    "season": 2008,
    "role": "FINISHER",
    "runs": 112,
    "strikeRate": 90.3,
    "wickets": 4,
    "economy": 7.22
  },
  {
    "id": "GC-Smith-2009",
    "playerName": "GC Smith",
    "season": 2009,
    "role": "FINISHER",
    "runs": 212,
    "strikeRate": 95.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Iqbal-Abdulla-2016",
    "playerName": "Iqbal Abdulla",
    "season": 2016,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 137,
    "wickets": 7,
    "economy": 8.36
  },
  {
    "id": "A-Badoni-2022",
    "playerName": "A Badoni",
    "season": 2022,
    "role": "FINISHER",
    "runs": 161,
    "strikeRate": 115.8,
    "wickets": 2,
    "economy": 6
  },
  {
    "id": "RR-Rossouw-2024",
    "playerName": "RR Rossouw",
    "season": 2024,
    "role": "FINISHER",
    "runs": 211,
    "strikeRate": 173,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Ntini-2008",
    "playerName": "M Ntini",
    "season": 2008,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 57.9,
    "wickets": 8,
    "economy": 7.24
  },
  {
    "id": "P-Negi-2012",
    "playerName": "P Negi",
    "season": 2012,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 120,
    "wickets": 7,
    "economy": 6.9
  },
  {
    "id": "R-Parag-2019",
    "playerName": "R Parag",
    "season": 2019,
    "role": "FINISHER",
    "runs": 160,
    "strikeRate": 120.3,
    "wickets": 2,
    "economy": 8.64
  },
  {
    "id": "DJ-Hooda-2021",
    "playerName": "DJ Hooda",
    "season": 2021,
    "role": "FINISHER",
    "runs": 160,
    "strikeRate": 128,
    "wickets": 2,
    "economy": 8.5
  },
  {
    "id": "DA-Miller-2024",
    "playerName": "DA Miller",
    "season": 2024,
    "role": "FINISHER",
    "runs": 210,
    "strikeRate": 140.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Rossouw-2023",
    "playerName": "RR Rossouw",
    "season": 2023,
    "role": "FINISHER",
    "runs": 209,
    "strikeRate": 141.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Gayle-2009",
    "playerName": "CH Gayle",
    "season": 2009,
    "role": "FINISHER",
    "runs": 184,
    "strikeRate": 115.7,
    "wickets": 1,
    "economy": 7.36
  },
  {
    "id": "MEK-Hussey-2014",
    "playerName": "MEK Hussey",
    "season": 2014,
    "role": "FINISHER",
    "runs": 209,
    "strikeRate": 111.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Kaul-2021",
    "playerName": "S Kaul",
    "season": 2021,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 100,
    "wickets": 8,
    "economy": 8.39
  },
  {
    "id": "R-Parag-2022",
    "playerName": "R Parag",
    "season": 2022,
    "role": "FINISHER",
    "runs": 183,
    "strikeRate": 134.6,
    "wickets": 1,
    "economy": 13.62
  },
  {
    "id": "MG-Bracewell-2023",
    "playerName": "MG Bracewell",
    "season": 2023,
    "role": "FINISHER",
    "runs": 58,
    "strikeRate": 118.4,
    "wickets": 6,
    "economy": 8.64
  },
  {
    "id": "R-Ashwin-2025",
    "playerName": "R Ashwin",
    "season": 2025,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 110,
    "wickets": 7,
    "economy": 9.08
  },
  {
    "id": "LR-Shukla-2009",
    "playerName": "LR Shukla",
    "season": 2009,
    "role": "FINISHER",
    "runs": 83,
    "strikeRate": 96.5,
    "wickets": 5,
    "economy": 6.95
  },
  {
    "id": "B-Chipli-2011",
    "playerName": "B Chipli",
    "season": 2011,
    "role": "FINISHER",
    "runs": 207,
    "strikeRate": 120.3,
    "wickets": 0,
    "economy": 20
  },
  {
    "id": "M-Vijay-2014",
    "playerName": "M Vijay",
    "season": 2014,
    "role": "FINISHER",
    "runs": 207,
    "strikeRate": 105.1,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "KA-Pollard-2016",
    "playerName": "KA Pollard",
    "season": 2016,
    "role": "FINISHER",
    "runs": 207,
    "strikeRate": 132.7,
    "wickets": 0,
    "economy": 13.3
  },
  {
    "id": "C-de-Grandhomme-2018",
    "playerName": "C de Grandhomme",
    "season": 2018,
    "role": "FINISHER",
    "runs": 131,
    "strikeRate": 150.6,
    "wickets": 3,
    "economy": 8.16
  },
  {
    "id": "PBB-Rajapaksa-2022",
    "playerName": "PBB Rajapaksa",
    "season": 2022,
    "role": "FINISHER",
    "runs": 206,
    "strikeRate": 150.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KV-Sharma-2024",
    "playerName": "KV Sharma",
    "season": 2024,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 193.8,
    "wickets": 7,
    "economy": 10.31
  },
  {
    "id": "RK-Singh-2025",
    "playerName": "RK Singh",
    "season": 2025,
    "role": "FINISHER",
    "runs": 206,
    "strikeRate": 148.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AC-Voges-2010",
    "playerName": "AC Voges",
    "season": 2010,
    "role": "FINISHER",
    "runs": 181,
    "strikeRate": 126.6,
    "wickets": 1,
    "economy": 8.14
  },
  {
    "id": "SV-Samson-2013",
    "playerName": "SV Samson",
    "season": 2013,
    "role": "FINISHER",
    "runs": 206,
    "strikeRate": 115.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "F-du-Plessis-2016",
    "playerName": "F du Plessis",
    "season": 2016,
    "role": "FINISHER",
    "runs": 206,
    "strikeRate": 121.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AS-Joseph-2022",
    "playerName": "AS Joseph",
    "season": 2022,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 71.4,
    "wickets": 8,
    "economy": 8.72
  },
  {
    "id": "Noor-Ahmad-2024",
    "playerName": "Noor Ahmad",
    "season": 2024,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 55.6,
    "wickets": 8,
    "economy": 8.33
  },
  {
    "id": "B-Lee-2011",
    "playerName": "B Lee",
    "season": 2011,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 55.6,
    "wickets": 8,
    "economy": 7.37
  },
  {
    "id": "PA-Patel-2014",
    "playerName": "PA Patel",
    "season": 2014,
    "role": "FINISHER",
    "runs": 205,
    "strikeRate": 107.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "IK-Pathan-2014",
    "playerName": "IK Pathan",
    "season": 2014,
    "role": "FINISHER",
    "runs": 55,
    "strikeRate": 94.8,
    "wickets": 6,
    "economy": 8.71
  },
  {
    "id": "Harbhajan-Singh-2018",
    "playerName": "Harbhajan Singh",
    "season": 2018,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 76.3,
    "wickets": 7,
    "economy": 8.39
  },
  {
    "id": "Mohammed-Siraj-2019",
    "playerName": "Mohammed Siraj",
    "season": 2019,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 26.7,
    "wickets": 8,
    "economy": 9.08
  },
  {
    "id": "RD-Gaikwad-2020",
    "playerName": "RD Gaikwad",
    "season": 2020,
    "role": "FINISHER",
    "runs": 204,
    "strikeRate": 117.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ashutosh-Sharma-2025",
    "playerName": "Ashutosh Sharma",
    "season": 2025,
    "role": "FINISHER",
    "runs": 204,
    "strikeRate": 147.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Shahrukh-Khan-2025",
    "playerName": "M Shahrukh Khan",
    "season": 2025,
    "role": "FINISHER",
    "runs": 179,
    "strikeRate": 172.1,
    "wickets": 1,
    "economy": 13
  },
  {
    "id": "A-Mishra-2014",
    "playerName": "A Mishra",
    "season": 2014,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 57.1,
    "wickets": 8,
    "economy": 8.92
  },
  {
    "id": "SV-Samson-2015",
    "playerName": "SV Samson",
    "season": 2015,
    "role": "FINISHER",
    "runs": 204,
    "strikeRate": 122.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shubman-Gill-2018",
    "playerName": "Shubman Gill",
    "season": 2018,
    "role": "FINISHER",
    "runs": 203,
    "strikeRate": 143,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GC-Viljoen-2019",
    "playerName": "GC Viljoen",
    "season": 2019,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 42.9,
    "wickets": 8,
    "economy": 9.41
  },
  {
    "id": "UT-Yadav-2010",
    "playerName": "UT Yadav",
    "season": 2010,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 75,
    "wickets": 8,
    "economy": 7.58
  },
  {
    "id": "F-du-Plessis-2025",
    "playerName": "F du Plessis",
    "season": 2025,
    "role": "FINISHER",
    "runs": 202,
    "strikeRate": 118.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PA-Patel-2011",
    "playerName": "PA Patel",
    "season": 2011,
    "role": "FINISHER",
    "runs": 202,
    "strikeRate": 106.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Randiv-2011",
    "playerName": "S Randiv",
    "season": 2011,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 8,
    "economy": 7.43
  },
  {
    "id": "Mohammed-Shami-2016",
    "playerName": "Mohammed Shami",
    "season": 2016,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 8,
    "economy": 9.69
  },
  {
    "id": "Q-de-Kock-2018",
    "playerName": "Q de Kock",
    "season": 2018,
    "role": "FINISHER",
    "runs": 201,
    "strikeRate": 122.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KW-Richardson-2016",
    "playerName": "KW Richardson",
    "season": 2016,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 8,
    "economy": 9.63
  },
  {
    "id": "CH-Gayle-2017",
    "playerName": "CH Gayle",
    "season": 2017,
    "role": "FINISHER",
    "runs": 200,
    "strikeRate": 116.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Tewatia-2018",
    "playerName": "R Tewatia",
    "season": 2018,
    "role": "FINISHER",
    "runs": 50,
    "strikeRate": 106.4,
    "wickets": 6,
    "economy": 7.79
  },
  {
    "id": "MS-Dhoni-2020",
    "playerName": "MS Dhoni",
    "season": 2020,
    "role": "FINISHER",
    "runs": 200,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KR-Sen-2022",
    "playerName": "KR Sen",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 9.17
  },
  {
    "id": "RD-Chahar-2023",
    "playerName": "RD Chahar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 7.73
  },
  {
    "id": "Avesh-Khan-2023",
    "playerName": "Avesh Khan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 9.78
  },
  {
    "id": "R-Vinay-Kumar-2008",
    "playerName": "R Vinay Kumar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 89.3,
    "wickets": 7,
    "economy": 7.79
  },
  {
    "id": "KC-Sangakkara-2012",
    "playerName": "KC Sangakkara",
    "season": 2012,
    "role": "FINISHER",
    "runs": 200,
    "strikeRate": 105.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Nadeem-2012",
    "playerName": "S Nadeem",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 6.98
  },
  {
    "id": "A-Ashish-Reddy-2013",
    "playerName": "A Ashish Reddy",
    "season": 2013,
    "role": "FINISHER",
    "runs": 125,
    "strikeRate": 138.9,
    "wickets": 3,
    "economy": 10.39
  },
  {
    "id": "Sandeep-Sharma-2013",
    "playerName": "Sandeep Sharma",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 7.96
  },
  {
    "id": "M-Markande-2024",
    "playerName": "M Markande",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 10.94
  },
  {
    "id": "MP-Yadav-2024",
    "playerName": "MP Yadav",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 6.95
  },
  {
    "id": "N-Thushara-2024",
    "playerName": "N Thushara",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 9.03
  },
  {
    "id": "Zeeshan-Ansari-2025",
    "playerName": "Zeeshan Ansari",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 9.59
  },
  {
    "id": "DS-Kulkarni-2013",
    "playerName": "DS Kulkarni",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 7.71
  },
  {
    "id": "A-Nehra-2014",
    "playerName": "A Nehra",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 9.23
  },
  {
    "id": "Z-Khan-2015",
    "playerName": "Z Khan",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 8,
    "economy": 6.15
  },
  {
    "id": "Abhishek-Sharma-2021",
    "playerName": "Abhishek Sharma",
    "season": 2021,
    "role": "FINISHER",
    "runs": 98,
    "strikeRate": 125.6,
    "wickets": 4,
    "economy": 6.29
  },
  {
    "id": "PP-Shaw-2024",
    "playerName": "PP Shaw",
    "season": 2024,
    "role": "FINISHER",
    "runs": 198,
    "strikeRate": 158.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KK-Nair-2025",
    "playerName": "KK Nair",
    "season": 2025,
    "role": "FINISHER",
    "runs": 198,
    "strikeRate": 162.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "V-Sehwag-2009",
    "playerName": "V Sehwag",
    "season": 2009,
    "role": "FINISHER",
    "runs": 198,
    "strikeRate": 135.6,
    "wickets": 0,
    "economy": 21.43
  },
  {
    "id": "RR-Pant-2016",
    "playerName": "RR Pant",
    "season": 2016,
    "role": "FINISHER",
    "runs": 198,
    "strikeRate": 127.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "V-Shankar-2020",
    "playerName": "V Shankar",
    "season": 2020,
    "role": "FINISHER",
    "runs": 97,
    "strikeRate": 98,
    "wickets": 4,
    "economy": 5.86
  },
  {
    "id": "DA-Warner-2021",
    "playerName": "DA Warner",
    "season": 2021,
    "role": "FINISHER",
    "runs": 197,
    "strikeRate": 103.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SB-Bangar-2008",
    "playerName": "SB Bangar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 95.9,
    "wickets": 6,
    "economy": 8.67
  },
  {
    "id": "LRPL-Taylor-2012",
    "playerName": "LRPL Taylor",
    "season": 2012,
    "role": "FINISHER",
    "runs": 197,
    "strikeRate": 111.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SR-Watson-2017",
    "playerName": "SR Watson",
    "season": 2017,
    "role": "FINISHER",
    "runs": 71,
    "strikeRate": 88.8,
    "wickets": 5,
    "economy": 8.95
  },
  {
    "id": "RV-Uthappa-2020",
    "playerName": "RV Uthappa",
    "season": 2020,
    "role": "FINISHER",
    "runs": 196,
    "strikeRate": 115.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Agarwal-2022",
    "playerName": "MA Agarwal",
    "season": 2022,
    "role": "FINISHER",
    "runs": 196,
    "strikeRate": 117.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Dhoni-2025",
    "playerName": "MS Dhoni",
    "season": 2025,
    "role": "FINISHER",
    "runs": 196,
    "strikeRate": 127.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Fleming-2008",
    "playerName": "SP Fleming",
    "season": 2008,
    "role": "FINISHER",
    "runs": 196,
    "strikeRate": 114.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Badrinath-2012",
    "playerName": "S Badrinath",
    "season": 2012,
    "role": "FINISHER",
    "runs": 196,
    "strikeRate": 104.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Gayle-2014",
    "playerName": "CH Gayle",
    "season": 2014,
    "role": "FINISHER",
    "runs": 196,
    "strikeRate": 104.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GJ-Maxwell-2015",
    "playerName": "GJ Maxwell",
    "season": 2015,
    "role": "FINISHER",
    "runs": 146,
    "strikeRate": 127,
    "wickets": 2,
    "economy": 9.24
  },
  {
    "id": "Ramandeep-Singh-2022",
    "playerName": "Ramandeep Singh",
    "season": 2022,
    "role": "FINISHER",
    "runs": 45,
    "strikeRate": 107.1,
    "wickets": 6,
    "economy": 8.05
  },
  {
    "id": "Dhruv-Jurel-2024",
    "playerName": "Dhruv Jurel",
    "season": 2024,
    "role": "FINISHER",
    "runs": 195,
    "strikeRate": 135.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Mishra-2023",
    "playerName": "A Mishra",
    "season": 2023,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 63.3,
    "wickets": 7,
    "economy": 7.88
  },
  {
    "id": "WD-Parnell-2012",
    "playerName": "WD Parnell",
    "season": 2012,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 65.5,
    "wickets": 7,
    "economy": 6.14
  },
  {
    "id": "PA-Patel-2012",
    "playerName": "PA Patel",
    "season": 2012,
    "role": "FINISHER",
    "runs": 194,
    "strikeRate": 116.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sachin-Baby-2016",
    "playerName": "Sachin Baby",
    "season": 2016,
    "role": "FINISHER",
    "runs": 119,
    "strikeRate": 145.1,
    "wickets": 3,
    "economy": 4.8
  },
  {
    "id": "CH-Gayle-2021",
    "playerName": "CH Gayle",
    "season": 2021,
    "role": "FINISHER",
    "runs": 193,
    "strikeRate": 120.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Salman-Butt-2008",
    "playerName": "Salman Butt",
    "season": 2008,
    "role": "FINISHER",
    "runs": 193,
    "strikeRate": 112.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AN-Ahmed-2011",
    "playerName": "AN Ahmed",
    "season": 2011,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 138.5,
    "wickets": 7,
    "economy": 8.34
  },
  {
    "id": "BJ-Rohrer-2013",
    "playerName": "BJ Rohrer",
    "season": 2013,
    "role": "FINISHER",
    "runs": 193,
    "strikeRate": 132.2,
    "wickets": 0,
    "economy": 10.29
  },
  {
    "id": "S-Badrinath-2008",
    "playerName": "S Badrinath",
    "season": 2008,
    "role": "FINISHER",
    "runs": 192,
    "strikeRate": 139.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Kumar-2015",
    "playerName": "P Kumar",
    "season": 2015,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 68,
    "wickets": 7,
    "economy": 8.82
  },
  {
    "id": "KS-Bharat-2021",
    "playerName": "KS Bharat",
    "season": 2021,
    "role": "FINISHER",
    "runs": 191,
    "strikeRate": 118.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Ravindra-2025",
    "playerName": "R Ravindra",
    "season": 2025,
    "role": "FINISHER",
    "runs": 191,
    "strikeRate": 125.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-McLaren-2010",
    "playerName": "R McLaren",
    "season": 2010,
    "role": "FINISHER",
    "runs": 66,
    "strikeRate": 93,
    "wickets": 5,
    "economy": 7.84
  },
  {
    "id": "S-Dhawan-2010",
    "playerName": "S Dhawan",
    "season": 2010,
    "role": "FINISHER",
    "runs": 191,
    "strikeRate": 106.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Tiwary-2012",
    "playerName": "SS Tiwary",
    "season": 2012,
    "role": "FINISHER",
    "runs": 191,
    "strikeRate": 110.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HC-Brook-2023",
    "playerName": "HC Brook",
    "season": 2023,
    "role": "FINISHER",
    "runs": 190,
    "strikeRate": 119.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harmeet-Singh-2012",
    "playerName": "Harmeet Singh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 214.3,
    "wickets": 7,
    "economy": 8.34
  },
  {
    "id": "BCJ-Cutting-2016",
    "playerName": "BCJ Cutting",
    "season": 2016,
    "role": "FINISHER",
    "runs": 65,
    "strikeRate": 175.7,
    "wickets": 5,
    "economy": 7.06
  },
  {
    "id": "Harpreet-Brar-2021",
    "playerName": "Harpreet Brar",
    "season": 2021,
    "role": "FINISHER",
    "runs": 64,
    "strikeRate": 104.9,
    "wickets": 5,
    "economy": 6.04
  },
  {
    "id": "Ashutosh-Sharma-2024",
    "playerName": "Ashutosh Sharma",
    "season": 2024,
    "role": "FINISHER",
    "runs": 189,
    "strikeRate": 160.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "ML-Hayden-2008",
    "playerName": "ML Hayden",
    "season": 2008,
    "role": "FINISHER",
    "runs": 189,
    "strikeRate": 140,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Mascarenhas-2009",
    "playerName": "AD Mascarenhas",
    "season": 2009,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 100,
    "wickets": 6,
    "economy": 6.88
  },
  {
    "id": "FY-Fazal-2010",
    "playerName": "FY Fazal",
    "season": 2010,
    "role": "FINISHER",
    "runs": 164,
    "strikeRate": 102.5,
    "wickets": 1,
    "economy": 10
  },
  {
    "id": "AD-Mascarenhas-2012",
    "playerName": "AD Mascarenhas",
    "season": 2012,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 87.5,
    "wickets": 7,
    "economy": 6.8
  },
  {
    "id": "KM-Jadhav-2015",
    "playerName": "KM Jadhav",
    "season": 2015,
    "role": "FINISHER",
    "runs": 189,
    "strikeRate": 132.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mandeep-Singh-2017",
    "playerName": "Mandeep Singh",
    "season": 2017,
    "role": "FINISHER",
    "runs": 188,
    "strikeRate": 105.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shivam-Mavi-2018",
    "playerName": "Shivam Mavi",
    "season": 2018,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 86.7,
    "wickets": 7,
    "economy": 9.15
  },
  {
    "id": "R-Tewatia-2024",
    "playerName": "R Tewatia",
    "season": 2024,
    "role": "FINISHER",
    "runs": 188,
    "strikeRate": 135.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Sai-Kishore-2024",
    "playerName": "R Sai Kishore",
    "season": 2024,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 216.7,
    "wickets": 7,
    "economy": 8.84
  },
  {
    "id": "BB-McCullum-2008",
    "playerName": "BB McCullum",
    "season": 2008,
    "role": "FINISHER",
    "runs": 188,
    "strikeRate": 195.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SR-Tendulkar-2008",
    "playerName": "SR Tendulkar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 188,
    "strikeRate": 99.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Dhawan-2022",
    "playerName": "R Dhawan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 90.2,
    "wickets": 6,
    "economy": 8.27
  },
  {
    "id": "JM-Sharma-2024",
    "playerName": "JM Sharma",
    "season": 2024,
    "role": "FINISHER",
    "runs": 187,
    "strikeRate": 127.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Swapnil-Singh-2024",
    "playerName": "Swapnil Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 168.2,
    "wickets": 6,
    "economy": 8.67
  },
  {
    "id": "TH-David-2025",
    "playerName": "TH David",
    "season": 2025,
    "role": "FINISHER",
    "runs": 187,
    "strikeRate": 174.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Sathish-2010",
    "playerName": "R Sathish",
    "season": 2010,
    "role": "FINISHER",
    "runs": 112,
    "strikeRate": 114.3,
    "wickets": 3,
    "economy": 9.53
  },
  {
    "id": "SS-Tiwary-2011",
    "playerName": "SS Tiwary",
    "season": 2011,
    "role": "FINISHER",
    "runs": 187,
    "strikeRate": 95.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "EJG-Morgan-2015",
    "playerName": "EJG Morgan",
    "season": 2015,
    "role": "FINISHER",
    "runs": 187,
    "strikeRate": 121.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TH-David-2022",
    "playerName": "TH David",
    "season": 2022,
    "role": "FINISHER",
    "runs": 186,
    "strikeRate": 204.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "D-Brevis-2022",
    "playerName": "D Brevis",
    "season": 2022,
    "role": "FINISHER",
    "runs": 161,
    "strikeRate": 138.8,
    "wickets": 1,
    "economy": 16
  },
  {
    "id": "Atharva-Taide-2023",
    "playerName": "Atharva Taide",
    "season": 2023,
    "role": "FINISHER",
    "runs": 186,
    "strikeRate": 136.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LS-Livingstone-2024",
    "playerName": "LS Livingstone",
    "season": 2024,
    "role": "FINISHER",
    "runs": 111,
    "strikeRate": 135.4,
    "wickets": 3,
    "economy": 6.88
  },
  {
    "id": "I-Sharma-2008",
    "playerName": "I Sharma",
    "season": 2008,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 100,
    "wickets": 7,
    "economy": 7.85
  },
  {
    "id": "DJ-Bravo-2010",
    "playerName": "DJ Bravo",
    "season": 2010,
    "role": "FINISHER",
    "runs": 61,
    "strikeRate": 115.1,
    "wickets": 5,
    "economy": 8.56
  },
  {
    "id": "AA-Chavan-2012",
    "playerName": "AA Chavan",
    "season": 2012,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 137.5,
    "wickets": 7,
    "economy": 8.7
  },
  {
    "id": "MM-Sharma-2018",
    "playerName": "MM Sharma",
    "season": 2018,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 71.4,
    "wickets": 7,
    "economy": 10.58
  },
  {
    "id": "SO-Hetmyer-2020",
    "playerName": "SO Hetmyer",
    "season": 2020,
    "role": "FINISHER",
    "runs": 185,
    "strikeRate": 145.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MP-Stoinis-2025",
    "playerName": "MP Stoinis",
    "season": 2025,
    "role": "FINISHER",
    "runs": 160,
    "strikeRate": 175.8,
    "wickets": 1,
    "economy": 11.67
  },
  {
    "id": "T-Thushara-2010",
    "playerName": "T Thushara",
    "season": 2010,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 90.9,
    "wickets": 7,
    "economy": 6.57
  },
  {
    "id": "DS-Kulkarni-2014",
    "playerName": "DS Kulkarni",
    "season": 2014,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 129.6,
    "wickets": 6,
    "economy": 7.84
  },
  {
    "id": "CA-Ingram-2019",
    "playerName": "CA Ingram",
    "season": 2019,
    "role": "FINISHER",
    "runs": 184,
    "strikeRate": 117.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Kumar-2021",
    "playerName": "B Kumar",
    "season": 2021,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 106.3,
    "wickets": 6,
    "economy": 7.81
  },
  {
    "id": "M-Jansen-2022",
    "playerName": "M Jansen",
    "season": 2022,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 128.6,
    "wickets": 7,
    "economy": 8.3
  },
  {
    "id": "R-Bhatia-2016",
    "playerName": "R Bhatia",
    "season": 2016,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 170,
    "wickets": 6,
    "economy": 7.18
  },
  {
    "id": "GJ-Maxwell-2020",
    "playerName": "GJ Maxwell",
    "season": 2020,
    "role": "FINISHER",
    "runs": 108,
    "strikeRate": 96.4,
    "wickets": 3,
    "economy": 8.14
  },
  {
    "id": "SD-Hope-2024",
    "playerName": "SD Hope",
    "season": 2024,
    "role": "FINISHER",
    "runs": 183,
    "strikeRate": 146.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Washington-Sundar-2025",
    "playerName": "Washington Sundar",
    "season": 2025,
    "role": "FINISHER",
    "runs": 133,
    "strikeRate": 156.5,
    "wickets": 2,
    "economy": 10.03
  },
  {
    "id": "Z-Khan-2009",
    "playerName": "Z Khan",
    "season": 2009,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 72.7,
    "wickets": 7,
    "economy": 6.55
  },
  {
    "id": "AA-Jhunjhunwala-2010",
    "playerName": "AA Jhunjhunwala",
    "season": 2010,
    "role": "FINISHER",
    "runs": 183,
    "strikeRate": 106.4,
    "wickets": 0,
    "economy": 10.62
  },
  {
    "id": "DB-Ravi-Teja-2011",
    "playerName": "DB Ravi Teja",
    "season": 2011,
    "role": "FINISHER",
    "runs": 183,
    "strikeRate": 124.5,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "Iqbal-Abdulla-2013",
    "playerName": "Iqbal Abdulla",
    "season": 2013,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 57.1,
    "wickets": 7,
    "economy": 7.54
  },
  {
    "id": "DJG-Sammy-2014",
    "playerName": "DJG Sammy",
    "season": 2014,
    "role": "FINISHER",
    "runs": 108,
    "strikeRate": 111.3,
    "wickets": 3,
    "economy": 10.84
  },
  {
    "id": "DJ-Bravo-2020",
    "playerName": "DJ Bravo",
    "season": 2020,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 7,
    "economy": 8
  },
  {
    "id": "VR-Iyer-2022",
    "playerName": "VR Iyer",
    "season": 2022,
    "role": "FINISHER",
    "runs": 182,
    "strikeRate": 104,
    "wickets": 0,
    "economy": 11.5
  },
  {
    "id": "AS-Joseph-2023",
    "playerName": "AS Joseph",
    "season": 2023,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 58.3,
    "wickets": 7,
    "economy": 9.04
  },
  {
    "id": "Abdul-Samad-2024",
    "playerName": "Abdul Samad",
    "season": 2024,
    "role": "FINISHER",
    "runs": 182,
    "strikeRate": 161.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JP-Duminy-2010",
    "playerName": "JP Duminy",
    "season": 2010,
    "role": "FINISHER",
    "runs": 157,
    "strikeRate": 117.2,
    "wickets": 1,
    "economy": 6.73
  },
  {
    "id": "JEC-Franklin-2011",
    "playerName": "JEC Franklin",
    "season": 2011,
    "role": "FINISHER",
    "runs": 107,
    "strikeRate": 133.8,
    "wickets": 3,
    "economy": 9.43
  },
  {
    "id": "SA-Yadav-2016",
    "playerName": "SA Yadav",
    "season": 2016,
    "role": "FINISHER",
    "runs": 182,
    "strikeRate": 123,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JD-Ryder-2009",
    "playerName": "JD Ryder",
    "season": 2009,
    "role": "FINISHER",
    "runs": 56,
    "strikeRate": 114.3,
    "wickets": 5,
    "economy": 6.98
  },
  {
    "id": "I-Sharma-2010",
    "playerName": "I Sharma",
    "season": 2010,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 35.3,
    "wickets": 7,
    "economy": 9.07
  },
  {
    "id": "LRPL-Taylor-2011",
    "playerName": "LRPL Taylor",
    "season": 2011,
    "role": "FINISHER",
    "runs": 181,
    "strikeRate": 114.6,
    "wickets": 0,
    "economy": 11
  },
  {
    "id": "DL-Vettori-2012",
    "playerName": "DL Vettori",
    "season": 2012,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 110.7,
    "wickets": 6,
    "economy": 6.82
  },
  {
    "id": "KK-Nair-2015",
    "playerName": "KK Nair",
    "season": 2015,
    "role": "FINISHER",
    "runs": 181,
    "strikeRate": 123.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Zampa-2017",
    "playerName": "A Zampa",
    "season": 2017,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 71.4,
    "wickets": 7,
    "economy": 8.07
  },
  {
    "id": "SN-Khan-2019",
    "playerName": "SN Khan",
    "season": 2019,
    "role": "FINISHER",
    "runs": 180,
    "strikeRate": 124.1,
    "wickets": 0,
    "economy": 18
  },
  {
    "id": "Harbhajan-Singh-2008",
    "playerName": "Harbhajan Singh",
    "season": 2008,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 176.5,
    "wickets": 6,
    "economy": 8.13
  },
  {
    "id": "WD-Parnell-2013",
    "playerName": "WD Parnell",
    "season": 2013,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 71.4,
    "wickets": 7,
    "economy": 8.72
  },
  {
    "id": "VR-Aaron-2017",
    "playerName": "VR Aaron",
    "season": 2017,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 36.4,
    "wickets": 7,
    "economy": 7.91
  },
  {
    "id": "NM-Coulter-Nile-2021",
    "playerName": "NM Coulter-Nile",
    "season": 2021,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 7,
    "economy": 6.5
  },
  {
    "id": "A-Nortje-2024",
    "playerName": "A Nortje",
    "season": 2024,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 44.4,
    "wickets": 7,
    "economy": 12.77
  },
  {
    "id": "DPMD-Jayawardene-2008",
    "playerName": "DPMD Jayawardene",
    "season": 2008,
    "role": "FINISHER",
    "runs": 179,
    "strikeRate": 129.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Sharma-2010",
    "playerName": "R Sharma",
    "season": 2010,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 111.5,
    "wickets": 6,
    "economy": 8.1
  },
  {
    "id": "GJ-Maxwell-2016",
    "playerName": "GJ Maxwell",
    "season": 2016,
    "role": "FINISHER",
    "runs": 179,
    "strikeRate": 138.8,
    "wickets": 0,
    "economy": 8.84
  },
  {
    "id": "STR-Binny-2017",
    "playerName": "STR Binny",
    "season": 2017,
    "role": "FINISHER",
    "runs": 78,
    "strikeRate": 101.3,
    "wickets": 4,
    "economy": 8.11
  },
  {
    "id": "MM-Ali-2024",
    "playerName": "MM Ali",
    "season": 2024,
    "role": "FINISHER",
    "runs": 128,
    "strikeRate": 121.9,
    "wickets": 2,
    "economy": 8.69
  },
  {
    "id": "B-Lee-2009",
    "playerName": "B Lee",
    "season": 2009,
    "role": "FINISHER",
    "runs": 28,
    "strikeRate": 80,
    "wickets": 6,
    "economy": 5.1
  },
  {
    "id": "Harmeet-Singh-2013",
    "playerName": "Harmeet Singh",
    "season": 2013,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 75,
    "wickets": 7,
    "economy": 7.69
  },
  {
    "id": "PV-Tambe-2015",
    "playerName": "PV Tambe",
    "season": 2015,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 7,
    "economy": 7.85
  },
  {
    "id": "J-Suchith-2022",
    "playerName": "J Suchith",
    "season": 2022,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 25,
    "wickets": 7,
    "economy": 7.36
  },
  {
    "id": "PJ-Sangwan-2008",
    "playerName": "PJ Sangwan",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 7,
    "economy": 8.55
  },
  {
    "id": "S-Badrinath-2009",
    "playerName": "S Badrinath",
    "season": 2009,
    "role": "FINISHER",
    "runs": 177,
    "strikeRate": 106.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CRD-Fernando-2010",
    "playerName": "CRD Fernando",
    "season": 2010,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 7,
    "economy": 7.04
  },
  {
    "id": "A-Mithun-2011",
    "playerName": "A Mithun",
    "season": 2011,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 135,
    "wickets": 6,
    "economy": 8.82
  },
  {
    "id": "WD-Parnell-2014",
    "playerName": "WD Parnell",
    "season": 2014,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 7,
    "economy": 7.42
  },
  {
    "id": "PA-Patel-2016",
    "playerName": "PA Patel",
    "season": 2016,
    "role": "FINISHER",
    "runs": 177,
    "strikeRate": 109.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HF-Gurney-2019",
    "playerName": "HF Gurney",
    "season": 2019,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 20,
    "wickets": 7,
    "economy": 8.49
  },
  {
    "id": "KV-Sharma-2025",
    "playerName": "KV Sharma",
    "season": 2025,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 7,
    "economy": 8.77
  },
  {
    "id": "M-Kaif-2008",
    "playerName": "M Kaif",
    "season": 2008,
    "role": "FINISHER",
    "runs": 176,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Sreesanth-2011",
    "playerName": "S Sreesanth",
    "season": 2011,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 11.1,
    "wickets": 7,
    "economy": 6.17
  },
  {
    "id": "DJ-Hooda-2015",
    "playerName": "DJ Hooda",
    "season": 2015,
    "role": "FINISHER",
    "runs": 151,
    "strikeRate": 152.5,
    "wickets": 1,
    "economy": 8.1
  },
  {
    "id": "BE-Hendricks-2015",
    "playerName": "BE Hendricks",
    "season": 2015,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 7,
    "economy": 8.2
  },
  {
    "id": "Bipul-Sharma-2016",
    "playerName": "Bipul Sharma",
    "season": 2016,
    "role": "FINISHER",
    "runs": 51,
    "strikeRate": 204,
    "wickets": 5,
    "economy": 8.79
  },
  {
    "id": "NM-Coulter-Nile-2020",
    "playerName": "NM Coulter-Nile",
    "season": 2020,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 166.7,
    "wickets": 6,
    "economy": 7.49
  },
  {
    "id": "SS-Iyer-2021",
    "playerName": "SS Iyer",
    "season": 2021,
    "role": "FINISHER",
    "runs": 175,
    "strikeRate": 96.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "K-Rabada-2023",
    "playerName": "K Rabada",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 9.92
  },
  {
    "id": "RP-Meredith-2023",
    "playerName": "RP Meredith",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 9.95
  },
  {
    "id": "RV-Uthappa-2009",
    "playerName": "RV Uthappa",
    "season": 2009,
    "role": "FINISHER",
    "runs": 175,
    "strikeRate": 98.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Narine-2015",
    "playerName": "SP Narine",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 7.53
  },
  {
    "id": "M-Ashwin-2016",
    "playerName": "M Ashwin",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 8.35
  },
  {
    "id": "PP-Chawla-2020",
    "playerName": "PP Chawla",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 8.95
  },
  {
    "id": "N-Burger-2024",
    "playerName": "N Burger",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 8.69
  },
  {
    "id": "P-Amarnath-2008",
    "playerName": "P Amarnath",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 10.95
  },
  {
    "id": "Pankaj-Singh-2012",
    "playerName": "Pankaj Singh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 8.08
  },
  {
    "id": "SW-Tait-2012",
    "playerName": "SW Tait",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 5.89
  },
  {
    "id": "IC-Pandey-2014",
    "playerName": "IC Pandey",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 7.79
  },
  {
    "id": "Kuldeep-Yadav-2016",
    "playerName": "Kuldeep Yadav",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 7,
    "economy": 8.27
  },
  {
    "id": "MP-Stoinis-2018",
    "playerName": "MP Stoinis",
    "season": 2018,
    "role": "FINISHER",
    "runs": 99,
    "strikeRate": 126.9,
    "wickets": 3,
    "economy": 11
  },
  {
    "id": "RK-Singh-2022",
    "playerName": "RK Singh",
    "season": 2022,
    "role": "FINISHER",
    "runs": 174,
    "strikeRate": 139.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TK-Curran-2018",
    "playerName": "TK Curran",
    "season": 2018,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 82.1,
    "wickets": 6,
    "economy": 11.06
  },
  {
    "id": "Arshad-Khan-2025",
    "playerName": "Arshad Khan",
    "season": 2025,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 100,
    "wickets": 6,
    "economy": 9.71
  },
  {
    "id": "RR-Powar-2009",
    "playerName": "RR Powar",
    "season": 2009,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 104.5,
    "wickets": 6,
    "economy": 6.27
  },
  {
    "id": "A-Nehra-2010",
    "playerName": "A Nehra",
    "season": 2010,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 115,
    "wickets": 6,
    "economy": 7.2
  },
  {
    "id": "MJ-Clarke-2012",
    "playerName": "MJ Clarke",
    "season": 2012,
    "role": "FINISHER",
    "runs": 98,
    "strikeRate": 102.1,
    "wickets": 3,
    "economy": 6.55
  },
  {
    "id": "A-Ashish-Reddy-2015",
    "playerName": "A Ashish Reddy",
    "season": 2015,
    "role": "FINISHER",
    "runs": 73,
    "strikeRate": 158.7,
    "wickets": 4,
    "economy": 8.27
  },
  {
    "id": "Shakib-Al-Hasan-2021",
    "playerName": "Shakib Al Hasan",
    "season": 2021,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 94,
    "wickets": 5,
    "economy": 7.18
  },
  {
    "id": "J-Botha-2009",
    "playerName": "J Botha",
    "season": 2009,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 111.9,
    "wickets": 5,
    "economy": 6.08
  },
  {
    "id": "AC-Gilchrist-2012",
    "playerName": "AC Gilchrist",
    "season": 2012,
    "role": "FINISHER",
    "runs": 172,
    "strikeRate": 117,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-McDonald-2012",
    "playerName": "AB McDonald",
    "season": 2012,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 130.6,
    "wickets": 5,
    "economy": 6.2
  },
  {
    "id": "WPUJC-Vaas-2008",
    "playerName": "WPUJC Vaas",
    "season": 2008,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 116.7,
    "wickets": 6,
    "economy": 8.5
  },
  {
    "id": "RJ-Harris-2009",
    "playerName": "RJ Harris",
    "season": 2009,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 116.7,
    "wickets": 6,
    "economy": 7.34
  },
  {
    "id": "RV-Gomez-2011",
    "playerName": "RV Gomez",
    "season": 2011,
    "role": "FINISHER",
    "runs": 46,
    "strikeRate": 88.5,
    "wickets": 5,
    "economy": 8.24
  },
  {
    "id": "S-Vidyut-2008",
    "playerName": "S Vidyut",
    "season": 2008,
    "role": "FINISHER",
    "runs": 145,
    "strikeRate": 126.1,
    "wickets": 1,
    "economy": 10.15
  },
  {
    "id": "DR-Smith-2008",
    "playerName": "DR Smith",
    "season": 2008,
    "role": "FINISHER",
    "runs": 45,
    "strikeRate": 109.8,
    "wickets": 5,
    "economy": 7.22
  },
  {
    "id": "SS-Tiwary-2016",
    "playerName": "SS Tiwary",
    "season": 2016,
    "role": "FINISHER",
    "runs": 170,
    "strikeRate": 114.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KD-Karthik-2020",
    "playerName": "KD Karthik",
    "season": 2020,
    "role": "FINISHER",
    "runs": 169,
    "strikeRate": 123.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SW-Billings-2022",
    "playerName": "SW Billings",
    "season": 2022,
    "role": "FINISHER",
    "runs": 169,
    "strikeRate": 118.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Abdul-Samad-2023",
    "playerName": "Abdul Samad",
    "season": 2023,
    "role": "FINISHER",
    "runs": 169,
    "strikeRate": 129,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Umran-Malik-2023",
    "playerName": "Umran Malik",
    "season": 2023,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 237.5,
    "wickets": 6,
    "economy": 10.6
  },
  {
    "id": "AM-Rahane-2009",
    "playerName": "AM Rahane",
    "season": 2009,
    "role": "FINISHER",
    "runs": 144,
    "strikeRate": 112.5,
    "wickets": 1,
    "economy": 5
  },
  {
    "id": "YK-Pathan-2017",
    "playerName": "YK Pathan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 143,
    "strikeRate": 116.3,
    "wickets": 1,
    "economy": 10.25
  },
  {
    "id": "N-Pooran-2019",
    "playerName": "N Pooran",
    "season": 2019,
    "role": "FINISHER",
    "runs": 168,
    "strikeRate": 152.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Lalit-Yadav-2021",
    "playerName": "Lalit Yadav",
    "season": 2021,
    "role": "FINISHER",
    "runs": 68,
    "strikeRate": 90.7,
    "wickets": 4,
    "economy": 7.21
  },
  {
    "id": "DA-Warner-2024",
    "playerName": "DA Warner",
    "season": 2024,
    "role": "FINISHER",
    "runs": 168,
    "strikeRate": 129.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RK-Singh-2024",
    "playerName": "RK Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 168,
    "strikeRate": 143.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MEK-Hussey-2008",
    "playerName": "MEK Hussey",
    "season": 2008,
    "role": "FINISHER",
    "runs": 168,
    "strikeRate": 168,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JDP-Oram-2008",
    "playerName": "JDP Oram",
    "season": 2008,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 138.5,
    "wickets": 6,
    "economy": 8.94
  },
  {
    "id": "MK-Pandey-2009",
    "playerName": "MK Pandey",
    "season": 2009,
    "role": "FINISHER",
    "runs": 168,
    "strikeRate": 140,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NV-Ojha-2009",
    "playerName": "NV Ojha",
    "season": 2009,
    "role": "FINISHER",
    "runs": 168,
    "strikeRate": 115.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "J-Botha-2013",
    "playerName": "J Botha",
    "season": 2013,
    "role": "FINISHER",
    "runs": 43,
    "strikeRate": 82.7,
    "wickets": 5,
    "economy": 6.71
  },
  {
    "id": "HH-Gibbs-2008",
    "playerName": "HH Gibbs",
    "season": 2008,
    "role": "FINISHER",
    "runs": 167,
    "strikeRate": 105,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MN-van-Wyk-2009",
    "playerName": "MN van Wyk",
    "season": 2009,
    "role": "FINISHER",
    "runs": 167,
    "strikeRate": 123.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MD-Mishra-2010",
    "playerName": "MD Mishra",
    "season": 2010,
    "role": "FINISHER",
    "runs": 166,
    "strikeRate": 111.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KL-Rahul-2014",
    "playerName": "KL Rahul",
    "season": 2014,
    "role": "FINISHER",
    "runs": 166,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DJ-Hussey-2014",
    "playerName": "DJ Hussey",
    "season": 2014,
    "role": "FINISHER",
    "runs": 116,
    "strikeRate": 120.8,
    "wickets": 2,
    "economy": 12.67
  },
  {
    "id": "Washington-Sundar-2018",
    "playerName": "Washington Sundar",
    "season": 2018,
    "role": "FINISHER",
    "runs": 65,
    "strikeRate": 162.5,
    "wickets": 4,
    "economy": 9.54
  },
  {
    "id": "Mandeep-Singh-2019",
    "playerName": "Mandeep Singh",
    "season": 2019,
    "role": "FINISHER",
    "runs": 165,
    "strikeRate": 135.2,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "AS-Joseph-2019",
    "playerName": "AS Joseph",
    "season": 2019,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 115.4,
    "wickets": 6,
    "economy": 9.71
  },
  {
    "id": "RA-Tripathi-2024",
    "playerName": "RA Tripathi",
    "season": 2024,
    "role": "FINISHER",
    "runs": 165,
    "strikeRate": 136.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "STR-Binny-2012",
    "playerName": "STR Binny",
    "season": 2012,
    "role": "FINISHER",
    "runs": 90,
    "strikeRate": 128.6,
    "wickets": 3,
    "economy": 7.8
  },
  {
    "id": "Abdul-Samad-2025",
    "playerName": "Abdul Samad",
    "season": 2025,
    "role": "FINISHER",
    "runs": 164,
    "strikeRate": 167.3,
    "wickets": 0,
    "economy": 18
  },
  {
    "id": "S-Narwal-2010",
    "playerName": "S Narwal",
    "season": 2010,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 107.7,
    "wickets": 6,
    "economy": 11.27
  },
  {
    "id": "RE-van-der-Merwe-2011",
    "playerName": "RE van der Merwe",
    "season": 2011,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 87.5,
    "wickets": 6,
    "economy": 6.2
  },
  {
    "id": "SA-Yadav-2014",
    "playerName": "SA Yadav",
    "season": 2014,
    "role": "FINISHER",
    "runs": 164,
    "strikeRate": 133.3,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "A-Raghuvanshi-2024",
    "playerName": "A Raghuvanshi",
    "season": 2024,
    "role": "FINISHER",
    "runs": 163,
    "strikeRate": 149.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Warner-2009",
    "playerName": "DA Warner",
    "season": 2009,
    "role": "FINISHER",
    "runs": 163,
    "strikeRate": 119,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Gurkeerat-Singh-2016",
    "playerName": "Gurkeerat Singh",
    "season": 2016,
    "role": "FINISHER",
    "runs": 113,
    "strikeRate": 129.9,
    "wickets": 2,
    "economy": 7.15
  },
  {
    "id": "F-du-Plessis-2018",
    "playerName": "F du Plessis",
    "season": 2018,
    "role": "FINISHER",
    "runs": 162,
    "strikeRate": 124.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KM-Jadhav-2019",
    "playerName": "KM Jadhav",
    "season": 2019,
    "role": "FINISHER",
    "runs": 162,
    "strikeRate": 94.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CV-Varun-2022",
    "playerName": "CV Varun",
    "season": 2022,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 66.7,
    "wickets": 6,
    "economy": 8.28
  },
  {
    "id": "LS-Livingstone-2025",
    "playerName": "LS Livingstone",
    "season": 2025,
    "role": "FINISHER",
    "runs": 112,
    "strikeRate": 124.4,
    "wickets": 2,
    "economy": 8.44
  },
  {
    "id": "MS-Dhoni-2024",
    "playerName": "MS Dhoni",
    "season": 2024,
    "role": "FINISHER",
    "runs": 161,
    "strikeRate": 196.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Symonds-2008",
    "playerName": "A Symonds",
    "season": 2008,
    "role": "FINISHER",
    "runs": 161,
    "strikeRate": 145,
    "wickets": 0,
    "economy": 14.45
  },
  {
    "id": "DJ-Bravo-2011",
    "playerName": "DJ Bravo",
    "season": 2011,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 183.3,
    "wickets": 6,
    "economy": 7.4
  },
  {
    "id": "M-Vohra-2013",
    "playerName": "M Vohra",
    "season": 2013,
    "role": "FINISHER",
    "runs": 161,
    "strikeRate": 137.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Gopal-2014",
    "playerName": "S Gopal",
    "season": 2014,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 110,
    "wickets": 6,
    "economy": 7.98
  },
  {
    "id": "JA-Morkel-2015",
    "playerName": "JA Morkel",
    "season": 2015,
    "role": "FINISHER",
    "runs": 86,
    "strikeRate": 122.9,
    "wickets": 3,
    "economy": 9.16
  },
  {
    "id": "Shakib-Al-Hasan-2015",
    "playerName": "Shakib Al Hasan",
    "season": 2015,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 112.5,
    "wickets": 5,
    "economy": 8.29
  },
  {
    "id": "M-Vohra-2016",
    "playerName": "M Vohra",
    "season": 2016,
    "role": "FINISHER",
    "runs": 161,
    "strikeRate": 118.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Miller-2016",
    "playerName": "DA Miller",
    "season": 2016,
    "role": "FINISHER",
    "runs": 161,
    "strikeRate": 115.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Raina-2021",
    "playerName": "SK Raina",
    "season": 2021,
    "role": "FINISHER",
    "runs": 160,
    "strikeRate": 120.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Pandey-2023",
    "playerName": "MK Pandey",
    "season": 2023,
    "role": "FINISHER",
    "runs": 160,
    "strikeRate": 107.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Lomror-2023",
    "playerName": "MK Lomror",
    "season": 2023,
    "role": "FINISHER",
    "runs": 135,
    "strikeRate": 133.7,
    "wickets": 1,
    "economy": 8.5
  },
  {
    "id": "Mohammed-Shami-2025",
    "playerName": "Mohammed Shami",
    "season": 2025,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 90.9,
    "wickets": 6,
    "economy": 11.17
  },
  {
    "id": "RA-Jadeja-2008",
    "playerName": "RA Jadeja",
    "season": 2008,
    "role": "FINISHER",
    "runs": 135,
    "strikeRate": 125,
    "wickets": 1,
    "economy": 9.69
  },
  {
    "id": "NV-Ojha-2011",
    "playerName": "NV Ojha",
    "season": 2011,
    "role": "FINISHER",
    "runs": 160,
    "strikeRate": 94.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SW-Tait-2011",
    "playerName": "SW Tait",
    "season": 2011,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 100,
    "wickets": 6,
    "economy": 8.06
  },
  {
    "id": "A-Symonds-2011",
    "playerName": "A Symonds",
    "season": 2011,
    "role": "FINISHER",
    "runs": 135,
    "strikeRate": 94.4,
    "wickets": 1,
    "economy": 10.25
  },
  {
    "id": "DS-Kulkarni-2012",
    "playerName": "DS Kulkarni",
    "season": 2012,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 200,
    "wickets": 6,
    "economy": 7.25
  },
  {
    "id": "WP-Saha-2008",
    "playerName": "WP Saha",
    "season": 2008,
    "role": "FINISHER",
    "runs": 159,
    "strikeRate": 133.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Trivedi-2009",
    "playerName": "SK Trivedi",
    "season": 2009,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 47.4,
    "wickets": 6,
    "economy": 7.41
  },
  {
    "id": "AP-Dole-2010",
    "playerName": "AP Dole",
    "season": 2010,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 147.8,
    "wickets": 5,
    "economy": 9.37
  },
  {
    "id": "SPD-Smith-2013",
    "playerName": "SPD Smith",
    "season": 2013,
    "role": "FINISHER",
    "runs": 159,
    "strikeRate": 118.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SE-Marsh-2016",
    "playerName": "SE Marsh",
    "season": 2016,
    "role": "FINISHER",
    "runs": 159,
    "strikeRate": 118.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Kumar-2017",
    "playerName": "P Kumar",
    "season": 2017,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 88.9,
    "wickets": 6,
    "economy": 8.56
  },
  {
    "id": "TK-Curran-2020",
    "playerName": "TK Curran",
    "season": 2020,
    "role": "FINISHER",
    "runs": 83,
    "strikeRate": 131.7,
    "wickets": 3,
    "economy": 10.86
  },
  {
    "id": "V-Shankar-2021",
    "playerName": "V Shankar",
    "season": 2021,
    "role": "FINISHER",
    "runs": 58,
    "strikeRate": 111.5,
    "wickets": 4,
    "economy": 8.33
  },
  {
    "id": "R-Shepherd-2022",
    "playerName": "R Shepherd",
    "season": 2022,
    "role": "FINISHER",
    "runs": 58,
    "strikeRate": 134.9,
    "wickets": 4,
    "economy": 10.32
  },
  {
    "id": "AT-Rayudu-2023",
    "playerName": "AT Rayudu",
    "season": 2023,
    "role": "FINISHER",
    "runs": 158,
    "strikeRate": 137.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Raje-2008",
    "playerName": "RR Raje",
    "season": 2008,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 88.9,
    "wickets": 6,
    "economy": 8.35
  },
  {
    "id": "Jaskaran-Singh-2010",
    "playerName": "Jaskaran Singh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 72.7,
    "wickets": 6,
    "economy": 9.26
  },
  {
    "id": "UBT-Chand-2013",
    "playerName": "UBT Chand",
    "season": 2013,
    "role": "FINISHER",
    "runs": 158,
    "strikeRate": 96.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Z-Khan-2014",
    "playerName": "Z Khan",
    "season": 2014,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 114.3,
    "wickets": 6,
    "economy": 6.78
  },
  {
    "id": "S-Aravind-2017",
    "playerName": "S Aravind",
    "season": 2017,
    "role": "FINISHER",
    "runs": 32,
    "strikeRate": 80,
    "wickets": 5,
    "economy": 8.78
  },
  {
    "id": "S-Nadeem-2020",
    "playerName": "S Nadeem",
    "season": 2020,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 87.5,
    "wickets": 6,
    "economy": 7.84
  },
  {
    "id": "MS-Wade-2022",
    "playerName": "MS Wade",
    "season": 2022,
    "role": "FINISHER",
    "runs": 157,
    "strikeRate": 108.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Manhas-2010",
    "playerName": "M Manhas",
    "season": 2010,
    "role": "FINISHER",
    "runs": 157,
    "strikeRate": 104,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Yadav-2015",
    "playerName": "SA Yadav",
    "season": 2015,
    "role": "FINISHER",
    "runs": 157,
    "strikeRate": 136.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mandeep-Singh-2015",
    "playerName": "Mandeep Singh",
    "season": 2015,
    "role": "FINISHER",
    "runs": 157,
    "strikeRate": 153.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HM-Amla-2016",
    "playerName": "HM Amla",
    "season": 2016,
    "role": "FINISHER",
    "runs": 157,
    "strikeRate": 128.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KS-Williamson-2019",
    "playerName": "KS Williamson",
    "season": 2019,
    "role": "FINISHER",
    "runs": 156,
    "strikeRate": 116.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Shahrukh-Khan-2023",
    "playerName": "M Shahrukh Khan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 156,
    "strikeRate": 156,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DP-Conway-2025",
    "playerName": "DP Conway",
    "season": 2025,
    "role": "FINISHER",
    "runs": 156,
    "strikeRate": 124.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LJ-Wright-2013",
    "playerName": "LJ Wright",
    "season": 2013,
    "role": "FINISHER",
    "runs": 106,
    "strikeRate": 168.3,
    "wickets": 2,
    "economy": 9.62
  },
  {
    "id": "AR-Patel-2018",
    "playerName": "AR Patel",
    "season": 2018,
    "role": "FINISHER",
    "runs": 80,
    "strikeRate": 112.7,
    "wickets": 3,
    "economy": 8.39
  },
  {
    "id": "DS-Kulkarni-2019",
    "playerName": "DS Kulkarni",
    "season": 2019,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 166.7,
    "wickets": 6,
    "economy": 9.21
  },
  {
    "id": "MM-Ali-2025",
    "playerName": "MM Ali",
    "season": 2025,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 31.3,
    "wickets": 6,
    "economy": 8.24
  },
  {
    "id": "VVS-Laxman-2008",
    "playerName": "VVS Laxman",
    "season": 2008,
    "role": "FINISHER",
    "runs": 155,
    "strikeRate": 115.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Kartik-2008",
    "playerName": "M Kartik",
    "season": 2008,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 107.1,
    "wickets": 5,
    "economy": 8.9
  },
  {
    "id": "S-Sreesanth-2009",
    "playerName": "S Sreesanth",
    "season": 2009,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 26.3,
    "wickets": 6,
    "economy": 8.11
  },
  {
    "id": "WPUJC-Vaas-2009",
    "playerName": "WPUJC Vaas",
    "season": 2009,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 142.9,
    "wickets": 5,
    "economy": 8.19
  },
  {
    "id": "Akash-Madhwal-2024",
    "playerName": "Akash Madhwal",
    "season": 2024,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 6,
    "economy": 10.54
  },
  {
    "id": "LH-Ferguson-2025",
    "playerName": "LH Ferguson",
    "season": 2025,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 400,
    "wickets": 6,
    "economy": 8.45
  },
  {
    "id": "FH-Edwards-2009",
    "playerName": "FH Edwards",
    "season": 2009,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 6,
    "economy": 6.4
  },
  {
    "id": "A-Chandila-2013",
    "playerName": "A Chandila",
    "season": 2013,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 66.7,
    "wickets": 6,
    "economy": 6.32
  },
  {
    "id": "BB-Sran-2018",
    "playerName": "BB Sran",
    "season": 2018,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 42.9,
    "wickets": 6,
    "economy": 9.49
  },
  {
    "id": "PA-Patel-2018",
    "playerName": "PA Patel",
    "season": 2018,
    "role": "FINISHER",
    "runs": 153,
    "strikeRate": 140.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Shahrukh-Khan-2021",
    "playerName": "M Shahrukh Khan",
    "season": 2021,
    "role": "FINISHER",
    "runs": 153,
    "strikeRate": 129.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Miller-2025",
    "playerName": "DA Miller",
    "season": 2025,
    "role": "FINISHER",
    "runs": 153,
    "strikeRate": 123.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JE-Taylor-2011",
    "playerName": "JE Taylor",
    "season": 2011,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 75,
    "wickets": 6,
    "economy": 8.21
  },
  {
    "id": "Y-Nagar-2012",
    "playerName": "Y Nagar",
    "season": 2012,
    "role": "FINISHER",
    "runs": 153,
    "strikeRate": 114.2,
    "wickets": 0,
    "economy": 8.57
  },
  {
    "id": "Q-de-Kock-2014",
    "playerName": "Q de Kock",
    "season": 2014,
    "role": "FINISHER",
    "runs": 153,
    "strikeRate": 115.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Nadeem-2017",
    "playerName": "S Nadeem",
    "season": 2017,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 22.2,
    "wickets": 6,
    "economy": 6.49
  },
  {
    "id": "PJ-Sangwan-2017",
    "playerName": "PJ Sangwan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 6,
    "economy": 9.98
  },
  {
    "id": "PP-Chawla-2017",
    "playerName": "PP Chawla",
    "season": 2017,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 33.3,
    "wickets": 6,
    "economy": 8.8
  },
  {
    "id": "Imran-Tahir-2018",
    "playerName": "Imran Tahir",
    "season": 2018,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 6,
    "economy": 9.19
  },
  {
    "id": "SPD-Smith-2021",
    "playerName": "SPD Smith",
    "season": 2021,
    "role": "FINISHER",
    "runs": 152,
    "strikeRate": 111.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Dhruv-Jurel-2023",
    "playerName": "Dhruv Jurel",
    "season": 2023,
    "role": "FINISHER",
    "runs": 152,
    "strikeRate": 163.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Dhawan-2024",
    "playerName": "S Dhawan",
    "season": 2024,
    "role": "FINISHER",
    "runs": 152,
    "strikeRate": 121.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Q-de-Kock-2025",
    "playerName": "Q de Kock",
    "season": 2025,
    "role": "FINISHER",
    "runs": 152,
    "strikeRate": 123.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LA-Pomersbach-2008",
    "playerName": "LA Pomersbach",
    "season": 2008,
    "role": "FINISHER",
    "runs": 152,
    "strikeRate": 150.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-Dinda-2009",
    "playerName": "AB Dinda",
    "season": 2009,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 6,
    "economy": 7.8
  },
  {
    "id": "S-Sreesanth-2010",
    "playerName": "S Sreesanth",
    "season": 2010,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 122.7,
    "wickets": 5,
    "economy": 8.95
  },
  {
    "id": "DS-Kulkarni-2011",
    "playerName": "DS Kulkarni",
    "season": 2011,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 6,
    "economy": 7.43
  },
  {
    "id": "KM-Jadhav-2013",
    "playerName": "KM Jadhav",
    "season": 2013,
    "role": "FINISHER",
    "runs": 152,
    "strikeRate": 119.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Tiwary-2014",
    "playerName": "MK Tiwary",
    "season": 2014,
    "role": "FINISHER",
    "runs": 152,
    "strikeRate": 123.6,
    "wickets": 0,
    "economy": 14
  },
  {
    "id": "SPD-Smith-2014",
    "playerName": "SPD Smith",
    "season": 2014,
    "role": "FINISHER",
    "runs": 152,
    "strikeRate": 132.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "E-Lewis-2021",
    "playerName": "E Lewis",
    "season": 2021,
    "role": "FINISHER",
    "runs": 151,
    "strikeRate": 157.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Vijaykumar-Vyshak-2024",
    "playerName": "Vijaykumar Vyshak",
    "season": 2024,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 6,
    "economy": 9.53
  },
  {
    "id": "SJ-Srivastava-2010",
    "playerName": "SJ Srivastava",
    "season": 2010,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 6,
    "economy": 8.66
  },
  {
    "id": "S-Sreesanth-2013",
    "playerName": "S Sreesanth",
    "season": 2013,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 6,
    "economy": 7.54
  },
  {
    "id": "JJ-Bumrah-2014",
    "playerName": "JJ Bumrah",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 6,
    "economy": 7.49
  },
  {
    "id": "A-Choudhary-2017",
    "playerName": "A Choudhary",
    "season": 2017,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 125,
    "wickets": 5,
    "economy": 8
  },
  {
    "id": "S-Kaul-2019",
    "playerName": "S Kaul",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 8.63
  },
  {
    "id": "SS-Cottrell-2020",
    "playerName": "SS Cottrell",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 8.11
  },
  {
    "id": "JJ-Roy-2021",
    "playerName": "JJ Roy",
    "season": 2021,
    "role": "FINISHER",
    "runs": 150,
    "strikeRate": 120,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Akash-Deep-2022",
    "playerName": "Akash Deep",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 10.39
  },
  {
    "id": "TS-Mills-2022",
    "playerName": "TS Mills",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 10.77
  },
  {
    "id": "Harshit-Rana-2023",
    "playerName": "Harshit Rana",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 8.5
  },
  {
    "id": "MV-Boucher-2009",
    "playerName": "MV Boucher",
    "season": 2009,
    "role": "FINISHER",
    "runs": 150,
    "strikeRate": 124,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Kaushik-2016",
    "playerName": "S Kaushik",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 8.24
  },
  {
    "id": "A-Mishra-2021",
    "playerName": "A Mishra",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 7.79
  },
  {
    "id": "R-Sai-Kishore-2022",
    "playerName": "R Sai Kishore",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 7.47
  },
  {
    "id": "KR-Sen-2024",
    "playerName": "KR Sen",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 9.65
  },
  {
    "id": "S-Sandeep-Warrier-2024",
    "playerName": "S Sandeep Warrier",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 10.46
  },
  {
    "id": "Simarjeet-Singh-2024",
    "playerName": "Simarjeet Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 9.15
  },
  {
    "id": "V-Puthur-2025",
    "playerName": "V Puthur",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 8.96
  },
  {
    "id": "W-O-Rourke-2025",
    "playerName": "W O'Rourke",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 12.38
  },
  {
    "id": "JD-Unadkat-2011",
    "playerName": "JD Unadkat",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 8.16
  },
  {
    "id": "KP-Appanna-2012",
    "playerName": "KP Appanna",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 6,
    "economy": 8.36
  },
  {
    "id": "LRPL-Taylor-2008",
    "playerName": "LRPL Taylor",
    "season": 2008,
    "role": "FINISHER",
    "runs": 149,
    "strikeRate": 175.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BJ-Hodge-2010",
    "playerName": "BJ Hodge",
    "season": 2010,
    "role": "FINISHER",
    "runs": 99,
    "strikeRate": 104.2,
    "wickets": 2,
    "economy": 8.2
  },
  {
    "id": "KM-Jadhav-2014",
    "playerName": "KM Jadhav",
    "season": 2014,
    "role": "FINISHER",
    "runs": 149,
    "strikeRate": 143.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Hales-2018",
    "playerName": "AD Hales",
    "season": 2018,
    "role": "FINISHER",
    "runs": 148,
    "strikeRate": 124.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GJ-Maxwell-2025",
    "playerName": "GJ Maxwell",
    "season": 2025,
    "role": "FINISHER",
    "runs": 48,
    "strikeRate": 88.9,
    "wickets": 4,
    "economy": 8.12
  },
  {
    "id": "NLTC-Perera-2011",
    "playerName": "NLTC Perera",
    "season": 2011,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 79.3,
    "wickets": 5,
    "economy": 7.95
  },
  {
    "id": "Bipul-Sharma-2011",
    "playerName": "Bipul Sharma",
    "season": 2011,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 127.8,
    "wickets": 5,
    "economy": 6.15
  },
  {
    "id": "KL-Nagarkoti-2020",
    "playerName": "KL Nagarkoti",
    "season": 2020,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 68.8,
    "wickets": 5,
    "economy": 8.74
  },
  {
    "id": "SE-Marsh-2010",
    "playerName": "SE Marsh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 147,
    "strikeRate": 125.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BCJ-Cutting-2018",
    "playerName": "BCJ Cutting",
    "season": 2018,
    "role": "FINISHER",
    "runs": 96,
    "strikeRate": 162.7,
    "wickets": 2,
    "economy": 9.66
  },
  {
    "id": "AK-Markram-2021",
    "playerName": "AK Markram",
    "season": 2021,
    "role": "FINISHER",
    "runs": 146,
    "strikeRate": 118.7,
    "wickets": 0,
    "economy": 5.52
  },
  {
    "id": "SN-Thakur-2024",
    "playerName": "SN Thakur",
    "season": 2024,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 116.7,
    "wickets": 5,
    "economy": 9.59
  },
  {
    "id": "M-Kartik-2009",
    "playerName": "M Kartik",
    "season": 2009,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 105,
    "wickets": 5,
    "economy": 5.91
  },
  {
    "id": "MK-Tiwary-2013",
    "playerName": "MK Tiwary",
    "season": 2013,
    "role": "FINISHER",
    "runs": 146,
    "strikeRate": 102.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Sai-Sudharsan-2022",
    "playerName": "B Sai Sudharsan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 145,
    "strikeRate": 122.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DJ-Hooda-2024",
    "playerName": "DJ Hooda",
    "season": 2024,
    "role": "FINISHER",
    "runs": 145,
    "strikeRate": 135.5,
    "wickets": 0,
    "economy": 6.95
  },
  {
    "id": "KD-Karthik-2008",
    "playerName": "KD Karthik",
    "season": 2008,
    "role": "FINISHER",
    "runs": 145,
    "strikeRate": 134.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SM-Katich-2009",
    "playerName": "SM Katich",
    "season": 2009,
    "role": "FINISHER",
    "runs": 145,
    "strikeRate": 121.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JA-Morkel-2014",
    "playerName": "JA Morkel",
    "season": 2014,
    "role": "FINISHER",
    "runs": 45,
    "strikeRate": 109.8,
    "wickets": 4,
    "economy": 7.54
  },
  {
    "id": "AC-Thomas-2012",
    "playerName": "AC Thomas",
    "season": 2012,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 126.7,
    "wickets": 5,
    "economy": 8
  },
  {
    "id": "R-Parag-2021",
    "playerName": "R Parag",
    "season": 2021,
    "role": "FINISHER",
    "runs": 93,
    "strikeRate": 110.7,
    "wickets": 2,
    "economy": 11.23
  },
  {
    "id": "Arshad-Khan-2023",
    "playerName": "Arshad Khan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 120,
    "wickets": 5,
    "economy": 11.88
  },
  {
    "id": "Q-de-Kock-2023",
    "playerName": "Q de Kock",
    "season": 2023,
    "role": "FINISHER",
    "runs": 143,
    "strikeRate": 138.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Pandey-2012",
    "playerName": "MK Pandey",
    "season": 2012,
    "role": "FINISHER",
    "runs": 143,
    "strikeRate": 124.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CJ-Anderson-2018",
    "playerName": "CJ Anderson",
    "season": 2018,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 77.3,
    "wickets": 5,
    "economy": 12.54
  },
  {
    "id": "Azmatullah-Omarzai-2024",
    "playerName": "Azmatullah Omarzai",
    "season": 2024,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 123.5,
    "wickets": 4,
    "economy": 8.89
  },
  {
    "id": "VR-Iyer-2025",
    "playerName": "VR Iyer",
    "season": 2025,
    "role": "FINISHER",
    "runs": 142,
    "strikeRate": 132.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PHKD-Mendis-2025",
    "playerName": "PHKD Mendis",
    "season": 2025,
    "role": "FINISHER",
    "runs": 92,
    "strikeRate": 127.8,
    "wickets": 2,
    "economy": 8.57
  },
  {
    "id": "B-Lee-2008",
    "playerName": "B Lee",
    "season": 2008,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 121.4,
    "wickets": 5,
    "economy": 7.15
  },
  {
    "id": "PA-Patel-2009",
    "playerName": "PA Patel",
    "season": 2009,
    "role": "FINISHER",
    "runs": 142,
    "strikeRate": 108.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KL-Rahul-2015",
    "playerName": "KL Rahul",
    "season": 2015,
    "role": "FINISHER",
    "runs": 142,
    "strikeRate": 106.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Tripathi-2019",
    "playerName": "RA Tripathi",
    "season": 2019,
    "role": "FINISHER",
    "runs": 141,
    "strikeRate": 115.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JD-Unadkat-2021",
    "playerName": "JD Unadkat",
    "season": 2021,
    "role": "FINISHER",
    "runs": 41,
    "strikeRate": 128.1,
    "wickets": 4,
    "economy": 7.52
  },
  {
    "id": "Lalit-Yadav-2023",
    "playerName": "Lalit Yadav",
    "season": 2023,
    "role": "FINISHER",
    "runs": 66,
    "strikeRate": 106.5,
    "wickets": 3,
    "economy": 8.78
  },
  {
    "id": "MA-Agarwal-2011",
    "playerName": "MA Agarwal",
    "season": 2011,
    "role": "FINISHER",
    "runs": 141,
    "strikeRate": 109.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KD-Karthik-2015",
    "playerName": "KD Karthik",
    "season": 2015,
    "role": "FINISHER",
    "runs": 141,
    "strikeRate": 117.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DJM-Short-2018",
    "playerName": "DJM Short",
    "season": 2018,
    "role": "FINISHER",
    "runs": 115,
    "strikeRate": 112.7,
    "wickets": 1,
    "economy": 7.67
  },
  {
    "id": "CR-Woakes-2021",
    "playerName": "CR Woakes",
    "season": 2021,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 136.4,
    "wickets": 5,
    "economy": 7.61
  },
  {
    "id": "KD-Karthik-2023",
    "playerName": "KD Karthik",
    "season": 2023,
    "role": "FINISHER",
    "runs": 140,
    "strikeRate": 132.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Naman-Dhir-2024",
    "playerName": "Naman Dhir",
    "season": 2024,
    "role": "FINISHER",
    "runs": 140,
    "strikeRate": 166.7,
    "wickets": 0,
    "economy": 11.38
  },
  {
    "id": "AB-Agarkar-2010",
    "playerName": "AB Agarkar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 133.3,
    "wickets": 4,
    "economy": 9.13
  },
  {
    "id": "J-Syed-Mohammad-2011",
    "playerName": "J Syed Mohammad",
    "season": 2011,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 115.4,
    "wickets": 5,
    "economy": 8.44
  },
  {
    "id": "N-Saini-2012",
    "playerName": "N Saini",
    "season": 2012,
    "role": "FINISHER",
    "runs": 140,
    "strikeRate": 97.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MP-Stoinis-2021",
    "playerName": "MP Stoinis",
    "season": 2021,
    "role": "FINISHER",
    "runs": 89,
    "strikeRate": 120.3,
    "wickets": 2,
    "economy": 10.78
  },
  {
    "id": "SM-Curran-2025",
    "playerName": "SM Curran",
    "season": 2025,
    "role": "FINISHER",
    "runs": 114,
    "strikeRate": 129.5,
    "wickets": 1,
    "economy": 10.95
  },
  {
    "id": "SB-Styris-2009",
    "playerName": "SB Styris",
    "season": 2009,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 175,
    "wickets": 5,
    "economy": 7.84
  },
  {
    "id": "KK-Cooper-2014",
    "playerName": "KK Cooper",
    "season": 2014,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 139.3,
    "wickets": 4,
    "economy": 7.96
  },
  {
    "id": "CJ-Anderson-2015",
    "playerName": "CJ Anderson",
    "season": 2015,
    "role": "FINISHER",
    "runs": 114,
    "strikeRate": 116.3,
    "wickets": 1,
    "economy": 8.25
  },
  {
    "id": "SW-Billings-2017",
    "playerName": "SW Billings",
    "season": 2017,
    "role": "FINISHER",
    "runs": 138,
    "strikeRate": 129,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Abdul-Samad-2020",
    "playerName": "Abdul Samad",
    "season": 2020,
    "role": "FINISHER",
    "runs": 113,
    "strikeRate": 166.2,
    "wickets": 1,
    "economy": 13.4
  },
  {
    "id": "RS-Bopara-2009",
    "playerName": "RS Bopara",
    "season": 2009,
    "role": "FINISHER",
    "runs": 138,
    "strikeRate": 111.3,
    "wickets": 0,
    "economy": 3.75
  },
  {
    "id": "MS-Gony-2009",
    "playerName": "MS Gony",
    "season": 2009,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 185.7,
    "wickets": 5,
    "economy": 9.7
  },
  {
    "id": "LMP-Simmons-2017",
    "playerName": "LMP Simmons",
    "season": 2017,
    "role": "FINISHER",
    "runs": 137,
    "strikeRate": 118.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Kuldeep-Yadav-2019",
    "playerName": "Kuldeep Yadav",
    "season": 2019,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 150,
    "wickets": 5,
    "economy": 8.5
  },
  {
    "id": "EJG-Morgan-2011",
    "playerName": "EJG Morgan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 137,
    "strikeRate": 111.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NV-Ojha-2015",
    "playerName": "NV Ojha",
    "season": 2015,
    "role": "FINISHER",
    "runs": 137,
    "strikeRate": 108.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HH-Pandya-2015",
    "playerName": "HH Pandya",
    "season": 2015,
    "role": "FINISHER",
    "runs": 112,
    "strikeRate": 164.7,
    "wickets": 1,
    "economy": 9.98
  },
  {
    "id": "Abdul-Samad-2021",
    "playerName": "Abdul Samad",
    "season": 2021,
    "role": "FINISHER",
    "runs": 111,
    "strikeRate": 124.7,
    "wickets": 1,
    "economy": 9
  },
  {
    "id": "K-Gowtham-2023",
    "playerName": "K Gowtham",
    "season": 2023,
    "role": "FINISHER",
    "runs": 61,
    "strikeRate": 138.6,
    "wickets": 3,
    "economy": 7.08
  },
  {
    "id": "WP-Saha-2024",
    "playerName": "WP Saha",
    "season": 2024,
    "role": "FINISHER",
    "runs": 136,
    "strikeRate": 113.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Y-Nagar-2011",
    "playerName": "Y Nagar",
    "season": 2011,
    "role": "FINISHER",
    "runs": 111,
    "strikeRate": 102.8,
    "wickets": 1,
    "economy": 11.82
  },
  {
    "id": "MK-Pandey-2013",
    "playerName": "MK Pandey",
    "season": 2013,
    "role": "FINISHER",
    "runs": 136,
    "strikeRate": 97.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NV-Ojha-2016",
    "playerName": "NV Ojha",
    "season": 2016,
    "role": "FINISHER",
    "runs": 136,
    "strikeRate": 95.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Washington-Sundar-2023",
    "playerName": "Washington Sundar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 60,
    "strikeRate": 96.8,
    "wickets": 3,
    "economy": 8.26
  },
  {
    "id": "DJ-Willey-2023",
    "playerName": "DJ Willey",
    "season": 2023,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 109.4,
    "wickets": 4,
    "economy": 6.77
  },
  {
    "id": "AJ-Finch-2018",
    "playerName": "AJ Finch",
    "season": 2018,
    "role": "FINISHER",
    "runs": 134,
    "strikeRate": 131.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JD-Unadkat-2020",
    "playerName": "JD Unadkat",
    "season": 2020,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 69.2,
    "wickets": 5,
    "economy": 9.54
  },
  {
    "id": "DB-Ravi-Teja-2008",
    "playerName": "DB Ravi Teja",
    "season": 2008,
    "role": "FINISHER",
    "runs": 109,
    "strikeRate": 128.2,
    "wickets": 1,
    "economy": 9.5
  },
  {
    "id": "DS-Kulkarni-2009",
    "playerName": "DS Kulkarni",
    "season": 2009,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 50,
    "wickets": 5,
    "economy": 7.84
  },
  {
    "id": "R-Sathish-2013",
    "playerName": "R Sathish",
    "season": 2013,
    "role": "FINISHER",
    "runs": 109,
    "strikeRate": 138,
    "wickets": 1,
    "economy": 13
  },
  {
    "id": "Ankit-Sharma-2014",
    "playerName": "Ankit Sharma",
    "season": 2014,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 109.7,
    "wickets": 4,
    "economy": 5.5
  },
  {
    "id": "TS-Mills-2017",
    "playerName": "TS Mills",
    "season": 2017,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 72.7,
    "wickets": 5,
    "economy": 8.49
  },
  {
    "id": "KA-Pollard-2018",
    "playerName": "KA Pollard",
    "season": 2018,
    "role": "FINISHER",
    "runs": 133,
    "strikeRate": 127.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PK-Garg-2020",
    "playerName": "PK Garg",
    "season": 2020,
    "role": "FINISHER",
    "runs": 133,
    "strikeRate": 114.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "EJG-Morgan-2021",
    "playerName": "EJG Morgan",
    "season": 2021,
    "role": "FINISHER",
    "runs": 133,
    "strikeRate": 93.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Rahane-2022",
    "playerName": "AM Rahane",
    "season": 2022,
    "role": "FINISHER",
    "runs": 133,
    "strikeRate": 101.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CK-Langeveldt-2011",
    "playerName": "CK Langeveldt",
    "season": 2011,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 100,
    "wickets": 5,
    "economy": 7.89
  },
  {
    "id": "MJ-Guptill-2017",
    "playerName": "MJ Guptill",
    "season": 2017,
    "role": "FINISHER",
    "runs": 132,
    "strikeRate": 150,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MJ-Santner-2019",
    "playerName": "MJ Santner",
    "season": 2019,
    "role": "FINISHER",
    "runs": 32,
    "strikeRate": 128,
    "wickets": 4,
    "economy": 6.41
  },
  {
    "id": "TA-Boult-2019",
    "playerName": "TA Boult",
    "season": 2019,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 175,
    "wickets": 5,
    "economy": 8.15
  },
  {
    "id": "CJ-Jordan-2021",
    "playerName": "CJ Jordan",
    "season": 2021,
    "role": "FINISHER",
    "runs": 32,
    "strikeRate": 152.4,
    "wickets": 4,
    "economy": 8.35
  },
  {
    "id": "Y-Venugopal-Rao-2012",
    "playerName": "Y Venugopal Rao",
    "season": 2012,
    "role": "FINISHER",
    "runs": 132,
    "strikeRate": 102.3,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "S-Kaul-2013",
    "playerName": "S Kaul",
    "season": 2013,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 77.8,
    "wickets": 5,
    "economy": 7.76
  },
  {
    "id": "PV-Tambe-2016",
    "playerName": "PV Tambe",
    "season": 2016,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 36.8,
    "wickets": 5,
    "economy": 8.85
  },
  {
    "id": "S-Nadeem-2018",
    "playerName": "S Nadeem",
    "season": 2018,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 75,
    "wickets": 5,
    "economy": 10.57
  },
  {
    "id": "WP-Saha-2021",
    "playerName": "WP Saha",
    "season": 2021,
    "role": "FINISHER",
    "runs": 131,
    "strikeRate": 91,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MC-Henriques-2021",
    "playerName": "MC Henriques",
    "season": 2021,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 96.9,
    "wickets": 4,
    "economy": 4.62
  },
  {
    "id": "K-Kartikeya-2023",
    "playerName": "K Kartikeya",
    "season": 2023,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 85.7,
    "wickets": 5,
    "economy": 8.5
  },
  {
    "id": "TA-Boult-2017",
    "playerName": "TA Boult",
    "season": 2017,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 62.5,
    "wickets": 5,
    "economy": 9
  },
  {
    "id": "B-Stanlake-2018",
    "playerName": "B Stanlake",
    "season": 2018,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 250,
    "wickets": 5,
    "economy": 7.8
  },
  {
    "id": "Mandeep-Singh-2020",
    "playerName": "Mandeep Singh",
    "season": 2020,
    "role": "FINISHER",
    "runs": 130,
    "strikeRate": 117.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Prince-Yadav-2025",
    "playerName": "Prince Yadav",
    "season": 2025,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 45.5,
    "wickets": 5,
    "economy": 9.42
  },
  {
    "id": "KMDN-Kulasekara-2012",
    "playerName": "KMDN Kulasekara",
    "season": 2012,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 166.7,
    "wickets": 5,
    "economy": 6.55
  },
  {
    "id": "Imran-Tahir-2016",
    "playerName": "Imran Tahir",
    "season": 2016,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 71.4,
    "wickets": 5,
    "economy": 8.72
  },
  {
    "id": "Anuj-Rawat-2022",
    "playerName": "Anuj Rawat",
    "season": 2022,
    "role": "FINISHER",
    "runs": 129,
    "strikeRate": 104.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TM-Dilshan-2008",
    "playerName": "TM Dilshan",
    "season": 2008,
    "role": "FINISHER",
    "runs": 104,
    "strikeRate": 131.6,
    "wickets": 1,
    "economy": 3
  },
  {
    "id": "MM-Patel-2010",
    "playerName": "MM Patel",
    "season": 2010,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 5,
    "economy": 9.08
  },
  {
    "id": "PP-Ojha-2014",
    "playerName": "PP Ojha",
    "season": 2014,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 5,
    "economy": 8.19
  },
  {
    "id": "AB-Dinda-2014",
    "playerName": "AB Dinda",
    "season": 2014,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 30.8,
    "wickets": 5,
    "economy": 8.34
  },
  {
    "id": "DJ-Hooda-2017",
    "playerName": "DJ Hooda",
    "season": 2017,
    "role": "FINISHER",
    "runs": 78,
    "strikeRate": 147.2,
    "wickets": 2,
    "economy": 10.5
  },
  {
    "id": "Basil-Thampi-2018",
    "playerName": "Basil Thampi",
    "season": 2018,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 50,
    "wickets": 5,
    "economy": 11.13
  },
  {
    "id": "M-Ashwin-2019",
    "playerName": "M Ashwin",
    "season": 2019,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 5,
    "economy": 7.31
  },
  {
    "id": "TG-Southee-2021",
    "playerName": "TG Southee",
    "season": 2021,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 5,
    "economy": 7.7
  },
  {
    "id": "Shivam-Mavi-2022",
    "playerName": "Shivam Mavi",
    "season": 2022,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 37.5,
    "wickets": 5,
    "economy": 9.68
  },
  {
    "id": "K-Kartikeya-2022",
    "playerName": "K Kartikeya",
    "season": 2022,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 50,
    "wickets": 5,
    "economy": 7.92
  },
  {
    "id": "VG-Arora-2023",
    "playerName": "VG Arora",
    "season": 2023,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 150,
    "wickets": 5,
    "economy": 8.36
  },
  {
    "id": "Kamran-Akmal-2008",
    "playerName": "Kamran Akmal",
    "season": 2008,
    "role": "FINISHER",
    "runs": 128,
    "strikeRate": 164.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BB-McCullum-2018",
    "playerName": "BB McCullum",
    "season": 2018,
    "role": "FINISHER",
    "runs": 127,
    "strikeRate": 139.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HH-Pandya-2021",
    "playerName": "HH Pandya",
    "season": 2021,
    "role": "FINISHER",
    "runs": 127,
    "strikeRate": 109.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Shahrukh-Khan-2024",
    "playerName": "M Shahrukh Khan",
    "season": 2024,
    "role": "FINISHER",
    "runs": 127,
    "strikeRate": 164.9,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "Shoaib-Akhtar-2008",
    "playerName": "Shoaib Akhtar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 25,
    "wickets": 5,
    "economy": 7.04
  },
  {
    "id": "AG-Murtaza-2011",
    "playerName": "AG Murtaza",
    "season": 2011,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 5,
    "economy": 6
  },
  {
    "id": "JP-Faulkner-2016",
    "playerName": "JP Faulkner",
    "season": 2016,
    "role": "FINISHER",
    "runs": 77,
    "strikeRate": 128.3,
    "wickets": 2,
    "economy": 9.33
  },
  {
    "id": "UT-Khawaja-2016",
    "playerName": "UT Khawaja",
    "season": 2016,
    "role": "FINISHER",
    "runs": 127,
    "strikeRate": 121,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LH-Ferguson-2017",
    "playerName": "LH Ferguson",
    "season": 2017,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 5,
    "economy": 6.62
  },
  {
    "id": "DT-Christian-2018",
    "playerName": "DT Christian",
    "season": 2018,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 78.8,
    "wickets": 4,
    "economy": 8.96
  },
  {
    "id": "IS-Sodhi-2018",
    "playerName": "IS Sodhi",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 16.7,
    "wickets": 5,
    "economy": 5.96
  },
  {
    "id": "KK-Ahmed-2021",
    "playerName": "KK Ahmed",
    "season": 2021,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 5,
    "economy": 8.04
  },
  {
    "id": "Shoaib-Ahmed-2009",
    "playerName": "Shoaib Ahmed",
    "season": 2009,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 16.7,
    "wickets": 5,
    "economy": 8.97
  },
  {
    "id": "DB-Das-2012",
    "playerName": "DB Das",
    "season": 2012,
    "role": "FINISHER",
    "runs": 126,
    "strikeRate": 131.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Kartik-2012",
    "playerName": "M Kartik",
    "season": 2012,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 123.8,
    "wickets": 4,
    "economy": 7.12
  },
  {
    "id": "AP-Tare-2014",
    "playerName": "AP Tare",
    "season": 2014,
    "role": "FINISHER",
    "runs": 126,
    "strikeRate": 123.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Prasidh-Krishna-2019",
    "playerName": "M Prasidh Krishna",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 9.09
  },
  {
    "id": "B-Kumar-2020",
    "playerName": "B Kumar",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 6.82
  },
  {
    "id": "JDS-Neesham-2021",
    "playerName": "JDS Neesham",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 7.56
  },
  {
    "id": "K-Gowtham-2022",
    "playerName": "K Gowtham",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.42
  },
  {
    "id": "Ramandeep-Singh-2024",
    "playerName": "Ramandeep Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 125,
    "strikeRate": 195.3,
    "wickets": 0,
    "economy": 13.5
  },
  {
    "id": "MK-Lomror-2024",
    "playerName": "MK Lomror",
    "season": 2024,
    "role": "FINISHER",
    "runs": 125,
    "strikeRate": 168.9,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "KA-Jamieson-2025",
    "playerName": "KA Jamieson",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 9.38
  },
  {
    "id": "CK-Langeveldt-2010",
    "playerName": "CK Langeveldt",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 7.89
  },
  {
    "id": "AB-Dinda-2011",
    "playerName": "AB Dinda",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.92
  },
  {
    "id": "A-Chandila-2012",
    "playerName": "A Chandila",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 6.21
  },
  {
    "id": "P-Parameswaran-2012",
    "playerName": "P Parameswaran",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.61
  },
  {
    "id": "MC-Juneja-2013",
    "playerName": "MC Juneja",
    "season": 2013,
    "role": "FINISHER",
    "runs": 125,
    "strikeRate": 93.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DH-Yagnik-2013",
    "playerName": "DH Yagnik",
    "season": 2013,
    "role": "FINISHER",
    "runs": 125,
    "strikeRate": 126.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CA-Pujara-2014",
    "playerName": "CA Pujara",
    "season": 2014,
    "role": "FINISHER",
    "runs": 125,
    "strikeRate": 96.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Lamichhane-2018",
    "playerName": "S Lamichhane",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 7.07
  },
  {
    "id": "JP-Behrendorff-2019",
    "playerName": "JP Behrendorff",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.62
  },
  {
    "id": "O-Thomas-2019",
    "playerName": "O Thomas",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.1
  },
  {
    "id": "KV-Sharma-2020",
    "playerName": "KV Sharma",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.39
  },
  {
    "id": "L-Ngidi-2021",
    "playerName": "L Ngidi",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 10.32
  },
  {
    "id": "Basil-Thampi-2022",
    "playerName": "Basil Thampi",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 9.29
  },
  {
    "id": "Akash-Singh-2023",
    "playerName": "Akash Singh",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 9.64
  },
  {
    "id": "DL-Chahar-2024",
    "playerName": "DL Chahar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.3
  },
  {
    "id": "Harsh-Dubey-2025",
    "playerName": "Harsh Dubey",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 9.64
  },
  {
    "id": "S-Tyagi-2009",
    "playerName": "S Tyagi",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 7.27
  },
  {
    "id": "L-Ablish-2010",
    "playerName": "L Ablish",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.22
  },
  {
    "id": "Anand-Rajan-2011",
    "playerName": "Anand Rajan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.57
  },
  {
    "id": "DP-Nannes-2013",
    "playerName": "DP Nannes",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 7.86
  },
  {
    "id": "Z-Khan-2013",
    "playerName": "Z Khan",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 7.42
  },
  {
    "id": "GB-Hogg-2016",
    "playerName": "GB Hogg",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 5,
    "economy": 8.82
  },
  {
    "id": "DA-Miller-2021",
    "playerName": "DA Miller",
    "season": 2021,
    "role": "FINISHER",
    "runs": 124,
    "strikeRate": 107.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "K-Goel-2009",
    "playerName": "K Goel",
    "season": 2009,
    "role": "FINISHER",
    "runs": 124,
    "strikeRate": 88.6,
    "wickets": 0,
    "economy": 7.59
  },
  {
    "id": "S-Badrinath-2013",
    "playerName": "S Badrinath",
    "season": 2013,
    "role": "FINISHER",
    "runs": 124,
    "strikeRate": 100.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KS-Williamson-2016",
    "playerName": "KS Williamson",
    "season": 2016,
    "role": "FINISHER",
    "runs": 124,
    "strikeRate": 98.4,
    "wickets": 0,
    "economy": 7
  },
  {
    "id": "DJ-Hussey-2009",
    "playerName": "DJ Hussey",
    "season": 2009,
    "role": "FINISHER",
    "runs": 98,
    "strikeRate": 160.7,
    "wickets": 1,
    "economy": 8.16
  },
  {
    "id": "BB-Samantray-2013",
    "playerName": "BB Samantray",
    "season": 2013,
    "role": "FINISHER",
    "runs": 123,
    "strikeRate": 107.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AP-Tare-2013",
    "playerName": "AP Tare",
    "season": 2013,
    "role": "FINISHER",
    "runs": 123,
    "strikeRate": 146.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "EJG-Morgan-2016",
    "playerName": "EJG Morgan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 123,
    "strikeRate": 117.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WP-Saha-2018",
    "playerName": "WP Saha",
    "season": 2018,
    "role": "FINISHER",
    "runs": 122,
    "strikeRate": 113,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harpreet-Brar-2022",
    "playerName": "Harpreet Brar",
    "season": 2022,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 88,
    "wickets": 4,
    "economy": 8.88
  },
  {
    "id": "MJ-Santner-2022",
    "playerName": "MJ Santner",
    "season": 2022,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 73.3,
    "wickets": 4,
    "economy": 7.11
  },
  {
    "id": "RD-Gaikwad-2025",
    "playerName": "RD Gaikwad",
    "season": 2025,
    "role": "FINISHER",
    "runs": 122,
    "strikeRate": 148.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CA-Pujara-2010",
    "playerName": "CA Pujara",
    "season": 2010,
    "role": "FINISHER",
    "runs": 122,
    "strikeRate": 102.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RE-van-der-Merwe-2013",
    "playerName": "RE van der Merwe",
    "season": 2013,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 88,
    "wickets": 4,
    "economy": 6.36
  },
  {
    "id": "Q-de-Kock-2015",
    "playerName": "Q de Kock",
    "season": 2015,
    "role": "FINISHER",
    "runs": 122,
    "strikeRate": 156.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CH-Morris-2018",
    "playerName": "CH Morris",
    "season": 2018,
    "role": "FINISHER",
    "runs": 46,
    "strikeRate": 176.9,
    "wickets": 3,
    "economy": 10.21
  },
  {
    "id": "Abhishek-Sharma-2020",
    "playerName": "Abhishek Sharma",
    "season": 2020,
    "role": "FINISHER",
    "runs": 71,
    "strikeRate": 120.3,
    "wickets": 2,
    "economy": 9.05
  },
  {
    "id": "TK-Curran-2021",
    "playerName": "TK Curran",
    "season": 2021,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 123.5,
    "wickets": 4,
    "economy": 8.67
  },
  {
    "id": "Sameer-Rizvi-2025",
    "playerName": "Sameer Rizvi",
    "season": 2025,
    "role": "FINISHER",
    "runs": 121,
    "strikeRate": 145.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Akhil-2008",
    "playerName": "B Akhil",
    "season": 2008,
    "role": "FINISHER",
    "runs": 46,
    "strikeRate": 143.8,
    "wickets": 3,
    "economy": 7.89
  },
  {
    "id": "MF-Maharoof-2009",
    "playerName": "MF Maharoof",
    "season": 2009,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 100,
    "wickets": 4,
    "economy": 6.09
  },
  {
    "id": "B-Lee-2013",
    "playerName": "B Lee",
    "season": 2013,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 175,
    "wickets": 4,
    "economy": 7.12
  },
  {
    "id": "CM-Gautam-2014",
    "playerName": "CM Gautam",
    "season": 2014,
    "role": "FINISHER",
    "runs": 121,
    "strikeRate": 104.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Agarwal-2018",
    "playerName": "MA Agarwal",
    "season": 2018,
    "role": "FINISHER",
    "runs": 120,
    "strikeRate": 127.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JJ-Roy-2018",
    "playerName": "JJ Roy",
    "season": 2018,
    "role": "FINISHER",
    "runs": 120,
    "strikeRate": 122.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Rahane-2011",
    "playerName": "AM Rahane",
    "season": 2011,
    "role": "FINISHER",
    "runs": 120,
    "strikeRate": 121.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AC-Blizzard-2011",
    "playerName": "AC Blizzard",
    "season": 2011,
    "role": "FINISHER",
    "runs": 120,
    "strikeRate": 136.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Manhas-2012",
    "playerName": "M Manhas",
    "season": 2012,
    "role": "FINISHER",
    "runs": 120,
    "strikeRate": 121.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KC-Sangakkara-2013",
    "playerName": "KC Sangakkara",
    "season": 2013,
    "role": "FINISHER",
    "runs": 120,
    "strikeRate": 87.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Iqbal-Abdulla-2015",
    "playerName": "Iqbal Abdulla",
    "season": 2015,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 100,
    "wickets": 4,
    "economy": 7.44
  },
  {
    "id": "MK-Lomror-2021",
    "playerName": "MK Lomror",
    "season": 2021,
    "role": "FINISHER",
    "runs": 94,
    "strikeRate": 123.7,
    "wickets": 1,
    "economy": 6.56
  },
  {
    "id": "TM-Dilshan-2010",
    "playerName": "TM Dilshan",
    "season": 2010,
    "role": "FINISHER",
    "runs": 44,
    "strikeRate": 80,
    "wickets": 3,
    "economy": 8.57
  },
  {
    "id": "HH-Pandya-2016",
    "playerName": "HH Pandya",
    "season": 2016,
    "role": "FINISHER",
    "runs": 44,
    "strikeRate": 66.7,
    "wickets": 3,
    "economy": 8.77
  },
  {
    "id": "V-Shankar-2025",
    "playerName": "V Shankar",
    "season": 2025,
    "role": "FINISHER",
    "runs": 118,
    "strikeRate": 124.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ankit-Sharma-2012",
    "playerName": "Ankit Sharma",
    "season": 2012,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 138.5,
    "wickets": 4,
    "economy": 6.82
  },
  {
    "id": "M-Shahrukh-Khan-2022",
    "playerName": "M Shahrukh Khan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 117,
    "strikeRate": 99.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MW-Short-2023",
    "playerName": "MW Short",
    "season": 2023,
    "role": "FINISHER",
    "runs": 117,
    "strikeRate": 118.2,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "Misbah-ul-Haq-2008",
    "playerName": "Misbah-ul-Haq",
    "season": 2008,
    "role": "FINISHER",
    "runs": 117,
    "strikeRate": 142.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Akhil-2009",
    "playerName": "B Akhil",
    "season": 2009,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 106.3,
    "wickets": 4,
    "economy": 6.96
  },
  {
    "id": "AF-Milne-2021",
    "playerName": "AF Milne",
    "season": 2021,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 84.2,
    "wickets": 4,
    "economy": 9.31
  },
  {
    "id": "AM-Nayar-2013",
    "playerName": "AM Nayar",
    "season": 2013,
    "role": "FINISHER",
    "runs": 66,
    "strikeRate": 89.2,
    "wickets": 2,
    "economy": 7.08
  },
  {
    "id": "RV-Uthappa-2021",
    "playerName": "RV Uthappa",
    "season": 2021,
    "role": "FINISHER",
    "runs": 115,
    "strikeRate": 133.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Tiwary-2021",
    "playerName": "SS Tiwary",
    "season": 2021,
    "role": "FINISHER",
    "runs": 115,
    "strikeRate": 116.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "W-Jaffer-2008",
    "playerName": "W Jaffer",
    "season": 2008,
    "role": "FINISHER",
    "runs": 115,
    "strikeRate": 104.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Sohal-2009",
    "playerName": "S Sohal",
    "season": 2009,
    "role": "FINISHER",
    "runs": 115,
    "strikeRate": 112.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "OA-Shah-2010",
    "playerName": "OA Shah",
    "season": 2010,
    "role": "FINISHER",
    "runs": 115,
    "strikeRate": 119.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Agarwal-2014",
    "playerName": "MA Agarwal",
    "season": 2014,
    "role": "FINISHER",
    "runs": 115,
    "strikeRate": 123.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DT-Christian-2021",
    "playerName": "DT Christian",
    "season": 2021,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 58.3,
    "wickets": 4,
    "economy": 9
  },
  {
    "id": "MS-Dhoni-2021",
    "playerName": "MS Dhoni",
    "season": 2021,
    "role": "FINISHER",
    "runs": 114,
    "strikeRate": 102.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Manohar-2023",
    "playerName": "A Manohar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 114,
    "strikeRate": 132.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammad-Hafeez-2008",
    "playerName": "Mohammad Hafeez",
    "season": 2008,
    "role": "FINISHER",
    "runs": 64,
    "strikeRate": 76.2,
    "wickets": 2,
    "economy": 6.76
  },
  {
    "id": "CL-White-2008",
    "playerName": "CL White",
    "season": 2008,
    "role": "FINISHER",
    "runs": 114,
    "strikeRate": 108.6,
    "wickets": 0,
    "economy": 20.57
  },
  {
    "id": "DJ-Thornely-2008",
    "playerName": "DJ Thornely",
    "season": 2008,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 72.2,
    "wickets": 3,
    "economy": 5.45
  },
  {
    "id": "BB-McCullum-2010",
    "playerName": "BB McCullum",
    "season": 2010,
    "role": "FINISHER",
    "runs": 114,
    "strikeRate": 97.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Manhas-2011",
    "playerName": "M Manhas",
    "season": 2011,
    "role": "FINISHER",
    "runs": 114,
    "strikeRate": 89.1,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "AM-Rahane-2020",
    "playerName": "AM Rahane",
    "season": 2020,
    "role": "FINISHER",
    "runs": 113,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Arjun-Tendulkar-2023",
    "playerName": "Arjun Tendulkar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 144.4,
    "wickets": 4,
    "economy": 8.38
  },
  {
    "id": "SO-Hetmyer-2024",
    "playerName": "SO Hetmyer",
    "season": 2024,
    "role": "FINISHER",
    "runs": 113,
    "strikeRate": 156.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HV-Patel-2014",
    "playerName": "HV Patel",
    "season": 2014,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 185.7,
    "wickets": 4,
    "economy": 9.97
  },
  {
    "id": "R-Vinay-Kumar-2016",
    "playerName": "R Vinay Kumar",
    "season": 2016,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 108.3,
    "wickets": 4,
    "economy": 6.84
  },
  {
    "id": "JO-Holder-2023",
    "playerName": "JO Holder",
    "season": 2023,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 100,
    "wickets": 4,
    "economy": 9.89
  },
  {
    "id": "A-Flintoff-2009",
    "playerName": "A Flintoff",
    "season": 2009,
    "role": "FINISHER",
    "runs": 62,
    "strikeRate": 108.8,
    "wickets": 2,
    "economy": 9.64
  },
  {
    "id": "AD-Mascarenhas-2010",
    "playerName": "AD Mascarenhas",
    "season": 2010,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 109.1,
    "wickets": 4,
    "economy": 8.25
  },
  {
    "id": "AB-de-Villiers-2010",
    "playerName": "AB de Villiers",
    "season": 2010,
    "role": "FINISHER",
    "runs": 111,
    "strikeRate": 90.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LR-Shukla-2010",
    "playerName": "LR Shukla",
    "season": 2010,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 133.3,
    "wickets": 3,
    "economy": 9
  },
  {
    "id": "AM-Nayar-2011",
    "playerName": "AM Nayar",
    "season": 2011,
    "role": "FINISHER",
    "runs": 61,
    "strikeRate": 91,
    "wickets": 2,
    "economy": 9.05
  },
  {
    "id": "DJ-Harris-2012",
    "playerName": "DJ Harris",
    "season": 2012,
    "role": "FINISHER",
    "runs": 111,
    "strikeRate": 107.8,
    "wickets": 0,
    "economy": 8.67
  },
  {
    "id": "SN-Khan-2015",
    "playerName": "SN Khan",
    "season": 2015,
    "role": "FINISHER",
    "runs": 111,
    "strikeRate": 154.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Aman-Hakim-Khan-2023",
    "playerName": "Aman Hakim Khan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 110,
    "strikeRate": 103.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PVD-Chameera-2025",
    "playerName": "PVD Chameera",
    "season": 2025,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 71.4,
    "wickets": 4,
    "economy": 10.7
  },
  {
    "id": "D-du-Preez-2009",
    "playerName": "D du Preez",
    "season": 2009,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 76.9,
    "wickets": 4,
    "economy": 7.81
  },
  {
    "id": "J-Syed-Mohammad-2013",
    "playerName": "J Syed Mohammad",
    "season": 2013,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 76.9,
    "wickets": 4,
    "economy": 8.9
  },
  {
    "id": "Gurkeerat-Singh-2015",
    "playerName": "Gurkeerat Singh",
    "season": 2015,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 85.4,
    "wickets": 3,
    "economy": 7.07
  },
  {
    "id": "J-Yadav-2021",
    "playerName": "J Yadav",
    "season": 2021,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 130.8,
    "wickets": 3,
    "economy": 7.42
  },
  {
    "id": "N-Wadhera-2024",
    "playerName": "N Wadhera",
    "season": 2024,
    "role": "FINISHER",
    "runs": 109,
    "strikeRate": 121.1,
    "wickets": 0,
    "economy": 6.5
  },
  {
    "id": "Bipul-Sharma-2010",
    "playerName": "Bipul Sharma",
    "season": 2010,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 128.6,
    "wickets": 4,
    "economy": 9.4
  },
  {
    "id": "SS-Tiwary-2013",
    "playerName": "SS Tiwary",
    "season": 2013,
    "role": "FINISHER",
    "runs": 109,
    "strikeRate": 96.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MC-Henriques-2014",
    "playerName": "MC Henriques",
    "season": 2014,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 64.3,
    "wickets": 4,
    "economy": 9.14
  },
  {
    "id": "SS-Tiwary-2015",
    "playerName": "SS Tiwary",
    "season": 2015,
    "role": "FINISHER",
    "runs": 109,
    "strikeRate": 131.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NM-Coulter-Nile-2016",
    "playerName": "NM Coulter-Nile",
    "season": 2016,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 64.3,
    "wickets": 4,
    "economy": 7.74
  },
  {
    "id": "SW-Billings-2018",
    "playerName": "SW Billings",
    "season": 2018,
    "role": "FINISHER",
    "runs": 108,
    "strikeRate": 138.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Manohar-2022",
    "playerName": "A Manohar",
    "season": 2022,
    "role": "FINISHER",
    "runs": 108,
    "strikeRate": 136.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "ST-Jayasuriya-2010",
    "playerName": "ST Jayasuriya",
    "season": 2010,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 94.3,
    "wickets": 3,
    "economy": 7.42
  },
  {
    "id": "DL-Vettori-2010",
    "playerName": "DL Vettori",
    "season": 2010,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 117.9,
    "wickets": 3,
    "economy": 8.17
  },
  {
    "id": "Gurkeerat-Singh-2013",
    "playerName": "Gurkeerat Singh",
    "season": 2013,
    "role": "FINISHER",
    "runs": 108,
    "strikeRate": 110.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AF-Milne-2017",
    "playerName": "AF Milne",
    "season": 2017,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 58.3,
    "wickets": 4,
    "economy": 9.4
  },
  {
    "id": "Ankit-Soni-2017",
    "playerName": "Ankit Soni",
    "season": 2017,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 77.8,
    "wickets": 4,
    "economy": 7.77
  },
  {
    "id": "Simarjeet-Singh-2022",
    "playerName": "Simarjeet Singh",
    "season": 2022,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 87.5,
    "wickets": 4,
    "economy": 7.59
  },
  {
    "id": "R-Shepherd-2024",
    "playerName": "R Shepherd",
    "season": 2024,
    "role": "FINISHER",
    "runs": 57,
    "strikeRate": 237.5,
    "wickets": 2,
    "economy": 12.79
  },
  {
    "id": "P-Dogra-2010",
    "playerName": "P Dogra",
    "season": 2010,
    "role": "FINISHER",
    "runs": 107,
    "strikeRate": 99.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RN-ten-Doeschate-2011",
    "playerName": "RN ten Doeschate",
    "season": 2011,
    "role": "FINISHER",
    "runs": 107,
    "strikeRate": 140.8,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "RJ-Peterson-2012",
    "playerName": "RJ Peterson",
    "season": 2012,
    "role": "FINISHER",
    "runs": 32,
    "strikeRate": 100,
    "wickets": 3,
    "economy": 8.75
  },
  {
    "id": "P-Negi-2016",
    "playerName": "P Negi",
    "season": 2016,
    "role": "FINISHER",
    "runs": 57,
    "strikeRate": 90.5,
    "wickets": 2,
    "economy": 9.33
  },
  {
    "id": "MR-Marsh-2016",
    "playerName": "MR Marsh",
    "season": 2016,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 63.6,
    "wickets": 4,
    "economy": 4.91
  },
  {
    "id": "Bipul-Sharma-2017",
    "playerName": "Bipul Sharma",
    "season": 2017,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 124,
    "wickets": 3,
    "economy": 7.86
  },
  {
    "id": "DS-Kulkarni-2018",
    "playerName": "DS Kulkarni",
    "season": 2018,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 85.7,
    "wickets": 4,
    "economy": 9
  },
  {
    "id": "IS-Sodhi-2019",
    "playerName": "IS Sodhi",
    "season": 2019,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 9.14
  },
  {
    "id": "Washington-Sundar-2021",
    "playerName": "Washington Sundar",
    "season": 2021,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 64.6,
    "wickets": 3,
    "economy": 7.29
  },
  {
    "id": "PP-Shaw-2023",
    "playerName": "PP Shaw",
    "season": 2023,
    "role": "FINISHER",
    "runs": 106,
    "strikeRate": 117.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SH-Johnson-2024",
    "playerName": "SH Johnson",
    "season": 2024,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 85.7,
    "wickets": 4,
    "economy": 9.39
  },
  {
    "id": "SB-Dubey-2025",
    "playerName": "SB Dubey",
    "season": 2025,
    "role": "FINISHER",
    "runs": 106,
    "strikeRate": 160.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LA-Carseldine-2009",
    "playerName": "LA Carseldine",
    "season": 2009,
    "role": "FINISHER",
    "runs": 81,
    "strikeRate": 114.1,
    "wickets": 1,
    "economy": 5.14
  },
  {
    "id": "VR-Aaron-2015",
    "playerName": "VR Aaron",
    "season": 2015,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 200,
    "wickets": 4,
    "economy": 9.56
  },
  {
    "id": "SA-Yadav-2017",
    "playerName": "SA Yadav",
    "season": 2017,
    "role": "FINISHER",
    "runs": 105,
    "strikeRate": 118,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "VG-Arora-2022",
    "playerName": "VG Arora",
    "season": 2022,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 35.7,
    "wickets": 4,
    "economy": 9
  },
  {
    "id": "Anmolpreet-Singh-2023",
    "playerName": "Anmolpreet Singh",
    "season": 2023,
    "role": "FINISHER",
    "runs": 105,
    "strikeRate": 126.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WA-Mota-2009",
    "playerName": "WA Mota",
    "season": 2009,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 62.5,
    "wickets": 3,
    "economy": 6.76
  },
  {
    "id": "RR-Powar-2010",
    "playerName": "RR Powar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 62.5,
    "wickets": 4,
    "economy": 6.79
  },
  {
    "id": "AS-Rajpoot-2017",
    "playerName": "AS Rajpoot",
    "season": 2017,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 57.1,
    "wickets": 4,
    "economy": 7.79
  },
  {
    "id": "MS-Dhoni-2023",
    "playerName": "MS Dhoni",
    "season": 2023,
    "role": "FINISHER",
    "runs": 104,
    "strikeRate": 165.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Akash-Madhwal-2025",
    "playerName": "Akash Madhwal",
    "season": 2025,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 44.4,
    "wickets": 4,
    "economy": 10.33
  },
  {
    "id": "MK-Tiwary-2008",
    "playerName": "MK Tiwary",
    "season": 2008,
    "role": "FINISHER",
    "runs": 104,
    "strikeRate": 119.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CL-White-2011",
    "playerName": "CL White",
    "season": 2011,
    "role": "FINISHER",
    "runs": 104,
    "strikeRate": 95.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Gony-2012",
    "playerName": "MS Gony",
    "season": 2012,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 8.62
  },
  {
    "id": "YV-Takawale-2014",
    "playerName": "YV Takawale",
    "season": 2014,
    "role": "FINISHER",
    "runs": 104,
    "strikeRate": 113,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Rana-2016",
    "playerName": "N Rana",
    "season": 2016,
    "role": "FINISHER",
    "runs": 104,
    "strikeRate": 133.3,
    "wickets": 0,
    "economy": 3
  },
  {
    "id": "VR-Aaron-2019",
    "playerName": "VR Aaron",
    "season": 2019,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 42.9,
    "wickets": 4,
    "economy": 10.38
  },
  {
    "id": "SS-Tiwary-2020",
    "playerName": "SS Tiwary",
    "season": 2020,
    "role": "FINISHER",
    "runs": 103,
    "strikeRate": 127.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RJW-Topley-2024",
    "playerName": "RJW Topley",
    "season": 2024,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 10.61
  },
  {
    "id": "Arshad-Khan-2024",
    "playerName": "Arshad Khan",
    "season": 2024,
    "role": "FINISHER",
    "runs": 78,
    "strikeRate": 150,
    "wickets": 1,
    "economy": 9.64
  },
  {
    "id": "R-Powell-2024",
    "playerName": "R Powell",
    "season": 2024,
    "role": "FINISHER",
    "runs": 103,
    "strikeRate": 145.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DB-Das-2008",
    "playerName": "DB Das",
    "season": 2008,
    "role": "FINISHER",
    "runs": 103,
    "strikeRate": 108.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NK-Patel-2008",
    "playerName": "NK Patel",
    "season": 2008,
    "role": "FINISHER",
    "runs": 103,
    "strikeRate": 124.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Powar-2008",
    "playerName": "RR Powar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 28,
    "strikeRate": 133.3,
    "wickets": 3,
    "economy": 7.25
  },
  {
    "id": "RJ-Quiney-2009",
    "playerName": "RJ Quiney",
    "season": 2009,
    "role": "FINISHER",
    "runs": 103,
    "strikeRate": 98.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-McLaren-2013",
    "playerName": "R McLaren",
    "season": 2013,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 12.39
  },
  {
    "id": "KC-Cariappa-2017",
    "playerName": "KC Cariappa",
    "season": 2017,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 28.6,
    "wickets": 4,
    "economy": 8.11
  },
  {
    "id": "DJ-Hooda-2020",
    "playerName": "DJ Hooda",
    "season": 2020,
    "role": "FINISHER",
    "runs": 102,
    "strikeRate": 137.8,
    "wickets": 0,
    "economy": 10
  },
  {
    "id": "M-Prasidh-Krishna-2020",
    "playerName": "M Prasidh Krishna",
    "season": 2020,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 9.08
  },
  {
    "id": "Kartik-Tyagi-2021",
    "playerName": "Kartik Tyagi",
    "season": 2021,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 8.06
  },
  {
    "id": "Shoaib-Malik-2008",
    "playerName": "Shoaib Malik",
    "season": 2008,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 106.1,
    "wickets": 2,
    "economy": 9
  },
  {
    "id": "SB-Wagh-2011",
    "playerName": "SB Wagh",
    "season": 2011,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 4,
    "economy": 7.71
  },
  {
    "id": "Iqbal-Abdulla-2012",
    "playerName": "Iqbal Abdulla",
    "season": 2012,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 4,
    "economy": 6.58
  },
  {
    "id": "UBT-Chand-2015",
    "playerName": "UBT Chand",
    "season": 2015,
    "role": "FINISHER",
    "runs": 102,
    "strikeRate": 114.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BCJ-Cutting-2017",
    "playerName": "BCJ Cutting",
    "season": 2017,
    "role": "FINISHER",
    "runs": 51,
    "strikeRate": 188.9,
    "wickets": 2,
    "economy": 9.34
  },
  {
    "id": "V-Shankar-2017",
    "playerName": "V Shankar",
    "season": 2017,
    "role": "FINISHER",
    "runs": 101,
    "strikeRate": 131.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LE-Plunkett-2018",
    "playerName": "LE Plunkett",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 4,
    "economy": 8.88
  },
  {
    "id": "Ishan-Kishan-2019",
    "playerName": "Ishan Kishan",
    "season": 2019,
    "role": "FINISHER",
    "runs": 101,
    "strikeRate": 97.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Washington-Sundar-2019",
    "playerName": "Washington Sundar",
    "season": 2019,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 4,
    "economy": 8.33
  },
  {
    "id": "Fazalhaq-Farooqi-2023",
    "playerName": "Fazalhaq Farooqi",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 20,
    "wickets": 4,
    "economy": 8.3
  },
  {
    "id": "DP-Vijaykumar-2008",
    "playerName": "DP Vijaykumar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 4,
    "economy": 7.74
  },
  {
    "id": "JM-Kemp-2010",
    "playerName": "JM Kemp",
    "season": 2010,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 104,
    "wickets": 3,
    "economy": 7.4
  },
  {
    "id": "P-Parameswaran-2011",
    "playerName": "P Parameswaran",
    "season": 2011,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 4,
    "economy": 8.47
  },
  {
    "id": "R-Shukla-2013",
    "playerName": "R Shukla",
    "season": 2013,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 9.06
  },
  {
    "id": "BJ-Hodge-2014",
    "playerName": "BJ Hodge",
    "season": 2014,
    "role": "FINISHER",
    "runs": 101,
    "strikeRate": 136.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Kumar-2014",
    "playerName": "P Kumar",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 6.66
  },
  {
    "id": "DJ-Muthuswami-2015",
    "playerName": "DJ Muthuswami",
    "season": 2015,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 4,
    "economy": 7.71
  },
  {
    "id": "Bipul-Sharma-2015",
    "playerName": "Bipul Sharma",
    "season": 2015,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 4,
    "economy": 7.14
  },
  {
    "id": "NT-Ellis-2022",
    "playerName": "NT Ellis",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8.55
  },
  {
    "id": "Mustafizur-Rahman-2025",
    "playerName": "Mustafizur Rahman",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 7.91
  },
  {
    "id": "L-Ngidi-2025",
    "playerName": "L Ngidi",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 10.13
  },
  {
    "id": "BAW-Mendis-2009",
    "playerName": "BAW Mendis",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8
  },
  {
    "id": "S-Ladda-2010",
    "playerName": "S Ladda",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 9.39
  },
  {
    "id": "MS-Gony-2011",
    "playerName": "MS Gony",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 9.38
  },
  {
    "id": "S-Nadeem-2011",
    "playerName": "S Nadeem",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 7.57
  },
  {
    "id": "LR-Shukla-2012",
    "playerName": "LR Shukla",
    "season": 2012,
    "role": "FINISHER",
    "runs": 75,
    "strikeRate": 131.6,
    "wickets": 1,
    "economy": 6
  },
  {
    "id": "BE-Hendricks-2014",
    "playerName": "BE Hendricks",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 10.16
  },
  {
    "id": "KV-Sharma-2018",
    "playerName": "KV Sharma",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 9.31
  },
  {
    "id": "Avesh-Khan-2018",
    "playerName": "Avesh Khan",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 10.51
  },
  {
    "id": "DW-Steyn-2019",
    "playerName": "DW Steyn",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 9.25
  },
  {
    "id": "RP-Meredith-2021",
    "playerName": "RP Meredith",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 9.5
  },
  {
    "id": "J-Little-2024",
    "playerName": "J Little",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 10.8
  },
  {
    "id": "Vijaykumar-Vyshak-2025",
    "playerName": "Vijaykumar Vyshak",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 9.61
  },
  {
    "id": "I-Sharma-2025",
    "playerName": "I Sharma",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 10.77
  },
  {
    "id": "Yudhvir-Singh-2025",
    "playerName": "Yudhvir Singh",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 11.15
  },
  {
    "id": "Akash-Singh-2025",
    "playerName": "Akash Singh",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8.87
  },
  {
    "id": "AM-Salvi-2009",
    "playerName": "AM Salvi",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 7.81
  },
  {
    "id": "Harmeet-Singh-2009",
    "playerName": "Harmeet Singh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8.37
  },
  {
    "id": "Kamran-Khan-2010",
    "playerName": "Kamran Khan",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8.37
  },
  {
    "id": "AG-Murtaza-2010",
    "playerName": "AG Murtaza",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 7.64
  },
  {
    "id": "JD-Unadkat-2010",
    "playerName": "JD Unadkat",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8.23
  },
  {
    "id": "TG-Southee-2011",
    "playerName": "TG Southee",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8.42
  },
  {
    "id": "RE-van-der-Merwe-2012",
    "playerName": "RE van der Merwe",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 5.9
  },
  {
    "id": "AB-Agarkar-2012",
    "playerName": "AB Agarkar",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8.93
  },
  {
    "id": "JO-Holder-2013",
    "playerName": "JO Holder",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 8.3
  },
  {
    "id": "M-Muralitharan-2014",
    "playerName": "M Muralitharan",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 4,
    "economy": 7.58
  },
  {
    "id": "R-Tewatia-2025",
    "playerName": "R Tewatia",
    "season": 2025,
    "role": "FINISHER",
    "runs": 99,
    "strikeRate": 157.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Bhatia-2010",
    "playerName": "R Bhatia",
    "season": 2010,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 141.2,
    "wickets": 3,
    "economy": 8.33
  },
  {
    "id": "V-Sehwag-2015",
    "playerName": "V Sehwag",
    "season": 2015,
    "role": "FINISHER",
    "runs": 99,
    "strikeRate": 111.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Yuvraj-Singh-2019",
    "playerName": "Yuvraj Singh",
    "season": 2019,
    "role": "FINISHER",
    "runs": 98,
    "strikeRate": 118.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SE-Rutherford-2019",
    "playerName": "SE Rutherford",
    "season": 2019,
    "role": "FINISHER",
    "runs": 73,
    "strikeRate": 132.7,
    "wickets": 1,
    "economy": 7.83
  },
  {
    "id": "Gurkeerat-Singh-2019",
    "playerName": "Gurkeerat Singh",
    "season": 2019,
    "role": "FINISHER",
    "runs": 98,
    "strikeRate": 134.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AS-Roy-2023",
    "playerName": "AS Roy",
    "season": 2023,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 121.1,
    "wickets": 3,
    "economy": 7.65
  },
  {
    "id": "HR-Shokeen-2023",
    "playerName": "HR Shokeen",
    "season": 2023,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 121.1,
    "wickets": 3,
    "economy": 9.58
  },
  {
    "id": "Anuj-Rawat-2024",
    "playerName": "Anuj Rawat",
    "season": 2024,
    "role": "FINISHER",
    "runs": 98,
    "strikeRate": 122.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Asnodkar-2009",
    "playerName": "SA Asnodkar",
    "season": 2009,
    "role": "FINISHER",
    "runs": 98,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Miller-2012",
    "playerName": "DA Miller",
    "season": 2012,
    "role": "FINISHER",
    "runs": 98,
    "strikeRate": 128.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JO-Holder-2016",
    "playerName": "JO Holder",
    "season": 2016,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 110,
    "wickets": 3,
    "economy": 7.59
  },
  {
    "id": "TU-Deshpande-2020",
    "playerName": "TU Deshpande",
    "season": 2020,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 175,
    "wickets": 3,
    "economy": 10.53
  },
  {
    "id": "HV-Patel-2020",
    "playerName": "HV Patel",
    "season": 2020,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 84,
    "wickets": 3,
    "economy": 8.27
  },
  {
    "id": "SM-Katich-2008",
    "playerName": "SM Katich",
    "season": 2008,
    "role": "FINISHER",
    "runs": 96,
    "strikeRate": 133.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "STR-Binny-2019",
    "playerName": "STR Binny",
    "season": 2019,
    "role": "FINISHER",
    "runs": 70,
    "strikeRate": 166.7,
    "wickets": 1,
    "economy": 6.14
  },
  {
    "id": "MA-Agarwal-2025",
    "playerName": "MA Agarwal",
    "season": 2025,
    "role": "FINISHER",
    "runs": 95,
    "strikeRate": 146.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-de-Villiers-2008",
    "playerName": "AB de Villiers",
    "season": 2008,
    "role": "FINISHER",
    "runs": 95,
    "strikeRate": 95,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DW-Steyn-2015",
    "playerName": "DW Steyn",
    "season": 2015,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 153.8,
    "wickets": 3,
    "economy": 8.84
  },
  {
    "id": "R-Tewatia-2017",
    "playerName": "R Tewatia",
    "season": 2017,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 172.7,
    "wickets": 3,
    "economy": 5.56
  },
  {
    "id": "DJ-Hussey-2010",
    "playerName": "DJ Hussey",
    "season": 2010,
    "role": "FINISHER",
    "runs": 94,
    "strikeRate": 105.6,
    "wickets": 0,
    "economy": 8.1
  },
  {
    "id": "P-Sahu-2016",
    "playerName": "P Sahu",
    "season": 2016,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 146.2,
    "wickets": 3,
    "economy": 8.52
  },
  {
    "id": "HR-Shokeen-2022",
    "playerName": "HR Shokeen",
    "season": 2022,
    "role": "FINISHER",
    "runs": 43,
    "strikeRate": 89.6,
    "wickets": 2,
    "economy": 8.3
  },
  {
    "id": "PN-Mankad-2023",
    "playerName": "PN Mankad",
    "season": 2023,
    "role": "FINISHER",
    "runs": 93,
    "strikeRate": 125.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JJ-van-der-Wath-2011",
    "playerName": "JJ van der Wath",
    "season": 2011,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 105.9,
    "wickets": 3,
    "economy": 10.58
  },
  {
    "id": "R-Shukla-2014",
    "playerName": "R Shukla",
    "season": 2014,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 85.7,
    "wickets": 3,
    "economy": 10.86
  },
  {
    "id": "SE-Marsh-2015",
    "playerName": "SE Marsh",
    "season": 2015,
    "role": "FINISHER",
    "runs": 93,
    "strikeRate": 143.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Pandey-2025",
    "playerName": "MK Pandey",
    "season": 2025,
    "role": "FINISHER",
    "runs": 92,
    "strikeRate": 137.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DJ-Jacobs-2011",
    "playerName": "DJ Jacobs",
    "season": 2011,
    "role": "FINISHER",
    "runs": 92,
    "strikeRate": 101.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CA-Pujara-2013",
    "playerName": "CA Pujara",
    "season": 2013,
    "role": "FINISHER",
    "runs": 92,
    "strikeRate": 92,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AT-Rayudu-2017",
    "playerName": "AT Rayudu",
    "season": 2017,
    "role": "FINISHER",
    "runs": 91,
    "strikeRate": 113.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SN-Khan-2022",
    "playerName": "SN Khan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 91,
    "strikeRate": 131.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Anuj-Rawat-2023",
    "playerName": "Anuj Rawat",
    "season": 2023,
    "role": "FINISHER",
    "runs": 91,
    "strikeRate": 126.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PA-Reddy-2013",
    "playerName": "PA Reddy",
    "season": 2013,
    "role": "FINISHER",
    "runs": 91,
    "strikeRate": 87.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Tewatia-2014",
    "playerName": "R Tewatia",
    "season": 2014,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 123.1,
    "wickets": 3,
    "economy": 6.44
  },
  {
    "id": "JA-Morkel-2016",
    "playerName": "JA Morkel",
    "season": 2016,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 177.8,
    "wickets": 3,
    "economy": 11.65
  },
  {
    "id": "SO-Hetmyer-2019",
    "playerName": "SO Hetmyer",
    "season": 2019,
    "role": "FINISHER",
    "runs": 90,
    "strikeRate": 118.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JA-Richardson-2021",
    "playerName": "JA Richardson",
    "season": 2021,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 60,
    "wickets": 3,
    "economy": 10.61
  },
  {
    "id": "DJ-Hooda-2019",
    "playerName": "DJ Hooda",
    "season": 2019,
    "role": "FINISHER",
    "runs": 64,
    "strikeRate": 94.1,
    "wickets": 1,
    "economy": 9.69
  },
  {
    "id": "N-Jagadeesan-2023",
    "playerName": "N Jagadeesan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 89,
    "strikeRate": 106,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MJ-Santner-2024",
    "playerName": "MJ Santner",
    "season": 2024,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 77.8,
    "wickets": 3,
    "economy": 7.11
  },
  {
    "id": "DJ-Hussey-2011",
    "playerName": "DJ Hussey",
    "season": 2011,
    "role": "FINISHER",
    "runs": 64,
    "strikeRate": 98.5,
    "wickets": 1,
    "economy": 12.67
  },
  {
    "id": "JP-Faulkner-2012",
    "playerName": "JP Faulkner",
    "season": 2012,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 100,
    "wickets": 3,
    "economy": 9.06
  },
  {
    "id": "MK-Pandey-2022",
    "playerName": "MK Pandey",
    "season": 2022,
    "role": "FINISHER",
    "runs": 88,
    "strikeRate": 104.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MC-Henriques-2009",
    "playerName": "MC Henriques",
    "season": 2009,
    "role": "FINISHER",
    "runs": 38,
    "strikeRate": 95,
    "wickets": 2,
    "economy": 8.45
  },
  {
    "id": "LRPL-Taylor-2010",
    "playerName": "LRPL Taylor",
    "season": 2010,
    "role": "FINISHER",
    "runs": 88,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "STR-Binny-2016",
    "playerName": "STR Binny",
    "season": 2016,
    "role": "FINISHER",
    "runs": 63,
    "strikeRate": 153.7,
    "wickets": 1,
    "economy": 7.73
  },
  {
    "id": "SW-Billings-2016",
    "playerName": "SW Billings",
    "season": 2016,
    "role": "FINISHER",
    "runs": 88,
    "strikeRate": 133.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KC-Cariappa-2016",
    "playerName": "KC Cariappa",
    "season": 2016,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 118.2,
    "wickets": 3,
    "economy": 9.14
  },
  {
    "id": "DJ-Hooda-2018",
    "playerName": "DJ Hooda",
    "season": 2018,
    "role": "FINISHER",
    "runs": 87,
    "strikeRate": 101.2,
    "wickets": 0,
    "economy": 7.89
  },
  {
    "id": "R-Tewatia-2023",
    "playerName": "R Tewatia",
    "season": 2023,
    "role": "FINISHER",
    "runs": 87,
    "strikeRate": 142.6,
    "wickets": 0,
    "economy": 6.43
  },
  {
    "id": "DG-Nalkande-2024",
    "playerName": "DG Nalkande",
    "season": 2024,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 109.1,
    "wickets": 3,
    "economy": 8.9
  },
  {
    "id": "DAJ-Bracewell-2012",
    "playerName": "DAJ Bracewell",
    "season": 2012,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 133.3,
    "wickets": 3,
    "economy": 7.68
  },
  {
    "id": "AP-Majumdar-2012",
    "playerName": "AP Majumdar",
    "season": 2012,
    "role": "FINISHER",
    "runs": 87,
    "strikeRate": 113,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MJ-McClenaghan-2019",
    "playerName": "MJ McClenaghan",
    "season": 2019,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 68.8,
    "wickets": 3,
    "economy": 7.53
  },
  {
    "id": "WP-Saha-2019",
    "playerName": "WP Saha",
    "season": 2019,
    "role": "FINISHER",
    "runs": 86,
    "strikeRate": 156.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Parag-2020",
    "playerName": "R Parag",
    "season": 2020,
    "role": "FINISHER",
    "runs": 86,
    "strikeRate": 106.2,
    "wickets": 0,
    "economy": 12.46
  },
  {
    "id": "CJ-Jordan-2022",
    "playerName": "CJ Jordan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 122.2,
    "wickets": 3,
    "economy": 10.2
  },
  {
    "id": "AJ-Finch-2022",
    "playerName": "AJ Finch",
    "season": 2022,
    "role": "FINISHER",
    "runs": 86,
    "strikeRate": 122.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Lomror-2022",
    "playerName": "MK Lomror",
    "season": 2022,
    "role": "FINISHER",
    "runs": 86,
    "strikeRate": 143.3,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "MR-Marsh-2024",
    "playerName": "MR Marsh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 61,
    "strikeRate": 148.8,
    "wickets": 1,
    "economy": 11.44
  },
  {
    "id": "Gurkeerat-Singh-2012",
    "playerName": "Gurkeerat Singh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 86,
    "strikeRate": 159.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RN-ten-Doeschate-2015",
    "playerName": "RN ten Doeschate",
    "season": 2015,
    "role": "FINISHER",
    "runs": 61,
    "strikeRate": 135.6,
    "wickets": 1,
    "economy": 3.43
  },
  {
    "id": "G-Gambhir-2018",
    "playerName": "G Gambhir",
    "season": 2018,
    "role": "FINISHER",
    "runs": 85,
    "strikeRate": 93.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Pooran-2021",
    "playerName": "N Pooran",
    "season": 2021,
    "role": "FINISHER",
    "runs": 85,
    "strikeRate": 110.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammad-Nabi-2024",
    "playerName": "Mohammad Nabi",
    "season": 2024,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 112.9,
    "wickets": 2,
    "economy": 8.92
  },
  {
    "id": "JM-Bairstow-2025",
    "playerName": "JM Bairstow",
    "season": 2025,
    "role": "FINISHER",
    "runs": 85,
    "strikeRate": 173.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RN-ten-Doeschate-2013",
    "playerName": "RN ten Doeschate",
    "season": 2013,
    "role": "FINISHER",
    "runs": 85,
    "strikeRate": 134.9,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "P-Negi-2019",
    "playerName": "P Negi",
    "season": 2019,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 75,
    "wickets": 3,
    "economy": 8.83
  },
  {
    "id": "C-Munro-2019",
    "playerName": "C Munro",
    "season": 2019,
    "role": "FINISHER",
    "runs": 84,
    "strikeRate": 116.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammad-Nabi-2021",
    "playerName": "Mohammad Nabi",
    "season": 2021,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 154.5,
    "wickets": 2,
    "economy": 10.75
  },
  {
    "id": "DJ-Hooda-2023",
    "playerName": "DJ Hooda",
    "season": 2023,
    "role": "FINISHER",
    "runs": 84,
    "strikeRate": 90.3,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "SM-Harwood-2009",
    "playerName": "SM Harwood",
    "season": 2009,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 64.3,
    "wickets": 3,
    "economy": 6.63
  },
  {
    "id": "KW-Richardson-2013",
    "playerName": "KW Richardson",
    "season": 2013,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 94.4,
    "wickets": 2,
    "economy": 8.47
  },
  {
    "id": "GJ-Bailey-2016",
    "playerName": "GJ Bailey",
    "season": 2016,
    "role": "FINISHER",
    "runs": 84,
    "strikeRate": 84.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DA-Miller-2017",
    "playerName": "DA Miller",
    "season": 2017,
    "role": "FINISHER",
    "runs": 83,
    "strikeRate": 101.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sandeep-Sharma-2021",
    "playerName": "Sandeep Sharma",
    "season": 2021,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 114.3,
    "wickets": 3,
    "economy": 8.44
  },
  {
    "id": "V-Shankar-2024",
    "playerName": "V Shankar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 83,
    "strikeRate": 110.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Anirudha-2011",
    "playerName": "S Anirudha",
    "season": 2011,
    "role": "FINISHER",
    "runs": 83,
    "strikeRate": 106.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RE-Levi-2012",
    "playerName": "RE Levi",
    "season": 2012,
    "role": "FINISHER",
    "runs": 83,
    "strikeRate": 112.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TG-Southee-2017",
    "playerName": "TG Southee",
    "season": 2017,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 233.3,
    "wickets": 3,
    "economy": 8.82
  },
  {
    "id": "Mohammed-Shami-2018",
    "playerName": "Mohammed Shami",
    "season": 2018,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 3,
    "economy": 10.16
  },
  {
    "id": "MJ-Guptill-2019",
    "playerName": "MJ Guptill",
    "season": 2019,
    "role": "FINISHER",
    "runs": 82,
    "strikeRate": 151.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Goswami-2008",
    "playerName": "SP Goswami",
    "season": 2008,
    "role": "FINISHER",
    "runs": 82,
    "strikeRate": 95.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "J-Theron-2012",
    "playerName": "J Theron",
    "season": 2012,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 3,
    "economy": 7.76
  },
  {
    "id": "M-Vohra-2015",
    "playerName": "M Vohra",
    "season": 2015,
    "role": "FINISHER",
    "runs": 82,
    "strikeRate": 98.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ankit-Sharma-2015",
    "playerName": "Ankit Sharma",
    "season": 2015,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 3,
    "economy": 7.95
  },
  {
    "id": "CJ-Jordan-2023",
    "playerName": "CJ Jordan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 46.2,
    "wickets": 3,
    "economy": 10.33
  },
  {
    "id": "Akash-Deep-2025",
    "playerName": "Akash Deep",
    "season": 2025,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 300,
    "wickets": 3,
    "economy": 10.87
  },
  {
    "id": "BA-Bhatt-2012",
    "playerName": "BA Bhatt",
    "season": 2012,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 300,
    "wickets": 3,
    "economy": 8.58
  },
  {
    "id": "HH-Gibbs-2012",
    "playerName": "HH Gibbs",
    "season": 2012,
    "role": "FINISHER",
    "runs": 81,
    "strikeRate": 89,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AG-Murtaza-2013",
    "playerName": "AG Murtaza",
    "season": 2013,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 125,
    "wickets": 3,
    "economy": 9.29
  },
  {
    "id": "Shivam-Sharma-2014",
    "playerName": "Shivam Sharma",
    "season": 2014,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 166.7,
    "wickets": 3,
    "economy": 7.56
  },
  {
    "id": "MG-Johnson-2016",
    "playerName": "MG Johnson",
    "season": 2016,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 35.7,
    "wickets": 3,
    "economy": 9.39
  },
  {
    "id": "NV-Ojha-2017",
    "playerName": "NV Ojha",
    "season": 2017,
    "role": "FINISHER",
    "runs": 79,
    "strikeRate": 112.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "C-Sakariya-2023",
    "playerName": "C Sakariya",
    "season": 2023,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 66.7,
    "wickets": 3,
    "economy": 9.71
  },
  {
    "id": "A-Uniyal-2010",
    "playerName": "A Uniyal",
    "season": 2010,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 57.1,
    "wickets": 3,
    "economy": 10.58
  },
  {
    "id": "AN-Ahmed-2014",
    "playerName": "AN Ahmed",
    "season": 2014,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 400,
    "wickets": 3,
    "economy": 8.09
  },
  {
    "id": "JR-Philippe-2020",
    "playerName": "JR Philippe",
    "season": 2020,
    "role": "FINISHER",
    "runs": 78,
    "strikeRate": 97.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Parag-2023",
    "playerName": "R Parag",
    "season": 2023,
    "role": "FINISHER",
    "runs": 78,
    "strikeRate": 114.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AS-Raut-2009",
    "playerName": "AS Raut",
    "season": 2009,
    "role": "FINISHER",
    "runs": 78,
    "strikeRate": 120,
    "wickets": 0,
    "economy": 9.25
  },
  {
    "id": "MR-Marsh-2010",
    "playerName": "MR Marsh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 28,
    "strikeRate": 90.3,
    "wickets": 2,
    "economy": 8.34
  },
  {
    "id": "R-Ninan-2011",
    "playerName": "R Ninan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 50,
    "wickets": 3,
    "economy": 10.83
  },
  {
    "id": "GHS-Garton-2021",
    "playerName": "GHS Garton",
    "season": 2021,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 3,
    "economy": 8.41
  },
  {
    "id": "Navdeep-Saini-2022",
    "playerName": "Navdeep Saini",
    "season": 2022,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 3,
    "economy": 11.23
  },
  {
    "id": "PJ-Sangwan-2022",
    "playerName": "PJ Sangwan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 33.3,
    "wickets": 3,
    "economy": 7.07
  },
  {
    "id": "MJ-Santner-2023",
    "playerName": "MJ Santner",
    "season": 2023,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 3,
    "economy": 6.83
  },
  {
    "id": "T-Thushara-2009",
    "playerName": "T Thushara",
    "season": 2009,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 25,
    "wickets": 3,
    "economy": 7.32
  },
  {
    "id": "KP-Appanna-2010",
    "playerName": "KP Appanna",
    "season": 2010,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 3,
    "economy": 7.12
  },
  {
    "id": "TL-Suman-2013",
    "playerName": "TL Suman",
    "season": 2013,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 89.7,
    "wickets": 1,
    "economy": 8
  },
  {
    "id": "RN-ten-Doeschate-2014",
    "playerName": "RN ten Doeschate",
    "season": 2014,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 157.6,
    "wickets": 1,
    "economy": 7
  },
  {
    "id": "MEK-Hussey-2015",
    "playerName": "MEK Hussey",
    "season": 2015,
    "role": "FINISHER",
    "runs": 77,
    "strikeRate": 105.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DS-Kulkarni-2017",
    "playerName": "DS Kulkarni",
    "season": 2017,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 3,
    "economy": 8.8
  },
  {
    "id": "M-Ashwin-2018",
    "playerName": "M Ashwin",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 3,
    "economy": 7.2
  },
  {
    "id": "R-Tewatia-2019",
    "playerName": "R Tewatia",
    "season": 2019,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 118.2,
    "wickets": 2,
    "economy": 6.46
  },
  {
    "id": "Yudhvir-Singh-2023",
    "playerName": "Yudhvir Singh",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 3,
    "economy": 8.76
  },
  {
    "id": "Harpreet-Singh-2023",
    "playerName": "Harpreet Singh",
    "season": 2023,
    "role": "FINISHER",
    "runs": 76,
    "strikeRate": 128.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JR-Hazlewood-2023",
    "playerName": "JR Hazlewood",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 3,
    "economy": 8
  },
  {
    "id": "K-Goel-2008",
    "playerName": "K Goel",
    "season": 2008,
    "role": "FINISHER",
    "runs": 76,
    "strikeRate": 96.2,
    "wickets": 0,
    "economy": 12.5
  },
  {
    "id": "KM-Jadhav-2010",
    "playerName": "KM Jadhav",
    "season": 2010,
    "role": "FINISHER",
    "runs": 76,
    "strikeRate": 126.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "UT-Yadav-2011",
    "playerName": "UT Yadav",
    "season": 2011,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 16.7,
    "wickets": 3,
    "economy": 9.13
  },
  {
    "id": "B-Kumar-2011",
    "playerName": "B Kumar",
    "season": 2011,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 3,
    "economy": 6.09
  },
  {
    "id": "TM-Dilshan-2013",
    "playerName": "TM Dilshan",
    "season": 2013,
    "role": "FINISHER",
    "runs": 76,
    "strikeRate": 78.4,
    "wickets": 0,
    "economy": 10
  },
  {
    "id": "S-Nadeem-2016",
    "playerName": "S Nadeem",
    "season": 2016,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 20,
    "wickets": 3,
    "economy": 8.37
  },
  {
    "id": "HV-Patel-2019",
    "playerName": "HV Patel",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 8.88
  },
  {
    "id": "Mujeeb-Ur-Rahman-2019",
    "playerName": "Mujeeb Ur Rahman",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.41
  },
  {
    "id": "AJ-Tye-2019",
    "playerName": "AJ Tye",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 10.2
  },
  {
    "id": "M-Jansen-2021",
    "playerName": "M Jansen",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 7.05
  },
  {
    "id": "KM-Asif-2023",
    "playerName": "KM Asif",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.16
  },
  {
    "id": "Mohsin-Khan-2023",
    "playerName": "Mohsin Khan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 10.41
  },
  {
    "id": "DW-Steyn-2009",
    "playerName": "DW Steyn",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 6.31
  },
  {
    "id": "M-Manhas-2009",
    "playerName": "M Manhas",
    "season": 2009,
    "role": "FINISHER",
    "runs": 75,
    "strikeRate": 115.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TR-Birt-2011",
    "playerName": "TR Birt",
    "season": 2011,
    "role": "FINISHER",
    "runs": 75,
    "strikeRate": 127.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DB-Das-2013",
    "playerName": "DB Das",
    "season": 2013,
    "role": "FINISHER",
    "runs": 75,
    "strikeRate": 98.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HV-Patel-2017",
    "playerName": "HV Patel",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 10.32
  },
  {
    "id": "KM-Asif-2018",
    "playerName": "KM Asif",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 11.84
  },
  {
    "id": "AS-Rajpoot-2019",
    "playerName": "AS Rajpoot",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.24
  },
  {
    "id": "S-Nadeem-2019",
    "playerName": "S Nadeem",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 10.11
  },
  {
    "id": "Arshdeep-Singh-2019",
    "playerName": "Arshdeep Singh",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 10.8
  },
  {
    "id": "A-Mishra-2020",
    "playerName": "A Mishra",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 7.08
  },
  {
    "id": "Imran-Tahir-2021",
    "playerName": "Imran Tahir",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 3.69
  },
  {
    "id": "Sandeep-Sharma-2022",
    "playerName": "Sandeep Sharma",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 7.43
  },
  {
    "id": "AJ-Tye-2022",
    "playerName": "AJ Tye",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.83
  },
  {
    "id": "C-Sakariya-2022",
    "playerName": "C Sakariya",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 7.35
  },
  {
    "id": "RS-Hangargekar-2023",
    "playerName": "RS Hangargekar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 8.37
  },
  {
    "id": "Navdeep-Saini-2023",
    "playerName": "Navdeep Saini",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.6
  },
  {
    "id": "S-Gopal-2024",
    "playerName": "S Gopal",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.57
  },
  {
    "id": "Gagandeep-Singh-2008",
    "playerName": "Gagandeep Singh",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 10.14
  },
  {
    "id": "CK-Langeveldt-2009",
    "playerName": "CK Langeveldt",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 3.6
  },
  {
    "id": "Harmeet-Singh-2011",
    "playerName": "Harmeet Singh",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 7.23
  },
  {
    "id": "AM-Salvi-2011",
    "playerName": "AM Salvi",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 8.04
  },
  {
    "id": "M-de-Lange-2012",
    "playerName": "M de Lange",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 10.13
  },
  {
    "id": "Anand-Rajan-2012",
    "playerName": "Anand Rajan",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 8.92
  },
  {
    "id": "VY-Mahesh-2012",
    "playerName": "VY Mahesh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 8.16
  },
  {
    "id": "MM-Patel-2013",
    "playerName": "MM Patel",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.1
  },
  {
    "id": "JJ-Bumrah-2013",
    "playerName": "JJ Bumrah",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.87
  },
  {
    "id": "M-Muralitharan-2013",
    "playerName": "M Muralitharan",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 8.17
  },
  {
    "id": "AN-Ahmed-2013",
    "playerName": "AN Ahmed",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 6.43
  },
  {
    "id": "I-Sharma-2014",
    "playerName": "I Sharma",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 8.91
  },
  {
    "id": "K-Santokie-2014",
    "playerName": "K Santokie",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 10.71
  },
  {
    "id": "JJ-Bumrah-2015",
    "playerName": "JJ Bumrah",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 11.27
  },
  {
    "id": "RP-Singh-2016",
    "playerName": "RP Singh",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9
  },
  {
    "id": "I-Sharma-2016",
    "playerName": "I Sharma",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.34
  },
  {
    "id": "T-Shamsi-2016",
    "playerName": "T Shamsi",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 9.44
  },
  {
    "id": "SM-Boland-2016",
    "playerName": "SM Boland",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 7.81
  },
  {
    "id": "AS-Rajpoot-2016",
    "playerName": "AS Rajpoot",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 3,
    "economy": 8.42
  },
  {
    "id": "DA-Miller-2018",
    "playerName": "DA Miller",
    "season": 2018,
    "role": "FINISHER",
    "runs": 74,
    "strikeRate": 112.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Rahmanullah-Gurbaz-2025",
    "playerName": "Rahmanullah Gurbaz",
    "season": 2025,
    "role": "FINISHER",
    "runs": 74,
    "strikeRate": 134.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Khote-2008",
    "playerName": "MA Khote",
    "season": 2008,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 109.1,
    "wickets": 2,
    "economy": 10.4
  },
  {
    "id": "R-Sathish-2016",
    "playerName": "R Sathish",
    "season": 2016,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 9.32
  },
  {
    "id": "E-Lewis-2022",
    "playerName": "E Lewis",
    "season": 2022,
    "role": "FINISHER",
    "runs": 73,
    "strikeRate": 121.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Sarwan-2008",
    "playerName": "RR Sarwan",
    "season": 2008,
    "role": "FINISHER",
    "runs": 73,
    "strikeRate": 93.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Klinger-2011",
    "playerName": "M Klinger",
    "season": 2011,
    "role": "FINISHER",
    "runs": 73,
    "strikeRate": 93.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PA-Reddy-2012",
    "playerName": "PA Reddy",
    "season": 2012,
    "role": "FINISHER",
    "runs": 73,
    "strikeRate": 115.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Rana-2014",
    "playerName": "S Rana",
    "season": 2014,
    "role": "FINISHER",
    "runs": 73,
    "strikeRate": 110.6,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "KP-Pietersen-2016",
    "playerName": "KP Pietersen",
    "season": 2016,
    "role": "FINISHER",
    "runs": 73,
    "strikeRate": 119.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PK-Garg-2021",
    "playerName": "PK Garg",
    "season": 2021,
    "role": "FINISHER",
    "runs": 72,
    "strikeRate": 96,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AU-Rashid-2023",
    "playerName": "AU Rashid",
    "season": 2023,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 129.4,
    "wickets": 2,
    "economy": 8
  },
  {
    "id": "C-Bosch-2025",
    "playerName": "C Bosch",
    "season": 2025,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 146.9,
    "wickets": 1,
    "economy": 7.47
  },
  {
    "id": "WP-Saha-2009",
    "playerName": "WP Saha",
    "season": 2009,
    "role": "FINISHER",
    "runs": 72,
    "strikeRate": 175.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PA-Patel-2010",
    "playerName": "PA Patel",
    "season": 2010,
    "role": "FINISHER",
    "runs": 72,
    "strikeRate": 86.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Bisla-2011",
    "playerName": "MS Bisla",
    "season": 2011,
    "role": "FINISHER",
    "runs": 72,
    "strikeRate": 80,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Bipul-Sharma-2012",
    "playerName": "Bipul Sharma",
    "season": 2012,
    "role": "FINISHER",
    "runs": 72,
    "strikeRate": 153.2,
    "wickets": 0,
    "economy": 10.25
  },
  {
    "id": "AD-Russell-2012",
    "playerName": "AD Russell",
    "season": 2012,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 174.1,
    "wickets": 1,
    "economy": 9.92
  },
  {
    "id": "A-Ashish-Reddy-2016",
    "playerName": "A Ashish Reddy",
    "season": 2016,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 156.7,
    "wickets": 1,
    "economy": 10.43
  },
  {
    "id": "Gurkeerat-Singh-2020",
    "playerName": "Gurkeerat Singh",
    "season": 2020,
    "role": "FINISHER",
    "runs": 71,
    "strikeRate": 85.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RM-Patidar-2021",
    "playerName": "RM Patidar",
    "season": 2021,
    "role": "FINISHER",
    "runs": 71,
    "strikeRate": 109.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PBB-Rajapaksa-2023",
    "playerName": "PBB Rajapaksa",
    "season": 2023,
    "role": "FINISHER",
    "runs": 71,
    "strikeRate": 110.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SK-Rasheed-2025",
    "playerName": "SK Rasheed",
    "season": 2025,
    "role": "FINISHER",
    "runs": 71,
    "strikeRate": 106,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Dhawan-2013",
    "playerName": "R Dhawan",
    "season": 2013,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 7.26
  },
  {
    "id": "Y-Venugopal-Rao-2014",
    "playerName": "Y Venugopal Rao",
    "season": 2014,
    "role": "FINISHER",
    "runs": 71,
    "strikeRate": 109.2,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "LS-Livingstone-2019",
    "playerName": "LS Livingstone",
    "season": 2019,
    "role": "FINISHER",
    "runs": 70,
    "strikeRate": 145.8,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "YV-Takawale-2008",
    "playerName": "YV Takawale",
    "season": 2008,
    "role": "FINISHER",
    "runs": 70,
    "strikeRate": 101.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Joginder-Sharma-2009",
    "playerName": "Joginder Sharma",
    "season": 2009,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 111.1,
    "wickets": 2,
    "economy": 7.95
  },
  {
    "id": "Y-Nagar-2009",
    "playerName": "Y Nagar",
    "season": 2009,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 90.9,
    "wickets": 2,
    "economy": 9.23
  },
  {
    "id": "WP-Saha-2013",
    "playerName": "WP Saha",
    "season": 2013,
    "role": "FINISHER",
    "runs": 70,
    "strikeRate": 122.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SE-Marsh-2014",
    "playerName": "SE Marsh",
    "season": 2014,
    "role": "FINISHER",
    "runs": 70,
    "strikeRate": 129.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JDS-Neesham-2020",
    "playerName": "JDS Neesham",
    "season": 2020,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 105.6,
    "wickets": 2,
    "economy": 9.61
  },
  {
    "id": "Shashank-Singh-2022",
    "playerName": "Shashank Singh",
    "season": 2022,
    "role": "FINISHER",
    "runs": 69,
    "strikeRate": 146.8,
    "wickets": 0,
    "economy": 9.23
  },
  {
    "id": "Vivrant-Sharma-2023",
    "playerName": "Vivrant Sharma",
    "season": 2023,
    "role": "FINISHER",
    "runs": 69,
    "strikeRate": 140.8,
    "wickets": 0,
    "economy": 10.57
  },
  {
    "id": "D-Brevis-2024",
    "playerName": "D Brevis",
    "season": 2024,
    "role": "FINISHER",
    "runs": 69,
    "strikeRate": 115,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Goswami-2012",
    "playerName": "SP Goswami",
    "season": 2012,
    "role": "FINISHER",
    "runs": 69,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Jansen-2024",
    "playerName": "M Jansen",
    "season": 2024,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 120,
    "wickets": 2,
    "economy": 11.82
  },
  {
    "id": "Urvil-Patel-2025",
    "playerName": "Urvil Patel",
    "season": 2025,
    "role": "FINISHER",
    "runs": 68,
    "strikeRate": 200,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SD-Chitnis-2008",
    "playerName": "SD Chitnis",
    "season": 2008,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 180,
    "wickets": 2,
    "economy": 9.79
  },
  {
    "id": "WP-Saha-2011",
    "playerName": "WP Saha",
    "season": 2011,
    "role": "FINISHER",
    "runs": 68,
    "strikeRate": 101.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MP-Stoinis-2017",
    "playerName": "MP Stoinis",
    "season": 2017,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 68,
    "wickets": 2,
    "economy": 9.65
  },
  {
    "id": "K-Gowtham-2020",
    "playerName": "K Gowtham",
    "season": 2020,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 155.6,
    "wickets": 1,
    "economy": 10.5
  },
  {
    "id": "SS-Prabhudessai-2022",
    "playerName": "SS Prabhudessai",
    "season": 2022,
    "role": "FINISHER",
    "runs": 67,
    "strikeRate": 108.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shahbaz-Ahmed-2023",
    "playerName": "Shahbaz Ahmed",
    "season": 2023,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 102.4,
    "wickets": 1,
    "economy": 13.57
  },
  {
    "id": "JG-Bethell-2025",
    "playerName": "JG Bethell",
    "season": 2025,
    "role": "FINISHER",
    "runs": 67,
    "strikeRate": 171.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "G-Coetzee-2025",
    "playerName": "G Coetzee",
    "season": 2025,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 154.5,
    "wickets": 2,
    "economy": 10.5
  },
  {
    "id": "AA-Bilakhia-2009",
    "playerName": "AA Bilakhia",
    "season": 2009,
    "role": "FINISHER",
    "runs": 67,
    "strikeRate": 79.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WP-Saha-2010",
    "playerName": "WP Saha",
    "season": 2010,
    "role": "FINISHER",
    "runs": 67,
    "strikeRate": 126.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MD-Mishra-2011",
    "playerName": "MD Mishra",
    "season": 2011,
    "role": "FINISHER",
    "runs": 67,
    "strikeRate": 111.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Agarwal-2013",
    "playerName": "MA Agarwal",
    "season": 2013,
    "role": "FINISHER",
    "runs": 67,
    "strikeRate": 104.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JDS-Neesham-2014",
    "playerName": "JDS Neesham",
    "season": 2014,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 91.3,
    "wickets": 1,
    "economy": 10.11
  },
  {
    "id": "R-Bhatia-2017",
    "playerName": "R Bhatia",
    "season": 2017,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 94.1,
    "wickets": 2,
    "economy": 7.67
  },
  {
    "id": "MG-Johnson-2018",
    "playerName": "MG Johnson",
    "season": 2018,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 145.5,
    "wickets": 2,
    "economy": 9.83
  },
  {
    "id": "SD-Chitnis-2012",
    "playerName": "SD Chitnis",
    "season": 2012,
    "role": "FINISHER",
    "runs": 66,
    "strikeRate": 103.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SN-Khan-2016",
    "playerName": "SN Khan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 66,
    "strikeRate": 212.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "EJG-Morgan-2017",
    "playerName": "EJG Morgan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 65,
    "strikeRate": 104.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Yuvraj-Singh-2018",
    "playerName": "Yuvraj Singh",
    "season": 2018,
    "role": "FINISHER",
    "runs": 65,
    "strikeRate": 87.8,
    "wickets": 0,
    "economy": 10.62
  },
  {
    "id": "DB-Ravi-Teja-2009",
    "playerName": "DB Ravi Teja",
    "season": 2009,
    "role": "FINISHER",
    "runs": 65,
    "strikeRate": 91.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TL-Suman-2011",
    "playerName": "TL Suman",
    "season": 2011,
    "role": "FINISHER",
    "runs": 65,
    "strikeRate": 122.6,
    "wickets": 0,
    "economy": 8.33
  },
  {
    "id": "M-Vijay-2019",
    "playerName": "M Vijay",
    "season": 2019,
    "role": "FINISHER",
    "runs": 64,
    "strikeRate": 104.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GD-Phillips-2023",
    "playerName": "GD Phillips",
    "season": 2023,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 177.3,
    "wickets": 1,
    "economy": 6.67
  },
  {
    "id": "MA-Agarwal-2024",
    "playerName": "MA Agarwal",
    "season": 2024,
    "role": "FINISHER",
    "runs": 64,
    "strikeRate": 108.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "VVS-Laxman-2010",
    "playerName": "VVS Laxman",
    "season": 2010,
    "role": "FINISHER",
    "runs": 64,
    "strikeRate": 103.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Dhawan-2016",
    "playerName": "R Dhawan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 233.3,
    "wickets": 2,
    "economy": 7.47
  },
  {
    "id": "C-Munro-2018",
    "playerName": "C Munro",
    "season": 2018,
    "role": "FINISHER",
    "runs": 63,
    "strikeRate": 153.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Abhishek-Sharma-2018",
    "playerName": "Abhishek Sharma",
    "season": 2018,
    "role": "FINISHER",
    "runs": 63,
    "strikeRate": 180,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Anirudh-Singh-2010",
    "playerName": "Anirudh Singh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 63,
    "strikeRate": 91.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LRPL-Taylor-2013",
    "playerName": "LRPL Taylor",
    "season": 2013,
    "role": "FINISHER",
    "runs": 63,
    "strikeRate": 81.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Rampaul-2014",
    "playerName": "R Rampaul",
    "season": 2014,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 6
  },
  {
    "id": "KJ-Abbott-2016",
    "playerName": "KJ Abbott",
    "season": 2016,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 162.5,
    "wickets": 2,
    "economy": 10.71
  },
  {
    "id": "KM-Jadhav-2020",
    "playerName": "KM Jadhav",
    "season": 2020,
    "role": "FINISHER",
    "runs": 62,
    "strikeRate": 91.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Rahmanullah-Gurbaz-2024",
    "playerName": "Rahmanullah Gurbaz",
    "season": 2024,
    "role": "FINISHER",
    "runs": 62,
    "strikeRate": 124,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Kartik-2011",
    "playerName": "M Kartik",
    "season": 2011,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 80,
    "wickets": 2,
    "economy": 7.85
  },
  {
    "id": "AD-Nath-2019",
    "playerName": "AD Nath",
    "season": 2019,
    "role": "FINISHER",
    "runs": 61,
    "strikeRate": 105.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Atharva-Taide-2024",
    "playerName": "Atharva Taide",
    "season": 2024,
    "role": "FINISHER",
    "runs": 61,
    "strikeRate": 148.8,
    "wickets": 0,
    "economy": 24
  },
  {
    "id": "A-Manohar-2025",
    "playerName": "A Manohar",
    "season": 2025,
    "role": "FINISHER",
    "runs": 61,
    "strikeRate": 98.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "XC-Bartlett-2025",
    "playerName": "XC Bartlett",
    "season": 2025,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 73.3,
    "wickets": 2,
    "economy": 9.6
  },
  {
    "id": "DNT-Zoysa-2008",
    "playerName": "DNT Zoysa",
    "season": 2008,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 122.2,
    "wickets": 2,
    "economy": 8.7
  },
  {
    "id": "RR-Powar-2011",
    "playerName": "RR Powar",
    "season": 2011,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 84.6,
    "wickets": 2,
    "economy": 9.33
  },
  {
    "id": "Karanveer-Singh-2015",
    "playerName": "Karanveer Singh",
    "season": 2015,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 68.8,
    "wickets": 2,
    "economy": 10.97
  },
  {
    "id": "R-Dhawan-2015",
    "playerName": "R Dhawan",
    "season": 2015,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 109.1,
    "wickets": 1,
    "economy": 8.43
  },
  {
    "id": "KV-Sharma-2016",
    "playerName": "KV Sharma",
    "season": 2016,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 105.9,
    "wickets": 1,
    "economy": 10.44
  },
  {
    "id": "M-Vijay-2009",
    "playerName": "M Vijay",
    "season": 2009,
    "role": "FINISHER",
    "runs": 60,
    "strikeRate": 87,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AS-Raut-2011",
    "playerName": "AS Raut",
    "season": 2011,
    "role": "FINISHER",
    "runs": 60,
    "strikeRate": 101.7,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "AN-Ahmed-2015",
    "playerName": "AN Ahmed",
    "season": 2015,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 200,
    "wickets": 2,
    "economy": 10.18
  },
  {
    "id": "JJ-Roy-2017",
    "playerName": "JJ Roy",
    "season": 2017,
    "role": "FINISHER",
    "runs": 59,
    "strikeRate": 143.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shakib-Al-Hasan-2019",
    "playerName": "Shakib Al Hasan",
    "season": 2019,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 81.8,
    "wickets": 2,
    "economy": 8.64
  },
  {
    "id": "MK-Lomror-2020",
    "playerName": "MK Lomror",
    "season": 2020,
    "role": "FINISHER",
    "runs": 59,
    "strikeRate": 109.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AS-Rajpoot-2020",
    "playerName": "AS Rajpoot",
    "season": 2020,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 90,
    "wickets": 2,
    "economy": 10.75
  },
  {
    "id": "K-Rabada-2025",
    "playerName": "K Rabada",
    "season": 2025,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 11.18
  },
  {
    "id": "AD-Mascarenhas-2008",
    "playerName": "AD Mascarenhas",
    "season": 2008,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 112.5,
    "wickets": 2,
    "economy": 7.44
  },
  {
    "id": "LRPL-Taylor-2014",
    "playerName": "LRPL Taylor",
    "season": 2014,
    "role": "FINISHER",
    "runs": 59,
    "strikeRate": 95.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JPR-Scantlebury-Searles-2018",
    "playerName": "JPR Scantlebury-Searles",
    "season": 2018,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 133.3,
    "wickets": 2,
    "economy": 11.87
  },
  {
    "id": "D-Salunkhe-2008",
    "playerName": "D Salunkhe",
    "season": 2008,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 137.5,
    "wickets": 1,
    "economy": 9.41
  },
  {
    "id": "R-Ashwin-2009",
    "playerName": "R Ashwin",
    "season": 2009,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 53.3,
    "wickets": 2,
    "economy": 3.5
  },
  {
    "id": "AM-Nayar-2010",
    "playerName": "AM Nayar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 58,
    "strikeRate": 113.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LA-Pomersbach-2013",
    "playerName": "LA Pomersbach",
    "season": 2013,
    "role": "FINISHER",
    "runs": 58,
    "strikeRate": 96.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CA-Lynn-2014",
    "playerName": "CA Lynn",
    "season": 2014,
    "role": "FINISHER",
    "runs": 58,
    "strikeRate": 111.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BCJ-Cutting-2014",
    "playerName": "BCJ Cutting",
    "season": 2014,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 133.3,
    "wickets": 2,
    "economy": 7.75
  },
  {
    "id": "AB-Dinda-2017",
    "playerName": "AB Dinda",
    "season": 2017,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 87.5,
    "wickets": 2,
    "economy": 11.17
  },
  {
    "id": "H-Klaasen-2018",
    "playerName": "H Klaasen",
    "season": 2018,
    "role": "FINISHER",
    "runs": 57,
    "strikeRate": 118.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Tiwary-2015",
    "playerName": "MK Tiwary",
    "season": 2015,
    "role": "FINISHER",
    "runs": 57,
    "strikeRate": 98.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MJ-Guptill-2016",
    "playerName": "MJ Guptill",
    "season": 2016,
    "role": "FINISHER",
    "runs": 57,
    "strikeRate": 103.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Vinay-Kumar-2018",
    "playerName": "R Vinay Kumar",
    "season": 2018,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 150,
    "wickets": 2,
    "economy": 15.6
  },
  {
    "id": "J-Suchith-2019",
    "playerName": "J Suchith",
    "season": 2019,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 40,
    "wickets": 2,
    "economy": 7
  },
  {
    "id": "AJ-Tye-2020",
    "playerName": "AJ Tye",
    "season": 2020,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 85.7,
    "wickets": 2,
    "economy": 12
  },
  {
    "id": "AS-Raut-2010",
    "playerName": "AS Raut",
    "season": 2010,
    "role": "FINISHER",
    "runs": 56,
    "strikeRate": 116.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GJ-Maxwell-2012",
    "playerName": "GJ Maxwell",
    "season": 2012,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 54.5,
    "wickets": 2,
    "economy": 6.95
  },
  {
    "id": "LR-Shukla-2014",
    "playerName": "LR Shukla",
    "season": 2014,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 81.6,
    "wickets": 1,
    "economy": 9.1
  },
  {
    "id": "J-Botha-2015",
    "playerName": "J Botha",
    "season": 2015,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 206.7,
    "wickets": 1,
    "economy": 7.94
  },
  {
    "id": "J-Yadav-2016",
    "playerName": "J Yadav",
    "season": 2016,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 50,
    "wickets": 2,
    "economy": 7.21
  },
  {
    "id": "Iqbal-Abdulla-2017",
    "playerName": "Iqbal Abdulla",
    "season": 2017,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 71.4,
    "wickets": 2,
    "economy": 9.71
  },
  {
    "id": "M-Vohra-2018",
    "playerName": "M Vohra",
    "season": 2018,
    "role": "FINISHER",
    "runs": 55,
    "strikeRate": 110,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KM-Jadhav-2021",
    "playerName": "KM Jadhav",
    "season": 2021,
    "role": "FINISHER",
    "runs": 55,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Tripathi-2025",
    "playerName": "RA Tripathi",
    "season": 2025,
    "role": "FINISHER",
    "runs": 55,
    "strikeRate": 96.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "J-Fraser-McGurk-2025",
    "playerName": "J Fraser-McGurk",
    "season": 2025,
    "role": "FINISHER",
    "runs": 55,
    "strikeRate": 103.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Muralitharan-2011",
    "playerName": "M Muralitharan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 62.5,
    "wickets": 2,
    "economy": 7.44
  },
  {
    "id": "AJ-Finch-2012",
    "playerName": "AJ Finch",
    "season": 2012,
    "role": "FINISHER",
    "runs": 55,
    "strikeRate": 105.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JC-Archer-2023",
    "playerName": "JC Archer",
    "season": 2023,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 9.4
  },
  {
    "id": "TM-Head-2016",
    "playerName": "TM Head",
    "season": 2016,
    "role": "FINISHER",
    "runs": 54,
    "strikeRate": 128.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RD-Chahar-2017",
    "playerName": "RD Chahar",
    "season": 2017,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 150,
    "wickets": 2,
    "economy": 7.7
  },
  {
    "id": "Anureet-Singh-2018",
    "playerName": "Anureet Singh",
    "season": 2018,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 75,
    "wickets": 2,
    "economy": 10.5
  },
  {
    "id": "SN-Khan-2023",
    "playerName": "SN Khan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 53,
    "strikeRate": 85.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Simarjeet-Singh-2025",
    "playerName": "Simarjeet Singh",
    "season": 2025,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 42.9,
    "wickets": 2,
    "economy": 13.9
  },
  {
    "id": "K-Kartikeya-2025",
    "playerName": "K Kartikeya",
    "season": 2025,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 2,
    "economy": 9.55
  },
  {
    "id": "D-Kalyankrishna-2008",
    "playerName": "D Kalyankrishna",
    "season": 2008,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 37.5,
    "wickets": 2,
    "economy": 10.56
  },
  {
    "id": "PR-Shah-2009",
    "playerName": "PR Shah",
    "season": 2009,
    "role": "FINISHER",
    "runs": 53,
    "strikeRate": 98.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Goswami-2009",
    "playerName": "SP Goswami",
    "season": 2009,
    "role": "FINISHER",
    "runs": 53,
    "strikeRate": 82.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammad-Nabi-2017",
    "playerName": "Mohammad Nabi",
    "season": 2017,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 2,
    "economy": 5.36
  },
  {
    "id": "IK-Pathan-2017",
    "playerName": "IK Pathan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 2,
    "economy": 13
  },
  {
    "id": "SS-Tiwary-2017",
    "playerName": "SS Tiwary",
    "season": 2017,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 113,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Goswami-2018",
    "playerName": "SP Goswami",
    "season": 2018,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 123.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Fazalhaq-Farooqi-2022",
    "playerName": "Fazalhaq Farooqi",
    "season": 2022,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 25,
    "wickets": 2,
    "economy": 8.68
  },
  {
    "id": "A-Kamboj-2024",
    "playerName": "A Kamboj",
    "season": 2024,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 10.15
  },
  {
    "id": "RT-Ponting-2013",
    "playerName": "RT Ponting",
    "season": 2013,
    "role": "FINISHER",
    "runs": 52,
    "strikeRate": 68.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BAW-Mendis-2013",
    "playerName": "BAW Mendis",
    "season": 2013,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 2,
    "economy": 6.5
  },
  {
    "id": "AD-Russell-2014",
    "playerName": "AD Russell",
    "season": 2014,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 25,
    "wickets": 2,
    "economy": 10.45
  },
  {
    "id": "S-Kaul-2014",
    "playerName": "S Kaul",
    "season": 2014,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 9.95
  },
  {
    "id": "SN-Khan-2018",
    "playerName": "SN Khan",
    "season": 2018,
    "role": "FINISHER",
    "runs": 51,
    "strikeRate": 118.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shahbaz-Ahmed-2020",
    "playerName": "Shahbaz Ahmed",
    "season": 2020,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 7.3
  },
  {
    "id": "Mujeeb-Ur-Rahman-2021",
    "playerName": "Mujeeb Ur Rahman",
    "season": 2021,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 6.92
  },
  {
    "id": "GD-Phillips-2021",
    "playerName": "GD Phillips",
    "season": 2021,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 78.8,
    "wickets": 1,
    "economy": 9.23
  },
  {
    "id": "Sameer-Rizvi-2024",
    "playerName": "Sameer Rizvi",
    "season": 2024,
    "role": "FINISHER",
    "runs": 51,
    "strikeRate": 118.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KA-Maharaj-2024",
    "playerName": "KA Maharaj",
    "season": 2024,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 2,
    "economy": 6.5
  },
  {
    "id": "PVSN-Raju-2025",
    "playerName": "PVSN Raju",
    "season": 2025,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 11.17
  },
  {
    "id": "MM-Sharma-2025",
    "playerName": "MM Sharma",
    "season": 2025,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 2,
    "economy": 9.53
  },
  {
    "id": "WA-Mota-2008",
    "playerName": "WA Mota",
    "season": 2008,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 92.9,
    "wickets": 1,
    "economy": 10.8
  },
  {
    "id": "Pankaj-Singh-2009",
    "playerName": "Pankaj Singh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 2,
    "economy": 8.67
  },
  {
    "id": "RE-van-der-Merwe-2010",
    "playerName": "RE van der Merwe",
    "season": 2010,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 2,
    "economy": 6
  },
  {
    "id": "BAW-Mendis-2010",
    "playerName": "BAW Mendis",
    "season": 2010,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 2,
    "economy": 8.16
  },
  {
    "id": "Pankaj-Singh-2010",
    "playerName": "Pankaj Singh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 2,
    "economy": 9.76
  },
  {
    "id": "LA-Pomersbach-2011",
    "playerName": "LA Pomersbach",
    "season": 2011,
    "role": "FINISHER",
    "runs": 51,
    "strikeRate": 124.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-de-Lange-2014",
    "playerName": "M de Lange",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 2,
    "economy": 7.62
  },
  {
    "id": "SB-Jakati-2016",
    "playerName": "SB Jakati",
    "season": 2016,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 2,
    "economy": 8.83
  },
  {
    "id": "T-Stubbs-2023",
    "playerName": "T Stubbs",
    "season": 2023,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 80.6,
    "wickets": 1,
    "economy": 7
  },
  {
    "id": "AS-Roy-2025",
    "playerName": "AS Roy",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 6.48
  },
  {
    "id": "KP-Appanna-2009",
    "playerName": "KP Appanna",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.58
  },
  {
    "id": "C-Nanda-2009",
    "playerName": "C Nanda",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 6.96
  },
  {
    "id": "AP-Tare-2010",
    "playerName": "AP Tare",
    "season": 2010,
    "role": "FINISHER",
    "runs": 50,
    "strikeRate": 122,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Iqbal-Abdulla-2010",
    "playerName": "Iqbal Abdulla",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.29
  },
  {
    "id": "SC-Ganguly-2011",
    "playerName": "SC Ganguly",
    "season": 2011,
    "role": "FINISHER",
    "runs": 50,
    "strikeRate": 82,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "VR-Aaron-2011",
    "playerName": "VR Aaron",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 6.47
  },
  {
    "id": "CJ-Ferguson-2012",
    "playerName": "CJ Ferguson",
    "season": 2012,
    "role": "FINISHER",
    "runs": 50,
    "strikeRate": 79.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "T-Natarajan-2017",
    "playerName": "T Natarajan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 8.49
  },
  {
    "id": "B-Stanlake-2017",
    "playerName": "B Stanlake",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 8.4
  },
  {
    "id": "MJ-Henry-2017",
    "playerName": "MJ Henry",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 13.74
  },
  {
    "id": "R-Vinay-Kumar-2017",
    "playerName": "R Vinay Kumar",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 9.3
  },
  {
    "id": "K-Khejroliya-2018",
    "playerName": "K Khejroliya",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 9.43
  },
  {
    "id": "DJ-Willey-2018",
    "playerName": "DJ Willey",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 9.44
  },
  {
    "id": "LH-Ferguson-2019",
    "playerName": "LH Ferguson",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 10.37
  },
  {
    "id": "SC-Kuggeleijn-2019",
    "playerName": "SC Kuggeleijn",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 8.52
  },
  {
    "id": "S-Sandeep-Warrier-2019",
    "playerName": "S Sandeep Warrier",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.07
  },
  {
    "id": "A-Zampa-2020",
    "playerName": "A Zampa",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 8.24
  },
  {
    "id": "MJ-Santner-2020",
    "playerName": "MJ Santner",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.57
  },
  {
    "id": "S-Kaul-2020",
    "playerName": "S Kaul",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 14.77
  },
  {
    "id": "T-Natarajan-2021",
    "playerName": "T Natarajan",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 8.4
  },
  {
    "id": "Umran-Malik-2021",
    "playerName": "Umran Malik",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.68
  },
  {
    "id": "VR-Aaron-2022",
    "playerName": "VR Aaron",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 9.64
  },
  {
    "id": "DG-Nalkande-2022",
    "playerName": "DG Nalkande",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 10.73
  },
  {
    "id": "PH-Solanki-2022",
    "playerName": "PH Solanki",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 6.5
  },
  {
    "id": "M-Pathirana-2022",
    "playerName": "M Pathirana",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7
  },
  {
    "id": "Yash-Dayal-2023",
    "playerName": "Yash Dayal",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 11.25
  },
  {
    "id": "TG-Southee-2023",
    "playerName": "TG Southee",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 13.17
  },
  {
    "id": "K-Khejroliya-2023",
    "playerName": "K Khejroliya",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 13.71
  },
  {
    "id": "K-Yadav-2023",
    "playerName": "K Yadav",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 9.71
  },
  {
    "id": "M-Theekshana-2024",
    "playerName": "M Theekshana",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.24
  },
  {
    "id": "V-Kaverappa-2024",
    "playerName": "V Kaverappa",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 9
  },
  {
    "id": "A-Zampa-2025",
    "playerName": "A Zampa",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 11.28
  },
  {
    "id": "M-Siddharth-2025",
    "playerName": "M Siddharth",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 9.49
  },
  {
    "id": "MP-Yadav-2025",
    "playerName": "MP Yadav",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 11.32
  },
  {
    "id": "B-Geeves-2008",
    "playerName": "B Geeves",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 11.14
  },
  {
    "id": "DL-Vettori-2008",
    "playerName": "DL Vettori",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 6.75
  },
  {
    "id": "VS-Malik-2009",
    "playerName": "VS Malik",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 8.11
  },
  {
    "id": "Anureet-Singh-2009",
    "playerName": "Anureet Singh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 8.29
  },
  {
    "id": "Joginder-Sharma-2010",
    "playerName": "Joginder Sharma",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 10.47
  },
  {
    "id": "DP-Nannes-2011",
    "playerName": "DP Nannes",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.44
  },
  {
    "id": "Anand-Rajan-2013",
    "playerName": "Anand Rajan",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 5.06
  },
  {
    "id": "VS-Malik-2013",
    "playerName": "VS Malik",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 5.8
  },
  {
    "id": "NM-Coulter-Nile-2014",
    "playerName": "NM Coulter-Nile",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 6.23
  },
  {
    "id": "M-Kartik-2014",
    "playerName": "M Kartik",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 11.14
  },
  {
    "id": "S-Badree-2014",
    "playerName": "S Badree",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.1
  },
  {
    "id": "PJ-Cummins-2014",
    "playerName": "PJ Cummins",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 7.25
  },
  {
    "id": "R-Tewatia-2015",
    "playerName": "R Tewatia",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 10.33
  },
  {
    "id": "J-Yadav-2015",
    "playerName": "J Yadav",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 4.14
  },
  {
    "id": "JW-Hastings-2016",
    "playerName": "JW Hastings",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 5.29
  },
  {
    "id": "HV-Patel-2016",
    "playerName": "HV Patel",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 9.8
  },
  {
    "id": "VR-Aaron-2016",
    "playerName": "VR Aaron",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 2,
    "economy": 8.86
  },
  {
    "id": "CA-Lynn-2021",
    "playerName": "CA Lynn",
    "season": 2021,
    "role": "FINISHER",
    "runs": 49,
    "strikeRate": 136.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RV-Patel-2023",
    "playerName": "RV Patel",
    "season": 2023,
    "role": "FINISHER",
    "runs": 49,
    "strikeRate": 111.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AS-Yadav-2008",
    "playerName": "AS Yadav",
    "season": 2008,
    "role": "FINISHER",
    "runs": 49,
    "strikeRate": 122.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AG-Paunikar-2011",
    "playerName": "AG Paunikar",
    "season": 2011,
    "role": "FINISHER",
    "runs": 49,
    "strikeRate": 81.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AA-Jhunjhunwala-2012",
    "playerName": "AA Jhunjhunwala",
    "season": 2012,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 88.9,
    "wickets": 1,
    "economy": 6.5
  },
  {
    "id": "E-Lewis-2019",
    "playerName": "E Lewis",
    "season": 2019,
    "role": "FINISHER",
    "runs": 48,
    "strikeRate": 90.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "T-Kohler-Cadmore-2024",
    "playerName": "T Kohler-Cadmore",
    "season": 2024,
    "role": "FINISHER",
    "runs": 48,
    "strikeRate": 88.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CL-White-2010",
    "playerName": "CL White",
    "season": 2010,
    "role": "FINISHER",
    "runs": 48,
    "strikeRate": 145.5,
    "wickets": 0,
    "economy": 16.29
  },
  {
    "id": "CJ-Ferguson-2011",
    "playerName": "CJ Ferguson",
    "season": 2011,
    "role": "FINISHER",
    "runs": 48,
    "strikeRate": 85.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BMAJ-Mendis-2013",
    "playerName": "BMAJ Mendis",
    "season": 2013,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 85.2,
    "wickets": 1,
    "economy": 7.2
  },
  {
    "id": "MK-Tiwary-2018",
    "playerName": "MK Tiwary",
    "season": 2018,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 104.4,
    "wickets": 0,
    "economy": 8.57
  },
  {
    "id": "Ramandeep-Singh-2025",
    "playerName": "Ramandeep Singh",
    "season": 2025,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 130.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Yashpal-Singh-2009",
    "playerName": "Yashpal Singh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 70.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DR-Smith-2010",
    "playerName": "DR Smith",
    "season": 2010,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 88,
    "wickets": 1,
    "economy": 9.39
  },
  {
    "id": "AJ-Finch-2011",
    "playerName": "AJ Finch",
    "season": 2011,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 92.2,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "Mandeep-Singh-2011",
    "playerName": "Mandeep Singh",
    "season": 2011,
    "role": "FINISHER",
    "runs": 47,
    "strikeRate": 111.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "C-de-Grandhomme-2019",
    "playerName": "C de Grandhomme",
    "season": 2019,
    "role": "FINISHER",
    "runs": 46,
    "strikeRate": 92,
    "wickets": 0,
    "economy": 10.65
  },
  {
    "id": "PK-Garg-2022",
    "playerName": "PK Garg",
    "season": 2022,
    "role": "FINISHER",
    "runs": 46,
    "strikeRate": 139.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Yudhvir-Singh-2024",
    "playerName": "Yudhvir Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 150,
    "wickets": 1,
    "economy": 13
  },
  {
    "id": "RN-ten-Doeschate-2012",
    "playerName": "RN ten Doeschate",
    "season": 2012,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 6.86
  },
  {
    "id": "R-Dhawan-2023",
    "playerName": "R Dhawan",
    "season": 2023,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 166.7,
    "wickets": 1,
    "economy": 9.14
  },
  {
    "id": "GJ-Bailey-2009",
    "playerName": "GJ Bailey",
    "season": 2009,
    "role": "FINISHER",
    "runs": 45,
    "strikeRate": 112.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Nayar-2012",
    "playerName": "AM Nayar",
    "season": 2012,
    "role": "FINISHER",
    "runs": 45,
    "strikeRate": 91.8,
    "wickets": 0,
    "economy": 16
  },
  {
    "id": "STR-Binny-2018",
    "playerName": "STR Binny",
    "season": 2018,
    "role": "FINISHER",
    "runs": 44,
    "strikeRate": 112.8,
    "wickets": 0,
    "economy": 14.14
  },
  {
    "id": "V-Shankar-2022",
    "playerName": "V Shankar",
    "season": 2022,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 52.8,
    "wickets": 1,
    "economy": 9
  },
  {
    "id": "UT-Yadav-2023",
    "playerName": "UT Yadav",
    "season": 2023,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 95,
    "wickets": 1,
    "economy": 9.83
  },
  {
    "id": "GC-Smith-2010",
    "playerName": "GC Smith",
    "season": 2010,
    "role": "FINISHER",
    "runs": 44,
    "strikeRate": 110,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "VVS-Laxman-2011",
    "playerName": "VVS Laxman",
    "season": 2011,
    "role": "FINISHER",
    "runs": 44,
    "strikeRate": 104.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CM-Gautam-2013",
    "playerName": "CM Gautam",
    "season": 2013,
    "role": "FINISHER",
    "runs": 44,
    "strikeRate": 118.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammad-Nabi-2018",
    "playerName": "Mohammad Nabi",
    "season": 2018,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 150,
    "wickets": 1,
    "economy": 9.4
  },
  {
    "id": "BCJ-Cutting-2019",
    "playerName": "BCJ Cutting",
    "season": 2019,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 105.9,
    "wickets": 1,
    "economy": 13.5
  },
  {
    "id": "K-Gowtham-2019",
    "playerName": "K Gowtham",
    "season": 2019,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 94.7,
    "wickets": 1,
    "economy": 8.41
  },
  {
    "id": "NT-Ellis-2021",
    "playerName": "NT Ellis",
    "season": 2021,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 105.9,
    "wickets": 1,
    "economy": 8.03
  },
  {
    "id": "DJ-Willey-2022",
    "playerName": "DJ Willey",
    "season": 2022,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 56.3,
    "wickets": 1,
    "economy": 6.82
  },
  {
    "id": "Sikandar-Raza-2024",
    "playerName": "Sikandar Raza",
    "season": 2024,
    "role": "FINISHER",
    "runs": 43,
    "strikeRate": 110.3,
    "wickets": 0,
    "economy": 11
  },
  {
    "id": "Sunny-Singh-2011",
    "playerName": "Sunny Singh",
    "season": 2011,
    "role": "FINISHER",
    "runs": 43,
    "strikeRate": 138.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Nayar-2014",
    "playerName": "AM Nayar",
    "season": 2014,
    "role": "FINISHER",
    "runs": 43,
    "strikeRate": 86,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Vohra-2021",
    "playerName": "M Vohra",
    "season": 2021,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 105,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LS-Livingstone-2021",
    "playerName": "LS Livingstone",
    "season": 2021,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 97.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Akash-Deep-2023",
    "playerName": "Akash Deep",
    "season": 2023,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 212.5,
    "wickets": 1,
    "economy": 11.45
  },
  {
    "id": "N-Rana-2024",
    "playerName": "N Rana",
    "season": 2024,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 120,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Pandey-2024",
    "playerName": "MK Pandey",
    "season": 2024,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 127.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Chopra-2008",
    "playerName": "A Chopra",
    "season": 2008,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 76.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-Barath-2010",
    "playerName": "AB Barath",
    "season": 2010,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 97.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GC-Smith-2011",
    "playerName": "GC Smith",
    "season": 2011,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 77.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Ishan-Kishan-2016",
    "playerName": "Ishan Kishan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 102.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KM-Jadhav-2016",
    "playerName": "KM Jadhav",
    "season": 2016,
    "role": "FINISHER",
    "runs": 42,
    "strikeRate": 127.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AJ-Hosein-2023",
    "playerName": "AJ Hosein",
    "season": 2023,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 145.5,
    "wickets": 1,
    "economy": 10.25
  },
  {
    "id": "P-Dubey-2023",
    "playerName": "P Dubey",
    "season": 2023,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 80,
    "wickets": 1,
    "economy": 6
  },
  {
    "id": "LA-Pomersbach-2009",
    "playerName": "LA Pomersbach",
    "season": 2009,
    "role": "FINISHER",
    "runs": 41,
    "strikeRate": 83.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Kaif-2011",
    "playerName": "M Kaif",
    "season": 2011,
    "role": "FINISHER",
    "runs": 41,
    "strikeRate": 117.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KB-Arun-Karthik-2013",
    "playerName": "KB Arun Karthik",
    "season": 2013,
    "role": "FINISHER",
    "runs": 41,
    "strikeRate": 102.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JO-Holder-2014",
    "playerName": "JO Holder",
    "season": 2014,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 133.3,
    "wickets": 1,
    "economy": 10.5
  },
  {
    "id": "S-Dube-2019",
    "playerName": "S Dube",
    "season": 2019,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 121.2,
    "wickets": 0,
    "economy": 4.36
  },
  {
    "id": "YK-Pathan-2019",
    "playerName": "YK Pathan",
    "season": 2019,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 85.1,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "YBK-Jaiswal-2020",
    "playerName": "YBK Jaiswal",
    "season": 2020,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 90.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Ashwin-2021",
    "playerName": "M Ashwin",
    "season": 2021,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 62.5,
    "wickets": 1,
    "economy": 8.45
  },
  {
    "id": "N-Jagadeesan-2022",
    "playerName": "N Jagadeesan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LPC-Silva-2008",
    "playerName": "LPC Silva",
    "season": 2008,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 148.1,
    "wickets": 0,
    "economy": 21
  },
  {
    "id": "S-Dhawan-2009",
    "playerName": "S Dhawan",
    "season": 2009,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 87,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GR-Napier-2009",
    "playerName": "GR Napier",
    "season": 2009,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 93.8,
    "wickets": 1,
    "economy": 7
  },
  {
    "id": "BR-Dunk-2014",
    "playerName": "BR Dunk",
    "season": 2014,
    "role": "FINISHER",
    "runs": 40,
    "strikeRate": 111.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DL-Chahar-2017",
    "playerName": "DL Chahar",
    "season": 2017,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 233.3,
    "wickets": 1,
    "economy": 10.23
  },
  {
    "id": "J-Suchith-2021",
    "playerName": "J Suchith",
    "season": 2021,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 233.3,
    "wickets": 1,
    "economy": 9.43
  },
  {
    "id": "RT-Ponting-2008",
    "playerName": "RT Ponting",
    "season": 2008,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 73.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Rossouw-2014",
    "playerName": "RR Rossouw",
    "season": 2014,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 95.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GH-Vihari-2015",
    "playerName": "GH Vihari",
    "season": 2015,
    "role": "FINISHER",
    "runs": 39,
    "strikeRate": 108.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Jackson-2017",
    "playerName": "SP Jackson",
    "season": 2017,
    "role": "FINISHER",
    "runs": 38,
    "strikeRate": 122.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Kuldeep-Yadav-2020",
    "playerName": "Kuldeep Yadav",
    "season": 2020,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 61.9,
    "wickets": 1,
    "economy": 7.6
  },
  {
    "id": "Imran-Tahir-2020",
    "playerName": "Imran Tahir",
    "season": 2020,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 130,
    "wickets": 1,
    "economy": 7.09
  },
  {
    "id": "D-Padikkal-2024",
    "playerName": "D Padikkal",
    "season": 2024,
    "role": "FINISHER",
    "runs": 38,
    "strikeRate": 63.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CR-Brathwaite-2017",
    "playerName": "CR Brathwaite",
    "season": 2017,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 75,
    "wickets": 1,
    "economy": 10.58
  },
  {
    "id": "Swapnil-Singh-2017",
    "playerName": "Swapnil Singh",
    "season": 2017,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 63.2,
    "wickets": 1,
    "economy": 8.51
  },
  {
    "id": "RK-Singh-2019",
    "playerName": "RK Singh",
    "season": 2019,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 108.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MM-Ali-2020",
    "playerName": "MM Ali",
    "season": 2020,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 75,
    "wickets": 1,
    "economy": 7.88
  },
  {
    "id": "Vishnu-Vinod-2023",
    "playerName": "Vishnu Vinod",
    "season": 2023,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 115.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Raje-2009",
    "playerName": "RR Raje",
    "season": 2009,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 133.3,
    "wickets": 1,
    "economy": 10.29
  },
  {
    "id": "MEK-Hussey-2010",
    "playerName": "MEK Hussey",
    "season": 2010,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 84.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "STR-Binny-2011",
    "playerName": "STR Binny",
    "season": 2011,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 119.4,
    "wickets": 0,
    "economy": 10.56
  },
  {
    "id": "B-Chipli-2012",
    "playerName": "B Chipli",
    "season": 2012,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 105.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NLTC-Perera-2015",
    "playerName": "NLTC Perera",
    "season": 2015,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 80,
    "wickets": 1,
    "economy": 8.92
  },
  {
    "id": "MS-Bisla-2015",
    "playerName": "MS Bisla",
    "season": 2015,
    "role": "FINISHER",
    "runs": 37,
    "strikeRate": 123.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JP-Duminy-2018",
    "playerName": "JP Duminy",
    "season": 2018,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 78.3,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "T-Henderson-2009",
    "playerName": "T Henderson",
    "season": 2009,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 68.8,
    "wickets": 1,
    "economy": 6.83
  },
  {
    "id": "MC-Henriques-2010",
    "playerName": "MC Henriques",
    "season": 2010,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 220,
    "wickets": 1,
    "economy": 8.75
  },
  {
    "id": "UBT-Chand-2012",
    "playerName": "UBT Chand",
    "season": 2012,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 102.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GJ-Maxwell-2013",
    "playerName": "GJ Maxwell",
    "season": 2013,
    "role": "FINISHER",
    "runs": 36,
    "strikeRate": 133.3,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "SS-Prabhudessai-2023",
    "playerName": "SS Prabhudessai",
    "season": 2023,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 109.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "EJG-Morgan-2010",
    "playerName": "EJG Morgan",
    "season": 2010,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 112.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Sumanth-2010",
    "playerName": "B Sumanth",
    "season": 2010,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 92.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Manhas-2014",
    "playerName": "M Manhas",
    "season": 2014,
    "role": "FINISHER",
    "runs": 35,
    "strikeRate": 134.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Parvez-Rasool-2016",
    "playerName": "Parvez Rasool",
    "season": 2016,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 111.1,
    "wickets": 1,
    "economy": 9.29
  },
  {
    "id": "TG-Southee-2019",
    "playerName": "TG Southee",
    "season": 2019,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 12.72
  },
  {
    "id": "Abhishek-Sharma-2019",
    "playerName": "Abhishek Sharma",
    "season": 2019,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 90,
    "wickets": 1,
    "economy": 9.69
  },
  {
    "id": "S-Gopal-2022",
    "playerName": "S Gopal",
    "season": 2022,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 128.6,
    "wickets": 1,
    "economy": 11.33
  },
  {
    "id": "JD-Unadkat-2023",
    "playerName": "JD Unadkat",
    "season": 2023,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 128.6,
    "wickets": 1,
    "economy": 10.62
  },
  {
    "id": "L-Wood-2024",
    "playerName": "L Wood",
    "season": 2024,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 300,
    "wickets": 1,
    "economy": 14.84
  },
  {
    "id": "Shahbaz-Ahmed-2025",
    "playerName": "Shahbaz Ahmed",
    "season": 2025,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 112.5,
    "wickets": 1,
    "economy": 11.04
  },
  {
    "id": "AA-Noffke-2008",
    "playerName": "AA Noffke",
    "season": 2008,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 75,
    "wickets": 1,
    "economy": 9.84
  },
  {
    "id": "M-Rawat-2008",
    "playerName": "M Rawat",
    "season": 2008,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 87.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "L-Ronchi-2008",
    "playerName": "L Ronchi",
    "season": 2008,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PR-Shah-2008",
    "playerName": "PR Shah",
    "season": 2008,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 89.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Y-Venugopal-Rao-2010",
    "playerName": "Y Venugopal Rao",
    "season": 2010,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 77.3,
    "wickets": 0,
    "economy": 10
  },
  {
    "id": "CA-Pujara-2011",
    "playerName": "CA Pujara",
    "season": 2011,
    "role": "FINISHER",
    "runs": 34,
    "strikeRate": 106.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NM-Coulter-Nile-2013",
    "playerName": "NM Coulter-Nile",
    "season": 2013,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 150,
    "wickets": 1,
    "economy": 6.96
  },
  {
    "id": "IR-Jaggi-2017",
    "playerName": "IR Jaggi",
    "season": 2017,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 82.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SN-Khan-2020",
    "playerName": "SN Khan",
    "season": 2020,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 110,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "N-Jagadeesan-2020",
    "playerName": "N Jagadeesan",
    "season": 2020,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 106.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SE-Rutherford-2022",
    "playerName": "SE Rutherford",
    "season": 2022,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 63.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "FA-Allen-2022",
    "playerName": "FA Allen",
    "season": 2022,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 114.3,
    "wickets": 1,
    "economy": 11.5
  },
  {
    "id": "DJ-Mitchell-2022",
    "playerName": "DJ Mitchell",
    "season": 2022,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 71.7,
    "wickets": 0,
    "economy": 12.46
  },
  {
    "id": "Abishek-Porel-2023",
    "playerName": "Abishek Porel",
    "season": 2023,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 106.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SB-Dubey-2024",
    "playerName": "SB Dubey",
    "season": 2024,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 157.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KT-Maphaka-2025",
    "playerName": "KT Maphaka",
    "season": 2025,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 266.7,
    "wickets": 1,
    "economy": 10.88
  },
  {
    "id": "M-Morkel-2009",
    "playerName": "M Morkel",
    "season": 2009,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 88.9,
    "wickets": 1,
    "economy": 5.45
  },
  {
    "id": "AUK-Pathan-2011",
    "playerName": "AUK Pathan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 33,
    "strikeRate": 183.3,
    "wickets": 0,
    "economy": 8.4
  },
  {
    "id": "CJ-McKay-2012",
    "playerName": "CJ McKay",
    "season": 2012,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 53.3,
    "wickets": 1,
    "economy": 8.57
  },
  {
    "id": "MN-Samuels-2013",
    "playerName": "MN Samuels",
    "season": 2013,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 44.4,
    "wickets": 1,
    "economy": 8.16
  },
  {
    "id": "AD-Mathews-2017",
    "playerName": "AD Mathews",
    "season": 2017,
    "role": "FINISHER",
    "runs": 32,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 11.03
  },
  {
    "id": "M-Vijay-2020",
    "playerName": "M Vijay",
    "season": 2020,
    "role": "FINISHER",
    "runs": 32,
    "strikeRate": 72.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AT-Carey-2020",
    "playerName": "AT Carey",
    "season": 2020,
    "role": "FINISHER",
    "runs": 32,
    "strikeRate": 110.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Abbott-2022",
    "playerName": "SA Abbott",
    "season": 2022,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 140,
    "wickets": 1,
    "economy": 10.44
  },
  {
    "id": "Kartik-Tyagi-2022",
    "playerName": "Kartik Tyagi",
    "season": 2022,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 1,
    "economy": 8.78
  },
  {
    "id": "R-Powell-2023",
    "playerName": "R Powell",
    "season": 2023,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 77.8,
    "wickets": 1,
    "economy": 7.71
  },
  {
    "id": "V-Viyaskanth-2024",
    "playerName": "V Viyaskanth",
    "season": 2024,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 140,
    "wickets": 1,
    "economy": 9
  },
  {
    "id": "SN-Thakur-2015",
    "playerName": "SN Thakur",
    "season": 2015,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 1,
    "economy": 11.7
  },
  {
    "id": "M-Markande-2019",
    "playerName": "M Markande",
    "season": 2019,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 120,
    "wickets": 1,
    "economy": 9.57
  },
  {
    "id": "FA-Allen-2021",
    "playerName": "FA Allen",
    "season": 2021,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 8.06
  },
  {
    "id": "DR-Sams-2021",
    "playerName": "DR Sams",
    "season": 2021,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 6.16
  },
  {
    "id": "JDS-Neesham-2022",
    "playerName": "JDS Neesham",
    "season": 2022,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 114.8,
    "wickets": 0,
    "economy": 9.67
  },
  {
    "id": "DJ-Hooda-2025",
    "playerName": "DJ Hooda",
    "season": 2025,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 72.1,
    "wickets": 0,
    "economy": 12.86
  },
  {
    "id": "SB-Joshi-2008",
    "playerName": "SB Joshi",
    "season": 2008,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 37.5,
    "wickets": 1,
    "economy": 8.95
  },
  {
    "id": "T-Taibu-2008",
    "playerName": "T Taibu",
    "season": 2008,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 119.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "VS-Malik-2010",
    "playerName": "VS Malik",
    "season": 2010,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 120,
    "wickets": 1,
    "economy": 8.61
  },
  {
    "id": "KS-Williamson-2015",
    "playerName": "KS Williamson",
    "season": 2015,
    "role": "FINISHER",
    "runs": 31,
    "strikeRate": 106.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Azhar-Mahmood-2015",
    "playerName": "Azhar Mahmood",
    "season": 2015,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 75,
    "wickets": 1,
    "economy": 12.3
  },
  {
    "id": "A-Mithun-2010",
    "playerName": "A Mithun",
    "season": 2010,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 125,
    "wickets": 1,
    "economy": 11.7
  },
  {
    "id": "S-Anirudha-2010",
    "playerName": "S Anirudha",
    "season": 2010,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 157.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PC-Valthaty-2012",
    "playerName": "PC Valthaty",
    "season": 2012,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 57.7,
    "wickets": 0,
    "economy": 16
  },
  {
    "id": "Mohammed-Shami-2013",
    "playerName": "Mohammed Shami",
    "season": 2013,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 8.32
  },
  {
    "id": "Parvez-Rasool-2013",
    "playerName": "Parvez Rasool",
    "season": 2013,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 55.6,
    "wickets": 1,
    "economy": 5.8
  },
  {
    "id": "SS-Iyer-2016",
    "playerName": "SS Iyer",
    "season": 2016,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 65.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "C-Munro-2016",
    "playerName": "C Munro",
    "season": 2016,
    "role": "FINISHER",
    "runs": 30,
    "strikeRate": 96.8,
    "wickets": 0,
    "economy": 7.5
  },
  {
    "id": "MN-Samuels-2017",
    "playerName": "MN Samuels",
    "season": 2017,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 90.6,
    "wickets": 0,
    "economy": 11.33
  },
  {
    "id": "RK-Singh-2018",
    "playerName": "RK Singh",
    "season": 2018,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 85.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Goswami-2011",
    "playerName": "SP Goswami",
    "season": 2011,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 93.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "J-Syed-Mohammad-2012",
    "playerName": "J Syed Mohammad",
    "season": 2012,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 400,
    "wickets": 1,
    "economy": 9.21
  },
  {
    "id": "B-Laughlin-2013",
    "playerName": "B Laughlin",
    "season": 2013,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 44.4,
    "wickets": 1,
    "economy": 9.6
  },
  {
    "id": "RV-Gomez-2013",
    "playerName": "RV Gomez",
    "season": 2013,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 400,
    "wickets": 1,
    "economy": 5
  },
  {
    "id": "VH-Zol-2014",
    "playerName": "VH Zol",
    "season": 2014,
    "role": "FINISHER",
    "runs": 29,
    "strikeRate": 111.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Negi-2018",
    "playerName": "P Negi",
    "season": 2018,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 1,
    "economy": 12.25
  },
  {
    "id": "AS-Roy-2024",
    "playerName": "AS Roy",
    "season": 2024,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 10.59
  },
  {
    "id": "M-Kaif-2010",
    "playerName": "M Kaif",
    "season": 2010,
    "role": "FINISHER",
    "runs": 28,
    "strikeRate": 90.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Tyagi-2010",
    "playerName": "S Tyagi",
    "season": 2010,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 75,
    "wickets": 1,
    "economy": 9.47
  },
  {
    "id": "IR-Jaggi-2011",
    "playerName": "IR Jaggi",
    "season": 2011,
    "role": "FINISHER",
    "runs": 28,
    "strikeRate": 73.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LR-Shukla-2013",
    "playerName": "LR Shukla",
    "season": 2013,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 23.1,
    "wickets": 1,
    "economy": 7.33
  },
  {
    "id": "PV-Tambe-2013",
    "playerName": "PV Tambe",
    "season": 2013,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 7.91
  },
  {
    "id": "Ankit-Sharma-2016",
    "playerName": "Ankit Sharma",
    "season": 2016,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 7.2
  },
  {
    "id": "Harshit-Rana-2022",
    "playerName": "Harshit Rana",
    "season": 2022,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 10.06
  },
  {
    "id": "KS-Williamson-2024",
    "playerName": "KS Williamson",
    "season": 2024,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Akash-Deep-2024",
    "playerName": "Akash Deep",
    "season": 2024,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 14.35
  },
  {
    "id": "Harpreet-Singh-2024",
    "playerName": "Harpreet Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 79.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RJ-Gleeson-2024",
    "playerName": "RJ Gleeson",
    "season": 2024,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 8.47
  },
  {
    "id": "SH-Johnson-2025",
    "playerName": "SH Johnson",
    "season": 2025,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 11.01
  },
  {
    "id": "Mashrafe-Mortaza-2009",
    "playerName": "Mashrafe Mortaza",
    "season": 2009,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 12.64
  },
  {
    "id": "MS-Gony-2010",
    "playerName": "MS Gony",
    "season": 2010,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 28.6,
    "wickets": 1,
    "economy": 10.82
  },
  {
    "id": "S-Sriram-2010",
    "playerName": "S Sriram",
    "season": 2010,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 87.1,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "AS-Rajpoot-2013",
    "playerName": "AS Rajpoot",
    "season": 2013,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 33.3,
    "wickets": 1,
    "economy": 8.88
  },
  {
    "id": "RJ-Harris-2013",
    "playerName": "RJ Harris",
    "season": 2013,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 1,
    "economy": 6
  },
  {
    "id": "A-Mithun-2013",
    "playerName": "A Mithun",
    "season": 2013,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 8.88
  },
  {
    "id": "Parvez-Rasool-2015",
    "playerName": "Parvez Rasool",
    "season": 2015,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 6.2
  },
  {
    "id": "RG-More-2015",
    "playerName": "RG More",
    "season": 2015,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 10.22
  },
  {
    "id": "MA-Agarwal-2016",
    "playerName": "MA Agarwal",
    "season": 2016,
    "role": "FINISHER",
    "runs": 27,
    "strikeRate": 103.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MA-Agarwal-2017",
    "playerName": "MA Agarwal",
    "season": 2017,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 89.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DW-Steyn-2020",
    "playerName": "DW Steyn",
    "season": 2020,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 10.72
  },
  {
    "id": "DJ-Malan-2021",
    "playerName": "DJ Malan",
    "season": 2021,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mustafizur-Rahman-2023",
    "playerName": "Mustafizur Rahman",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 11.29
  },
  {
    "id": "MD-Shanaka-2023",
    "playerName": "MD Shanaka",
    "season": 2023,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LB-Williams-2024",
    "playerName": "LB Williams",
    "season": 2024,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 10.57
  },
  {
    "id": "SS-Tiwary-2008",
    "playerName": "SS Tiwary",
    "season": 2008,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 130,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Iqbal-Abdulla-2008",
    "playerName": "Iqbal Abdulla",
    "season": 2008,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 7.33
  },
  {
    "id": "PM-Sarvesh-Kumar-2008",
    "playerName": "PM Sarvesh Kumar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 8.13
  },
  {
    "id": "Y-Nagar-2010",
    "playerName": "Y Nagar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 14.3,
    "wickets": 1,
    "economy": 9.33
  },
  {
    "id": "NL-McCullum-2011",
    "playerName": "NL McCullum",
    "season": 2011,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 113,
    "wickets": 0,
    "economy": 7
  },
  {
    "id": "OA-Shah-2011",
    "playerName": "OA Shah",
    "season": 2011,
    "role": "FINISHER",
    "runs": 26,
    "strikeRate": 162.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SW-Tait-2013",
    "playerName": "SW Tait",
    "season": 2013,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 1,
    "economy": 8.83
  },
  {
    "id": "VS-Malik-2014",
    "playerName": "VS Malik",
    "season": 2014,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 1,
    "economy": 9.16
  },
  {
    "id": "S-Gopal-2015",
    "playerName": "S Gopal",
    "season": 2015,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 10.62
  },
  {
    "id": "J-Theron-2015",
    "playerName": "J Theron",
    "season": 2015,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 1,
    "economy": 9.46
  },
  {
    "id": "Ankit-Sharma-2017",
    "playerName": "Ankit Sharma",
    "season": 2017,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 156.3,
    "wickets": 0,
    "economy": 16
  },
  {
    "id": "MM-Patel-2017",
    "playerName": "MM Patel",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.29
  },
  {
    "id": "CJ-Jordan-2017",
    "playerName": "CJ Jordan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.57
  },
  {
    "id": "MM-Sharma-2019",
    "playerName": "MM Sharma",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9
  },
  {
    "id": "Y-Prithvi-Raj-2019",
    "playerName": "Y Prithvi Raj",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.36
  },
  {
    "id": "UT-Yadav-2020",
    "playerName": "UT Yadav",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.22
  },
  {
    "id": "S-Nadeem-2021",
    "playerName": "S Nadeem",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9
  },
  {
    "id": "PP-Chawla-2021",
    "playerName": "PP Chawla",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.5
  },
  {
    "id": "RV-Patel-2021",
    "playerName": "RV Patel",
    "season": 2021,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 86.2,
    "wickets": 0,
    "economy": 6.6
  },
  {
    "id": "AS-Roy-2022",
    "playerName": "AS Roy",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 7.86
  },
  {
    "id": "DG-Nalkande-2023",
    "playerName": "DG Nalkande",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.8
  },
  {
    "id": "Washington-Sundar-2024",
    "playerName": "Washington Sundar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 14.6
  },
  {
    "id": "Mayank-Dagar-2024",
    "playerName": "Mayank Dagar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.17
  },
  {
    "id": "Musheer-Khan-2025",
    "playerName": "Musheer Khan",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 13.5
  },
  {
    "id": "S-Chanderpaul-2008",
    "playerName": "S Chanderpaul",
    "season": 2008,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 75.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YA-Abdulla-2010",
    "playerName": "YA Abdulla",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.57
  },
  {
    "id": "R-Sathish-2011",
    "playerName": "R Sathish",
    "season": 2011,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 71.4,
    "wickets": 0,
    "economy": 7.94
  },
  {
    "id": "JDP-Oram-2011",
    "playerName": "JDP Oram",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.5
  },
  {
    "id": "ND-Doshi-2011",
    "playerName": "ND Doshi",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.63
  },
  {
    "id": "DH-Yagnik-2012",
    "playerName": "DH Yagnik",
    "season": 2012,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 178.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-McDonald-2013",
    "playerName": "AB McDonald",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.5
  },
  {
    "id": "IC-Pandey-2013",
    "playerName": "IC Pandey",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 12
  },
  {
    "id": "OA-Shah-2013",
    "playerName": "OA Shah",
    "season": 2013,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 104.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PJ-Cummins-2015",
    "playerName": "PJ Cummins",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.36
  },
  {
    "id": "CA-Lynn-2016",
    "playerName": "CA Lynn",
    "season": 2016,
    "role": "FINISHER",
    "runs": 25,
    "strikeRate": 108.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Agarwal-2017",
    "playerName": "SS Agarwal",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.5
  },
  {
    "id": "NB-Singh-2017",
    "playerName": "NB Singh",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 4.32
  },
  {
    "id": "Avesh-Khan-2017",
    "playerName": "Avesh Khan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6
  },
  {
    "id": "CV-Varun-2019",
    "playerName": "CV Varun",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.67
  },
  {
    "id": "KV-Sharma-2019",
    "playerName": "KV Sharma",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.65
  },
  {
    "id": "J-Yadav-2019",
    "playerName": "J Yadav",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6.98
  },
  {
    "id": "AS-Roy-2019",
    "playerName": "AS Roy",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 4.4
  },
  {
    "id": "K-Khejroliya-2019",
    "playerName": "K Khejroliya",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.1
  },
  {
    "id": "MM-Sharma-2020",
    "playerName": "MM Sharma",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.8
  },
  {
    "id": "Basil-Thampi-2020",
    "playerName": "Basil Thampi",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.5
  },
  {
    "id": "JR-Hazlewood-2020",
    "playerName": "JR Hazlewood",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 7.08
  },
  {
    "id": "J-Yadav-2020",
    "playerName": "J Yadav",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6.14
  },
  {
    "id": "LI-Meriwala-2021",
    "playerName": "LI Meriwala",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.11
  },
  {
    "id": "KW-Richardson-2021",
    "playerName": "KW Richardson",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.16
  },
  {
    "id": "I-Sharma-2021",
    "playerName": "I Sharma",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.17
  },
  {
    "id": "KM-Asif-2021",
    "playerName": "KM Asif",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 7.71
  },
  {
    "id": "IC-Porel-2021",
    "playerName": "IC Porel",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.69
  },
  {
    "id": "TU-Deshpande-2022",
    "playerName": "TU Deshpande",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.35
  },
  {
    "id": "M-Markande-2022",
    "playerName": "M Markande",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.71
  },
  {
    "id": "RJW-Topley-2023",
    "playerName": "RJW Topley",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 7
  },
  {
    "id": "SSB-Magala-2023",
    "playerName": "SSB Magala",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.43
  },
  {
    "id": "LH-Ferguson-2023",
    "playerName": "LH Ferguson",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.76
  },
  {
    "id": "D-Jansen-2023",
    "playerName": "D Jansen",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.36
  },
  {
    "id": "Mayank-Dagar-2023",
    "playerName": "Mayank Dagar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 7.55
  },
  {
    "id": "Kartik-Tyagi-2023",
    "playerName": "Kartik Tyagi",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 12.55
  },
  {
    "id": "AS-Joseph-2024",
    "playerName": "AS Joseph",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.53
  },
  {
    "id": "KT-Maphaka-2024",
    "playerName": "KT Maphaka",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 13.85
  },
  {
    "id": "M-Siddharth-2024",
    "playerName": "M Siddharth",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 7.45
  },
  {
    "id": "MJ-Henry-2024",
    "playerName": "MJ Henry",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.08
  },
  {
    "id": "A-Mishra-2024",
    "playerName": "A Mishra",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10
  },
  {
    "id": "NT-Ellis-2024",
    "playerName": "NT Ellis",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6
  },
  {
    "id": "Rasikh-Salam-2025",
    "playerName": "Rasikh Salam",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.21
  },
  {
    "id": "NT-Ellis-2025",
    "playerName": "NT Ellis",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.36
  },
  {
    "id": "Mujeeb-Ur-Rahman-2025",
    "playerName": "Mujeeb Ur Rahman",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 12.92
  },
  {
    "id": "Mukesh-Choudhary-2025",
    "playerName": "Mukesh Choudhary",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.83
  },
  {
    "id": "Yash-Thakur-2025",
    "playerName": "Yash Thakur",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.16
  },
  {
    "id": "K-Khejroliya-2025",
    "playerName": "K Khejroliya",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.16
  },
  {
    "id": "A-Nortje-2025",
    "playerName": "A Nortje",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.6
  },
  {
    "id": "T-Natarajan-2025",
    "playerName": "T Natarajan",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 12.72
  },
  {
    "id": "N-Thushara-2025",
    "playerName": "N Thushara",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6.92
  },
  {
    "id": "RJ-Gleeson-2025",
    "playerName": "RJ Gleeson",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.64
  },
  {
    "id": "P-Dubey-2025",
    "playerName": "P Dubey",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.5
  },
  {
    "id": "A-Nel-2008",
    "playerName": "A Nel",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.33
  },
  {
    "id": "BAW-Mendis-2008",
    "playerName": "BAW Mendis",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6
  },
  {
    "id": "VY-Mahesh-2009",
    "playerName": "VY Mahesh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.54
  },
  {
    "id": "VRV-Singh-2009",
    "playerName": "VRV Singh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.22
  },
  {
    "id": "SS-Sarkar-2009",
    "playerName": "SS Sarkar",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.16
  },
  {
    "id": "VY-Mahesh-2010",
    "playerName": "VY Mahesh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 7.26
  },
  {
    "id": "SB-Wagh-2010",
    "playerName": "SB Wagh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 16
  },
  {
    "id": "DS-Kulkarni-2010",
    "playerName": "DS Kulkarni",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.6
  },
  {
    "id": "ND-Doshi-2010",
    "playerName": "ND Doshi",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 4.08
  },
  {
    "id": "KMDN-Kulasekara-2011",
    "playerName": "KMDN Kulasekara",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.21
  },
  {
    "id": "AA-Kazi-2011",
    "playerName": "AA Kazi",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.69
  },
  {
    "id": "JP-Faulkner-2011",
    "playerName": "JP Faulkner",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 5
  },
  {
    "id": "SS-Mundhe-2011",
    "playerName": "SS Mundhe",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 5.14
  },
  {
    "id": "TP-Sudhindra-2012",
    "playerName": "TP Sudhindra",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 11.11
  },
  {
    "id": "PJ-Sangwan-2012",
    "playerName": "PJ Sangwan",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.08
  },
  {
    "id": "AA-Chavan-2013",
    "playerName": "AA Chavan",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6.75
  },
  {
    "id": "S-Ladda-2013",
    "playerName": "S Ladda",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9
  },
  {
    "id": "BA-Bhatt-2013",
    "playerName": "BA Bhatt",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6.19
  },
  {
    "id": "P-Suyal-2013",
    "playerName": "P Suyal",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6.95
  },
  {
    "id": "Bipul-Sharma-2013",
    "playerName": "Bipul Sharma",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 5.25
  },
  {
    "id": "R-Sharma-2014",
    "playerName": "R Sharma",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.83
  },
  {
    "id": "P-Negi-2014",
    "playerName": "P Negi",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.6
  },
  {
    "id": "P-Suyal-2014",
    "playerName": "P Suyal",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10
  },
  {
    "id": "Parvez-Rasool-2014",
    "playerName": "Parvez Rasool",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 8.89
  },
  {
    "id": "JW-Hastings-2014",
    "playerName": "JW Hastings",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9.16
  },
  {
    "id": "I-Sharma-2015",
    "playerName": "I Sharma",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.85
  },
  {
    "id": "KC-Cariappa-2015",
    "playerName": "KC Cariappa",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 14
  },
  {
    "id": "Shivam-Sharma-2015",
    "playerName": "Shivam Sharma",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 14.67
  },
  {
    "id": "GS-Sandhu-2015",
    "playerName": "GS Sandhu",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.75
  },
  {
    "id": "M-de-Lange-2015",
    "playerName": "M de Lange",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6.92
  },
  {
    "id": "AF-Milne-2016",
    "playerName": "AF Milne",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 10.56
  },
  {
    "id": "Anureet-Singh-2016",
    "playerName": "Anureet Singh",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 6.95
  },
  {
    "id": "TA-Boult-2016",
    "playerName": "TA Boult",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 1,
    "economy": 9
  },
  {
    "id": "KM-Jadhav-2018",
    "playerName": "KM Jadhav",
    "season": 2018,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 104.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TL-Seifert-2022",
    "playerName": "TL Seifert",
    "season": 2022,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Tanush-Kotian-2024",
    "playerName": "Tanush Kotian",
    "season": 2024,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 75,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Prabhudessai-2024",
    "playerName": "SS Prabhudessai",
    "season": 2024,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 126.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mandeep-Singh-2014",
    "playerName": "Mandeep Singh",
    "season": 2014,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 85.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "ER-Dwivedi-2016",
    "playerName": "ER Dwivedi",
    "season": 2016,
    "role": "FINISHER",
    "runs": 24,
    "strikeRate": 160,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Jackson-2022",
    "playerName": "SP Jackson",
    "season": 2022,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 88.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "J-Arunkumar-2008",
    "playerName": "J Arunkumar",
    "season": 2008,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 95.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Narwal-2013",
    "playerName": "S Narwal",
    "season": 2013,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 143.8,
    "wickets": 0,
    "economy": 7.29
  },
  {
    "id": "AJ-Finch-2015",
    "playerName": "AJ Finch",
    "season": 2015,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 69.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NS-Naik-2016",
    "playerName": "NS Naik",
    "season": 2016,
    "role": "FINISHER",
    "runs": 23,
    "strikeRate": 69.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "HE-van-der-Dussen-2022",
    "playerName": "HE van der Dussen",
    "season": 2022,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 88,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PK-Garg-2023",
    "playerName": "PK Garg",
    "season": 2023,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 95.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sediqullah-Atal-2025",
    "playerName": "Sediqullah Atal",
    "season": 2025,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 137.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Wade-2011",
    "playerName": "MS Wade",
    "season": 2011,
    "role": "FINISHER",
    "runs": 22,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Indrajith-2022",
    "playerName": "B Indrajith",
    "season": 2022,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 67.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "D-Wiese-2023",
    "playerName": "D Wiese",
    "season": 2023,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 190.9,
    "wickets": 0,
    "economy": 12.67
  },
  {
    "id": "AJ-Turner-2024",
    "playerName": "AJ Turner",
    "season": 2024,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 105,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AJ-Finch-2010",
    "playerName": "AJ Finch",
    "season": 2010,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 4.29
  },
  {
    "id": "CA-Ingram-2011",
    "playerName": "CA Ingram",
    "season": 2011,
    "role": "FINISHER",
    "runs": 21,
    "strikeRate": 80.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Lomror-2018",
    "playerName": "MK Lomror",
    "season": 2018,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 95.2,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "Harpreet-Brar-2019",
    "playerName": "Harpreet Brar",
    "season": 2019,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 142.9,
    "wickets": 0,
    "economy": 9.6
  },
  {
    "id": "BKG-Mendis-2025",
    "playerName": "BKG Mendis",
    "season": 2025,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 181.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Chipli-2008",
    "playerName": "B Chipli",
    "season": 2008,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KL-Rahul-2013",
    "playerName": "KL Rahul",
    "season": 2013,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 125,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Nath-2016",
    "playerName": "AD Nath",
    "season": 2016,
    "role": "FINISHER",
    "runs": 20,
    "strikeRate": 74.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Vishnu-Vinod-2017",
    "playerName": "Vishnu Vinod",
    "season": 2017,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 73.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Ray-Barman-2019",
    "playerName": "P Ray Barman",
    "season": 2019,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 76,
    "wickets": 0,
    "economy": 14
  },
  {
    "id": "P-Simran-Singh-2021",
    "playerName": "P Simran Singh",
    "season": 2021,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 82.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Vohra-2022",
    "playerName": "M Vohra",
    "season": 2022,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 158.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Gulbadin-Naib-2024",
    "playerName": "Gulbadin Naib",
    "season": 2024,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 126.7,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "VVS-Laxman-2009",
    "playerName": "VVS Laxman",
    "season": 2009,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 57.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Bishnoi-2009",
    "playerName": "R Bishnoi",
    "season": 2009,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 111.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DR-Martyn-2010",
    "playerName": "DR Martyn",
    "season": 2010,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 73.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "FY-Fazal-2011",
    "playerName": "FY Fazal",
    "season": 2011,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Y-Gnaneswara-Rao-2011",
    "playerName": "Y Gnaneswara Rao",
    "season": 2011,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 105.6,
    "wickets": 0,
    "economy": 7
  },
  {
    "id": "S-Anirudha-2012",
    "playerName": "S Anirudha",
    "season": 2012,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 211.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Mukund-2013",
    "playerName": "A Mukund",
    "season": 2013,
    "role": "FINISHER",
    "runs": 19,
    "strikeRate": 86.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AP-Tare-2017",
    "playerName": "AP Tare",
    "season": 2017,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 72,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "T-Banton-2020",
    "playerName": "T Banton",
    "season": 2020,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 81.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mandeep-Singh-2022",
    "playerName": "Mandeep Singh",
    "season": 2022,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 75,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sumit-Kumar-2024",
    "playerName": "Sumit Kumar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 69.2,
    "wickets": 0,
    "economy": 10.36
  },
  {
    "id": "Saurav-Chauhan-2024",
    "playerName": "Saurav Chauhan",
    "season": 2024,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 112.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DS-Lehmann-2008",
    "playerName": "DS Lehmann",
    "season": 2008,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 94.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NK-Patel-2009",
    "playerName": "NK Patel",
    "season": 2009,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 43.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YV-Takawale-2009",
    "playerName": "YV Takawale",
    "season": 2009,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 81.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "GJ-Bailey-2010",
    "playerName": "GJ Bailey",
    "season": 2010,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "K-Goel-2010",
    "playerName": "K Goel",
    "season": 2010,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 90,
    "wickets": 0,
    "economy": 7
  },
  {
    "id": "KM-Jadhav-2011",
    "playerName": "KM Jadhav",
    "season": 2011,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 78.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BJ-Haddin-2011",
    "playerName": "BJ Haddin",
    "season": 2011,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 163.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Rana-2011",
    "playerName": "S Rana",
    "season": 2011,
    "role": "FINISHER",
    "runs": 18,
    "strikeRate": 112.5,
    "wickets": 0,
    "economy": 3
  },
  {
    "id": "CA-Pujara-2012",
    "playerName": "CA Pujara",
    "season": 2012,
    "role": "FINISHER",
    "runs": 17,
    "strikeRate": 73.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Simran-Singh-2019",
    "playerName": "P Simran Singh",
    "season": 2019,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 88.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KK-Nair-2020",
    "playerName": "KK Nair",
    "season": 2020,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Anmolpreet-Singh-2021",
    "playerName": "Anmolpreet Singh",
    "season": 2021,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KK-Nair-2022",
    "playerName": "KK Nair",
    "season": 2022,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 88.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "YV-Dhull-2023",
    "playerName": "YV Dhull",
    "season": 2023,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 69.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CK-Kapugedera-2008",
    "playerName": "CK Kapugedera",
    "season": 2008,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 17.29
  },
  {
    "id": "M-Rawat-2009",
    "playerName": "M Rawat",
    "season": 2009,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 80,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Mathews-2009",
    "playerName": "AD Mathews",
    "season": 2009,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 12.8
  },
  {
    "id": "DH-Yagnik-2011",
    "playerName": "DH Yagnik",
    "season": 2011,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 69.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Chipli-2013",
    "playerName": "B Chipli",
    "season": 2013,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 84.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NJ-Maddinson-2014",
    "playerName": "NJ Maddinson",
    "season": 2014,
    "role": "FINISHER",
    "runs": 16,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sachin-Baby-2017",
    "playerName": "Sachin Baby",
    "season": 2017,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 88.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Anureet-Singh-2017",
    "playerName": "Anureet Singh",
    "season": 2017,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 125,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "SD-Lad-2019",
    "playerName": "SD Lad",
    "season": 2019,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 115.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Simran-Singh-2020",
    "playerName": "P Simran Singh",
    "season": 2020,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Virat-Singh-2021",
    "playerName": "Virat Singh",
    "season": 2021,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 57.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mandeep-Singh-2021",
    "playerName": "Mandeep Singh",
    "season": 2021,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 107.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BA-Stokes-2023",
    "playerName": "BA Stokes",
    "season": 2023,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 18
  },
  {
    "id": "J-Overton-2025",
    "playerName": "J Overton",
    "season": 2025,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 214.3,
    "wickets": 0,
    "economy": 12.29
  },
  {
    "id": "W-Jaffer-2009",
    "playerName": "W Jaffer",
    "season": 2009,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 78.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "C-Madan-2010",
    "playerName": "C Madan",
    "season": 2010,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 71.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TL-Suman-2012",
    "playerName": "TL Suman",
    "season": 2012,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 78.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Dogra-2012",
    "playerName": "P Dogra",
    "season": 2012,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 60,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "IR-Jaggi-2012",
    "playerName": "IR Jaggi",
    "season": 2012,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 68.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Abbott-2015",
    "playerName": "SA Abbott",
    "season": 2015,
    "role": "FINISHER",
    "runs": 15,
    "strikeRate": 115.4,
    "wickets": 0,
    "economy": 10.69
  },
  {
    "id": "P-Simran-Singh-2022",
    "playerName": "P Simran Singh",
    "season": 2022,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 127.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mandeep-Singh-2023",
    "playerName": "Mandeep Singh",
    "season": 2023,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 87.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sanvir-Singh-2024",
    "playerName": "Sanvir Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 107.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MP-Breetzke-2025",
    "playerName": "MP Breetzke",
    "season": 2025,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 116.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LR-Shukla-2011",
    "playerName": "LR Shukla",
    "season": 2011,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 140,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harpreet-Singh-2011",
    "playerName": "Harpreet Singh",
    "season": 2011,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 70,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Kaif-2012",
    "playerName": "M Kaif",
    "season": 2012,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 87.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Aravind-2012",
    "playerName": "S Aravind",
    "season": 2012,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 175,
    "wickets": 0,
    "economy": 16
  },
  {
    "id": "DB-Ravi-Teja-2013",
    "playerName": "DB Ravi Teja",
    "season": 2013,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 77.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MDKJ-Perera-2013",
    "playerName": "MDKJ Perera",
    "season": 2013,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 107.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AP-Tare-2015",
    "playerName": "AP Tare",
    "season": 2015,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 77.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Rossouw-2015",
    "playerName": "RR Rossouw",
    "season": 2015,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 140,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "F-Behardien-2016",
    "playerName": "F Behardien",
    "season": 2016,
    "role": "FINISHER",
    "runs": 14,
    "strikeRate": 107.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Anmolpreet-Singh-2022",
    "playerName": "Anmolpreet Singh",
    "season": 2022,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Atharva-Taide-2025",
    "playerName": "Atharva Taide",
    "season": 2025,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 118.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DT-Patil-2008",
    "playerName": "DT Patil",
    "season": 2008,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Tiwary-2009",
    "playerName": "SS Tiwary",
    "season": 2009,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 108.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MV-Boucher-2010",
    "playerName": "MV Boucher",
    "season": 2010,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 130,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Akhil-2011",
    "playerName": "B Akhil",
    "season": 2011,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 144.4,
    "wickets": 0,
    "economy": 10.15
  },
  {
    "id": "M-Manhas-2013",
    "playerName": "M Manhas",
    "season": 2013,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 76.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DJG-Sammy-2015",
    "playerName": "DJG Sammy",
    "season": 2015,
    "role": "FINISHER",
    "runs": 13,
    "strikeRate": 72.2,
    "wickets": 0,
    "economy": 8.67
  },
  {
    "id": "AR-Bawne-2017",
    "playerName": "AR Bawne",
    "season": 2017,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Vijay-2018",
    "playerName": "M Vijay",
    "season": 2018,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 109.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KS-Sharma-2023",
    "playerName": "KS Sharma",
    "season": 2023,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 57.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KM-Jadhav-2023",
    "playerName": "KM Jadhav",
    "season": 2023,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 120,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BJ-Hodge-2008",
    "playerName": "BJ Hodge",
    "season": 2008,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-Agarkar-2013",
    "playerName": "AB Agarkar",
    "season": 2013,
    "role": "FINISHER",
    "runs": 12,
    "strikeRate": 75,
    "wickets": 0,
    "economy": 8.86
  },
  {
    "id": "CR-Brathwaite-2019",
    "playerName": "CR Brathwaite",
    "season": 2019,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 110,
    "wickets": 0,
    "economy": 8.29
  },
  {
    "id": "RK-Singh-2020",
    "playerName": "RK Singh",
    "season": 2020,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammad-Nabi-2020",
    "playerName": "Mohammad Nabi",
    "season": 2020,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 137.5,
    "wickets": 0,
    "economy": 5.54
  },
  {
    "id": "RA-Bawa-2022",
    "playerName": "RA Bawa",
    "season": 2022,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 78.6,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sanvir-Singh-2023",
    "playerName": "Sanvir Singh",
    "season": 2023,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 122.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Chopra-2009",
    "playerName": "A Chopra",
    "season": 2009,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 55,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "B-Lee-2010",
    "playerName": "B Lee",
    "season": 2010,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 10.15
  },
  {
    "id": "K-Upadhyay-2012",
    "playerName": "K Upadhyay",
    "season": 2012,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 137.5,
    "wickets": 0,
    "economy": 8.25
  },
  {
    "id": "AD-Russell-2013",
    "playerName": "AD Russell",
    "season": 2013,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 73.3,
    "wickets": 0,
    "economy": 9.27
  },
  {
    "id": "IK-Pathan-2016",
    "playerName": "IK Pathan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 11,
    "strikeRate": 78.6,
    "wickets": 0,
    "economy": 7.63
  },
  {
    "id": "M-Vohra-2023",
    "playerName": "M Vohra",
    "season": 2023,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 90.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JE-Root-2023",
    "playerName": "JE Root",
    "season": 2023,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 7.5
  },
  {
    "id": "Lalit-Yadav-2024",
    "playerName": "Lalit Yadav",
    "season": 2024,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 83.3,
    "wickets": 0,
    "economy": 19
  },
  {
    "id": "T-Kohli-2008",
    "playerName": "T Kohli",
    "season": 2008,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 62.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KAJ-Roach-2010",
    "playerName": "KAJ Roach",
    "season": 2010,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 111.1,
    "wickets": 0,
    "economy": 9.23
  },
  {
    "id": "TD-Paine-2011",
    "playerName": "TD Paine",
    "season": 2011,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 34.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AA-Jhunjhunwala-2011",
    "playerName": "AA Jhunjhunwala",
    "season": 2011,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 52.6,
    "wickets": 0,
    "economy": 10.15
  },
  {
    "id": "X-Thalaivan-Sargunam-2013",
    "playerName": "X Thalaivan Sargunam",
    "season": 2013,
    "role": "FINISHER",
    "runs": 10,
    "strikeRate": 58.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Nath-2018",
    "playerName": "AD Nath",
    "season": 2018,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 69.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KC-Cariappa-2019",
    "playerName": "KC Cariappa",
    "season": 2019,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 300,
    "wickets": 0,
    "economy": 15.69
  },
  {
    "id": "H-Klaasen-2019",
    "playerName": "H Klaasen",
    "season": 2019,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 90,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Manohar-2024",
    "playerName": "A Manohar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 56.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AA-Kulkarni-2024",
    "playerName": "AA Kulkarni",
    "season": 2024,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 112.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PWA-Mulder-2025",
    "playerName": "PWA Mulder",
    "season": 2025,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 75,
    "wickets": 0,
    "economy": 16
  },
  {
    "id": "MK-Tiwary-2009",
    "playerName": "MK Tiwary",
    "season": 2009,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 69.2,
    "wickets": 0,
    "economy": 11
  },
  {
    "id": "M-Morkel-2010",
    "playerName": "M Morkel",
    "season": 2010,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 56.3,
    "wickets": 0,
    "economy": 8.61
  },
  {
    "id": "SA-Asnodkar-2011",
    "playerName": "SA Asnodkar",
    "season": 2011,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SD-Chitnis-2011",
    "playerName": "SD Chitnis",
    "season": 2011,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NV-Ojha-2013",
    "playerName": "NV Ojha",
    "season": 2013,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 90,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KK-Nair-2013",
    "playerName": "KK Nair",
    "season": 2013,
    "role": "FINISHER",
    "runs": 9,
    "strikeRate": 75,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "F-du-Plessis-2017",
    "playerName": "F du Plessis",
    "season": 2017,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "I-Sharma-2017",
    "playerName": "I Sharma",
    "season": 2017,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 61.5,
    "wickets": 0,
    "economy": 10
  },
  {
    "id": "DR-Shorey-2018",
    "playerName": "DR Shorey",
    "season": 2018,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 88.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Chopra-2018",
    "playerName": "P Chopra",
    "season": 2018,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 133.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MK-Lomror-2019",
    "playerName": "MK Lomror",
    "season": 2019,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 266.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Rahane-2021",
    "playerName": "AM Rahane",
    "season": 2021,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 88.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KS-Bharat-2022",
    "playerName": "KS Bharat",
    "season": 2022,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "D-Ferreira-2024",
    "playerName": "D Ferreira",
    "season": 2024,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 72.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RA-Bawa-2025",
    "playerName": "RA Bawa",
    "season": 2025,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 200,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TM-Srivastava-2008",
    "playerName": "TM Srivastava",
    "season": 2008,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 80,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SP-Goswami-2010",
    "playerName": "SP Goswami",
    "season": 2010,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 80,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "STR-Binny-2010",
    "playerName": "STR Binny",
    "season": 2010,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 160,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "AB-McDonald-2011",
    "playerName": "AB McDonald",
    "season": 2011,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 114.3,
    "wickets": 0,
    "economy": 11.5
  },
  {
    "id": "DJ-Bravo-2014",
    "playerName": "DJ Bravo",
    "season": 2014,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 266.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "LMP-Simmons-2016",
    "playerName": "LMP Simmons",
    "season": 2016,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AP-Tare-2016",
    "playerName": "AP Tare",
    "season": 2016,
    "role": "FINISHER",
    "runs": 8,
    "strikeRate": 53.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NS-Naik-2019",
    "playerName": "NS Naik",
    "season": 2019,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 41.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RK-Bhui-2019",
    "playerName": "RK Bhui",
    "season": 2019,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 53.8,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Dubey-2020",
    "playerName": "P Dubey",
    "season": 2020,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 53.8,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "S-Gopal-2021",
    "playerName": "S Gopal",
    "season": 2021,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 140,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "Sachin-Baby-2021",
    "playerName": "Sachin Baby",
    "season": 2021,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 41.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Rasikh-Salam-2022",
    "playerName": "Rasikh Salam",
    "season": 2022,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 116.7,
    "wickets": 0,
    "economy": 7
  },
  {
    "id": "Suryansh-Shedge-2025",
    "playerName": "Suryansh Shedge",
    "season": 2025,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 58.3,
    "wickets": 0,
    "economy": 12.63
  },
  {
    "id": "AN-Ghosh-2009",
    "playerName": "AN Ghosh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 87.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "I-Malhotra-2011",
    "playerName": "I Malhotra",
    "season": 2011,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 175,
    "wickets": 0,
    "economy": 23
  },
  {
    "id": "KB-Arun-Karthik-2011",
    "playerName": "KB Arun Karthik",
    "season": 2011,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 87.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "UA-Birla-2013",
    "playerName": "UA Birla",
    "season": 2013,
    "role": "FINISHER",
    "runs": 7,
    "strikeRate": 46.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DM-Bravo-2017",
    "playerName": "DM Bravo",
    "season": 2017,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 120,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RV-Patel-2022",
    "playerName": "RV Patel",
    "season": 2022,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 200,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Minz-2025",
    "playerName": "R Minz",
    "season": 2025,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 37.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PC-Valthaty-2009",
    "playerName": "PC Valthaty",
    "season": 2009,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SD-Chitnis-2009",
    "playerName": "SD Chitnis",
    "season": 2009,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SS-Shaikh-2009",
    "playerName": "SS Shaikh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 85.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MV-Boucher-2011",
    "playerName": "MV Boucher",
    "season": 2011,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "WP-Saha-2012",
    "playerName": "WP Saha",
    "season": 2012,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 42.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AUK-Pathan-2012",
    "playerName": "AUK Pathan",
    "season": 2012,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 75,
    "wickets": 0,
    "economy": 14
  },
  {
    "id": "CA-Lynn-2012",
    "playerName": "CA Lynn",
    "season": 2012,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 60,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Harpreet-Singh-2012",
    "playerName": "Harpreet Singh",
    "season": 2012,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DT-Christian-2013",
    "playerName": "DT Christian",
    "season": 2013,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 37.5,
    "wickets": 0,
    "economy": 8.84
  },
  {
    "id": "Q-de-Kock-2013",
    "playerName": "Q de Kock",
    "season": 2013,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 37.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PC-Valthaty-2013",
    "playerName": "PC Valthaty",
    "season": 2013,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 35.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BB-McCullum-2013",
    "playerName": "BB McCullum",
    "season": 2013,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 85.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PSP-Handscomb-2016",
    "playerName": "PSP Handscomb",
    "season": 2016,
    "role": "FINISHER",
    "runs": 6,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Rasikh-Salam-2019",
    "playerName": "Rasikh Salam",
    "season": 2019,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 125,
    "wickets": 0,
    "economy": 9.33
  },
  {
    "id": "KK-Nair-2019",
    "playerName": "KK Nair",
    "season": 2019,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 83.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "DR-Shorey-2019",
    "playerName": "DR Shorey",
    "season": 2019,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 45.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Aman-Hakim-Khan-2022",
    "playerName": "Aman Hakim Khan",
    "season": 2022,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 166.7,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "Arshad-Khan--2--2024",
    "playerName": "Arshad Khan (2)",
    "season": 2024,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 125,
    "wickets": 0,
    "economy": 11.54
  },
  {
    "id": "Anmolpreet-Singh-2024",
    "playerName": "Anmolpreet Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 71.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Powell-2025",
    "playerName": "R Powell",
    "season": 2025,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 71.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Pankaj-Singh-2008",
    "playerName": "Pankaj Singh",
    "season": 2008,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 62.5,
    "wickets": 0,
    "economy": 10.18
  },
  {
    "id": "SA-Asnodkar-2010",
    "playerName": "SA Asnodkar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 125,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SB-Styris-2011",
    "playerName": "SB Styris",
    "season": 2011,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 250,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "PR-Shah-2011",
    "playerName": "PR Shah",
    "season": 2011,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AD-Mascarenhas-2013",
    "playerName": "AD Mascarenhas",
    "season": 2013,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 6.25
  },
  {
    "id": "M-Rawat-2013",
    "playerName": "M Rawat",
    "season": 2013,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 45.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "P-Dogra-2013",
    "playerName": "P Dogra",
    "season": 2013,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 62.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "D-Wiese-2016",
    "playerName": "D Wiese",
    "season": 2016,
    "role": "FINISHER",
    "runs": 5,
    "strikeRate": 125,
    "wickets": 0,
    "economy": 10.89
  },
  {
    "id": "A-Dananjaya-2018",
    "playerName": "A Dananjaya",
    "season": 2018,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 0,
    "economy": 11.28
  },
  {
    "id": "GH-Vihari-2019",
    "playerName": "GH Vihari",
    "season": 2019,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "Avesh-Khan-2019",
    "playerName": "Avesh Khan",
    "season": 2019,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 133.3,
    "wickets": 0,
    "economy": 9.47
  },
  {
    "id": "Harbhajan-Singh-2021",
    "playerName": "Harbhajan Singh",
    "season": 2021,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 8.4
  },
  {
    "id": "Abdul-Samad-2022",
    "playerName": "Abdul Samad",
    "season": 2022,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 57.1,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "KS-Sharma-2022",
    "playerName": "KS Sharma",
    "season": 2022,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "A-Tomar-2022",
    "playerName": "A Tomar",
    "season": 2022,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PN-Mankad-2022",
    "playerName": "PN Mankad",
    "season": 2022,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 400,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Liton-Das-2023",
    "playerName": "Liton Das",
    "season": 2023,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Wade-2024",
    "playerName": "MS Wade",
    "season": 2024,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 57.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Sohal-2008",
    "playerName": "S Sohal",
    "season": 2008,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AM-Rahane-2008",
    "playerName": "AM Rahane",
    "season": 2008,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 21.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mandeep-Singh-2010",
    "playerName": "Mandeep Singh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 36.4,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AN-Ahmed-2010",
    "playerName": "AN Ahmed",
    "season": 2010,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 11.14
  },
  {
    "id": "RS-Sodhi-2010",
    "playerName": "RS Sodhi",
    "season": 2010,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 200,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Sriram-2011",
    "playerName": "S Sriram",
    "season": 2011,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 57.1,
    "wickets": 0,
    "economy": 25
  },
  {
    "id": "DB-Ravi-Teja-2012",
    "playerName": "DB Ravi Teja",
    "season": 2012,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NLTC-Perera-2012",
    "playerName": "NLTC Perera",
    "season": 2012,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 10.8
  },
  {
    "id": "MD-Mishra-2012",
    "playerName": "MD Mishra",
    "season": 2012,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PJ-Sangwan-2013",
    "playerName": "PJ Sangwan",
    "season": 2013,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 200,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "TG-Southee-2014",
    "playerName": "TG Southee",
    "season": 2014,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 7.43
  },
  {
    "id": "DH-Yagnik-2014",
    "playerName": "DH Yagnik",
    "season": 2014,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "CM-Gautam-2015",
    "playerName": "CM Gautam",
    "season": 2015,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 80,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NJ-Maddinson-2015",
    "playerName": "NJ Maddinson",
    "season": 2015,
    "role": "FINISHER",
    "runs": 4,
    "strikeRate": 57.1,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AJ-Turner-2019",
    "playerName": "AJ Turner",
    "season": 2019,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 27.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BB-Sran-2019",
    "playerName": "BB Sran",
    "season": 2019,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 12.24
  },
  {
    "id": "DS-Kulkarni-2020",
    "playerName": "DS Kulkarni",
    "season": 2020,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 150,
    "wickets": 0,
    "economy": 6.6
  },
  {
    "id": "RK-Bhui-2024",
    "playerName": "RK Bhui",
    "season": 2024,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Kumar-Kushagra-2024",
    "playerName": "Kumar Kushagra",
    "season": 2024,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 42.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "M-Tiwari-2025",
    "playerName": "M Tiwari",
    "season": 2025,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 75,
    "wickets": 0,
    "economy": 14
  },
  {
    "id": "MK-Pandey-2008",
    "playerName": "MK Pandey",
    "season": 2008,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 30,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Younis-Khan-2008",
    "playerName": "Younis Khan",
    "season": 2008,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 42.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AB-McDonald-2009",
    "playerName": "AB McDonald",
    "season": 2009,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 75,
    "wickets": 0,
    "economy": 7.33
  },
  {
    "id": "KB-Arun-Karthik-2010",
    "playerName": "KB Arun Karthik",
    "season": 2010,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AG-Murtaza-2012",
    "playerName": "AG Murtaza",
    "season": 2012,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 0,
    "economy": 5.5
  },
  {
    "id": "Sachin-Baby-2013",
    "playerName": "Sachin Baby",
    "season": 2013,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 42.9,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Bisla-2014",
    "playerName": "MS Bisla",
    "season": 2014,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Anirudha-2014",
    "playerName": "S Anirudha",
    "season": 2014,
    "role": "FINISHER",
    "runs": 3,
    "strikeRate": 60,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Navdeep-Saini-2021",
    "playerName": "Navdeep Saini",
    "season": 2021,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 0,
    "economy": 12.72
  },
  {
    "id": "T-Shamsi-2021",
    "playerName": "T Shamsi",
    "season": 2021,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 8.5
  },
  {
    "id": "TL-Seifert-2021",
    "playerName": "TL Seifert",
    "season": 2021,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "T-Stubbs-2022",
    "playerName": "T Stubbs",
    "season": 2022,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Swapnil-Singh-2023",
    "playerName": "Swapnil Singh",
    "season": 2023,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "JA-Richardson-2024",
    "playerName": "JA Richardson",
    "season": 2024,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 9.6
  },
  {
    "id": "BR-Sharath-2024",
    "playerName": "BR Sharath",
    "season": 2024,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Shivam-Singh-2024",
    "playerName": "Shivam Singh",
    "season": 2024,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 66.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Fazalhaq-Farooqi-2025",
    "playerName": "Fazalhaq Farooqi",
    "season": 2025,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 12.17
  },
  {
    "id": "H-Das-2008",
    "playerName": "H Das",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 40,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "VS-Yeligati-2008",
    "playerName": "VS Yeligati",
    "season": 2008,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 11.44
  },
  {
    "id": "SB-Bangar-2009",
    "playerName": "SB Bangar",
    "season": 2009,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 22.2,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mohammad-Ashraful-2009",
    "playerName": "Mohammad Ashraful",
    "season": 2009,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 16.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RS-Gavaskar-2010",
    "playerName": "RS Gavaskar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 25,
    "wickets": 0,
    "economy": 8
  },
  {
    "id": "AA-Bilakhia-2010",
    "playerName": "AA Bilakhia",
    "season": 2010,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "UBT-Chand-2011",
    "playerName": "UBT Chand",
    "season": 2011,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 16.7,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BB-Samantray-2012",
    "playerName": "BB Samantray",
    "season": 2012,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "UBT-Chand-2014",
    "playerName": "UBT Chand",
    "season": 2014,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 20,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Nadeem-2015",
    "playerName": "S Nadeem",
    "season": 2015,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 28.6,
    "wickets": 0,
    "economy": 5.86
  },
  {
    "id": "S-Gopal-2016",
    "playerName": "S Gopal",
    "season": 2016,
    "role": "FINISHER",
    "runs": 2,
    "strikeRate": 12.5,
    "wickets": 0,
    "economy": 6.33
  },
  {
    "id": "Shakib-Al-Hasan-2017",
    "playerName": "Shakib Al Hasan",
    "season": 2017,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 11.33
  },
  {
    "id": "MA-Wood-2018",
    "playerName": "MA Wood",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 20,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "NV-Ojha-2018",
    "playerName": "NV Ojha",
    "season": 2018,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Basil-Thampi-2019",
    "playerName": "Basil Thampi",
    "season": 2019,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 9.45
  },
  {
    "id": "VR-Aaron-2020",
    "playerName": "VR Aaron",
    "season": 2020,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 10,
    "wickets": 0,
    "economy": 10.67
  },
  {
    "id": "NS-Naik-2020",
    "playerName": "NS Naik",
    "season": 2020,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Mujeeb-Ur-Rahman-2020",
    "playerName": "Mujeeb Ur Rahman",
    "season": 2020,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 10.16
  },
  {
    "id": "PWH-de-Silva-2021",
    "playerName": "PWH de Silva",
    "season": 2021,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 10
  },
  {
    "id": "TH-David-2021",
    "playerName": "TH David",
    "season": 2021,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NM-Coulter-Nile-2022",
    "playerName": "NM Coulter-Nile",
    "season": 2022,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 14.7
  },
  {
    "id": "Mohit-Rathee-2023",
    "playerName": "Mohit Rathee",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 14.5
  },
  {
    "id": "Abdul-Basith-2023",
    "playerName": "Abdul Basith",
    "season": 2023,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SZ-Mulani-2024",
    "playerName": "SZ Mulani",
    "season": 2024,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 10.36
  },
  {
    "id": "MJ-Suthar-2024",
    "playerName": "MJ Suthar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "MS-Bhandage-2025",
    "playerName": "MS Bhandage",
    "season": 2025,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "D-Ferreira-2025",
    "playerName": "D Ferreira",
    "season": 2025,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "S-Anirudha-2008",
    "playerName": "S Anirudha",
    "season": 2008,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 12.5,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "T-Kohli-2009",
    "playerName": "T Kohli",
    "season": 2009,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 25,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KV-Sharma-2009",
    "playerName": "KV Sharma",
    "season": 2009,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "NJ-Rimmington-2011",
    "playerName": "NJ Rimmington",
    "season": 2011,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 6.67
  },
  {
    "id": "AA-Chavan-2011",
    "playerName": "AA Chavan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 33.3,
    "wickets": 0,
    "economy": 6.2
  },
  {
    "id": "AL-Menaria-2013",
    "playerName": "AL Menaria",
    "season": 2013,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "K-Upadhyay-2013",
    "playerName": "K Upadhyay",
    "season": 2013,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 100,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "DW-Steyn-2016",
    "playerName": "DW Steyn",
    "season": 2016,
    "role": "FINISHER",
    "runs": 1,
    "strikeRate": 50,
    "wickets": 0,
    "economy": 7.85
  },
  {
    "id": "AD-Nath-2017",
    "playerName": "AD Nath",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "PJ-Sangwan-2018",
    "playerName": "PJ Sangwan",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10
  },
  {
    "id": "RK-Bhui-2018",
    "playerName": "RK Bhui",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "JL-Denly-2019",
    "playerName": "JL Denly",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SW-Billings-2019",
    "playerName": "SW Billings",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MR-Marsh-2020",
    "playerName": "MR Marsh",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "DR-Sams-2020",
    "playerName": "DR Sams",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.88
  },
  {
    "id": "SP-Goswami-2020",
    "playerName": "SP Goswami",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "BA-Stokes-2021",
    "playerName": "BA Stokes",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "KL-Nagarkoti-2021",
    "playerName": "KL Nagarkoti",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.5
  },
  {
    "id": "SN-Khan-2021",
    "playerName": "SN Khan",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "K-Yadav-2021",
    "playerName": "K Yadav",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.5
  },
  {
    "id": "Anuj-Rawat-2021",
    "playerName": "Anuj Rawat",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Sanjay-Yadav-2022",
    "playerName": "R Sanjay Yadav",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.86
  },
  {
    "id": "R-Shepherd-2023",
    "playerName": "R Shepherd",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "KS-Rathore-2025",
    "playerName": "KS Rathore",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MJ-Owen-2025",
    "playerName": "MJ Owen",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "U-Kaul-2008",
    "playerName": "U Kaul",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Abdur-Razzak-2008",
    "playerName": "Abdur Razzak",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.43
  },
  {
    "id": "A-Mukund-2008",
    "playerName": "A Mukund",
    "season": 2008,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "TM-Srivastava-2009",
    "playerName": "TM Srivastava",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "L-Ronchi-2009",
    "playerName": "L Ronchi",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AG-Paunikar-2010",
    "playerName": "AG Paunikar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Joginder-Sharma-2011",
    "playerName": "Joginder Sharma",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.2
  },
  {
    "id": "L-Ablish-2011",
    "playerName": "L Ablish",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "MJ-Lumb-2011",
    "playerName": "MJ Lumb",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "SA-Yadav-2012",
    "playerName": "SA Yadav",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "RR-Bhatkal-2012",
    "playerName": "RR Bhatkal",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 17.5
  },
  {
    "id": "DJ-Jacobs-2012",
    "playerName": "DJ Jacobs",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "AC-Blizzard-2012",
    "playerName": "AC Blizzard",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "Sunny-Gupta-2012",
    "playerName": "Sunny Gupta",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 14.84
  },
  {
    "id": "S-Anirudha-2013",
    "playerName": "S Anirudha",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "R-Bhatia-2015",
    "playerName": "R Bhatia",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.4
  },
  {
    "id": "Swapnil-Singh-2016",
    "playerName": "Swapnil Singh",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.67
  },
  {
    "id": "UBT-Chand-2016",
    "playerName": "UBT Chand",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 0
  },
  {
    "id": "MS-Gony-2017",
    "playerName": "MS Gony",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.8
  },
  {
    "id": "S-Kaushik-2017",
    "playerName": "S Kaushik",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.62
  },
  {
    "id": "SB-Jakati-2017",
    "playerName": "SB Jakati",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.75
  },
  {
    "id": "Tejas-Baroka-2017",
    "playerName": "Tejas Baroka",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.43
  },
  {
    "id": "Mustafizur-Rahman-2017",
    "playerName": "Mustafizur Rahman",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "BB-Sran-2017",
    "playerName": "BB Sran",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 13.38
  },
  {
    "id": "J-Yadav-2017",
    "playerName": "J Yadav",
    "season": 2017,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 6.97
  },
  {
    "id": "CJ-Jordan-2018",
    "playerName": "CJ Jordan",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.4
  },
  {
    "id": "Ankit-Sharma-2018",
    "playerName": "Ankit Sharma",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11
  },
  {
    "id": "CJ-Dala-2018",
    "playerName": "CJ Dala",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.74
  },
  {
    "id": "KK-Ahmed-2018",
    "playerName": "KK Ahmed",
    "season": 2018,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.32
  },
  {
    "id": "S-Midhun-2019",
    "playerName": "S Midhun",
    "season": 2019,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 13.38
  },
  {
    "id": "S-Sandeep-Warrier-2020",
    "playerName": "S Sandeep Warrier",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.71
  },
  {
    "id": "Harpreet-Brar-2020",
    "playerName": "Harpreet Brar",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.84
  },
  {
    "id": "CJ-Green-2020",
    "playerName": "CJ Green",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.47
  },
  {
    "id": "I-Sharma-2020",
    "playerName": "I Sharma",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 7.8
  },
  {
    "id": "Avesh-Khan-2020",
    "playerName": "Avesh Khan",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.08
  },
  {
    "id": "Monu-Kumar-2020",
    "playerName": "Monu Kumar",
    "season": 2020,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 7.5
  },
  {
    "id": "Jalaj-S-Saxena-2021",
    "playerName": "Jalaj S Saxena",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "DS-Kulkarni-2021",
    "playerName": "DS Kulkarni",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11.08
  },
  {
    "id": "Akash-Singh-2021",
    "playerName": "Akash Singh",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.75
  },
  {
    "id": "M-Markande-2021",
    "playerName": "M Markande",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.67
  },
  {
    "id": "S-Sandeep-Warrier-2021",
    "playerName": "S Sandeep Warrier",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 7.5
  },
  {
    "id": "AU-Rashid-2021",
    "playerName": "AU Rashid",
    "season": 2021,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11.67
  },
  {
    "id": "AF-Milne-2022",
    "playerName": "AF Milne",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 7.6
  },
  {
    "id": "KL-Nagarkoti-2022",
    "playerName": "KL Nagarkoti",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 13.38
  },
  {
    "id": "S-Kaul-2022",
    "playerName": "S Kaul",
    "season": 2022,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.75
  },
  {
    "id": "NA-Saini-2023",
    "playerName": "NA Saini",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 14
  },
  {
    "id": "M-Ashwin-2023",
    "playerName": "M Ashwin",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.72
  },
  {
    "id": "D-Pretorius-2023",
    "playerName": "D Pretorius",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 6.21
  },
  {
    "id": "KR-Sen-2023",
    "playerName": "KR Sen",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.16
  },
  {
    "id": "J-Yadav-2023",
    "playerName": "J Yadav",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 6.5
  },
  {
    "id": "Gurnoor-Brar-2023",
    "playerName": "Gurnoor Brar",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "R-Goyal-2023",
    "playerName": "R Goyal",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.5
  },
  {
    "id": "OC-McCoy-2023",
    "playerName": "OC McCoy",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11.14
  },
  {
    "id": "Nithish-Kumar-Reddy-2023",
    "playerName": "Nithish Kumar Reddy",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.45
  },
  {
    "id": "H-Sharma-2023",
    "playerName": "H Sharma",
    "season": 2023,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11
  },
  {
    "id": "Suyash-Sharma-2024",
    "playerName": "Suyash Sharma",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.24
  },
  {
    "id": "Umran-Malik-2024",
    "playerName": "Umran Malik",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.86
  },
  {
    "id": "Mukesh-Choudhary-2024",
    "playerName": "Mukesh Choudhary",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 23.14
  },
  {
    "id": "H-Sharma-2024",
    "playerName": "H Sharma",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 14.5
  },
  {
    "id": "S-Joseph-2024",
    "playerName": "S Joseph",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.2
  },
  {
    "id": "PVD-Chameera-2024",
    "playerName": "PVD Chameera",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 15.47
  },
  {
    "id": "K-Gowtham-2024",
    "playerName": "K Gowtham",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 13.85
  },
  {
    "id": "Kartik-Tyagi-2024",
    "playerName": "Kartik Tyagi",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "Arjun-Tendulkar-2024",
    "playerName": "Arjun Tendulkar",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.8
  },
  {
    "id": "R-Dhawan-2024",
    "playerName": "R Dhawan",
    "season": 2024,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.32
  },
  {
    "id": "RD-Chahar-2025",
    "playerName": "RD Chahar",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "C-Sakariya-2025",
    "playerName": "C Sakariya",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12.32
  },
  {
    "id": "Karim-Janat-2025",
    "playerName": "Karim Janat",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 30
  },
  {
    "id": "RJW-Topley-2025",
    "playerName": "RJW Topley",
    "season": 2025,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 13.33
  },
  {
    "id": "RR-Bose-2009",
    "playerName": "RR Bose",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "A-Mithun-2009",
    "playerName": "A Mithun",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9.33
  },
  {
    "id": "RA-Shaikh-2009",
    "playerName": "RA Shaikh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11
  },
  {
    "id": "Jaskaran-Singh-2009",
    "playerName": "Jaskaran Singh",
    "season": 2009,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.11
  },
  {
    "id": "NLTC-Perera-2010",
    "playerName": "NLTC Perera",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 19
  },
  {
    "id": "C-Ganapathy-2010",
    "playerName": "C Ganapathy",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 13
  },
  {
    "id": "MB-Parmar-2010",
    "playerName": "MB Parmar",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.42
  },
  {
    "id": "VRV-Singh-2010",
    "playerName": "VRV Singh",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11.71
  },
  {
    "id": "B-Akhil-2010",
    "playerName": "B Akhil",
    "season": 2010,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 6
  },
  {
    "id": "S-Ladda-2011",
    "playerName": "S Ladda",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.08
  },
  {
    "id": "VS-Malik-2011",
    "playerName": "VS Malik",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 7
  },
  {
    "id": "Kamran-Khan-2011",
    "playerName": "Kamran Khan",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 15.67
  },
  {
    "id": "Pankaj-Singh-2011",
    "playerName": "Pankaj Singh",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "P-Prasanth-2011",
    "playerName": "P Prasanth",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 18
  },
  {
    "id": "RW-Price-2011",
    "playerName": "RW Price",
    "season": 2011,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11
  },
  {
    "id": "AN-Ahmed-2012",
    "playerName": "AN Ahmed",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 7.85
  },
  {
    "id": "JD-Unadkat-2012",
    "playerName": "JD Unadkat",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.67
  },
  {
    "id": "LJ-Wright-2012",
    "playerName": "LJ Wright",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 12
  },
  {
    "id": "R-Shukla-2012",
    "playerName": "R Shukla",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.11
  },
  {
    "id": "A-Mithun-2012",
    "playerName": "A Mithun",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.74
  },
  {
    "id": "RR-Powar-2012",
    "playerName": "RR Powar",
    "season": 2012,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.67
  },
  {
    "id": "JDP-Oram-2013",
    "playerName": "JDP Oram",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 6.46
  },
  {
    "id": "S-Badree-2013",
    "playerName": "S Badree",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.4
  },
  {
    "id": "Ankit-Sharma-2013",
    "playerName": "Ankit Sharma",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.5
  },
  {
    "id": "YS-Chahal-2013",
    "playerName": "YS Chahal",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.75
  },
  {
    "id": "GB-Hogg-2013",
    "playerName": "GB Hogg",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.86
  },
  {
    "id": "P-Negi-2013",
    "playerName": "P Negi",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 6.46
  },
  {
    "id": "MG-Neser-2013",
    "playerName": "MG Neser",
    "season": 2013,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 14.88
  },
  {
    "id": "Iqbal-Abdulla-2014",
    "playerName": "Iqbal Abdulla",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 9
  },
  {
    "id": "V-Shankar-2014",
    "playerName": "V Shankar",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 19
  },
  {
    "id": "SB-Jakati-2014",
    "playerName": "SB Jakati",
    "season": 2014,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11.18
  },
  {
    "id": "PP-Ojha-2015",
    "playerName": "PP Ojha",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11.5
  },
  {
    "id": "JD-Unadkat-2015",
    "playerName": "JD Unadkat",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10
  },
  {
    "id": "P-Suyal-2015",
    "playerName": "P Suyal",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 8.69
  },
  {
    "id": "AB-Dinda-2015",
    "playerName": "AB Dinda",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11.45
  },
  {
    "id": "BB-Sran-2015",
    "playerName": "BB Sran",
    "season": 2015,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.8
  },
  {
    "id": "PJ-Sangwan-2016",
    "playerName": "PJ Sangwan",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 11.76
  },
  {
    "id": "S-Ladda-2016",
    "playerName": "S Ladda",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 10.5
  },
  {
    "id": "J-Suchith-2016",
    "playerName": "J Suchith",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 13.29
  },
  {
    "id": "JD-Unadkat-2016",
    "playerName": "JD Unadkat",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 15.47
  },
  {
    "id": "DL-Chahar-2016",
    "playerName": "DL Chahar",
    "season": 2016,
    "role": "FINISHER",
    "runs": 0,
    "strikeRate": 0,
    "wickets": 0,
    "economy": 7.64
  }
];
export const playerSeasonById = new Map(
  playerSeasons.map((player) => [player.id, player])
);

export const roleLabels: Record<PlayerRole, string> = {
  TOP_ORDER: "Top Order",
  MIDDLE_ORDER: "Middle Order",
  FINISHER: "Finisher",
  BOWLER: "Bowler",
};

export const roleSlotRules: Record<
  PlayerRole,
  { start: number; end: number; label: string }
> = {
  TOP_ORDER: {
    start: 1,
    end: 3,
    label: "1-3",
  },
  MIDDLE_ORDER: {
    start: 4,
    end: 7,
    label: "4-7",
  },
  FINISHER: {
    start: 5,
    end: 8,
    label: "5-8",
  },
  BOWLER: {
    start: 7,
    end: 11,
    label: "7-11",
  },
};

export const squadGroups = [
  {
    key: "all-players",
    team: "IPL Legends",
    season: 2026,
    players: playerSeasons,
  },
];