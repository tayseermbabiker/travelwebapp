import { NextRequest, NextResponse } from 'next/server';
import { generateCompleteItinerary } from '@/lib/ai/orchestrator';
import { CompanionType, InterestType, HotelTier, ExperienceRange } from '@/types';
import { saveItinerary } from '@/lib/mongodb/models';

// Import curated databases
import activitiesData from '@/lib/database/activities.json';
import hotelsData from '@/lib/database/hotels.json';
import destinationsData from '@/lib/database/destinations.json';

// Vercel Pro: 300 seconds timeout
export const maxDuration = 300;

export async function POST(request: NextRequest) {
  try {
    console.log('📨 Received itinerary generation request');

    // Parse request body
    const body = await request.json();

    // Validate required fields
    const {
      destination,
      dateRange,
      hotelTier,
      experienceRanges,
      companionType,
      interests,
      flyingFrom,
      skipFlights,
    } = body;

    if (!destination || !dateRange || !hotelTier || !experienceRanges || !companionType || !interests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate hotel tier
    const validHotelTiers: HotelTier[] = ['budget', 'comfort', 'premium', 'luxury'];
    if (!validHotelTiers.includes(hotelTier)) {
      return NextResponse.json(
        { error: 'Invalid hotel tier' },
        { status: 400 }
      );
    }

    // Validate experience ranges
    const validExperienceRanges: ExperienceRange[] = ['budget', 'balanced', 'premium', 'luxury'];
    if (!Array.isArray(experienceRanges) || experienceRanges.length === 0) {
      return NextResponse.json(
        { error: 'experienceRanges must be a non-empty array' },
        { status: 400 }
      );
    }
    for (const range of experienceRanges) {
      if (!validExperienceRanges.includes(range)) {
        return NextResponse.json(
          { error: `Invalid experience range: ${range}` },
          { status: 400 }
        );
      }
    }

    // Validate companion type
    const validCompanionTypes: CompanionType[] = ['solo', 'couple', 'family', 'friends', 'business'];
    if (!validCompanionTypes.includes(companionType)) {
      return NextResponse.json(
        { error: 'Invalid companion type' },
        { status: 400 }
      );
    }

    // Validate interests
    if (!Array.isArray(interests) || interests.length === 0 || interests.length > 3) {
      return NextResponse.json(
        { error: 'Interests must be an array of 1-3 items' },
        { status: 400 }
      );
    }

    // Parse dates
    const startDate = new Date(dateRange.start);
    const endDate = new Date(dateRange.end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return NextResponse.json(
        { error: 'Invalid date format' },
        { status: 400 }
      );
    }

    if (endDate <= startDate) {
      return NextResponse.json(
        { error: 'End date must be after start date' },
        { status: 400 }
      );
    }

    // AI will generate itinerary based on free-text destination
    // We'll use empty activity/hotel arrays - AI will create custom recommendations
    const availableActivities: any[] = [];
    const availableHotels: any[] = [];

    console.log(`📍 Destination: ${destination}`);
    console.log(`👥 Companion: ${companionType}`);
    console.log(`⭐ Interests: ${interests.join(', ')}`);
    console.log(`🏨 Hotel Tier: ${hotelTier}`);
    console.log(`✨ Experience Ranges: ${experienceRanges.join(' + ')}`);
    console.log(`📅 Dates: ${startDate.toISOString()} to ${endDate.toISOString()}`);

    // Generate complete itinerary using AI orchestrator
    const result = await generateCompleteItinerary({
      destination,
      dateRange: {
        start: startDate,
        end: endDate,
      },
      hotelTier,
      experienceRanges,
      companionType,
      interests,
      flyingFrom,
      skipFlights,
      availableActivities,
      availableHotels,
    });

    console.log('✅ Itinerary generation complete');

    // Save to MongoDB (optional - graceful degradation if MongoDB not configured)
    try {
      await saveItinerary({
        itineraryId: result.itinerary.itineraryId,
        destination,
        dateRange: {
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        },
        hotelTier,
        experienceRanges: experienceRanges.join(','), // Store as comma-separated string
        companionType,
        interests,
        companionProfile: result.companionProfile,
        budgetAllocation: result.budgetAllocation,
        itinerary: result.itinerary,
        generatedAt: new Date(result.generatedAt),
        userAgent: request.headers.get('user-agent') || undefined,
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || undefined,
        viewed: 0,
        downloaded: false,
        affiliateClicks: 0,
      });
      console.log('💾 Itinerary saved to MongoDB');
    } catch (mongoError) {
      // MongoDB not configured or error - continue without saving
      console.warn('⚠️ MongoDB save failed (continuing without persistence):', mongoError);
    }

    // Return the complete itinerary
    return NextResponse.json({
      success: true,
      data: result,
    });

  } catch (error) {
    console.error('❌ Error generating itinerary:', error);

    // Check if it's an OpenAI API error
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'OpenAI API key configuration error' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        error: 'Failed to generate itinerary',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Itinerary generation API is running',
    version: '1.0.0',
  });
}
