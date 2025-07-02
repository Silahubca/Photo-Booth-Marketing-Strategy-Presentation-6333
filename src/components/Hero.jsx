import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCamera, FiVideo, FiTrendingUp, FiMapPin } = FiIcons;

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <SafeIcon icon={FiCamera} className="h-20 w-20 text-white mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Pose Photobooths
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Comprehensive SEO & Growth Marketing Strategy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <SafeIcon icon={FiCamera} className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Premium Photo Booths</h3>
            <p className="text-white/70">360° booths, Podium Roamer+, and customizable branding</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <SafeIcon icon={FiVideo} className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Drone Videography</h3>
            <p className="text-white/70">Cinematic aerial footage by expert pilots Jordan & Kitz</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <SafeIcon icon={FiMapPin} className="h-12 w-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Vancouver Markets</h3>
            <p className="text-white/70">Serving Victoria, Whistler, Burnaby, and Surrey</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center"
        >
          <SafeIcon icon={FiTrendingUp} className="h-16 w-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Strategic Growth Through SEO Excellence
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            This comprehensive strategy combines technical SEO, local optimization, content marketing, 
            and growth opportunities to position Pose Photobooths as the premier event media solution 
            in Vancouver and surrounding markets.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;