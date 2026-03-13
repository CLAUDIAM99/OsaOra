import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-osa-text sm:text-4xl">
          Benvenuto in <span className="text-osa-accent">OsaOra</span>
        </h1>
        <p className="mt-2 text-lg text-osa-muted">
          Il tuo spazio. Il tuo tempo. Gestisci progetti e attività in un unico posto.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/progetti/"
          className="group relative block rounded-2xl border border-osa-muted/20 bg-osa-surface p-6 shadow-soft-xl transition hover:border-osa-accent/40 hover:bg-osa-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-osa-accent/20 text-2xl text-osa-accent">
            📁
          </div>
          <h2 className="mt-4 text-xl font-semibold text-osa-text group-hover:text-osa-accent transition-colors">
            Progetti
          </h2>
          <p className="mt-2 text-sm text-osa-muted">
            Crea e organizza i tuoi progetti. Traccia avanzamento e scadenze.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-osa-accent">
            Vai ai progetti →
          </span>
        </Link>

        <Link
          href="/tempo/"
          className="group relative block rounded-2xl border border-osa-muted/20 bg-osa-surface p-6 shadow-soft-xl transition hover:border-osa-accent/40 hover:bg-osa-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-osa-accent/20 text-2xl text-osa-accent">
            ⏱
          </div>
          <h2 className="mt-4 text-xl font-semibold text-osa-text group-hover:text-osa-accent transition-colors">
            Tempo
          </h2>
          <p className="mt-2 text-sm text-osa-muted">
            Registra il tempo dedicato alle attività e tieni sotto controllo le ore.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-osa-accent">
            Vai al tempo →
          </span>
        </Link>

        <div className="rounded-2xl border border-osa-muted/20 bg-osa-surface p-6 shadow-soft-xl sm:col-span-2 lg:col-span-1">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-osa-positive/20 text-2xl text-osa-positive">
            ✓
          </div>
          <h2 className="mt-4 text-xl font-semibold text-osa-text">
            In breve
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-osa-muted">
            <li>• Progetti illimitati</li>
            <li>• Tracciamento tempo</li>
            <li>• Tutto sotto il tuo controllo</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-osa-muted/20 bg-osa-surface p-6 shadow-soft-xl sm:p-8">
        <h2 className="text-xl font-semibold text-osa-text">
          Inizia subito
        </h2>
        <p className="mt-2 text-osa-muted">
          Scegli un’azione qui sotto per entrare nella piattaforma.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/progetti/"
            className="inline-flex items-center justify-center rounded-xl bg-osa-accent px-6 py-3 font-medium text-osa-bg shadow-lg transition hover:bg-osa-accent-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
          >
            Crea un progetto
          </Link>
          <Link
            href="/tempo/"
            className="inline-flex items-center justify-center rounded-xl border border-osa-muted/30 bg-transparent px-6 py-3 font-medium text-osa-text transition hover:border-osa-accent/50 hover:bg-osa-soft focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg"
          >
            Registra tempo
          </Link>
        </div>
      </section>

      <footer className="border-t border-osa-muted/20 pt-8 text-center text-sm text-osa-muted">
        OsaOra © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
