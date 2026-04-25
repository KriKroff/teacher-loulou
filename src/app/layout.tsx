import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { ReadingRuler } from "@/components/accessibility/ReadingRuler";

export const metadata: Metadata = {
  title: "Teacher Loulou - Apprendre autrement",
  description:
    "Site d'apprentissage adapté aux troubles DYS et TDAH pour collégiens et lycéens",
  robots: { index: false, follow: false },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only fixed left-2 top-2 z-50 rounded bg-accent-600 px-3 py-2 text-white"
        >
          Aller au contenu
        </a>
        <meta name="theme-color" content="#FFF8F0" />
        <AccessibilityProvider>
          <ReadingRuler />
          <Header />
          <main
            id="main-content"
            className="mx-auto min-h-[calc(100vh-3.5rem)] max-w-5xl px-4 pb-20 pt-6 sm:pb-6"
          >
            {children}
          </main>
          <MobileNav />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
