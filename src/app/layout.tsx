import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Integral Studio | Building Internet Companies That Compound",
    template: "%s | Integral Studio",
  },
  description:
    "Integral Studio builds scalable software, automation systems, and digital products engineered for growth, leverage, and long-term control.",
  keywords: [
    "SaaS studio",
    "AI automation agency",
    "AI product studio",
    "startup engineering studio",
    "AI systems company",
    "SaaS development studio",
    "AI infrastructure company",
  ],
  authors: [{ name: "Integral Studio" }],
  creator: "Integral Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://integral.studio",
    title: "Integral Studio | Building Internet Companies That Compound",
    description:
      "Integral Studio builds scalable software, automation systems, and digital products engineered for growth, leverage, and long-term control.",
    siteName: "Integral Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Integral Studio | Building Internet Companies That Compound",
    description:
      "Integral Studio builds scalable software, automation systems, and digital products engineered for growth, leverage, and long-term control.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { GlobalEffects } from "@/components/global-effects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          plusJakarta.variable,
          "min-h-screen bg-background font-sans antialiased selection:bg-white/10 selection:text-white"
        )}
      >
        <GlobalEffects />
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
