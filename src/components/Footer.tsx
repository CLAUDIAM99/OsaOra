import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-osa-primary/5 bg-osa-bg-warm/50">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between">
          <Link
            href="/"
            className="font-serif text-lg font-semibold text-osa-primary"
          >
            Osa<span className="text-osa-secondary">Ora</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer">
            <Link href="/how-it-works/" className="text-osa-muted transition hover:text-osa-primary">
              Come funziona
            </Link>
            <Link href="/archive/" className="text-osa-muted transition hover:text-osa-primary">
              Archivio
            </Link>
            <Link href="/safety/" className="text-osa-muted transition hover:text-osa-primary">
              Sicurezza
            </Link>
          </nav>
        </div>
        <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-osa-muted">
          Fatto con <Heart className="h-4 w-4 fill-osa-secondary/30 text-osa-secondary" /> per chi ha bisogno di un respiro
        </p>
        <p className="mt-2 text-center text-xs text-osa-muted">
          OsaOra non è terapia e non sostituisce un professionista della salute mentale.
        </p>
      </div>
    </footer>
  );
}
