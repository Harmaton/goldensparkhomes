'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
            src={'/gsh-logo-p.png'}
            alt="GoldenSpark Homes Logo"
            width={150}
            height={150}
            
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">
                Home
              </Link>
              <Link href="/properties" className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium">
                Properties
              </Link>
              
              
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/properties" >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Book Now
            </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
              >
                Home
              </link>
              <link
                href="/properties"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
              >
                Properties
              </link>
              <link
                href="https://wa.me/254719139262"
                
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
              >
                Meet Host
              </link>
              <link
                href="https://wa.me/254719139262"
            
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-600 transition-colors duration-200"
              >
                Contact
              </link>
              <div className="px-3 py-2">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;