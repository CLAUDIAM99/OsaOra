import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OsaOra",
  description: "OsaOra — il tuo spazio, il tuo tempo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased min-h-screen bg-osa-bg text-osa-text">
        {children}
      </body>
    </html>
  );
}
