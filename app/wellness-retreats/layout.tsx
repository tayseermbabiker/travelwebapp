import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Wellness Travel Destinations 2025 | Spa & Retreat Guide | Wander',
  description: 'Top wellness and spa destinations for relaxation and rejuvenation. Yoga retreats, meditation centers, thermal spas, and holistic healing destinations with costs and programs.',
  keywords: ['wellness travel', 'spa destinations', 'yoga retreats', 'meditation retreats', 'wellness retreats', 'health tourism', 'healing destinations'],
  openGraph: {
    title: 'Best Wellness Travel Destinations 2025 | Wander',
    description: 'Top spa and wellness destinations. Yoga, meditation, and healing retreats.',
    type: 'article',
    url: '/wellness-retreats',
    images: [
      {
        url: '/og-wellness.jpg',
        width: 1200,
        height: 630,
        alt: 'Wellness Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Wellness Travel Destinations 2025',
    description: 'Top spa and wellness destinations for relaxation and healing.',
  },
  alternates: {
    canonical: '/wellness-retreats',
  },
};

export default function WellnessRetreatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
