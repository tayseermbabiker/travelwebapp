'use client';

import { ExperienceRange } from '@/types';

interface ExperienceRangeSelectorProps {
  selected: ExperienceRange | null;
  onSelect: (range: ExperienceRange) => void;
}

const experienceRanges = [
  {
    id: 'budget' as ExperienceRange,
    emoji: '💰',
    label: 'Budget Explorer',
    description: 'Free tours, street food, local transport'
  },
  {
    id: 'balanced' as ExperienceRange,
    emoji: '🎯',
    label: 'Balanced Mix',
    description: 'Mix of free & paid activities'
  },
  {
    id: 'premium' as ExperienceRange,
    emoji: '✨',
    label: 'Premium Experiences',
    description: 'Skip-the-line tours, nice dining'
  },
  {
    id: 'luxury' as ExperienceRange,
    emoji: '👑',
    label: 'Luxury Adventures',
    description: 'VIP tours, fine dining, private guides'
  },
];

export default function ExperienceRangeSelector({ selected, onSelect }: ExperienceRangeSelectorProps) {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        What Kind of Experiences?
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {experienceRanges.map((range) => (
          <button
            key={range.id}
            onClick={() => onSelect(range.id)}
            className={`
              group relative flex min-h-[120px] flex-col items-center justify-center
              rounded-xl border-2 p-4 transition-all duration-200
              hover:scale-105 hover:shadow-lg
              ${
                selected === range.id
                  ? 'border-teal-500 bg-teal-50 shadow-md'
                  : 'border-gray-300 bg-white hover:border-teal-300'
              }
            `}
            aria-label={`Select ${range.label}`}
            aria-pressed={selected === range.id}
          >
            {/* Emoji Icon */}
            <div className="mb-2 text-4xl sm:text-5xl transition-transform group-hover:scale-110">
              {range.emoji}
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
            {selected === range.id && (
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
