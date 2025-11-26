// User tracking for email capture and generation limits

export interface UserData {
  email: string | null;
  generationCount: number;
  tags: string[];
  firstVisit: string;
  lastGeneration: string | null;
}

const STORAGE_KEY = 'wander_user_data';

// Get user data from localStorage
export function getUserData(): UserData {
  if (typeof window === 'undefined') {
    return getDefaultUserData();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading user data:', error);
  }

  return getDefaultUserData();
}

// Get default user data
function getDefaultUserData(): UserData {
  return {
    email: null,
    generationCount: 0,
    tags: [],
    firstVisit: new Date().toISOString(),
    lastGeneration: null,
  };
}

// Save user data to localStorage
export function saveUserData(data: UserData): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving user data:', error);
  }
}

// Increment generation count
export function incrementGenerationCount(): number {
  const data = getUserData();
  data.generationCount += 1;
  data.lastGeneration = new Date().toISOString();
  saveUserData(data);
  return data.generationCount;
}

// Check if user needs email for generation (4+ generations)
export function requiresEmailForGeneration(): boolean {
  const data = getUserData();
  return data.generationCount >= 3 && !data.email;
}

// Check if user has provided email
export function hasProvidedEmail(): boolean {
  const data = getUserData();
  return !!data.email;
}

// Get current generation count
export function getGenerationCount(): number {
  const data = getUserData();
  return data.generationCount;
}

// Save email and tags
export function saveEmail(email: string, tags: string[]): void {
  const data = getUserData();
  data.email = email;

  // Merge new tags with existing ones (no duplicates)
  const uniqueTags = [...new Set([...data.tags, ...tags])];
  data.tags = uniqueTags;

  saveUserData(data);
}

// Add tags to existing user data
export function addTags(tags: string[]): void {
  const data = getUserData();
  const uniqueTags = [...new Set([...data.tags, ...tags])];
  data.tags = uniqueTags;
  saveUserData(data);
}

// Build tags from user preferences
export function buildTagsFromPreferences(
  destination: string,
  companionType: string,
  hotelTier: string,
  experienceRanges: string[],
  interests: string[]
): string[] {
  const tags: string[] = [];

  // Destination tag (clean and lowercase)
  if (destination) {
    const cleanDestination = destination
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    tags.push(`destination:${cleanDestination}`);
  }

  // Travel style based on companion type
  if (companionType) {
    const travelStyleMap: Record<string, string> = {
      'solo': 'solo',
      'couple': 'couple',
      'family': 'family',
      'friends': 'friends',
      'business': 'business',
      'group': 'group',
    };
    const style = travelStyleMap[companionType] || companionType;
    tags.push(`travel_style:${style}`);
  }

  // Budget tag based on hotel tier
  if (hotelTier) {
    const budgetMap: Record<string, string> = {
      'budget': 'budget',
      'comfort': 'mid-range',
      'premium': 'premium',
      'luxury': 'luxury',
    };
    const budget = budgetMap[hotelTier] || hotelTier;
    tags.push(`budget:${budget}`);
  }

  // Experience range tags
  experienceRanges.forEach(range => {
    tags.push(`experience:${range}`);
  });

  // Interest tags
  interests.forEach(interest => {
    tags.push(`interest:${interest}`);
  });

  return tags;
}

// Gate types for the email modal
export type GateType = 'pdf_download' | 'whatsapp_share' | 'generation_limit' | 'copy_clipboard';

// Get appropriate modal copy based on gate type
export function getModalCopy(gateType: GateType): { title: string; description: string; buttonText: string } {
  switch (gateType) {
    case 'pdf_download':
      return {
        title: 'Get Your PDF Itinerary',
        description: 'Enter your email to download your itinerary as a PDF. We\'ll also save it to your account for easy access later.',
        buttonText: 'Download PDF',
      };
    case 'whatsapp_share':
      return {
        title: 'Share Your Itinerary',
        description: 'Enter your email to share your itinerary via WhatsApp. We\'ll keep you updated with travel tips and deals.',
        buttonText: 'Share Now',
      };
    case 'copy_clipboard':
      return {
        title: 'Copy Your Itinerary',
        description: 'Enter your email to copy your itinerary. We\'ll also send you a backup copy.',
        buttonText: 'Copy to Clipboard',
      };
    case 'generation_limit':
      return {
        title: 'You\'re on a Roll!',
        description: 'You\'ve created 3 amazing trips! Enter your email to unlock unlimited planning and get personalized travel recommendations.',
        buttonText: 'Unlock Unlimited Planning',
      };
    default:
      return {
        title: 'Continue with Email',
        description: 'Enter your email to continue.',
        buttonText: 'Continue',
      };
  }
}
