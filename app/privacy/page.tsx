export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Introduction</h2>
            <p className="leading-relaxed">
              Wander ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard your information when you use our travel planning
              service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Information We Collect</h2>
            <p className="leading-relaxed mb-3">
              When you use Wander, we may collect the following information:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span><strong>Travel Preferences:</strong> Destination, dates, companion type, interests, hotel tier, and experience preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span><strong>Session Data:</strong> Temporary data stored in your browser to maintain your itinerary during your visit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span><strong>Usage Information:</strong> How you interact with our service to improve user experience</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">How We Use Your Information</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>To generate personalized travel itineraries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>To improve our service and user experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>To provide customer support</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Data Storage and Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your
              information. Your itinerary data is temporarily stored during your session and may be
              saved to our secure database for service improvement purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Third-Party Services</h2>
            <p className="leading-relaxed">
              We may use third-party services (such as booking platforms) to provide affiliate links.
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Your Rights</h2>
            <p className="leading-relaxed mb-3">You have the right to:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Access the information we hold about you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Request correction of inaccurate data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Request deletion of your data</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a
                href="mailto:Eterna.General@gmail.com"
                className="text-teal-600 hover:text-teal-700 font-semibold"
              >
                Eterna.General@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
