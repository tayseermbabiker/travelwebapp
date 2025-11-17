'use client';

import { HotelTier } from '@/types';

interface HotelTierSelectorProps {
  selected: HotelTier | null;
  onSelect: (tier: HotelTier) => void;
}

const hotelTiers = [
  {
    id: 'budget' as HotelTier,
    icon: '🏨',
    label: 'Budget',
    stars: '2★',
    description: 'Hostels & budget hotels'
  },
  {
    id: 'comfort' as HotelTier,
    icon: '🏨',
    label: 'Comfort',
    stars: '3★',
    description: 'Mid-range hotels'
  },
  {
    id: 'premium' as HotelTier,
    icon: '🏨',
    label: 'Premium',
    stars: '4★',
    description: 'Upscale hotels'
  },
  {
    id: 'luxury' as HotelTier,
    icon: '🏨',
    label: 'Luxury',
    stars: '5★',
    description: '5-star resorts'
  },
];

export default function HotelTierSelector({ selected, onSelect }: HotelTierSelectorProps) {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        Where Do You Want to Stay?
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {hotelTiers.map((tier) => (
          <button
            key={tier.id}
            onClick={() => onSelect(tier.id)}
            className={`
              group relative flex min-h-[120px] flex-col items-center justify-center
              rounded-xl border-2 p-4 transition-all duration-200
              hover:scale-105 hover:shadow-lg
              ${
                selected === tier.id
                  ? 'border-teal-500 bg-teal-50 shadow-md'
                  : 'border-gray-300 bg-white hover:border-teal-300'
              }
            `}
            aria-label={`Select ${tier.label} tier`}
            aria-pressed={selected === tier.id}
          >
            {/* Icon */}
            <div className="mb-2 text-4xl sm:text-5xl transition-transform group-hover:scale-110">
              {tier.icon}
            </div>

            {/* Label */}
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-800 sm:text-base">
                {tier.label}
              </div>
              <div className="text-xs font-medium text-teal-600">
                {tier.stars}
              </div>
              <div className="mt-1 text-xs text-gray-600">
                {tier.description}
              </div>
            </div>

            {/* Selected Indicator */}
            {selected === tier.id && (
              <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-teal-500">
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
