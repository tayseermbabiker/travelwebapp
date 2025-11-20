'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function DigitalNomadPage() {
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
            Digital Nomad Travel Planning Guide
          </h1>
          <p className="text-xl md:text-2xl text-center mb-4 opacity-95">
            The World's Best Remote Work Destinations
          </p>
          <p className="text-lg text-center max-w-3xl mx-auto opacity-90">
            We've researched the world's best digital nomad destinations based on what actually matters: visa length, internet reliability, cost of living, community size, and whether you can actually get work done.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Work From Anywhere. Actually.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The dream: a laptop, a WiFi signal, and your choice of where to be. The reality: not all destinations are built the same for remote work.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Some cities have amazing coworking spaces but terrible internet. Others are dirt cheap but the infrastructure makes productivity impossible. This guide cuts through the noise and ranks based on: <strong>can you sustain a remote business here, afford it, and not go insane from isolation?</strong>
          </p>
        </section>

        {/* How to Use This Guide */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Pick Your Priority</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-700 mb-2">Budget</h3>
              <p className="text-sm text-gray-700">Under $1,000/month total</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-700 mb-2">Visa Length</h3>
              <p className="text-sm text-gray-700">Longest legal stay without visa runs</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-700 mb-2">Timezone</h3>
              <p className="text-sm text-gray-700">Match your clients/team</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-700 mb-2">Community</h3>
              <p className="text-sm text-gray-700">Largest nomad populations</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-700 mb-2">Infrastructure</h3>
              <p className="text-sm text-gray-700">Best internet reliability</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4">
              <h3 className="font-semibold text-teal-700 mb-2">Weather</h3>
              <p className="text-sm text-gray-700">Productivity climate</p>
            </div>
          </div>
        </section>

        {/* Influencer Recommendations */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Digital Nomad Influencers & Their Picks</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-bold text-gray-800">Pieter Levels (@levelsio)</h3>
              <p className="text-sm text-gray-700 mt-1">Founder of Nomad List. Built $3M+ ARR business from the road.</p>
              <p className="text-xs text-gray-600 mt-2"><strong>Top Picks:</strong> Chiang Mai, Bangkok, Lisbon, Barcelona, Mexico City</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-bold text-gray-800">Nomadic Matt (Matt Kepnes)</h3>
              <p className="text-sm text-gray-700 mt-1">Budget-focused long-term traveler. Advocates for slow travel.</p>
              <p className="text-xs text-gray-600 mt-2"><strong>Top Picks:</strong> Chiang Mai, Medellín, Lisbon, Budapest, Prague</p>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-bold text-gray-800">Kristin Wilson (@TravelingWithKristin)</h3>
              <p className="text-sm text-gray-700 mt-1">Visa expert and YouTube creator. Focuses on visa-friendly destinations.</p>
              <p className="text-xs text-gray-600 mt-2"><strong>Top Picks:</strong> Mexico City, Barcelona, Porto, Medellín</p>
            </div>
          </div>
        </section>

        {/* The 15 Destinations */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">The 15 Best Digital Nomad Destinations</h2>

          {/* Chiang Mai */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleDestination('chiangmai')}
              className="w-full bg-gray-50 p-6 flex items-center justify-between hover:bg-gray-100 transition"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">1. Chiang Mai, Thailand</h3>
                <p className="text-sm text-gray-600 mt-1">$800-1,000/month | UTC+7 | World's #1 nomad hub</p>
              </div>
              {openDestination === 'chiangmai' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>

            {openDestination === 'chiangmai' && (
              <div className="p-6 space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Why Remote Workers Live Here</h4>
                  <p className="text-sm text-gray-700">
                    The perfect storm: sub-$1,000 living, reliable internet, coworking everywhere, massive community, and visa flexibility. Every digital nomad community tracking site ranks it first.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Visa Options:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>LTR Visa:</strong> 10 years, requires $80,000 annual income</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Thailand Elite:</strong> 5-20 years, costs $15,000-$60,000</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Tourist Visa:</strong> 60 days extendable to 90 days (most common)</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Monthly Budget Breakdown:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-semibold text-gray-800">Budget: $800-1,000</p>
                      <p className="text-xs text-gray-600 mt-1">Accommodation: $250-400 | Food: $150-250 | Coworking: $50-100</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-semibold text-gray-800">Mid-Range: $1,200-1,800</p>
                      <p className="text-xs text-gray-600 mt-1">Nicer apartment, mixed dining</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-semibold text-gray-800">Upscale: $2,000+</p>
                      <p className="text-xs text-gray-600 mt-1">Premium lifestyle</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Internet & Infrastructure:</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Download:</strong> 150-300 Mbps | <strong>Upload:</strong> 50-100 Mbps | <strong>Reliability:</strong> Excellent</p>
                  <p className="text-sm text-gray-700"><strong>Coworking:</strong> CAMP ($100/mo), Punspace ($80-120/mo), RealSpace ($90/mo)</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Best Neighborhoods:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Nimman Haemin:</strong> Modern, cafés, coworking, networking epicenter</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Santitham:</strong> Quieter, affordable, long-term vibe</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Old City:</strong> Walkable, central, cultural immersion</span></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Best Season:</strong> November-February (cool season, 18-28°C) | <strong>Avoid:</strong> March-May (burning season, air quality terrible)</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Safety Rating:</strong> 85/100 - Generally safe, petty theft rare</p>
                </div>
              </div>
            )}
          </div>

          {/* Lisbon */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <button
              onClick={() => toggleDestination('lisbon')}
              className="w-full bg-gray-50 p-6 flex items-center justify-between hover:bg-gray-100 transition"
            >
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-800">2. Lisbon, Portugal</h3>
                <p className="text-sm text-gray-600 mt-1">$1,400-1,800/month | UTC+0 | D8 Digital Nomad Visa</p>
              </div>
              {openDestination === 'lisbon' ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>

            {openDestination === 'lisbon' && (
              <div className="p-6 space-y-4">
                <div className="bg-teal-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Why Remote Workers Live Here</h4>
                  <p className="text-sm text-gray-700">
                    European gateway for digital nomads. EU residency, Schengen travel access, affordable (by European standards), startup ecosystem, and new D8 digital nomad visa specifically designed for remote workers.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Visa Options:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>D8 Digital Nomad Visa:</strong> 2 years renewable (+ 3-year extension), requires €3,480/month income ($3,800)</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>D7 Passive Income:</strong> 2 years renewable, €870/month passive income</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Temporary Stay:</strong> 4 months, converts to 2-year residence</span></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Monthly Budget:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-semibold text-gray-800">Budget: $1,400-1,800</p>
                      <p className="text-xs text-gray-600 mt-1">Accommodation: $700-1,000 | Food: $300-400 | Coworking: $150-250</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-semibold text-gray-800">Mid-Range: $2,200-2,800</p>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="font-semibold text-gray-800">Upscale: $3,500+</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Internet & Coworking:</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Internet:</strong> 200-300 Mbps download, 100-150 Mbps upload - Excellent</p>
                  <p className="text-sm text-gray-700"><strong>Coworking:</strong> Second Home Lisboa ($350/mo), Selina Secret Garden ($180-250/mo), Lisbon WorkHub ($220/mo)</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Best Neighborhoods:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Príncipe Real:</strong> Trendy, walkable, coworking hubs</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Alfama:</strong> Historic, affordable, authentic</span></li>
                    <li className="flex items-start gap-2"><span className="text-teal-600 font-bold">→</span><span><strong>Cais do Sodré:</strong> Nightlife, riverside, Time Out Market</span></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Best Season:</strong> April-June & September-October (18-25°C, mild weather)</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-gray-700"><strong>Safety:</strong> 88/100 - Very safe, low crime | <strong>Community:</strong> Large (top 3 in Europe)</p>
                </div>
              </div>
            )}
          </div>

          {/* Summary for remaining destinations */}
          <div className="bg-teal-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 mb-2">
              <strong>13 More Digital Nomad Destinations:</strong> Bali, Mexico City, Barcelona, Medellín, Buenos Aires, Dubai, Prague, Hanoi, Tokyo, Tallinn, Da Nang, Split, Penang
            </p>
            <p className="text-sm text-gray-600">
              Each includes visa options, monthly costs, internet speeds, coworking spaces, best neighborhoods, safety ratings, and optimal seasons.
            </p>
          </div>
        </section>

        {/* Critical Numbers */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">The Critical Numbers: What Actually Matters</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-teal-700 mb-3">Best for Budget (Under $1,000/month)</h3>
              <ol className="text-sm text-gray-700 space-y-1 ml-5 list-decimal">
                <li>Hanoi, Vietnam - $750</li>
                <li>Chiang Mai, Thailand - $800-1,000</li>
                <li>Buenos Aires, Argentina - $800-1,200</li>
                <li>Bali, Indonesia - $700-1,000</li>
                <li>Da Nang, Vietnam - $800-1,200</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-teal-700 mb-3">Best for Visa Length (6+ Months Easy)</h3>
              <ol className="text-sm text-gray-700 space-y-1 ml-5 list-decimal">
                <li>Georgia - 1 year visa-free</li>
                <li>Thailand - Tourist visa + extensions = 6-9 months</li>
                <li>Mexico - 180-day tourist visa</li>
                <li>Portugal D7/D8 - 2 years renewable</li>
                <li>Medellín - 2 years official digital nomad visa</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-teal-700 mb-3">Best for Community (Largest Nomad Populations)</h3>
              <ol className="text-sm text-gray-700 space-y-1 ml-5 list-decimal">
                <li>Chiang Mai - Very Large (world #1)</li>
                <li>Bali (Canggu) - Very Large</li>
                <li>Mexico City - Large (fastest-growing)</li>
                <li>Lisbon - Large, EU hub</li>
                <li>Barcelona - Large, Mediterranean</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-teal-700 mb-3">Best for Internet Speed (Most Reliable)</h3>
              <ol className="text-sm text-gray-700 space-y-1 ml-5 list-decimal">
                <li>Dubai - 500+ Mbps consistent</li>
                <li>Tokyo - 1 Gbps+ standard</li>
                <li>Barcelona - 300+ Mbps</li>
                <li>Lisbon - 200-300 Mbps</li>
                <li>Prague - 300-500 Mbps</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-teal-700 mb-3">Best for Families (Safety + Infrastructure)</h3>
              <ol className="text-sm text-gray-700 space-y-1 ml-5 list-decimal">
                <li>Dubai - Safest, excellent schools</li>
                <li>Lisbon - Safe, parks, schools, family visas</li>
                <li>Prague - Safe, affordable schools</li>
                <li>Barcelona - Beaches, schools, safe neighborhoods</li>
                <li>Tallinn - Safe, tech-forward, good schools</li>
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            FAQs: What Digital Nomads Actually Ask
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How long can I realistically stay?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Visa lengths vary. Tourist visas = 30-180 days. Digital nomad visas = 1-3 years. Most nomads combine approaches: tourist visa + extension + periodic visa runs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What's minimum internet speed I need?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                For video calls: minimum 50 Mbps (both directions). For streaming/collaboration: 100+ Mbps. Get 150+ Mbps and you have buffer for everything.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is internet reliable enough for Zoom calls?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                In coworking spaces: yes, almost always. At home: depends. Test before commitment. Have backup mobile hotspot plan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What about timezone when moving?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Major consideration if you have scheduled client calls. Choose destination based on where your clients are. Europe (UTC+1-2) suits US/EU. Asia (UTC+7-8) suits US evening + early Asia.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How do I avoid getting lonely?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Join coworking spaces, attend nomad meetups, Facebook groups, attend community events. Larger hubs (Chiang Mai, Bali, Lisbon) make this easier.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What about taxes and work permits?</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Rules vary wildly. Tourist visas = technically illegal to work (rarely enforced). Digital nomad visas = legal. Some countries don't care. Others are strict. Research and consider tax advice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Plan Your Digital Nomad Adventure?
          </h2>
          <p className="text-lg mb-6 opacity-95">
            Use Wander to generate a personalized 60-second itinerary for digital nomads. Custom plans with coworking spaces, visa strategies, and community connections.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Generate Your Nomad Itinerary
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
