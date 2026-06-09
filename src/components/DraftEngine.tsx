"use client";

import { useEffect, useMemo, useState } from "react";
import {
  playerSeasonById,
  playerSeasons,
  roleLabels,
  roleSlotRules,
  squadGroups,
  type PlayerSeason,
  type PlayerRole,
} from "@/data/playerSeasons";

const TOTAL_PICKS = 12;
const IMPACT_INDEX = 11;
const STORAGE_KEY = "ipl-14-0-draft-state-v1";

type StoredDraft = {
  currentSquadKey: string | null;
  skipRemaining: number;
  slotIds: Array<string | null>;
};

function createEmptySlots() {
  return Array<PlayerSeason | null>(TOTAL_PICKS).fill(null);
}

function isPlayerValidForSlot(
  player: any,
  slotIndex: number,
) {
  return true;
}

function getSlotLabel(slotIndex: number) {
  return slotIndex === IMPACT_INDEX
    ? "Impact Player"
    : `Playing XI ${slotIndex + 1}`;
}

function getSlotRangeLabel(role: PlayerRole) {
  return `${roleLabels[role]} ${roleSlotRules[role].label}`;
}

function pickRandomSquadKey(
  draftedIds: Set<string>,
  currentSquadKey?: string | null,
) {
  const availableSquads = squadGroups.filter(
    (squad) =>
      squad.key !== currentSquadKey &&
      squad.players.some((player) => !draftedIds.has(player.id)),
  );
  const fallbackSquads = squadGroups.filter((squad) =>
    squad.players.some((player) => !draftedIds.has(player.id)),
  );
  const choices = availableSquads.length > 0 ? availableSquads : fallbackSquads;

  if (choices.length === 0) {
    return null;
  }

  return choices[Math.floor(Math.random() * choices.length)].key;
}

function squadHasAvailablePlayers(
  squadKey: string | null,
  draftedIds: Set<string>,
) {
  return squadGroups
    .find((squad) => squad.key === squadKey)
    ?.players.some((player) => !draftedIds.has(player.id));
}

function getActiveSquadKey(
  preferredSquadKey: string | null,
  draftedIds: Set<string>,
) {
  if (squadHasAvailablePlayers(preferredSquadKey, draftedIds)) {
    return preferredSquadKey;
  }

  return pickRandomSquadKey(draftedIds, preferredSquadKey);
}

function placePlayerInDraft(
  slots: Array<PlayerSeason | null>,
  player: PlayerSeason,
) {
  if (slots.some((slot) => slot?.id === player.id)) {
    return slots;
  }

  const nextSlots = [...slots];
  const legalSlotIndex = nextSlots.findIndex(
    (slot, index) =>
      slot === null &&
      index !== IMPACT_INDEX &&
      isPlayerValidForSlot(player, index),
  );

  if (legalSlotIndex >= 0) {
    nextSlots[legalSlotIndex] = player;
    return nextSlots;
  }

  if (nextSlots[IMPACT_INDEX] === null) {
    nextSlots[IMPACT_INDEX] = player;
    return nextSlots;
  }

  const firstEmptyIndex = nextSlots.findIndex((slot) => slot === null);

  if (firstEmptyIndex >= 0) {
    nextSlots[firstEmptyIndex] = player;
  }

  return nextSlots;
}

function moveSlot(
  slots: Array<PlayerSeason | null>,
  fromIndex: number,
  toIndex: number,
) {
  if (
    fromIndex === toIndex ||
    fromIndex < 0 ||
    toIndex < 0 ||
    fromIndex >= TOTAL_PICKS ||
    toIndex >= TOTAL_PICKS ||
    slots[fromIndex] === null
  ) {
    return slots;
  }

  const nextSlots = [...slots];
  const [movedPlayer] = nextSlots.splice(fromIndex, 1);
  nextSlots.splice(toIndex, 0, movedPlayer);

  return nextSlots;
}

function getStoredDraft() {
  try {
    const storedDraft = window.localStorage.getItem(STORAGE_KEY);

    if (!storedDraft) {
      return null;
    }

    const parsedDraft = JSON.parse(storedDraft) as Partial<StoredDraft>;

    if (!Array.isArray(parsedDraft.slotIds)) {
      return null;
    }

    return {
      currentSquadKey:
        typeof parsedDraft.currentSquadKey === "string"
          ? parsedDraft.currentSquadKey
          : null,
      skipRemaining: parsedDraft.skipRemaining === 0 ? 0 : 1,
      slotIds: parsedDraft.slotIds.slice(0, TOTAL_PICKS),
    };
  } catch {
    return null;
  }
}

function roleBadgeClass(role: PlayerRole) {
  switch (role) {
    case "TOP_ORDER":
      return "border-sky-300/40 bg-sky-300/10 text-sky-100";
    case "MIDDLE_ORDER":
      return "border-emerald-300/40 bg-emerald-300/10 text-emerald-100";
    case "FINISHER":
      return "border-amber-300/40 bg-amber-300/10 text-amber-100";
    case "BOWLER":
      return "border-rose-300/40 bg-rose-300/10 text-rose-100";
  }
}

function PlayerStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-black text-stone-100">{value}</p>
    </div>
  );
}

export function DraftEngine() {
const [currentSquadKey, setCurrentSquadKey] = useState<string | null>(null);
const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
const [hasLoadedDraft, setHasLoadedDraft] = useState(false);
const [skipRemaining, setSkipRemaining] = useState(1);

const [pendingPlayer, setPendingPlayer] =
  useState<PlayerSeason | null>(null);

const [spinLocked, setSpinLocked] =
  useState(false);
  
  const [pendingPosition, setPendingPosition] =
  useState<number | null>(null);

const [slots, setSlots] = useState<Array<PlayerSeason | null>>(
  createEmptySlots,
);

  const draftedPlayers = useMemo(
    () => slots.filter((player): player is PlayerSeason => player !== null),
    [slots],
  );
  const draftedKey = draftedPlayers.map((player) => player.id).join("|");
  const draftedIds = useMemo(() => new Set(draftedKey.split("|").filter(Boolean)), [
    draftedKey,
  ]);
  const currentSquad = useMemo(
    () => squadGroups.find((squad) => squad.key === currentSquadKey) ?? null,
    [currentSquadKey],
  );
  const currentSquadPlayers = useMemo(
    () =>
      currentSquad?.players.filter((player) => !draftedIds.has(player.id)) ??
      [],
    [currentSquad, draftedIds],
  );
  const invalidSlots = useMemo(
    () =>
      slots
        .map((player, index) =>
          player && !isPlayerValidForSlot(player, index)
            ? { index, player }
            : null,
        )
        .filter(
          (slot): slot is { index: number; player: PlayerSeason } =>
            slot !== null,
        ),
    [slots],
  );
  const remainingPicks = TOTAL_PICKS - draftedPlayers.length;
  const draftComplete = remainingPicks === 0;
  const lineupValid = draftComplete && invalidSlots.length === 0;

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const storedDraft = getStoredDraft();
      let loadedCurrentSquadKey: string | null = null;
      let loadedSkipRemaining = 1;
      let loadedSlots = createEmptySlots();

      if (storedDraft) {
        loadedCurrentSquadKey = storedDraft.currentSquadKey;
        loadedSkipRemaining = storedDraft.skipRemaining;
        loadedSlots = Array.from({ length: TOTAL_PICKS }, (_, index) => {
          const playerId = storedDraft.slotIds[index];
          return playerId ? playerSeasonById.get(playerId) ?? null : null;
        });
      }

      const loadedDraftedIds = new Set(
        loadedSlots
          .filter((player): player is PlayerSeason => player !== null)
          .map((player) => player.id),
      );

      setSlots(loadedSlots);
      setSkipRemaining(loadedSkipRemaining);
      setCurrentSquadKey(
        loadedDraftedIds.size >= TOTAL_PICKS
          ? null
          : getActiveSquadKey(loadedCurrentSquadKey, loadedDraftedIds),
      );
      setHasLoadedDraft(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!hasLoadedDraft) {
      return;
    }

    const storedDraft: StoredDraft = {
      currentSquadKey,
      skipRemaining,
      slotIds: slots.map((player) => player?.id ?? null),
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedDraft));
  }, [currentSquadKey, hasLoadedDraft, skipRemaining, slots]);

function draftPlayer(player: any) {
  if (draftComplete || draftedIds.has(player.id)) {
    return;
  }

  setPendingPlayer(player);
}

  function skipSquad() {
    if (skipRemaining === 0 || draftComplete) {
      return;
    }

    setSkipRemaining(0);
    setCurrentSquadKey(pickRandomSquadKey(draftedIds, currentSquadKey));
  }

  function resetDraft() {
    window.localStorage.removeItem(STORAGE_KEY);
    setCurrentSquadKey(pickRandomSquadKey(new Set()));
    setDraggedIndex(null);
    setSkipRemaining(1);
    setSlots(createEmptySlots());
  }

  function reorderSlots(fromIndex: number, toIndex: number) {
    setSlots((currentSlots) => moveSlot(currentSlots, fromIndex, toIndex));
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
            Draft engine
          </p>
          <h1 className="mt-4 text-4xl font-black text-stone-50 sm:text-6xl">
            Build Your Playing XII
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
            Draft a Playing XI plus one Impact Player from historical IPL
            player-seasons, then arrange the order into a legal lineup.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
            <p className="text-sm font-medium text-stone-400">
              Drafted Players
            </p>
            <p className="mt-2 text-4xl font-black text-stone-50">
              {draftedPlayers.length}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
            <p className="text-sm font-medium text-stone-400">
              Remaining Picks
            </p>
            <p className="mt-2 text-4xl font-black text-stone-50">
              {remainingPicks}
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
            <p className="text-sm font-medium text-stone-400">
              Skip Remaining
            </p>
            <p className="mt-2 text-4xl font-black text-stone-50">
              {skipRemaining}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="space-y-6">
          <section className="rounded-lg border border-white/10 bg-black/25 p-5 shadow-2xl shadow-black/20">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
                  Current squad
                </p>
                <h2 className="mt-3 text-3xl font-black text-stone-50">
                  {draftComplete
                    ? "Draft Complete"
                    : currentSquad
                      ? `${currentSquad.team} ${currentSquad.season}`
                      : "Loading Squad"}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={skipSquad}
                  disabled={
                    skipRemaining === 0 ||
                    draftComplete ||
                    currentSquadPlayers.length === 0
                  }
                  className="h-11 rounded border border-amber-200/50 px-4 text-sm font-black uppercase tracking-[0.16em] text-amber-100 transition hover:bg-amber-200/10 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={resetDraft}
                  className="h-11 rounded border border-emerald-300/40 px-4 text-sm font-black uppercase tracking-[0.16em] text-emerald-100 transition hover:bg-emerald-300/10"
                >
                  Reset Draft
                </button>
              </div>
            </div>

            {draftComplete ? (
              <div className="mt-6 rounded-lg border border-emerald-300/30 bg-emerald-300/10 p-5">
                <p className="text-lg font-bold text-emerald-100">
                  Your twelve-player draft is locked.
                </p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  {lineupValid
                    ? "The Playing XI satisfies every role window, and the Impact Player can be any role."
                    : "The draft is complete, but the Playing XI still needs role-order changes."}
                </p>
              </div>
            ) : (
              <div className="mt-6">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400">
                  Squad Players
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {currentSquadPlayers.map((player) => (
                    <button
                      key={player.id}
                      type="button"
                      onClick={() => draftPlayer(player)}
                      className="group rounded-lg border border-white/10 bg-[#0b1710] p-4 text-left transition hover:border-emerald-300/50 hover:bg-[#102216]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-lg font-black text-stone-50">
                            {player.playerName}
                          </p>
                          <p className="mt-1 text-sm text-stone-400">
                            Season {player.season}
                          </p>
                        </div>
 <span
  className="rounded border px-2.5 py-1 text-xs font-bold border-emerald-500/30 text-emerald-200"
>
 Season {player.season}
</span>
                      </div>
                      <div className="mt-5 grid grid-cols-4 gap-3">
                        <PlayerStat label="Runs" value={`${player.runs}`} />
                        <PlayerStat
                          label="SR"
                          value={player.strikeRate.toFixed(1)}
                        />
                        <PlayerStat
                          label="Wkts"
                          value={`${player.wickets}`}
                        />
                        <PlayerStat
                          label="Econ"
                          value={
                            player.economy === 0
                              ? "-"
                              : player.economy.toFixed(2)
                          }
                        />
                      </div>
                      <p className="mt-4 text-sm font-bold text-emerald-200 opacity-80 transition group-hover:opacity-100">
                        Draft this player
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-2xl font-black text-stone-50">
              Drafted Players
            </h2>
            {draftedPlayers.length === 0 ? (
              <p className="mt-4 text-sm leading-6 text-stone-400">
                No players drafted yet.
              </p>
            ) : (
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {draftedPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="rounded border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold text-stone-50">
                          {player.playerName}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-500">
                          Season {player.season}
                        </p>
                      </div>
                      <span
                        className={`rounded border px-2 py-1 text-xs font-bold ${roleBadgeClass(
                          player.role,
                        )}`}
                      >
                      Season {player.season}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-lg border border-white/10 bg-black/25 p-5 shadow-2xl shadow-black/20">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
                  Team builder
                </p>
                <h2 className="mt-3 text-3xl font-black text-stone-50">
                  Playing XII
                </h2>
              </div>
              <span
                className={`rounded border px-3 py-2 text-xs font-black uppercase tracking-[0.16em] ${
                  lineupValid
                    ? "border-emerald-300/50 bg-emerald-300/10 text-emerald-100"
                    : "border-amber-300/50 bg-amber-300/10 text-amber-100"
                }`}
              >
                {lineupValid ? "Valid" : "Check"}
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {slots.map((player, index) => {
                const isImpactSlot = index === IMPACT_INDEX;
                const isValid = player ? isPlayerValidForSlot(player, index) : true;

                return (
                  <article
                    key={`${index}-${player?.id ?? "empty"}`}
                    draggable={player !== null}
                    onDragStart={(event) => {
                      setDraggedIndex(index);
                      event.dataTransfer.effectAllowed = "move";
                      event.dataTransfer.setData("text/plain", `${index}`);
                    }}
                    onDragEnd={() => setDraggedIndex(null)}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => {
                      event.preventDefault();
                      const transferIndex = Number(
                        event.dataTransfer.getData("text/plain"),
                      );
                      const fromIndex = Number.isFinite(transferIndex)
                        ? transferIndex
                        : draggedIndex;

                      if (typeof fromIndex === "number") {
                        reorderSlots(fromIndex, index);
                      }
                    }}
                    className={`rounded-lg border p-4 transition ${
                      player
                        ? "border-white/10 bg-[#0b1710]"
                        : "border-dashed border-white/10 bg-white/[0.03]"
                    } ${!isValid ? "border-rose-300/60 bg-rose-950/20" : ""}`}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`flex size-10 shrink-0 items-center justify-center rounded border text-sm font-black ${
                          isImpactSlot
                            ? "border-amber-300/40 bg-amber-300/10 text-amber-100"
                            : "border-emerald-300/40 bg-emerald-300/10 text-emerald-100"
                        }`}
                      >
                        {isImpactSlot ? "IP" : index + 1}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
                              {getSlotLabel(index)}
                            </p>
                            {player ? (
                              <>
                                <p className="mt-2 truncate text-base font-black text-stone-50">
                                  {player.playerName}
                                </p>
                                <p className="mt-1 text-sm text-stone-400">
                                  Season {player.season}
                                </p>
                              </>
                            ) : (
                              <p className="mt-2 text-sm font-bold text-stone-400">
                                Empty slot
                              </p>
                            )}
                          </div>

                          <div className="flex shrink-0 flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={() => reorderSlots(index, index - 1)}
                              disabled={!player || index === 0}
                              aria-label={`Move ${player?.playerName ?? "slot"} up`}
                              className="h-9 rounded border border-white/10 px-3 text-xs font-bold text-stone-300 transition hover:border-emerald-300/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              Up
                            </button>
                            <button
                              type="button"
                              onClick={() => reorderSlots(index, index + 1)}
                              disabled={!player || index === IMPACT_INDEX}
                              aria-label={`Move ${
                                player?.playerName ?? "slot"
                              } down`}
                              className="h-9 rounded border border-white/10 px-3 text-xs font-bold text-stone-300 transition hover:border-emerald-300/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              Down
                            </button>
                          </div>
                        </div>

                        {player ? (
                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded border px-2.5 py-1 text-xs font-bold ${roleBadgeClass(
                                player.role,
                              )}`}
                            >
                           Season {player.season}
                            </span>
                            <span
                             className={`rounded border px-2.5 py-1 text-xs font-bold ${
    isValid
      ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
      : "border-rose-300/40 bg-rose-300/10 text-rose-100"
  }`}
>
  {isImpactSlot ? "Impact Player" : `Season ${player.season}`}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {invalidSlots.length > 0 ? (
              <div className="mt-5 rounded-lg border border-rose-300/30 bg-rose-950/20 p-4">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-rose-100">
                  Role restrictions
                </p>
                <ul className="mt-3 space-y-2 text-sm text-stone-300">
                  {invalidSlots.map(({ index, player }) => (
                    <li key={`${player.id}-${index}`}>
                      {player.playerName} is in {getSlotLabel(index)} but needs{" "}
                      {roleSlotRules[player.role].label}.
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-2xl font-black text-stone-50">Role Windows</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {Object.entries(roleSlotRules).map(([role, rule]) => (
                <div
                  key={role}
                  className="rounded border border-white/10 bg-black/20 p-4"
                >
                  <p className="text-sm font-bold text-stone-50">
                    {roleLabels[role as PlayerRole]}
                  </p>
                  <p className="mt-1 text-2xl font-black text-emerald-100">
                    {rule.label}
                  </p>
                </div>
              ))}
              <div className="rounded border border-amber-300/20 bg-amber-300/10 p-4 sm:col-span-2">
                <p className="text-sm font-bold text-amber-50">
                  Impact Player
                </p>
                <p className="mt-1 text-2xl font-black text-amber-100">
                  Any Role
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-stone-500">
              Mock player-season records: {playerSeasons.length}
            </p>
          </section>
        </aside>
      </section>
    </main>
  );
}
