import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { Header } from "@/components/layout/Header";
import { MobileNav } from "@/components/layout/MobileNav";
import { ReadingRuler } from "@/components/accessibility/ReadingRuler";
import { assetPath } from "@/lib/asset-path";

// Declared here rather than in globals.css so font URLs get the GitHub Pages basePath
const fontFaces = [
  { family: "Lexend", file: "Lexend-Variable.woff2", weight: "100 900" },
  { family: "OpenDyslexic", file: "OpenDyslexic-Regular.woff2", weight: "400" },
  { family: "OpenDyslexic", file: "OpenDyslexic-Bold.woff2", weight: "700" },
]
  .map(
    (f) =>
      `@font-face{font-family:"${f.family}";src:url("${assetPath(`/fonts/${f.file}`)}") format("woff2");font-weight:${f.weight};font-style:normal;font-display:swap}`
  )
  .join("");

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
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaces }} />
      </head>
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
