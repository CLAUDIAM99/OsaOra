import Link from "next/link";
import NuovoProgettoForm from "@/components/NuovoProgettoForm";

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

      <NuovoProgettoForm />

      <p className="text-sm text-osa-muted">
        <Link href="/progetti/" className="text-osa-accent hover:underline focus:outline-none focus:ring-2 focus:ring-osa-accent rounded">
          ← Torna ai progetti
        </Link>
      </p>
    </div>
  );
}
