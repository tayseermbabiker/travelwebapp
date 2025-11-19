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
    <main className="min-h-screen bg-gray-50 font-sans pt-16" style={{ fontFamily: 'var(--font-poppins), var(--font-mulish), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
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

              {/* Winter Destinations Overview Table */}
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
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Dubai, UAE</td>
                      <td className="p-3">Luxury, families, shopping</td>
                      <td className="p-3">20-28°C</td>
                      <td className="p-3">Mid-High</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Tulum, Mexico</td>
                      <td className="p-3">Wellness, couples, beach</td>
                      <td className="p-3">22-27°C</td>
                      <td className="p-3">Mid</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Lisbon, Portugal</td>
                      <td className="p-3">Budget, culture, food</td>
                      <td className="p-3">12-18°C</td>
                      <td className="p-3">Budget-Mid</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Chiang Mai, Thailand</td>
                      <td className="p-3">Digital nomads, budget</td>
                      <td className="p-3">15-32°C</td>
                      <td className="p-3">Budget</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Tbilisi, Georgia</td>
                      <td className="p-3">Adventure, off-beat</td>
                      <td className="p-3">0-10°C</td>
                      <td className="p-3">Very Budget</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Da Nang, Vietnam</td>
                      <td className="p-3">Beach, emerging</td>
                      <td className="p-3">18-26°C</td>
                      <td className="p-3">Budget</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Barcelona, Spain</td>
                      <td className="p-3">Culture, architecture</td>
                      <td className="p-3">8-15°C</td>
                      <td className="p-3">Mid</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3 font-semibold">Tokyo, Japan</td>
                      <td className="p-3">Adventure, culture</td>
                      <td className="p-3">5-10°C</td>
                      <td className="p-3">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Detailed Destination Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Winter Destination Details</h3>

                {/* Dubai */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleDestination('winter-dubai')}
                    className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition"
                  >
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">1. Dubai, UAE – Luxury Meets Value</h4>
                      <p className="text-sm text-gray-600">Perfect for: Luxury travelers, budget backpackers, families, shopping enthusiasts</p>
                    </div>
                    {openDestination === 'winter-dubai' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'winter-dubai' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Dubai in winter is paradoxical—simultaneously one of the world's most exclusive destinations and surprisingly accessible for budget travelers. Daytime temperatures of 20-28°C with nights dropping to 14-18°C make outdoor exploration genuinely enjoyable.
                      </p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Winter?</h5>
                        <p className="text-sm text-gray-700">Summer heat reaches 45°C, making winter the only time many attractions are comfortable without suffering.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Dubai Shopping Festival (Dec 5, 2025 - Jan 11, 2026): Mega sales, concerts, raffles, fireworks</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Desert safaris, yacht cruises, rooftop dinners, evening beach walks</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>World-class shopping malls alongside traditional souks</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Beaches, water sports, Burj Khalifa, museums</span></li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Budget Range:</strong> Luxury ($250-500/night), Premium ($120-250/night), Budget ($40-80/night)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tulum */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('winter-tulum')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">2. Tulum, Mexico – Beach, Wellness & Culture</h4>
                      <p className="text-sm text-gray-600">Perfect for: Wellness seekers, couples, beach lovers, digital nomads</p>
                    </div>
                    {openDestination === 'winter-tulum' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'winter-tulum' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Tulum offers Caribbean beaches combined with cenotes, Mayan ruins, and a thriving wellness scene. It's where backpackers meet yoga enthusiasts.</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Winter?</h5>
                        <p className="text-sm text-gray-700">December-February brings perfect Caribbean temperatures (22-27°C) without summer heat or hurricanes. Dry season means clear skies.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>White sand beaches with calm Caribbean waters</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Cenote swimming (unique freshwater pools)</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Mayan ruins overlooking the sea</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>World-class yoga retreats and wellness centers</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Bohemian beach town vibe mixed with luxury resorts</span></li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Budget Range:</strong> Luxury ($150-300/night), Premium ($80-150/night), Budget ($30-60/night)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Lisbon */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('winter-lisbon')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">3. Lisbon, Portugal – Affordable Europe</h4>
                      <p className="text-sm text-gray-600">Perfect for: First-time travelers, budget backpackers, culture seekers, food lovers</p>
                    </div>
                    {openDestination === 'winter-lisbon' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'winter-lisbon' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Lisbon is Europe's best-kept secret—affordable compared to other Western European capitals, walkable, with exceptional food and neighborhoods that feel like villages.</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Winter?</h5>
                        <p className="text-sm text-gray-700">Mild temperatures (12-18°C) comparable to European summer, making walking and exploring comfortable without crowds or summer prices.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Historic neighborhoods: Alfama (medieval streets), Belém (pastéis de nata birthplace)</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Miradouros (viewpoints) with panoramic city views</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Tejo River cruises and Sintra day trips</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Exceptional seafood and wine at reasonable prices</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Vibrant food scene and emerging culture</span></li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Budget Range:</strong> Luxury ($120-200/night), Premium ($60-120/night), Budget ($25-50/night)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chiang Mai */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('winter-chiangmai')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">4. Chiang Mai, Thailand – Digital Nomad Capital</h4>
                      <p className="text-sm text-gray-600">Perfect for: Digital nomads, budget backpackers, adventure seekers, culture enthusiasts</p>
                    </div>
                    {openDestination === 'winter-chiangmai' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'winter-chiangmai' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Chiang Mai represents everything budget travelers love: 300+ temples, excellent food, low prices, and a thriving remote worker community.</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Winter?</h5>
                        <p className="text-sm text-gray-700">Cool season (November-February) brings comfortable temperatures (15-32°C) perfect for exploring without sweat. Dry weather means clear temple visits.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Over 300 Buddhist temples with stunning architecture</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Ethical elephant sanctuaries</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Night markets with incredible street food</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Co-working spaces and digital nomad community</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Muay Thai training gyms</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Mountain trekking and jungle adventures</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Extremely low cost of living ($10-15/night budget accommodation)</span></li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Budget Range:</strong> Luxury ($100-200/night), Premium ($40-80/night), Budget ($10-25/night)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tbilisi */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('winter-tbilisi')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">5. Tbilisi, Georgia – Emerging Gem</h4>
                      <p className="text-sm text-gray-600">Perfect for: Adventure seekers, off-the-beaten-path travelers, culture enthusiasts, budget explorers</p>
                    </div>
                    {openDestination === 'winter-tbilisi' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'winter-tbilisi' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Georgia offers dramatic architecture blending old and new, exceptional wine, warm hospitality, and proximity to mountains—all at remarkably low prices.</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Winter?</h5>
                        <p className="text-sm text-gray-700">Manageable temperatures perfect for exploring without extreme heat. Cool weather makes walking tours comfortable. Nearby mountains offer winter hiking.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Eclectic architecture (Soviet, medieval churches, modern design)</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Sulfur baths (historic bathhouses)</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Georgian wine culture (birthplace of wine)</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Mountains, gorges, outdoor adventures nearby</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Incredibly affordable dining and accommodation</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Emerging art and music scene</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Warm, welcoming local culture</span></li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Budget Range:</strong> Luxury ($100-150/night), Premium ($40-70/night), Budget ($12-25/night)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Da Nang */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('winter-danang')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">6. Da Nang, Vietnam – Emerging Beach Destination</h4>
                      <p className="text-sm text-gray-600">Perfect for: Beach lovers, budget travelers, emerging destination seekers, families</p>
                    </div>
                    {openDestination === 'winter-danang' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'winter-danang' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Da Nang is Vietnam's best-kept secret—stunning beaches, nearby Hoi An, excellent food, significantly fewer tourists than other southern beaches.</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Winter?</h5>
                        <p className="text-sm text-gray-700">Dry season (December-February) brings temperatures of 18-26°C, warm enough for beach swimming without monsoons or humidity.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>My Khe Beach: Vietnam's most beautiful beach</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Hoi An day trip: Ancient UNESCO town with lantern-lit streets</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Marble Mountains: Caves, temples, city views</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Fresh seafood at fraction of Western prices</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Emerging restaurant and bar scene</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Water sports: Kitesurfing, diving, island hopping</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Extremely affordable accommodation and dining</span></li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Budget Range:</strong> Luxury ($150-250/night), Premium ($60-120/night), Budget ($15-40/night)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Barcelona */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('winter-barcelona')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">7. Barcelona, Spain – Culture & Architecture</h4>
                      <p className="text-sm text-gray-600">Perfect for: Culture seekers, food lovers, city explorers, architecture enthusiasts</p>
                    </div>
                    {openDestination === 'winter-barcelona' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'winter-barcelona' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Barcelona combines Gaudí architecture, vibrant neighborhoods, Mediterranean beaches, and exceptional Catalan cuisine. Winter visits mean avoiding summer crowds while enjoying crisp Mediterranean weather.</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Winter?</h5>
                        <p className="text-sm text-gray-700">Mild temperatures (8-15°C) perfect for walking without summer heat. Fewer crowds at attractions, better restaurant availability.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Sagrada Família: Gaudí's unfinished masterpiece</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Park Güell: Gaudí's whimsical park with city views</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Gothic Quarter: Medieval streets and history</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Mediterranean beaches (year-round)</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Tapas culture: Small plates and wine bars</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Vibrant neighborhoods: Born, Raval, Gràcia</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Art museums: Picasso Museum, MNAC</span></li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Budget Range:</strong> Luxury ($200-350/night), Premium ($100-200/night), Budget ($35-70/night)</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tokyo */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('winter-tokyo')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">8. Tokyo, Japan – Modern Meets Tradition</h4>
                      <p className="text-sm text-gray-600">Perfect for: Adventure travelers, culture enthusiasts, foodies, architecture lovers</p>
                    </div>
                    {openDestination === 'winter-tokyo' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'winter-tokyo' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Tokyo merges ancient temples with neon-lit skyscrapers, traditional tea ceremonies with video game arcades. Winter's crisp air and clear skies make sightseeing ideal with exceptional visibility.</p>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Winter?</h5>
                        <p className="text-sm text-gray-700">Clear skies with temperatures of 5-10°C, perfect for walking and photography without summer humidity. Exceptional visibility for views.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Temples and shrines: Senso-ji, Meiji Shrine</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Contemporary and traditional museums</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>World's greatest food scene: sushi, ramen, fine dining</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Neighborhoods: Shibuya, Shinjuku, Harajuku, Asakusa</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Modern architecture and design</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Efficient public transportation</span></li>
                          <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span>Organized chaos and cultural immersion</span></li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-700"><strong>Budget Range:</strong> Luxury ($250-400/night), Premium ($120-200/night), Budget ($50-100/night)</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-center pt-4">
                <a href="/" className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition">
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
                  Spring is nature's reset button. Flowers bloom, temperatures warm, daylight extends. Perfect weather, fewer crowds than summer, and lower prices than peak season. Cherry blossoms, wildflower valleys, and Mediterranean blooms transform destinations into their most photogenic selves.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Spring Weather Advantage:</strong> Ideal temperatures (15-25°C) with minimal rain, perfect for outdoor exploration.
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
                    <tr className="border-b"><td className="p-3 font-semibold">Kyoto, Japan</td><td className="p-3">Cherry blossoms (late March-early April)</td><td className="p-3">12-20°C</td><td className="p-3">Mid-High</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Santorini, Greece</td><td className="p-3">Spring wildflowers, warm sea</td><td className="p-3">20-25°C</td><td className="p-3">High</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Amsterdam, Netherlands</td><td className="p-3">Tulip season (mid-April-early May)</td><td className="p-3">10-17°C</td><td className="p-3">Mid</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Barcelona, Spain</td><td className="p-3">Spring blooms, terrace season</td><td className="p-3">15-20°C</td><td className="p-3">Mid</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Lisbon, Portugal</td><td className="p-3">Spring gardens</td><td className="p-3">16-22°C</td><td className="p-3">Budget-Mid</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Dubai, UAE</td><td className="p-3">Garden blooms</td><td className="p-3">22-30°C</td><td className="p-3">Mid-High</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Marrakech, Morocco</td><td className="p-3">Majorelle Gardens</td><td className="p-3">18-25°C</td><td className="p-3">Mid</td></tr>
                    <tr><td className="p-3 font-semibold">Chiang Mai, Thailand</td><td className="p-3">Songkran Festival (mid-April)</td><td className="p-3">20-30°C</td><td className="p-3">Budget</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-2">
                  <strong>8 Spring Destinations with detailed "Why Spring?" and "What to Expect" sections</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Kyoto cherry blossoms, Santorini wildflowers, Amsterdam tulips, and 5 more destinations await your exploration.
                </p>
              </div>

              <div className="text-center pt-4">
                <a href="/" className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition">
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
                  Summer means peak season—longer daylight, warmest weather, vibrant nightlife, and open water for beach lovers. Summer delivers beaches at their best, festivals in full swing, and mountains accessible for trekking.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Summer Weather Advantage:</strong> Beach destinations peak at 25-33°C with warm waters, festival season in full gear.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-800">Destination</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Signature</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Weather</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b"><td className="p-3 font-semibold">Bali, Indonesia</td><td className="p-3">Dry season, perfect waves</td><td className="p-3">25-30°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Santorini, Greece</td><td className="p-3">Beach clubs, Aegean Sea (26°C)</td><td className="p-3">25-30°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Dubrovnik, Croatia</td><td className="p-3">Adriatic Sea (23-25°C)</td><td className="p-3">25-30°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Barcelona, Spain</td><td className="p-3">Beach culture, nightlife</td><td className="p-3">25-30°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Iceland</td><td className="p-3">Midnight sun, hiking</td><td className="p-3">10-15°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Maldives</td><td className="p-3">Overwater villas, manta rays</td><td className="p-3">Warm</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Cyprus</td><td className="p-3">Crystal waters</td><td className="p-3">28-33°C</td></tr>
                    <tr><td className="p-3 font-semibold">Tokyo, Japan</td><td className="p-3">Summer matsuri, fireworks</td><td className="p-3">25-32°C</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-2">
                  <strong>8 Summer Destinations with detailed "Why Summer?" and "What to Expect" sections</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Bali's perfect waves, Iceland's midnight sun, Maldives diving, and 5 more destinations await.
                </p>
              </div>

              <div className="text-center pt-4">
                <a href="/" className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition">
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
                  Fall is the overlooked goldilocks season—not peak, not quiet, just right. Golden light perfects photography. Foliage turns trees into living art. Temperatures drop from summer's intensity to comfortable exploration weather. Crowds thin. Prices drop.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Fall Weather Advantage:</strong> Cool but comfortable (10-25°C), spectacular foliage, water still warm in Mediterranean, fewer crowds, lower prices.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-800">Destination</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Signature</th>
                      <th className="text-left p-3 font-semibold text-gray-800">Weather</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b"><td className="p-3 font-semibold">New England, USA</td><td className="p-3">Fall colors peak (October)</td><td className="p-3">10-20°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Tuscany, Italy</td><td className="p-3">Wine harvest, golden hills</td><td className="p-3">15-25°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Kyoto, Japan</td><td className="p-3">Autumn illuminations</td><td className="p-3">12-20°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Patagonia, Chile/Argentina</td><td className="p-3">Southern spring, wildflowers</td><td className="p-3">8-15°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Morocco</td><td className="p-3">Comfortable temps, harvest</td><td className="p-3">18-28°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Dubrovnik, Croatia</td><td className="p-3">September warmth</td><td className="p-3">15-25°C</td></tr>
                    <tr className="border-b"><td className="p-3 font-semibold">Egypt</td><td className="p-3">Perfect exploration weather</td><td className="p-3">20-30°C</td></tr>
                    <tr><td className="p-3 font-semibold">Budapest, Hungary</td><td className="p-3">Danube foliage, thermal baths</td><td className="p-3">15-20°C</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 mb-2">
                  <strong>8 Fall Destinations with detailed "Why Fall?" and "What to Expect" sections</strong>
                </p>
                <p className="text-sm text-gray-600">
                  New England foliage, Tuscany wine harvest, Kyoto temples, and 5 more destinations await.
                </p>
              </div>

              <div className="text-center pt-4">
                <a href="/" className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 transition">
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
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What should I pack for seasonal travel?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Winter: Light layers, jacket for evenings. Spring: Layers, comfortable shoes, light rain jacket. Summer: Lightweight clothes, swim gear, sunscreen. Fall: Layers, light jacket, comfortable shoes.
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
            Use Wander's travel planner to generate a personalized itinerary based on your chosen season, destination, travel style, and interests.
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
