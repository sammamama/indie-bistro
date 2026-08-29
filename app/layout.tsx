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

const description =
  "Indian kitchen on Centre Rd, Bentleigh. Dosa, biryani, tandoori and Indo-Chinese, dine in or delivered. Good food. Cold drinks. Zero rush.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Indie Bistro — Indian Restaurant in Bentleigh, Melbourne",
    template: "%s | Indie Bistro",
  },
  description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Indie Bistro — Indian Restaurant in Bentleigh, Melbourne",
    description,
    url: site.url,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indie Bistro — Indian Restaurant in Bentleigh, Melbourne",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${pinyonScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
