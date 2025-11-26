import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Family Travel Destinations 2025 | Kid-Friendly Vacation Guide | Wander',
  description: 'Top family-friendly travel destinations for 2025. Theme parks, beaches, educational trips, and adventures safe for kids of all ages. Includes family costs, activities, and accommodation tips.',
  keywords: ['family travel', 'kid-friendly destinations', 'family vacation spots', 'travel with kids', 'family-friendly holidays', 'best family vacations'],
  openGraph: {
    title: 'Best Family Travel Destinations 2025 | Wander',
    description: 'Top family-friendly destinations. Theme parks, beaches, and kid-safe adventures.',
    type: 'article',
    url: '/family-travel',
    images: [
      {
        url: '/og-family.jpg',
        width: 1200,
        height: 630,
        alt: 'Family Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Family Travel Destinations 2025',
    description: 'Top family-friendly destinations with kids activities and safety tips.',
  },
  alternates: {
    canonical: '/family-travel',
  },
};

export default function FamilyTravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
