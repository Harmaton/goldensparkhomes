import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                GoldenSpark Homes
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience luxury living in our carefully curated collection of premium properties. Your perfect getaway awaits.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Home</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Properties</a></li>
              <li><a href="#host" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Meet Host</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>0719139262</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>ivasmakeover2018@gmail.com</span>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Thika,Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-2" /> by Goldensparks homes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;