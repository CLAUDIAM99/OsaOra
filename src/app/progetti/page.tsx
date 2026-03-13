import Link from "next/link";

export const metadata = {
  title: "Progetti | OsaOra",
  description: "Gestisci i tuoi progetti su OsaOra",
};

export default function ProgettiPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-osa-text sm:text-3xl">
            Progetti
          </h1>
          <p className="mt-1 text-osa-muted">
            Crea e organizza i tuoi progetti. Qui vedrai l’elenco quando ne avrai aggiunti.
          </p>
        </div>
        <Link
          href="/progetti/nuovo/"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-osa-accent px-5 py-2.5 font-medium text-osa-bg transition hover:bg-osa-accent-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
        >
          + Nuovo progetto
        </Link>
      </div>

      <div className="rounded-2xl border border-osa-muted/20 bg-osa-surface p-8 shadow-soft-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-osa-soft text-4xl text-osa-muted">
          📁
        </div>
        <h2 className="mt-4 text-lg font-semibold text-osa-text">
          Nessun progetto ancora
        </h2>
        <p className="mt-2 max-w-sm mx-auto text-sm text-osa-muted">
          Clicca su &quot;Nuovo progetto&quot; per crearne uno. I tuoi progetti appariranno in questa lista.
        </p>
        <Link
          href="/progetti/nuovo/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-osa-accent px-5 py-2.5 font-medium text-osa-bg transition hover:bg-osa-accent-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
        >
          Crea il primo progetto
        </Link>
      </div>

      <p className="text-sm text-osa-muted">
        <Link href="/" className="text-osa-accent hover:underline focus:outline-none focus:ring-2 focus:ring-osa-accent rounded">
          ← Torna alla home
        </Link>
      </p>
    </div>
  );
}
