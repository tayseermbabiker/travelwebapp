import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: '14 Epic Adventure Travel Spots for Thrill-Seekers | Roamovo',
  description: 'Beyond the hiking trail. Discover extreme sports, remote treks, and outdoor bucket-list destinations for the true adrenaline junkie. Difficulty levels and costs included.',
  keywords: ['adventure travel', 'adventure destinations', 'extreme sports travel', 'hiking destinations', 'diving spots', 'outdoor adventure', 'thrill-seeking travel'],
  openGraph: {
    title: '14 Epic Adventure Travel Spots for Thrill-Seekers',
    description: 'Extreme sports, remote treks, and outdoor bucket-list destinations with difficulty levels and costs.',
    type: 'article',
    url: '/adventure-travel',
    images: [
      {
        url: '/og-adventure.jpg',
        width: 1200,
        height: 630,
        alt: 'Adventure Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '14 Epic Adventure Travel Spots for Thrill-Seekers',
    description: 'Extreme sports, remote treks, and outdoor bucket-list destinations with difficulty levels and costs.',
  },
  alternates: {
    canonical: '/adventure-travel',
  },
};

const articleSchema = generateArticleSchema({
  headline: '14 Epic Adventure Travel Spots for Thrill-Seekers',
  description: 'Top adventure destinations for hiking, diving, climbing, and extreme sports with difficulty levels and costs.',
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
  author: 'Roamovo',
  url: '/adventure-travel',
});

const faqSchema = generateFAQSchema({
  questions: [
    {
      question: 'What is the best country for adventure travel?',
      answer: 'New Zealand offers the widest range from bungee jumping to glacier hiking. Costa Rica is best for beginners. Nepal for serious trekking. Patagonia for epic landscapes.',
    },
    {
      question: 'How fit do I need to be for adventure travel?',
      answer: 'It depends on the activity. Zip-lining and easy hikes require no fitness. Multi-day treks need moderate cardio fitness. Mountain climbing requires months of preparation.',
    },
    {
      question: 'Is adventure travel safe?',
      answer: 'Yes, with proper preparation. Use certified guides and operators, get appropriate travel insurance, check weather conditions, and be honest about your fitness level.',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/' },
    { name: 'Adventure Travel', url: '/adventure-travel' },
  ],
});

export default function AdventureTravelLayout({
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
