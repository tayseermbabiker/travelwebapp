import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Best Wellness Travel Destinations | Spa & Retreat Guide | Roamovo',
  description: 'Top wellness and spa destinations for relaxation and rejuvenation. Yoga retreats, meditation centers, thermal spas, and holistic healing destinations with costs and programs.',
  keywords: ['wellness travel', 'spa destinations', 'yoga retreats', 'meditation retreats', 'wellness retreats', 'health tourism', 'healing destinations'],
  openGraph: {
    title: 'Best Wellness Travel Destinations | Roamovo',
    description: 'Top spa and wellness destinations. Yoga, meditation, and healing retreats.',
    type: 'article',
    url: '/wellness-retreats',
    images: [
      {
        url: '/og-wellness.jpg',
        width: 1200,
        height: 630,
        alt: 'Wellness Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Wellness Travel Destinations',
    description: 'Top spa and wellness destinations for relaxation and healing.',
  },
  alternates: {
    canonical: '/wellness-retreats',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best Wellness Travel Destinations - Spa & Retreat Guide',
  description: 'Top wellness destinations for yoga, meditation, spa retreats, and holistic healing experiences.',
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
  author: 'Roamovo',
  url: '/wellness-retreats',
});

const faqSchema = generateFAQSchema({
  questions: [
    {
      question: 'What is the best destination for a wellness retreat?',
      answer: 'Bali offers the best value with yoga retreats from $50-200/day. India (Rishikesh) for authentic yoga. Thailand for detox programs. Switzerland for luxury longevity clinics.',
    },
    {
      question: 'How much do wellness retreats cost?',
      answer: 'Budget retreats in Bali or Thailand start at $50-100/day. Mid-range European spas $200-400/day. Luxury programs in Switzerland or Maldives $500-2,000+/day.',
    },
    {
      question: 'How long should a wellness retreat be?',
      answer: 'Minimum 5-7 days for meaningful results. 14-21 days for deeper transformation. Weekend retreats are good for introductions but limited in lasting impact.',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/' },
    { name: 'Wellness Retreats', url: '/wellness-retreats' },
  ],
});

export default function WellnessRetreatsLayout({
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
