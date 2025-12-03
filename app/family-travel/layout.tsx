import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Best Family Travel Destinations 2025 | Kid-Friendly Vacation Guide | Roamovo',
  description: 'Top family-friendly travel destinations for 2025. Theme parks, beaches, educational trips, and adventures safe for kids of all ages. Includes family costs, activities, and accommodation tips.',
  keywords: ['family travel', 'kid-friendly destinations', 'family vacation spots', 'travel with kids', 'family-friendly holidays', 'best family vacations'],
  openGraph: {
    title: 'Best Family Travel Destinations 2025 | Roamovo',
    description: 'Top family-friendly destinations. Theme parks, beaches, and kid-safe adventures.',
    type: 'article',
    url: '/family-travel',
    images: [
      {
        url: '/og-family.jpg',
        width: 1200,
        height: 630,
        alt: 'Family Travel Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Family Travel Destinations 2025',
    description: 'Top family-friendly destinations with kids activities and safety tips.',
  },
  alternates: {
    canonical: '/family-travel',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best Family Travel Destinations 2025 - Kid-Friendly Guide',
  description: 'Top family-friendly travel destinations with activities, safety ratings, and costs for traveling with kids.',
  datePublished: '2025-01-01',
  dateModified: '2025-01-01',
  author: 'Roamovo',
  url: '/family-travel',
});

const faqSchema = generateFAQSchema({
  questions: [
    {
      question: 'What are the best destinations for traveling with kids?',
      answer: 'Japan and Singapore top the list for safety and kid-friendliness. Thailand offers great value for families. Portugal and Spain are excellent European options with beaches and culture.',
    },
    {
      question: 'How much does family travel cost?',
      answer: 'Budget destinations like Thailand cost around $3,000/month for a family of 4. Mid-range destinations like Portugal $4,500-6,000/month. Premium destinations like Japan $6,000-8,000/month.',
    },
    {
      question: 'What age is best to travel with kids?',
      answer: 'Any age works with proper planning. Under 2 is easier (free flights, flexible schedules). Ages 5-12 are ideal for engaging activities. Teens can handle longer trips and more adventure.',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/' },
    { name: 'Family Travel', url: '/family-travel' },
  ],
});

export default function FamilyTravelLayout({
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
