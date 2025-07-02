import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheckSquare, FiClock, FiUsers, FiTrendingUp, FiTarget, FiCalendar } = FiIcons;

const ActionPlan = () => {
  const immediateActions = [
    {
      action: "Conduct Full SEO Audit",
      description: "Comprehensive technical SEO audit and fix critical issues",
      timeline: "Week 1-2",
      priority: "Critical",
      owner: "SEO Specialist"
    },
    {
      action: "Optimize Google Business Profiles",
      description: "Create and optimize GBP listings for all target locations",
      timeline: "Week 1-3",
      priority: "High",
      owner: "Local SEO Manager"
    },
    {
      action: "Launch Pilot Content Campaign",
      description: "Create and publish content featuring Jordan and Kitz",
      timeline: "Week 2-4",
      priority: "High",
      owner: "Content Manager"
    },
    {
      action: "Build Vendor Partnerships",
      description: "Establish partnerships with local event vendors and planners",
      timeline: "Week 3-6",
      priority: "Medium",
      owner: "Business Development"
    }
  ];

  const phases = [
    {
      phase: "Phase 1: Foundation",
      duration: "Months 1-2",
      objectives: ["Technical SEO optimization", "Local search presence", "Content strategy launch"],
      deliverables: ["SEO audit report", "Optimized website", "GBP optimization", "Initial content pieces"]
    },
    {
      phase: "Phase 2: Content & Authority",
      duration: "Months 2-4",
      objectives: ["Content marketing scaling", "Social media growth", "Local backlink building"],
      deliverables: ["Blog content library", "Social media presence", "Local partnerships", "Video content"]
    },
    {
      phase: "Phase 3: Growth & Optimization",
      duration: "Months 4-6",
      objectives: ["Package optimization", "Market expansion", "Performance optimization"],
      deliverables: ["Combined packages", "New market entry", "Optimized campaigns", "Growth metrics"]
    }
  ];

  const timeline = [
    { week: "Week 1-2", focus: "SEO Audit & Technical Fixes", status: "immediate" },
    { week: "Week 3-4", focus: "Local SEO & Content Launch", status: "immediate" },
    { week: "Week 5-8", focus: "Content Scaling & Social Media", status: "short-term" },
    { week: "Week 9-12", focus: "Partnership Building & Package Development", status: "short-term" },
    { week: "Month 4-6", focus: "Market Expansion & Optimization", status: "long-term" }
  ];

  const successFactors = [
    {
      factor: "Consistent Content Creation",
      importance: "Critical",
      description: "Regular, high-quality content featuring our unique services and team"
    },
    {
      factor: "Local Community Engagement",
      importance: "High",
      description: "Active participation in local events and vendor networks"
    },
    {
      factor: "Data-Driven Optimization",
      importance: "High",
      description: "Regular analysis and optimization based on performance metrics"
    },
    {
      factor: "Brand Differentiation",
      importance: "Medium",
      description: "Consistent messaging around integrated services and expert pilots"
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
            Action Plan & Implementation
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Strategic roadmap with clear timelines, responsibilities, and success metrics.
          </p>
        </motion.div>

        {/* Immediate Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiCheckSquare} className="inline-block h-8 w-8 mr-3" />
            Immediate Next Steps
          </h3>
          <div className="space-y-6">
            {immediateActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">{action.action}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      action.priority === 'Critical' 
                        ? 'bg-red-600/30 text-red-200' 
                        : action.priority === 'High'
                        ? 'bg-orange-600/30 text-orange-200'
                        : 'bg-yellow-600/30 text-yellow-200'
                    }`}>
                      {action.priority}
                    </span>
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">
                      {action.timeline}
                    </span>
                  </div>
                </div>
                <p className="text-white/80 mb-4">{action.description}</p>
                <div className="flex items-center text-purple-300">
                  <SafeIcon icon={FiUsers} className="h-4 w-4 mr-2" />
                  <span>Owner: {action.owner}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Implementation Phases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Implementation Phases</h3>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-white">{phase.phase}</h4>
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full font-semibold">
                    {phase.duration}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Key Objectives</h5>
                    <ul className="space-y-2">
                      {phase.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-center text-white/80">
                          <SafeIcon icon={FiTarget} className="h-4 w-4 text-green-400 mr-3" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3">Key Deliverables</h5>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center text-white/80">
                          <SafeIcon icon={FiCheckSquare} className="h-4 w-4 text-purple-400 mr-3" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiCalendar} className="inline-block h-8 w-8 mr-3" />
            Implementation Timeline
          </h3>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg"
                >
                  <div className={`w-4 h-4 rounded-full ${
                    item.status === 'immediate' 
                      ? 'bg-red-500' 
                      : item.status === 'short-term'
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold">{item.week}</span>
                      <span className="text-white/80">{item.focus}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Success Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Critical Success Factors</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {successFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-white">{factor.factor}</h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    factor.importance === 'Critical' 
                      ? 'bg-red-600/30 text-red-200' 
                      : factor.importance === 'High'
                      ? 'bg-orange-600/30 text-orange-200'
                      : 'bg-yellow-600/30 text-yellow-200'
                  }`}>
                    {factor.importance}
                  </span>
                </div>
                <p className="text-white/80">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12"
        >
          <SafeIcon icon={FiTrendingUp} className="h-20 w-20 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            This comprehensive strategy provides the roadmap to establish Pose Photobooths as the 
            premier event media solution in Vancouver. Success requires commitment to consistent 
            execution and data-driven optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <span className="text-2xl font-bold text-white">6 Months</span>
              <p className="text-white/80">Implementation Timeline</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <span className="text-2xl font-bold text-white">300%</span>
              <p className="text-white/80">Target ROI</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4 text-center">
              <span className="text-2xl font-bold text-white">5 Markets</span>
              <p className="text-white/80">Geographic Expansion</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionPlan;