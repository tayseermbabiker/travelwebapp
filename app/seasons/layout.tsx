import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Where to Travel Now: Best Destinations by Month | Roamovo',
  description: 'Stop guessing the weather. Use our seasonal guide to find peak experiences and off-season bargains for every month of the year.',
  keywords: ['best time to travel', 'seasonal travel guide', 'when to visit', 'travel by season', 'winter destinations', 'summer travel', 'spring break destinations', 'fall foliage travel'],
  openGraph: {
    title: 'Where to Travel Now: Best Destinations by Month',
    description: 'Stop guessing the weather. Find peak experiences and off-season bargains for every month.',
    type: 'article',
    url: '/seasons',
    images: [
      {
        url: '/og-seasons.jpg',
        width: 1200,
        height: 630,
        alt: 'Seasonal Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Where to Travel Now: Best Destinations by Month',
    description: 'Stop guessing the weather. Find peak experiences and off-season bargains for every month.',
  },
  alternates: {
    canonical: '/seasons',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Where to Travel Now: Best Destinations by Month',
  description: '32 destinations across Winter, Spring, Summer, and Fall with weather, costs, crowds, and insider tips.',
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
  author: 'Roamovo',
  url: '/seasons',
});

const faqSchema = generateFAQSchema({
  questions: [
    {
      question: 'What is the best season to travel?',
      answer: 'It depends on your destination and preferences. Winter is perfect for Dubai and Bali. Spring for Japan (cherry blossoms) and Netherlands (tulips). Summer for Greece and Croatia. Fall for New England foliage and Japan.',
    },
    {
      question: 'When should I book my seasonal trip?',
      answer: 'Ideal is 6-8 weeks in advance. Summer trips: book March-April. Fall trips: book June-July. Winter trips: book August-September. Spring trips: book January-February.',
    },
    {
      question: 'Is it cheaper to travel in off-season?',
      answer: 'Yes, significantly. Off-season typically means 30-50% lower accommodation prices, fewer crowds, and easier reservations. Shoulder seasons offer the best balance of good weather and lower costs.',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/' },
    { name: 'Destinations by Season', url: '/seasons' },
  ],
});

export default function SeasonsLayout({
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
