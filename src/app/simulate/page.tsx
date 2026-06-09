import { FeatureCard } from "@/components/FeatureCard";
import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";

const seasonStats = [
  { label: "Matches", value: "14" },
  { label: "Wins Needed", value: "14" },
  { label: "Loss Cushion", value: "0" },
];

const simulatorModes = [
  {
    accent: "bg-emerald-300",
    title: "League Run",
    description:
      "Play through all 14 matches and track the points table as results land.",
  },
  {
    accent: "bg-sky-300",
    title: "Match Engine",
    description:
      "Resolve innings with batting depth, bowling phases, and venue pressure.",
  },
  {
    accent: "bg-rose-300",
    title: "Perfect Chase",
    description:
      "Keep the streak alive until every fixture has been tested.",
  },
];

export default function SimulatePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">
              Season lab
            </p>
            <h1 className="mt-4 text-4xl font-black text-stone-50 sm:text-6xl">
              Simulate An Entire Season
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
              Send the drafted XII into a complete IPL league campaign and see
              whether perfection survives.
            </p>
          </div>
          <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-6 py-5 text-center">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-400">
              Current record
            </p>
            <p className="mt-2 text-5xl font-black text-emerald-200">0-0</p>
          </div>
        </section>
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {seasonStats.map((item) => (
            <StatsCard key={item.label} {...item} />
          ))}
        </section>
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {simulatorModes.map((mode) => (
            <FeatureCard key={mode.title} {...mode} />
          ))}
        </section>
      </main>
    </>
  );
}
