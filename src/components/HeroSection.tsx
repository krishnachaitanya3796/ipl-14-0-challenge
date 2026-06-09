import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { Navbar } from "@/components/Navbar";
import { StatsCard } from "@/components/StatsCard";

const stats = [
  { label: "Total Simulations", value: "0" },
  { label: "Total 14-0 Seasons", value: "0" },
  { label: "Total 0-14 Seasons", value: "0" },
];

const features = [
  {
    accent: "bg-emerald-300",
    title: "Draft From IPL History",
    description:
      "Pick one player from historic IPL squads and build a roster across eras.",
  },
  {
    accent: "bg-amber-300",
    title: "Build Your Playing XII",
    description:
      "Balance batting depth, bowling phases, all-rounders, and leadership.",
  },
  {
    accent: "bg-sky-300",
    title: "Simulate An Entire Season",
    description:
      "Run a full 14-match league campaign and watch the table take shape.",
  },
  {
    accent: "bg-rose-300",
    title: "Chase The Perfect 14-0",
    description:
      "Create a side strong enough to sweep every league match without a slip.",
  },
];

export function HeroSection() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(90deg,transparent_0_8%,rgba(16,185,129,0.2)_8%_9%,transparent_9%_49%,rgba(250,204,21,0.35)_49%_51%,transparent_51%_91%,rgba(16,185,129,0.2)_91%_92%,transparent_92%_100%)] opacity-60"
            aria-hidden="true"
          />
          <div className="mx-auto grid min-h-[calc(100svh-220px)] w-full max-w-7xl items-center gap-12 px-5 py-10 sm:px-6 sm:py-12 lg:min-h-[calc(100vh-180px)] lg:grid-cols-[1.06fr_0.94fr] lg:px-8 lg:py-16">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-5 w-fit rounded border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-sm font-bold uppercase tracking-[0.22em] text-emerald-200">
                League season simulator
              </p>
              <h1 className="text-5xl font-black leading-[1.02] text-stone-50 sm:text-6xl lg:text-7xl">
                IPL 14-0 Challenge
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
                Draft one player from historical IPL teams and attempt a perfect
                14-0 IPL league season.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/draft"
                  className="inline-flex h-12 items-center justify-center rounded bg-emerald-300 px-6 text-sm font-black uppercase tracking-[0.18em] text-[#06100b] transition hover:bg-emerald-200"
                >
                  Start Draft
                </Link>
                <Link
                  href="/hall-of-fame"
                  className="inline-flex h-12 items-center justify-center rounded border border-amber-200/50 px-6 text-sm font-black uppercase tracking-[0.18em] text-amber-100 transition hover:bg-amber-200/10"
                >
                  Hall of Fame
                </Link>
              </div>
            </div>

            <div className="relative z-10 hidden rounded-lg border border-white/10 bg-black/30 p-4 shadow-2xl shadow-black/40 md:block">
              <div className="rounded border border-emerald-300/30 bg-[#102216] p-5">
                <div className="grid grid-cols-[1fr_auto_1fr] gap-3">
                  <div className="h-56 rounded bg-[repeating-linear-gradient(90deg,#103b23_0_28px,#0f321f_28px_56px)]" />
                  <div className="h-56 w-16 rounded-sm bg-amber-100/80 shadow-inner shadow-amber-900/30" />
                  <div className="h-56 rounded bg-[repeating-linear-gradient(90deg,#0f321f_0_28px,#103b23_28px_56px)]" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded bg-black/25 px-3 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                      Target
                    </p>
                    <p className="mt-2 text-2xl font-black text-emerald-200">
                      14-0
                    </p>
                  </div>
                  <div className="rounded bg-black/25 px-3 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                      Squad
                    </p>
                    <p className="mt-2 text-2xl font-black text-amber-100">
                      XII
                    </p>
                  </div>
                  <div className="rounded bg-black/25 px-3 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                      League
                    </p>
                    <p className="mt-2 text-2xl font-black text-rose-200">
                      IPL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <StatsCard key={stat.label} {...stat} />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
