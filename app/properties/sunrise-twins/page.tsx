'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Share, Star, MapPin, Users, Bath, Home, Wifi, Car, Shield, Tv, Coffee, Thermometer, ArrowLeft } from 'lucide-react';
import Navigation from '@/app/components/navigation';
import Footer from '@/app/components/footer';

const SunriseTwinApartmentsPage = () => {
  const property = {
    id: 2,
    title: "Sunrise Twin Apartments",
    location: "Thika, Kenya",
    price: "KSH 3,000",
    priceUnit: "/night",
    image: "/sta/livingroom.jpg",
    bedrooms: 1,
    bathrooms: 2,
    area: "1200 sqft",
    rating: 4.6,
    reviews: 89,
    host: "Evelyn Wanjiku",
    hostImage: "/eve.jpg",
    amenities: ["Ample Basement Parking", "Smart TV", "Fast WiFi and Netflix", "Fully Equipped Kitchen", "24/7 Security"],
    description: "Discover comfort and convenience at Sunrise Twin Apartments. This cozy 1-bedroom space is perfect for couples or solo travelers seeking a peaceful retreat with modern amenities and excellent connectivity.",
    images: [
      "/sta/livingroom.jpg",
      "/sta/kitchen.jpg",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&h=600&fit=crop"
    ]
  };

  const getAmenityIcon = (amenity: string) => {
    const amenityLower = amenity.toLowerCase();
    if (amenityLower.includes('wifi')) return <Wifi className="w-5 h-5" />;
    if (amenityLower.includes('parking')) return <Car className="w-5 h-5" />;
    if (amenityLower.includes('security')) return <Shield className="w-5 h-5" />;
    if (amenityLower.includes('tv') || amenityLower.includes('netflix')) return <Tv className="w-5 h-5" />;
    if (amenityLower.includes('kitchen')) return <Coffee className="w-5 h-5" />;
    if (amenityLower.includes('shower') || amenityLower.includes('hot')) return <Thermometer className="w-5 h-5" />;
    return <Home className="w-5 h-5" />;
  };

  const basePricePerPerson = parseInt(property.price.replace(/[^\d]/g, ''));
  const cleaningFee = 1200;
  const serviceFee = 1800;

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');
  const [isReserveDisabled, setIsReserveDisabled] = useState(true);

  const nights = checkIn && checkOut ? Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const numGuests = parseInt(guests) || 0;
  const totalBasePrice = nights > 0 && numGuests > 0 ? basePricePerPerson * nights * numGuests : 0;
  const total = totalBasePrice + cleaningFee + serviceFee;

  useEffect(() => {
    // Enable Reserve button only if all fields are filled and nights is valid
    setIsReserveDisabled(!checkIn || !checkOut || !guests || nights <= 0);
  }, [checkIn, checkOut, guests, nights]);

  const handleReserve = () => {
    if (isReserveDisabled) return;

    const message = encodeURIComponent(
      `Reservation for ${property.title}\n` +
      `Location: ${property.location}\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Guests: ${guests}\n` +
      `Price: ${property.price} x ${nights} nights x ${guests} guests = KSH ${totalBasePrice}\n` +
      `Cleaning Fee: KSH ${cleaningFee}\n` +
      `Service Fee: KSH ${serviceFee}\n` +
      `Total: KSH ${total}\n` +
      `Please confirm my booking.`
    );
    const whatsappNumber = "+254719139262";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="flex flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a href="/properties" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
          </a>
          <Image
            src="/gsh-logo-p.png"
            alt="Sunrise Twin Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="font-medium">{property.rating}</span>
                  <span>({property.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="underline">{property.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                <Share className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                <span className="text-sm font-medium">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 h-64 sm:h-80 lg:h-96 mb-12 rounded-xl overflow-hidden">
          <div className="col-span-1 sm:col-span-2 row-span-2">
            <img 
              src={property.images[0]} 
              alt="Main property image"
              className="w-full h-full object-cover hover:brightness-110 transition-all cursor-pointer"
            />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative hidden sm:block">
              <img 
                src={image} 
                alt={`Property image ${index + 2}`}
                className="w-full h-full object-cover hover:brightness-110 transition-all cursor-pointer"
              />
              {index === 3 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button className="bg-yellow-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                    View all photos
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Info */}
            <div className="border-b pb-8 mb-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                    Entire apartment hosted by {property.host}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{property.bedrooms * 2 + 1} guests</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <span>{property.bedrooms} bedroom</span>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms} bathrooms</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <span>{property.area}</span>
                  </div>
                </div>
                <img 
                  src={property.hostImage} 
                  alt={property.host}
                  className="w-14 h-14 rounded-full object-cover mt-4 sm:mt-0"
                />
              </div>
              
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="border-b pb-8 mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">What this place offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    {getAmenityIcon(amenity)}
                    <span className="text-gray-800">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Preview */}
            <div className="border-b pb-8 mb-8">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-6 h-6 fill-black text-black" />
                <span className="text-xl sm:text-2xl font-semibold">{property.rating}</span>
                <span className="text-xl sm:text-2xl font-semibold">·</span>
                <span className="text-xl sm:text-2xl font-semibold">{property.reviews} reviews</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 border rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Peter Mwangi</p>
                      <p className="text-sm text-gray-500">April 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Cozy and well-equipped apartment. Great location and excellent host communication!</p>
                </div>
                
                <div className="p-4 border rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Grace Wanjira</p>
                      <p className="text-sm text-gray-500">March 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Perfect for a quiet getaway. Clean, comfortable, and all amenities as described.</p>
                </div>
              </div>
              
              <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors">
                Show all {property.reviews} reviews
              </button>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="border rounded-xl p-6 shadow-lg">
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-xl sm:text-2xl font-bold">{property.price}</span>
                  <span className="text-gray-600">{property.priceUnit}</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 border rounded-lg mb-4">
                  <div className="p-3 border-b sm:border-r sm:border-b-0">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Check-in</label>
                    <input 
                      type="date" 
                      className="w-full mt-1 text-sm" 
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                  <div className="p-3">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Check-out</label>
                    <input 
                      type="date" 
                      className="w-full mt-1 text-sm" 
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="border rounded-lg p-3 mb-6">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Guests</label>
                  <select 
                    className="w-full mt-1 text-sm"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                  </select>
                </div>
                
                <button 
                  onClick={handleReserve}
                  disabled={isReserveDisabled}
                  className={`w-full py-3 rounded-lg font-semibold text-base sm:text-lg transition-all mb-4 ${
                    isReserveDisabled
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-yellow-500 text-white hover:bg-yellow-600'
                  }`}
                >
                  Reserve
                </button>
                
                <p className="text-center text-gray-500 text-sm mb-4">You won&apos;t be charged yet</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>{property.price} x {nights} nights x {guests || 0} guests</span>
                    <span>KSH {totalBasePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>KSH {cleaningFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>KSH {serviceFee.toLocaleString()}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>KSH {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SunriseTwinApartmentsPage;