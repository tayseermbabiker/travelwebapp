'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CompanionSelector from '@/components/landing/CompanionSelector';
import HotelTierSelector from '@/components/landing/HotelTierSelector';
import ExperienceRangeSelector from '@/components/landing/ExperienceRangeSelector';
import InterestsSelector from '@/components/landing/InterestsSelector';
import TripBasicsForm from '@/components/landing/TripBasicsForm';
import Toast from '@/components/ui/Toast';
import { CompanionType, InterestType, TripBasics, HotelTier, ExperienceRange } from '@/types';

export default function Home() {
  const router = useRouter();

  // Form State
  const [tripBasics, setTripBasics] = useState<TripBasics>({
    destination: '',
    dateRange: { start: null, end: null },
    hotelTier: null,
    experienceRanges: [],
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

  // Toggle experience range selection
  const toggleExperienceRange = (range: ExperienceRange) => {
    setTripBasics((prev) => {
      const newRanges = prev.experienceRanges.includes(range)
        ? prev.experienceRanges.filter((r) => r !== range)
        : [...prev.experienceRanges, range];
      return { ...prev, experienceRanges: newRanges };
    });
  };

  // Validation
  const isFormValid = () => {
    const hasDestination = tripBasics.destination?.length >= 3;

    return (
      hasDestination &&
      tripBasics.dateRange.start &&
      tripBasics.dateRange.end &&
      tripBasics.hotelTier &&
      tripBasics.experienceRanges.length >= 1 &&
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
    if (!isFormValid() || !companionType || !tripBasics.hotelTier || tripBasics.experienceRanges.length === 0) return;

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
          destination: tripBasics.destination,
          dateRange: {
            start: tripBasics.dateRange.start?.toISOString(),
            end: tripBasics.dateRange.end?.toISOString(),
          },
          hotelTier: tripBasics.hotelTier,
          experienceRanges: tripBasics.experienceRanges,
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
    <main className="relative">
      {/* Background Image - Fixed for both sections */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2835&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* SECTION 1: Hero Landing Page */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight drop-shadow-2xl mb-6">
            WANDER
          </h1>
          <p className="text-2xl md:text-4xl font-light drop-shadow-lg mb-4">
            Discover Your Next Adventure
          </p>
          <p className="text-lg md:text-xl opacity-90 drop-shadow-md mb-12">
            AI-Powered Travel Made Personal
          </p>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <svg className="w-8 h-8 mx-auto text-white drop-shadow-lg" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <p className="text-sm mt-2 drop-shadow-md">Scroll to plan your trip</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Form Page (same background continues) */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        {/* Transparent/Tinted Form Container */}
        <div className="w-full max-w-3xl">
          <div
            className="bg-gradient-to-br from-black/60 to-black/40 rounded-3xl shadow-2xl p-8 md:p-12"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Form Title */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                ✨ Plan Your Perfect Trip
              </h2>
              <p className="text-base text-gray-200 mt-3 drop-shadow-md">
                Fill in the details below to get your personalized itinerary
              </p>
            </div>

            {/* Form Sections */}
            <div className="space-y-8">

              {/* Section 1: Trip Basics */}
              <section className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                <TripBasicsForm data={tripBasics} onChange={setTripBasics} />
              </section>

              {/* Section 2: Companion Type */}
              <section className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                <CompanionSelector selected={companionType} onSelect={setCompanionType} />
              </section>

              {/* Section 3: Travel Interests */}
              <section className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                <InterestsSelector
                  selected={interests}
                  onToggle={toggleInterest}
                  maxSelections={3}
                />
              </section>

              {/* Section 4: Hotel Tier */}
              <section className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                <HotelTierSelector
                  selected={tripBasics.hotelTier}
                  onSelect={(tier) => setTripBasics({ ...tripBasics, hotelTier: tier })}
                />
              </section>

              {/* Section 5: Experience Range */}
              <section className="rounded-xl bg-white/10 p-6 backdrop-blur-sm border border-white/20">
                <ExperienceRangeSelector
                  selected={tripBasics.experienceRanges}
                  onToggle={toggleExperienceRange}
                />
              </section>

              {/* Generate Button Section */}
              <section className="rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 p-8 text-center text-white shadow-lg">
                <h2 className="mb-3 text-xl font-bold sm:text-2xl">
                  Ready to Discover Your Adventure?
                </h2>

                <p className="mb-4 text-sm opacity-90">
                  AI will create your personalized itinerary in ~60 seconds
                </p>

                {/* Form Summary */}
                <div className="mb-6 flex flex-wrap justify-center gap-2 text-xs">
                  {tripBasics.destination && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      📍 {tripBasics.destination}
                    </span>
                  )}
                  {getTripDuration() > 0 && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      📅 {getTripDuration()} days
                    </span>
                  )}
                  {tripBasics.hotelTier && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      🏨 {tripBasics.hotelTier.charAt(0).toUpperCase() + tripBasics.hotelTier.slice(1)}
                    </span>
                  )}
                  {tripBasics.experienceRanges.length > 0 && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      ✨ {tripBasics.experienceRanges.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(' + ')}
                    </span>
                  )}
                  {companionType && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      👤 {companionType}
                    </span>
                  )}
                  {interests.length > 0 && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      ⭐ {interests.length}
                    </span>
                  )}
                </div>

                <button
                  onClick={handleGenerateItinerary}
                  disabled={!isFormValid() || isGenerating}
                  className={`
                    w-full rounded-xl px-8 py-4 text-base font-semibold transition-all
                    ${
                      isFormValid() && !isGenerating
                        ? 'bg-white text-teal-600 shadow-lg hover:scale-[1.02] hover:shadow-xl'
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
                    '🚀 Create My Adventure'
                  ) : (
                    'Complete All Fields Above'
                  )}
                </button>

                {!isFormValid() && (
                  <p className="mt-3 text-xs opacity-75">
                    {tripBasics.destination.length < 3 && '• Enter destination '}
                    {!tripBasics.dateRange.start && '• Select start date '}
                    {!tripBasics.dateRange.end && '• Select end date '}
                    {!companionType && '• Select companion '}
                    {interests.length === 0 && '• Select interests '}
                    {!tripBasics.hotelTier && '• Select hotel tier '}
                    {tripBasics.experienceRanges.length === 0 && '• Select experience style'}
                  </p>
                )}
              </section>

              {/* Footer */}
              <footer className="py-4 text-center text-xs text-gray-300">
                <p>© 2025 Wander. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </div>
      </section>

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
