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
let errorCount = 0;

for (const file of files) {
  processed++;

  if (processed % 100 === 0) {
    console.log(`Processed ${processed}/${files.length}`);
  }

  try {
    const match = JSON.parse(
      fs.readFileSync(path.join(DATA_DIR, file), "utf8")
    );

    const season =
      match.info?.dates?.[0]?.substring(0, 4) || "unknown";

    const innings = match.innings || [];

    for (const inning of innings) {
      const overs = inning.overs || [];

      for (const over of overs) {
        const deliveries = over.deliveries || [];

        for (const ball of deliveries) {
          const batter = ball.batter;
          const bowler = ball.bowler;

          if (batter) {
            const key = `${season}|${batter}`;

            if (!batting[key]) {
              batting[key] = {
                player: batter,
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
                player: bowler,
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
    errorCount++;

    console.log("\n=================================");
    console.log("FILE:", file);
    console.log("ERROR:", err.message);
    console.log("=================================\n");

    if (errorCount >= 10) {
      console.log("Stopped after 10 errors.");
      process.exit(1);
    }
  }
}

console.log("\n=================================");
console.log("DONE");
console.log("=================================");

console.log("Batting records:", Object.keys(batting).length);
console.log("Bowling records:", Object.keys(bowling).length);

const topBatters = Object.values(batting)
  .sort((a, b) => b.runs - a.runs)
  .slice(0, 20);

console.log("\nTOP BATTERS");
console.log("-----------");

for (const p of topBatters) {
  console.log(`${p.player} (${p.season}) - ${p.runs} runs`);
}