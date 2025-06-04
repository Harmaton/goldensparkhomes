'use client';
import React, { useState } from 'react';
import { Heart, Star, MapPin, Users, Bath, Home, Wifi, Car } from 'lucide-react';
import { properties, Property } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

const PropertyItemBox = ( property : Property) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation(); // Prevent triggering the card click
    setIsFavorite(!isFavorite);
  };


  return (
    <div 
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <Image 
          src={property.image} 
          alt={property.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Favorite Button */}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`} 
          />
        </button>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full">
          <span className="font-semibold">{property.price}</span>
          <span className="text-sm opacity-90">/night</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{property.bedrooms * 2 + 1} guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span>{property.bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms} bath</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-900">4.8</span>
            <span className="text-gray-500 text-sm">(124 reviews)</span>
          </div>
          <span className="text-sm text-gray-500">{property.area}</span>
        </div>

        {/* Amenities Preview */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1 text-gray-600">
            <Wifi className="w-4 h-4" />
            <span className="text-xs">WiFi</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Car className="w-4 h-4" />
            <span className="text-xs">Parking</span>
          </div>
          <span className="text-xs text-gray-400">+{property.amenities.length - 2} more</span>
        </div>

        {/* CTA Button */}
        <Link href={`/properties/${property.id}`} className="block">
        <button 
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

// Demo component showing multiple property boxes
const PropertyListings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Golden Homes Apartments
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our beautiful apartments in Thika, Kenya. Perfect for your next getaway.
          </p>
        </div>

        {properties.map((property) => (
          <PropertyItemBox key={property.id} {...property} />   
        ))}

      </div>
    </div>
  );
};

export default PropertyListings;