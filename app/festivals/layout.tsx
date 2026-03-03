import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best World Festivals | Cultural Events & Celebrations Guide | Roamovo',
  description: 'Discover the world\'s best festivals and cultural celebrations. From cherry blossoms in Japan to Carnival in Rio. Includes dates, costs, safety ratings, and solo female travel tips.',
  keywords: ['world festivals', 'cultural festivals', 'best festivals', 'festival travel', 'cultural events', 'international celebrations', 'festival guide'],
  openGraph: {
    title: 'Best World Festivals | Roamovo',
    description: 'World\'s best festivals and cultural celebrations with dates, costs, and safety tips.',
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
    title: 'Best World Festivals',
    description: 'World\'s best festivals with dates, costs, and travel tips.',
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
