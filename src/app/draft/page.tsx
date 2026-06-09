import { FeatureCard } from "@/components/FeatureCard";
import { Navbar } from "@/components/Navbar";

const draftSteps = [
  {
    accent: "bg-emerald-300",
    title: "Choose A Season",
    description:
      "Open the player pool by selecting an IPL season, franchise, and role mix.",
  },
  {
    accent: "bg-amber-300",
    title: "Make The Pick",
    description:
      "Select one player from a historical IPL team before moving to the next slot.",
  },
  {
    accent: "bg-rose-300",
    title: "Protect The Balance",
    description:
      "Keep overseas limits, batting order, and bowling coverage in view.",
  },
];

export default function DraftPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
              Draft room
            </p>
            <h1 className="mt-4 text-4xl font-black text-stone-50 sm:text-6xl">
              Start Draft
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">
              Build an IPL XI by pulling talent from the league archive, one
              historical team at a time.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["WK", "BAT", "AR", "BOWL"].map((role) => (
                <div
                  key={role}
                  className="rounded border border-emerald-300/20 bg-black/25 px-3 py-5 text-center"
                >
                  <p className="text-2xl font-black text-stone-50">{role}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-stone-400">
                    Slot
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {draftSteps.map((step) => (
            <FeatureCard key={step.title} {...step} />
          ))}
        </section>
      </main>
    </>
  );
}
