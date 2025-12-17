// Site configuration - ideally move to env or config file
const SITE_CONFIG = {
  name: 'Roamovo',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://roamovo.com',
  logo: '/icon-512x512.png',
  defaultImage: '/og-default.jpg',
  description: 'Discover amazing travel destinations and plan your perfect trip with Roamovo.',
  socialLinks: {
    facebook: 'https://facebook.com/roamovo',
    twitter: 'https://twitter.com/roamovo',
    instagram: 'https://instagram.com/roamovo',
  },
};

// Helper to build full URL
const buildUrl = (path: string) => `${SITE_CONFIG.url}${path}`;

// ============ INTERFACES ============

export interface AuthorSchema {
  name: string;
  type?: 'Person' | 'Organization';
  url?: string;
}

export interface ArticleSchema {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: AuthorSchema | string;
  url: string;
  image?: string;
  keywords?: string[];
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

export interface TouristDestinationSchema {
  name: string;
  description: string;
  url: string;
  image?: string | string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
  containedInPlace?: string; // Country or region
  touristType?: string[];
}

export interface TouristAttractionSchema {
  name: string;
  description: string;
  url: string;
  image?: string | string[];
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  aggregateRating?: AggregateRatingSchema;
}

export interface LodgingSchema {
  name: string;
  description: string;
  url: string;
  image?: string | string[];
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  priceRange?: string;
  starRating?: number;
  amenities?: string[];
  aggregateRating?: AggregateRatingSchema;
  checkInTime?: string;
  checkOutTime?: string;
}

export interface ReviewSchema {
  itemReviewed: {
    type: 'TouristAttraction' | 'LodgingBusiness' | 'TouristDestination' | 'Restaurant';
    name: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  author: AuthorSchema | string;
  datePublished: string;
  reviewBody: string;
}

export interface AggregateRatingSchema {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

// ============ SCHEMA GENERATORS ============

export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      url: buildUrl(SITE_CONFIG.logo),
    },
    description: SITE_CONFIG.description,
    sameAs: Object.values(SITE_CONFIG.socialLinks),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
  };
}

export function generateArticleSchema(article: ArticleSchema): object {
  const author = typeof article.author === 'string'
    ? { name: article.author, type: 'Organization' as const }
    : article.author;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': author.type || 'Organization',
      name: author.name,
      url: author.url || SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: buildUrl(SITE_CONFIG.logo),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': buildUrl(article.url),
    },
    image: article.image || buildUrl(SITE_CONFIG.defaultImage),
    ...(article.keywords && { keywords: article.keywords.join(', ') }),
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
      item: buildUrl(item.url),
    })),
  };
}

export function generateTouristDestinationSchema(destination: TouristDestinationSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destination.name,
    description: destination.description,
    url: buildUrl(destination.url),
    image: destination.image || buildUrl(SITE_CONFIG.defaultImage),
    ...(destination.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: destination.geo.latitude,
        longitude: destination.geo.longitude,
      },
    }),
    ...(destination.containedInPlace && {
      containedInPlace: {
        '@type': 'Place',
        name: destination.containedInPlace,
      },
    }),
    ...(destination.touristType && {
      touristType: destination.touristType.map((type) => ({
        '@type': 'Audience',
        audienceType: type,
      })),
    }),
  };
}

export function generateTouristAttractionSchema(attraction: TouristAttractionSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: attraction.name,
    description: attraction.description,
    url: buildUrl(attraction.url),
    image: attraction.image || buildUrl(SITE_CONFIG.defaultImage),
    ...(attraction.address && {
      address: {
        '@type': 'PostalAddress',
        ...attraction.address,
      },
    }),
    ...(attraction.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: attraction.geo.latitude,
        longitude: attraction.geo.longitude,
      },
    }),
    ...(attraction.openingHours && { openingHoursSpecification: attraction.openingHours }),
    ...(attraction.priceRange && { priceRange: attraction.priceRange }),
    ...(attraction.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: attraction.aggregateRating.ratingValue,
        reviewCount: attraction.aggregateRating.reviewCount,
        bestRating: attraction.aggregateRating.bestRating || 5,
        worstRating: attraction.aggregateRating.worstRating || 1,
      },
    }),
  };
}

export function generateLodgingSchema(lodging: LodgingSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: lodging.name,
    description: lodging.description,
    url: buildUrl(lodging.url),
    image: lodging.image || buildUrl(SITE_CONFIG.defaultImage),
    address: {
      '@type': 'PostalAddress',
      ...lodging.address,
    },
    ...(lodging.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: lodging.geo.latitude,
        longitude: lodging.geo.longitude,
      },
    }),
    ...(lodging.priceRange && { priceRange: lodging.priceRange }),
    ...(lodging.starRating && {
      starRating: {
        '@type': 'Rating',
        ratingValue: lodging.starRating,
      },
    }),
    ...(lodging.amenities && { amenityFeature: lodging.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a })) }),
    ...(lodging.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: lodging.aggregateRating.ratingValue,
        reviewCount: lodging.aggregateRating.reviewCount,
        bestRating: lodging.aggregateRating.bestRating || 5,
        worstRating: lodging.aggregateRating.worstRating || 1,
      },
    }),
    ...(lodging.checkInTime && { checkinTime: lodging.checkInTime }),
    ...(lodging.checkOutTime && { checkoutTime: lodging.checkOutTime }),
  };
}

export function generateReviewSchema(review: ReviewSchema): object {
  const author = typeof review.author === 'string'
    ? { name: review.author, type: 'Person' as const }
    : review.author;

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': review.itemReviewed.type,
      name: review.itemReviewed.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.reviewRating.ratingValue,
      bestRating: review.reviewRating.bestRating || 5,
      worstRating: review.reviewRating.worstRating || 1,
    },
    author: {
      '@type': author.type || 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    datePublished: review.datePublished,
    reviewBody: review.reviewBody,
  };
}

// ============ COMPONENT ============

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
