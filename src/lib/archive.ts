import type { CoachingResponse } from "./responseEngine";

export const ARCHIVE_KEY = "osaora-archive";

export interface ArchiveEntry {
  id: string;
  date: string;
  prompt: string;
  response: CoachingResponse;
}

export function loadArchive(): ArchiveEntry[] {
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

export function saveEntry(
  prompt: string,
  response: CoachingResponse
): void {
  const entries = loadArchive();
  const entry: ArchiveEntry = {
    id: crypto.randomUUID(),
    date: new Date().toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    prompt: prompt.slice(0, 200),
    response,
  };
  entries.unshift(entry);
  localStorage.setItem(ARCHIVE_KEY, JSON.stringify(entries.slice(0, 50)));
}
