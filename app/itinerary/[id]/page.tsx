'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ItineraryHeader from '@/components/itinerary/ItineraryHeader';
import BudgetSummary from '@/components/itinerary/BudgetSummary';
import DayCard from '@/components/itinerary/DayCard';
import HotelCard from '@/components/itinerary/HotelCard';
import LoadingSpinner from '@/components/itinerary/LoadingSpinner';
import DownloadPDFButton from '@/components/itinerary/DownloadPDFButton';

interface ItineraryData {
  companionProfile: any;
  budgetAllocation: any;
  itinerary: any;
  generatedAt: string;
}

export default function ItineraryPage() {
  const params = useParams();
  const router = useRouter();
  const [itineraryData, setItineraryData] = useState<ItineraryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // For now, we'll get the data from sessionStorage
    // Later, we'll fetch from MongoDB using the ID
    const storedData = sessionStorage.getItem('latestItinerary');

    if (storedData) {
      try {
        const data = JSON.parse(storedData);
        setItineraryData(data);
      } catch (err) {
        setError('Failed to load itinerary data');
      }
    } else {
      setError('No itinerary data found');
    }

    setLoading(false);
  }, [params.id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !itineraryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-600 mb-6">{error || 'Itinerary not found'}</p>
          <button
            onClick={() => router.push('/')}
            className="bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { companionProfile, budgetAllocation, itinerary } = itineraryData;

  // Transform AI data structure to component-friendly structure
  const transformedDays = itinerary.days?.map((day: any) => {
    const activities = [];

    // Extract activities from time slots
    if (day.morning?.activity) {
      activities.push({
        ...day.morning.activity,
        id: day.morning.activity.activityId || `activity-${day.day}-morning`,
        title: day.morning.activity.name,
        timeOfDay: 'morning',
        rating: 4.5, // Default if not provided
      });
    }

    if (day.afternoon?.activity) {
      activities.push({
        ...day.afternoon.activity,
        id: day.afternoon.activity.activityId || `activity-${day.day}-afternoon`,
        title: day.afternoon.activity.name,
        timeOfDay: 'afternoon',
        rating: 4.5,
      });
    }

    if (day.evening?.activity) {
      activities.push({
        ...day.evening.activity,
        id: day.evening.activity.activityId || `activity-${day.day}-evening`,
        title: day.evening.activity.name,
        timeOfDay: 'evening',
        rating: 4.5,
      });
    }

    // Extract meals
    const meals = {
      breakfast: day.morning?.restaurant?.name,
      lunch: day.lunch?.restaurant?.name,
      dinner: day.evening?.restaurant?.name,
    };

    return {
      dayNumber: day.day,
      date: day.date,
      theme: day.theme || `Day ${day.day}`,
      activities,
      meals,
    };
  }) || [];

  // Extract hotel from first day's accommodation
  const hotel = itinerary.days?.[0]?.accommodation?.hotel ? {
    ...itinerary.days[0].accommodation.hotel,
    id: itinerary.days[0].accommodation.hotel.hotelId,
    name: itinerary.days[0].accommodation.hotel.name,
    stars: itinerary.days[0].accommodation.hotel.stars,
    pricePerNight: itinerary.days[0].accommodation.hotel.pricePerNight,
    rating: itinerary.days[0].accommodation.hotel.rating,
    amenities: itinerary.days[0].accommodation.hotel.features || [],
    location: {
      address: itinerary.days[0].accommodation.hotel.location || 'Dubai',
    },
  } : null;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <ItineraryHeader
        destination={itinerary.destination}
        dateRange={itinerary.dateRange}
        companionType={itinerary.companionType}
        interests={itinerary.interests}
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-8 space-y-8">

        {/* Companion Profile Summary */}
        <section className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Travel Profile
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {companionProfile.profile}
          </p>

          {/* Recommendations */}
          {companionProfile.recommendations && companionProfile.recommendations.length > 0 && (
            <div className="bg-teal-50 rounded-xl p-4">
              <h3 className="font-semibold text-teal-800 mb-2">
                ✨ Personalized Recommendations
              </h3>
              <ul className="space-y-1">
                {companionProfile.recommendations.map((rec: string, idx: number) => (
                  <li key={idx} className="text-teal-700 text-sm">
                    • {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Budget Summary */}
        <BudgetSummary budgetAllocation={budgetAllocation} />

        {/* Hotel Recommendation */}
        {hotel && (
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              🏨 Your Hotel
            </h2>
            <HotelCard hotel={hotel} totalNights={transformedDays.length} />
          </section>
        )}

        {/* Daily Itinerary */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📅 Your Adventure Day by Day
          </h2>
          <div className="space-y-6">
            {transformedDays.length > 0 ? (
              transformedDays.map((day: any, index: number) => (
                <DayCard key={index} day={day} dayNumber={day.dayNumber} />
              ))
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center text-gray-600">
                <p>No daily activities available</p>
              </div>
            )}
          </div>
        </section>

        {/* Budget Tips */}
        {budgetAllocation.savingTips && budgetAllocation.savingTips.length > 0 && (
          <section className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              💡 Money-Saving Tips
            </h2>
            <ul className="space-y-2">
              {budgetAllocation.savingTips.map((tip: string, idx: number) => (
                <li key={idx} className="text-gray-700 flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Action Buttons */}
        <section className="flex flex-col sm:flex-row gap-4">
          <DownloadPDFButton itineraryData={itineraryData} />
          <button
            onClick={() => router.push('/')}
            className="flex-1 bg-teal-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-teal-600 transition"
          >
            🎒 Plan Another Trip
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 py-8">
          <p>Your personalized itinerary by Wander</p>
          <p className="mt-1 text-xs">Generated on {new Date(itineraryData.generatedAt).toLocaleDateString()}</p>
        </footer>
      </div>
    </main>
  );
}
