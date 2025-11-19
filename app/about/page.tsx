export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Wander</h1>
          <p className="text-lg text-gray-600">
            Your Perfect Trip, Perfectly Planned
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Wander is a modern travel planning platform that helps travelers create personalized
              itineraries tailored to their preferences, interests, and travel style. We believe
              that every journey should be unique and memorable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We're dedicated to simplifying travel planning by providing intelligent, personalized
              recommendations that help you discover amazing experiences, find the perfect accommodation,
              and make the most of your time exploring new destinations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">What We Offer</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Personalized day-by-day itineraries based on your travel style</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Curated hotel recommendations matching your budget and preferences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Activity suggestions with detailed descriptions and booking options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">→</span>
                <span>Travel tips and insider recommendations</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Have questions or feedback? We'd love to hear from you at{' '}
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
