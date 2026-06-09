const fs = require("fs");
const path = require("path");

const DATA_DIR =
  "/Users/krishna/Library/Mobile Documents/com~apple~CloudDocs/14-0/ipl_male_json";

const file = "1082591.json";

const match = JSON.parse(
  fs.readFileSync(path.join(DATA_DIR, file), "utf8")
);

console.log("Teams:");
console.log(match.info.teams);

console.log("");
console.log("Players object:");

console.log(
  Object.keys(match.info.players || {})
);

console.log("");

for (const team of Object.keys(match.info.players || {})) {
  console.log(team);
  console.log(
    match.info.players[team].slice(0, 5)
  );
  console.log("");
}