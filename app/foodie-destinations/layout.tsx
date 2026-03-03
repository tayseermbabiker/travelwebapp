import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: '15 Best Foodie Cities (Ranked by Cost & Quality) | Roamovo',
  description: 'Tired of tourist traps? We ranked the best culinary cities by cost, quality, and local experience. See where to eat, what to budget, and expert local picks.',
  keywords: ['food travel', 'culinary destinations', 'foodie travel', 'best food cities', 'street food destinations', 'food tourism', 'culinary tourism'],
  openGraph: {
    title: '15 Best Foodie Cities (Ranked by Cost & Quality)',
    description: 'We ranked the best culinary cities by cost, quality, and local experience. See where to eat and what to budget.',
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
    title: '15 Best Foodie Cities (Ranked by Cost & Quality)',
    description: 'We ranked the best culinary cities by cost, quality, and local experience.',
  },
  alternates: {
    canonical: '/foodie-destinations',
  },
};

const articleSchema = generateArticleSchema({
  headline: '15 Best Foodie Cities Ranked by Cost and Quality',
  description: 'Discover the world\'s best food destinations from street food to Michelin stars with local dishes and insider tips.',
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
  author: 'Roamovo',
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
