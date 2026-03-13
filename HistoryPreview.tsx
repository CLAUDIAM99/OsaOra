import Link from "next/link";
import type { CoachResponse } from "@/lib/coach";

type Props = {
  items: CoachResponse[];
};

export function HistoryPreview({ items }: Props) {
  if (!items.length) {
    return (
      <section className="mt-8">
        <h2 className="section-title mb-2">I tuoi momenti salvati</h2>
        <div className="glass-surface rounded-3xl p-4 sm:p-5 text-xs text-osa-muted">
          Qui vedrai i momenti in cui hai osato fare un passo. Per ora è vuoto,
          ma il prossimo potrebbe essere il tuo.
        </div>
      </section>
    );
  }

  const latest = items[0];

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="section-title">I tuoi momenti salvati</h2>
        <Link
          href="/archivio"
          className="text-[11px] text-osa-accent-soft hover:text-osa-accent transition-colors"
        >
          Vai all&apos;archivio
        </Link>
      </div>
      <div className="glass-surface rounded-3xl p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.15em] text-osa-muted mb-1.5">
          Ultimo passo
        </p>
        <p className="text-xs text-osa-muted mb-2 line-clamp-2">
          &ldquo;{latest.originalText || "Passo salvato"}&rdquo;
        </p>
        <p className="text-xs text-osa-accent-soft">
          Hai affrontato: <span className="font-medium">{latest.label}</span>
        </p>
      </div>
    </section>
  );
}
