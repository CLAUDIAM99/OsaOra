"use client";

import { Send } from "lucide-react";

interface PromptCardProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  placeholder?: string;
}

export default function PromptCard({
  value,
  onChange,
  onSubmit,
  isSubmitting,
  placeholder = "Cosa ti blocca o ti preoccupa in questo momento? Scrivi liberamente, senza filtri...",
}: PromptCardProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[32px] border border-osa-primary/10 bg-osa-card p-6 shadow-glass backdrop-blur-xl transition hover:shadow-glass-lg sm:p-8"
    >
      <label htmlFor="osaora-prompt" className="sr-only">
        Descrivi come ti senti o cosa ti blocca
      </label>
      <textarea
        id="osaora-prompt"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        disabled={isSubmitting}
        className="w-full resize-y rounded-2xl border border-osa-primary/15 bg-white/80 px-5 py-4 text-osa-text placeholder-osa-muted/70 shadow-soft transition focus:border-osa-primary/30 focus:outline-none focus:ring-2 focus:ring-osa-primary/15 disabled:opacity-70"
      />
      <button
        type="submit"
        disabled={!value.trim() || isSubmitting}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-osa-primary px-6 py-4 font-semibold text-white shadow-soft transition hover:bg-osa-primary-light focus:outline-none focus:ring-2 focus:ring-osa-primary focus:ring-offset-2 focus:ring-offset-osa-bg disabled:opacity-50 disabled:cursor-not-allowed sm:py-3.5"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-pulse rounded-full bg-white/60" />
            Un attimo...
          </span>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Ottieni una risposta
          </>
        )}
      </button>
    </form>
  );
}
