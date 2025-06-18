'use client'
import React, { useState, useEffect } from 'react';
import { Star, MapPin, Users, Bath, Home, Wifi, Car, Shield, Tv, Coffee, Thermometer,} from 'lucide-react';
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
    title: "Sunrise Twin Apartments both 1 bedroom and 2 bedroom",
    location: "Thika, Kenya",
    price: "KSH 3,000/night",
    priceUnit: "/night",
    image: "/sta/kitchen (4).jpg",
    bedrooms: 1,
    bathrooms: 2,
    area: "1800 sqft",
    rating: 4.7,
    reviews: 64,
    host: "Evelyn Wanjira",
    hostImage: "/eve.jpg",
    amenities: ["Ample Basement Parking", "Smart TV", "Fast WiFi and Netflix", "Fully Equipped Kitchen", "24/7 Security"],
    description: "Discover comfort and convenience at Sunrise Twin Apartments. This cozy 1-bedroom and 2-bedroom apartment is perfect for both short and long stays. Enjoy our modern facilities, feel at home here. NOTE:The two bedroom costs KSH4,500 per night and one bedroom KSH 3,000.",
    images: [
      "/sta/WhatsApp Image 2025-06-18 at 08.17.23_827ad278.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.17.23_ef475154.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.17.39_6a59be6b.jpg",
      "/sta/WhatsApp Image 2025-06-18 at 08.17.38_588a3d6a.jpg",
      "/sta/bedrooooom.jpg",
      "/sta/livingroom.jpg",
      "/sta/kiva.jpg",
      

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
        <div className="relative w-3/4 mx-auto h-64 sm:h-80 lg:h-96 mb-12 rounded-xl overflow-hidden">

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
                      src="data:image/jpeg;base64,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"
                      alt="Reviewer"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">John Wambugu</p>
                      <p className="text-sm text-gray-500">April 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Cozy and well-equipped apartment. Great location and excellent host communication!</p>
                </div>
                
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
                      <p className="font-medium">Tessy Njeri</p>
                      <p className="text-sm text-gray-500">March 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700">Perfect for a quiet getaway. Clean, comfortable, and all amenities as described.</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.172994914333!2d37.07309687349892!3d-1.0305197353970028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4fcec0db5a09%3A0xe21d6e512f44962e!2sSUNRISE%20TWINS%20APARTMENT%20-%20THIKA!5e0!3m2!1sen!2ske!4v1749971716471!5m2!1sen!2ske"
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