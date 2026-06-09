const fs = require("fs");
const path = require("path");

const DATA_DIR =
  "/Users/krishna/Library/Mobile Documents/com~apple~CloudDocs/14-0/ipl_male_json";

const seasons = new Set();

const files = fs
  .readdirSync(DATA_DIR)
  .filter((f) => f.endsWith(".json"));

for (const file of files) {
  try {
    const match = JSON.parse(
      fs.readFileSync(path.join(DATA_DIR, file), "utf8")
    );

    const season = match.info?.dates?.[0]?.substring(0, 4);

    if (season) {
      seasons.add(season);
    }
  } catch (err) {}
}

console.log([...seasons].sort().join(", "));