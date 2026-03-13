export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Sfondo con gradiente sottile */}
      <div className="absolute inset-0 bg-gradient-to-b from-osa-bg via-osa-surface/30 to-osa-bg pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-osa-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-osa-text">
          Osa<span className="text-osa-accent">Ora</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-osa-muted">
          Il tuo spazio. Il tuo tempo.
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 rounded-2xl bg-osa-accent text-osa-bg font-medium hover:bg-osa-accent-soft transition-colors shadow-soft-xl"
          >
            Inizia
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-2xl bg-osa-soft text-osa-text font-medium border border-osa-muted/20 hover:border-osa-accent/40 transition-colors"
          >
            Scopri di più
          </a>
        </div>
      </div>

      <footer className="absolute bottom-8 left-0 right-0 text-center text-sm text-osa-muted">
        OsaOra © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
