import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';

const GuestReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "James Kamau",
      date: "March 2025",
      rating: 5,
      review: "Amazing stay at Golden Homes! The apartment was clean, spacious, and had all the amenities we needed. Evelyn was a wonderful host, very responsive and accommodating. Will definitely return!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Njeri",
      date: "February 2025",
      rating: 5,
      review: "Perfect location in Thika with great amenities. The apartment was spotless and beautifully decorated. Evelyn made sure our stay was comfortable and enjoyable. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Michael Otieno",
      date: "January 2025",
      rating: 4,
      review: "Great experience overall. The apartment had everything we needed and the location was convenient. Evelyn was helpful throughout our stay. Would consider staying again.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Grace Wambui",
      date: "December 2024",
      rating: 5,
      review: "Exceptional service and beautiful apartment! The space was modern, clean, and had a lovely view. Evelyn went above and beyond to ensure we had everything we needed. Truly memorable stay!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            What Our Guests Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Read reviews from guests who have experienced staying at our Golden Homes apartments.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 transform hover:-translate-y-1"
              >
                {/* Header with profile */}
                <div className="flex items-center mb-6">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={600}
                  height={400}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {review.name}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {renderStars(review.rating)}
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  {review.review}
                </p>
              </div>
            ))}
          </div>

          {/* Blur overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 via-gray-100/80 to-transparent pointer-events-none"></div>
          
          {/* More reviews indicator */}
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
              <div className="flex -space-x-2 mr-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-600">+</span>
                </div>
              </div>
              <span className="text-gray-600 font-medium">
                View 47 more reviews
              </span>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
              <span className="font-semibold">4.8 average rating</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center">
              <span className="font-semibold">200+ happy guests</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center">
              <span className="font-semibold">95% recommend us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestReviews;