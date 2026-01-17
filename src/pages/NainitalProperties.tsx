import { motion } from 'framer-motion';
import { MapPin, Calendar, Star, Wifi, Car, Home, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NainitalProperties = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const properties = [
    {
      id: 1,
      name: "Lake View Premium Plots",
      description: "Exclusive plots with partial lake views and mountain backdrop. Prime location for luxury mountain homes.",
      location: "Mallital, Nainital",
      area: "200 sq yd",
      areaInSqFt: "1,800 sq ft",
      listingDate: "12 Feb 2024",
      status: "Available",
      amount: "₹8 Lakh",
      locationRating: 5,
      returnRating: 5,
      connectivityRating: 4,
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Lake View", "Mountain Backdrop", "Legal Freehold", "Tourist Area"],
      nearbyAttractions: ["Naini Lake - 1km", "Mall Road - 0.5km", "Naina Devi Temple - 1.5km"]
    },
    {
      id: 2,
      name: "Lake View Premium Plots",
      description: "Larger plots perfect for spacious lake-view homes. Excellent rental potential due to tourist location.",
      location: "Mallital, Nainital",
      area: "300 sq yd",
      areaInSqFt: "2,700 sq ft",
      listingDate: "12 Feb 2024",
      status: "Limited Units",
      amount: "₹12 Lakh",
      locationRating: 5,
      returnRating: 5,
      connectivityRating: 4,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Lake View", "Mountain Backdrop", "Legal Freehold", "Tourist Area"],
      nearbyAttractions: ["Naini Lake - 1km", "Mall Road - 0.5km", "Naina Devi Temple - 1.5km"]
    },
    {
      id: 3,
      name: "Tallital Hillside Plots",
      description: "Peaceful hillside location away from tourist crowds but with easy access to lake and town.",
      location: "Tallital, Nainital",
      area: "250 sq yd",
      areaInSqFt: "2,250 sq ft",
      listingDate: "18 Jan 2024",
      status: "Available",
      amount: "₹6.5 Lakh",
      locationRating: 4,
      returnRating: 4,
      connectivityRating: 4,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Hillside Location", "Peaceful Area", "Legal Freehold", "Good Access"],
      nearbyAttractions: ["Tallital - 0.5km", "Naini Lake - 2km", "Tiffin Top - 3km"]
    },
    {
      id: 4,
      name: "Snow View Residency",
      description: "Premium plots with direct snow-capped mountain views. Perfect for luxury vacation homes.",
      location: "Snow View, Nainital",
      area: "400 sq yd",
      areaInSqFt: "3,600 sq ft",
      listingDate: "25 Dec 2023",
      status: "Available",
      amount: "₹16 Lakh",
      locationRating: 5,
      returnRating: 5,
      connectivityRating: 3,
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Snow View", "Premium Location", "Large Plot", "Mountain Views"],
      nearbyAttractions: ["Snow View Point - 0.5km", "Naini Lake - 3km", "Mall Road - 2.5km"]
    },
    {
      id: 5,
      name: "Nainital Lake View Farmhouse",
      description: "Ready 2BHK farmhouse with stunning lake views. Fully furnished and rental-ready property.",
      location: "Ayarpatta, Nainital",
      area: "500 sq yd + 2BHK",
      areaInSqFt: "4,500 sq ft plot + 1,400 sq ft built-up",
      listingDate: "08 Feb 2024",
      status: "Re-sale",
      amount: "₹35 Lakh",
      locationRating: 5,
      returnRating: 5,
      connectivityRating: 4,
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["2BHK Ready", "Lake View", "Furnished", "Rental Income", "Garden"],
      nearbyAttractions: ["Naini Lake - 1.5km", "Rope Way - 1km", "Governor House - 2km"]
    },
    {
      id: 6,
      name: "Bhimtal Road Plots",
      description: "Strategic location plots on the way to Bhimtal. Great for weekend homes with easy accessibility.",
      location: "Bhimtal Road, Nainital",
      area: "180 sq yd",
      areaInSqFt: "1,620 sq ft",
      listingDate: "30 Jan 2024",
      status: "Sold",
      amount: "₹4.5 Lakh",
      locationRating: 4,
      returnRating: 4,
      connectivityRating: 5,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Highway Access", "Weekend Home", "Legal Freehold", "Good Connectivity"],
      nearbyAttractions: ["Bhimtal - 10km", "Sattal - 15km", "Naukuchiatal - 12km"]
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
                <span className="text-emerald-600 block">Nainital</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Lake City of India - Own a piece of paradise in Nainital, famous for its pristine lake, 
                colonial charm, and year-round pleasant weather. Perfect for vacation homes and rental income.
              </p>
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5 text-emerald-600" />
                  <span>7 hours from Delhi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="h-5 w-5 text-emerald-600" />
                  <span>Tourist Hub</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5 text-emerald-600" />
                  <span>Rental Income</span>
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
              Lake View Properties
            </h2>
            <p className="text-xl text-gray-600">
              Premium properties with lake views and excellent rental potential
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
                Why Choose Nainital?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Famous Tourist Destination:</strong> Consistent rental income from year-round tourism
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Beautiful Naini Lake:</strong> Properties with lake views command premium prices
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Pleasant Climate:</strong> Cool summers and mild winters, perfect year-round weather
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Colonial Heritage:</strong> Rich history and architecture add to property value
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nainital lake view"
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
              Ready to Own in Nainital?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Experience the beauty of Nainital firsthand. Schedule a site visit to explore lake view 
              properties and understand the rental income potential of this premier tourist destination.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Nainital Site Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default NainitalProperties;