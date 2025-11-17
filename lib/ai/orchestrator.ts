import { optimizeCompanion, CompanionOptimizerInput } from './companion-optimizer';
import { allocateBudget } from './budget-allocator';
import { generateItinerary, DiscoveryEngineInput } from './discovery-engine';
import { Activity, Hotel, CompanionType, InterestType, HotelTier, ExperienceRange } from '@/types';

export interface OrchestratorInput {
  // From user form
  destination: string;
  country?: string; // NEW: For multi-city trips
  cities?: any[]; // NEW: Array of city data with importance, days, etc.
  dateRange: {
    start: Date;
    end: Date;
  };
  hotelTier: HotelTier;
  experienceRange: ExperienceRange;
  companionType: CompanionType;
  interests: InterestType[];
  flyingFrom?: string;
  skipFlights?: boolean;

  // Curated data
  availableActivities: Activity[];
  availableHotels: Hotel[];
}

export interface OrchestratorOutput {
  companionProfile: any;
  budgetAllocation: any;
  itinerary: any;
  generatedAt: string;
}

/**
 * Estimate budget from hotel tier and experience range
 */
function estimateBudgetFromTiers(hotelTier: HotelTier, experienceRange: ExperienceRange, days: number): number {
  // Base daily rates by hotel tier
  const hotelDailyRates = {
    budget: 50,
    comfort: 120,
    premium: 250,
    luxury: 500,
  };

  // Activity/food multipliers by experience range
  const experienceMultipliers = {
    budget: 40,      // Free tours, street food
    balanced: 100,   // Mix of free and paid
    premium: 200,    // Premium tours, nice dining
    luxury: 400,     // VIP experiences, fine dining
  };

  const hotelDaily = hotelDailyRates[hotelTier];
  const experienceDaily = experienceMultipliers[experienceRange];

  // Total = (hotel + experiences + transport) * days + flights buffer
  const dailyTotal = hotelDaily + experienceDaily + 30; // +30 for transport
  const flightBuffer = 500; // Average flight cost estimate

  return Math.round((dailyTotal * days) + flightBuffer);
}

/**
 * Main orchestrator that runs all 3 AI agents in sequence
 */
export async function generateCompleteItinerary(
  input: OrchestratorInput
): Promise<OrchestratorOutput> {
  console.log('🚀 Starting itinerary generation...');

  // Calculate trip duration
  const days = Math.ceil(
    (input.dateRange.end.getTime() - input.dateRange.start.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Estimate budget from hotel tier and experience range
  const estimatedBudget = estimateBudgetFromTiers(input.hotelTier, input.experienceRange, days);

  console.log(`📅 Trip duration: ${days} days`);
  console.log(`💰 Estimated budget (derived from tiers): $${estimatedBudget}`);

  // STEP 1 & 2: Run in Parallel (they don't depend on each other)
  console.log('🚀 Step 1 & 2: Analyzing travel profile and budget in parallel...');

  const [companionProfile, budgetAllocationTemp] = await Promise.all([
    // Agent 1: Companion Optimizer
    optimizeCompanion({
      companionType: input.companionType,
      interests: input.interests,
      destination: input.destination,
      budget: estimatedBudget,
    }),
    // Agent 2: Budget Allocator (initially without companion profile)
    allocateBudget({
      totalBudget: estimatedBudget,
      days,
      destination: input.destination,
      companionProfile: {
        profile: '',
        priorities: {
          safety: 7, romance: 5, social: 5, budget: 6,
          adventure: 5, culture: 5, food: 6, relaxation: 5
        },
        avoidances: [],
        recommendations: []
      },
      companionType: input.companionType,
      flyingFrom: input.flyingFrom,
      skipFlights: input.skipFlights,
    })
  ]);

  console.log('✅ Profile and budget created in parallel (15s faster!)');

  // Use the temporary budget allocation result
  const budgetAllocation = budgetAllocationTemp;

  // STEP 3: Generate Itinerary
  console.log('🗺️ Step 3: Discovering and arranging activities...');
  const itinerary = await generateItinerary({
    days,
    destination: input.destination,
    cities: input.cities, // NEW: Pass multi-city data to Discovery Engine
    dateRange: {
      start: input.dateRange.start.toISOString().split('T')[0],
      end: input.dateRange.end.toISOString().split('T')[0],
    },
    hotelTier: input.hotelTier,
    experienceRange: input.experienceRange,
    companionProfile,
    budgetAllocation,
    availableActivities: input.availableActivities,
    availableHotels: input.availableHotels,
  });
  console.log('✅ Itinerary generated');

  console.log('🎉 Complete! Itinerary ready.');

  // Add user inputs to itinerary for display
  return {
    companionProfile,
    budgetAllocation,
    itinerary: {
      ...itinerary,
      companionType: input.companionType,
      interests: input.interests,
    },
    generatedAt: new Date().toISOString(),
  };
}
