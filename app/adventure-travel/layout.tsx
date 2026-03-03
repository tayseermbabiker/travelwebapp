import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Best Adventure Travel Destinations | Outdoor & Extreme Sports Guide | Roamovo',
  description: 'Top adventure travel destinations for thrill-seekers. Hiking, diving, climbing, safaris, and extreme sports. Find your next adrenaline rush with difficulty levels, costs, and safety tips.',
  keywords: ['adventure travel', 'adventure destinations', 'extreme sports travel', 'hiking destinations', 'diving spots', 'outdoor adventure', 'thrill-seeking travel'],
  openGraph: {
    title: 'Best Adventure Travel Destinations | Roamovo',
    description: 'Top adventure destinations for hiking, diving, climbing, and extreme sports.',
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
    title: 'Best Adventure Travel Destinations',
    description: 'Top adventure destinations. Hiking, diving, climbing, and extreme sports.',
  },
  alternates: {
    canonical: '/adventure-travel',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best Adventure Travel Destinations - Extreme Sports Guide',
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
