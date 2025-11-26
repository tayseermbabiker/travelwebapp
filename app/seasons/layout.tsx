import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Travel Destinations by Season 2025 | When to Visit Guide | Wander',
  description: 'Discover the perfect destinations for every season. Our complete guide covers 32 destinations across Winter, Spring, Summer, and Fall with weather, costs, crowds, and insider tips.',
  keywords: ['best time to travel', 'seasonal travel guide', 'when to visit', 'travel by season', 'winter destinations', 'summer travel', 'spring break destinations', 'fall foliage travel'],
  openGraph: {
    title: 'Best Travel Destinations by Season 2025 | Wander',
    description: 'Find your perfect destination based on the season. 32 destinations with weather data, costs, and crowd levels.',
    type: 'article',
    url: '/seasons',
    images: [
      {
        url: '/og-seasons.jpg',
        width: 1200,
        height: 630,
        alt: 'Seasonal Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Travel Destinations by Season 2025',
    description: 'Find your perfect destination based on the season. Complete guide with 32 destinations.',
  },
  alternates: {
    canonical: '/seasons',
  },
};

export default function SeasonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
