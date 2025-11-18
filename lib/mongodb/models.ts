import { ObjectId } from 'mongodb';
import { getDatabase } from './connection';

/**
 * ITINERARY SCHEMA
 * Stores complete generated itineraries
 */
export interface ItineraryDocument {
  _id?: ObjectId;
  itineraryId: string; // UUID from AI generation

  // User inputs
  destination: string;
  country?: string;
  cities?: string[];
  dateRange: {
    start: string;
    end: string;
  };
  hotelTier: string;
  experienceRanges: string; // Comma-separated string
  companionType: string;
  interests: string[];

  // AI outputs
  companionProfile: any;
  budgetAllocation: any;
  itinerary: any;

  // Metadata
  generatedAt: Date;
  userAgent?: string;
  ipAddress?: string;

  // Analytics
  viewed: number; // View count
  downloaded: boolean; // PDF downloaded?
  affiliateClicks: number; // Number of affiliate clicks from this itinerary

  createdAt: Date;
  updatedAt: Date;
}

/**
 * AFFILIATE CLICK SCHEMA
 * Tracks all affiliate link clicks for analytics and commission tracking
 */
export interface AffiliateClickDocument {
  _id?: ObjectId;

  // Click details
  itineraryId?: string; // Which itinerary generated this click
  activityId?: string; // Activity or hotel ID
  provider: string; // getyourguide, viator, booking, etc.

  // User context
  timestamp: Date;
  userAgent?: string;
  referer?: string;
  ipAddress?: string;

  // Tracking
  clicked: boolean; // Did user click?
  converted?: boolean; // Did user complete booking? (webhook from affiliate)
  commissionEarned?: number; // Commission amount (if converted)

  createdAt: Date;
}

/**
 * Get itineraries collection
 * Returns null if MongoDB is not configured
 */
export async function getItinerariesCollection() {
  const db = await getDatabase();
  if (!db) return null;
  return db.collection<ItineraryDocument>('itineraries');
}

/**
 * Get affiliate clicks collection
 * Returns null if MongoDB is not configured
 */
export async function getAffiliateClicksCollection() {
  const db = await getDatabase();
  if (!db) return null;
  return db.collection<AffiliateClickDocument>('affiliate_clicks');
}

/**
 * Save a new itinerary to MongoDB
 * Throws error if MongoDB is not configured (caller should handle with try-catch)
 */
export async function saveItinerary(itineraryData: Omit<ItineraryDocument, '_id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  const collection = await getItinerariesCollection();

  if (!collection) {
    throw new Error('MongoDB not configured');
  }

  const document: ItineraryDocument = {
    ...itineraryData,
    viewed: 0,
    downloaded: false,
    affiliateClicks: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const result = await collection.insertOne(document);
  return result.insertedId.toString();
}

/**
 * Get itinerary by ID
 */
export async function getItineraryById(itineraryId: string): Promise<ItineraryDocument | null> {
  const collection = await getItinerariesCollection();
  if (!collection) {
    throw new Error('MongoDB not configured');
  }
  return await collection.findOne({ itineraryId });
}

/**
 * Update itinerary view count
 */
export async function incrementItineraryViews(itineraryId: string): Promise<void> {
  const collection = await getItinerariesCollection();
  if (!collection) {
    throw new Error('MongoDB not configured');
  }
  await collection.updateOne(
    { itineraryId },
    {
      $inc: { viewed: 1 },
      $set: { updatedAt: new Date() }
    }
  );
}

/**
 * Mark itinerary as downloaded
 */
export async function markItineraryAsDownloaded(itineraryId: string): Promise<void> {
  const collection = await getItinerariesCollection();
  if (!collection) {
    throw new Error('MongoDB not configured');
  }
  await collection.updateOne(
    { itineraryId },
    {
      $set: { downloaded: true, updatedAt: new Date() }
    }
  );
}

/**
 * Log affiliate click
 */
export async function logAffiliateClick(clickData: Omit<AffiliateClickDocument, '_id' | 'createdAt'>): Promise<string> {
  const collection = await getAffiliateClicksCollection();

  if (!collection) {
    throw new Error('MongoDB not configured');
  }

  const document: AffiliateClickDocument = {
    ...clickData,
    clicked: true,
    createdAt: new Date(),
  };

  const result = await collection.insertOne(document);

  // Increment affiliate click count on itinerary if itineraryId exists
  if (clickData.itineraryId) {
    const itinerariesCollection = await getItinerariesCollection();
    if (itinerariesCollection) {
      await itinerariesCollection.updateOne(
        { itineraryId: clickData.itineraryId },
        {
          $inc: { affiliateClicks: 1 },
          $set: { updatedAt: new Date() }
        }
      );
    }
  }

  return result.insertedId.toString();
}

/**
 * Get analytics for an itinerary
 */
export async function getItineraryAnalytics(itineraryId: string) {
  const itinerary = await getItineraryById(itineraryId);
  if (!itinerary) return null;

  const clicksCollection = await getAffiliateClicksCollection();
  if (!clicksCollection) {
    throw new Error('MongoDB not configured');
  }

  const clicks = await clicksCollection.find({ itineraryId }).toArray();

  return {
    views: itinerary.viewed,
    downloaded: itinerary.downloaded,
    affiliateClicks: itinerary.affiliateClicks,
    clicksByProvider: clicks.reduce((acc: any, click) => {
      acc[click.provider] = (acc[click.provider] || 0) + 1;
      return acc;
    }, {}),
    totalCommission: clicks.reduce((sum, click) => sum + (click.commissionEarned || 0), 0),
  };
}

/**
 * Get recent itineraries (for admin dashboard)
 */
export async function getRecentItineraries(limit: number = 10) {
  const collection = await getItinerariesCollection();
  if (!collection) {
    throw new Error('MongoDB not configured');
  }
  return await collection
    .find()
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();
}

/**
 * Get affiliate click stats (for admin dashboard)
 */
export async function getAffiliateStats(days: number = 30) {
  const collection = await getAffiliateClicksCollection();
  if (!collection) {
    throw new Error('MongoDB not configured');
  }

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const clicks = await collection
    .find({ createdAt: { $gte: startDate } })
    .toArray();

  return {
    totalClicks: clicks.length,
    clicksByProvider: clicks.reduce((acc: any, click) => {
      acc[click.provider] = (acc[click.provider] || 0) + 1;
      return acc;
    }, {}),
    conversions: clicks.filter(c => c.converted).length,
    totalCommission: clicks.reduce((sum, click) => sum + (click.commissionEarned || 0), 0),
  };
}
