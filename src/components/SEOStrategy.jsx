import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiMapPin, FiSettings, FiFileText, FiLink, FiTrendingUp } = FiIcons;

const SEOStrategy = () => {
  const foundationalSEO = [
    {
      icon: FiSettings,
      title: "Technical SEO Audit",
      description: "Optimize page speed, mobile responsiveness, and structured data (Schema markup)",
      priority: "High"
    },
    {
      icon: FiFileText,
      title: "On-Page SEO",
      description: "Target high-intent keywords like 'Vancouver 360 photo booth rental'",
      priority: "High"
    },
    {
      icon: FiLink,
      title: "Content Optimization",
      description: "Update service pages with compelling meta titles, descriptions, and internal linking",
      priority: "Medium"
    }
  ];

  const localSEO = [
    {
      title: "Google Business Profile Optimization",
      description: "Create and optimize listings for Vancouver, Victoria, Whistler, Burnaby, and Surrey",
      impact: "Direct lead generation"
    },
    {
      title: "Location-Specific Landing Pages",
      description: "Develop pages targeting each service and location combination",
      impact: "Improved local rankings"
    },
    {
      title: "Local Backlink Building",
      description: "Partner with local vendors and directories to earn high-quality backlinks",
      impact: "Authority building"
    }
  ];

  const targetKeywords = [
    { keyword: "Vancouver 360 photo booth rental", volume: "High", difficulty: "Medium" },
    { keyword: "Whistler wedding drone videography", volume: "Medium", difficulty: "Low" },
    { keyword: "Corporate event photo booth Vancouver", volume: "Medium", difficulty: "Medium" },
    { keyword: "Wedding drone photography BC", volume: "High", difficulty: "High" },
    { keyword: "Photo booth rental Surrey", volume: "Medium", difficulty: "Low" }
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
            SEO & GEO Optimization Strategy
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive approach to dominate local search results and drive qualified leads.
          </p>
        </motion.div>

        {/* Foundational SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Foundational SEO</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {foundationalSEO.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <SafeIcon icon={item.icon} className="h-12 w-12 text-white mb-4" />
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-white/80 mb-4">{item.description}</p>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  item.priority === 'High' 
                    ? 'bg-red-600/30 text-red-200' 
                    : 'bg-yellow-600/30 text-yellow-200'
                }`}>
                  {item.priority} Priority
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Local SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <SafeIcon icon={FiMapPin} className="inline-block h-8 w-8 mr-3" />
              Local SEO Focus
            </h3>
            <div className="space-y-6">
              {localSEO.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white/5 rounded-lg p-6"
                >
                  <div className="bg-blue-600/30 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/80 mb-2">{item.description}</p>
                    <span className="text-green-300 text-sm font-semibold">
                      Impact: {item.impact}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Target Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiSearch} className="inline-block h-8 w-8 mr-3" />
            Target Keywords Strategy
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white font-semibold py-3">Keyword</th>
                  <th className="text-center text-white font-semibold py-3">Search Volume</th>
                  <th className="text-center text-white font-semibold py-3">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {targetKeywords.map((keyword, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-b border-white/10"
                  >
                    <td className="py-4 text-white">{keyword.keyword}</td>
                    <td className="py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        keyword.volume === 'High' 
                          ? 'bg-green-600/30 text-green-200' 
                          : 'bg-yellow-600/30 text-yellow-200'
                      }`}>
                        {keyword.volume}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        keyword.difficulty === 'Low' 
                          ? 'bg-green-600/30 text-green-200' 
                          : keyword.difficulty === 'Medium'
                          ? 'bg-yellow-600/30 text-yellow-200'
                          : 'bg-red-600/30 text-red-200'
                      }`}>
                        {keyword.difficulty}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOStrategy;