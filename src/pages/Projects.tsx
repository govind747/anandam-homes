import { motion } from 'framer-motion';
import { MapPin, Maximize, Mountain, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const properties = [
    {
      id: 1,
      title: "Himalayan View Plots - Haldwani",
      location: "Haldwani, Uttarakhand",
      type: "Freehold Plots",
      sizes: ["125 sq yd", "240 sq yd", "500 sq yd"],
      price: "Starting ₹2.5 Lakh",
      features: ["Mountain View", "Legal Freehold", "Road Connectivity", "Electricity Available"],
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "Available"
    },
    {
      id: 2,
      title: "Nainital Lake View Farmhouse",
      location: "Nainital, Uttarakhand",
      type: "2BHK Farmhouse",
      sizes: ["500 sq yd with 2BHK", "Lake View", "Fully Furnished"],
      price: "Starting ₹15 Lakh",
      features: ["Lake View", "2BHK Ready", "Garden Space", "Parking"],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "Limited Units"
    },
    {
      id: 3,
      title: "Mukteshwar Mountain Retreat",
      location: "Mukteshwar, Uttarakhand",
      type: "Camp Houses",
      sizes: ["Customizable Design", "Mountain Views", "Eco-Friendly"],
      price: "Starting ₹8 Lakh",
      features: ["Himalayan Views", "Eco Design", "Adventure Base", "Peace & Quiet"],
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "Pre-Launch"
    },
    {
      id: 4,
      title: "Champawat Valley Plots",
      location: "Champawat, Uttarakhand",
      type: "Freehold Plots",
      sizes: ["125 sq yd", "240 sq yd", "400 sq yd"],
      price: "Starting ₹1.8 Lakh",
      features: ["Valley Views", "Ancient Heritage", "Clean Air", "Investment Grade"],
      image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "Available"
    },
    {
      id: 5,
      title: "Haldwani Canopy Homes",
      location: "Haldwani, Uttarakhand",
      type: "Canopy Houses",
      sizes: ["Tree-house Style", "Elevated Living", "Nature Integration"],
      price: "Starting ₹12 Lakh",
      features: ["Among Trees", "Unique Design", "Elevated Views", "Modern Amenities"],
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "Coming Soon"
    },
    {
      id: 6,
      title: "Nainital Premium Plots",
      location: "Nainital, Uttarakhand",
      type: "Premium Plots",
      sizes: ["300 sq yd", "500 sq yd", "800 sq yd"],
      price: "Starting ₹5 Lakh",
      features: ["Lake Proximity", "Premium Location", "High Appreciation", "Tourist Hub"],
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      status: "Available"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Limited Units':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pre-Launch':
        return 'bg-blue-100 text-blue-800';
      case 'Coming Soon':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Premium Mountain
              <span className="text-emerald-600 block">Properties</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover handpicked properties across Uttarakhand's most serene locations. Each property comes 
              with clear legal titles and stunning natural surroundings.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                <span>100% Legal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mountain className="h-5 w-5 text-emerald-600" />
                <span>Mountain Views</span>
              </div>
              <div className="flex items-center space-x-2">
                <Maximize className="h-5 w-5 text-emerald-600" />
                <span>Freehold Ownership</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                    {property.status}
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {property.type}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{property.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-emerald-600">{property.price}</p>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Available Options:</p>
                    <div className="flex flex-wrap gap-2">
                      {property.sizes.map((size, sizeIndex) => (
                        <span
                          key={sizeIndex}
                          className="bg-stone-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {property.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center"
                    >
                      Enquire Now
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center border border-gray-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-600 px-4 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Choose Your Property Type
            </h2>
            <p className="text-xl text-gray-600">
              From plots to ready homes, find the perfect match for your mountain dream
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Freehold Plots",
                description: "Build your dream home",
                sizes: "125 - 500 sq yd",
                price: "₹1.8L onwards",
                icon: "🏞️"
              },
              {
                title: "Farmhouses",
                description: "Ready 2BHK homes",
                sizes: "500 sq yd + 2BHK",
                price: "₹15L onwards",
                icon: "🏡"
              },
              {
                title: "Camp Houses",
                description: "Adventure base camps",
                sizes: "Customizable",
                price: "₹8L onwards",
                icon: "🏕️"
              },
              {
                title: "Canopy Homes",
                description: "Elevated tree houses",
                sizes: "Premium designs",
                price: "₹12L onwards",
                icon: "🌲"
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <div className="text-sm text-emerald-600 font-medium mb-1">{type.sizes}</div>
                <div className="text-lg font-bold text-gray-900 mb-4">{type.price}</div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Visit Your Future Home?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Schedule a site visit and experience these beautiful locations yourself. Our team will arrange 
              comfortable transportation and guided tours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Book Site Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;