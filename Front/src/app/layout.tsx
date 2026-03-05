import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer"; 
import Preloader from "@/components/shared/Preloader";
import { Suspense } from "react";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper"; 

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://emeralddt.com'),
  title: {
    default: "Emerald DT | Colombian Emeralds & High Engineering",
    template: "%s | Emerald DT"
  },
  description: "The world's premier platform for high-value Colombian emeralds. Developed by Software DT.",
  keywords: ["Emeralds", "Colombia", "Luxury", "NietoDeveloper", "Software DT", "Gems", "Engineering"],
  icons: {
    icon: [{ url: "/assets/img/logo.png", href: "/assets/img/logo.png", type: "image/png" }],
    shortcut: "/assets/img/logo.png",
    apple: [{ url: "/assets/img/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>; 
}

/**
 * Emerald DT - Root Layout Orchestrator
 * Ajuste: Zero-Flicker Engineering
 * Bloqueo de renderizado inicial mediante clase 'js-loading'
 */
export default async function RootLayout(props: RootLayoutProps) {
  const { children, params } = props;
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";

  return (
    <html 
      lang={lang} 
      className={`${sans.variable} ${mono.variable} scroll-smooth js-loading`}
      suppressHydrationWarning 
    >
      {/* AJUSTE DE INGENIERÍA: 
        Forzamos el body a ser bg-black y ocultamos el contenido 
        hasta que el Preloader (Client Component) remueva 'js-loading'.
      */}
      <body className="antialiased bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-200 min-h-screen flex flex-col font-sans overflow-x-hidden">
        
        {/* Capa de Preloader: Prioridad Z-Index Máxima */}
        <Suspense fallback={null}>
          <Preloader />
        </Suspense>

        {/* ID: main-content 
          Sincronizado con el CSS crítico para evitar el parpadeo centesimal.
        */}
        <div id="main-content" className="flex flex-col min-h-screen opacity-0 transition-opacity duration-1000">
          <Navbar />
          
          <main className="flex-grow w-full pt-20 md:pt-24 relative z-10">
            <PageTransitionWrapper>
              {children}
            </PageTransitionWrapper>
          </main>

          <Footer />
        </div>

        {/* Inline CSS para garantizar bloqueo inmediato antes de que cargue globals.css */}
        <style dangerouslySetInnerHTML={{ __html: `
          .js-loading #main-content { opacity: 0 !important; visibility: hidden !important; }
          .js-loaded #main-content { opacity: 1 !important; visibility: visible !important; }
        `}} />
      </body>
    </html>
  );
}