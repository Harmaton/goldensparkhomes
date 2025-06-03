import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
          <div className="max-w-2xl">
            <div className="animate-fade-in">
              <p className="text-white/90 text-lg mb-4 font-medium">
                Welcome to GoldenSpark Homes
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Luxury Living
                <span className="block text-yellow-400">
                  Redefined
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience unparalleled comfort in our carefully curated collection of premium homes. Each property offers modern amenities and stunning design.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                View Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-yellow-500 hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-200"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
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
                <span className="ml-2">Available Homes | (Airbnbs)</span>
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