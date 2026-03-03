import type { Metadata } from 'next';
import JsonLd, { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Best Digital Nomad Cities (WiFi Speed & Cost of Living) | Roamovo',
  description: 'We ranked the top remote work hubs by internet reliability, community, and monthly expenses. Your next office is waiting.',
  keywords: ['digital nomad destinations', 'remote work cities', 'best places for remote work', 'digital nomad visa', 'coworking spaces', 'work from anywhere', 'nomad community'],
  openGraph: {
    title: 'Best Digital Nomad Cities (WiFi Speed & Cost of Living)',
    description: 'Top remote work hubs ranked by internet reliability, community, and monthly expenses.',
    type: 'article',
    url: '/digital-nomad',
    images: [
      {
        url: '/og-digital-nomad.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Nomad Destinations Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Digital Nomad Cities (WiFi Speed & Cost of Living)',
    description: 'Top remote work hubs ranked by internet reliability, community, and monthly expenses.',
  },
  alternates: {
    canonical: '/digital-nomad',
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Best Digital Nomad Cities: WiFi Speed and Cost of Living Ranked',
  description: 'Top destinations for digital nomads with WiFi speeds, coworking spaces, cost of living, and visa options.',
  datePublished: '2026-03-03',
  dateModified: '2026-03-03',
  author: 'Roamovo',
  url: '/digital-nomad',
});

const faqSchema = generateFAQSchema({
  questions: [
    {
      question: 'What is the best city for digital nomads?',
      answer: 'Chiang Mai, Thailand consistently ranks #1 due to low costs ($800-1000/month), fast WiFi (50-100 Mbps), abundant coworking spaces, large nomad community, and easy visa options.',
    },
    {
      question: 'How much does it cost to live as a digital nomad?',
      answer: 'Costs range from $800/month in budget destinations like Vietnam or Thailand to $2,500+/month in cities like Lisbon or Barcelona. Most nomads spend $1,200-1,800/month for comfortable living.',
    },
    {
      question: 'Which countries have digital nomad visas?',
      answer: 'Portugal (D7/D8), Estonia, Croatia, Germany, Spain, Thailand (LTR), Indonesia, Mexico, and Colombia all offer digital nomad or remote work visas ranging from 1-5 years.',
    },
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Home', url: '/' },
    { name: 'Digital Nomad Destinations', url: '/digital-nomad' },
  ],
});

export default function DigitalNomadLayout({
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
