const fs = require("fs");
const path = require("path");

const DATA_DIR =
  "/Users/krishna/Library/Mobile Documents/com~apple~CloudDocs/14-0/ipl_male_json";

const batting = {};
const bowling = {};
const squads = {};

const files = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.endsWith(".json"));

console.log(`Found ${files.length} files`);
let processed = 0;

for (const file of files) {
  processed++;

  if (processed % 100 === 0) {
    console.log(`Processed ${processed}/${files.length}`);
  }

  try {
    const match = JSON.parse(
      fs.readFileSync(path.join(DATA_DIR, file), "utf8")
    );

    const season = Number(
      match.info?.dates?.[0]?.substring(0, 4)
    );

    if (!season || season > 2025) {
      continue;
    }

    const teams = match.info?.players || {};

    for (const [teamName, players] of Object.entries(teams)) {
      const squadKey = `${teamName}-${season}`;

      if (!squads[squadKey]) {
        squads[squadKey] = {
          key: squadKey,
          team: teamName,
          season,
          players: new Set(),
        };
      }

      players.forEach((player) => {
        squads[squadKey].players.add(player);
      });
    }

    const innings = match.innings || [];

    for (const inning of innings) {

      const battingTeam = inning.team;

      const bowlingTeam =
        match.info.teams.find(
          (t) => t !== battingTeam
        );

      for (const over of inning.overs || []) {
        for (const ball of over.deliveries || []) {

          const batter = ball.batter;
          const bowler = ball.bowler;

          if (batter) {
            const key =
              `${season}|${battingTeam}|${batter}`;

            if (!batting[key]) {
              batting[key] = {
                playerName: batter,
                team: battingTeam,
                season,
                runs: 0,
                balls: 0,
              };
            }

            batting[key].runs +=
              ball.runs?.batter || 0;

            batting[key].balls += 1;
          }

          if (bowler) {
            const key =
              `${season}|${bowlingTeam}|${bowler}`;

            if (!bowling[key]) {
              bowling[key] = {
                playerName: bowler,
                team: bowlingTeam,
                season,
                wickets: 0,
                runsConceded: 0,
                balls: 0,
              };
            }

            bowling[key].balls += 1;
            bowling[key].runsConceded +=
              ball.runs?.total || 0;

            if (ball.wickets) {
              bowling[key].wickets +=
                ball.wickets.length;
            }
          }
        }
      }
    }
  } catch (err) {}
}
const playerMap = new Map();

for (const batter of Object.values(batting)) {
  const strikeRate =
    batter.balls > 0
      ? Number(
          ((batter.runs * 100) / batter.balls).toFixed(1)
        )
      : 0;

  const key =
    `${batter.playerName}-${batter.team}-${batter.season}`;

  playerMap.set(key, {
    id: key.replace(/[^a-zA-Z0-9]/g, "-"),
    playerName: batter.playerName,
    team: batter.team,
    season: batter.season,
    runs: batter.runs,
    strikeRate,
    wickets: 0,
    economy: 0,
  });
}

for (const bowler of Object.values(bowling)) {
  const key =
    `${bowler.playerName}-${bowler.team}-${bowler.season}`;

  const economy =
    bowler.balls > 0
      ? Number(
          (
            bowler.runsConceded /
            (bowler.balls / 6)
          ).toFixed(2)
        )
      : 0;

  if (!playerMap.has(key)) {
    playerMap.set(key, {
      id: key.replace(/[^a-zA-Z0-9]/g, "-"),
      playerName: bowler.playerName,
      team: bowler.team,
      season: bowler.season,
      runs: 0,
      strikeRate: 0,
      wickets: bowler.wickets,
      economy,
    });
  } else {
    const existing = playerMap.get(key);

    existing.wickets = bowler.wickets;
    existing.economy = economy;
  }
}
const players = [...playerMap.values()];

const squadGroups = Object.values(squads)
  .map((squad) => {

    const squadPlayers =
      players.filter(
        (player) =>
          player.team === squad.team &&
          player.season === squad.season &&
          squad.players.has(player.playerName)
      );

    return {
      key: `${squad.team}-${squad.season}`
        .replace(/[^a-zA-Z0-9]/g, "-"),
      team: squad.team,
      season: squad.season,
      players: squadPlayers,
    };
  })
  .filter((squad) => squad.players.length >= 11);

console.log("");
console.log(
  "TEAM SEASONS:",
  squadGroups.length
);

console.log("");

console.log(
  squadGroups
    .slice(0, 10)
    .map(
      (s) =>
        `${s.team} (${s.season}) : ${s.players.length}`
    )
    .join("\n")
);
console.log(JSON.stringify(squadGroups[0], null, 2));
const output = `
export const squadGroups = ${JSON.stringify(
  squadGroups,
  null,
  2
)};
`;

fs.writeFileSync(
  path.join(
    process.cwd(),
    "src/data/teamSeasons.ts"
  ),
  output
);

console.log("");
console.log("Generated src/data/teamSeasons.ts");