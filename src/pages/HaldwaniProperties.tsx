import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, Wifi, Car, Home, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HaldwaniProperties = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const properties = [
    {
      id: 1,
      name: "Himalayan View Plots - Phase 1",
      description: "Premium freehold plots with stunning mountain views and excellent connectivity. Perfect for building your dream mountain home.",
      location: "Kathgodam Road, Haldwani",
      area: "125 sq yd",
      areaInSqFt: "1,125 sq ft",
      listingDate: "15 Jan 2024",
      status: "Available",
      amount: "₹2.5 Lakh",
      locationRating: 5,
      returnRating: 4,
      connectivityRating: 5,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Mountain View", "Legal Freehold", "Road Connectivity", "Electricity Available"],
      nearbyAttractions: ["Gaula Barrage - 5km", "Haldwani Railway Station - 3km", "Kathgodam - 8km"]
    },
    {
      id: 2,
      name: "Himalayan View Plots - Phase 1",
      description: "Larger plots ideal for spacious homes with gardens. Premium location with all modern amenities.",
      location: "Kathgodam Road, Haldwani",
      area: "240 sq yd",
      areaInSqFt: "2,160 sq ft",
      listingDate: "15 Jan 2024",
      status: "Available",
      amount: "₹4.8 Lakh",
      locationRating: 5,
      returnRating: 4,
      connectivityRating: 5,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Mountain View", "Legal Freehold", "Road Connectivity", "Electricity Available"],
      nearbyAttractions: ["Gaula Barrage - 5km", "Haldwani Railway Station - 3km", "Kathgodam - 8km"]
    },
    {
      id: 3,
      name: "Himalayan View Plots - Phase 1",
      description: "Premium large plots perfect for farmhouse construction. Excellent investment opportunity with high appreciation potential.",
      location: "Kathgodam Road, Haldwani",
      area: "500 sq yd",
      areaInSqFt: "4,500 sq ft",
      listingDate: "15 Jan 2024",
      status: "Limited Units",
      amount: "₹10 Lakh",
      locationRating: 5,
      returnRating: 5,
      connectivityRating: 5,
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Mountain View", "Legal Freehold", "Road Connectivity", "Electricity Available"],
      nearbyAttractions: ["Gaula Barrage - 5km", "Haldwani Railway Station - 3km", "Kathgodam - 8km"]
    },
    {
      id: 4,
      name: "Gateway Residency Plots",
      description: "Strategic location plots near the main highway with excellent commercial potential and residential comfort.",
      location: "Rampur Road, Haldwani",
      area: "180 sq yd",
      areaInSqFt: "1,620 sq ft",
      listingDate: "20 Dec 2023",
      status: "Available",
      amount: "₹3.6 Lakh",
      locationRating: 4,
      returnRating: 5,
      connectivityRating: 5,
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Highway Access", "Commercial Potential", "Legal Freehold", "Water Connection"],
      nearbyAttractions: ["Haldwani Market - 2km", "Bus Stand - 1.5km", "Hospital - 1km"]
    },
    {
      id: 5,
      name: "Valley View Farmhouse",
      description: "Ready-to-move 2BHK farmhouse with beautiful valley views. Fully furnished with modern amenities.",
      location: "Kaladhungi Road, Haldwani",
      area: "500 sq yd + 2BHK",
      areaInSqFt: "4,500 sq ft plot + 1,200 sq ft built-up",
      listingDate: "10 Feb 2024",
      status: "Re-sale",
      amount: "₹18 Lakh",
      locationRating: 4,
      returnRating: 4,
      connectivityRating: 4,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["2BHK Ready", "Furnished", "Garden Space", "Parking", "Valley View"],
      nearbyAttractions: ["Jim Corbett Park - 15km", "Kaladhungi - 8km", "Nainital - 35km"]
    },
    {
      id: 6,
      name: "Sunrise Heights",
      description: "Elevated plots with panoramic mountain views. Perfect for those seeking tranquility with city convenience.",
      location: "Tallital Road, Haldwani",
      area: "300 sq yd",
      areaInSqFt: "2,700 sq ft",
      listingDate: "05 Jan 2024",
      status: "Sold",
      amount: "₹6 Lakh",
      locationRating: 5,
      returnRating: 4,
      connectivityRating: 4,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Elevated Location", "Panoramic Views", "Legal Freehold", "Peaceful Environment"],
      nearbyAttractions: ["Nainital - 30km", "Bhowali - 20km", "Sattal - 25km"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Limited Units':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Re-sale':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Sold':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                Properties in
                <span className="text-emerald-600 block">Haldwani</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Gateway to Kumaon Hills - Discover premium properties in Haldwani, the perfect blend of 
                urban convenience and natural beauty. Excellent connectivity to major cities and the Himalayas.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5 text-emerald-600" />
                  <span>6 hours from Delhi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-emerald-600" />
                  <span>Excellent Connectivity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-emerald-600" />
                  <span>Urban Amenities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Available Properties
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked properties with legal clarity and excellent investment potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(property.status)}`}>
                    {property.status}
                  </div>

                  {/* Amount Badge */}
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {property.amount}
                  </div>
                </div>

                <div className="p-6">
                  {/* Property Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
                  </div>

                  {/* Location & Area */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="flex items-center text-gray-600 text-sm mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.location}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Listed: {property.listingDate}
                      </div>
                    </div>
                    <div className="text-right md:text-left">
                      <div className="text-lg font-bold text-emerald-600">{property.area}</div>
                      <div className="text-sm text-gray-600">{property.areaInSqFt}</div>
                    </div>
                  </div>

                  {/* Ratings */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-stone-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-xs text-gray-600 mb-1">Location</div>
                      <div className="flex justify-center space-x-1">
                        {renderStars(property.locationRating)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-600 mb-1">Returns</div>
                      <div className="flex justify-center space-x-1">
                        {renderStars(property.returnRating)}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-600 mb-1">Connectivity</div>
                      <div className="flex justify-center space-x-1">
                        {renderStars(property.connectivityRating)}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-900 mb-2">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Nearby Attractions */}
                  <div className="mb-6">
                    <div className="text-sm font-medium text-gray-900 mb-2">Nearby Attractions:</div>
                    <div className="space-y-1">
                      {property.nearbyAttractions.map((attraction, attractionIndex) => (
                        <div key={attractionIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2 flex-shrink-0"></div>
                          {attraction}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    {property.status !== 'Sold' ? (
                      <>
                        <Link
                          to="/contact"
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center"
                        >
                          Enquire Now
                        </Link>
                        <a
                          href="tel:+919876543210"
                          className="flex items-center justify-center border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-4 py-3 rounded-lg transition-all duration-300"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                        <a
                          href="https://wa.me/919876543210"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center border border-green-600 text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-all duration-300"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </a>
                      </>
                    ) : (
                      <div className="flex-1 bg-gray-100 text-gray-500 px-4 py-3 rounded-lg font-medium text-center">
                        Property Sold
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Why Choose Haldwani?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Gateway to Kumaon:</strong> Perfect starting point for exploring the entire Kumaon region
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Excellent Connectivity:</strong> Major railway station and highway connectivity to all major cities
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Urban Amenities:</strong> Complete healthcare, education, and shopping facilities
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Investment Growth:</strong> Rapid development and infrastructure growth ensuring high returns
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Haldwani landscape"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Invest in Haldwani?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Schedule a site visit to explore these premium properties. Our team will arrange 
              comfortable transportation and guided tours of available plots and farmhouses.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Haldwani Site Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HaldwaniProperties;