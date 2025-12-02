import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

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

const articleSchema = generateArticleSchema({
  headline: 'Best Budget Travel Destinations 2025 - Under $30/Day Guide',
  description: 'Discover affordable travel destinations where you can live well on under $30/day with real costs and tips.',
  datePublished: '2025-01-01',
  dateModified: '2025-01-01',
  author: 'Wander',
  url: '/budget-travel',
});

const faqSchema = generateFAQSchema({
  questions: [
    {
      question: 'What is the cheapest country to travel to?',
      answer: 'Vietnam is the cheapest with costs as low as $15/day. Other budget-friendly destinations include Thailand ($20-25/day), Indonesia ($20-25/day), and India ($15-20/day).',
    },
    {
      question: 'Can you really travel on $30 a day?',
      answer: 'Yes, in many destinations. This covers budget accommodation ($5-15), local food ($5-10), transport ($2-5), and activities. Southeast Asia, South Asia, and parts of Central America are especially affordable.',
    },
    {
      question: 'What are the best budget travel tips?',
      answer: 'Stay in hostels or guesthouses, eat street food and local restaurants, use public transport, travel in shoulder season, and choose destinations where your currency goes further.',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/' },
    { name: 'Budget Travel', url: '/budget-travel' },
  ],
});

export default function BudgetTravelLayout({
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
