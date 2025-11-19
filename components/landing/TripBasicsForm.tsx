'use client';

import { useState, useEffect } from 'react';
import { TripBasics } from '@/types';
import destinationsData from '@/lib/database/destinations.json';

interface TripBasicsFormProps {
  data: TripBasics;
  onChange: (data: TripBasics) => void;
}

interface City {
  name: string;
  importance: number;
  recommendedDays: string;
  hasData: boolean;
  activitiesCount: number;
  hotelsCount: number;
  costLevel: string;
  description: string;
  travelFromMain?: any;
}

export default function TripBasicsForm({ data, onChange }: TripBasicsFormProps) {
  const [cityInput, setCityInput] = useState('');

  const handleDestinationChange = (value: string) => {
    onChange({
      ...data,
      destination: value,
    });
  };


  const handleStartDateChange = (value: string) => {
    const date = value ? new Date(value) : null;
    onChange({
      ...data,
      dateRange: { ...data.dateRange, start: date },
    });
  };

  const handleEndDateChange = (value: string) => {
    const date = value ? new Date(value) : null;
    onChange({
      ...data,
      dateRange: { ...data.dateRange, end: date },
    });
  };

  // Format date for input (YYYY-MM-DD)
  const formatDateForInput = (date: Date | null) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  // Calculate total days
  const totalDays = data.dateRange.start && data.dateRange.end
    ? Math.ceil((data.dateRange.end.getTime() - data.dateRange.start.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <div className="w-full space-y-6">
      <h2 className="mb-6 text-center text-2xl font-bold text-white drop-shadow-lg sm:text-3xl">
        Trip Basics
      </h2>

      {/* Destination - City-Based Input */}
      <div>
        <label htmlFor="destination" className="mb-2 block text-sm font-medium text-gray-200">
          Which city or cities do you want to visit?
        </label>
        <input
          id="destination"
          type="text"
          value={data.destination}
          onChange={(e) => handleDestinationChange(e.target.value)}
          placeholder="e.g., Paris  OR  Tokyo, Kyoto, Osaka  OR  Dubai, Jeddah"
          className="w-full rounded-lg border-2 border-white/30 bg-white/90 px-4 py-3 text-base text-gray-800 placeholder-gray-500 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
        <div className="mt-2 space-y-1">
          <p className="text-xs text-gray-200 drop-shadow">
            <strong>Tip:</strong> Just enter city names! We'll understand the countries.
          </p>
          <p className="text-xs text-gray-300 drop-shadow">
            Examples: <span className="font-medium">"Paris"</span> • <span className="font-medium">"Barcelona, Rome"</span> • <span className="font-medium">"Dubai, Abu Dhabi"</span>
          </p>
        </div>
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="start-date" className="mb-2 block text-sm font-medium text-gray-200">
            Start Date
          </label>
          <input
            id="start-date"
            type="date"
            value={formatDateForInput(data.dateRange.start)}
            onChange={(e) => handleStartDateChange(e.target.value)}
            min={today}
            className="w-full rounded-lg border-2 border-white/30 bg-white/90 px-4 py-3 text-base text-gray-800 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        <div>
          <label htmlFor="end-date" className="mb-2 block text-sm font-medium text-gray-200">
            End Date
          </label>
          <input
            id="end-date"
            type="date"
            value={formatDateForInput(data.dateRange.end)}
            onChange={(e) => handleEndDateChange(e.target.value)}
            min={formatDateForInput(data.dateRange.start) || today}
            className="w-full rounded-lg border-2 border-white/30 bg-white/90 px-4 py-3 text-base text-gray-800 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
          {totalDays > 0 && (
            <p className="mt-1 text-sm text-gray-200 drop-shadow">
              {totalDays} {totalDays === 1 ? 'day' : 'days'} trip
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
