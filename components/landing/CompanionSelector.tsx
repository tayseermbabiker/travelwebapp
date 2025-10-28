'use client';

import { CompanionType } from '@/types';

interface CompanionSelectorProps {
  selected: CompanionType | null;
  onSelect: (type: CompanionType) => void;
}

const companions = [
  { id: 'solo' as CompanionType, icon: '🎒', label: 'Solo', description: 'Adventure on your own terms' },
  { id: 'couple' as CompanionType, icon: '💑', label: 'Couple', description: 'Romantic getaways' },
  { id: 'family' as CompanionType, icon: '👨‍👩‍👧', label: 'Family', description: 'Fun for all ages' },
  { id: 'friends' as CompanionType, icon: '👥', label: 'Friends', description: 'Group adventures' },
  { id: 'business' as CompanionType, icon: '💼', label: 'Business', description: 'Work and explore' },
  { id: 'group' as CompanionType, icon: '👨‍👨‍👧‍👦', label: 'Large Group', description: 'Big group travel' },
];

export default function CompanionSelector({ selected, onSelect }: CompanionSelectorProps) {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        Who's Traveling?
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {companions.map((companion) => (
          <button
            key={companion.id}
            onClick={() => onSelect(companion.id)}
            className={`
              group relative flex min-h-[120px] flex-col items-center justify-center
              rounded-xl border-2 p-4 transition-all duration-200
              hover:scale-105 hover:shadow-lg
              ${
                selected === companion.id
                  ? 'border-teal-500 bg-teal-50 shadow-md'
                  : 'border-gray-300 bg-white hover:border-teal-300'
              }
            `}
            aria-label={`Select ${companion.label}`}
            aria-pressed={selected === companion.id}
          >
            {/* Icon */}
            <div className="mb-2 text-4xl sm:text-5xl transition-transform group-hover:scale-110">
              {companion.icon}
            </div>

            {/* Label */}
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-800 sm:text-base">
                {companion.label}
              </div>
              <div className="mt-1 hidden text-xs text-gray-600 sm:block">
                {companion.description}
              </div>
            </div>

            {/* Selected Indicator */}
            {selected === companion.id && (
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
