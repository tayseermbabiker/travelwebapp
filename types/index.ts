// Companion Types
export type CompanionType = 'solo' | 'couple' | 'family' | 'friends' | 'business' | 'group';

// Interest Categories
export type InterestType =
  | 'food'
  | 'culture'
  | 'adventure'
  | 'wildlife'
  | 'beach'
  | 'wellness'
  | 'nightlife'
  | 'hidden'
  | 'art'
  | 'sustainable';

// Trip Basics
export interface TripBasics {
  destination: string; // Deprecated - use country + cities instead
  country?: string; // NEW: Country selection
  cities?: string[]; // NEW: Multiple city selection
  dateRange: {
    start: Date | null;
    end: Date | null;
  };
  budget: number;
}

// City Destination (for multi-city trips)
export interface CityDestination {
  name: string;
  allocatedDays: number;
  importance: number;
  costLevel: 'low' | 'medium' | 'high';
}

// Companion Profile (Agent 1 Output)
export interface CompanionProfile {
  companionProfile: string;
  priorities: {
    safety: number;
    romance: number;
    social: number;
    familyFriendly: number;
    adventure: number;
  };
  recommendations: string[];
}

// Budget Allocation (Agent 2 Output)
export interface BudgetAllocation {
  flights: number;
  accommodation: number;
  activities: number;
  food: number;
  transport: number;
  breakdown: string;
}

// Activity
export interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  companionSuitability: Record<CompanionType, number>;
  interestTags: InterestType[];
  affiliateLinks: {
    [key: string]: {
      url: string;
      partnerId: string;
      commission: number;
    };
  };
  bestPrice: string;
}

// Hotel
export interface Hotel {
  id: string;
  name: string;
  stars: number;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  lifestyle: string[];
  budgetCategory: 'budget' | 'midscale' | 'upscale' | 'luxury';
  amenities: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  affiliateLinks: {
    [key: string]: {
      url: string;
      partnerId: string;
      commission: number;
    };
  };
}

// Day Activity
export interface DayActivity {
  time: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  affiliatePartner: string;
  activityId: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

// Itinerary Day
export interface ItineraryDay {
  date: string;
  activities: DayActivity[];
  hotel: {
    name: string;
    stars: number;
    price: number;
    amenities: string[];
    hotelId: string;
    imageUrl: string;
    rating: number;
  };
  dailyTotal: number;
}

// Complete Itinerary (Agent 3 Output)
export interface Itinerary {
  itineraryId: string;
  destination: string;
  dateRange: {
    start: string;
    end: string;
  };
  companionType: CompanionType;
  interests: InterestType[];
  budget: number;
  budgetBreakdown: BudgetAllocation;
  days: ItineraryDay[];
  grandTotal: number;
  generatedAt: string;
}

// API Request for Itinerary Generation
export interface GenerateItineraryRequest {
  destination: string;
  dateRange: { start: string; end: string };
  budget: number;
  companionType: CompanionType;
  interests: InterestType[];
  flyingFrom?: string;
  skipFlights?: boolean;
}

// Affiliate Click Tracking
export interface AffiliateClick {
  activityId: string;
  itineraryId: string;
  userSession: string;
  partner: string;
  clickedAt: Date;
  ipAddress: string;
  userAgent: string;
  converted: boolean;
  commissionAmount?: number;
  commissionStatus?: 'pending' | 'approved' | 'paid';
}
