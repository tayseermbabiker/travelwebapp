'use client';

import { Star, MapPin, ExternalLink } from 'lucide-react';

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
}

interface HotelCardProps {
  hotel: Hotel;
  totalNights: number;
}

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

export default function HotelCard({ hotel, totalNights }: HotelCardProps) {
  const totalCost = hotel.pricePerNight * totalNights;

  const handleSearch = () => {
    const query = encodeURIComponent(`${hotel.name} ${hotel.location?.address || ''}`);
    window.open(`https://www.google.com/search?q=${query}+book+hotel`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5">
      {/* Header Row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <StarRating stars={hotel.stars} />
            <span className="text-xs text-gray-500">{hotel.stars}-star</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
          <div className="flex items-center gap-1.5 text-gray-500 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-sm">{hotel.location?.address || 'Location TBD'}</span>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="text-center bg-teal-500 text-white px-3 py-2 rounded-lg">
          <div className="text-xl font-bold">{hotel.rating}</div>
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

      {/* Pricing Row */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex items-baseline gap-3">
          <div>
            <span className="text-2xl font-bold text-gray-800">${hotel.pricePerNight}</span>
            <span className="text-sm text-gray-500">/night</span>
          </div>
          <div className="text-sm text-gray-500">
            = <span className="font-semibold text-teal-600">${totalCost.toLocaleString()}</span> for {totalNights} nights
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center gap-1.5 text-teal-600 hover:text-teal-700 text-sm font-medium"
        >
          Search & Book
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
