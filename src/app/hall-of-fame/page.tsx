import { FeatureCard } from "@/components/FeatureCard";
import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";

const hallStats = [
  { label: "Perfect Seasons", value: "0" },
  { label: "Near Misses", value: "0" },
  { label: "Wooden Spoons", value: "0" },
];

const records = [
  {
    accent: "bg-amber-300",
    title: "Perfect 14-0",
    description:
      "Immortalize every unbeaten season with its drafted XII and match path.",
  },
  {
    accent: "bg-emerald-300",
    title: "Best Net Run",
    description:
      "Track the most dominant campaigns beyond the win-loss column.",
  },
  {
    accent: "bg-rose-300",
    title: "0-14 Vault",
    description:
      "Keep the most chaotic failed seasons visible for the full story.",
  },
];

export default function HallOfFamePage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <section>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-rose-200">
            Records room
          </p>
          <h1 className="mt-4 text-4xl font-black text-stone-50 sm:text-6xl">
            Hall of Fame
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
            Celebrate the perfect runs, the brutal near misses, and every
            strange season the simulator produces.
          </p>
        </section>
        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {hallStats.map((item) => (
            <StatsCard key={item.label} {...item} />
          ))}
        </section>
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {records.map((record) => (
            <FeatureCard key={record.title} {...record} />
          ))}
        </section>
      </main>
    </>
  );
}
