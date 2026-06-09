import { FeatureCard } from "@/components/FeatureCard";
import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";

const balance = [
  { label: "Batting Slots", value: "6" },
  { label: "Bowling Options", value: "5" },
  { label: "Overseas Picks", value: "4" },
];

const teamTools = [
  {
    accent: "bg-sky-300",
    title: "Batting Order",
    description:
      "Place anchors, accelerators, and finishers where they can shape innings.",
  },
  {
    accent: "bg-emerald-300",
    title: "Bowling Phases",
    description:
      "Cover powerplay, middle overs, and death bowling before simulation.",
  },
  {
    accent: "bg-amber-300",
    title: "Role Balance",
    description:
      "Tune the XII so all-rounders, specialists, and captaincy fit together.",
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <section>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-100">
            Team sheet
          </p>
          <h1 className="mt-4 text-4xl font-black text-stone-50 sm:text-6xl">
            Build Your Playing XII
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
            Shape the final lineup before it enters the league simulator.
          </p>
        </section>
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {balance.map((item) => (
            <StatsCard key={item.label} {...item} />
          ))}
        </section>
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {teamTools.map((tool) => (
            <FeatureCard key={tool.title} {...tool} />
          ))}
        </section>
      </main>
    </>
  );
}
