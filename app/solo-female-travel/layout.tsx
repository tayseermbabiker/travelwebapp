import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Solo Female Travel: 12 Safest Cities to Visit Alone | Roamovo',
  description: 'Verified safety ratings and solo-friendly itineraries. Find destinations where you can explore confidently without the single supplement stress.',
  keywords: ['solo female travel', 'safest countries for women', 'women traveling alone', 'solo female destinations', 'female travel safety', 'women solo travel guide'],
  openGraph: {
    title: 'Solo Female Travel: 12 Safest Cities to Visit Alone',
    description: 'Verified safety ratings and solo-friendly itineraries for women traveling alone.',
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
    title: 'Solo Female Travel: 12 Safest Cities to Visit Alone',
    description: 'Verified safety ratings and solo-friendly itineraries for women traveling alone.',
  },
  alternates: {
    canonical: '/solo-female-travel',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Solo Female Travel: 12 Safest Cities to Visit Alone',
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
