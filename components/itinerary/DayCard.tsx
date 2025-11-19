'use client';

interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  timeOfDay: string;
  rating?: number;
  imageUrl?: string;
  affiliateLinks?: any;
  bestPrice?: string;
}

interface DayCardProps {
  day: {
    dayNumber: number;
    date: string;
    theme: string;
    activities: Activity[];
    meals?: {
      breakfast?: string;
      lunch?: string;
      dinner?: string;
    };
  };
  dayNumber: number;
}

export default function DayCard({ day, dayNumber }: DayCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  };

  const getTimeLabel = (timeOfDay: string) => {
    const labelMap: { [key: string]: string } = {
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
      night: 'Night',
    };
    return labelMap[timeOfDay.toLowerCase()] || 'Time';
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      adventure: 'bg-orange-100 text-orange-800',
      culture: 'bg-purple-100 text-purple-800',
      food: 'bg-red-100 text-red-800',
      sightseeing: 'bg-blue-100 text-blue-800',
      wellness: 'bg-green-100 text-green-800',
      nightlife: 'bg-pink-100 text-pink-800',
    };
    return colorMap[category.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  const totalDayCost = day.activities.reduce((sum, activity) => sum + activity.price, 0);

  const handleBookNow = (activity: Activity) => {
    if (activity.affiliateLinks && activity.bestPrice) {
      // Use affiliate proxy for security and analytics
      const proxyUrl = `/api/affiliate-redirect?activity=${activity.id}&provider=${activity.bestPrice}`;
      window.open(proxyUrl, '_blank');
    }
  };

  // Check if this is a travel day
  const isTravelDay = day.activities.some(a => a.category === 'transport' || a.category === 'travel');

  return (
    <div className={`rounded-2xl shadow-md overflow-hidden ${
      isTravelDay
        ? 'border-2 border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50'
        : 'bg-white'
    }`}>
      {/* Day Header */}
      <div className={`text-white p-6 ${
        isTravelDay
          ? 'bg-gradient-to-r from-amber-400 to-orange-400'
          : 'bg-gradient-to-r from-teal-500 to-teal-600'
      }`}>
        <div>
          <div className="text-sm opacity-90 mb-1">
            {isTravelDay ? 'Travel Day' : `Day ${dayNumber}`}
          </div>
          <h3 className="text-2xl font-bold mb-1">
            {day.theme}
          </h3>
          <p className="text-sm opacity-90">{formatDate(day.date)}</p>
        </div>
      </div>

      {/* Activities */}
      <div className="p-6 space-y-6">
        {day.activities.map((activity, index) => (
          <div key={activity.id} className="border-l-4 border-teal-500 pl-4">
            {/* Time & Category */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-sm font-semibold text-gray-600">
                {getTimeLabel(activity.timeOfDay)}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getCategoryColor(activity.category)}`}>
                {activity.category}
              </span>
              {activity.rating && (
                <span className="text-xs text-gray-600">
                  {activity.rating}/5 rating
                </span>
              )}
            </div>

            {/* Activity Title & Description */}
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              {activity.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {activity.description}
            </p>

            {/* Activity Details */}
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <div className="text-sm text-gray-600">
                Duration: {activity.duration}
              </div>
              <div className="text-sm font-semibold text-teal-600">
                ${activity.price}
              </div>
            </div>

            {/* Book Now Button */}
            {activity.affiliateLinks && activity.bestPrice && (
              <button
                onClick={() => handleBookNow(activity)}
                className="bg-teal-500 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-teal-600 transition"
              >
                Book Now on {activity.bestPrice}
              </button>
            )}

            {/* Free Activity Badge */}
            {activity.price === 0 && (
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                Free Activity
              </div>
            )}
          </div>
        ))}

        {/* Meal Suggestions */}
        {day.meals && (
          <div className="bg-amber-50 rounded-xl p-4 space-y-2">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">
              Meal Suggestions
            </h4>
            {day.meals.breakfast && (
              <div className="text-sm text-gray-700">
                <span className="font-semibold">Breakfast:</span> {day.meals.breakfast}
              </div>
            )}
            {day.meals.lunch && (
              <div className="text-sm text-gray-700">
                <span className="font-semibold">Lunch:</span> {day.meals.lunch}
              </div>
            )}
            {day.meals.dinner && (
              <div className="text-sm text-gray-700">
                <span className="font-semibold">Dinner:</span> {day.meals.dinner}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
