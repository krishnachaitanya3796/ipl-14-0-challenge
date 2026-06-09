import { PlayerSeason } from "@/data/playerSeasons";

export type TeamSeason = {
  key: string;
  team: string;
  season: number;
  players: PlayerSeason[];
};