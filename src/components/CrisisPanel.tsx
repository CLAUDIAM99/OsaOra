"use client";

import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function CrisisPanel() {
  return (
    <div
      className="animate-slide-up rounded-[32px] border-2 border-osa-secondary/40 bg-white/95 p-6 shadow-glass-lg backdrop-blur-xl sm:p-8"
      role="alert"
      aria-live="assertive"
    >
      <div className="flex gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-osa-secondary/15">
          <AlertCircle className="h-6 w-6 text-osa-secondary" />
        </div>
        <div>
          <h3 className="font-semibold text-osa-primary">Ci teniamo a te</h3>
          <p className="mt-3 text-osa-muted">
            Le parole che hai usato fanno pensare che tu possa essere in difficoltà o in pericolo.
            OsaOra non può offrirti il supporto di cui hai bisogno in questo momento.
          </p>
          <p className="mt-3 text-osa-muted">
            Ti invitiamo a contattare un servizio di ascolto o emergenza:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-osa-text">
            <li>
              <strong>Telefono Amico Italia</strong>{" "}
              <a href="tel:02232727" className="text-osa-primary underline decoration-osa-primary/40 underline-offset-2">
                02 2327 2727
              </a>
              {" "}(tutti i giorni 10–24)
            </li>
            <li>
              <strong>Samaritans</strong>{" "}
              <a href="tel:116123" className="text-osa-primary underline decoration-osa-primary/40 underline-offset-2">
                116 123
              </a>
              {" "}(UK, 24/7)
            </li>
            <li>
              <strong>Emergenza</strong>{" "}
              <a href="tel:112" className="text-osa-primary underline decoration-osa-primary/40 underline-offset-2">
                112
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-osa-muted">
            <Link href="/safety/" className="font-medium text-osa-primary underline decoration-osa-primary/40 underline-offset-2">
              Vai alla pagina Sicurezza
            </Link>{" "}
            per altre risorse.
          </p>
          <p className="mt-3 text-xs text-osa-muted">
            Non sei solo. Parlare con qualcuno può fare la differenza.
          </p>
        </div>
      </div>
    </div>
  );
}
