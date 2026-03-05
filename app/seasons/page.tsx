'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import RelatedGuides from '@/components/pillar/RelatedGuides';
import PillarCTA from '@/components/pillar/PillarCTA';
import CreatorInsights from '@/components/pillar/CreatorInsights'
import TableOfContents from '@/components/pillar/TableOfContents';

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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans pt-16 relative overflow-hidden" style={{ fontFamily: 'var(--font-poppins), var(--font-mulish), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section - Glassmorphism */}
      <section className="relative py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Destinations by Season
              </h1>
              <p className="text-2xl md:text-3xl text-center mb-3 text-gray-800 font-light">
                Complete Year-Round Travel Guide
              </p>
              <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
                Travel timing isn't about luck—it's about strategy. The same destination transforms completely depending on when you visit. Choose your season below to discover 8 exceptional destinations perfect for that time of year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <TableOfContents
            title="32 Destinations by Season"
            summary="The complete guide to year-round travel in 2025. 8 destinations for each season with optimal timing, weather conditions, costs, and what makes each destination special during that time of year."
            highlights={[
              { label: 'Winter Escape', value: 'Dubai & Bali' },
              { label: 'Spring Blooms', value: 'Japan & Netherlands' },
              { label: 'Summer Sun', value: 'Greece & Croatia' },
              { label: 'Fall Colors', value: 'New England & Japan' },
            ]}
            sections={[
              { id: 'winter', label: 'Winter (Dec-Feb)' },
              { id: 'spring', label: 'Spring (Mar-May)' },
              { id: 'summer', label: 'Summer (Jun-Aug)' },
              { id: 'fall', label: 'Fall (Sep-Nov)' },
              { id: 'faqs', label: 'FAQs' },
            ]}
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 pb-8 pt-4">

        {/* Introduction */}
        <section className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300">
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
        <section id="winter" className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl shadow-xl mb-6 overflow-hidden hover:shadow-2xl transition-all duration-300 scroll-mt-20">
          <button
            onClick={() => toggleSeason('winter')}
            className="w-full relative overflow-hidden bg-gradient-to-r from-blue-400/80 via-blue-500/80 to-cyan-500/80 backdrop-blur-sm text-white p-6 flex items-center justify-between hover:from-blue-500/90 hover:via-blue-600/90 hover:to-cyan-600/90 transition-all duration-300"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

            <div className="text-left relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 drop-shadow-lg" style={{letterSpacing: '-0.02em', lineHeight: '1.25'}}>Winter Destinations (November-February)</h2>
              <p className="text-sm opacity-90 drop-shadow">Perfect weather, fewer crowds, shopping festivals</p>
            </div>
            {openSeason === 'winter' ? <ChevronUp className="w-6 h-6 drop-shadow-lg" /> : <ChevronDown className="w-6 h-6 drop-shadow-lg" />}
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
                      <p className="text-base text-gray-700 leading-relaxed" style={{lineHeight: '1.6'}}>Tulum offers Caribbean beaches combined with cenotes, Mayan ruins, and a thriving wellness scene. It's where backpackers meet yoga enthusiasts.</p>
                      <div className="bg-blue-50 rounded-lg p-4 h-20 flex items-center">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1">Why Winter?</h5>
                          <p className="text-sm md:text-[14px] text-gray-700">December-February brings perfect Caribbean temperatures (22-27°C) without summer heat or hurricanes. Dry season means clear skies.</p>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">What to Expect:</h5>
                        <ul className="space-y-1 text-sm md:text-[14px] text-gray-700">
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
        <section id="spring" className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl shadow-xl mb-6 overflow-hidden hover:shadow-2xl transition-all duration-300 scroll-mt-20">
          <button
            onClick={() => toggleSeason('spring')}
            className="w-full relative overflow-hidden bg-gradient-to-r from-green-400/80 via-green-500/80 to-emerald-500/80 backdrop-blur-sm text-white p-6 flex items-center justify-between hover:from-green-500/90 hover:via-green-600/90 hover:to-emerald-600/90 transition-all duration-300"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

            <div className="text-left relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 drop-shadow-lg" style={{letterSpacing: '-0.02em', lineHeight: '1.25'}}>Spring Destinations (March-May)</h2>
              <p className="text-sm opacity-90 drop-shadow">Cherry blossoms, perfect weather, garden blooms</p>
            </div>
            {openSeason === 'spring' ? <ChevronUp className="w-6 h-6 drop-shadow-lg" /> : <ChevronDown className="w-6 h-6 drop-shadow-lg" />}
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

              {/* Detailed Destination Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Spring Destination Details</h3>

                {/* Kyoto */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleDestination('spring-kyoto')}
                    className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition"
                  >
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">1. Kyoto, Japan – Cherry Blossom Season</h4>
                      <p className="text-sm text-gray-600">Perfect for: Cherry blossom lovers, culture enthusiasts, photographers, temple seekers</p>
                    </div>
                    {openDestination === 'spring-kyoto' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'spring-kyoto' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Kyoto's spring cherry blossom season is legendary worldwide—thousands of sakura trees transform ancient temples and traditional streets into pink wonderlands. The late March to early April bloom is Japan's most celebrated natural event.
                      </p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Spring?</h5>
                        <p className="text-sm text-gray-700">World-famous cherry blossom season (late March-early April 2025), peak bloom around April 5, hanami tradition, Philosopher's Path blooms, temple gardens at their best, perfect temperatures (12-20°C).</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Four Seasons Hotel Kyoto</strong> ⭐⭐⭐⭐⭐ - Sakura season exclusive packages, luxury, cultural experiences during peak bloom</li>
                              <li><strong>Genji Kyoto</strong> ⭐⭐⭐⭐⭐ - Kamo River banks with cherry blossoms outside your door, boutique luxury, 19 rooms with river views</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>The Millennials Kyoto</strong> ⭐⭐⭐ - High-tech capsule hotel, IoT integration, coworking lobby, 5-10 min walk to cherry blossoms</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>MACHIYA RESIDENCE INN</strong> ⭐⭐⭐⭐ - Traditional townhouses, cherry blossoms outside, spacious for families, local team provides hanami tips</li>
                              <li><strong>Le Méridien Kyoto</strong> ⭐⭐⭐⭐⭐ - Best views for cherry blossom season, spring rooftop pool, modern luxury</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Kyoto Machiya Budget Stays</strong> ⭐⭐⭐ - Restored traditional townhouses at affordable rates, cultural immersion, family-friendly</li>
                              <li><strong>Piece Hostel Sanjo</strong> ⭐⭐⭐ - Budget spring base, modern hostel-hotel, spring temple access</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Santorini */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('spring-santorini')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">2. Santorini, Greece – Spring Wildflowers</h4>
                      <p className="text-sm text-gray-600">Perfect for: Romance, sunset lovers, beach seekers, photographers</p>
                    </div>
                    {openDestination === 'spring-santorini' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'spring-santorini' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Santorini in spring offers warm May temperatures, spectacular wildflowers covering the volcanic landscape, and fewer tourists before the summer rush. Perfect weather for hiking volcanic trails and sunset viewing.</p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Spring?</h5>
                        <p className="text-sm text-gray-700">Warm May temperatures (20-25°C), fewer tourists before summer rush, spring wildflowers, ideal weather for hiking volcanic trails, perfect for sunset viewing without peak crowds.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Nikki Beach Resort & Spa Santorini</strong> ⭐⭐⭐⭐⭐ - Private beachfront, spring-perfect water temperatures (22°C), suite pools</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Fira/Oia)</p>
                            <ul className="space-y-1">
                              <li><strong>Art Maisons Oia Castle</strong> ⭐⭐⭐⭐⭐ - Oia cliff-side, spring sunset views, outdoor balcony pools for May weather</li>
                              <li><strong>Iconic Santorini, A Boutique Cave Hotel</strong> ⭐⭐⭐⭐⭐ - Cave authenticity, spring outdoor breakfasts, sea views, private patios</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Aria Suites & Villas</strong> ⭐⭐⭐⭐⭐ - Spacious family suites, spring-perfect pools, caldera views</li>
                              <li><strong>Santorini Princess Spa Hotel</strong> ⭐⭐⭐⭐⭐ - Spacious family rooms, spring jacuzzi patios, family spa</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Athina Luxury Suites</strong> ⭐⭐⭐⭐ - Caldera views, spring shoulder season value, swim-up bar pool</li>
                              <li><strong>Ducato di Oia</strong> ⭐⭐⭐⭐ - Oia location, private plunge pools, May views, better rates than peak summer</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Amsterdam */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('spring-amsterdam')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">3. Amsterdam, Netherlands – Tulip Season</h4>
                      <p className="text-sm text-gray-600">Perfect for: Tulip lovers, culture seekers, cycling enthusiasts, photographers</p>
                    </div>
                    {openDestination === 'spring-amsterdam' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'spring-amsterdam' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Amsterdam's spring tulip season transforms the city and surrounding countryside into a vibrant display of color. Keukenhof Gardens peak bloom and King's Day celebrations make this the most festive time to visit.</p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Spring?</h5>
                        <p className="text-sm text-gray-700">Tulip season (mid-April to early May), Keukenhof Gardens peak bloom, pleasant canal weather (10-17°C), King's Day celebrations (April 27), outdoor café season begins.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Waldorf Astoria Amsterdam</strong> ⭐⭐⭐⭐⭐ - Canal-side palatial location, spring terrace dining, tulip season luxury</li>
                              <li><strong>The Hoxton Amsterdam</strong> ⭐⭐⭐⭐ - Herengracht canal, spring walks, boutique design</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>NH Collection Amsterdam Barbizon Palace</strong> ⭐⭐⭐⭐⭐ - Centraal Station location, conference facilities, spring business events</li>
                              <li><strong>DoubleTree by Hilton Amsterdam Centraal Station</strong> ⭐⭐⭐⭐ - Family rooms near museums, spring tulip tour access</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>CitizenM Amsterdam South</strong> ⭐⭐⭐⭐ - Modern family-friendly design, near Vondelpark spring blooms</li>
                              <li><strong>Meininger Hotel Amsterdam City West</strong> ⭐⭐⭐ - Budget-friendly spring rates, family rooms, near Vondelpark</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>ClinkNOORD Amsterdam</strong> ⭐⭐⭐ - Budget hostel-hotel, spring rooftop terrace, free ferry to center</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Barcelona Spring */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('spring-barcelona')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">4. Barcelona, Spain – Spring Blooms</h4>
                      <p className="text-sm text-gray-600">Perfect for: Culture lovers, architecture enthusiasts, food seekers, terrace dining</p>
                    </div>
                    {openDestination === 'spring-barcelona' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'spring-barcelona' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Barcelona in spring offers perfect Mediterranean climate, spring blooms along La Rambla, and the start of outdoor terrace dining season. Ideal weather for walking tours and exploring Gaudí architecture.</p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Spring?</h5>
                        <p className="text-sm text-gray-700">Perfect Mediterranean climate (15-20°C), spring blooms along La Rambla, ideal for walking tours, outdoor dining season begins, cherry blossoms at parks.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>W Barcelona</strong> ⭐⭐⭐⭐⭐ - Iconic sail-shaped building, spring terrace dining, outdoor pools open</li>
                              <li><strong>SLS Barcelona</strong> ⭐⭐⭐⭐⭐ - Port Forum location, three infinity pools, private balconies perfect for spring breezes</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>The Barcelona Edition</strong> ⭐⭐⭐⭐⭐ - Gothic Quarter, rooftop bar with city views, spring festival access</li>
                              <li><strong>Duquesa Suites by Grup Duquessa</strong> ⭐⭐⭐⭐ - Heritage building, 3-minute walk to beach and city center</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Barcelona Princess Hotel</strong> ⭐⭐⭐⭐ - Business district near 22@ tech hub, after-work beach access</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel & Spa Villa Olimpica Suites</strong> ⭐⭐⭐⭐ - Family suites near Olympic Port, kids' spa, spring pools</li>
                              <li><strong>Ibis Styles Barcelona City Bogatell</strong> ⭐⭐⭐⭐ - Free beach kits for kids, family rooms, playground</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel Acta Voraport</strong> ⭐⭐⭐ - 15-minute walk to beach, budget spring exploration</li>
                              <li><strong>Travelodge Barcelona Poblenou</strong> ⭐⭐⭐ - Beach and transport access, spring budget rates</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Lisbon Spring */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('spring-lisbon')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">5. Lisbon, Portugal – Spring Gardens</h4>
                      <p className="text-sm text-gray-600">Perfect for: First-timers, budget travelers, culture seekers, food lovers</p>
                    </div>
                    {openDestination === 'spring-lisbon' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'spring-lisbon' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Lisbon's spring brings gorgeous mild weather, fewer tourists than summer, spring festivals, and perfect conditions for exploring hilly streets and outdoor terraces.</p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Spring?</h5>
                        <p className="text-sm text-gray-700">Gorgeous mild weather (16-22°C), fewer tourists than summer, spring festivals, perfect for exploring hilly streets, outdoor terrace season.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Four Seasons Hotel Ritz Lisbon</strong> ⭐⭐⭐⭐⭐ - Avenida location, spring terrace, luxury, romantic spring getaway</li>
                              <li><strong>Sofitel Lisbon Liberdade</strong> ⭐⭐⭐⭐⭐ - Parisian elegance, rooftop panoramic views, spring city exploration</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Corpo Santo Lisbon Historical Hotel</strong> ⭐⭐⭐⭐⭐ - Historic center, conference facilities, spring meeting venues</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Martinhal Lisbon Chiado</strong> ⭐⭐⭐⭐⭐ - Family-centered suites, kids' club with spring outdoor activities</li>
                              <li><strong>Altis Avenida Hotel</strong> ⭐⭐⭐⭐ - Family rooms, spring rooftop pool, warm atmosphere</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Casa do Jasmim by Shiadu</strong> ⭐⭐⭐ - Príncipe Real, spring exploration, sustainable ethos</li>
                              <li><strong>Hotel White Lisboa</strong> ⭐⭐⭐ - Saldanha area, spring rooftop plunge pool, minimalist design</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dubai Spring */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('spring-dubai')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">6. Dubai, UAE – Garden Blooms</h4>
                      <p className="text-sm text-gray-600">Perfect for: Shopping lovers, families, luxury travelers, outdoor enthusiasts</p>
                    </div>
                    {openDestination === 'spring-dubai' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'spring-dubai' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Dubai in spring offers perfect temperatures before summer heat, outdoor activities at their ideal, spring festivals and events, and pleasant beach weather with lower hotel rates than winter peak.</p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Spring?</h5>
                        <p className="text-sm text-gray-700">Perfect temperatures (22-30°C) before summer heat, outdoor activities ideal, spring festivals and events, pleasant beach weather, lower hotel rates than winter peak.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Atlantis The Palm</strong> ⭐⭐⭐⭐⭐ - Palm Jumeirah, spring beach weather, waterpark and aquarium</li>
                              <li><strong>One&Only Royal Mirage</strong> ⭐⭐⭐⭐⭐ - 1km private beach, 65 acres landscaped gardens in bloom</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Bulgari Hotel Dubai</strong> ⭐⭐⭐⭐⭐ - Downtown luxury, spring shopping season, Italian-Arabian design</li>
                              <li><strong>Address Downtown Dubai</strong> ⭐⭐⭐⭐⭐ - Burj Khalifa views, spring outdoor terraces, luxury shopping</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Jumeirah Emirates Towers</strong> ⭐⭐⭐⭐⭐ - Business district, conference facilities, spring networking events</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Jumeirah Beach Hotel</strong> ⭐⭐⭐⭐⭐ - Family beach resort, kids' clubs, pools and villas</li>
                              <li><strong>Centara Mirage Beach Resort Dubai</strong> ⭐⭐⭐⭐ - Themed beachfront, waterslides, all-inclusive family packages</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Rove Downtown Dubai</strong> ⭐⭐⭐ - Central location, spring budget rates, rooftop pool</li>
                              <li><strong>Ibis Styles Dragon Mart Dubai</strong> ⭐⭐⭐ - Budget-friendly spring rates, family rooms</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Marrakech */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('spring-marrakech')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">7. Marrakech, Morocco – Majorelle Gardens</h4>
                      <p className="text-sm text-gray-600">Perfect for: Culture seekers, garden lovers, food enthusiasts, adventure travelers</p>
                    </div>
                    {openDestination === 'spring-marrakech' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'spring-marrakech' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Marrakech in spring offers pleasant March weather, Majorelle Gardens in full bloom, rooftop terraces at their perfect temperature, and fewer tourists than summer making souk exploration comfortable.</p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Spring?</h5>
                        <p className="text-sm text-gray-700">Pleasant March weather (18-25°C), Majorelle Gardens in bloom, rooftop terraces perfect, fewer tourists than summer, comfortable souk exploring.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Medina/Gueliz)</p>
                            <ul className="space-y-1">
                              <li><strong>Royal Mansour Marrakech</strong> ⭐⭐⭐⭐⭐ - Luxury riads near Medina, spring rooftop dining, garden courtyards</li>
                              <li><strong>La Mamounia</strong> ⭐⭐⭐⭐⭐ - Historic luxury with spring gardens in full bloom, outdoor pools perfect for March-May</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Kenzi Tower Hotel</strong> ⭐⭐⭐⭐ - Gueliz business district, conference facilities, spring city views</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Palais Namaskar</strong> ⭐⭐⭐⭐⭐ - Family villas with private pools, spring outdoor activities, spacious</li>
                              <li><strong>Riad Kheirredine</strong> ⭐⭐⭐⭐ - Traditional family-friendly riad, spring courtyard perfect for kids</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Riad Yasmine</strong> ⭐⭐⭐ - Traditional medina riad at budget rates, spring rooftop terrace views</li>
                              <li><strong>Hotel Almas</strong> ⭐⭐⭐ - Gueliz budget location, spring outdoor pool, modern amenities</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chiang Mai Spring */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('spring-chiangmai')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">8. Chiang Mai, Thailand – Songkran Festival</h4>
                      <p className="text-sm text-gray-600">Perfect for: Temple explorers, festival lovers, culture enthusiasts, budget travelers</p>
                    </div>
                    {openDestination === 'spring-chiangmai' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'spring-chiangmai' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Chiang Mai's spring features the legendary Songkran Water Festival in mid-April, peak season weather, spring temple festivals, and Lanna culture celebrations with elephant sanctuaries and waterfalls at full flow.</p>
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Spring?</h5>
                        <p className="text-sm text-gray-700">Peak season weather (March-May), Songkran Water Festival (mid-April), spring temple festivals, Lanna culture celebrations, elephant sanctuaries at best, spring waterfalls full flow.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Old City/Night Bazaar)</p>
                            <ul className="space-y-1">
                              <li><strong>Anantara Chiang Mai Resort</strong> ⭐⭐⭐⭐⭐ - Riverside luxury, spring outdoor terraces, colonial elegance</li>
                              <li><strong>Le Meridien Chiang Mai</strong> ⭐⭐⭐⭐⭐ - Best city views for Songkran festival, spring rooftop pool</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Mövenpick Suriwongse Chiang Mai</strong> ⭐⭐⭐⭐ - Central business location, budget-friendly, spring conference facilities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Four Seasons Resort Chiang Mai</strong> ⭐⭐⭐⭐⭐ - Luxury nature resort, family rice paddy villas, spring elephant experiences</li>
                              <li><strong>Rainforest Chiangmai Hotel</strong> ⭐⭐⭐⭐ - Family-friendly, spring activities, near Old City for Songkran</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Bed Phrasingh - Adults Only</strong> ⭐⭐⭐⭐ - Old City for spring temple exploring, modern comfort</li>
                              <li><strong>Goldenbell Hotel</strong> ⭐⭐⭐⭐ - Walking distance to markets and food streets, spring rates, excellent value</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
        <section id="summer" className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl shadow-xl mb-6 overflow-hidden hover:shadow-2xl transition-all duration-300 scroll-mt-20">
          <button
            onClick={() => toggleSeason('summer')}
            className="w-full relative overflow-hidden bg-gradient-to-r from-orange-400/80 via-orange-500/80 to-yellow-500/80 backdrop-blur-sm text-white p-6 flex items-center justify-between hover:from-orange-500/90 hover:via-orange-600/90 hover:to-yellow-600/90 transition-all duration-300"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

            <div className="text-left relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 drop-shadow-lg" style={{letterSpacing: '-0.02em', lineHeight: '1.25'}}>Summer Destinations (June-August)</h2>
              <p className="text-sm opacity-90 drop-shadow">Beach season, festivals, midnight sun</p>
            </div>
            {openSeason === 'summer' ? <ChevronUp className="w-6 h-6 drop-shadow-lg" /> : <ChevronDown className="w-6 h-6 drop-shadow-lg" />}
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

              {/* Detailed Destination Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Summer Destination Details</h3>

                {/* Bali */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleDestination('summer-bali')}
                    className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition"
                  >
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">1. Bali, Indonesia – Dry Season Paradise</h4>
                      <p className="text-sm text-gray-600">Perfect for: Beach lovers, families, surfers, wellness seekers</p>
                    </div>
                    {openDestination === 'summer-bali' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'summer-bali' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Bali's summer dry season delivers perfect waves for surfing, postcard sunsets, lush green rice terraces, and beach weather without monsoon rains. This is when Bali shows its most beautiful face.
                      </p>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Summer?</h5>
                        <p className="text-sm text-gray-700">Dry season (June-August), perfect waves for surfing, postcard sunsets, lush green landscapes, rice terrace season, beach weather without monsoon rains.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Four Seasons Resort Bali at Jimbaran Bay</strong> ⭐⭐⭐⭐⭐ - Beachfront suites, direct beach access, Balinese spa, rooftop seafood dining</li>
                              <li><strong>The Mulia, Nusa Dua</strong> ⭐⭐⭐⭐⭐ - Bali's longest infinity pool (300m), Indian Ocean access, six pools for families</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Ubud/Seminyak)</p>
                            <ul className="space-y-1">
                              <li><strong>St. Regis Bali Resort</strong> ⭐⭐⭐⭐⭐ - 24/7 butlers, private lagoon, Nusa Dua beach, overwater villas</li>
                              <li><strong>Hanging Gardens of Bali</strong> ⭐⭐⭐⭐⭐ - Ubud jungle infinity pool, treetop views, summer escape from beach heat</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Ayana Resort and Spa Bali</strong> ⭐⭐⭐⭐⭐ - 222-acre estate, summer kids' activities, cascading pools, farm experiences</li>
                              <li><strong>InterContinental Bali Resort</strong> ⭐⭐⭐⭐⭐ - Jimbaran Bay pristine sands, spacious family rooms, summer kids' club</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>POP! Hotel Kuta Beach</strong> ⭐⭐⭐ - Kuta Beach location, summer surf access, modern functional rooms</li>
                              <li><strong>The Haven Suites Bali Berawa</strong> ⭐⭐⭐ - Canggu beach area, summer surf season, pool access</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Santorini Summer */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('summer-santorini')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">2. Santorini, Greece – Peak Summer</h4>
                      <p className="text-sm text-gray-600">Perfect for: Beach clubs, nightlife, sunset cruises, luxury seekers</p>
                    </div>
                    {openDestination === 'summer-santorini' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'summer-santorini' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Santorini in summer offers peak season sunshine, vibrant Aegean Sea, summer beach clubs, sunset cruises, and all restaurants and attractions fully open. This is the island at its most energetic.</p>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Summer?</h5>
                        <p className="text-sm text-gray-700">Peak season sunshine (25-30°C), vibrant Aegean Sea (26°C), summer beach clubs, sunset cruises, all restaurants and attractions fully open.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Nikki Beach Resort & Spa</strong> ⭐⭐⭐⭐⭐ - Summer beach parties, private pools, summer DJ beach sessions</li>
                              <li><strong>Andronis Luxury Suites</strong> ⭐⭐⭐⭐⭐ - Oia cliffside, summer sunset dining, private patio pools</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Fira/Oia)</p>
                            <ul className="space-y-1">
                              <li><strong>Pezoules of Oia</strong> ⭐⭐⭐⭐⭐ - Boutique luxury, summer homemade breakfast, comfort in heat</li>
                              <li><strong>Santorini Princess Spa Hotel</strong> ⭐⭐⭐⭐⭐ - Spacious family rooms, summer jacuzzi patios, family-welcoming spa</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Belvedere Hotel Santorini</strong> ⭐⭐⭐⭐ - Corner rooms with summer sea-facing balconies</li>
                              <li><strong>Athinaeos Suites</strong> ⭐⭐⭐⭐ - Caldera views, summer swim-up bar, honeymoon suite options</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dubrovnik */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('summer-dubrovnik')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">3. Dubrovnik, Croatia – Adriatic Summer</h4>
                      <p className="text-sm text-gray-600">Perfect for: Game of Thrones fans, beach lovers, culture seekers, island hoppers</p>
                    </div>
                    {openDestination === 'summer-dubrovnik' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'summer-dubrovnik' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Dubrovnik's summer brings perfect Adriatic Sea temperatures, vibrant nightlife, summer festivals, island hopping weather, and peak Game of Thrones tour season with summer beach clubs.</p>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Summer?</h5>
                        <p className="text-sm text-gray-700">Perfect Adriatic Sea temperatures (23-25°C), vibrant nightlife, summer festivals, island hopping weather, Game of Thrones tour season, summer beach clubs.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel Bellevue Dubrovnik</strong> ⭐⭐⭐⭐⭐ - Right on water with summer swimming, Adriatic views</li>
                              <li><strong>Rixos Premium Dubrovnik</strong> ⭐⭐⭐⭐⭐ - All-inclusive, private beach, summer pools, piano bar</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Old Town)</p>
                            <ul className="space-y-1">
                              <li><strong>Pucić Palace</strong> ⭐⭐⭐⭐⭐ - Old Town historic luxury, summer terrace dining in UNESCO site</li>
                              <li><strong>Hilton Imperial Dubrovnik</strong> ⭐⭐⭐⭐⭐ - 1913 historic villa near Old Town, summer rooftop bar</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Dubrovnik Palace Hotel</strong> ⭐⭐⭐⭐ - Business facilities, summer conference venues, Lapad Bay views</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Royal Hotel Neptun</strong> ⭐⭐⭐⭐ - Coastal location, spacious family rooms, summer sea-view balconies</li>
                              <li><strong>Valamar Lacroma Hotel</strong> ⭐⭐⭐⭐ - Private beach peninsula, multiple pools, summer kids' activities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel Ivka</strong> ⭐⭐⭐ - Budget summer rates in Lapad, near beach and bus</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Barcelona Summer */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('summer-barcelona')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">4. Barcelona, Spain – Beach Club Culture</h4>
                      <p className="text-sm text-gray-600">Perfect for: Beach culture, nightlife, rooftop bars, festival enthusiasts</p>
                    </div>
                    {openDestination === 'summer-barcelona' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'summer-barcelona' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Barcelona's summer offers peak beach club atmosphere, rooftop bars with DJ sets, waterfront pools, summer party scene, and all attractions open with vibrant festivals.</p>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Summer?</h5>
                        <p className="text-sm text-gray-700">Peak summer beach club atmosphere, rooftop bars with DJ sets, waterfront pools, summer party scene, all attractions open, festivals.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>W Barcelona</strong> ⭐⭐⭐⭐⭐ - Summer beach club atmosphere, rooftop DJ sets, waterfront pools</li>
                              <li><strong>Hotel Arts Barcelona</strong> ⭐⭐⭐⭐⭐ - Olympic Port luxury, summer terrace dining, beach access</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Majestic Hotel & Spa Barcelona</strong> ⭐⭐⭐⭐⭐ - Passeig de Gràcia luxury, summer rooftop pool and bar</li>
                              <li><strong>The Barcelona EDITION</strong> ⭐⭐⭐⭐⭐ - Summer rooftop with panoramic views, boutique luxury</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hilton Barcelona</strong> ⭐⭐⭐⭐⭐ - Diagonal business district, summer conference facilities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel & Spa Villa Olimpica Suites</strong> ⭐⭐⭐⭐ - Summer beach perfect for families, Olympic Port kids' activities</li>
                              <li><strong>H10 Port Vell</strong> ⭐⭐⭐⭐ - Summer beach with family facilities, relaxing atmosphere</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel Rialto</strong> ⭐⭐⭐⭐ - 10-min walk from beach, summer budget rates</li>
                              <li><strong>Travelodge Barcelona Poblenou</strong> ⭐⭐⭐ - Close to summer beach activities, budget-friendly</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tokyo Summer */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('summer-tokyo')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">5. Tokyo, Japan – Summer Festivals</h4>
                      <p className="text-sm text-gray-600">Perfect for: Festival lovers, culture enthusiasts, foodies, nightlife seekers</p>
                    </div>
                    {openDestination === 'summer-tokyo' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'summer-tokyo' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Tokyo's summer features festivals like Sumida River Fireworks and Bon Odori, warm weather perfect for exploring, summer matsuri celebrations, Mount Fuji climbing season, and vibrant nightlife.</p>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Summer?</h5>
                        <p className="text-sm text-gray-700">Summer festivals (Sumida River Fireworks, Bon Odori), warm weather (25-32°C), summer matsuri celebrations, Mount Fuji climbing season, vibrant nightlife.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Park Hyatt Tokyo</strong> ⭐⭐⭐⭐⭐ - Shinjuku luxury, summer city views, Lost in Translation fame</li>
                              <li><strong>The Tokyo Station Hotel</strong> ⭐⭐⭐⭐⭐ - Historic 1915 station, family-friendly, central to summer festivals</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Keio Plaza Hotel Tokyo</strong> ⭐⭐⭐⭐⭐ - Shinjuku business district, 35th-floor rooms, summer conference facilities</li>
                              <li><strong>Hotel Groove Shinjuku</strong> ⭐⭐⭐⭐⭐ - Parkroyal business hotel, summer meeting spaces</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Shiba Park Hotel</strong> ⭐⭐⭐⭐ - Family rooms near Tokyo Tower, 1,500+ books for kids</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Tokyo Ueno Touganeya Hotel</strong> ⭐⭐⭐⭐ - Steps from Ueno Station, excellent family rooms, summer zoo access</li>
                              <li><strong>Remm Hibiya</strong> ⭐⭐⭐ - In-room massage chairs, Ginza location, budget to moderate rates</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Cyprus */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('summer-cyprus')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">6. Cyprus – Mediterranean Summer</h4>
                      <p className="text-sm text-gray-600">Perfect for: Beach holidays, resorts, water sports, wine tasting</p>
                    </div>
                    {openDestination === 'summer-cyprus' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'summer-cyprus' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Cyprus offers perfect beach season with crystal-clear Mediterranean waters, olive-grove villages, summer wine tasting, ancient ruins exploration, and vibrant summer beach clubs.</p>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Summer?</h5>
                        <p className="text-sm text-gray-700">Perfect beach season (28-33°C), crystal-clear Mediterranean waters, olive-grove villages, summer wine tasting, ancient ruins, summer beach clubs.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Amara Hotel Limassol</strong> ⭐⭐⭐⭐⭐ - Summer luxury beachfront, private beach, infinity pool</li>
                              <li><strong>Four Seasons Hotel Cyprus</strong> ⭐⭐⭐⭐⭐ - Summer beach resort with kids' club, multiple pools perfect for heat</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>The Almond Business Suites</strong> ⭐⭐⭐⭐ - Business location, summer corporate stays, near marina</li>
                              <li><strong>Londa Beach Hotel</strong> ⭐⭐⭐⭐⭐ - Business-leisure beachfront, summer conference facilities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Olympic Lagoon Resort Paphos</strong> ⭐⭐⭐⭐ - Summer all-inclusive family resort, lagoon pools, waterslides</li>
                              <li><strong>Adams Beach Hotel</strong> ⭐⭐⭐⭐ - Ayia Napa family beachfront, summer kids' activities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Kapetanios Limassol Hotel</strong> ⭐⭐⭐ - City beach budget option, summer beach access</li>
                              <li><strong>Pefkos City Hotel</strong> ⭐⭐⭐ - Paphos budget summer base, near attractions and beach</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Iceland */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('summer-iceland')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">7. Iceland – Midnight Sun</h4>
                      <p className="text-sm text-gray-600">Perfect for: Midnight sun, hiking, waterfalls, whale watching, puffins</p>
                    </div>
                    {openDestination === 'summer-iceland' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'summer-iceland' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Iceland's summer brings the midnight sun, warmest weather, summer highland roads opening, puffin season, whale watching peak, waterfall season at full flow, and incredible summer hiking.</p>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Summer?</h5>
                        <p className="text-sm text-gray-700">Midnight sun (June-July), warmest weather (10-15°C), summer highland roads open, puffin season, whale watching peak, waterfall season full flow, summer hiking.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Reykjavik)</p>
                            <ul className="space-y-1">
                              <li><strong>The Reykjavik EDITION</strong> ⭐⭐⭐⭐⭐ - Summer downtown luxury with midnight sun views, modern Icelandic design</li>
                              <li><strong>Hotel Borg by Keahotels</strong> ⭐⭐⭐⭐⭐ - Historic 1930s Art Deco hotel, summer city center, midnight sun terraces</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hilton Reykjavik Nordica</strong> ⭐⭐⭐⭐ - Summer business district, conference facilities, summer corporate events</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Fosshotel Reykjavik</strong> ⭐⭐⭐⭐ - Family rooms with summer Golden Circle tour access</li>
                              <li><strong>Icelandair Hotel Reykjavik Marina</strong> ⭐⭐⭐⭐ - Summer harbor location for whale watching tours</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>CenterHotel Plaza</strong> ⭐⭐⭐ - Summer budget downtown, midnight sun viewing</li>
                              <li><strong>Kex Hostel</strong> ⭐⭐⭐ - Social hostel-hotel, summer atmosphere, budget-friendly</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Maldives */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('summer-maldives')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">8. Maldives – Diving Season</h4>
                      <p className="text-sm text-gray-600">Perfect for: Overwater villas, diving, snorkeling, luxury resorts, marine life</p>
                    </div>
                    {openDestination === 'summer-maldives' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'summer-maldives' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Maldives summer dry season offers crystal-clear visibility for diving, manta ray season, whale shark sightings, summer luxury resort season, and perfect conditions for water sports.</p>
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Summer?</h5>
                        <p className="text-sm text-gray-700">Dry season (June-August), crystal-clear visibility for diving, manta ray season, whale shark sightings, summer luxury resort season, perfect for water sports.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels (Resort Islands)</p>
                            <ul className="space-y-1">
                              <li><strong>Gili Lankanfushi</strong> ⭐⭐⭐⭐⭐ - Summer overwater villas, no-shoes luxury, summer diving/snorkeling</li>
                              <li><strong>Soneva Fushi</strong> ⭐⭐⭐⭐⭐ - Summer barefoot luxury, massive villas, outdoor cinema, summer marine biology experiences</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>You & Me by Cocoon Maldives</strong> ⭐⭐⭐⭐⭐ - Summer all-inclusive family resort, kids' club, snorkeling</li>
                              <li><strong>Kurumba Maldives</strong> ⭐⭐⭐⭐⭐ - Summer family beachfront near Male, multiple pools, kids' activities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Adaaran Select Hudhuranfushi</strong> ⭐⭐⭐⭐ - All-inclusive summer budget option, beach bungalows</li>
                              <li><strong>Embudu Village</strong> ⭐⭐⭐ - Summer budget island resort, beach access, affordable Maldivian experience</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
        <section id="fall" className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl shadow-xl mb-6 overflow-hidden hover:shadow-2xl transition-all duration-300 scroll-mt-20">
          <button
            onClick={() => toggleSeason('fall')}
            className="w-full relative overflow-hidden bg-gradient-to-r from-amber-400/80 via-amber-500/80 to-orange-500/80 backdrop-blur-sm text-white p-6 flex items-center justify-between hover:from-amber-500/90 hover:via-amber-600/90 hover:to-orange-600/90 transition-all duration-300"
          >
            {/* Glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

            <div className="text-left relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 drop-shadow-lg" style={{letterSpacing: '-0.02em', lineHeight: '1.25'}}>Fall Destinations (September-November)</h2>
              <p className="text-sm opacity-90 drop-shadow">Foliage, wine harvest, comfortable weather</p>
            </div>
            {openSeason === 'fall' ? <ChevronUp className="w-6 h-6 drop-shadow-lg" /> : <ChevronDown className="w-6 h-6 drop-shadow-lg" />}
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

              {/* Detailed Destination Cards */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Fall Destination Details</h3>

                {/* New England */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleDestination('fall-newengland')}
                    className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition"
                  >
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">1. New England, USA – Fall Foliage</h4>
                      <p className="text-sm text-gray-600">Perfect for: Foliage lovers, hikers, harvest festivals, scenic drives</p>
                    </div>
                    {openDestination === 'fall-newengland' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'fall-newengland' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        New England's fall is legendary for world-famous foliage with hills turning red, orange, and yellow. Peak mid-October brings scenic drives like Kancamagus Highway, apple and pumpkin harvest festivals, and crisp autumn air.
                      </p>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Fall?</h5>
                        <p className="text-sm text-gray-700">World-famous fall foliage (peak mid-October), hills turn red/orange/yellow, scenic drives like Kancamagus Highway, apple and pumpkin harvest festivals, crisp autumn air (10-20°C).</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Boston/Burlington)</p>
                            <ul className="space-y-1">
                              <li><strong>Four Seasons Hotel Boston</strong> ⭐⭐⭐⭐⭐ - Fall city luxury on Public Garden, autumn foliage views, harvest dining</li>
                              <li><strong>Hotel Vermont, Burlington</strong> ⭐⭐⭐⭐⭐ - Fall foliage headquarters, autumn craft beer, farm-to-table harvest dining</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Boston Harbor Hotel</strong> ⭐⭐⭐⭐⭐ - Waterfront business, fall conference facilities, autumn corporate retreats</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Ocean House, Rhode Island</strong> ⭐⭐⭐⭐⭐ - Fall coastal luxury, autumn beach walks, cozy interiors</li>
                              <li><strong>Trapp Family Lodge, Vermont</strong> ⭐⭐⭐⭐ - Sound of Music family resort, fall hiking trails, autumn activities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hilton Garden Inn Burlington</strong> ⭐⭐⭐ - Budget foliage viewing base, fall season rates</li>
                              <li><strong>Hampton Inn Portland Downtown</strong> ⭐⭐⭐ - Maine fall budget base, autumn coastal exploration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tuscany */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('fall-tuscany')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">2. Tuscany, Italy – Wine Harvest</h4>
                      <p className="text-sm text-gray-600">Perfect for: Wine lovers, culture seekers, food enthusiasts, photographers</p>
                    </div>
                    {openDestination === 'fall-tuscany' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'fall-tuscany' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Tuscany's fall harvest season brings wine and olive harvesting, golden vineyard hills in September-October, fewer crowds than summer, fall harvest festivals, pleasant temperatures, and truffle season beginning.</p>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Fall?</h5>
                        <p className="text-sm text-gray-700">Harvest season (wine and olive), golden vineyard hills (September-October), fewer crowds than summer, fall harvest festivals, pleasant temperatures (15-25°C), truffle season begins.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Florence/Siena)</p>
                            <ul className="space-y-1">
                              <li><strong>Four Seasons Hotel Florence</strong> ⭐⭐⭐⭐⭐ - Renaissance palace, fall garden courtyards, harvest dining at Il Palagio</li>
                              <li><strong>Hotel Brunelleschi</strong> ⭐⭐⭐⭐⭐ - Tower museum hotel, fall terrace views, autumn Florence exploration</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>The Westin Excelsior Florence</strong> ⭐⭐⭐⭐⭐ - Arno River business, fall conference facilities, autumn wine events</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Villa La Massa</strong> ⭐⭐⭐⭐⭐ - Arno riverside family villa resort, fall outdoor activities, harvest experiences</li>
                              <li><strong>Borgo San Felice</strong> ⭐⭐⭐⭐ - Chianti family resort, fall vineyard walks, autumn kids' activities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel Davanzati</strong> ⭐⭐⭐ - Florence centro storico budget option, fall sightseeing base</li>
                              <li><strong>Hotel Minerva</strong> ⭐⭐⭐ - Rooftop terrace with fall foliage views, budget-friendly September-November</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Kyoto Fall */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('fall-kyoto')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">3. Kyoto, Japan – Autumn Illuminations</h4>
                      <p className="text-sm text-gray-600">Perfect for: Temple lovers, foliage seekers, photographers, culture enthusiasts</p>
                    </div>
                    {openDestination === 'fall-kyoto' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'fall-kyoto' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Kyoto's fall brings spectacular autumn foliage peaking in November, cool comfortable temperatures, fall temple illuminations, fewer crowds than spring, harvest festivals, and perfect temple walking weather.</p>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Fall?</h5>
                        <p className="text-sm text-gray-700">Spectacular autumn foliage (November peak), cool comfortable temperatures (12-20°C), fall temple illuminations, fewer crowds than spring, harvest festivals, perfect temple walking.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Ritz-Carlton Kyoto</strong> ⭐⭐⭐⭐⭐ - Kamogawa River, fall foliage views, autumn cultural experiences, luxury onsen</li>
                              <li><strong>Four Seasons Hotel Kyoto</strong> ⭐⭐⭐⭐⭐ - Autumn foliage packages, fall temple tour access, luxury gardens</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>The Millennials Kyoto</strong> ⭐⭐⭐ - Kawaramachi business district, fall foliage riverside walks, coworking spaces</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>MACHIYA RESIDENCE INN</strong> ⭐⭐⭐⭐ - Traditional townhouses, fall cultural immersion, family-sized</li>
                              <li><strong>Hotel Intergate Kyoto Shijo Shinmachi</strong> ⭐⭐⭐ - Budget downtown, fall comfortable rooms, free breakfast</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Piece Hostel Sanjo</strong> ⭐⭐⭐ - Budget fall foliage base, modern hostel-hotel, autumn temple access</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Patagonia */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('fall-patagonia')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">4. Patagonia, Chile/Argentina – Southern Spring</h4>
                      <p className="text-sm text-gray-600">Perfect for: Hikers, glacier lovers, wildlife seekers, wilderness adventurers</p>
                    </div>
                    {openDestination === 'fall-patagonia' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'fall-patagonia' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Patagonia's southern hemisphere spring (September-November) brings wildflowers blooming, cooler hiking temperatures, fewer crowds than summer, penguin season beginning, baby animal season, and glaciers at their bluest.</p>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Fall?</h5>
                        <p className="text-sm text-gray-700">Southern hemisphere spring (September-November), wildflowers blooming, cooler hiking temperatures (8-15°C), fewer crowds than summer, penguin season begins, baby animal season, glaciers at bluest.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (El Calafate/Puerto Natales)</p>
                            <ul className="space-y-1">
                              <li><strong>The Singular Patagonia</strong> ⭐⭐⭐⭐⭐ - Puerto Natales luxury, spring fjord views, historic building conversion</li>
                              <li><strong>Los Sauces Hotel, El Calafate</strong> ⭐⭐⭐⭐ - Town center for spring glacier tours, comfortable, autumn-spring base</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Explora Patagonia</strong> ⭐⭐⭐⭐⭐ - Torres del Paine all-inclusive family adventures, guided spring hikes</li>
                              <li><strong>Hotel Las Torres</strong> ⭐⭐⭐⭐ - Torres del Paine family base, spring hiking, guanaco viewing</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>America del Sur Hostel</strong> ⭐⭐⭐ - El Calafate budget spring base, hostel-hotel with private rooms</li>
                              <li><strong>Hosteria Senderos</strong> ⭐⭐⭐ - Puerto Natales budget option, spring Patagonia gateway</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Morocco Fall */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('fall-morocco')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">5. Morocco – Comfortable Harvest Season</h4>
                      <p className="text-sm text-gray-600">Perfect for: Culture seekers, garden lovers, souk explorers, food enthusiasts</p>
                    </div>
                    {openDestination === 'fall-morocco' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'fall-morocco' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Morocco in fall offers fewer summer crowds, warm comfortable temperatures, pleasant fall weather for souk exploring, harvest season celebrations, and coastal activities still enjoyable.</p>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Fall?</h5>
                        <p className="text-sm text-gray-700">Fewer summer crowds, warm Adriatic Sea still swimmable (September 23°C), pleasant fall temperatures (15-25°C), autumn festivals, lower hotel rates, comfortable Old Town exploring.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels (Essaouira)</p>
                            <ul className="space-y-1">
                              <li><strong>Le Medina Essaouira Hotel Thalassa</strong> ⭐⭐⭐⭐⭐ - Atlantic beachfront, fall windsurfing season, coastal walks</li>
                              <li><strong>Sofitel Essaouira Mogador Golf & Spa</strong> ⭐⭐⭐⭐⭐ - Fall beach resort, autumn golf season, spa relaxation</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Marrakech)</p>
                            <ul className="space-y-1">
                              <li><strong>Royal Mansour Marrakech</strong> ⭐⭐⭐⭐⭐ - Fall riads, autumn garden courtyards, harvest dining</li>
                              <li><strong>La Mamounia</strong> ⭐⭐⭐⭐⭐ - Historic autumn elegance, fall gardens, comfortable temperatures</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Kenzi Tower Hotel</strong> ⭐⭐⭐⭐ - Gueliz business district, fall conference season, autumn corporate events</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Palais Namaskar</strong> ⭐⭐⭐⭐⭐ - Family villas, fall private pools still warm, autumn activities</li>
                              <li><strong>Kasbah Tamadot, Atlas Mountains</strong> ⭐⭐⭐⭐⭐ - Richard Branson's fall mountain retreat, family-friendly autumn activities</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Riad Yasmine</strong> ⭐⭐⭐ - Medina riad, fall rooftop terrace, authentic, budget</li>
                              <li><strong>Hotel Ali</strong> ⭐⭐⭐ - Budget fall base near Jemaa el-Fnaa, autumn souk exploration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dubrovnik Fall */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('fall-dubrovnik')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">6. Dubrovnik, Croatia – Autumn Adriatic</h4>
                      <p className="text-sm text-gray-600">Perfect for: Beach lovers, culture seekers, Old Town explorers, budget travelers</p>
                    </div>
                    {openDestination === 'fall-dubrovnik' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'fall-dubrovnik' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Dubrovnik's fall brings September warmth with sea still at 23°C, autumn Adriatic charm, fewer crowds than summer, comfortable Old Town exploring, and significantly lower hotel rates.</p>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Fall?</h5>
                        <p className="text-sm text-gray-700">September warmth (sea still 23°C), autumn Adriatic charm, fewer crowds than summer, comfortable Old Town exploring, lower hotel rates, fall festivals.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Beachfront Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel Bellevue Dubrovnik</strong> ⭐⭐⭐⭐⭐ - September waterfront perfect for swimming, autumn Adriatic views</li>
                              <li><strong>Rixos Premium Dubrovnik</strong> ⭐⭐⭐⭐⭐ - Fall all-inclusive, autumn private beach, September sea still warm</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Old Town)</p>
                            <ul className="space-y-1">
                              <li><strong>Pucić Palace</strong> ⭐⭐⭐⭐⭐ - Fall Old Town luxury without summer crowds, autumn terrace dining</li>
                              <li><strong>Hilton Imperial Dubrovnik</strong> ⭐⭐⭐⭐⭐ - Fall historic villa elegance, autumn rooftop bar, September warmth</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Dubrovnik Palace Hotel</strong> ⭐⭐⭐⭐ - Fall conference facilities, autumn corporate events, Lapad Bay views</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Royal Hotel Neptun</strong> ⭐⭐⭐⭐ - September sea still warm for families, autumn beach less crowded</li>
                              <li><strong>President Hotel, Valamar Collection</strong> ⭐⭐⭐⭐ - Fall location with Old Town access, September beach enjoyable</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel Ivka</strong> ⭐⭐⭐ - Fall budget rates significantly lower, Lapad location</li>
                              <li><strong>Hotel Royal Ariston</strong> ⭐⭐⭐⭐ - September rocky beach still perfect, autumn seaside walking</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Egypt */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('fall-egypt')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">7. Egypt – Season Begins</h4>
                      <p className="text-sm text-gray-600">Perfect for: Ancient site explorers, Nile cruisers, history buffs, photographers</p>
                    </div>
                    {openDestination === 'fall-egypt' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'fall-egypt' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Egypt's fall brings pleasant November temperatures after summer heat, comfortable temple exploring, Nile cruise season beginning in November, fewer crowds, and autumn light perfect for Valley of Kings photography.</p>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Fall?</h5>
                        <p className="text-sm text-gray-700">Pleasant November temperatures (20-30°C) after summer heat, comfortable temple exploring, Nile cruise season begins (November), fewer crowds, autumn light perfect for Valley of Kings, cooler desert trips.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels (Luxor)</p>
                            <ul className="space-y-1">
                              <li><strong>Sofitel Winter Palace Luxor</strong> ⭐⭐⭐⭐⭐ - Nile-side Victorian elegance, fall terrace, autumn temple tour base</li>
                              <li><strong>Pavillon Winter Luxor</strong> ⭐⭐⭐⭐⭐ - Sister property, fall Nile views, autumn comfortable exploring</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Steigenberger Nile Palace Luxor</strong> ⭐⭐⭐⭐ - Fall family-friendly Nile resort, autumn pool perfect, November temple tours</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Maritim Jolie Ville Kings Island Luxor</strong> ⭐⭐⭐⭐ - Fall island resort for families, autumn Nile activities, spacious grounds</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Nefertiti Hotel Luxor</strong> ⭐⭐⭐ - Budget fall temple base, rooftop with autumn Nile views</li>
                              <li><strong>Happy Land Hotel</strong> ⭐⭐⭐ - Budget November comfortable stay, near temples</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Budapest */}
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => toggleDestination('fall-budapest')} className="w-full bg-gray-50 p-4 flex items-center justify-between hover:bg-gray-100 transition">
                    <div className="text-left">
                      <h4 className="font-bold text-gray-800">8. Budapest, Hungary – Danube Foliage</h4>
                      <p className="text-sm text-gray-600">Perfect for: Thermal bath lovers, foliage seekers, café culture, architecture enthusiasts</p>
                    </div>
                    {openDestination === 'fall-budapest' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openDestination === 'fall-budapest' && (
                    <div className="p-6 bg-white space-y-4">
                      <p className="text-gray-700 leading-relaxed">Budapest's fall brings autumn foliage along the Danube in September-October, cooler thermal bath weather that's perfect at 15-20°C, fall café culture thriving, fewer summer crowds, and comfortable sightseeing conditions.</p>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Why Fall?</h5>
                        <p className="text-sm text-gray-700">Autumn foliage along Danube (September-October), cooler thermal bath weather perfect (15-20°C), fall café culture thrives, fewer summer crowds, autumn festivals, comfortable sightseeing.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Where to Stay:</h5>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Downtown Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Four Seasons Hotel Gresham Palace</strong> ⭐⭐⭐⭐⭐ - Fall Art Nouveau palace on Danube, autumn foliage from Chain Bridge</li>
                              <li><strong>Aria Hotel Budapest</strong> ⭐⭐⭐⭐⭐ - Music-themed fall luxury, autumn rooftop with city views</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Business Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Kempinski Hotel Corvinus Budapest</strong> ⭐⭐⭐⭐⭐ - Business district, fall conference facilities, autumn corporate events</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Family Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Corinthia Hotel Budapest</strong> ⭐⭐⭐⭐⭐ - Fall grand hotel with family suites, autumn spa perfect for families</li>
                              <li><strong>Hilton Budapest</strong> ⭐⭐⭐⭐ - Castle District, fall foliage views, autumn thermal baths</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 mb-1">Budget Hotels</p>
                            <ul className="space-y-1">
                              <li><strong>Hotel Moments Budapest</strong> ⭐⭐⭐ - Budget fall downtown base, autumn comfortable rates</li>
                              <li><strong>Roombach Hotel Budapest Center</strong> ⭐⭐⭐ - September-November budget option, central, fall sightseeing access</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
        <section id="faqs" className="bg-white rounded-2xl shadow-md p-8 mb-8 scroll-mt-20">
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
        <div className="mt-12">
          <CreatorInsights page="seasons" />
        <PillarCTA guideName="seasons" />
        </div>

        {/* Related Guides */}
        <RelatedGuides currentPage="seasons" />

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
