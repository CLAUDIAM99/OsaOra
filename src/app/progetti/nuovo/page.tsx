import Link from "next/link";

export const metadata = {
  title: "Nuovo progetto | OsaOra",
  description: "Crea un nuovo progetto",
};

export default function NuovoProgettoPage() {
  return (
    <div className="mx-auto max-w-xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-osa-text sm:text-3xl">
          Nuovo progetto
        </h1>
        <p className="mt-1 text-osa-muted">
          Compila i campi e salva. La funzionalità di salvataggio sarà disponibile in un prossimo aggiornamento.
        </p>
      </div>

      <form
        className="space-y-6 rounded-2xl border border-osa-muted/20 bg-osa-surface p-6 shadow-soft-xl sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-osa-text">
            Nome progetto
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Es. Sito web aziendale"
            className="mt-2 block w-full rounded-xl border border-osa-muted/30 bg-osa-bg px-4 py-3 text-osa-text placeholder-osa-muted focus:border-osa-accent focus:outline-none focus:ring-2 focus:ring-osa-accent/50"
          />
        </div>
        <div>
          <label htmlFor="descrizione" className="block text-sm font-medium text-osa-text">
            Descrizione (opzionale)
          </label>
          <textarea
            id="descrizione"
            rows={3}
            placeholder="Breve descrizione del progetto..."
            className="mt-2 block w-full rounded-xl border border-osa-muted/30 bg-osa-bg px-4 py-3 text-osa-text placeholder-osa-muted focus:border-osa-accent focus:outline-none focus:ring-2 focus:ring-osa-accent/50 resize-y"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-osa-accent px-6 py-3 font-medium text-osa-bg transition hover:bg-osa-accent-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
          >
            Crea progetto
          </button>
          <Link
            href="/progetti/"
            className="inline-flex items-center justify-center rounded-xl border border-osa-muted/30 bg-transparent px-6 py-3 font-medium text-osa-text transition hover:border-osa-accent/50 hover:bg-osa-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
          >
            Annulla
          </Link>
        </div>
      </form>

      <p className="text-sm text-osa-muted">
        <Link href="/progetti/" className="text-osa-accent hover:underline focus:outline-none focus:ring-2 focus:ring-osa-accent rounded">
          ← Torna ai progetti
        </Link>
      </p>
    </div>
  );
}
