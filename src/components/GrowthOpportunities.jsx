import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiUsers, FiBriefcase, FiPackage, FiStar, FiTarget } = FiIcons;

const GrowthOpportunities = () => {
  const droneGrowth = [
    {
      strategy: "Humanize the Brand",
      description: "Build content around pilots Jordan and Kitz, showcasing their expertise and storytelling abilities",
      impact: "Increased trust and personal connection"
    },
    {
      strategy: "Target High-Value Clients",
      description: "Create guides and case studies for wedding planners and corporate marketers",
      impact: "Higher-value bookings and referrals"
    },
    {
      strategy: "B2B Partnerships",
      description: "Collaborate with luxury venues, event planners, and corporate agencies",
      impact: "Steady revenue stream and market expansion"
    }
  ];

  const combinedPackages = [
    {
      package: "The Ultimate Event Experience",
      description: "Bundle 360° photo booths with drone videography for premium events",
      target: "High-end weddings and corporate events",
      pricing: "Premium pricing strategy",
      value: "Complete event media solution"
    },
    {
      package: "Corporate Content Creator Package",
      description: "Branded photo booths with drone footage for social media campaigns",
      target: "Corporate marketing teams",
      pricing: "Project-based pricing",
      value: "Ready-to-use marketing content"
    }
  ];

  const marketExpansion = [
    { market: "Whistler", opportunity: "Premium wedding market", potential: "High" },
    { market: "Victoria", opportunity: "Corporate events and festivals", potential: "Medium" },
    { market: "Burnaby", opportunity: "Growing residential events", potential: "Medium" },
    { market: "Surrey", opportunity: "Multicultural celebrations", potential: "High" }
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
            Growth Opportunities
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Strategic initiatives to accelerate business growth and market expansion.
          </p>
        </motion.div>

        {/* Drone Services Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiTrendingUp} className="inline-block h-8 w-8 mr-3" />
            Drone Services as Growth Engine
          </h3>
          <div className="space-y-6">
            {droneGrowth.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-3">{item.strategy}</h4>
                    <p className="text-white/80 mb-4">{item.description}</p>
                    <div className="bg-green-600/20 rounded-lg p-3">
                      <span className="text-green-300 font-semibold">Expected Impact: </span>
                      <span className="text-white">{item.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Combined Service Packages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiPackage} className="inline-block h-8 w-8 mr-3" />
            Combined Service Packages
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {combinedPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20"
              >
                <h4 className="text-2xl font-bold text-white mb-4">{pkg.package}</h4>
                <p className="text-white/80 mb-6">{pkg.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Target:</span>
                    <span className="text-purple-300">{pkg.target}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Pricing:</span>
                    <span className="text-purple-300">{pkg.pricing}</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 mt-4">
                    <span className="text-yellow-300 font-semibold">Value Proposition: </span>
                    <span className="text-white">{pkg.value}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Expansion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiTarget} className="inline-block h-8 w-8 mr-3" />
            Market Expansion Opportunities
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {marketExpansion.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-white">{market.market}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    market.potential === 'High' 
                      ? 'bg-green-600/30 text-green-200' 
                      : 'bg-yellow-600/30 text-yellow-200'
                  }`}>
                    {market.potential} Potential
                  </span>
                </div>
                <p className="text-white/80">{market.opportunity}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8"
        >
          <SafeIcon icon={FiStar} className="h-16 w-16 text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Strategic Growth Focus
          </h3>
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            By leveraging our unique combination of photo booth and drone services, building personal 
            connections through our expert pilots, and creating premium package offerings, we can 
            capture higher-value clients and expand into new markets while maintaining our competitive edge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthOpportunities;