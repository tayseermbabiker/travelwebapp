'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Error Boundary for Itinerary Page
 * Handles errors specific to itinerary display
 */
export default function ItineraryError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error('🚨 Itinerary Page Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Error Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Unable to Load Itinerary
          </h1>
          <p className="text-gray-600">
            We had trouble displaying your travel itinerary.
          </p>
        </div>

        {/* Possible Causes */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">
            Possible causes:
          </h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• The itinerary data may be corrupted</li>
            <li>• Your session may have expired</li>
            <li>• The itinerary link may be invalid</li>
          </ul>
        </div>

        {/* Error Details (dev only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs font-semibold text-gray-700 mb-1">
              Error Details (dev only):
            </p>
            <p className="text-xs font-mono text-gray-600 break-words">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            Try Loading Again
          </button>
          <button
            onClick={() => router.push('/')}
            className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Generate New Itinerary
          </button>
        </div>

        {/* Help Text */}
        <p className="mt-6 text-center text-xs text-gray-500">
          If you continue to experience issues, please clear your browser cache
          and try again.
        </p>
      </div>
    </div>
  );
}
