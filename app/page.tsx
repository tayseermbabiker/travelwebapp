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
    <main className="relative pt-16">
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
            Your Perfect Trip, Perfectly Planned
          </p>

          {/* WhatsApp Share Button */}
          <div className="mb-8">
            <a
              href={`https://wa.me/?text=${encodeURIComponent('Check out Wander - Plan your perfect trip in 60 seconds! ' + (typeof window !== 'undefined' ? window.location.href : 'https://travelwebapp-pied.vercel.app'))}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Share with Friends
            </a>
          </div>

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
                Plan Your Perfect Trip
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

                {/* Form Summary */}
                <div className="mb-6 flex flex-wrap justify-center gap-2 text-xs">
                  {tripBasics.destination && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      {tripBasics.destination}
                    </span>
                  )}
                  {getTripDuration() > 0 && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      {getTripDuration()} days
                    </span>
                  )}
                  {tripBasics.hotelTier && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      {tripBasics.hotelTier.charAt(0).toUpperCase() + tripBasics.hotelTier.slice(1)}
                    </span>
                  )}
                  {tripBasics.experienceRanges.length > 0 && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      {tripBasics.experienceRanges.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(' + ')}
                    </span>
                  )}
                  {companionType && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      {companionType}
                    </span>
                  )}
                  {interests.length > 0 && (
                    <span className="rounded-full bg-white/20 px-3 py-1">
                      {interests.length} interests
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
                    'Create My Adventure'
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
              <footer className="py-6 text-center text-xs text-gray-300 space-y-3">
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="/about" className="hover:text-white transition">About Us</a>
                  <span>•</span>
                  <a href="/contact" className="hover:text-white transition">Contact</a>
                  <span>•</span>
                  <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
                  <span>•</span>
                  <a href="/terms" className="hover:text-white transition">Terms of Service</a>
                </div>
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
