import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import ReactECharts from 'echarts-for-react';

const { FiBarChart3, FiTrendingUp, FiTarget, FiDollarSign, FiUsers, FiMapPin } = FiIcons;

const Metrics = () => {
  const kpis = [
    {
      icon: FiTrendingUp,
      title: "Organic Traffic Growth",
      description: "Track traffic increases for location-specific pages",
      target: "25% monthly growth",
      measurement: "Google Analytics"
    },
    {
      icon: FiUsers,
      title: "Google Business Profile Leads",
      description: "Leads and bookings from local search",
      target: "50+ monthly leads",
      measurement: "GBP Insights"
    },
    {
      icon: FiTarget,
      title: "Package Conversion Rates",
      description: "Conversion rates for bundled service packages",
      target: "15% conversion rate",
      measurement: "CRM Tracking"
    },
    {
      icon: FiDollarSign,
      title: "Campaign ROI",
      description: "ROI from paid search and social media campaigns",
      target: "300% ROI",
      measurement: "Attribution Tracking"
    }
  ];

  // Sample chart data
  const trafficGrowthOption = {
    title: {
      text: 'Projected Organic Traffic Growth',
      textStyle: { color: '#ffffff' }
    },
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: { color: '#ffffff' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#ffffff' }
    },
    series: [{
      data: [1200, 1500, 1875, 2344, 2930, 3663],
      type: 'line',
      smooth: true,
      lineStyle: { color: '#8b5cf6', width: 3 },
      itemStyle: { color: '#8b5cf6' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(139, 92, 246, 0.3)' },
            { offset: 1, color: 'rgba(139, 92, 246, 0.1)' }
          ]
        }
      }
    }],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '20%'
    }
  };

  const conversionOption = {
    title: {
      text: 'Service Package Performance',
      textStyle: { color: '#ffffff' }
    },
    backgroundColor: 'transparent',
    xAxis: {
      type: 'category',
      data: ['Photo Booth Only', 'Drone Only', 'Combined Package'],
      axisLabel: { color: '#ffffff' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#ffffff' }
    },
    series: [{
      data: [12, 8, 18],
      type: 'bar',
      itemStyle: {
        color: function(params) {
          const colors = ['#3b82f6', '#10b981', '#8b5cf6'];
          return colors[params.dataIndex];
        }
      }
    }],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%',
      top: '20%'
    }
  };

  const trackingMethods = [
    {
      category: "SEO Performance",
      tools: ["Google Analytics 4", "Google Search Console", "SEMrush"],
      frequency: "Weekly"
    },
    {
      category: "Local Search",
      tools: ["Google Business Profile Insights", "Local Ranking Tools"],
      frequency: "Bi-weekly"
    },
    {
      category: "Social Media",
      tools: ["Native Platform Analytics", "Social Media Management Tools"],
      frequency: "Weekly"
    },
    {
      category: "Lead Generation",
      tools: ["CRM Integration", "Call Tracking", "Form Analytics"],
      frequency: "Daily"
    }
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
            Performance Metrics & KPIs
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive tracking and measurement framework to monitor success and optimize performance.
          </p>
        </motion.div>

        {/* Key Performance Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Performance Indicators</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {kpis.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={kpi.icon} className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-3">{kpi.title}</h4>
                    <p className="text-white/80 mb-4">{kpi.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Target:</span>
                        <span className="text-green-300 font-semibold">{kpi.target}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Tracking:</span>
                        <span className="text-purple-300">{kpi.measurement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Performance Projections</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <ReactECharts option={trafficGrowthOption} style={{ height: '300px' }} />
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <ReactECharts option={conversionOption} style={{ height: '300px' }} />
            </div>
          </div>
        </motion.div>

        {/* Tracking Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiBarChart3} className="inline-block h-8 w-8 mr-3" />
            Tracking & Measurement Framework
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {trackingMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{method.category}</h4>
                  <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">
                    {method.frequency}
                  </span>
                </div>
                <div className="space-y-2">
                  {method.tools.map((tool, idx) => (
                    <div key={idx} className="flex items-center text-white/80">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-white/5 rounded-2xl p-8"
        >
          <SafeIcon icon={FiTarget} className="h-16 w-16 text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Success Measurement Philosophy
          </h3>
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            Our comprehensive measurement approach ensures every marketing dollar is accountable. 
            By tracking both leading indicators (traffic, engagement) and lagging indicators (conversions, revenue), 
            we can optimize strategies in real-time and demonstrate clear ROI on all marketing investments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Metrics;