type StatsCardProps = {
  label: string;
  value: string;
};

export function StatsCard({ label, value }: StatsCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20">
      <p className="text-sm font-medium text-stone-400">{label}</p>
      <p className="mt-3 text-4xl font-black text-stone-50">{value}</p>
    </article>
  );
}
