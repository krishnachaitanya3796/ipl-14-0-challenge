type FeatureCardProps = {
  accent: string;
  description: string;
  title: string;
};

export function FeatureCard({ accent, description, title }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-[#0b1710]/80 p-5 transition hover:border-emerald-300/40 hover:bg-[#101f16]">
      <div
        className={`mb-5 h-1.5 w-16 rounded-full ${accent}`}
        aria-hidden="true"
      />
      <h3 className="text-xl font-bold text-stone-50">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-400">{description}</p>
    </article>
  );
}
