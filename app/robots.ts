import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://roamovo.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/itinerary/',
          '/_next/',
          '/offline',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
