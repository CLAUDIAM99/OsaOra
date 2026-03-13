import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-geist-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OsaOra — Un momento di chiarezza",
  description:
    "Uno spazio gentile per momenti di paura, procrastinazione o blocco. Non è terapia: è un supporto motivazionale che non sostituisce un professionista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${outfit.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-osa-bg font-sans text-osa-text antialiased">
        {children}
      </body>
    </html>
  );
}
