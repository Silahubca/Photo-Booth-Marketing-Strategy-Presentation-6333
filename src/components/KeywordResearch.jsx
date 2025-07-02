import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSearch, FiTarget, FiMapPin, FiTrendingUp, FiFileText, FiUsers } = FiIcons;

const KeywordResearch = () => {
  const keywordCategories = [
    {
      category: "General Photo Booth Keywords",
      icon: FiSearch,
      volume: "High",
      difficulty: "Medium",
      keywords: [
        "Photo booth rental near me",
        "360 photo booth rental", 
        "Wedding photo booth rental"
      ]
    },
    {
      category: "Location-Specific Keywords",
      icon: FiMapPin,
      volume: "Medium-High",
      difficulty: "Low-Medium",
      keywords: [
        "Vancouver photo booth rental",
        "Whistler photo booth rental",
        "Victoria photo booth rental"
      ]
    },
    {
      category: "Drone Videography Keywords",
      icon: FiTrendingUp,
      volume: "Medium",
      difficulty: "Low",
      keywords: [
        "Wedding drone videography",
        "Event drone videography",
        "Drone videography Vancouver"
      ]
    },
    {
      category: "Combined Services Keywords",
      icon: FiTarget,
      volume: "Low-Medium",
      difficulty: "Very Low",
      keywords: [
        "Photo booth and drone rental package",
        "Wedding photo booth and drone services",
        "Event photo booth and drone services"
      ]
    },
    {
      category: "Event-Specific Keywords", 
      icon: FiUsers,
      volume: "Medium",
      difficulty: "Medium",
      keywords: [
        "Corporate photo booth rental Vancouver",
        "Wedding drone videography Victoria",
        "Festival photo booth rental"
      ]
    },
    {
      category: "Feature-Specific Keywords",
      icon: FiFileText,
      volume: "Low-Medium", 
      difficulty: "Low",
      keywords: [
        "360 photo booth rental near me",
        "Roaming photo booth rental",
        "Custom-branded photo booth"
      ]
    }
  ];

  const contentTitles = [
    {
      category: "Ultimate Guides & How-To",
      seoValue: "High",
      titles: [
        "The Ultimate Guide to Choosing the Perfect Photo Booth for Your Event",
        "How Drone Videography Can Transform Your Wedding Day",
        "10 Creative Ways to Use a Photo Booth at Corporate Events"
      ]
    },
    {
      category: "Local Authority Content",
      seoValue: "High",
      titles: [
        "Top 5 Photo Booth Rental Companies in Vancouver",
        "How Whistler Weddings Are Elevated with Photo Booths",
        "Why Victoria is Perfect for 360° Photo Booth Experiences"
      ]
    },
    {
      category: "Comparison & Review Content",
      seoValue: "Medium-High",
      titles: [
        "Pose Photobooths vs. Competitors: Which Offers Better Value?",
        "360° vs Traditional Photo Booths: Which is Right for Your Event?",
        "Drone vs Traditional Videography: A Complete Comparison"
      ]
    },
    {
      category: "Trend & Industry Insights",
      seoValue: "Medium",
      titles: [
        "Photo Booth Trends to Watch in 2025",
        "Why 360° Photo Booths Are Taking Over Vancouver Events",
        "The Future of Event Entertainment: Drones + Photo Booths"
      ]
    },
    {
      category: "Problem-Solution Content",
      seoValue: "High",
      titles: [
        "5 Reasons Why Every Wedding Needs a Photo Booth",
        "How to Make Corporate Events More Engaging with Photo Booths",
        "Why Drone Videography is Perfect for Outdoor Weddings"
      ]
    },
    {
      category: "Seasonal & Event-Specific",
      seoValue: "Medium",
      titles: [
        "Best Christmas Party Photo Booth Ideas for Vancouver Companies",
        "Summer Festival Photo Booth Rental Guide",
        "Wedding Season 2025: Photo Booth and Drone Packages"
      ]
    }
  ];

  const opportunityMetrics = [
    { metric: "Total Target Keywords", value: "200+", description: "Across all categories and locations" },
    { metric: "Low Competition Keywords", value: "60%", description: "Easier to rank with focused content" },
    { metric: "Local Keywords", value: "45+", description: "Location-specific opportunities" },
    { metric: "Long-tail Opportunities", value: "150+", description: "High-intent, conversion-focused terms" }
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
            Keyword Research & Content Opportunities
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive keyword analysis revealing high-opportunity, rankable terms and content strategies.
          </p>
        </motion.div>

        {/* Opportunity Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {opportunityMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-xl p-6 text-center border border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{metric.metric}</div>
                <div className="text-sm text-white/70">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Keyword Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">High-Opportunity Keyword Categories</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {keywordCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600/30 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <SafeIcon icon={category.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">{category.category}</h4>
                    <div className="flex space-x-3">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        category.volume.includes('High') 
                          ? 'bg-green-600/30 text-green-200' 
                          : 'bg-yellow-600/30 text-yellow-200'
                      }`}>
                        {category.volume} Volume
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        category.difficulty.includes('Low') || category.difficulty.includes('Very Low')
                          ? 'bg-green-600/30 text-green-200'
                          : category.difficulty.includes('Medium')
                          ? 'bg-yellow-600/30 text-yellow-200'
                          : 'bg-red-600/30 text-red-200'
                      }`}>
                        {category.difficulty} Difficulty
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h5 className="text-white font-semibold text-sm">Sample Keywords:</h5>
                  {category.keywords.map((keyword, idx) => (
                    <div key={idx} className="flex items-center text-white/80 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-mono bg-white/5 px-2 py-1 rounded">{keyword}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Title Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            High-Impact Content Titles (Sample from 100+ Ideas)
          </h3>
          <div className="space-y-8">
            {contentTitles.map((contentCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-white">{contentCategory.category}</h4>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    contentCategory.seoValue === 'High' 
                      ? 'bg-green-600/30 text-green-200' 
                      : 'bg-yellow-600/30 text-yellow-200'
                  }`}>
                    {contentCategory.seoValue} SEO Value
                  </span>
                </div>
                
                <div className="space-y-4">
                  {contentCategory.titles.map((title, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-purple-600/30 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-white/90 font-medium">{title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ranking Potential Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center">
            <SafeIcon icon={FiTrendingUp} className="h-16 w-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Why These Keywords Are Highly Rankable</h3>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiTarget} className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Low Competition</h4>
                <p className="text-white/80 text-sm">60% of target keywords have low to medium competition, making them achievable ranking targets.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMapPin} className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Local Advantage</h4>
                <p className="text-white/80 text-sm">Geographic targeting provides competitive advantage in Vancouver, Victoria, Whistler, and surrounding areas.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiUsers} className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Unique Positioning</h4>
                <p className="text-white/80 text-sm">Combined photo booth + drone services create unique keyword opportunities with minimal competition.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Implementation Priority */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-white/5 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Content Implementation Priority</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-red-600/30 rounded-lg p-4 mb-3">
                <h4 className="text-white font-bold">Phase 1: Immediate (Weeks 1-4)</h4>
              </div>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Location-specific service pages</li>
                <li>• High-volume keyword content</li>
                <li>• Competitor comparison articles</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-600/30 rounded-lg p-4 mb-3">
                <h4 className="text-white font-bold">Phase 2: Growth (Weeks 5-12)</h4>
              </div>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Ultimate guides & how-to content</li>
                <li>• Feature-specific articles</li>
                <li>• Seasonal content campaigns</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/30 rounded-lg p-4 mb-3">
                <h4 className="text-white font-bold">Phase 3: Authority (Months 4-6)</h4>
              </div>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Industry trend analysis</li>
                <li>• Advanced technique guides</li>
                <li>• Thought leadership content</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeywordResearch;