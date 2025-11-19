'use client';

interface Hotel {
  id: string;
  name: string;
  stars: number;
  pricePerNight: number;
  rating: number;
  reviewCount?: number;
  imageUrl?: string;
  amenities: string[];
  location: {
    address: string;
    lat?: number;
    lng?: number;
  };
  affiliateLinks?: any;
}

interface HotelCardProps {
  hotel: Hotel;
  totalNights: number;
}

export default function HotelCard({ hotel, totalNights }: HotelCardProps) {
  const totalCost = hotel.pricePerNight * totalNights;

  const handleBookNow = () => {
    if (hotel.affiliateLinks && hotel.affiliateLinks.booking) {
      // Use affiliate proxy for security and analytics
      const proxyUrl = `/api/affiliate-redirect?hotel=${hotel.id}&provider=booking`;
      window.open(proxyUrl, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Hotel Image Placeholder */}
      <div className="relative h-48 sm:h-64 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-lg font-semibold">Hotel Image</p>
        </div>
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg">
          <div className="flex items-center gap-1">
            <span className="font-bold text-gray-800">{hotel.rating}</span>
            <span className="text-xs text-gray-600">/10</span>
          </div>
          {hotel.reviewCount && (
            <p className="text-xs text-gray-600 text-center mt-1">
              {hotel.reviewCount.toLocaleString()} reviews
            </p>
          )}
        </div>
      </div>

      {/* Hotel Details */}
      <div className="p-6">
        {/* Hotel Name & Stars */}
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">
            {hotel.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {hotel.stars}-Star Hotel
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="mb-4 text-gray-600">
          <p className="text-sm">{hotel.location.address}</p>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((amenity, index) => (
              <span
                key={index}
                className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-medium capitalize"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Price per night</span>
            <span className="text-xl font-bold text-gray-800">
              ${hotel.pricePerNight}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Total for {totalNights} {totalNights === 1 ? 'night' : 'nights'}
            </span>
            <span className="text-2xl font-bold text-teal-600">
              ${totalCost.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Book Now Button */}
        <button
          onClick={handleBookNow}
          className="w-full bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-600 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
