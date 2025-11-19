'use client';

import { ExperienceRange } from '@/types';
import { Coins, Target, Sparkles, Crown } from 'lucide-react';

interface ExperienceRangeSelectorProps {
  selected: ExperienceRange[];
  onToggle: (range: ExperienceRange) => void;
}

const experienceRanges = [
  {
    id: 'budget' as ExperienceRange,
    Icon: Coins,
    label: 'Budget Explorer',
    description: 'Free tours, street food, local transport'
  },
  {
    id: 'balanced' as ExperienceRange,
    Icon: Target,
    label: 'Balanced Mix',
    description: 'Mix of free & paid activities'
  },
  {
    id: 'premium' as ExperienceRange,
    Icon: Sparkles,
    label: 'Premium Experiences',
    description: 'Skip-the-line tours, nice dining'
  },
  {
    id: 'luxury' as ExperienceRange,
    Icon: Crown,
    label: 'Luxury Adventures',
    description: 'VIP tours, fine dining, private guides'
  },
];

export default function ExperienceRangeSelector({ selected, onToggle }: ExperienceRangeSelectorProps) {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-center text-2xl font-bold text-white drop-shadow-lg sm:text-3xl">
        What Kind of Experiences?
      </h2>

      <p className="mb-4 text-center text-sm text-gray-200 drop-shadow">
        Select one or more experience styles (mix budget + luxury, or choose all!)
      </p>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {experienceRanges.map((range) => {
          const isSelected = selected.includes(range.id);

          return (
            <button
              key={range.id}
              onClick={() => onToggle(range.id)}
              className={`
                group relative flex min-h-[120px] flex-col items-center justify-center
                rounded-xl border-2 p-4 transition-all duration-200
                hover:scale-105 hover:shadow-lg
                ${
                  isSelected
                    ? 'border-teal-400 bg-white/95 shadow-md'
                    : 'border-white/30 bg-white/80 hover:border-teal-300'
                }
              `}
              aria-label={`Toggle ${range.label}`}
              aria-pressed={isSelected}
            >
              {/* Icon */}
              <div className="mb-3 transition-transform group-hover:scale-110">
                <range.Icon className="w-8 h-8 text-teal-600" strokeWidth={1.5} />
              </div>

              {/* Label */}
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-800 sm:text-base">
                  {range.label}
                </div>
                <div className="mt-1 text-xs text-gray-600">
                  {range.description}
                </div>
              </div>

              {/* Selected Indicator */}
              {isSelected && (
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
          );
        })}
      </div>
    </div>
  );
}
