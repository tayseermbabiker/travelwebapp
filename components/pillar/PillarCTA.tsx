'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PillarCTAProps {
  guideName: string;
  destination?: string;
}

export default function PillarCTA({ guideName, destination }: PillarCTAProps) {
  return (
    <div className="mb-12">
      {/* Itinerary Generator CTA */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Ready to Plan Your Trip?</h2>
            </div>
            <p className="text-lg opacity-90">
              Get a personalized itinerary with hotels, activities, restaurants, and budget breakdown - all tailored to how you love to travel.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-teal-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap"
          >
            Create My Itinerary
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
