'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Shield, Users, DollarSign, Heart, Plane } from 'lucide-react';
import Link from 'next/link';

export default function SoloFemaleTravelPage() {
  const [openDestination, setOpenDestination] = useState<string | null>(null);

  const toggleDestination = (id: string) => {
    setOpenDestination(openDestination === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Solo Female Travel Planning Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Destinations Where Women Thrive Alone
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Travel Solo. Travel Safe. Travel Empowered.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Work From Anywhere. Actually.
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Solo female travel isn't about being fearless. It's about being informed, prepared, and choosing destinations where you can actually breathe.
              </p>
              <p>
                This isn't a romanticized guide to "finding yourself." This is a practical map of where women travel alone and feel genuinely safe. Where the community is supportive. Where you can eat dinner alone without unwanted attention. Where your only concern is whether to hike or explore museums.
              </p>
              <p>
                The reality: 85%+ of solo travelers are now women. The communities are massive. The resources are there. But not all destinations are built equal for female solo travelers. Safety ratings, harassment risk, healthcare access, and female community presence vary dramatically.
              </p>
              <p>
                This guide maps the destinations that work best for women traveling alone—with honest safety data, real costs, actual female community presence, and what to actually expect culturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pick Your Priority */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Pick Your Priority
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
              <Shield className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-700">Non-negotiable safety rating</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
              <DollarSign className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Budget</h3>
              <p className="text-gray-700">Monthly cost that fits your income</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
              <Users className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-700">How many other solo female travelers are there?</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
              <Heart className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Age Group</h3>
              <p className="text-gray-700">Different destinations suit different ages</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
              <MapPin className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vibe</h3>
              <p className="text-gray-700">Adventure, culture, relaxation, nightlife?</p>
            </div>
            <div className="bg-teal-50 rounded-lg p-6 border-l-4 border-teal-500">
              <Plane className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-700">Access to women's healthcare (critical)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Influencer Recommendations */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The Solo Female Travel Influencers
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            These women have millions of followers and have visited 60+ countries alone. Here's what they prioritize:
          </p>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lexie Alford (@lexielimitless) — 1.5M followers</h3>
              <p className="text-gray-700 mb-2">Youngest to visit every country. Prioritizes adventure, empowerment, ambitious exploration.</p>
              <p className="text-teal-600 font-semibold">Appeals to: Women seeking challenge and growth</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kristin Addis (@bemytravelmuse) — 131.6K followers</h3>
              <p className="text-gray-700 mb-2">Over 65 countries. Created 150+ all-female adventure tours. Her site gets 5M annual visits.</p>
              <p className="text-teal-600 font-semibold">Prioritizes: Safety, affordability, authentic experiences | Appeals to: Women 20s-40s seeking community</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sabina Trojanova (@girlvsglobe) — 607K followers</h3>
              <p className="text-gray-700 mb-2">UK-based. Focuses on feminism, empowerment, global exploration.</p>
              <p className="text-teal-600 font-semibold">Appeals to: Women seeking empowerment and representation</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alyssa Ramos (@mylifesatravelmovie) — 200.8K followers</h3>
              <p className="text-gray-700 mb-2">145 countries. Organizes group trips. Honest about challenges and struggles.</p>
              <p className="text-teal-600 font-semibold">Appeals to: Budget-to-mid-range travelers seeking authenticity</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Liz Carlson (@youngadventuress) — 210.8K followers</h3>
              <p className="text-gray-700 mb-2">Polar expeditions, extreme adventure. Practical advice for remote/nature exploration.</p>
              <p className="text-teal-600 font-semibold">Appeals to: Nature-focused adventurers</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alexa West (@sologirlstravelguide) — 51.6K followers</h3>
              <p className="text-gray-700 mb-2">Founder of Solo Girl's Travel Guide. Strong focus on safety tips, community building, destination guides.</p>
              <p className="text-teal-600 font-semibold">Appeals to: First-time solo travelers needing reassurance</p>
            </div>
          </div>

          <div className="mt-8 bg-teal-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What All These Influencers Agree On:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Trust your intuition.</strong> If something feels wrong, change plans.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Do what you do at home to stay safe.</strong> Don't be flashy alone at night.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Solo travel builds confidence.</strong> It's empowering for defining your own identity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Meeting people is easy.</strong> Use group tours, social hostels, Facebook groups.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 font-bold">•</span>
                <span><strong>Safety varies by neighborhood,</strong> not just country. Research where to stay.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Top 15 Destinations */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            The 15 Best Destinations for Solo Female Travelers
          </h2>

          <div className="space-y-4">
            {/* Destination 1: Iceland */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <button
                onClick={() => toggleDestination('iceland')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <h4 className="text-xl font-bold text-gray-900">1. Iceland (Reykjavik) – The Gold Standard</h4>
                </div>
                {openDestination === 'iceland' ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openDestination === 'iceland' && (
                <div className="px-6 py-6 space-y-6 border-t border-gray-100">
                  <div className="bg-teal-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Safety Rating for Women: 99/100</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                      <div>Street Safety: 99</div>
                      <div>Transportation Safety: 98</div>
                      <div>Nightlife Safety: 97</div>
                      <div>Healthcare Quality: 98</div>
                      <div>Overall Tourist Safety: 99</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Why Iceland for Solo Women</h4>
                    <p className="text-gray-700">
                      Iceland is the gold standard. Genuinely safe. Women walk alone at night without fear. No street harassment. High gender equality. Nature is insane. The only downside: cost.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Monthly Cost Breakdown</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm text-gray-600">Accommodation</p>
                        <p className="text-lg font-semibold text-gray-900">$1,400</p>
                        <p className="text-xs text-gray-500">Hostel female dorm $65/night</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm text-gray-600">Food</p>
                        <p className="text-lg font-semibold text-gray-900">$500</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm text-gray-600">Transportation</p>
                        <p className="text-lg font-semibold text-gray-900">$350</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm text-gray-600">Activities</p>
                        <p className="text-lg font-semibold text-gray-900">$400</p>
                      </div>
                    </div>
                    <div className="mt-3 bg-teal-100 rounded p-3">
                      <p className="font-bold text-gray-900">Total: $2,650/month</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Female-Friendly Accommodations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>KEX Hostel:</strong> $65/night, female dorms, 24/7 staff, social atmosphere, safe vibe</li>
                      <li><strong>Guesthouse Aurora:</strong> $80/night, small guesthouse, intimate feel, quiet neighborhood</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Transportation for Solo Women</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Best Option:</strong> Public bus or organized day tours</li>
                      <li><strong>Safety:</strong> Completely safe. No concerns.</li>
                      <li><strong>Cost:</strong> Bus pass $50/month</li>
                      <li><strong>Note:</strong> Uber not available. Book tours through reputable companies.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Community for Solo Female Travelers</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Facebook Groups:</strong> Yes, active group (15K+ members)</li>
                      <li><strong>Meetups:</strong> Yes, hostel events regularly</li>
                      <li><strong>Organized Tours:</strong> Yes, many all-female adventure tours</li>
                      <li><strong>Estimated Solo Women:</strong> Large community</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Cultural Considerations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Dress Code:</strong> Relaxed (wear what you want)</li>
                      <li><strong>Gender Dynamics:</strong> Least harassment of any destination, extreme gender equality</li>
                      <li><strong>Acceptance:</strong> Highly welcoming to solo women</li>
                      <li><strong>Nightlife:</strong> Women go out alone freely, no concerns</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Healthcare for Women</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Quality:</strong> High (world-class)</li>
                      <li><strong>Access:</strong> Easy</li>
                      <li><strong>Women's Health:</strong> Contraception and period products widely available, pharmacy access excellent</li>
                      <li><strong>Cost:</strong> Expensive but quality</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Best Season</h4>
                    <p className="text-gray-700"><strong>May-September:</strong> Midnight sun, perfect weather, best hiking conditions</p>
                    <p className="text-gray-700"><strong>Winter:</strong> Dark but stunning (Northern lights), fewer tourists</p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Why Solo Female Travelers Love It</h4>
                    <p className="text-gray-700">
                      Safety is absolute. Empowerment is real. Nature is unmatched. You can be completely alone (literally on volcanic landscapes) and still be in a developed, safe country. Zero street harassment. Zero judgment. Perfect.
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 italic">Influencer Recs: Kristin Addis, Young Adventuress</p>
                </div>
              )}
            </div>

            {/* Destination 2: Japan */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <button
                onClick={() => toggleDestination('japan')}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <h4 className="text-xl font-bold text-gray-900">2. Japan (Tokyo/Kyoto) – Respectful & Safe</h4>
                </div>
                {openDestination === 'japan' ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {openDestination === 'japan' && (
                <div className="px-6 py-6 space-y-6 border-t border-gray-100">
                  <div className="bg-teal-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Safety Rating for Women: 96/100</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                      <div>Street Safety: 97</div>
                      <div>Transportation Safety: 94 (women-only subway cars!)</div>
                      <div>Nightlife Safety: 94</div>
                      <div>Healthcare Quality: 94</div>
                      <div>Tourist Safety: 98</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Why Japan for Solo Women</h4>
                    <p className="text-gray-700">
                      Japan respects women. It's safe. It's organized. It's incredibly accessible solo. Women-only subway cars. Convenience stores everywhere. Respectful society. The culture is female-friendly (generally). Cost is moderate for developed country.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Monthly Cost Breakdown</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm text-gray-600">Accommodation</p>
                        <p className="text-lg font-semibold text-gray-900">$900-$1,200</p>
                        <p className="text-xs text-gray-500">Hostel dorm $40-$65/night</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm text-gray-600">Food</p>
                        <p className="text-lg font-semibold text-gray-900">$500+</p>
                        <p className="text-xs text-gray-500">Restaurants cheap, quality high</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm text-gray-600">Transportation</p>
                        <p className="text-lg font-semibold text-gray-900">$50-$100</p>
                      </div>
                      <div className="bg-gray-50 rounded p-3">
                        <p className="text-sm text-gray-600">Activities</p>
                        <p className="text-lg font-semibold text-gray-900">$300</p>
                      </div>
                    </div>
                    <div className="mt-3 bg-teal-100 rounded p-3">
                      <p className="font-bold text-gray-900">Total: $2,100-$2,600/month</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Female-Friendly Accommodations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Bunka Hostel Tokyo:</strong> $45/night, female dorms, design-focused, excellent reviews</li>
                      <li><strong>Sakura Hostel:</strong> Women-owned, female dorms, social atmosphere</li>
                      <li>Look for: Women-only floors, female staff, good reviews from solo women</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Transportation for Solo Women</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Best Option:</strong> Public transit (incredibly safe)</li>
                      <li><strong>Women-Only Cars:</strong> Available on most trains/subways (marked in pink)</li>
                      <li><strong>Safety:</strong> Extremely safe, well-lit, organized</li>
                      <li><strong>Cost:</strong> IC card $50-$100 for month</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Community for Solo Female Travelers</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Facebook Groups:</strong> Yes, very active (30K+ members)</li>
                      <li><strong>Meetups:</strong> Regular meetups in Tokyo, Kyoto, Osaka</li>
                      <li><strong>Language Exchanges:</strong> Popular social way to meet people</li>
                      <li><strong>Organized Tours:</strong> Women's-specific tours available</li>
                      <li><strong>Estimated Solo Women:</strong> Large, very active community</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Cultural Considerations</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Dress Code:</strong> Moderate (no extreme revealing)</li>
                      <li><strong>Gender Dynamics:</strong> Respectful, little-to-no street harassment</li>
                      <li><strong>Acceptance:</strong> Highly welcoming, curious about solo female visitors</li>
                      <li><strong>Nightlife:</strong> Safe to go out alone, but avoid extremely crowded bars late night</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Healthcare for Women</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Quality:</strong> World-class</li>
                      <li><strong>Access:</strong> Excellent, English-speaking hospitals in major cities</li>
                      <li><strong>Women's Health:</strong> Contraceptives available OTC, period products everywhere</li>
                      <li><strong>Cost:</strong> Affordable</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Best Season</h4>
                    <p className="text-gray-700"><strong>March-May (Spring):</strong> Cherry blossoms, perfect weather, crowds manageable</p>
                    <p className="text-gray-700"><strong>September-November (Autumn):</strong> Clear skies, comfortable, fewer tourists</p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">Why Solo Female Travelers Love It</h4>
                    <p className="text-gray-700">
                      It's safe. The transit system is built for women. Everything is clean and organized. You can navigate as a non-Japanese speaker. No street harassment. The culture respects solo female travelers. Food is incredible. Technology makes everything easy. It feels like a developed country but costs less than Europe.
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 italic">Influencer Recs: Girl vs Globe (Sabina Trojanova), Alexa West</p>
                </div>
              )}
            </div>

            {/* Remaining Destinations - Summary Cards */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Destinations 3-15: Quick Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">3. Switzerland (Zurich/Lucerne)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 97/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $2,100-$2,600+/month</p>
                  <p className="text-sm text-gray-700">Pristine, safe, organized. Zero crime. Expensive but perfect for solo women.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">4. Singapore</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 98/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,800-$2,000/month</p>
                  <p className="text-sm text-gray-700">Modern, safe, clean, efficient. English-speaking. Asia's safest city.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">5. Denmark (Copenhagen)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 96/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,320-$1,620/month</p>
                  <p className="text-sm text-gray-700">Peak gender equality. Bikes everywhere. Most affordable Scandinavian option.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">6. Portugal (Lisbon/Porto)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 94/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,200-$1,600/month</p>
                  <p className="text-sm text-gray-700">Affordable Europe, strong female community, safe neighborhoods, friendly culture.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">7. Ireland (Dublin/Cork)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 93/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,400-$1,800/month</p>
                  <p className="text-sm text-gray-700">English-speaking, Irish friendliness, safe pubs, active social scene.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">8. New Zealand (Auckland/Christchurch)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 95/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,800-$2,400/month</p>
                  <p className="text-sm text-gray-700">Adventure capital. Incredibly safe. Outdoor culture. Supportive female community.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">9. South Korea (Seoul)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 95/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,200-$1,600/month</p>
                  <p className="text-sm text-gray-700">Modern, safe, female-friendly. Excellent public transit. Nightlife safe.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">10. Canada (Vancouver/Toronto)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 94/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,800-$2,400/month</p>
                  <p className="text-sm text-gray-700">English-speaking, diverse, safe. Outdoors access. Familiar culture.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">11. Slovenia (Ljubljana)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 94/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> €1,200/month</p>
                  <p className="text-sm text-gray-700">Emerging hub, safe, affordable Europe.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">12. Rwanda (Kigali)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 91/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,000/month</p>
                  <p className="text-sm text-gray-700">Emerging, safe, unique experience in Africa.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">13. Thailand (Bangkok/Chiang Mai)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 88/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $700-$1,000/month</p>
                  <p className="text-sm text-gray-700">Massive female community. Budget paradise. Safety varies by neighborhood.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">14. Vietnam (Hanoi/Ho Chi Minh City)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 87/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $600-$900/month</p>
                  <p className="text-sm text-gray-700">Ultra-affordable. Female community. Street harassment can occur, stay alert.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500">
                  <h4 className="font-bold text-gray-900 mb-2">15. UAE (Dubai/Abu Dhabi)</h4>
                  <p className="text-sm text-gray-700 mb-2"><strong>Safety:</strong> 96/100</p>
                  <p className="text-sm text-gray-700 mb-2"><strong>Cost:</strong> $1,800-$2,400/month</p>
                  <p className="text-sm text-gray-700">Luxury option. Very safe. Conservative on dress. Expensive.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By Archetype */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            By Archetype: Where You Should Go
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-teal-500 text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Archetype</th>
                  <th className="px-6 py-3 text-left font-semibold">Best Destinations</th>
                  <th className="px-6 py-3 text-left font-semibold">Budget Level</th>
                  <th className="px-6 py-3 text-left font-semibold">Community Size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Adventure Seekers</td>
                  <td className="px-6 py-4 text-gray-700">Iceland, New Zealand, Canada, Norway</td>
                  <td className="px-6 py-4 text-gray-700">Mid-High</td>
                  <td className="px-6 py-4 text-gray-700">Medium</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Budget Backpackers</td>
                  <td className="px-6 py-4 text-gray-700">Vietnam, Thailand, Bali, Portugal</td>
                  <td className="px-6 py-4 text-gray-700">Low (&lt;$25/day)</td>
                  <td className="px-6 py-4 text-gray-700">Large</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Luxury Solo</td>
                  <td className="px-6 py-4 text-gray-700">Switzerland, UAE, Singapore, Japan</td>
                  <td className="px-6 py-4 text-gray-700">High ($100+/day)</td>
                  <td className="px-6 py-4 text-gray-700">Medium</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Digital Nomads</td>
                  <td className="px-6 py-4 text-gray-700">Portugal, Thailand, Bali, Spain</td>
                  <td className="px-6 py-4 text-gray-700">Mid</td>
                  <td className="px-6 py-4 text-gray-700">Large</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Over-40 Travelers</td>
                  <td className="px-6 py-4 text-gray-700">Ireland, Portugal, Canada, Switzerland</td>
                  <td className="px-6 py-4 text-gray-700">Mid-High</td>
                  <td className="px-6 py-4 text-gray-700">Medium</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Solo Mothers</td>
                  <td className="px-6 py-4 text-gray-700">Denmark, Singapore, Canada, Portugal</td>
                  <td className="px-6 py-4 text-gray-700">Mid</td>
                  <td className="px-6 py-4 text-gray-700">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Critical Solo Female Travel Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-600" />
                What to Pack
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Portable door lock (wedge or lock)</li>
                <li>• Personal alarm or safety whistle</li>
                <li>• AirTag or tracking device</li>
                <li>• Anti-theft bag or money belt</li>
                <li>• Copy of ID/passport</li>
                <li>• Emergency contact list</li>
                <li>• Travel insurance documents</li>
                <li>• Backup charger</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-teal-600" />
                Where to Stay (Safety Focus)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Female-only dorm rooms in hostels</li>
                <li>• Well-reviewed guesthouses (read reviews from solo women)</li>
                <li>• Airbnbs with verified, responsive hosts</li>
                <li>• Avoid isolated/sketchy areas (research neighborhoods first)</li>
                <li>• Check reviews specifically for mentions of solo women</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600" />
                How to Meet People Safely
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Join Facebook groups before arrival (connect online first)</li>
                <li>• Stay in social hostels with common areas</li>
                <li>• Join organized tours/group activities</li>
                <li>• Attend meetups/networking events</li>
                <li>• Use apps like Meetup or Couchsurfing (for meetings, not just crashes)</li>
                <li>• Approach other solo travelers you see at tourist spots</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-teal-600" />
                Transportation Safety
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Use Uber/Grab/Bolt when available (traceable)</li>
                <li>• Avoid walking alone at night in unknown areas</li>
                <li>• Use women-only transit options when available</li>
                <li>• Trust your instinct—if a taxi/driver feels wrong, cancel</li>
                <li>• Share location with trusted friend while traveling between cities</li>
                <li>• Book airport transfers in advance</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Hardest Truth</h3>
            <p className="text-gray-700">
              Safety varies <strong>by neighborhood and by how you present yourself</strong>, not just by country. Iceland is safe everywhere. Tokyo is safe everywhere. But in other destinations, one neighborhood can be beautiful and safe, the next sketchy. Research, ask locals, trust your gut.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Real Questions Solo Female Travelers Ask
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Will people judge me for traveling alone?</h3>
              <p className="text-gray-700">
                Depends on culture. Conservative countries (parts of South Asia, Middle East, North Africa): yes, some judgment. Europe, Japan, Scandinavia, North America: no, it's normal and celebrated.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Is it actually safe?</h3>
              <p className="text-gray-700">
                Yes, in 15+ destinations. Research specific neighborhoods. Safety isn't universal within countries—it's neighborhood-specific. Read reviews from other solo women.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What's realistic budget?</h3>
              <p className="text-gray-700">
                Budget backpacker: $800-$1,200/month (Asia, Eastern Europe) | Mid-range: $1,500-$2,200/month (Europe, Southeast Asia) | Luxury: $3,000+/month
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How do I avoid harassment?</h3>
              <p className="text-gray-700">
                Don't respond to catcalling. Walk with purpose. Use ride-sharing when it's dark. Avoid isolated areas. Stay in women-rated hostels. Dress modestly in conservative areas. Trust your instinct.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Can I really go out at night alone?</h3>
              <p className="text-gray-700">
                In Iceland, Japan, Switzerland, Singapore, Scandinavia, Canada: absolutely yes. In Thailand, Portugal, Ireland: yes, in main neighborhoods. In India, Egypt, Morocco: caution, stick to groups or well-lit main areas.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Best way to meet people?</h3>
              <p className="text-gray-700">
                Social hostels, Facebook groups, organized tours, meetup apps. Join communities before you arrive online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Plan Your Solo Female Adventure with Wander</h2>
          <p className="text-lg mb-6 opacity-90">
            Wander's AI travel planning generates personalized 60-second itineraries for solo female travelers. Prioritizes safety, finds female community, integrates healthcare resources, and handles solo-specific logistics.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Plan Your Solo Female Adventure →
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-teal-600 hover:text-teal-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
