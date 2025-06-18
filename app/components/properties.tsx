import { Bed, Bath, Square, Wifi, Car, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const Properties = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional homes designed for the ultimate luxury experience.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                  {property.price}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-6">{property.location}</p>
                
                <div className="flex items-center gap-6 mb-6 text-gray-700">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5" />
                    <span>{property.bedrooms} beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5" />
                    <span>{property.bathrooms} baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {property.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        {index === 0 && <Wifi className="h-4 w-4" />}
                        {index === 1 && <Car className="h-4 w-4" />}
                        {index === 2 && <Coffee className="h-4 w-4" />}
                        {index === 3 && <Square className="h-4 w-4" />}
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
               <Link href={`/properties/${property.url}`} className="w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  View This Property
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
