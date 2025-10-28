'use client';

/**
 * Offline Fallback Page
 * Displayed when the user is offline and trying to access a page that's not cached
 */
export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        {/* Offline Icon */}
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
            />
          </svg>
        </div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          You're Offline
        </h1>
        <p className="text-gray-600 mb-6">
          It looks like you've lost your internet connection. Check your network and try again.
        </p>

        {/* Help Text */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-semibold text-teal-900 mb-2">
            What you can do:
          </h3>
          <ul className="text-sm text-teal-800 space-y-1 text-left">
            <li>• Check your Wi-Fi or mobile data connection</li>
            <li>• Try switching between Wi-Fi and mobile data</li>
            <li>• View previously generated itineraries (if cached)</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            Retry Connection
          </button>
          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Go Back
          </button>
        </div>

        {/* PWA Info */}
        <p className="mt-6 text-xs text-gray-500">
          Some features require an internet connection. We'll automatically reconnect when your connection is restored.
        </p>
      </div>
    </div>
  );
}
