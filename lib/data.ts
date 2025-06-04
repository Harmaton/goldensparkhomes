  export const properties = [
    {
      id: 1,
      title: "Staybridge Apartments",
      url: 'staybridge',
      location: "Thika, Kenya",
      price: "KSH 4,500",
      priceUnit: "/night",
      image: "/sta/kitchen.jpg",
      bedrooms: 2,
      bathrooms: 2,
      area: "1800 sqft",
      rating: 4.8,
      reviews: 124,
      host: "Evelyn Wanjiku",
      hostImage: "https://images.unsplash.com/photo-1494790108755-2616b412c8a1?w=150&h=150&fit=crop&crop=face",
      amenities: ["High-Speed WiFi", "Private Parking", "Gourmet Kitchen", "24/7 Security", "Instant Hot Shower"],
      description: "Experience luxury living in our beautifully appointed Staybridge Apartments. Located in the heart of Thika, this spacious 2-bedroom apartment offers modern amenities and comfortable accommodations for your perfect getaway.",
      images: [
        "/sta/kitchen.jpg",
        "/sta/livingroom.jpg",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Sunrise Twin Apartments",
      url: 'sunrise-twins',
      location: "Thika, Kenya",
      price: "KSH 3,000",
      priceUnit: "/night",
      image: "/sta/livingroom.jpg",
      bedrooms: 1,
      bathrooms: 2,
      area: "1200 sqft",
      rating: 4.6,
      reviews: 89,
      host: "Evelyn Wanjiku",
      hostImage: "https://images.unsplash.com/photo-1494790108755-2616b412c8a1?w=150&h=150&fit=crop&crop=face",
      amenities: ["Ample Basement Parking", "Smart TV", "Fast WiFi and Netflix", "Fully Equipped Kitchen", "24/7 Security"],
      description: "Discover comfort and convenience at Sunrise Twin Apartments. This cozy 1-bedroom space is perfect for couples or solo travelers seeking a peaceful retreat with modern amenities and excellent connectivity.",
      images: [
        "/sta/livingroom.jpg",
        "/sta/kitchen.jpg",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&h=600&fit=crop"
      ]
    }
  ];


  export interface Property {
    id: number;
    title: string;
    location: string;
    price: string;
    priceUnit: string;
    image: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    rating: number;
    reviews: number;
    host: string;
    hostImage: string;
    amenities: string[];
    description: string;
    images: string[];
  }