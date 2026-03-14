"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { loadArchive, type ArchiveEntry } from "@/lib/archive";
import ArchiveEntries from "@/components/ArchiveEntries";
import EmptyState from "@/components/EmptyState";
import PageLayout from "@/components/PageLayout";
import ResultPanel from "@/components/ResultPanel";

export default function ArchivePage() {
  const [entries, setEntries] = useState<ArchiveEntry[]>([]);
  const [selected, setSelected] = useState<ArchiveEntry | null>(null);

  useEffect(() => {
    setEntries(loadArchive());
  }, []);

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-16">
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
                <Link href="/" prefetch={false} className="inline-flex items-center justify-center rounded-2xl bg-osa-primary px-5 py-2.5 font-medium text-white transition hover:bg-osa-primary-light">
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
      </div>
    </PageLayout>
  );
}
