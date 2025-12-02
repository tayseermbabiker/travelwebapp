import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

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

const articleSchema = generateArticleSchema({
  headline: 'Best Foodie Travel Destinations 2025 - Culinary Travel Guide',
  description: 'Discover the world\'s best food destinations from street food to Michelin stars with local dishes and insider tips.',
  datePublished: '2025-01-01',
  dateModified: '2025-01-01',
  author: 'Wander',
  url: '/foodie-destinations',
});

const faqSchema = generateFAQSchema({
  questions: [
    {
      question: 'What city has the best food in the world?',
      answer: 'Tokyo holds the most Michelin stars (169) of any city. Bangkok is best for street food. Lima for innovative cuisine. Naples for authentic Italian. Mexico City for variety and value.',
    },
    {
      question: 'How much should I budget for food travel?',
      answer: 'Budget destinations like Vietnam and Thailand: $10-20/day. Mid-range like Spain and Italy: $40-70/day. Premium experiences in Tokyo or Paris: $100+/day for fine dining.',
    },
    {
      question: 'Should I book food tours in advance?',
      answer: 'Popular tours book up 2-4 weeks ahead. Michelin restaurants require months of advance booking. Street food and local markets need no reservations - just show up.',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/' },
    { name: 'Foodie Destinations', url: '/foodie-destinations' },
  ],
});

export default function FoodieDestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumbSchema]} />
      {children}
    </>
  );
}
