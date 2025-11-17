import { openai, MODEL, TEMPERATURES } from './openai';
import { DISCOVERY_ENGINE_PROMPT } from './prompts';
import { CompanionOptimizerOutput } from './companion-optimizer';
import { BudgetAllocatorOutput } from './budget-allocator';
import { Activity, Hotel, HotelTier, ExperienceRange } from '@/types';

export interface DiscoveryEngineInput {
  days: number;
  destination: string;
  cities?: any[]; // NEW: Multi-city data
  dateRange: {
    start: string;
    end: string;
  };
  hotelTier: HotelTier;
  experienceRange: ExperienceRange;
  companionProfile: CompanionOptimizerOutput;
  budgetAllocation: BudgetAllocatorOutput;
  availableActivities: Activity[];
  availableHotels: Hotel[];
}

export interface DayActivity {
  activityId: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  bookingUrl?: string;
  tips?: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  price: number;
  location: string;
  description?: string;
  why?: string;
}

export interface TimeSlot {
  time: string;
  activity?: DayActivity;
  restaurant?: Restaurant;
}

export interface ItineraryDay {
  day: number;
  date: string;
  city?: string; // NEW: Which city this day is in
  theme: string;
  isTravelDay?: boolean; // NEW: Mark travel days
  fromCity?: string; // NEW: For travel days
  toCity?: string; // NEW: For travel days
  morning: TimeSlot;
  lunch: TimeSlot;
  afternoon: TimeSlot;
  evening: TimeSlot;
  accommodation: {
    hotel: {
      hotelId: string;
      name: string;
      stars: number;
      pricePerNight: number;
      bookingUrl?: string;
      features: string[];
      location: string;
      rating: number;
      why: string;
    };
  };
  dailyTotal: {
    activities: number;
    food: number;
    accommodation: number;
    transport: number;
    total: number;
  };
}

export interface DiscoveryEngineOutput {
  itineraryId: string;
  destination: string;
  dateRange: {
    start: string;
    end: string;
  };
  days: ItineraryDay[];
  grandTotal: number;
  budgetStatus: 'under' | 'on-budget' | 'over';
  budgetRemaining?: number;
}

export async function generateItinerary(
  input: DiscoveryEngineInput
): Promise<DiscoveryEngineOutput> {
  try {
    // Prepare simplified data for AI
    const simplifiedActivities = input.availableActivities.map(a => ({
      id: a.id,
      title: a.title,
      description: a.description,
      category: a.category,
      duration: a.duration,
      price: a.price,
      rating: a.rating,
      reviewCount: a.reviewCount,
      companionSuitability: a.companionSuitability,
      interestTags: a.interestTags,
    }));

    const simplifiedHotels = input.availableHotels.map(h => ({
      id: h.id,
      name: h.name,
      stars: h.stars,
      pricePerNight: h.pricePerNight,
      rating: h.rating,
      lifestyle: h.lifestyle,
      budgetCategory: h.budgetCategory,
      amenities: h.amenities,
      location: h.location.address,
    }));

    const userMessage = JSON.stringify({
      days: input.days,
      destination: input.destination,
      cities: input.cities, // NEW: Include multi-city data
      dateRange: input.dateRange,
      hotelTier: input.hotelTier,
      experienceRange: input.experienceRange,
      companionProfile: input.companionProfile,
      budgetAllocation: input.budgetAllocation,
      availableActivities: simplifiedActivities.slice(0, 30), // Limit to prevent token overflow
      availableHotels: simplifiedHotels.slice(0, 10),
    }, null, 2);

    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: DISCOVERY_ENGINE_PROMPT },
        { role: 'user', content: userMessage },
      ],
      temperature: TEMPERATURES.discoveryEngine,
      response_format: { type: 'json_object' },
      max_tokens: 2000,
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from AI');
    }

    const result = JSON.parse(content);

    // Validate output structure
    if (!result.days || !Array.isArray(result.days)) {
      throw new Error('Invalid AI response structure');
    }

    // Generate itinerary ID if not provided
    if (!result.itineraryId) {
      result.itineraryId = `itin-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    return result as DiscoveryEngineOutput;
  } catch (error) {
    console.error('Discovery Engine Error:', error);

    // Fallback response with basic itinerary
    const itineraryId = `itin-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    return {
      itineraryId,
      destination: input.destination,
      dateRange: input.dateRange,
      days: [],
      grandTotal: input.budgetAllocation.totalBudget,
      budgetStatus: 'on-budget',
    };
  }
}
