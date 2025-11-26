import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Solo Female Travel Destinations 2025 | Safety Ratings & Guide | Wander',
  description: 'Discover the 16 safest destinations for solo female travelers in 2025. Complete guide with safety ratings, costs, female communities, healthcare access, and real tips from women who travel alone.',
  keywords: ['solo female travel', 'safest countries for women', 'women traveling alone', 'solo female destinations', 'female travel safety', 'women solo travel guide'],
  openGraph: {
    title: 'Best Solo Female Travel Destinations 2025 | Wander',
    description: '16 safest destinations for solo female travelers with safety ratings, costs, and community tips.',
    type: 'article',
    url: '/solo-female-travel',
    images: [
      {
        url: '/og-solo-female.jpg',
        width: 1200,
        height: 630,
        alt: 'Solo Female Travel Safety Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Solo Female Travel Destinations 2025',
    description: '16 safest destinations for women traveling alone. Safety ratings, costs, and tips.',
  },
  alternates: {
    canonical: '/solo-female-travel',
  },
};

export default function SoloFemaleTravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
