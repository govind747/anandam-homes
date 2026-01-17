import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, Wifi, Car, Home, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MukteshwarProperties = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const properties = [
    {
      id: 1,
      name: "Himalayan Panorama Plots",
      description: "Spectacular plots with 360-degree Himalayan views. Perfect for luxury mountain retreats and meditation centers.",
      location: "Mukteshwar Temple Road",
      area: "300 sq yd",
      areaInSqFt: "2,700 sq ft",
      listingDate: "20 Feb 2024",
      status: "Available",
      amount: "₹9 Lakh",
      locationRating: 5,
      returnRating: 5,
      connectivityRating: 3,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["360° Mountain Views", "Temple Proximity", "Legal Freehold", "Peaceful Location"],
      nearbyAttractions: ["Mukteshwar Temple - 0.5km", "Chauli Ki Jali - 2km", "Fruit Research Station - 1km"]
    },
    {
      id: 2,
      name: "Himalayan Panorama Plots",
      description: "Larger plots for spacious mountain homes with fruit orchards. Ideal for organic farming and sustainable living.",
      location: "Mukteshwar Temple Road",
      area: "500 sq yd",
      areaInSqFt: "4,500 sq ft",
      listingDate: "20 Feb 2024",
      status: "Limited Units",
      amount: "₹15 Lakh",
      locationRating: 5,
      returnRating: 5,
      connectivityRating: 3,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["360° Mountain Views", "Orchard Space", "Legal Freehold", "Organic Farming"],
      nearbyAttractions: ["Mukteshwar Temple - 0.5km", "Chauli Ki Jali - 2km", "Fruit Research Station - 1km"]
    },
    {
      id: 3,
      name: "Valley View Camp Houses",
      description: "Pre-designed camp houses with modern amenities. Perfect for adventure tourism and weekend retreats.",
      location: "Sitla Valley, Mukteshwar",
      area: "400 sq yd + Camp House",
      areaInSqFt: "3,600 sq ft plot + 800 sq ft built-up",
      listingDate: "15 Jan 2024",
      status: "Available",
      amount: "₹12 Lakh",
      locationRating: 4,
      returnRating: 4,
      connectivityRating: 3,
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Camp House Ready", "Valley Views", "Adventure Base", "Modern Amenities"],
      nearbyAttractions: ["Sitla - 1km", "Adventure Camps - 0.5km", "Trekking Trails - nearby"]
    },
    {
      id: 4,
      name: "Sunrise Point Plots",
      description: "Premium plots facing east for spectacular sunrise views. Elevated location with cool mountain breeze.",
      location: "Sunrise Point, Mukteshwar",
      area: "250 sq yd",
      areaInSqFt: "2,250 sq ft",
      listingDate: "28 Dec 2023",
      status: "Available",
      amount: "₹7.5 Lakh",
      locationRating: 5,
      returnRating: 4,
      connectivityRating: 2,
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Sunrise Views", "Elevated Location", "Cool Climate", "Peaceful Environment"],
      nearbyAttractions: ["Sunrise Point - 0.2km", "Mukteshwar - 3km", "Bhalu Gaad Falls - 4km"]
    },
    {
      id: 5,
      name: "Organic Farm Retreat",
      description: "Ready farmhouse with organic fruit orchard. Sustainable living with modern comforts and mountain views.",
      location: "Ramgarh Road, Mukteshwar",
      area: "800 sq yd + 3BHK",
      areaInSqFt: "7,200 sq ft plot + 1,800 sq ft built-up",
      listingDate: "05 Feb 2024",
      status: "Re-sale",
      amount: "₹28 Lakh",
      locationRating: 4,
      returnRating: 4,
      connectivityRating: 3,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["3BHK Ready", "Organic Orchard", "Mountain Views", "Sustainable Living"],
      nearbyAttractions: ["Ramgarh - 8km", "Fruit Orchards - surrounding", "Mukteshwar - 5km"]
    },
    {
      id: 6,
      name: "Adventure Base Plots",
      description: "Strategic plots near adventure activity centers. Perfect for tourism business or personal adventure base.",
      location: "Adventure Valley, Mukteshwar",
      area: "350 sq yd",
      areaInSqFt: "3,150 sq ft",
      listingDate: "10 Jan 2024",
      status: "Sold",
      amount: "₹8.5 Lakh",
      locationRating: 4,
      returnRating: 5,
      connectivityRating: 3,
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Adventure Tourism", "Business Potential", "Legal Freehold", "Activity Centers"],
      nearbyAttractions: ["Rock Climbing - 0.5km", "Zip Line - 1km", "Trekking Base - nearby"]
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
                <span className="text-emerald-600 block">Mukteshwar</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Himalayan Paradise - Experience the ultimate mountain retreat in Mukteshwar, offering 
                spectacular 360-degree Himalayan views, cool climate, and complete tranquility.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5 text-emerald-600" />
                  <span>8 hours from Delhi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-emerald-600" />
                  <span>Mountain Views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-emerald-600" />
                  <span>Adventure Hub</span>
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
              Mountain View Properties
            </h2>
            <p className="text-xl text-gray-600">
              Spectacular Himalayan views and peaceful mountain living
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
                Why Choose Mukteshwar?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>360° Himalayan Views:</strong> Unparalleled mountain vistas including Nanda Devi peaks
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Cool Climate:</strong> Pleasant weather year-round, perfect escape from heat
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Adventure Hub:</strong> Rock climbing, trekking, and adventure sports nearby
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Organic Living:</strong> Fruit orchards and organic farming opportunities
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mukteshwar mountain views"
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
              Experience Mukteshwar's Magic
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Witness the spectacular Himalayan sunrise and sunset from your own mountain property. 
              Schedule a visit to experience the tranquility and beauty of Mukteshwar.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Mukteshwar Site Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default MukteshwarProperties;