import type { Metadata } from "next";
import "./globals.css";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { ReadingRuler } from "@/components/accessibility/ReadingRuler";

export const metadata: Metadata = {
  title: "Teacher Loulou - Apprendre autrement",
  description:
    "Site d'apprentissage adapté aux troubles DYS et TDAH pour collégiens et lycéens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <AccessibilityProvider>
          <ReadingRuler />
          <Header />
          <main className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-5xl px-4 pb-20 pt-6 sm:pb-6">
            {children}
          </main>
          <MobileNav />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
