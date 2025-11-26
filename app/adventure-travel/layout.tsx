import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Adventure Travel Destinations 2025 | Outdoor & Extreme Sports Guide | Wander',
  description: 'Top adventure travel destinations for thrill-seekers. Hiking, diving, climbing, safaris, and extreme sports. Find your next adrenaline rush with difficulty levels, costs, and safety tips.',
  keywords: ['adventure travel', 'adventure destinations', 'extreme sports travel', 'hiking destinations', 'diving spots', 'outdoor adventure', 'thrill-seeking travel'],
  openGraph: {
    title: 'Best Adventure Travel Destinations 2025 | Wander',
    description: 'Top adventure destinations for hiking, diving, climbing, and extreme sports.',
    type: 'article',
    url: '/adventure-travel',
    images: [
      {
        url: '/og-adventure.jpg',
        width: 1200,
        height: 630,
        alt: 'Adventure Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Adventure Travel Destinations 2025',
    description: 'Top adventure destinations. Hiking, diving, climbing, and extreme sports.',
  },
  alternates: {
    canonical: '/adventure-travel',
  },
};

export default function AdventureTravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
