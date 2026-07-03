import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { siteConfig } from "../lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Maldives marketing agency",
    "digital marketing agency Maldives",
    "social media marketing Maldives",
    "creative agency Maldives",
    "branding agency Maldives",
    "advertising agency Maldives",
    "content creation Maldives",
    "resort marketing Maldives",
    "tourism marketing Maldives",
    "café marketing Maldives",
    "event marketing Maldives",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1448,
        height: 1086,
        alt: "Maldives resort campaign created by kulaa.studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
  category: "Marketing",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  other: {
    "geo.region": "MV",
    "geo.placename": "Malé, Maldives",
  },
  icons: {
    icon: [{ url: "/images/kulaa-mark.png", type: "image/png" }],
    apple: "/images/kulaa-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MV" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
