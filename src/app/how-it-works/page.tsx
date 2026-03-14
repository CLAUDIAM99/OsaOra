import Link from "next/link";
import { MessageCircle, Sparkles, Heart, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Come funziona | OsaOra",
  description: "Scopri come OsaOra ti offre supporto motivazionale personalizzato e gentile.",
};

const steps = [
  {
    icon: MessageCircle,
    title: "Scrivi come ti senti",
    description: "In un momento di blocco, paura o sovraccarico, apri OsaOra e scrivi liberamente. Nessun giudizio, nessuna registrazione obbligatoria.",
  },
  {
    icon: Sparkles,
    title: "Ricevi una risposta personalizzata",
    description: "In base a cosa hai scritto, ricevi empatia, chiarezza, piccoli passi concreti e una frase motivazionale. Le risposte variano in base al tipo di difficoltà.",
  },
  {
    icon: Heart,
    title: "Rileggi quando serve",
    description: "Le tue risposte restano nel tuo archivio personale (solo sul tuo dispositivo) così puoi rileggerle quando hai bisogno di un promemoria gentile.",
  },
];

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-16">
        <h1 className="font-serif text-3xl font-semibold text-osa-primary sm:text-4xl">
          Come funziona
        </h1>
        <p className="mt-3 text-lg text-osa-muted">
          OsaOra è un supporto motivazionale gentile, non terapia. Ecco come usarlo.
        </p>

        <div className="mt-12 space-y-10 sm:space-y-12">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="flex gap-5 rounded-3xl border border-osa-primary/10 bg-white/80 p-6 shadow-soft backdrop-blur-xl sm:p-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-osa-lavender/20">
                <Icon className="h-6 w-6 text-osa-primary" />
              </div>
              <div>
                <span className="text-sm font-semibold text-osa-secondary">
                  Passo {i + 1}
                </span>
                <h2 className="mt-1 font-serif text-xl font-semibold text-osa-text">
                  {title}
                </h2>
                <p className="mt-3 leading-relaxed text-osa-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-osa-primary/10 bg-white/80 p-6 shadow-glass backdrop-blur-xl sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-osa-primary">
            Cosa non è OsaOra
          </h2>
          <ul className="mt-4 space-y-2 text-osa-muted">
            <li>• Non è terapia e non sostituisce un professionista della salute mentale.</li>
            <li>• Non fa diagnosi e non usa linguaggio clinico.</li>
            <li>• Non promette miracoli: offre chiarezza e piccoli passi.</li>
            <li>• In situazioni di crisi ti indirizza a risorse e numeri utili.</li>
          </ul>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" prefetch={false} className="inline-flex items-center gap-2 rounded-2xl bg-osa-primary px-6 py-3 font-medium text-white transition hover:bg-osa-primary-light">
            Prova OsaOra <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
