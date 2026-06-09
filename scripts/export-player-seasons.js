const fs = require("fs");
const path = require("path");

const DATA_DIR =
  "/Users/krishna/Library/Mobile Documents/com~apple~CloudDocs/14-0/ipl_male_json";

const batting = {};
const bowling = {};

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

    const innings = match.innings || [];

    for (const inning of innings) {
      for (const over of inning.overs || []) {
        for (const ball of over.deliveries || []) {

          const batter = ball.batter;
          const bowler = ball.bowler;

          if (batter) {
            const key = `${season}|${batter}`;

            if (!batting[key]) {
              batting[key] = {
                playerName: batter,
                season,
                runs: 0,
                balls: 0,
              };
            }

            batting[key].runs += ball.runs?.batter || 0;
            batting[key].balls += 1;
          }

          if (bowler) {
            const key = `${season}|${bowler}`;

            if (!bowling[key]) {
              bowling[key] = {
                playerName: bowler,
                season,
                wickets: 0,
                runsConceded: 0,
                balls: 0,
              };
            }

            bowling[key].balls += 1;
            bowling[key].runsConceded += ball.runs?.total || 0;

            if (ball.wickets) {
              bowling[key].wickets += ball.wickets.length;
            }
          }
        }
      }
    }
  } catch (err) {
    // ignore bad files
  }
}

const playerMap = new Map();

for (const batter of Object.values(batting)) {
  const strikeRate =
    batter.balls > 0
      ? Number(((batter.runs * 100) / batter.balls).toFixed(1))
      : 0;

  playerMap.set(
    `${batter.playerName}-${batter.season}`,
    {
      playerName: batter.playerName,
      season: batter.season,
      runs: batter.runs,
      strikeRate,
      wickets: 0,
      economy: 0,
    }
  );
}

for (const bowler of Object.values(bowling)) {
  const key = `${bowler.playerName}-${bowler.season}`;

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
      playerName: bowler.playerName,
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

players.sort((a, b) => {
  const scoreA = a.runs + a.wickets * 25;
  const scoreB = b.runs + b.wickets * 25;
  return scoreB - scoreA;
});

console.log("");
console.log("PLAYER SEASONS:", players.length);
console.log("");

console.log("TOP 25");
console.log("------");

players.slice(0, 25).forEach((p) => {
  console.log(
    `${p.playerName} (${p.season}) | Runs:${p.runs} | Wkts:${p.wickets}`
  );
});