import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://travelwebapp-pied.vercel.app';

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
