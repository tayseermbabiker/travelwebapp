export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using Wander's travel planning service, you accept and agree to be bound
              by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Service Description</h2>
            <p className="leading-relaxed">
              Wander provides personalized travel itinerary planning services. We generate recommendations
              based on your preferences, but we do not directly provide travel services, accommodations,
              or activities. All bookings are made through third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">User Responsibilities</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Provide accurate information when creating your itinerary</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Verify all travel details, bookings, and requirements independently</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Comply with all applicable laws and regulations when traveling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Use the service for lawful purposes only</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              Wander provides itinerary recommendations "as is" without warranties of any kind. We do not
              guarantee the accuracy, completeness, or reliability of any travel information. Travel
              conditions, prices, availability, and regulations may change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Limitation of Liability</h2>
            <p className="leading-relaxed">
              Wander is not responsible for any damages, losses, or issues arising from your use of our
              service or from bookings made through third-party providers. This includes but is not limited
              to travel delays, cancellations, accommodation issues, or personal injury.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Affiliate Links</h2>
            <p className="leading-relaxed">
              Our service may contain affiliate links to third-party booking platforms. We may earn
              a commission from bookings made through these links at no additional cost to you. These
              third-party services have their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, features, and functionality of Wander are owned by us and are protected by
              copyright, trademark, and other intellectual property laws. You may not copy, modify,
              or distribute our content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Continued use of our
              service after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact</h2>
            <p className="leading-relaxed">
              For questions about these Terms of Service, please contact us at{' '}
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
