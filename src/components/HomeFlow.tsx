"use client";

import { useState, useCallback } from "react";
import { detectCrisis, getCoachingResponse } from "@/lib/responseEngine";
import type { CoachingResponse } from "./ResultPanel";
import type { ArchiveEntry } from "./ArchiveEntries";
import HeroSection from "./HeroSection";
import SafetyBanner from "./SafetyBanner";
import PromptCard from "./PromptCard";
import ResultPanel from "./ResultPanel";
import CrisisPanel from "./CrisisPanel";
import FeatureCards from "./FeatureCards";

const ARCHIVE_KEY = "osaora-archive";

function loadArchive(): ArchiveEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ARCHIVE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveEntry(prompt: string, response: CoachingResponse) {
  const entries = loadArchive();
  const entry: ArchiveEntry = {
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" }),
    prompt: prompt.slice(0, 200),
    response,
  };
  entries.unshift(entry);
  const toKeep = entries.slice(0, 50);
  localStorage.setItem(ARCHIVE_KEY, JSON.stringify(toKeep));
}

export default function HomeFlow() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "coaching" | "crisis">("idle");
  const [response, setResponse] = useState<CoachingResponse | null>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = input.trim();
      if (!trimmed) return;

      setStatus("loading");
      setResponse(null);

      setTimeout(() => {
        if (detectCrisis(trimmed)) {
          setStatus("crisis");
        } else {
          const res = getCoachingResponse(trimmed);
          setResponse(res);
          setStatus("coaching");
          saveEntry(trimmed, res);
        }
      }, 600);
    },
    [input]
  );

  return (
    <>
      <div className="relative mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-8 sm:pt-14">
        <HeroSection />

        <div className="mt-10 sm:mt-14">
          <SafetyBanner />
        </div>

        <div className="mt-8">
          <PromptCard
            value={input}
            onChange={setInput}
            onSubmit={handleSubmit}
            isSubmitting={status === "loading"}
          />
        </div>

        {status === "crisis" && (
          <div className="mt-8">
            <CrisisPanel />
          </div>
        )}

        {status === "coaching" && response && (
          <div className="mt-8">
            <ResultPanel response={response} />
          </div>
        )}
      </div>

      <section className="relative border-t border-osa-primary/5 bg-osa-bg-warm/50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <h2 className="font-serif text-2xl font-semibold text-osa-primary text-center sm:text-3xl">
            Perché OsaOra
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-osa-muted">
            Un supporto motivazionale gentile, mai clinico. Pensato per darti chiarezza e piccoli passi concreti.
          </p>
          <div className="mt-10">
            <FeatureCards />
          </div>
        </div>
      </section>
    </>
  );
}
