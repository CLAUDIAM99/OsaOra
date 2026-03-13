import type { CoachResponse } from "@/lib/coach";

type Props = {
  data: CoachResponse;
};

export function ResponseBlocks({ data }: Props) {
  return (
    <div className="grid gap-4 mt-6">
      <section className="glass-surface rounded-3xl p-5 sm:p-6">
        <p className="section-title mb-1.5">1. Ti capisco</p>
        <p className="text-sm sm:text-base leading-relaxed text-osa-text">
          {data.empathy}
        </p>
      </section>

      <section className="glass-surface rounded-3xl p-5 sm:p-6">
        <p className="section-title mb-1.5">2. Cosa sta succedendo</p>
        <p className="inline-flex items-center gap-2 mb-3 text-xs font-medium text-osa-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-osa-accent" />
          Possibile blocco:{" "}
          <span className="text-osa-accent-soft">{data.label}</span>
        </p>
        <p className="text-sm sm:text-base leading-relaxed text-osa-text">
          {data.whatIsHappening}
        </p>
      </section>

      <section className="glass-surface rounded-3xl p-5 sm:p-6">
        <p className="section-title mb-1.5">3. Cosa fare ora</p>
        <p className="text-xs text-osa-muted mb-2">
          Sono passi piccoli, realistici, da fare entro oggi.
        </p>
        <ol className="space-y-2.5 text-sm sm:text-base text-osa-text list-decimal list-inside">
          {data.actions.map((action, idx) => (
            <li key={idx} className="leading-relaxed">
              {action}
            </li>
          ))}
        </ol>
      </section>

      <section className="glass-surface rounded-3xl p-5 sm:p-6 border border-osa-accent/40">
        <p className="section-title mb-1.5">4. Spinta motivazionale</p>
        <p className="text-sm sm:text-base font-medium leading-relaxed text-osa-accent-soft">
          {data.push}
        </p>
      </section>
    </div>
  );
}
