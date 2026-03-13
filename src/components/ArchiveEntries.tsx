"use client";

import { Calendar } from "lucide-react";
import type { CoachingResponse } from "./ResultPanel";

export interface ArchiveEntry {
  id: string;
  date: string;
  prompt: string;
  response: CoachingResponse;
}

interface ArchiveEntriesProps {
  entries: ArchiveEntry[];
  onSelect?: (entry: ArchiveEntry) => void;
}

export default function ArchiveEntries({ entries, onSelect }: ArchiveEntriesProps) {
  if (entries.length === 0) return null;

  return (
    <ul className="space-y-4">
      {entries.map((entry) => (
        <li key={entry.id}>
          <button
            type="button"
            onClick={() => onSelect?.(entry)}
            className="w-full rounded-3xl border border-osa-primary/10 bg-osa-card p-5 text-left shadow-soft backdrop-blur-xl transition hover:border-osa-primary/20 hover:shadow-glass focus:outline-none focus:ring-2 focus:ring-osa-primary/20"
          >
            <div className="flex items-center gap-2 text-sm text-osa-muted">
              <Calendar className="h-4 w-4" />
              {entry.date}
            </div>
            <p className="mt-2 line-clamp-2 font-medium text-osa-text">
              {entry.prompt}
            </p>
            <p className="mt-1 line-clamp-1 text-sm text-osa-muted">
              {entry.response.quote}
            </p>
          </button>
        </li>
      ))}
    </ul>
  );
}
