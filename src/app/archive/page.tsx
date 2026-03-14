"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BackgroundGlow from "@/components/BackgroundGlow";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArchiveEntries, { type ArchiveEntry } from "@/components/ArchiveEntries";
import EmptyState from "@/components/EmptyState";
import ResultPanel from "@/components/ResultPanel";

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

export default function ArchivePage() {
  const [entries, setEntries] = useState<ArchiveEntry[]>([]);
  const [selected, setSelected] = useState<ArchiveEntry | null>(null);

  useEffect(() => {
    setEntries(loadArchive());
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden aurora-bg">
      <BackgroundGlow />
      <div className="relative z-10">
        <Navbar />
        <main className="relative mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-16">
        <h1 className="font-serif text-3xl font-semibold text-osa-primary sm:text-4xl">
          Archivio
        </h1>
        <p className="mt-2 text-osa-muted">
          Le tue risposte passate. Rileggere può aiutare a ricordare i passi che funzionano per te.
        </p>

        {entries.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              title="Nessuna risposta ancora"
              description="Quando userai OsaOra dalla home, le tue risposte appariranno qui così potrai rileggerle quando vuoi."
              action={
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-2xl bg-osa-primary px-5 py-2.5 font-medium text-white transition hover:bg-osa-primary-light"
                >
                  Vai alla home
                </Link>
              }
            />
          </div>
        ) : (
          <div className="mt-10 space-y-8">
            <ArchiveEntries entries={entries} onSelect={setSelected} />
            {selected && (
              <div className="mt-8">
                <ResultPanel response={selected.response} />
              </div>
            )}
          </div>
        )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
