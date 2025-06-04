'use client'
import React from 'react';
import Image from 'next/image';
import { Heart, Share, Star, MapPin, Users, Bath, Home, Wifi, Car, Shield, Tv, Coffee, Thermometer, ArrowLeft } from 'lucide-react';
import Navigation from '@/app/components/navigation';
import Footer from '@/app/components/footer';

const StaybridgeApartmentsPage = () => {
  const property = {
    id: 1,
    title: "Staybridge Apartments",
    location: "Thika, Kenya",
    price: "KSH 4,500",
    priceUnit: "/night",
    image: "/sta/kitchen.jpg",
    bedrooms: 2,
    bathrooms: 2,
    area: "1800 sqft",
    rating: 4.8,
    reviews: 124,
    host: "Evelyn Wanjiku",
    hostImage: "/eve.jpg",
    amenities: ["High-Speed WiFi", "Private Parking", "Gourmet Kitchen", "24/7 Security", "Instant Hot Shower"],
    description: "Experience luxury living in our beautifully appointed Staybridge Apartments. Located in the heart of Thika, this spacious 2-bedroom apartment offers modern amenities and comfortable accommodations for your perfect getaway.",
    images: [
      "/sta/kitchen.jpg",
      "/sta/livingroom.jpg",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
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

  const handleReserve = () => {
    const nights = 5;
    const basePrice = parseInt(property.price.replace(/[^\d]/g, ''));
    const cleaningFee = 1500;
    const serviceFee = 2000;
    const total = basePrice * nights + cleaningFee + serviceFee;

    const message = encodeURIComponent(
      `Reservation for ${property.title}\n` +
      `Location: ${property.location}\n` +
      `Price: ${property.price} x ${nights} nights = KSH ${basePrice * nights}\n` +
      `Cleaning Fee: KSH ${cleaningFee}\n` +
      `Service Fee: KSH ${serviceFee}\n` +
      `Total: KSH ${total}\n` +
      `Please confirm my booking.`
    );

    const whatsappNumber = "+254719139262"; // Replace with actual number
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className=" flex flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
          <a href="/properties" className="flex items-center gap-2">
           <ArrowLeft className="h-4 w-4 mr-2" />
          </a>
           <Image
              src="/gsh-logo-p.png"
              alt="Staybridge Logo"
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
                <Heart className={`w-4 h-4 fill-red-500 text-red-500`} />
                <span className="text-sm font-medium">Save</span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-2 h-64 sm:h-80 lg:h-96 mb-12 rounded-xl overflow-hidden">
          <div className="col-span-1 sm:col-span-2 row-span-2">
            <Image 
              src={property.images[0]} 
              width={600}
                  height={400}
              alt="Main property image"
              className="w-full h-full object-cover hover:brightness-110 transition-all cursor-pointer"
            />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative hidden sm:block">
              <Image 
                src={image} 
                width={600}
                  height={400}
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
                    <span>{property.bedrooms} bedrooms</span>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.bathrooms} bathrooms</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <span>{property.area}</span>
                  </div>
                </div>
                <Image 
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
                    <Image 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">James Kamau</p>
                      <p className="text-sm text-gray-500">March 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Amazing stay! Clean, spacious, and great amenities. Evelyn was very responsive.</p>
                </div>
                
                <div className="p-4 border rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Image 
                      src="https://images.unsplash.com/photo-1494790108755-2616b412c8a1?w=40&h=40&fit=crop&crop=face"
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Sarah Njeri</p>
                      <p className="text-sm text-gray-500">February 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Perfect location with great amenities. Beautifully decorated and comfortable.</p>
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
                    <input type="date" className="w-full mt-1 text-sm" />
                  </div>
                  <div className="p-3">
                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Check-out</label>
                    <input type="date" className="w-full mt-1 text-sm" />
                  </div>
                </div>
                
                <div className="border rounded-lg p-3 mb-6">
                  <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Guests</label>
                  <select className="w-full mt-1 text-sm">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                    <option>5 guests</option>
                  </select>
                </div>
                
                <button 
                  onClick={handleReserve}
                  className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-yellow-600 transition-all mb-4"
                >
                  Reserve
                </button>
                
                <p className="text-center text-gray-500 text-sm mb-4">You won&apos;t be charged yet</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>{property.price} x 5 nights</span>
                    <span>KSH {parseInt(property.price.replace(/[^\d]/g, '')) * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>KSH 1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>KSH 2,000</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>KSH {parseInt(property.price.replace(/[^\d]/g, '')) * 5 + 3500}</span>
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

export default StaybridgeApartmentsPage;