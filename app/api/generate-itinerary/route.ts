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
      country,
      cities,
      dateRange,
      hotelTier,
      experienceRange,
      companionType,
      interests,
      flyingFrom,
      skipFlights,
    } = body;

    // Support both old (destination) and new (country + cities) format
    const hasDestination = destination || (country && cities && cities.length > 0);

    if (!hasDestination || !dateRange || !hotelTier || !experienceRange || !companionType || !interests) {
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

    // Validate experience range
    const validExperienceRanges: ExperienceRange[] = ['budget', 'balanced', 'premium', 'luxury'];
    if (!validExperienceRanges.includes(experienceRange)) {
      return NextResponse.json(
        { error: 'Invalid experience range' },
        { status: 400 }
      );
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

    // Load appropriate destination database
    // For multi-city, we need activities/hotels for all selected cities
    let availableActivities: any[] = [];
    let availableHotels: any[] = [];
    let cityDestinations: any[] = [];

    if (country && cities && cities.length > 0) {
      // Multi-city format
      console.log(`📍 Multi-city trip: ${cities.join(', ')} (${country})`);

      // Get city data from destinations database
      const countryData = (destinationsData as any)[country];
      if (countryData) {
        cityDestinations = cities.map((cityName: string) => {
          const cityInfo = countryData.cities.find((c: any) => c.name === cityName);
          return cityInfo;
        }).filter(Boolean);
      }

      // Load activities and hotels for all selected cities
      for (const cityName of cities) {
        const cityKey = cityName.toLowerCase();
        const cityActivities = (activitiesData as any)[cityKey] || [];
        const cityHotels = (hotelsData as any)[cityKey] || [];

        availableActivities = [...availableActivities, ...cityActivities];
        availableHotels = [...availableHotels, ...cityHotels];
      }
    } else {
      // Legacy single destination format
      const destinationKey = destination.toLowerCase().includes('dubai') ? 'dubai' : 'dubai';
      availableActivities = (activitiesData as any)[destinationKey] || [];
      availableHotels = (hotelsData as any)[destinationKey] || [];
    }

    if (availableActivities.length === 0) {
      return NextResponse.json(
        { error: 'No activities available for this destination yet' },
        { status: 404 }
      );
    }

    console.log(`📍 Destination: ${destination || `${cities.join(', ')} (${country})`}`);
    console.log(`👥 Companion: ${companionType}`);
    console.log(`⭐ Interests: ${interests.join(', ')}`);
    console.log(`🏨 Hotel Tier: ${hotelTier}`);
    console.log(`✨ Experience Range: ${experienceRange}`);
    console.log(`📅 Dates: ${startDate.toISOString()} to ${endDate.toISOString()}`);

    // Generate complete itinerary using AI orchestrator
    const result = await generateCompleteItinerary({
      destination: destination || `${cities.join(', ')}, ${country}`,
      country,
      cities: cityDestinations,
      dateRange: {
        start: startDate,
        end: endDate,
      },
      hotelTier,
      experienceRange,
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
        destination: destination || `${cities.join(', ')}, ${country}`,
        country,
        cities,
        dateRange: {
          start: startDate.toISOString(),
          end: endDate.toISOString(),
        },
        hotelTier,
        experienceRange,
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
