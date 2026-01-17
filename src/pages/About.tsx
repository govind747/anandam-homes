import { motion } from 'framer-motion';
import { Heart, Leaf, Shield, Mountain, Users, Award } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const values = [
    {
      icon: Heart,
      title: "Passionate About Nature",
      description: "We believe everyone deserves a peaceful retreat in nature's lap"
    },
    {
      icon: Leaf,
      title: "Sustainable Living",
      description: "Promoting eco-friendly development that preserves natural beauty"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "100% legal properties with clear documentation and honest dealings"
    },
    {
      icon: Mountain,
      title: "Himalayan Heritage",
      description: "Deep respect for the cultural and natural heritage of Uttarakhand"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "15+", label: "Prime Locations" },
    { number: "5", label: "Years Experience" },
    { number: "100%", label: "Legal Properties" }
  ];

  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                Our Philosophy of 
                <span className="text-emerald-600 block">Slow Living</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                AnandamEstate was born from a simple belief: that everyone deserves a peaceful sanctuary 
                where they can reconnect with nature, breathe clean mountain air, and live life at their own pace.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Mountain className="h-6 w-6 text-emerald-600" />
                  <span className="font-medium text-gray-900">Himalayan Properties</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-emerald-600" />
                  <span className="font-medium text-gray-900">100% Legal</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Peaceful mountain landscape"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="font-semibold text-gray-900">Trusted by</p>
                    <p className="text-2xl font-bold text-emerald-600">500+ Families</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Why Uttarakhand for Your Second Home?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The land of gods offers more than just scenic beauty - it's a lifestyle transformation waiting to happen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div 
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Pure Air, Pure Life
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Clean Mountain Air:</strong> Breathe air that's 90% cleaner than urban environments, 
                    naturally purified by dense forest cover.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Natural Water Sources:</strong> Crystal clear mountain springs provide the purest water, 
                    free from urban pollutants.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Himalayan Sunrise:</strong> Wake up to golden sunrises painting the snow-capped peaks, 
                    a daily reminder of nature's magnificence.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mountain sunrise"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Peaceful mountain community"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Perfect for Modern Needs
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Work from Paradise:</strong> High-speed internet connectivity makes remote work seamless 
                    from your mountain retreat.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Retirement Haven:</strong> Peaceful environment with excellent healthcare facilities 
                    nearby for a comfortable golden age.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Weekend Escapes:</strong> Just a few hours from Delhi NCR, making regular visits 
                    convenient and refreshing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              Built on trust, sustainability, and a deep love for the Himalayas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <value.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Trust Built Over Years
            </h2>
            <p className="text-xl text-emerald-100">
              Numbers that reflect our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Complete Legal Security & Freehold Ownership
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your investment is protected with comprehensive legal documentation and clear freehold titles. 
                We ensure every property transaction is transparent, legal, and secure.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Clear Title Deeds</h3>
                    <p className="text-gray-600">All properties come with verified and clear title documents</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Government Approved</h3>
                    <p className="text-gray-600">All developments are approved by local authorities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Legal Support</h3>
                    <p className="text-gray-600">Complete legal assistance throughout the buying process</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-stone-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Legal Documentation Included</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Registry & Mutation Documents</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>NOC from Local Authorities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Encumbrance Certificate</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Survey Settlement Records</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Power of Attorney (if applicable)</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;