import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiStar, FiDollarSign, FiZap, FiTrendingUp, FiAward } = FiIcons;

const CompetitiveAnalysis = () => {
  const competitors = [
    {
      name: "Magnetic Staffing",
      positioning: "Luxury-focused",
      strengths: ["High-end photo booths", "AI-enhanced features", "Premium branding"],
      focus: "Luxury Market"
    },
    {
      name: "Flash Co.",
      positioning: "Feature-rich",
      strengths: ["Modern booths", "Glam filters", "LED backdrops"],
      focus: "Tech-Forward"
    },
    {
      name: "Hoot Booth",
      positioning: "Budget-friendly",
      strengths: ["Competitive pricing", "Basic offerings", "Price-sensitive clients"],
      focus: "Cost Leadership"
    },
    {
      name: "Community Productions",
      positioning: "Drone specialist",
      strengths: ["Wedding videography", "Corporate events", "Aerial expertise"],
      focus: "Drone Services"
    }
  ];

  const differentiators = [
    {
      icon: FiZap,
      title: "Integrated Services",
      description: "Unique all-in-one solution combining photo booth rentals with drone videography",
      impact: "High"
    },
    {
      icon: FiAward,
      title: "Premium Branding",
      description: "High-quality equipment and professional pilots elevate brand above competitors",
      impact: "High"
    },
    {
      icon: FiTarget,
      title: "Local Expertise",
      description: "Deep understanding of Vancouver markets ensures tailored solutions",
      impact: "Medium"
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
            Competitive Landscape
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Understanding our position in the market and key differentiators that set us apart.
          </p>
        </motion.div>

        {/* Competitors Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Competitors</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {competitors.map((competitor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white">{competitor.name}</h4>
                  <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">
                    {competitor.focus}
                  </span>
                </div>
                <p className="text-purple-300 font-semibold mb-4">{competitor.positioning}</p>
                <div className="space-y-2">
                  <h5 className="text-white font-semibold">Key Strengths:</h5>
                  {competitor.strengths.map((strength, idx) => (
                    <div key={idx} className="flex items-center text-white/70">
                      <SafeIcon icon={FiStar} className="h-4 w-4 text-yellow-400 mr-2" />
                      {strength}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Pose Photobooths' Differentiators
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={diff.icon} className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{diff.title}</h4>
                <p className="text-white/80 mb-4">{diff.description}</p>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  diff.impact === 'High' 
                    ? 'bg-green-600/30 text-green-200' 
                    : 'bg-yellow-600/30 text-yellow-200'
                }`}>
                  {diff.impact} Impact
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competitive Advantage Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center bg-white/5 rounded-2xl p-8"
        >
          <SafeIcon icon={FiTrendingUp} className="h-16 w-16 text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Our Competitive Edge
          </h3>
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            While competitors focus on single services, Pose Photobooths offers the unique advantage 
            of integrated photo booth and drone services, providing clients with a comprehensive, 
            premium event media solution backed by local expertise and professional execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveAnalysis;