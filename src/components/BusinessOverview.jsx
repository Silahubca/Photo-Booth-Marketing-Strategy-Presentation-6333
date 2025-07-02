import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCamera, FiVideo, FiPackage, FiMapPin, FiUsers, FiBriefcase } = FiIcons;

const BusinessOverview = () => {
  const services = [
    {
      icon: FiCamera,
      title: "Photo Booth Rentals",
      description: "Modern 360° photo booths, Podium Roamer+ booths, and customizable branding options",
      features: ["360° Technology", "Custom Branding", "Premium Equipment", "Professional Setup"]
    },
    {
      icon: FiVideo,
      title: "Drone Videography",
      description: "Cinematic aerial footage for weddings, corporate events, and festivals",
      features: ["Expert Pilots: Jordan & Kitz", "Cinematic Quality", "Event Specialization", "Professional Editing"]
    },
    {
      icon: FiPackage,
      title: "Combined Packages",
      description: "Seamlessly integrated photo booth and drone services for cohesive event media",
      features: ["All-in-One Solution", "Seamless Integration", "Cost Effective", "Single Point of Contact"]
    }
  ];

  const markets = [
    { name: "Vancouver", type: "Primary Market" },
    { name: "Victoria", type: "Key Market" },
    { name: "Whistler", type: "Premium Market" },
    { name: "Burnaby", type: "Growing Market" },
    { name: "Surrey", type: "Expanding Market" }
  ];

  const clientTypes = [
    { icon: FiUsers, name: "Weddings", description: "Premium wedding experiences" },
    { icon: FiBriefcase, name: "Corporate Events", description: "Professional brand activations" },
    { icon: FiCamera, name: "Festivals", description: "Large-scale event coverage" },
    { icon: FiPackage, name: "Private Parties", description: "Intimate celebrations" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Business Overview
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Pose Photobooths specializes in delivering premium event experiences through 
            cutting-edge photo booth rentals and drone videography services.
          </p>
        </motion.div>

        {/* Core Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Core Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <SafeIcon icon={service.icon} className="h-12 w-12 text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-white/80 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/70">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Markets & Client Types */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Key Markets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <SafeIcon icon={FiMapPin} className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-6">Key Markets</h3>
            <div className="space-y-4">
              {markets.map((market, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-white font-semibold">{market.name}</span>
                  <span className="text-purple-300 text-sm">{market.type}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Client Types */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <SafeIcon icon={FiUsers} className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-6">Client Portfolio</h3>
            <div className="space-y-4">
              {clientTypes.map((client, index) => (
                <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg">
                  <SafeIcon icon={client.icon} className="h-8 w-8 text-purple-300 mr-4" />
                  <div>
                    <h4 className="text-white font-semibold">{client.name}</h4>
                    <p className="text-white/70 text-sm">{client.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;