import {  Calendar, Home, MapPin, Star, Users, Wifi } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/sta/livingroom.jpg"
          alt="Luxury Airbnb living room in Thika, Kenya - Golden Spark Homes vacation rental"
          className="w-full h-full object-cover"
          width={3000}
          height={2000}
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <p className="text-yellow-400 text-lg mb-4 font-semibold uppercase tracking-wide">
                Premium Airbnb in Thika, Kenya
              </p>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Best Airbnb Thika
                <span className="block text-yellow-400">
                  Luxury Vacation Rentals
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-4 font-semibold">
                Golden Spark Homes - Your Perfect Stay in Thika
              </h2>
              
              <p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed max-w-3xl">
                Discover premium Airbnb accommodations in Thika, Kenya. Our luxury furnished apartments and family homes offer exceptional comfort near Blue Post Hotel, Chania Falls, and Thika town center. Experience world-class hospitality with verified hosts and 5-star amenities.
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 text-white/90">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm text-sm sm:text-base">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  <span>5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm text-sm sm:text-base">
                  <Wifi className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm text-sm sm:text-base">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                  <span>Family Friendly</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start mt-6 max-w-lg">
              <Link href="/properties" className="flex-1">
                <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black rounded-xl font-bold shadow-lg hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center gap-2 text-sm sm:text-lg">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Book Your Thika Airbnb</span>
                  <span className="sm:hidden">Book Now</span>
                </button>
              </Link>
              
              <Link href="/properties" className="flex-1">
                <button className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold shadow-lg hover:bg-white hover:text-black hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white flex items-center justify-center gap-2 text-sm sm:text-lg">
                  <Home className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">View All Properties</span>
                  <span className="sm:hidden">View Properties</span>
                </button>
              </Link>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-8 sm:mt-12 text-white/90 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
                <span className="font-semibold">Thika, Kiambu County</span>
              </div>
              <div className="h-4 w-px bg-white/30 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-yellow-400">2</span>
                <span className="hidden sm:inline">Premium Airbnb Properties Available</span>
                <span className="sm:hidden">Properties Available</span>
              </div>
              <div className="h-4 w-px bg-white/30 hidden lg:block"></div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current flex-shrink-0" />
                <span className="hidden sm:inline">Near Blue Post Hotel & Chania Falls</span>
                <span className="sm:hidden">Prime Location</span>
              </div>
            </div>

            {/* Local Attractions */}
            <div className="mt-6 sm:mt-8 text-white/80 text-xs sm:text-sm">
              <p>
                <strong className="text-yellow-400">Perfect Location:</strong> 
                <span className="hidden sm:inline"> Walking distance to Thika town center • 5 minutes to Blue Post Hotel • 
                15 minutes to Chania Falls • Easy access to Nairobi via Thika Road</span>
                <span className="sm:hidden"> Central Thika location with easy access to attractions</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;