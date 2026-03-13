"use client";

import { useState } from "react";

const CRISIS_KEYWORDS = [
  "suicid",
  "suicidio",
  "uccidermi",
  "morire",
  "autolesion",
  "tagliarmi",
  "abus",
  "violenz",
  "emergenza",
  "pericolo immediato",
  "kill myself",
  "want to die",
  "self-harm",
  "abuse",
  "emergency",
];

function detectCrisis(text: string): boolean {
  const lower = text.trim().toLowerCase();
  return CRISIS_KEYWORDS.some((k) => lower.includes(k));
}

// Mock structured response (in production this would come from an API)
function buildStructuredResponse(_userInput: string) {
  return {
    empathy:
      "È normale sentirsi bloccati a volte. Quello che provi ha senso e merita attenzione.",
    clarity:
      "Stai dando un nome a qualcosa di difficile: è già un primo passo verso la chiarezza.",
    steps: [
      "Fai una sola piccola cosa nei prossimi 5 minuti (anche solo aprire una finestra o bere un sorso d'acqua).",
      "Scrivi in una riga cosa ti farebbe sentire un po' meglio in questo momento.",
      "Se puoi, esci per una brevissima passeggiata o cambia stanza per staccare un attimo.",
    ],
    phrase:
      "Ogni momento è un nuovo inizio. Non devi fare tutto oggi: basta un passo alla volta.",
  };
}

export default function CoachingFlow() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<"idle" | "coaching" | "crisis">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<ReturnType<typeof buildStructuredResponse> | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setIsSubmitting(true);
    setResult("idle");
    setResponse(null);

    // Simulate a short delay (in production: API call)
    setTimeout(() => {
      if (detectCrisis(trimmed)) {
        setResult("crisis");
      } else {
        setResponse(buildStructuredResponse(trimmed));
        setResult("coaching");
      }
      setIsSubmitting(false);
    }, 800);
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-8 sm:px-6 sm:py-12">
      {/* Logo */}
      <header className="mb-8 text-center sm:mb-12">
        <h1 className="font-serif text-2xl font-medium tracking-tight text-osa-plum-deep sm:text-3xl">
          Osa<span className="text-osa-rose">Ora</span>
        </h1>
        <p className="mt-1 text-sm text-osa-muted">
          Un momento di chiarezza
        </p>
      </header>

      {/* Safety note (always visible) */}
      <p className="mb-6 rounded-2xl border border-osa-rose-muted/40 bg-white/60 px-4 py-3 text-center text-sm text-osa-slate-muted backdrop-blur-sm sm:mb-8">
        OsaOra non è terapia e non sostituisce un professionista della salute mentale.
        Se stai attraversando un momento molto difficile, ti incoraggiamo a parlare con un esperto.
      </p>

      {/* Hero + main action */}
      <section className="aurora-bg flex flex-1 flex-col rounded-3xl p-6 shadow-soft sm:p-8">
        <h2 className="text-center text-lg font-medium text-osa-plum-deep sm:text-xl">
          Cosa ti blocca o ti preoccupa in questo momento?
        </h2>
        <p className="mt-2 text-center text-sm text-osa-muted">
          Scrivi liberamente. Nessun giudizio.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col sm:mt-8">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Es. Ho paura di non farcela con il lavoro / Rimando sempre / Non so da dove iniziare..."
            className="min-h-[180px] w-full resize-y rounded-2xl border border-osa-rose-muted/50 bg-white/80 px-4 py-4 text-osa-text placeholder-osa-slate-muted/70 shadow-soft transition focus:border-osa-plum/40 focus:outline-none focus:ring-2 focus:ring-osa-plum/20 sm:min-h-[200px]"
            rows={5}
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={!input.trim() || isSubmitting}
            className="mt-6 w-full rounded-2xl bg-osa-plum-deep px-6 py-4 font-medium text-white shadow-soft transition hover:bg-osa-plum focus:outline-none focus:ring-2 focus:ring-osa-plum focus:ring-offset-2 focus:ring-offset-osa-bg disabled:opacity-50 disabled:cursor-not-allowed sm:py-3.5"
          >
            {isSubmitting ? "Un attimo..." : "Ottieni una risposta"}
          </button>
        </form>
      </section>

      {/* Crisis message */}
      {result === "crisis" && (
        <section
          className="mt-8 rounded-3xl border-2 border-osa-rose/50 bg-white/90 p-6 shadow-glass-lg backdrop-blur-md transition duration-300 ease-out sm:p-8"
          role="alert"
        >
          <h3 className="font-semibold text-osa-plum-deep">
            Ci teniamo a te
          </h3>
          <p className="mt-3 text-osa-slate-muted">
            Le parole che hai usato fanno pensare che tu possa essere in difficoltà o in pericolo.
            OsaOra non può offrirti il supporto di cui hai bisogno in questo momento.
          </p>
          <p className="mt-3 text-osa-slate-muted">
            Ti invitiamo a contattare un servizio di ascolto o emergenza:
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <strong className="text-osa-plum-deep">Telefono Amico Italia</strong>{" "}
              <a href="tel:02232727" className="text-osa-plum underline">02 2327 2727</a>
              {" "}(tutti i giorni 10–24)
            </li>
            <li>
              <strong className="text-osa-plum-deep">Samaritans</strong>{" "}
              <a href="tel:116123" className="text-osa-plum underline">116 123</a>
              {" "}(UK, 24/7)
            </li>
            <li>
              <strong className="text-osa-plum-deep">Emergenza</strong>{" "}
              <a href="tel:112" className="text-osa-plum underline">112</a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-osa-slate-muted">
            Non sei solo. Parlare con qualcuno può fare la differenza.
          </p>
        </section>
      )}

      {/* Structured coaching response */}
      {result === "coaching" && response && (
        <section
          className="mt-8 space-y-6 rounded-3xl border border-osa-rose-muted/40 bg-white/80 p-6 shadow-glass backdrop-blur-md transition duration-300 ease-out sm:p-8"
          aria-live="polite"
        >
          <h3 className="font-serif text-lg font-medium text-osa-plum-deep">
            Ecco un pensiero per te
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-osa-rose">
                Un po' di empatia
              </h4>
              <p className="mt-1 text-osa-slate-muted">{response.empathy}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-osa-rose">
                Chiarezza
              </h4>
              <p className="mt-1 text-osa-slate-muted">{response.clarity}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-osa-rose">
                Piccoli passi concreti
              </h4>
              <ol className="mt-2 list-decimal space-y-1 pl-4 text-osa-slate-muted">
                {response.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>

            <blockquote className="border-l-2 border-osa-peach pl-4 font-serif italic text-osa-plum-deep/90">
              {response.phrase}
            </blockquote>
          </div>
        </section>
      )}

      <footer className="mt-12 text-center text-xs text-osa-slate-muted">
        OsaOra non fornisce diagnosi né cure. Per supporto professionale, contatta un esperto.
      </footer>
    </div>
  );
}
