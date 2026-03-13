"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works/", label: "Come funziona" },
  { href: "/archive/", label: "Archivio" },
  { href: "/safety/", label: "Sicurezza" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-osa-primary/5 bg-osa-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-osa-primary sm:text-2xl"
        >
          Osa<span className="text-osa-secondary">Ora</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Menu principale">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-osa-primary/10 text-osa-primary"
                    : "text-osa-muted hover:bg-osa-primary/5 hover:text-osa-text"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-xl p-2 text-osa-primary hover:bg-osa-primary/10 md:hidden"
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-osa-primary/5 bg-osa-bg/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto max-w-5xl space-y-1 px-4 py-4" aria-label="Menu mobile">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                  pathname === href ? "bg-osa-primary/10 text-osa-primary" : "text-osa-muted"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
