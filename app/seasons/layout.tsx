import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Best Travel Destinations by Season 2025 | When to Visit Guide | Wander',
  description: 'Discover the perfect destinations for every season. Our complete guide covers 32 destinations across Winter, Spring, Summer, and Fall with weather, costs, crowds, and insider tips.',
  keywords: ['best time to travel', 'seasonal travel guide', 'when to visit', 'travel by season', 'winter destinations', 'summer travel', 'spring break destinations', 'fall foliage travel'],
  openGraph: {
    title: 'Best Travel Destinations by Season 2025 | Wander',
    description: 'Find your perfect destination based on the season. 32 destinations with weather data, costs, and crowd levels.',
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
    title: 'Best Travel Destinations by Season 2025',
    description: 'Find your perfect destination based on the season. Complete guide with 32 destinations.',
  },
  alternates: {
    canonical: '/seasons',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best Travel Destinations by Season 2025 - Complete Guide',
  description: '32 destinations across Winter, Spring, Summer, and Fall with weather, costs, crowds, and insider tips.',
  datePublished: '2025-01-01',
  dateModified: '2025-01-01',
  author: 'Wander',
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
