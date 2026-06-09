const fs = require("fs");
const path = require("path");

const DATA_DIR =
  "/Users/krishna/Library/Mobile Documents/com~apple~CloudDocs/14-0/ipl_male_json";

const batting = {};

const files = fs.readdirSync(DATA_DIR)
  .filter(f => f.endsWith(".json"));

for (const file of files) {
  try {
    const match = JSON.parse(
      fs.readFileSync(path.join(DATA_DIR, file), "utf8")
    );

    const season =
      Number(match.info?.dates?.[0]?.substring(0,4));

    if (!season || season > 2025) continue;

    for (const inning of match.innings || []) {
      for (const over of inning.overs || []) {
        for (const ball of over.deliveries || []) {

          const batter = ball.batter;

          if (!batter) continue;

          const key = `${season}|${batter}`;

          if (!batting[key]) {
            batting[key] = {
              player: batter,
              season,
              runs: 0
            };
          }

          batting[key].runs +=
            ball.runs?.batter || 0;
        }
      }
    }
  } catch {}
}

const top = Object.values(batting)
  .sort((a,b) => b.runs - a.runs)
  .slice(0,100);

console.table(top);