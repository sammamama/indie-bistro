import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  Pinyon_Script,
} from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/floating-nav";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Indie Bistro — Bentleigh",
    template: "%s | Indie Bistro",
  },
  description:
    "Indian kitchen on Centre Rd, Bentleigh. Good food. Cold drinks. Zero rush.",
  openGraph: {
    title: "Indie Bistro — Bentleigh",
    description:
      "Indian kitchen on Centre Rd, Bentleigh. Good food. Cold drinks. Zero rush.",
    url: site.url,
    siteName: "Indie Bistro",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
