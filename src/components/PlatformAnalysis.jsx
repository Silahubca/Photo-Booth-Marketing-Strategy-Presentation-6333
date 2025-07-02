import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import ReactECharts from 'echarts-for-react';

const { FiAlertTriangle, FiCheckCircle, FiXCircle, FiTrendingUp, FiZap, FiSettings, FiGlobe, FiLock } = FiIcons;

const PlatformAnalysis = () => {
  const wixLimitations = [
    {
      category: "SEO Flexibility",
      icon: FiSettings,
      severity: "High",
      issues: [
        "Limited control over server response codes (301 redirects, 404 pages)",
        "Difficulty customizing robots.txt files and canonical tags", 
        "Limited schema markup implementation for structured data"
      ]
    },
    {
      category: "URL Structure",
      icon: FiGlobe,
      severity: "Medium",
      issues: [
        "Auto-generated URL structures not SEO-friendly",
        "Adds unnecessary 'collections' or 'categories' to URLs",
        "Longer URLs that are less optimized for search engines"
      ]
    },
    {
      category: "Page Speed",
      icon: FiZap,
      severity: "High",
      issues: [
        "Slower loading times due to bloated code",
        "Limited server optimization options",
        "Page speed is critical ranking factor being compromised"
      ]
    },
    {
      category: "Scalability",
      icon: FiTrendingUp,
      severity: "High", 
      issues: [
        "Struggles with multi-location business complexity",
        "Limited plugin/extension marketplace",
        "Cannot handle advanced features like AI-driven optimization"
      ]
    },
    {
      category: "Ownership & Control",
      icon: FiLock,
      severity: "Critical",
      issues: [
        "Proprietary platform with limited control",
        "Difficult migration process if switching platforms",
        "Cannot choose high-performance hosting providers"
      ]
    }
  ];

  const platformComparison = [
    {
      feature: "SEO Control",
      wix: 3,
      wordpress: 10,
      webflow: 9,
      importance: "Critical"
    },
    {
      feature: "Page Speed",
      wix: 4,
      wordpress: 9,
      webflow: 10,
      importance: "Critical"
    },
    {
      feature: "Scalability",
      wix: 3,
      wordpress: 10,
      webflow: 8,
      importance: "High"
    },
    {
      feature: "Customization",
      wix: 4,
      wordpress: 10,
      webflow: 9,
      importance: "High"
    },
    {
      feature: "Multi-location Support",
      wix: 3,
      wordpress: 10,
      webflow: 7,
      importance: "Critical"
    },
    {
      feature: "Design Flexibility",
      wix: 5,
      wordpress: 8,
      webflow: 10,
      importance: "Medium"
    }
  ];

  const migrationBenefits = [
    {
      platform: "WordPress",
      icon: FiCheckCircle,
      advantages: [
        "Complete SEO control with advanced plugins",
        "50,000+ plugins for unlimited functionality",
        "Multi-location SEO optimization capabilities",
        "Full ownership and migration flexibility"
      ],
      bestFor: "Long-term scalability and advanced SEO"
    },
    {
      platform: "Webflow",
      icon: FiCheckCircle,
      advantages: [
        "Clean, semantic code for better SEO",
        "AWS hosting with global CDN",
        "Pixel-perfect design without coding",
        "Exportable code for easy migration"
      ],
      bestFor: "Design-focused premium branding"
    }
  ];

  // Chart showing performance comparison
  const performanceComparisonOption = {
    title: {
      text: 'Platform Performance Comparison',
      textStyle: { color: '#ffffff' }
    },
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' }
    },
    legend: {
      data: ['Wix', 'WordPress', 'Webflow'],
      textStyle: { color: '#ffffff' }
    },
    xAxis: {
      type: 'category',
      data: ['SEO Control', 'Page Speed', 'Scalability', 'Customization', 'Multi-location', 'Design'],
      axisLabel: { color: '#ffffff', rotate: 45 }
    },
    yAxis: {
      type: 'value',
      max: 10,
      axisLabel: { color: '#ffffff' }
    },
    series: [
      {
        name: 'Wix',
        type: 'bar',
        data: [3, 4, 3, 4, 3, 5],
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'WordPress', 
        type: 'bar',
        data: [10, 9, 10, 10, 10, 8],
        itemStyle: { color: '#22c55e' }
      },
      {
        name: 'Webflow',
        type: 'bar', 
        data: [9, 10, 8, 9, 7, 10],
        itemStyle: { color: '#3b82f6' }
      }
    ],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '20%',
      top: '20%'
    }
  };

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
            Platform Analysis & Migration Strategy
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Why migrating from Wix is essential for SEO success and long-term growth.
          </p>
        </motion.div>

        {/* Wix Limitations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              <SafeIcon icon={FiAlertTriangle} className="inline-block h-8 w-8 mr-3 text-red-400" />
              Critical Wix Limitations for SEO
            </h3>
            
            <div className="space-y-6">
              {wixLimitations.map((limitation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <SafeIcon icon={limitation.icon} className="h-8 w-8 text-red-400 mr-4" />
                    <h4 className="text-xl font-bold text-white">{limitation.category}</h4>
                    <span className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold ${
                      limitation.severity === 'Critical' 
                        ? 'bg-red-600/30 text-red-200'
                        : limitation.severity === 'High'
                        ? 'bg-orange-600/30 text-orange-200'
                        : 'bg-yellow-600/30 text-yellow-200'
                    }`}>
                      {limitation.severity} Impact
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    {limitation.issues.map((issue, idx) => (
                      <div key={idx} className="flex items-start text-white/80">
                        <SafeIcon icon={FiXCircle} className="h-4 w-4 text-red-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm">{issue}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Platform Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Platform Performance Comparison</h3>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <ReactECharts option={performanceComparisonOption} style={{ height: '400px' }} />
          </div>
        </motion.div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Detailed Feature Comparison</h3>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white font-semibold py-4">Feature</th>
                  <th className="text-center text-white font-semibold py-4">Importance</th>
                  <th className="text-center text-white font-semibold py-4">Wix</th>
                  <th className="text-center text-white font-semibold py-4">WordPress</th>
                  <th className="text-center text-white font-semibold py-4">Webflow</th>
                </tr>
              </thead>
              <tbody>
                {platformComparison.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10"
                  >
                    <td className="py-4 text-white font-medium">{item.feature}</td>
                    <td className="py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.importance === 'Critical'
                          ? 'bg-red-600/30 text-red-200'
                          : item.importance === 'High'
                          ? 'bg-orange-600/30 text-orange-200'
                          : 'bg-yellow-600/30 text-yellow-200'
                      }`}>
                        {item.importance}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-red-400 font-bold mr-2">{item.wix}/10</span>
                        <div className="w-16 h-2 bg-gray-700 rounded-full">
                          <div 
                            className="h-2 bg-red-400 rounded-full" 
                            style={{ width: `${item.wix * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-green-400 font-bold mr-2">{item.wordpress}/10</span>
                        <div className="w-16 h-2 bg-gray-700 rounded-full">
                          <div 
                            className="h-2 bg-green-400 rounded-full" 
                            style={{ width: `${item.wordpress * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex items-center justify-center">
                        <span className="text-blue-400 font-bold mr-2">{item.webflow}/10</span>
                        <div className="w-16 h-2 bg-gray-700 rounded-full">
                          <div 
                            className="h-2 bg-blue-400 rounded-full" 
                            style={{ width: `${item.webflow * 10}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Migration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Recommended Migration Options
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {migrationBenefits.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-500/30"
              >
                <div className="flex items-center mb-6">
                  <SafeIcon icon={platform.icon} className="h-8 w-8 text-green-400 mr-4" />
                  <h4 className="text-2xl font-bold text-white">{platform.platform}</h4>
                </div>
                
                <div className="space-y-3 mb-6">
                  {platform.advantages.map((advantage, idx) => (
                    <div key={idx} className="flex items-start text-white/80">
                      <SafeIcon icon={FiCheckCircle} className="h-4 w-4 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <span className="text-green-300 font-semibold">Best For: </span>
                  <span className="text-white">{platform.bestFor}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Migration Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Seamless Migration Strategy
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-600/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Platform Setup</h4>
              <p className="text-white/80 text-sm">
                Rebuild site on WordPress/Webflow while maintaining current design and functionality
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">SEO Preservation</h4>
              <p className="text-white/80 text-sm">
                Implement 301 redirects from old URLs to new ones to preserve SEO rankings
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Team Training</h4>
              <p className="text-white/80 text-sm">
                Comprehensive training on new platform management and optimization
              </p>
            </div>
          </div>
        </motion.div>

        {/* ROI Justification */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center bg-white/5 rounded-2xl p-8"
        >
          <SafeIcon icon={FiTrendingUp} className="h-16 w-16 text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">Investment Justification</h3>
          <p className="text-lg text-white/80 max-w-4xl mx-auto mb-8">
            While migration requires upfront investment, the long-term benefits far outweigh costs:
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">3-5x</div>
              <div className="text-white/80 text-sm">Faster Page Speed</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">50%+</div>
              <div className="text-white/80 text-sm">Better SEO Rankings</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">Unlimited</div>
              <div className="text-white/80 text-sm">Scalability Potential</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-white/80 text-sm">Platform Ownership</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformAnalysis;