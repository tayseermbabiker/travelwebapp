import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Best Solo Female Travel Destinations | Safety Ratings & Guide | Roamovo',
  description: 'Discover the 16 safest destinations for solo female travelers. Complete guide with safety ratings, costs, female communities, healthcare access, and real tips from women who travel alone.',
  keywords: ['solo female travel', 'safest countries for women', 'women traveling alone', 'solo female destinations', 'female travel safety', 'women solo travel guide'],
  openGraph: {
    title: 'Best Solo Female Travel Destinations | Roamovo',
    description: '16 safest destinations for solo female travelers with safety ratings, costs, and community tips.',
    type: 'article',
    url: '/solo-female-travel',
    images: [
      {
        url: '/og-solo-female.jpg',
        width: 1200,
        height: 630,
        alt: 'Solo Female Travel Safety Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Solo Female Travel Destinations',
    description: '16 safest destinations for women traveling alone. Safety ratings, costs, and tips.',
  },
  alternates: {
    canonical: '/solo-female-travel',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best Solo Female Travel Destinations - Complete Safety Guide',
  description: 'Discover the 16 safest destinations for solo female travelers with safety ratings, costs, and community tips.',
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
  author: 'Roamovo',
  url: '/solo-female-travel',
});

const faqSchema = generateFAQSchema({
  questions: [
    {
      question: 'What are the safest countries for solo female travelers?',
      answer: 'UAE ranks #1 with a 99/100 safety score, followed by Japan (97/100), Singapore (96/100), and New Zealand (94/100). These countries have low crime rates, respectful cultures, and excellent infrastructure for women traveling alone.',
    },
    {
      question: 'How much does solo female travel cost per month?',
      answer: 'Costs vary widely by destination. Budget destinations like Vietnam cost around $800/month, mid-range like Portugal $1,500-2,000/month, and premium destinations like Japan $2,500-3,500/month. This includes accommodation, food, transport, and activities.',
    },
    {
      question: 'Is it safe to travel alone as a woman?',
      answer: 'Yes, with proper research and precautions. Choose destinations with high safety ratings, stay in well-reviewed accommodations, share your itinerary with someone, and trust your instincts. Millions of women travel solo safely every year.',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/' },
    { name: 'Solo Female Travel', url: '/solo-female-travel' },
  ],
});

export default function SoloFemaleTravelLayout({
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
