import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Kid-Friendly Travel: Best Destinations for All Ages | Roamovo',
  description: 'From toddler-proof resorts to teen-approved adventures. Compare flight times, amenities, and family budgets for your next getaway.',
  keywords: ['family travel', 'kid-friendly destinations', 'family vacation spots', 'travel with kids', 'family-friendly holidays', 'best family vacations'],
  openGraph: {
    title: 'Kid-Friendly Travel: Best Destinations for All Ages',
    description: 'From toddler-proof resorts to teen-approved adventures. Compare amenities and family budgets.',
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
    title: 'Kid-Friendly Travel: Best Destinations for All Ages',
    description: 'From toddler-proof resorts to teen-approved adventures. Compare amenities and family budgets.',
  },
  alternates: {
    canonical: '/family-travel',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Kid-Friendly Travel: Best Destinations for All Ages',
  description: 'Top family-friendly travel destinations with activities, safety ratings, and costs for traveling with kids.',
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
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
