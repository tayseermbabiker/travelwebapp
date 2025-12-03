'use client';

import { Star, MapPin, ExternalLink, Check } from 'lucide-react';

interface Hotel {
  id: string;
  name: string;
  stars: number;
  pricePerNight: number;
  rating: number;
  reviewCount?: number;
  amenities: string[];
  location: {
    address: string;
  };
  why?: string;
  tier?: 'good' | 'better' | 'best';
  recommended?: boolean;
}

interface HotelCardProps {
  hotel: Hotel;
  totalNights: number;
  showTier?: boolean;
}

const tierConfig = {
  good: { label: 'Good Value', color: 'bg-blue-500', icon: '💰' },
  better: { label: 'Recommended', color: 'bg-teal-500', icon: '⭐' },
  best: { label: 'Premium', color: 'bg-purple-500', icon: '✨' },
};

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < stars ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export default function HotelCard({ hotel, totalNights, showTier = false }: HotelCardProps) {
  const totalCost = hotel.pricePerNight * totalNights;
  const tier = hotel.tier ? tierConfig[hotel.tier] : null;

  const handleSearch = () => {
    const query = encodeURIComponent(`${hotel.name} ${hotel.location?.address || ''}`);
    window.open(`https://www.google.com/search?q=${query}+book+hotel`, '_blank');
  };

  return (
    <div className={`bg-white rounded-xl shadow-md border p-5 relative ${
      hotel.recommended ? 'border-teal-400 ring-2 ring-teal-100' : 'border-gray-100'
    }`}>
      {/* Tier Badge */}
      {showTier && tier && (
        <div className={`absolute -top-3 left-4 ${tier.color} text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1`}>
          <span>{tier.icon}</span>
          <span>{tier.label}</span>
        </div>
      )}

      {/* Recommended Badge */}
      {hotel.recommended && (
        <div className="absolute -top-3 right-4 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
          <Check className="w-3 h-3" />
          <span>Our Pick</span>
        </div>
      )}

      {/* Header Row */}
      <div className={`flex items-start justify-between gap-4 mb-4 ${showTier ? 'mt-2' : ''}`}>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <StarRating stars={hotel.stars} />
            <span className="text-xs text-gray-500">{hotel.stars}-star</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-tight">{hotel.name}</h3>
          <div className="flex items-center gap-1.5 text-gray-500 mt-1">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-xs">{hotel.location?.address || 'Location TBD'}</span>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="text-center bg-teal-500 text-white px-2.5 py-1.5 rounded-lg flex-shrink-0">
          <div className="text-lg font-bold">{hotel.rating}</div>
          <div className="text-xs opacity-80">/10</div>
        </div>
      </div>

      {/* Why This Hotel */}
      {hotel.why && (
        <div className="bg-teal-50 rounded-lg p-3 mb-4 border-l-4 border-teal-500">
          <p className="text-sm text-teal-800">
            <span className="font-semibold">Why this hotel: </span>
            {hotel.why}
          </p>
        </div>
      )}

      {/* Amenities - Compact */}
      {hotel.amenities && hotel.amenities.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hotel.amenities.slice(0, 5).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
            >
              {amenity}
            </span>
          ))}
        </div>
      )}

      {/* Pricing */}
      <div className="pt-3 border-t border-gray-100">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-gray-800">${hotel.pricePerNight}</span>
            <span className="text-sm text-gray-500">/night</span>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-teal-600">${totalCost.toLocaleString()}</span>
            <span className="text-xs text-gray-500 block">{totalNights} nights total</span>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium transition"
        >
          Search & Book
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
