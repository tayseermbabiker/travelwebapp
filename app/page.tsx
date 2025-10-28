'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from '@/components/landing/HeroSection';
import CompanionSelector from '@/components/landing/CompanionSelector';
import InterestsSelector from '@/components/landing/InterestsSelector';
import TripBasicsForm from '@/components/landing/TripBasicsForm';
import Toast from '@/components/ui/Toast';
import { CompanionType, InterestType, TripBasics } from '@/types';

export default function Home() {
  const router = useRouter();

  // Form State
  const [tripBasics, setTripBasics] = useState<TripBasics>({
    destination: '',
    dateRange: { start: null, end: null },
    budget: 1500,
  });

  const [companionType, setCompanionType] = useState<CompanionType | null>(null);
  const [interests, setInterests] = useState<InterestType[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'warning' | 'info' } | null>(null);

  // Toggle interest selection
  const toggleInterest = (interest: InterestType) => {
    setInterests((prev) => {
      if (prev.includes(interest)) {
        return prev.filter((i) => i !== interest);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, interest];
    });
  };

  // Validation
  const isFormValid = () => {
    // Support both old (destination) and new (country + cities) format
    const hasDestination = tripBasics.destination?.length >= 3 ||
                          (tripBasics.country && tripBasics.cities && tripBasics.cities.length > 0);

    return (
      hasDestination &&
      tripBasics.dateRange.start &&
      tripBasics.dateRange.end &&
      tripBasics.budget >= 500 &&
      companionType &&
      interests.length >= 1 &&
      interests.length <= 3
    );
  };

  // Calculate trip duration in days
  const getTripDuration = () => {
    if (!tripBasics.dateRange.start || !tripBasics.dateRange.end) return 0;
    const diff = tripBasics.dateRange.end.getTime() - tripBasics.dateRange.start.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const handleGenerateItinerary = async () => {
    if (!isFormValid() || !companionType) return;

    setIsGenerating(true);
    setGenerationError(null);

    try {
      console.log('🚀 Starting itinerary generation...');

      const response = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Support multi-city format (prioritize new format)
          destination: tripBasics.destination || `${tripBasics.cities?.join(', ')}, ${tripBasics.country}`,
          country: tripBasics.country,
          cities: tripBasics.cities,
          dateRange: {
            start: tripBasics.dateRange.start?.toISOString(),
            end: tripBasics.dateRange.end?.toISOString(),
          },
          budget: tripBasics.budget,
          companionType,
          interests,
          flyingFrom: undefined, // Can add later
          skipFlights: false,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate itinerary');
      }

      console.log('✅ Itinerary generated successfully!', data);

      // Store the itinerary data in sessionStorage
      sessionStorage.setItem('latestItinerary', JSON.stringify(data.data));

      // Redirect to itinerary page
      const itineraryId = data.data.itinerary.itineraryId || 'latest';
      router.push(`/itinerary/${itineraryId}`);

    } catch (error) {
      console.error('❌ Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setGenerationError(errorMessage);
      setToast({
        message: `Failed to generate itinerary: ${errorMessage}. Please try again or adjust your preferences.`,
        type: 'error'
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Form Sections */}
      <div id="trip-form" className="container mx-auto max-w-5xl px-4 py-16 space-y-16">

        {/* Section 1: Trip Basics */}
        <section className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <TripBasicsForm data={tripBasics} onChange={setTripBasics} />
        </section>

        {/* Section 2: Companion Type */}
        <section className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <CompanionSelector selected={companionType} onSelect={setCompanionType} />
        </section>

        {/* Section 3: Travel Interests */}
        <section className="rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <InterestsSelector
            selected={interests}
            onToggle={toggleInterest}
            maxSelections={3}
          />
        </section>

        {/* Generate Button */}
        <section className="rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 p-8 text-center text-white shadow-lg">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Ready to Discover Your Adventure?
          </h2>

          <p className="mb-6 text-sm opacity-90 sm:text-base">
            AI will create your personalized 3-day itinerary in ~60 seconds
          </p>

          {/* Form Summary */}
          <div className="mb-6 flex flex-wrap justify-center gap-2 text-sm">
            {(tripBasics.destination || (tripBasics.cities && tripBasics.cities.length > 0)) && (
              <span className="rounded-full bg-white/20 px-3 py-1">
                📍 {tripBasics.destination || `${tripBasics.cities?.join(', ')} (${tripBasics.country})`}
              </span>
            )}
            {getTripDuration() > 0 && (
              <span className="rounded-full bg-white/20 px-3 py-1">
                📅 {getTripDuration()} days
              </span>
            )}
            {tripBasics.budget > 0 && (
              <span className="rounded-full bg-white/20 px-3 py-1">
                💰 ${tripBasics.budget.toLocaleString()}
              </span>
            )}
            {companionType && (
              <span className="rounded-full bg-white/20 px-3 py-1">
                👤 {companionType}
              </span>
            )}
            {interests.length > 0 && (
              <span className="rounded-full bg-white/20 px-3 py-1">
                ⭐ {interests.length} interests
              </span>
            )}
          </div>

          <button
            onClick={handleGenerateItinerary}
            disabled={!isFormValid() || isGenerating}
            className={`
              rounded-xl px-8 py-4 text-lg font-semibold transition-all
              ${
                isFormValid() && !isGenerating
                  ? 'bg-white text-teal-600 shadow-lg hover:scale-105 hover:shadow-xl'
                  : 'cursor-not-allowed bg-gray-300 text-gray-500'
              }
            `}
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Your Adventure...
              </span>
            ) : isFormValid() ? (
              'Create My Adventure'
            ) : (
              'Please Complete All Fields'
            )}
          </button>

          {!isFormValid() && (
            <p className="mt-4 text-xs opacity-75">
              {!(tripBasics.destination || (tripBasics.country && tripBasics.cities?.length)) && '• Choose country and cities '}
              {!tripBasics.dateRange.start && '• Select start date '}
              {!tripBasics.dateRange.end && '• Select end date '}
              {!companionType && '• Select who\'s traveling '}
              {interests.length === 0 && '• Select at least 1 interest'}
            </p>
          )}
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-600">
          <p>© 2025 Wander. All rights reserved.</p>
        </footer>
      </div>

      {/* Toast Notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </main>
  );
}
