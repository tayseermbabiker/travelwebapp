'use client';

import { InterestType } from '@/types';
import { Utensils, Landmark, Mountain, Palmtree, Waves, HeartPulse, PartyPopper, MapPin, Palette, Sprout } from 'lucide-react';

interface InterestsSelectorProps {
  selected: InterestType[];
  onToggle: (interest: InterestType) => void;
  maxSelections?: number;
}

const interests = [
  { id: 'food' as InterestType, Icon: Utensils, label: 'Food & Culinary', trending: true },
  { id: 'culture' as InterestType, Icon: Landmark, label: 'Culture & History' },
  { id: 'adventure' as InterestType, Icon: Mountain, label: 'Adventure & Outdoors' },
  { id: 'wildlife' as InterestType, Icon: Palmtree, label: 'Wildlife & Nature' },
  { id: 'beach' as InterestType, Icon: Waves, label: 'Beach & Relaxation' },
  { id: 'wellness' as InterestType, Icon: HeartPulse, label: 'Wellness & Spiritual' },
  { id: 'nightlife' as InterestType, Icon: PartyPopper, label: 'Nightlife & Entertainment' },
  { id: 'hidden' as InterestType, Icon: MapPin, label: 'Hidden Gems & Local Life' },
  { id: 'art' as InterestType, Icon: Palette, label: 'Art & Architecture' },
  { id: 'sustainable' as InterestType, Icon: Sprout, label: 'Sustainable Tourism' },
];

export default function InterestsSelector({
  selected,
  onToggle,
  maxSelections = 3,
}: InterestsSelectorProps) {
  const isSelected = (id: InterestType) => selected.includes(id);
  const isDisabled = (id: InterestType) => !isSelected(id) && selected.length >= maxSelections;

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg sm:text-3xl">
          Pick Your Travel Style
        </h2>
        <p className="mt-2 text-sm text-gray-200 drop-shadow">
          Choose up to {maxSelections} interests
          {selected.length > 0 && (
            <span className="ml-2 inline-block rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
              {selected.length}/{maxSelections} selected
            </span>
          )}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {interests.map((interest) => {
          const selected = isSelected(interest.id);
          const disabled = isDisabled(interest.id);

          return (
            <button
              key={interest.id}
              onClick={() => !disabled && onToggle(interest.id)}
              disabled={disabled}
              className={`
                group relative flex min-h-[100px] flex-col items-center justify-center
                rounded-xl border-2 p-3 transition-all duration-200
                ${
                  selected
                    ? 'border-teal-400 bg-white/95 shadow-md'
                    : disabled
                    ? 'cursor-not-allowed border-white/20 bg-white/40 opacity-50'
                    : 'border-white/30 bg-white/80 hover:scale-105 hover:border-teal-300 hover:shadow-lg'
                }
              `}
              aria-label={`${selected ? 'Deselect' : 'Select'} ${interest.label}`}
              aria-pressed={selected}
              aria-disabled={disabled}
            >
              {/* Trending Badge */}
              {interest.trending && (
                <div className="absolute right-1 top-1 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                  Trending
                </div>
              )}

              {/* Icon */}
              <div
                className={`
                  mb-2 transition-transform
                  ${selected ? 'scale-110' : 'group-hover:scale-110'}
                `}
              >
                <interest.Icon
                  className={`w-8 h-8 ${disabled ? 'text-gray-400' : 'text-teal-600'}`}
                  strokeWidth={1.5}
                />
              </div>

              {/* Label */}
              <div className="text-center text-xs font-medium text-gray-800 sm:text-sm">
                {interest.label}
              </div>

              {/* Selected Indicator */}
              {selected && (
                <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-teal-500">
                  <svg
                    className="h-3 w-3 text-white"
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

      {selected.length >= maxSelections && (
        <p className="mt-4 text-center text-sm text-gray-200 drop-shadow">
          Maximum selections reached. Deselect an interest to choose another.
        </p>
      )}
    </div>
  );
}
