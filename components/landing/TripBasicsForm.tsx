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
  const [selectedCities, setSelectedCities] = useState<string[]>(data.cities || []);
  const [availableCities, setAvailableCities] = useState<City[]>([]);

  const countries = Object.keys(destinationsData);
  const MAX_RECOMMENDED = 3;
  const MAX_ALLOWED = 5;

  // Update available cities when country changes
  useEffect(() => {
    if (data.country) {
      const countryData = destinationsData[data.country as keyof typeof destinationsData];
      if (countryData) {
        setAvailableCities(countryData.cities);
      }
    } else {
      setAvailableCities([]);
      setSelectedCities([]);
    }
  }, [data.country]);

  const handleCountryChange = (country: string) => {
    onChange({
      ...data,
      country,
      cities: [], // Reset cities when country changes
      destination: '', // Clear old destination field
    });
    setSelectedCities([]);
  };

  const handleCityToggle = (cityName: string) => {
    let newSelectedCities: string[];

    if (selectedCities.includes(cityName)) {
      // Deselect city
      newSelectedCities = selectedCities.filter(c => c !== cityName);
    } else if (selectedCities.length < MAX_ALLOWED) {
      // Select city (up to max)
      newSelectedCities = [...selectedCities, cityName];
    } else {
      // Max reached
      alert(`Maximum ${MAX_ALLOWED} cities allowed for quality itinerary planning`);
      return;
    }

    setSelectedCities(newSelectedCities);
    onChange({
      ...data,
      cities: newSelectedCities,
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

  const handleBudgetChange = (value: string) => {
    const budget = parseInt(value) || 0;
    onChange({ ...data, budget });
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

  // Get recommended days based on selected cities
  const getRecommendedDays = () => {
    if (selectedCities.length === 0) return '';
    const cityData = availableCities.filter(c => selectedCities.includes(c.name));
    const minDays = cityData.reduce((sum, c) => sum + parseInt(c.recommendedDays.split('-')[0]), 0);
    const maxDays = cityData.reduce((sum, c) => sum + parseInt(c.recommendedDays.split('-')[1]), 0);
    return `${minDays}-${maxDays} days`;
  };

  return (
    <div className="w-full space-y-6">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        Trip Basics
      </h2>

      {/* Country Selection */}
      <div>
        <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-700">
          Select Country
        </label>
        <select
          id="country"
          value={data.country || ''}
          onChange={(e) => handleCountryChange(e.target.value)}
          className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-base focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
        >
          <option value="">Choose a country...</option>
          {countries.map((country) => {
            const countryData = destinationsData[country as keyof typeof destinationsData];
            return (
              <option key={country} value={country}>
                {countryData.name}
              </option>
            );
          })}
        </select>
      </div>

      {/* City Selection */}
      {data.country && availableCities.length > 0 && (
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Select Cities to Visit (Max {MAX_ALLOWED})
          </label>

          {/* Selection Status */}
          {selectedCities.length > 0 && (
            <div className="mb-3">
              {selectedCities.length <= MAX_RECOMMENDED && (
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <span>✓</span>
                  <span>{selectedCities.length} {selectedCities.length === 1 ? 'city' : 'cities'} selected (optimal)</span>
                </p>
              )}
              {selectedCities.length === 4 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800">
                    ⚠️ 4 cities selected. Generation may take 60+ seconds. Consider reducing to 3 for best experience.
                  </p>
                </div>
              )}
              {selectedCities.length === 5 && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-sm text-orange-800">
                    ⚠️ 5 cities is maximum. This will create a fast-paced itinerary. Expect 90+ second generation time.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* City Checkboxes */}
          <div className="space-y-3">
            {availableCities.map((city) => (
              <label
                key={city.name}
                className={`
                  flex items-start gap-3 p-4 rounded-lg border-2 transition cursor-pointer
                  ${city.hasData
                    ? selectedCities.includes(city.name)
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50/30'
                    : 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                  }
                `}
              >
                <input
                  type="checkbox"
                  checked={selectedCities.includes(city.name)}
                  onChange={() => handleCityToggle(city.name)}
                  disabled={!city.hasData}
                  className="mt-1 w-5 h-5 text-teal-600 rounded focus:ring-teal-500 disabled:opacity-50"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-gray-800">{city.name}</h4>
                    {city.hasData ? (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {city.activitiesCount} activities
                      </span>
                    ) : (
                      <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                        Coming soon
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed">{city.description}</p>

                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span>📅 {city.recommendedDays} days</span>
                    <span>💵 {city.costLevel}</span>
                  </div>
                </div>
              </label>
            ))}
          </div>

          {/* Recommended Days Hint */}
          {selectedCities.length > 0 && (
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 <strong>Recommended duration:</strong> {getRecommendedDays()} for {selectedCities.join(', ')}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Date Range */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="start-date" className="mb-2 block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            id="start-date"
            type="date"
            value={formatDateForInput(data.dateRange.start)}
            onChange={(e) => handleStartDateChange(e.target.value)}
            min={today}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-base focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
          />
        </div>

        <div>
          <label htmlFor="end-date" className="mb-2 block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            id="end-date"
            type="date"
            value={formatDateForInput(data.dateRange.end)}
            onChange={(e) => handleEndDateChange(e.target.value)}
            min={formatDateForInput(data.dateRange.start) || today}
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-base focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
          />
          {totalDays > 0 && (
            <p className="mt-1 text-sm text-gray-600">
              {totalDays} {totalDays === 1 ? 'day' : 'days'} trip
            </p>
          )}
        </div>
      </div>

      {/* Budget Slider */}
      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-gray-700">
          Total Budget (USD)
        </label>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-500">$500</span>
          <input
            id="budget"
            type="range"
            min="500"
            max="10000"
            step="100"
            value={data.budget}
            onChange={(e) => handleBudgetChange(e.target.value)}
            className="flex-1 accent-teal-500"
          />
          <span className="text-sm font-medium text-gray-500">$10,000</span>
        </div>
        <div className="mt-3 text-center">
          <span className="text-3xl font-bold text-teal-600">
            ${data.budget.toLocaleString()}
          </span>
          <p className="mt-1 text-xs text-gray-600">
            Includes flights, hotels, activities & food
          </p>
        </div>

        {/* Budget Indicator */}
        <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
          <div className={data.budget < 1500 ? 'font-bold text-teal-600' : 'text-gray-400'}>
            Budget<br/>$500-1.5K
          </div>
          <div className={data.budget >= 1500 && data.budget < 3000 ? 'font-bold text-teal-600' : 'text-gray-400'}>
            Moderate<br/>$1.5-3K
          </div>
          <div className={data.budget >= 3000 && data.budget < 6000 ? 'font-bold text-teal-600' : 'text-gray-400'}>
            Comfort<br/>$3-6K
          </div>
          <div className={data.budget >= 6000 ? 'font-bold text-teal-600' : 'text-gray-400'}>
            Luxury<br/>$6K+
          </div>
        </div>
      </div>
    </div>
  );
}
