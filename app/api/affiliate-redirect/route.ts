import { NextRequest, NextResponse } from 'next/server';
import { logAffiliateClick as logClickToMongoDB } from '@/lib/mongodb/models';

export const dynamic = 'force-dynamic';

interface AffiliateClick {
  activityId: string;
  provider: string;
  timestamp: string;
  userAgent?: string;
  referer?: string;
}

/**
 * Affiliate Click Proxy
 *
 * Purpose:
 * 1. Security: Hide real affiliate partner IDs from client
 * 2. Analytics: Track all affiliate clicks for performance monitoring
 * 3. Flexibility: Easy to switch affiliate links without frontend changes
 *
 * Usage:
 * /api/affiliate-redirect?activity=desert-safari-1&provider=getyourguide
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const activityId = searchParams.get('activity');
    const provider = searchParams.get('provider');
    const hotelId = searchParams.get('hotel');

    // Validation
    if (!activityId && !hotelId) {
      return NextResponse.json(
        { error: 'Missing activity or hotel ID' },
        { status: 400 }
      );
    }

    if (!provider) {
      return NextResponse.json(
        { error: 'Missing provider parameter' },
        { status: 400 }
      );
    }

    // Get affiliate URL from database
    let affiliateUrl: string | null = null;

    if (activityId) {
      affiliateUrl = await getActivityAffiliateUrl(activityId, provider);
    } else if (hotelId) {
      affiliateUrl = await getHotelAffiliateUrl(hotelId, provider);
    }

    if (!affiliateUrl) {
      return NextResponse.json(
        { error: 'Affiliate link not found' },
        { status: 404 }
      );
    }

    // Track the click (for analytics)
    const clickData: AffiliateClick = {
      activityId: activityId || hotelId || '',
      provider,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
      referer: request.headers.get('referer') || undefined,
    };

    // Log click (will be stored in MongoDB later)
    await logAffiliateClick(clickData);

    // Redirect to affiliate link
    return NextResponse.redirect(affiliateUrl);

  } catch (error) {
    console.error('Affiliate redirect error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * Get activity affiliate URL from database
 */
async function getActivityAffiliateUrl(
  activityId: string,
  provider: string
): Promise<string | null> {
  try {
    // Import activities database
    const activitiesData = await import('@/lib/database/activities.json');

    // Search all destinations
    for (const destination in activitiesData) {
      if (destination === 'default') continue; // Skip default export

      const activities = activitiesData[destination as keyof typeof activitiesData];

      // Type guard to ensure activities is an array
      if (Array.isArray(activities)) {
        const activity = activities.find((a: any) => a.id === activityId);

        if (activity && activity.affiliateLinks) {
          const link = activity.affiliateLinks[provider as keyof typeof activity.affiliateLinks];
          if (link && typeof link === 'object' && 'url' in link) {
            return link.url;
          }
        }
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching activity affiliate URL:', error);
    return null;
  }
}

/**
 * Get hotel affiliate URL from database
 */
async function getHotelAffiliateUrl(
  hotelId: string,
  provider: string
): Promise<string | null> {
  try {
    // Import hotels database
    const hotelsData = await import('@/lib/database/hotels.json');

    // Search all destinations
    for (const destination in hotelsData) {
      if (destination === 'default') continue; // Skip default export

      const hotels = hotelsData[destination as keyof typeof hotelsData];

      // Type guard to ensure hotels is an array
      if (Array.isArray(hotels)) {
        const hotel = hotels.find((h: any) => h.id === hotelId);

        if (hotel && hotel.affiliateLinks) {
          const link = hotel.affiliateLinks[provider as keyof typeof hotel.affiliateLinks];
          if (link && typeof link === 'object' && 'url' in link) {
            return link.url;
          }
        }
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching hotel affiliate URL:', error);
    return null;
  }
}

/**
 * Log affiliate click for analytics
 * Stores in MongoDB (with graceful degradation if not configured)
 */
async function logAffiliateClick(clickData: AffiliateClick): Promise<void> {
  console.log('📊 Affiliate Click:', {
    activityId: clickData.activityId,
    provider: clickData.provider,
    timestamp: clickData.timestamp,
    userAgent: clickData.userAgent?.substring(0, 50) + '...',
  });

  // Save to MongoDB
  try {
    await logClickToMongoDB({
      activityId: clickData.activityId,
      provider: clickData.provider,
      timestamp: new Date(clickData.timestamp),
      userAgent: clickData.userAgent,
      referer: clickData.referer,
      clicked: true, // Always true when logging a click
    });
    console.log('💾 Affiliate click saved to MongoDB');
  } catch (error) {
    // MongoDB not configured or error - continue without saving
    console.warn('⚠️ MongoDB save failed (continuing without persistence):', error);
  }
}
