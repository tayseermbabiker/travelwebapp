import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Budget Travel Destinations 2025 | Cheap Travel Under $30/Day | Wander',
  description: 'Discover affordable travel destinations where you can live well on under $30/day. Budget backpacker guide with accommodation, food, transport costs, and money-saving tips.',
  keywords: ['budget travel', 'cheap travel destinations', 'affordable travel', 'backpacker destinations', 'travel on a budget', 'cheap countries to visit', 'budget backpacking'],
  openGraph: {
    title: 'Best Budget Travel Destinations 2025 | Wander',
    description: 'Affordable destinations under $30/day. Budget travel guide with real costs.',
    type: 'article',
    url: '/budget-travel',
    images: [
      {
        url: '/og-budget.jpg',
        width: 1200,
        height: 630,
        alt: 'Budget Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Budget Travel Destinations 2025',
    description: 'Affordable destinations under $30/day with real costs and tips.',
  },
  alternates: {
    canonical: '/budget-travel',
  },
};

export default function BudgetTravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
