import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { SITE_URL } from "@/lib/site";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Jack of all Blades — Mowing & Lawn Care | Watertown, SD",
  description:
    "Owner-operated mowing and lawn care in Watertown, South Dakota. Caleb Brewster handles every yard himself — mowing, edging, and seasonal cleanup, done right.",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jack of all Blades — Mowing & Lawn Care | Watertown, SD",
    description:
      "Owner-operated mowing and lawn care in Watertown, South Dakota. Caleb Brewster handles every yard himself.",
    url: SITE_URL,
    siteName: "Jack of all Blades",
    locale: "en_US",
    type: "website",
    images: [{ url: "/hero/mowing-poster.jpg", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack of all Blades — Mowing & Lawn Care | Watertown, SD",
    description:
      "Owner-operated mowing and lawn care in Watertown, South Dakota.",
    images: ["/hero/mowing-poster.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${inter.variable}`}>
      <body className="bg-bg font-body text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to main content
        </a>
        <LocalBusinessSchema />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
