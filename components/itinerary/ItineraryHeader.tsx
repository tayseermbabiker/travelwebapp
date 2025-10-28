'use client';

interface ItineraryHeaderProps {
  destination: string;
  dateRange: { start: string; end: string };
  companionType: string;
  interests: string[];
}

export default function ItineraryHeader({
  destination,
  dateRange,
  companionType,
  interests,
}: ItineraryHeaderProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const companionEmoji = {
    solo: '🎒',
    couple: '💑',
    family: '👨‍👩‍👧',
    friends: '👥',
    business: '💼',
  }[companionType] || '🎒';

  // Safe companion type display with fallback
  const companionDisplay = companionType
    ? companionType.charAt(0).toUpperCase() + companionType.slice(1)
    : 'Traveler';

  return (
    <header className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your {destination} Adventure
          </h1>

          {/* Trip Details */}
          <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
            <div className="bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
              📅 {formatDate(dateRange.start)} - {formatDate(dateRange.end)}
            </div>
            {companionType && (
              <div className="bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                {companionEmoji} {companionDisplay}
              </div>
            )}
            {interests.length > 0 && (
              <div className="bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
                ⭐ {interests.join(', ')}
              </div>
            )}
          </div>

          {/* Success Message */}
          <div className="mt-6 inline-block bg-white/10 rounded-xl px-6 py-3 backdrop-blur-sm">
            <p className="text-sm sm:text-base">
              ✨ Your AI-powered itinerary is ready! Scroll down to explore your personalized adventure.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
