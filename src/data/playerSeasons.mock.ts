export type PlayerRole = "TOP_ORDER" | "MIDDLE_ORDER" | "FINISHER" | "BOWLER";

export type IplTeam = "CSK" | "MI" | "RCB" | "KKR" | "SRH";

export type PlayerSeason = {
  economy: number;
  id: string;
  playerName: string;
  role: PlayerRole;
  runs: number;
  season: number;
  strikeRate: number;
  team: IplTeam;
  wickets: number;
};

type SquadSeed = {
  players: Array<{
    playerName: string;
    role: PlayerRole;
  }>;
  season: number;
  team: IplTeam;
};

export const roleLabels: Record<PlayerRole, string> = {
  TOP_ORDER: "Top Order",
  MIDDLE_ORDER: "Middle Order",
  FINISHER: "Finisher",
  BOWLER: "Bowler",
};

export const roleSlotRules: Record<
  PlayerRole,
  { end: number; label: string; start: number }
> = {
  TOP_ORDER: { end: 3, label: "1-3", start: 1 },
  MIDDLE_ORDER: { end: 7, label: "4-7", start: 4 },
  FINISHER: { end: 8, label: "5-8", start: 5 },
  BOWLER: { end: 11, label: "7-11", start: 7 },
};

const squadSeeds: SquadSeed[] = [
  {
    team: "CSK",
    season: 2018,
    players: [
      { playerName: "Shane Watson", role: "TOP_ORDER" },
      { playerName: "Ambati Rayudu", role: "TOP_ORDER" },
      { playerName: "MS Dhoni", role: "FINISHER" },
      { playerName: "Ravindra Jadeja", role: "FINISHER" },
      { playerName: "Deepak Chahar", role: "BOWLER" },
    ],
  },
  {
    team: "CSK",
    season: 2019,
    players: [
      { playerName: "Faf du Plessis", role: "TOP_ORDER" },
      { playerName: "Suresh Raina", role: "MIDDLE_ORDER" },
      { playerName: "MS Dhoni", role: "FINISHER" },
      { playerName: "Dwayne Bravo", role: "FINISHER" },
      { playerName: "Imran Tahir", role: "BOWLER" },
    ],
  },
  {
    team: "CSK",
    season: 2020,
    players: [
      { playerName: "Ruturaj Gaikwad", role: "TOP_ORDER" },
      { playerName: "Faf du Plessis", role: "TOP_ORDER" },
      { playerName: "Sam Curran", role: "FINISHER" },
      { playerName: "Ravindra Jadeja", role: "FINISHER" },
      { playerName: "Shardul Thakur", role: "BOWLER" },
    ],
  },
  {
    team: "CSK",
    season: 2021,
    players: [
      { playerName: "Ruturaj Gaikwad", role: "TOP_ORDER" },
      { playerName: "Moeen Ali", role: "MIDDLE_ORDER" },
      { playerName: "Ambati Rayudu", role: "MIDDLE_ORDER" },
      { playerName: "Ravindra Jadeja", role: "FINISHER" },
      { playerName: "Deepak Chahar", role: "BOWLER" },
    ],
  },
  {
    team: "CSK",
    season: 2022,
    players: [
      { playerName: "Devon Conway", role: "TOP_ORDER" },
      { playerName: "Shivam Dube", role: "MIDDLE_ORDER" },
      { playerName: "MS Dhoni", role: "FINISHER" },
      { playerName: "Dwayne Bravo", role: "BOWLER" },
      { playerName: "Maheesh Theekshana", role: "BOWLER" },
    ],
  },
  {
    team: "MI",
    season: 2018,
    players: [
      { playerName: "Rohit Sharma", role: "TOP_ORDER" },
      { playerName: "Suryakumar Yadav", role: "TOP_ORDER" },
      { playerName: "Ishan Kishan", role: "MIDDLE_ORDER" },
      { playerName: "Hardik Pandya", role: "FINISHER" },
      { playerName: "Jasprit Bumrah", role: "BOWLER" },
    ],
  },
  {
    team: "MI",
    season: 2019,
    players: [
      { playerName: "Quinton de Kock", role: "TOP_ORDER" },
      { playerName: "Rohit Sharma", role: "TOP_ORDER" },
      { playerName: "Kieron Pollard", role: "FINISHER" },
      { playerName: "Hardik Pandya", role: "FINISHER" },
      { playerName: "Lasith Malinga", role: "BOWLER" },
    ],
  },
  {
    team: "MI",
    season: 2020,
    players: [
      { playerName: "Quinton de Kock", role: "TOP_ORDER" },
      { playerName: "Suryakumar Yadav", role: "TOP_ORDER" },
      { playerName: "Ishan Kishan", role: "MIDDLE_ORDER" },
      { playerName: "Kieron Pollard", role: "FINISHER" },
      { playerName: "Jasprit Bumrah", role: "BOWLER" },
    ],
  },
  {
    team: "MI",
    season: 2021,
    players: [
      { playerName: "Rohit Sharma", role: "TOP_ORDER" },
      { playerName: "Suryakumar Yadav", role: "TOP_ORDER" },
      { playerName: "Ishan Kishan", role: "MIDDLE_ORDER" },
      { playerName: "Krunal Pandya", role: "FINISHER" },
      { playerName: "Trent Boult", role: "BOWLER" },
    ],
  },
  {
    team: "MI",
    season: 2022,
    players: [
      { playerName: "Ishan Kishan", role: "TOP_ORDER" },
      { playerName: "Tilak Varma", role: "MIDDLE_ORDER" },
      { playerName: "Suryakumar Yadav", role: "MIDDLE_ORDER" },
      { playerName: "Tim David", role: "FINISHER" },
      { playerName: "Jasprit Bumrah", role: "BOWLER" },
    ],
  },
  {
    team: "RCB",
    season: 2018,
    players: [
      { playerName: "Virat Kohli", role: "TOP_ORDER" },
      { playerName: "Parthiv Patel", role: "TOP_ORDER" },
      { playerName: "AB de Villiers", role: "MIDDLE_ORDER" },
      { playerName: "Moeen Ali", role: "FINISHER" },
      { playerName: "Yuzvendra Chahal", role: "BOWLER" },
    ],
  },
  {
    team: "RCB",
    season: 2019,
    players: [
      { playerName: "Virat Kohli", role: "TOP_ORDER" },
      { playerName: "Parthiv Patel", role: "TOP_ORDER" },
      { playerName: "AB de Villiers", role: "MIDDLE_ORDER" },
      { playerName: "Marcus Stoinis", role: "FINISHER" },
      { playerName: "Yuzvendra Chahal", role: "BOWLER" },
    ],
  },
  {
    team: "RCB",
    season: 2020,
    players: [
      { playerName: "Devdutt Padikkal", role: "TOP_ORDER" },
      { playerName: "Virat Kohli", role: "TOP_ORDER" },
      { playerName: "AB de Villiers", role: "MIDDLE_ORDER" },
      { playerName: "Shivam Dube", role: "FINISHER" },
      { playerName: "Yuzvendra Chahal", role: "BOWLER" },
    ],
  },
  {
    team: "RCB",
    season: 2021,
    players: [
      { playerName: "Devdutt Padikkal", role: "TOP_ORDER" },
      { playerName: "Virat Kohli", role: "TOP_ORDER" },
      { playerName: "Glenn Maxwell", role: "MIDDLE_ORDER" },
      { playerName: "AB de Villiers", role: "FINISHER" },
      { playerName: "Harshal Patel", role: "BOWLER" },
    ],
  },
  {
    team: "RCB",
    season: 2022,
    players: [
      { playerName: "Faf du Plessis", role: "TOP_ORDER" },
      { playerName: "Virat Kohli", role: "TOP_ORDER" },
      { playerName: "Glenn Maxwell", role: "MIDDLE_ORDER" },
      { playerName: "Dinesh Karthik", role: "FINISHER" },
      { playerName: "Wanindu Hasaranga", role: "BOWLER" },
    ],
  },
  {
    team: "KKR",
    season: 2018,
    players: [
      { playerName: "Sunil Narine", role: "TOP_ORDER" },
      { playerName: "Chris Lynn", role: "TOP_ORDER" },
      { playerName: "Robin Uthappa", role: "MIDDLE_ORDER" },
      { playerName: "Andre Russell", role: "FINISHER" },
      { playerName: "Kuldeep Yadav", role: "BOWLER" },
    ],
  },
  {
    team: "KKR",
    season: 2019,
    players: [
      { playerName: "Chris Lynn", role: "TOP_ORDER" },
      { playerName: "Shubman Gill", role: "TOP_ORDER" },
      { playerName: "Nitish Rana", role: "MIDDLE_ORDER" },
      { playerName: "Andre Russell", role: "FINISHER" },
      { playerName: "Piyush Chawla", role: "BOWLER" },
    ],
  },
  {
    team: "KKR",
    season: 2020,
    players: [
      { playerName: "Shubman Gill", role: "TOP_ORDER" },
      { playerName: "Eoin Morgan", role: "MIDDLE_ORDER" },
      { playerName: "Nitish Rana", role: "MIDDLE_ORDER" },
      { playerName: "Andre Russell", role: "FINISHER" },
      { playerName: "Varun Chakravarthy", role: "BOWLER" },
    ],
  },
  {
    team: "KKR",
    season: 2021,
    players: [
      { playerName: "Venkatesh Iyer", role: "TOP_ORDER" },
      { playerName: "Shubman Gill", role: "TOP_ORDER" },
      { playerName: "Rahul Tripathi", role: "MIDDLE_ORDER" },
      { playerName: "Dinesh Karthik", role: "FINISHER" },
      { playerName: "Varun Chakravarthy", role: "BOWLER" },
    ],
  },
  {
    team: "KKR",
    season: 2022,
    players: [
      { playerName: "Venkatesh Iyer", role: "TOP_ORDER" },
      { playerName: "Shreyas Iyer", role: "MIDDLE_ORDER" },
      { playerName: "Nitish Rana", role: "MIDDLE_ORDER" },
      { playerName: "Andre Russell", role: "FINISHER" },
      { playerName: "Umesh Yadav", role: "BOWLER" },
    ],
  },
  {
    team: "SRH",
    season: 2018,
    players: [
      { playerName: "Shikhar Dhawan", role: "TOP_ORDER" },
      { playerName: "Kane Williamson", role: "TOP_ORDER" },
      { playerName: "Manish Pandey", role: "MIDDLE_ORDER" },
      { playerName: "Yusuf Pathan", role: "FINISHER" },
      { playerName: "Rashid Khan", role: "BOWLER" },
    ],
  },
  {
    team: "SRH",
    season: 2019,
    players: [
      { playerName: "David Warner", role: "TOP_ORDER" },
      { playerName: "Jonny Bairstow", role: "TOP_ORDER" },
      { playerName: "Manish Pandey", role: "MIDDLE_ORDER" },
      { playerName: "Vijay Shankar", role: "FINISHER" },
      { playerName: "Rashid Khan", role: "BOWLER" },
    ],
  },
  {
    team: "SRH",
    season: 2020,
    players: [
      { playerName: "David Warner", role: "TOP_ORDER" },
      { playerName: "Jonny Bairstow", role: "TOP_ORDER" },
      { playerName: "Kane Williamson", role: "MIDDLE_ORDER" },
      { playerName: "Abdul Samad", role: "FINISHER" },
      { playerName: "Rashid Khan", role: "BOWLER" },
    ],
  },
  {
    team: "SRH",
    season: 2021,
    players: [
      { playerName: "David Warner", role: "TOP_ORDER" },
      { playerName: "Kane Williamson", role: "TOP_ORDER" },
      { playerName: "Manish Pandey", role: "MIDDLE_ORDER" },
      { playerName: "Abdul Samad", role: "FINISHER" },
      { playerName: "Rashid Khan", role: "BOWLER" },
    ],
  },
  {
    team: "SRH",
    season: 2022,
    players: [
      { playerName: "Abhishek Sharma", role: "TOP_ORDER" },
      { playerName: "Aiden Markram", role: "MIDDLE_ORDER" },
      { playerName: "Rahul Tripathi", role: "MIDDLE_ORDER" },
      { playerName: "Nicholas Pooran", role: "FINISHER" },
      { playerName: "Umran Malik", role: "BOWLER" },
    ],
  },
];

const roleStatBase: Record<
  PlayerRole,
  { economy: number; runs: number; strikeRate: number; wickets: number }
> = {
  TOP_ORDER: { economy: 0, runs: 440, strikeRate: 134, wickets: 0 },
  MIDDLE_ORDER: { economy: 0, runs: 360, strikeRate: 139, wickets: 2 },
  FINISHER: { economy: 8.2, runs: 280, strikeRate: 154, wickets: 8 },
  BOWLER: { economy: 7.4, runs: 55, strikeRate: 112, wickets: 18 },
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildStats(
  role: PlayerRole,
  season: number,
  squadIndex: number,
  playerIndex: number,
) {
  const base = roleStatBase[role];
  const variance = (season - 2018) * 11 + squadIndex * 5 + playerIndex * 7;
  const bowlingEconomy =
    role === "TOP_ORDER" || role === "MIDDLE_ORDER"
      ? 0
      : Number((base.economy + (((variance * 3) % 18) - 6) / 10).toFixed(2));

  return {
    economy: bowlingEconomy,
    runs: Math.max(12, base.runs + ((variance * 37) % 260) - 80),
    strikeRate: Number(
      (base.strikeRate + ((variance * 5) % 28) - 9).toFixed(1),
    ),
    wickets: Math.max(0, base.wickets + ((variance * 2) % 15) - 4),
  };
}

export const playerSeasons: PlayerSeason[] = squadSeeds.flatMap(
  (squad, squadIndex) =>
    squad.players.map((player, playerIndex) => ({
      id: `${squad.team}-${squad.season}-${slugify(player.playerName)}`,
      playerName: player.playerName,
      role: player.role,
      season: squad.season,
      team: squad.team,
      ...buildStats(player.role, squad.season, squadIndex, playerIndex),
    })),
);

export const playerSeasonById = new Map(
  playerSeasons.map((player) => [player.id, player]),
);

export const squadGroups = squadSeeds.map((squad) => ({
  key: `${squad.team}-${squad.season}`,
  players: playerSeasons.filter(
    (player) => player.team === squad.team && player.season === squad.season,
  ),
  season: squad.season,
  team: squad.team,
}));
