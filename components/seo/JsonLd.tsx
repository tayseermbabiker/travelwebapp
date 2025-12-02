export interface ArticleSchema {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
  image?: string;
}

export interface FAQSchema {
  questions: {
    question: string;
    answer: string;
  }[];
}

export interface BreadcrumbSchema {
  items: {
    name: string;
    url: string;
  }[];
}

export function generateArticleSchema(article: ArticleSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://travelwebapp-pied.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wander',
      url: 'https://travelwebapp-pied.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://travelwebapp-pied.vercel.app/icon-512x512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://travelwebapp-pied.vercel.app${article.url}`,
    },
    image: article.image || 'https://travelwebapp-pied.vercel.app/og-default.jpg',
  };
}

export function generateFAQSchema(faq: FAQSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(breadcrumb: BreadcrumbSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://travelwebapp-pied.vercel.app${item.url}`,
    })),
  };
}

interface JsonLdProps {
  data: object | object[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
