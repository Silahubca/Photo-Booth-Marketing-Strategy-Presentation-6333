import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCamera, FiTarget, FiTrendingUp, FiFileText, FiUsers, FiBarChart3, FiCheckSquare } = FiIcons;

const Navigation = ({ sections, activeSection, setActiveSection }) => {
  const iconMap = {
    hero: FiCamera,
    business: FiTarget,
    competitive: FiUsers,
    seo: FiTrendingUp,
    content: FiFileText,
    growth: FiTrendingUp,
    metrics: FiBarChart3,
    action: FiCheckSquare
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCamera} className="h-8 w-8 text-white" />
            <span className="text-white font-bold text-xl">Pose Photobooths</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {sections.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === id
                    ? 'bg-white/20 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <SafeIcon icon={iconMap[id]} className="h-4 w-4" />
                <span>{title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;