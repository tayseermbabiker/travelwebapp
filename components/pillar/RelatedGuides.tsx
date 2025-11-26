'use client';

import Link from 'next/link';
import {
  Sparkles,
  Laptop,
  UserCheck,
  UtensilsCrossed,
  Mountain,
  Baby,
  Flower2,
  Wallet,
  PartyPopper
} from 'lucide-react';

interface RelatedGuidesProps {
  currentPage: string;
}

const guides = [
  { slug: 'seasons', name: 'Destinations by Season', icon: Sparkles, description: 'Best time to visit any destination' },
  { slug: 'digital-nomad', name: 'Digital Nomad', icon: Laptop, description: 'Remote work destinations' },
  { slug: 'solo-female-travel', name: 'Solo Female Travel', icon: UserCheck, description: 'Safest destinations for women' },
  { slug: 'foodie-destinations', name: 'Foodie Destinations', icon: UtensilsCrossed, description: 'World\'s best food cities' },
  { slug: 'adventure-travel', name: 'Adventure Travel', icon: Mountain, description: 'Thrilling outdoor experiences' },
  { slug: 'family-travel', name: 'Family Travel', icon: Baby, description: 'Kid-friendly destinations' },
  { slug: 'wellness-retreats', name: 'Wellness Retreats', icon: Flower2, description: 'Spa and healing destinations' },
  { slug: 'budget-travel', name: 'Budget Travel', icon: Wallet, description: 'Travel under $30/day' },
  { slug: 'festivals', name: 'World Festivals', icon: PartyPopper, description: 'Cultural celebrations worldwide' },
];

export default function RelatedGuides({ currentPage }: RelatedGuidesProps) {
  // Filter out current page and pick 4 related guides
  const relatedGuides = guides
    .filter(guide => guide.slug !== currentPage)
    .slice(0, 4);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Travel Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedGuides.map((guide) => {
          const IconComponent = guide.icon;
          return (
            <Link
              key={guide.slug}
              href={`/${guide.slug}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-teal-50 hover:to-teal-100 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                <IconComponent className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                  {guide.name}
                </h3>
                <p className="text-sm text-gray-600">{guide.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
