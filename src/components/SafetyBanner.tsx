import Link from "next/link";
import { Shield } from "lucide-react";

export default function SafetyBanner() {
  return (
    <div className="rounded-3xl border border-osa-secondary/20 bg-osa-card p-4 shadow-glass backdrop-blur-xl sm:p-5">
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-osa-secondary/10">
          <Shield className="h-5 w-5 text-osa-secondary" />
        </div>
        <div>
          <p className="text-sm font-medium text-osa-text">
            OsaOra non è terapia e non sostituisce un professionista.
          </p>
          <p className="mt-1 text-sm text-osa-muted">
            Se stai attraversando un momento molto difficile,{" "}
            <Link href="/safety/" className="font-medium text-osa-primary underline decoration-osa-primary/30 underline-offset-2 hover:decoration-osa-primary">
              consulta la pagina Sicurezza
            </Link>{" "}
            per risorse e numeri utili.
          </p>
        </div>
      </div>
    </div>
  );
}
