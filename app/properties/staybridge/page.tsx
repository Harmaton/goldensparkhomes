'use client'
import React, { useState, useEffect } from 'react';
import { Star, MapPin, Users, Bath, Home, Wifi, Car, Shield, Tv, Coffee, Thermometer,  } from 'lucide-react';
import Navigation from '@/app/components/navigation';
import Footer from '@/app/components/footer';
import Image from 'next/image';
const SunriseTwinApartmentsPage  = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev === property.images.length - 1 ? 0 : prev + 1));
  };

  const property = {
    id: 2,
    title: "Staybridge apartment",
    location: "Thika, Kenya",
    price: "KSH 5,000/night",
    priceUnit: "/night",
    image: "/sta/WhatsApp Image 2025-06-18 at 08.48.58_9f1b6d27.jpg",
    bedrooms: 2,
    bathrooms: 2,
    area: "1800 sqft",
    rating: 4.7,
    reviews: 64,
    host: "Evelyn Wanjira",
    hostImage: "/eve.jpg",
    amenities: ["Ample Basement Parking", "Smart TV", "Fast WiFi and Netflix", "Fully Equipped Kitchen", "24/7 Security","Hot shower"],
    description: "Welcome to Staybridge apartment ,offering colossal convinience and great comfort a real home to be in.",
    images: [
      "/sta/Balcony.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.48.58_9f1b6d27.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.48.59_7c50aa7d.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.48.59_d15de8f3.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.49.11_0542df40.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.49.11_cfa02307.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.49.11_e628467e.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.49.12_ace3ecb3.jpg"
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
    <div className="min-h-screen bg-white">
      <Navigation />
      
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
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative w-3/4 mx-auto h-64 sm:h-80 lg:h-96 mb-12 pl-8 rounded-xl overflow-hidden">



          {/* Slides */}
          {property.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
              height={100}
              width={100}
                src={image}
                alt={`Property image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {property.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-white w-5' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
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
                <Image 
                height={56}
                width={56}
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
                    height={56}
                    width={56}
                      src="data:image/jpeg;base64,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"
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Kevin Kamau</p>
                      <p className="text-sm text-gray-500">April 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700">I loved this apartment from the first night,I do not think your stay here can have any inconvinience,Evelyn was such a great host.</p>
                </div>
                
                <div className="p-4 border rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                    height={56}
                    width={56}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSAwnVwBjc1zlr9Z_WXKwjqeylcvlX4g_8A&s"
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">Catherine Wambui</p>
                      <p className="text-sm text-gray-500">March 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Evelyn is very commendable ,and her place an amazing abode ,I love Staybridge apartment.</p>
                </div>
              </div>
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

      {/* Google Maps */}
      <div className="w-full flex justify-center py-8 bg-gray-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1707344976!2d37.07465137349901!3d-1.0323230353982218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f4b1ad582e1%3A0x42d9e77b1f622684!2sStaybridge%20Apartments!5e0!3m2!1sen!2ske!4v1750146745820!5m2!1sen!2ske"
          width="600"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        />
      </div>

      <Footer />
    </div>
  );
};

export default SunriseTwinApartmentsPage;