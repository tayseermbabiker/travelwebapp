import type { Metadata } from "next";
import { Poppins, Mulish } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-mulish',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: "Wander - AI-Powered Adventure Travel Planning",
  description: "Discover your perfect adventure with AI. Get personalized 3-day itineraries with bookable flights, hotels, and activities in 60 seconds.",
  keywords: ["travel planning", "AI travel", "itinerary generator", "Dubai travel", "adventure travel"],
  authors: [{ name: "Wander" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Wander - AI Travel Planner",
    description: "Plan your perfect adventure in 60 seconds with AI",
    siteName: "Wander",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wander - AI Travel Planner",
    description: "Plan your perfect adventure in 60 seconds",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Wander" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wander" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#14b8a6" />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-72x72.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-72x72.png" />
      </head>
      <body className={`${poppins.variable} ${mulish.variable} font-sans`} style={{ fontFamily: 'var(--font-poppins), var(--font-mulish), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
