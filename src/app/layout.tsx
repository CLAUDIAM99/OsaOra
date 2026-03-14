import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OsaOra — Un momento di chiarezza",
  description:
    "Supporto motivazionale per quando ti senti bloccata, impaurita o sopraffatta. Non è terapia: è come avere un coach mentale al tuo fianco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-osa-bg font-sans text-osa-text antialiased">
        {children}
      </body>
    </html>
  );
}
