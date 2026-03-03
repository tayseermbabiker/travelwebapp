import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Festival Calendar: Don\'t Miss These Events | Roamovo',
  description: 'From Holi to Tomorrowland. Plan your trip around the world\'s most iconic cultural celebrations and music festivals. Dates, costs, and travel tips.',
  keywords: ['world festivals', 'cultural festivals', 'best festivals', 'festival travel', 'cultural events', 'international celebrations', 'festival guide'],
  openGraph: {
    title: 'Global Festival Calendar: Don\'t Miss These Events',
    description: 'Plan your trip around the world\'s most iconic cultural celebrations and music festivals.',
    type: 'article',
    url: '/festivals',
    images: [
      {
        url: '/og-festivals.jpg',
        width: 1200,
        height: 630,
        alt: 'World Festivals Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Festival Calendar: Don\'t Miss These Events',
    description: 'Plan your trip around the world\'s most iconic festivals. Dates, costs, and travel tips.',
  },
  alternates: {
    canonical: '/festivals',
  },
};

export default function FestivalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
