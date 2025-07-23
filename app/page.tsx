import { Metadata } from 'next';
import Navigation from "./components/navigation";
import Hero from "./components/hero-section";
import Properties from "./components/properties";
import Footer from "./components/footer";
import GuestReviews from "./components/testimonials";
import WhatsAppButton from "./components/whatsapp-floating-button";
import Map from "./components/map";

// Basic SEO Metadata - this is the minimum you need

 export const metadata: Metadata = {
  title: 'Airbnb Thika - Best Vacation Rentals & Short Stays in Kenya',
  description: 'Discover premium Airbnb accommodations in Thika, Kenya. Luxury furnished apartments, family homes, and budget-friendly stays with verified hosts. Book your perfect vacation rental near Thika town, Blue Post Hotel, and Chania Falls.',
  keywords: [
    'Airbnb Thika',
    'vacation rentals Thika',
    'short-term rental Thika',
    'Thika accommodation',
    'Kenya Airbnb',
    'furnished apartments Thika',
    'holiday homes Thika',
    'Thika town accommodation',
    'Blue Post Hotel accommodation',
    'Chania Falls stays',
    'Kiambu County rentals',
    'business accommodation Thika',
    'family vacation Thika',
    'luxury stays Thika Kenya'
  ].join(', '),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Properties />
      <GuestReviews />
      <Map />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}