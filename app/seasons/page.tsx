'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SeasonsPage() {
  const [openSeason, setOpenSeason] = useState<string | null>('winter');
  const [openDestination, setOpenDestination] = useState<string | null>(null);

  const toggleSeason = (season: string) => {
    setOpenSeason(openSeason === season ? null : season);
    setOpenDestination(null);
  };

  const toggleDestination = (destination: string) => {
    setOpenDestination(openDestination === destination ? null : destination);
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: 'var(--font-poppins), var(--font-mulish), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Best Destinations by Season
          </h1>
          <p className="text-xl md:text-2xl text-center mb-4 opacity-95">
            Complete Year-Round Travel Guide
          </p>
          <p className="text-lg text-center max-w-3xl mx-auto opacity-90">
            Travel timing isn't about luck—it's about strategy. The same destination transforms completely depending on when you visit. Choose your season below to discover 8 exceptional destinations perfect for that time of year.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Choose Your Season. Find Your Perfect Destination.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dubai in summer is scorching; in winter, it's paradise. Cherry blossoms bloom for weeks in Kyoto; miss them and you've missed spring. Paris crowds triple in July; visit in October and you'll actually enjoy it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This guide maps every season, revealing the <strong>best destinations to visit when</strong>—complete with weather, events, what to pack, where to stay, and why each season matters for each destination.
          </p>
        </section>

        {/* WINTER SECTION */}
        <section className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">
          <button
            onClick={() => toggleSeason('winter')}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 flex items-center justify-between hover:from-blue-600 hover:to-blue-700 transition"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-1">Winter Destinations (November-February)</h2>
              <p className="text-sm opacity-90">Perfect weather, fewer crowds, shopping festivals</p>
            </div>
            {openSeason === 'winter' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {openSeason === 'winter' && (
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Why Winter Travel?</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Winter conjures images of snow for many, but for savvy travelers, it's when the world opens up. While northern hemispheres bundle up, dozens of destinations hit their perfect climate sweet spot—ideal weather, fewer crowds, shopping festivals, and incredible value.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Winter Weather Advantage:</strong> Many destinations offer their most comfortable temperatures (20-28°C daytime, 14-18°C nights), perfect for exploring without extreme heat or crowds.
                </p>
              </div>

              {/* Winter Destinations Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-800">Destination</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Best For</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Weather</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Budget</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Dubai, UAE</td>
                      <td className="p-3">Luxury, families, shopping</td>
                      <td className="p-3">20-28°C</td>
                      <td className="p-3">Mid-High</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Tulum, Mexico</td>
                      <td className="p-3">Wellness, couples, beach</td>
                      <td className="p-3">22-27°C</td>
                      <td className="p-3">Mid</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Lisbon, Portugal</td>
                      <td className="p-3">Budget, culture, food</td>
                      <td className="p-3">12-18°C</td>
                      <td className="p-3">Budget-Mid</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Chiang Mai, Thailand</td>
                      <td className="p-3">Digital nomads, budget</td>
                      <td className="p-3">15-32°C</td>
                      <td className="p-3">Budget</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Tbilisi, Georgia</td>
                      <td className="p-3">Adventure, off-beat</td>
                      <td className="p-3">0-10°C</td>
                      <td className="p-3">Very Budget</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Da Nang, Vietnam</td>
                      <td className="p-3">Beach, emerging</td>
                      <td className="p-3">18-26°C</td>
                      <td className="p-3">Budget</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Barcelona, Spain</td>
                      <td className="p-3">Culture, architecture</td>
                      <td className="p-3">8-15°C</td>
                      <td className="p-3">Mid</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Tokyo, Japan</td>
                      <td className="p-3">Adventure, culture</td>
                      <td className="p-3">5-10°C</td>
                      <td className="p-3">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center pt-4">
                <a
                  href="/"
                  className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
                >
                  Plan Your Winter Adventure
                </a>
              </div>
            </div>
          )}
        </section>

        {/* SPRING SECTION */}
        <section className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">
          <button
            onClick={() => toggleSeason('spring')}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-6 flex items-center justify-between hover:from-green-600 hover:to-green-700 transition"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-1">Spring Destinations (March-May)</h2>
              <p className="text-sm opacity-90">Cherry blossoms, perfect weather, garden blooms</p>
            </div>
            {openSeason === 'spring' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {openSeason === 'spring' && (
            <div className="p-8 space-y-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Why Spring Travel?</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Spring is nature's reset button. Flowers bloom, temperatures warm, daylight extends. It's the season of renewal—perfect weather, fewer crowds than summer, and lower prices than peak season. Cherry blossoms, wildflower valleys, green vineyard hills, and Mediterranean blooms transform destinations into their most photogenic selves.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Spring Weather Advantage:</strong> Most spring destinations offer ideal temperatures (15-25°C) with minimal rain, perfect for outdoor exploration without summer heat or winter chill.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-800">Destination</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Signature</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Weather</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Budget</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Kyoto, Japan</td>
                      <td className="p-3">Cherry blossoms (late March-early April)</td>
                      <td className="p-3">12-20°C</td>
                      <td className="p-3">Mid-High</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Santorini, Greece</td>
                      <td className="p-3">Spring wildflowers, warm sea</td>
                      <td className="p-3">20-25°C</td>
                      <td className="p-3">High</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Amsterdam, Netherlands</td>
                      <td className="p-3">Tulip season (mid-April to early May)</td>
                      <td className="p-3">10-17°C</td>
                      <td className="p-3">Mid</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Barcelona, Spain</td>
                      <td className="p-3">Spring blooms, terrace season</td>
                      <td className="p-3">15-20°C</td>
                      <td className="p-3">Mid</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Lisbon, Portugal</td>
                      <td className="p-3">Spring gardens, mild weather</td>
                      <td className="p-3">16-22°C</td>
                      <td className="p-3">Budget-Mid</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Dubai, UAE</td>
                      <td className="p-3">Spring garden blooms</td>
                      <td className="p-3">22-30°C</td>
                      <td className="p-3">Mid-High</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Marrakech, Morocco</td>
                      <td className="p-3">Majorelle Gardens bloom</td>
                      <td className="p-3">18-25°C</td>
                      <td className="p-3">Mid</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Chiang Mai, Thailand</td>
                      <td className="p-3">Songkran Water Festival (mid-April)</td>
                      <td className="p-3">20-30°C</td>
                      <td className="p-3">Budget</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center pt-4">
                <a
                  href="/"
                  className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
                >
                  Plan Your Spring Adventure
                </a>
              </div>
            </div>
          )}
        </section>

        {/* SUMMER SECTION */}
        <section className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">
          <button
            onClick={() => toggleSeason('summer')}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 flex items-center justify-between hover:from-orange-600 hover:to-orange-700 transition"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-1">Summer Destinations (June-August)</h2>
              <p className="text-sm opacity-90">Beach season, festivals, midnight sun</p>
            </div>
            {openSeason === 'summer' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {openSeason === 'summer' && (
            <div className="p-8 space-y-6">
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Why Summer Travel?</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Summer means peak season—longer daylight, warmest weather, school holidays, vibrant nightlife, and open water for beach lovers. While winter offers retreats and spring offers gardens, summer delivers beaches at their best, festivals in full swing, and mountains accessible for trekking.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Summer Weather Advantage:</strong> Beach destinations peak at 25-33°C with warm waters, alpine regions open for trekking, midnight sun in far northern locations, and festival season in full gear.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-800">Destination</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Signature</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Weather</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Peak</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Bali, Indonesia</td>
                      <td className="p-3">Dry season, perfect waves, sunsets</td>
                      <td className="p-3">25-30°C</td>
                      <td className="p-3">June-Aug</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Santorini, Greece</td>
                      <td className="p-3">Beach clubs, nightlife, Aegean Sea (26°C)</td>
                      <td className="p-3">25-30°C</td>
                      <td className="p-3">June-Aug</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Dubrovnik, Croatia</td>
                      <td className="p-3">Adriatic Sea (23-25°C), festivals</td>
                      <td className="p-3">25-30°C</td>
                      <td className="p-3">June-Aug</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Barcelona, Spain</td>
                      <td className="p-3">Beach culture, nightlife, DJ sets</td>
                      <td className="p-3">25-30°C</td>
                      <td className="p-3">June-Aug</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Iceland</td>
                      <td className="p-3">Midnight sun, hiking, waterfalls</td>
                      <td className="p-3">10-15°C</td>
                      <td className="p-3">June-July</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Maldives</td>
                      <td className="p-3">Overwater villas, manta rays, whale sharks</td>
                      <td className="p-3">Warm</td>
                      <td className="p-3">June-Aug</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Cyprus</td>
                      <td className="p-3">Mediterranean warmth, crystal waters</td>
                      <td className="p-3">28-33°C</td>
                      <td className="p-3">June-Aug</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Tokyo, Japan</td>
                      <td className="p-3">Summer matsuri, fireworks, festivals</td>
                      <td className="p-3">25-32°C</td>
                      <td className="p-3">June-Aug</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center pt-4">
                <a
                  href="/"
                  className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
                >
                  Plan Your Summer Adventure
                </a>
              </div>
            </div>
          )}
        </section>

        {/* FALL SECTION */}
        <section className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">
          <button
            onClick={() => toggleSeason('fall')}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 flex items-center justify-between hover:from-amber-600 hover:to-amber-700 transition"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold mb-1">Fall Destinations (September-November)</h2>
              <p className="text-sm opacity-90">Foliage, wine harvest, comfortable weather</p>
            </div>
            {openSeason === 'fall' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          {openSeason === 'fall' && (
            <div className="p-8 space-y-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Why Fall Travel?</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Fall is the overlooked goldilocks season—not peak, not quiet, just right. Golden light perfects photography. Foliage turns trees into living art. Temperatures drop from summer's intensity to comfortable exploration weather. Crowds thin. Prices drop. It's when seasoned travelers travel.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Fall Weather Advantage:</strong> Cool but comfortable (10-25°C depending on destination), spectacular foliage in northern regions, water still warm in Mediterranean destinations, fewer crowds, lower prices.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-800">Destination</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Signature</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Weather</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Experience</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="p-3 font-semibold">New England, USA</td>
                      <td className="p-3">Fall colors peak (October), harvest</td>
                      <td className="p-3">10-20°C</td>
                      <td className="p-3">Peak foliage</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Tuscany, Italy</td>
                      <td className="p-3">Wine harvest, golden vineyard hills</td>
                      <td className="p-3">15-25°C</td>
                      <td className="p-3">Wine season</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Kyoto, Japan</td>
                      <td className="p-3">Autumn illuminations, fall temples</td>
                      <td className="p-3">12-20°C</td>
                      <td className="p-3">Temple glow</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Patagonia, Chile/Argentina</td>
                      <td className="p-3">Southern spring, wildflowers, wildlife</td>
                      <td className="p-3">8-15°C</td>
                      <td className="p-3">Spring bloom</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Morocco</td>
                      <td className="p-3">Comfortable temps, harissa season</td>
                      <td className="p-3">18-28°C</td>
                      <td className="p-3">Harvest</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Dubrovnik, Croatia</td>
                      <td className="p-3">September warmth, autumn charm</td>
                      <td className="p-3">15-25°C</td>
                      <td className="p-3">Off-season</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Egypt</td>
                      <td className="p-3">Perfect exploration weather, Nile cruises</td>
                      <td className="p-3">20-30°C</td>
                      <td className="p-3">Season begins</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Budapest, Hungary</td>
                      <td className="p-3">Danube foliage, thermal baths</td>
                      <td className="p-3">15-20°C</td>
                      <td className="p-3">Autumn elegance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center pt-4">
                <a
                  href="/"
                  className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
                >
                  Plan Your Fall Adventure
                </a>
              </div>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">When should I book my seasonal trip?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ideal is 6-8 weeks in advance. Summer (book March-April), Fall (book June-July), Winter (book August-September), Spring (book January-February).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What's the best season to travel overall?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                It depends on your priorities. Winter offers shopping and perfect weather in warm destinations. Spring offers gardens and cherry blossoms. Summer offers beaches and festivals. Fall offers foliage and comfortable temperatures. There is no "best" season—only the best for your preferences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is it really that much more expensive to travel in peak season?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Yes. Peak season typically means 30-50% higher accommodation prices, crowded attractions, and difficulty securing reservations. Shoulder season often offers 40-60% savings while maintaining great weather.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How do I avoid crowds in popular destinations?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Travel during shoulder seasons (March-April for spring, September-October for fall). Within seasons, travel mid-week (Tuesday-Thursday) instead of weekends. Avoid major holidays and school breaks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Seasonal Adventure?
          </h2>
          <p className="text-lg mb-6 opacity-95">
            Use Wander's travel planner to generate a personalized itinerary based on your chosen season, destination, travel style, and interests. Get your custom day-by-day itinerary in seconds.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Generate Your Perfect Itinerary
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
