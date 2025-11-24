'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, MapPin, DollarSign, Users, Shield, AlertTriangle, CheckCircle } from 'lucide-react';

interface Festival {
  id: string;
  name: string;
  tagline: string;
  location: string;
  period: string;
  category: string;
  description: string;
  proTip: string;
  budget: string;
  budgetNote: string;
  familyFriendly: boolean;
  safety: {
    rating: string;
    soloFemale: string;
    notes: string;
    safeZones?: string;
    cautionZones?: string;
  };
}

export default function FestivalsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFestival, setExpandedFestival] = useState<string | null>(null);

  const toggleFestival = (id: string) => {
    setExpandedFestival(expandedFestival === id ? null : id);
  };

  const categories = [
    { id: 'all', name: 'All Festivals', icon: '🌍' },
    { id: 'culture-heritage', name: 'Culture & Heritage', icon: '🎭' },
    { id: 'music-arts', name: 'Arts & Performance', icon: '🎨' },
    { id: 'food-culture', name: 'Food & Culinary', icon: '🍜' },
    { id: 'nature-seasons', name: 'Nature & Seasons', icon: '🌸' },
    { id: 'adventure-sports', name: 'Adventure & Sports', icon: '🏔️' }
  ];

  const festivals: Festival[] = [
    {
      id: 'cherry-blossom-japan',
      name: 'Cherry Blossom Season (Hanami)',
      tagline: 'When Japan turns pink',
      location: 'Tokyo, Kyoto & nationwide, Japan',
      period: 'Late March - Early April',
      category: 'nature-seasons',
      description: 'Every spring, Japan transforms into a dreamscape of pale pink as millions of cherry trees burst into bloom. Locals spread picnic blankets beneath the branches for hanami - the centuries-old tradition of flower viewing. By day, families and friends gather in parks; by night, lanterns illuminate the blossoms in an ethereal glow. The fleeting blooms remind everyone that life\'s most precious moments are temporary.',
      proTip: 'Skip the famous spots on weekends. Meguro River in Tokyo is stunning but packed. Instead, try Philosopher\'s Path in Kyoto at sunrise, or head to Hirosaki in northern Japan for fewer crowds.',
      budget: 'Budget-Friendly',
      budgetNote: 'Parks are free; book accommodation 6+ months ahead as prices surge',
      familyFriendly: true,
      safety: {
        rating: 'excellent',
        soloFemale: 'excellent',
        notes: 'Japan consistently ranks as one of the world\'s safest destinations. Virtually no street harassment. The biggest concern is crowds at popular spots.'
      }
    },
    {
      id: 'diwali-india',
      name: 'Diwali (Festival of Lights)',
      tagline: 'A billion flames against the darkness',
      location: 'Jaipur, Varanasi, Mumbai, India',
      period: 'October - November',
      category: 'culture-heritage',
      description: 'Imagine 800 million people lighting oil lamps simultaneously. That\'s Diwali - the most significant festival celebrating light over darkness. Cities transform into glittering wonderlands as homes are decorated with rangoli patterns, fireworks paint the sky, and families gather for feasts of sweets. In Varanasi, thousands of floating lamps drift down the Ganges. In Jaipur, the Pink City glows gold.',
      proTip: 'Mumbai offers the safest experience for solo travelers while still delivering full Diwali magic. Book a heritage hotel\'s Diwali dinner for a curated introduction. Bring an N95 mask - firework smoke gets intense in cities.',
      budget: 'Budget-Friendly',
      budgetNote: 'Street celebrations and temple visits are free; heritage experiences vary',
      familyFriendly: true,
      safety: {
        rating: 'moderate',
        soloFemale: 'requires-caution',
        notes: 'Mumbai and Kerala are significantly safer than Delhi or Jaipur. Dress modestly (cover shoulders and knees). Avoid walking alone after dark. Consider organized tours or traveling with companions.',
        safeZones: 'Mumbai, Goa, Kerala',
        cautionZones: 'Delhi, Jaipur'
      }
    },
    {
      id: 'songkran-thailand',
      name: 'Songkran Water Festival',
      tagline: 'The world\'s biggest water fight',
      location: 'Bangkok, Chiang Mai, Phuket, Thailand',
      period: 'April 13-16 (fixed dates)',
      category: 'culture-heritage',
      description: 'Thai New Year starts with temple visits and respectful water blessings - then erupts into the planet\'s most epic water fight. For three days, entire cities become splash zones. The chaos has deeper roots - water symbolizes washing away the old year\'s misfortunes. But mostly it\'s about gleeful, soaking-wet fun in 35°C heat. You will get drenched. You will love it.',
      proTip: 'Chiang Mai is ground zero for the most intense battles. Waterproof everything (phone in sealed pouch, cash in ziplock). Wear quick-dry clothes and closed-toe shoes - streets get slippery. Never splash monks, elderly people, or babies.',
      budget: 'Budget-Friendly',
      budgetNote: 'Street participation is free; accommodation prices surge',
      familyFriendly: true,
      safety: {
        rating: 'good',
        soloFemale: 'moderate',
        notes: 'Known as "Seven Dangerous Days" due to road accidents - avoid motorbikes. Protect eyes with goggles. Use Grab app for transport, never unlicensed taxis.'
      }
    }
  ];

  const getSafetyBadge = (rating: string) => {
    switch(rating) {
      case 'excellent':
      case 'very-good':
        return (
          <span className="inline-flex items-center gap-1 bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-xs font-semibold border border-green-500/30">
            <CheckCircle className="w-3 h-3" /> Safe for Solo Female Travel
          </span>
        );
      case 'good':
      case 'moderate':
      case 'requires-caution':
        return (
          <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/30">
            <AlertTriangle className="w-3 h-3" /> Extra Precautions Advised
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-red-500/20 text-red-700 px-3 py-1 rounded-full text-xs font-semibold border border-red-500/30">
            <Shield className="w-3 h-3" /> Private Events Recommended
          </span>
        );
    }
  };

  const filteredFestivals = selectedCategory && selectedCategory !== 'all'
    ? festivals.filter(f => f.category === selectedCategory)
    : festivals;

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 font-sans pt-16 relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-yellow-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="backdrop-blur-xl bg-white/40 border border-white/50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                World Festivals & Events
              </h1>
              <p className="text-2xl md:text-3xl text-center mb-3 text-gray-800 font-light">
                Plan Your Trip Around the World's Greatest Celebrations
              </p>
              <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
                From cherry blossoms in Japan to water festivals in Thailand, discover recurring festivals that define cultures and create unforgettable travel moments. Every festival includes safety ratings, solo female travel guidance, and insider tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 pb-8 pt-4">

        {/* Category Filter */}
        <section className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id === 'all' ? null : cat.id)}
                className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                  (selectedCategory === cat.id || (!selectedCategory && cat.id === 'all'))
                    ? 'bg-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:scale-105'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </section>

        {/* Festivals List */}
        <div className="space-y-6">
          {filteredFestivals.map((festival) => (
            <div key={festival.id} className="backdrop-blur-lg bg-white/50 border border-white/60 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <button
                onClick={() => toggleFestival(festival.id)}
                className="w-full p-6 text-left hover:bg-white/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{festival.name}</h3>
                    <p className="text-lg text-gray-600 italic mb-3">{festival.tagline}</p>

                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                        <MapPin className="w-4 h-4 text-purple-600" />
                        {festival.location}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        {festival.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                        {festival.budget}
                      </span>
                      {festival.familyFriendly && (
                        <span className="inline-flex items-center gap-1 text-sm text-gray-700">
                          <Users className="w-4 h-4 text-purple-600" />
                          Family Friendly
                        </span>
                      )}
                    </div>

                    <div className="mb-3">
                      {getSafetyBadge(festival.safety.soloFemale)}
                    </div>
                  </div>

                  {expandedFestival === festival.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                  )}
                </div>
              </button>

              {expandedFestival === festival.id && (
                <div className="px-6 pb-6 space-y-4 border-t border-white/30 pt-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">About This Festival</h4>
                    <p className="text-gray-700 leading-relaxed">{festival.description}</p>
                  </div>

                  <div className="bg-purple-50/70 p-4 rounded-lg border border-purple-200/50">
                    <h4 className="font-bold text-purple-700 mb-2">💡 Pro Tip</h4>
                    <p className="text-gray-700">{festival.proTip}</p>
                  </div>

                  <div className="bg-blue-50/70 p-4 rounded-lg border border-blue-200/50">
                    <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Safety Information
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Overall Safety:</strong> {festival.safety.rating}
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Solo Female Safety:</strong> {festival.safety.soloFemale}
                    </p>
                    <p className="text-sm text-gray-700">{festival.safety.notes}</p>
                    {festival.safety.safeZones && (
                      <p className="text-sm text-gray-700 mt-2">
                        <strong>Safer Areas:</strong> {festival.safety.safeZones}
                      </p>
                    )}
                    {festival.safety.cautionZones && (
                      <p className="text-sm text-gray-700 mt-2">
                        <strong>Exercise Caution:</strong> {festival.safety.cautionZones}
                      </p>
                    )}
                  </div>

                  <div className="bg-green-50/70 p-4 rounded-lg border border-green-200/50">
                    <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Budget Information
                    </h4>
                    <p className="text-sm text-gray-700">
                      <strong>Budget Level:</strong> {festival.budget}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">{festival.budgetNote}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFestivals.length === 0 && (
          <div className="backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-12 text-center">
            <p className="text-xl text-gray-600">No festivals found in this category.</p>
          </div>
        )}

        {/* Safety Disclaimer */}
        <div className="mt-8 backdrop-blur-lg bg-white/60 border border-white/60 rounded-2xl shadow-xl p-6">
          <h3 className="font-bold text-gray-800 mb-3">⚠️ Safety Disclaimer</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Safety ratings are based on aggregated data from multiple sources including government travel advisories, community feedback, and recent traveler reviews. Individual experiences may vary. Always check current government travel advisories, research recent traveler reviews, and trust your instincts. Wander is not liable for incidents during travel.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <strong>Sources:</strong> UN Women Safety Index, US State Department, UK Foreign Office, Numbeo Crime Index, Solo Female Travelers community feedback.
          </p>
        </div>
      </div>
    </main>
  );
}
