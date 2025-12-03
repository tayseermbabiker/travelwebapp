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
      url: 'https://roamovo.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Roamovo',
      url: 'https://roamovo.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://roamovo.com/icon-512x512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://roamovo.com${article.url}`,
    },
    image: article.image || 'https://roamovo.com/og-default.jpg',
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
      item: `https://roamovo.com${item.url}`,
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
