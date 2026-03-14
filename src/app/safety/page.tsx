import { Phone, ExternalLink, Shield } from "lucide-react";
import Link from "next/link";
import BackgroundGlow from "@/components/BackgroundGlow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sicurezza e risorse | OsaOra",
  description: "Risorse e numeri utili in caso di crisi. OsaOra non è terapia.",
};

const resources = [
  {
    name: "Telefono Amico Italia",
    phone: "02 2327 2727",
    tel: "0223272727",
    hours: "Tutti i giorni 10–24",
  },
  {
    name: "Samaritans (UK)",
    phone: "116 123",
    tel: "116123",
    hours: "24/7",
  },
  {
    name: "Emergenza",
    phone: "112",
    tel: "112",
    hours: "Sempre",
  },
  {
    name: "Numero Verde Salute Mentale",
    phone: "800 061 162",
    tel: "800061162",
    hours: "Attivo in diverse regioni",
  },
];

export default function SafetyPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden aurora-bg">
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <main className="relative mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-osa-secondary/15">
            <Shield className="h-6 w-6 text-osa-secondary" />
          </div>
          <div>
            <h1 className="font-serif text-3xl font-semibold text-osa-primary sm:text-4xl">
              Sicurezza e risorse
            </h1>
            <p className="mt-2 text-osa-muted">
              Se stai attraversando un momento di crisi, queste risorse possono aiutarti.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-osa-primary/10 bg-white/80 p-6 shadow-glass backdrop-blur-xl sm:p-8">
          <p className="text-osa-muted">
            OsaOra è un supporto motivazionale gentile e <strong className="text-osa-text">non sostituisce</strong> un
            professionista della salute mentale, un medico o i servizi di emergenza. Se pensi di fare del male a te
            stessa o ad altri, o sei in pericolo, contatta subito un servizio di ascolto o il 112.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-xl font-semibold text-osa-primary">
          Numeri utili
        </h2>
        <ul className="mt-4 space-y-4">
          {resources.map(({ name, phone, tel, hours }) => (
            <li
              key={name}
              className="flex flex-wrap items-center gap-4 rounded-3xl border border-osa-primary/10 bg-white/80 p-5 shadow-soft backdrop-blur-xl sm:flex-nowrap"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-osa-accent/20">
                <Phone className="h-5 w-5 text-osa-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-osa-text">{name}</p>
                <p className="text-sm text-osa-muted">{hours}</p>
              </div>
              <a
                href={`tel:${tel}`}
                className="inline-flex items-center gap-2 rounded-xl bg-osa-primary px-4 py-2.5 font-medium text-white transition hover:bg-osa-primary-light"
              >
                <Phone className="h-4 w-4" />
                {phone}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-3xl border border-osa-primary/10 bg-white/80 p-6 shadow-soft backdrop-blur-xl">
          <h2 className="font-serif text-lg font-semibold text-osa-primary">
            Link utili
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://www.telefonoamico.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-osa-primary underline decoration-osa-primary/40 underline-offset-2 hover:decoration-osa-primary"
              >
                telefonoamico.it <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.samaritans.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-osa-primary underline decoration-osa-primary/40 underline-offset-2 hover:decoration-osa-primary"
              >
                samaritans.org <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-center text-sm text-osa-muted">
          <Link href="/" className="font-medium text-osa-primary underline decoration-osa-primary/40 underline-offset-2">
            ← Torna alla home
          </Link>
        </p>
        </main>
        <Footer />
      </div>
    </div>
  );
}
