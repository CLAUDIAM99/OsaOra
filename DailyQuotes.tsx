const QUOTES = [
  "Il primo passo non deve essere enorme, deve solo essere vero.",
  "Non aspettare di non avere più paura: cammina insieme alla paura.",
  "Anche un millimetro di avanzamento è meglio di un altro giorno fermo.",
  "Non devi convincere tutti: devi essere onesto con te stesso.",
  "Le cose importanti raramente arrivano quando ci sentiamo pronti."
];

export function DailyQuotes() {
  return (
    <section className="mt-8">
      <h2 className="section-title mb-2">Frase per oggi</h2>
      <div className="glass-surface rounded-3xl p-4 sm:p-5">
        <p className="text-sm sm:text-base italic text-osa-accent-soft">
          &ldquo;{QUOTES[0]}&rdquo;
        </p>
        <p className="text-[11px] text-osa-muted mt-2">
          Ogni volta che torni su OsaOra troverai una frase diversa per
          accompagnare i tuoi passi.
        </p>
      </div>
    </section>
  );
}
