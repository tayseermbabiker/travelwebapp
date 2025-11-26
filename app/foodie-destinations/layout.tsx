import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Foodie Travel Destinations 2025 | Culinary Travel Guide | Wander',
  description: 'Discover the world\'s best food destinations for culinary travelers. From street food to Michelin stars, explore top foodie cities with local dishes, food tours, and insider tips.',
  keywords: ['food travel', 'culinary destinations', 'foodie travel', 'best food cities', 'street food destinations', 'food tourism', 'culinary tourism'],
  openGraph: {
    title: 'Best Foodie Travel Destinations 2025 | Wander',
    description: 'World\'s best food destinations. Street food, local cuisine, and culinary experiences.',
    type: 'article',
    url: '/foodie-destinations',
    images: [
      {
        url: '/og-foodie.jpg',
        width: 1200,
        height: 630,
        alt: 'Foodie Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Foodie Travel Destinations 2025',
    description: 'World\'s best food destinations. Street food to Michelin stars.',
  },
  alternates: {
    canonical: '/foodie-destinations',
  },
};

export default function FoodieDestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
