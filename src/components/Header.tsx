"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/progetti/", label: "Progetti" },
  { href: "/tempo/", label: "Tempo" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-osa-muted/20 bg-osa-bg/95 backdrop-blur supports-[backdrop-filter]:bg-osa-bg/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-osa-text no-underline hover:text-osa-accent transition-colors"
        >
          <span className="text-xl">Osa</span>
          <span className="text-xl text-osa-accent">Ora</span>
        </Link>
        <nav className="flex items-center gap-1" aria-label="Menu principale">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-osa-accent focus:ring-offset-2 focus:ring-offset-osa-bg ${
                  isActive
                    ? "bg-osa-accent/15 text-osa-accent"
                    : "text-osa-muted hover:bg-osa-soft hover:text-osa-text"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
