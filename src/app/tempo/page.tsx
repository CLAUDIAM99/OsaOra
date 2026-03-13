import Link from "next/link";

export const metadata = {
  title: "Tempo | OsaOra",
  description: "Registra e gestisci il tempo su OsaOra",
};

export default function TempoPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-osa-text sm:text-3xl">
          Tempo
        </h1>
        <p className="mt-1 text-osa-muted">
          Registra le ore dedicate alle attività e tienile sotto controllo.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-osa-muted/20 bg-osa-surface p-6 shadow-soft-xl">
          <h2 className="text-lg font-semibold text-osa-text">
            Oggi
          </h2>
          <p className="mt-2 text-3xl font-bold text-osa-accent">
            0h 00m
          </p>
          <p className="mt-1 text-sm text-osa-muted">
            Tempo registrato oggi
          </p>
        </div>
        <div className="rounded-2xl border border-osa-muted/20 bg-osa-surface p-6 shadow-soft-xl">
          <h2 className="text-lg font-semibold text-osa-text">
            Questa settimana
          </h2>
          <p className="mt-2 text-3xl font-bold text-osa-accent">
            0h 00m
          </p>
          <p className="mt-1 text-sm text-osa-muted">
            Totale settimanale
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-osa-muted/20 bg-osa-surface p-8 shadow-soft-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-osa-soft text-4xl text-osa-muted">
          ⏱
        </div>
        <h2 className="mt-4 text-lg font-semibold text-osa-text">
          Nessuna registrazione
        </h2>
        <p className="mt-2 max-w-sm mx-auto text-sm text-osa-muted">
          Quando inizierai a registrare il tempo sulle attività, vedrai qui un riepilogo e la cronologia.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-osa-accent px-5 py-2.5 font-medium text-osa-bg transition hover:bg-osa-accent-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
        >
          Registra tempo (presto)
        </button>
      </div>

      <p className="text-sm text-osa-muted">
        <Link href="/" className="text-osa-accent hover:underline focus:outline-none focus:ring-2 focus:ring-osa-accent rounded">
          ← Torna alla home
        </Link>
      </p>
    </div>
  );
}
