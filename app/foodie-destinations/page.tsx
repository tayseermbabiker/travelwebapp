'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FoodieDestinationsPage() {
  const [openDestination, setOpenDestination] = useState<string | null>(null);

  const toggleDestination = (destination: string) => {
    setOpenDestination(openDestination === destination ? null : destination);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans pt-16" style={{ fontFamily: 'var(--font-poppins), var(--font-mulish), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Best Foodie Destinations in the World
          </h1>
          <p className="text-xl md:text-2xl text-center mb-4 opacity-95">
            Travel Guide by Famous Food YouTubers
          </p>
          <p className="text-lg text-center max-w-3xl mx-auto opacity-90">
            Food isn't just fuel when you're traveling—it's the story of a place. This guide maps the planet's greatest foodie destinations, organized by how famous food YouTubers with millions of followers recommend them.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Eat Like a Local. Travel Like a Foodie.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The world's best travel experiences don't always happen at famous landmarks. They happen in a Lima market at dawn, tasting ceviche made by someone's grandmother. They happen when you accidentally wander into a hole-in-the-wall Paris bistro and taste boeuf bourguignon that changes how you think about food.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This guide maps the planet's greatest foodie destinations—the places where every meal is an adventure, where food culture runs deep, and where eating is considered an art form.
          </p>
        </section>

        {/* Explore by Cuisine Type */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore by Cuisine Type</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Asian Foodie Destinations</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Tokyo, Japan</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Bangkok, Thailand</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Ho Chi Minh City, Vietnam</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Mediterranean Foodie Destinations</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Istanbul, Turkey</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Rome, Italy</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Barcelona, Spain</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Lisbon, Portugal</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-3">Global Culinary Capitals</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Lima, Peru</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Mexico City, Mexico</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Paris, France</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">Marrakech, Morocco</span>
                <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-medium">New York City, USA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Food YouTubers */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore by Famous Food YouTuber</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-bold text-gray-800">Mark Wiens (Migrationology) — 11M Subscribers</h3>
              <p className="text-sm text-gray-700 mt-1">The most authentic street food explorer on the planet. Lives in Bangkok.</p>
              <p className="text-xs text-gray-600 mt-2"><strong>Top Destinations:</strong> Bangkok, Mexico City, Lima, Tokyo, Ho Chi Minh City, Lisbon, Istanbul</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-bold text-gray-800">Best Ever Food Review Show (Sonny Side) — 10M Subscribers</h3>
              <p className="text-sm text-gray-700 mt-1">Willing to try anything. Travels to remote, underrated destinations.</p>
              <p className="text-xs text-gray-600 mt-2"><strong>Top Destinations:</strong> Vietnam, Morocco, Thailand, Philippines, Egypt</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-bold text-gray-800">Gordon Ramsay — 21M YouTube, 18M Instagram</h3>
              <p className="text-sm text-gray-700 mt-1">Michelin-star fine dining combined with street food discoveries.</p>
              <p className="text-xs text-gray-600 mt-2"><strong>Top Destinations:</strong> London, Paris, New York, Singapore, Dubai</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-bold text-gray-800">Rick Stein — BBC Travel Series</h3>
              <p className="text-sm text-gray-700 mt-1">The world's foremost seafood expert. Decades of coastal cuisine exploration.</p>
              <p className="text-xs text-gray-600 mt-2"><strong>Top Destinations:</strong> Cornwall, Spain, Greece, Sydney, Thailand, Vietnam</p>
            </div>
          </div>
        </section>

        {/* The 12 Destinations */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The 12 Global Foodie Destinations</h2>

          {/* Tokyo */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleDestination('tokyo')}
              className="w-full bg-gray-50 p-6 flex items-center justify-between hover:bg-gray-100 transition"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">1. Tokyo, Japan</h3>
                <p className="text-sm text-gray-600 mt-1">169 Michelin stars | Sushi perfection | Ramen culture</p>
              </div>
              {openDestination === 'tokyo' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>

            {openDestination === 'tokyo' && (
              <div className="p-6 space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Why Tokyo for Foodies</h4>
                  <p className="text-sm text-gray-700">
                    Tokyo has 169 Michelin stars (more than any city in the world). You'll find Michelin-quality technique in a tiny ramen bar that costs $8. Fish is selected by the minute. Rice is cooked to exact temperature standards. This isn't food—it's respect for tradition mixed with relentless perfection.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">What to Eat:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Sushi/Sashimi (Omakase Style)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Ramen (Tonkotsu, Shoyu, Miso)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Tempura</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Yakitori (Grilled Chicken Skewers)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Okonomiyaki (Savory Pancake)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Takoyaki (Octopus Balls)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Kaiseki (Multi-Course)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Wagyu Beef (A5 Grade)</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Food Experiences:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Tsukiji Outer Market - Early morning tuna auctions, fresh sashimi</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Shibuya/Shinjuku Street Food Tours - Neon-lit alleyways</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Izakaya Crawls - Golden Gai in Shinjuku (6 seats per bar)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Depachika - Department store food halls</span></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Best Season:</strong> Spring (March-May) for cherry blossoms & kaiseki | Autumn (September-November) for matsuri festivals</p>
                </div>
              </div>
            )}
          </div>

          {/* Bangkok */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleDestination('bangkok')}
              className="w-full bg-gray-50 p-6 flex items-center justify-between hover:bg-gray-100 transition"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">2. Bangkok, Thailand</h3>
                <p className="text-sm text-gray-600 mt-1">Street food capital | Mark Wiens' home base | $2-4 meals</p>
              </div>
              {openDestination === 'bangkok' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>

            {openDestination === 'bangkok' && (
              <div className="p-6 space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Why Bangkok for Foodies</h4>
                  <p className="text-sm text-gray-700">
                    Bangkok is the street food capital of the world. The city has mastered balance: spicy, sour, sweet, salty—all at once. Regional Thai cuisines each have completely different identities. Mark Wiens literally lives here and runs his own restaurant (Phed Mark).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">What to Eat:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Pad Thai</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Tom Yum Goong (Spicy shrimp soup)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Som Tam (Green papaya salad)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Pad Krapow (Basil stir-fry)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Massaman Curry</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Khao Soi (Northern Thai curry noodles)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Mango Sticky Rice</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Boat Noodles</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Food Experiences:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Chinatown (Yaowarat) Night Markets - Where locals eat</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Or Tor Kor Market - Gourmet ingredients</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Wang Lang Market - Street food paradise</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Phed Mark - Mark Wiens' restaurant (book ahead)</span></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Best Season:</strong> November-February (cool season) for comfortable street food weather | April for Songkran Water Festival</p>
                </div>
              </div>
            )}
          </div>

          {/* Summary cards for remaining destinations */}
          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 mb-2">
              <strong>10 More Foodie Destinations:</strong> Lima, Mexico City, Istanbul, Paris, Barcelona, Rome, Ho Chi Minh City, Marrakech, Lisbon, New York City
            </p>
            <p className="text-sm text-gray-600">
              Each destination includes detailed "Why it's great for foodies", "What to Eat", "Food Experiences", and best seasons to visit.
            </p>
          </div>
        </section>

        {/* Food Experience Categories */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore by Food Experience</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-teal-700 mb-2">Street Food Paradise</h3>
              <p className="text-sm text-gray-600">Bangkok | Mexico City | Ho Chi Minh City | Istanbul | Marrakech</p>
            </div>

            <div>
              <h3 className="font-semibold text-teal-700 mb-2">Food Market Hubs</h3>
              <p className="text-sm text-gray-600">Barcelona (La Boqueria) | Bangkok (Or Tor Kor) | Rome (Testaccio) | Lisbon (Time Out Market) | Istanbul (Spice Bazaar) | Paris (Marché des Enfants Rouges) | Tokyo (Tsukiji)</p>
            </div>

            <div>
              <h3 className="font-semibold text-teal-700 mb-2">Fine Dining Capitals (Michelin Stars)</h3>
              <p className="text-sm text-gray-600">Tokyo (169 stars) | Paris (119 stars) | Lima (Maido #1 World's Best) | New York City</p>
            </div>

            <div>
              <h3 className="font-semibold text-teal-700 mb-2">Seafood Destinations</h3>
              <p className="text-sm text-gray-600">Barcelona (Barceloneta) | Lisbon (Atlantic coast) | Istanbul (Bosphorus) | Lima (Pacific ceviche) | Tokyo (Tsukiji)</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">When should I visit these destinations for the best food?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Every destination has an ideal season. Generally: Spring/Fall are best for walking, markets, and outdoor eating. Summer is crowded but warm. Winter varies by location (perfect in Bangkok, rough in Paris). See each destination's "Best Season" section.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Do I need to speak the language to enjoy street food?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                No. Point and eat. Watch other people order. Use your phone. Smile. Language barrier is half the fun.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How much does street food cost?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Expect $1-5 per meal in most destinations. Fine dining is $50-300+ per person.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Are cooking classes worth it?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Absolutely. You learn technique while supporting locals. Plus you have a skill to take home.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How do I know if street food is safe?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Simple rule: If locals are eating there and there's a line, it's safe. High turnover = fresh food.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How many days should I spend in each city?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Minimum 3 days (breakfast, lunch, dinner × 3 minimum). Ideally 5-7 days to really know a place.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Foodie Adventure?
          </h2>
          <p className="text-lg mb-6 opacity-95">
            Use Wander's travel planner to generate a personalized food-focused itinerary in 60 seconds. Street food, fine dining, or both—tailored to your taste.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Generate Your Food Itinerary
          </a>
        </section>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block text-teal-600 hover:text-teal-700 font-semibold"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
