'use client';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-teal-500 border-t-transparent mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800">
          Loading your adventure...
        </h2>
        <p className="text-gray-600 mt-2">
          Just a moment while we prepare your itinerary
        </p>
      </div>
    </div>
  );
}
