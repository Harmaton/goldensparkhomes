import {  Calendar, Home, MapPin } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/sta/livingroom.jpg"
          alt="Luxury living room interior"
          className="w-full h-full object-cover"
          width={3000}
          height={2000}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-1xl">
            <div className="animate-fade-in">
              <br />
              <p className="text-white/90 text-lg mb-4 font-semibold">
                Welcome to GoldenSpark Homes
              </p>
              <br />
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Golden spark homes

                <span className="block text-yellow-400">
                  Redefined by Evelyn Wanjira
                </span>
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Golden spark Homes offers a unique blend of luxury and comfort ,high quality sevrices, and a commitment to our guests.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/properties" className="flex-1">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-xl font-bold shadow-lg hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Now
                </button>
              </Link>
              
              <Link href="/properties" className="flex-1">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-xl font-bold shadow-lg hover:from-yellow-500 hover:to-yellow-700 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 flex items-center justify-center gap-2">
                  <Home className="w-5 h-5" />
                  View Properties
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 mt-12 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>Thika, Kenya</span>
              </div>
              <div className="h-4 w-px bg-white/30"></div>
              <div>
                <span className="text-2xl font-bold text-yellow-400">2</span>
                <span className="ml-2">Available  GoldensparkHomes | (Airbnbs)</span>
              </div>
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