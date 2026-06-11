export type TeamRole =
  | "WK"
  | "BAT"
  | "AR"
  | "BOWL";

export const playerRoles: Record<string, TeamRole> = {
  "MS Dhoni": "WK",
  "AB de Villiers": "WK",
  "KL Rahul": "WK",
  "RR Pant": "WK",
  "KD Karthik": "WK",

  "V Kohli": "BAT",
  "RG Sharma": "BAT",
  "DA Warner": "BAT",
  "SK Raina": "BAT",
  "S Gill": "BAT",
  "R Gaikwad": "BAT",

  "RA Jadeja": "AR",
  "SR Watson": "AR",
  "AD Russell": "AR",
  "KA Pollard": "AR",
  "HH Pandya": "AR",

  "JJ Bumrah": "BOWL",
  "SL Malinga": "BOWL",
  "YS Chahal": "BOWL",
  "R Ashwin": "BOWL",
  "B Kumar": "BOWL"
};