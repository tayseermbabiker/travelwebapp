import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Digital Nomad Destinations 2025 | Remote Work Cities Guide | Wander',
  description: 'Top destinations for digital nomads and remote workers in 2025. Compare WiFi speeds, coworking spaces, cost of living, visa options, and nomad communities worldwide.',
  keywords: ['digital nomad destinations', 'remote work cities', 'best places for remote work', 'digital nomad visa', 'coworking spaces', 'work from anywhere', 'nomad community'],
  openGraph: {
    title: 'Best Digital Nomad Destinations 2025 | Wander',
    description: 'Top cities for remote workers with WiFi speeds, costs, visas, and nomad communities.',
    type: 'article',
    url: '/digital-nomad',
    images: [
      {
        url: '/og-digital-nomad.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Nomad Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Nomad Destinations 2025',
    description: 'Top cities for remote workers. WiFi, costs, visas, and communities compared.',
  },
  alternates: {
    canonical: '/digital-nomad',
  },
};

export default function DigitalNomadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
