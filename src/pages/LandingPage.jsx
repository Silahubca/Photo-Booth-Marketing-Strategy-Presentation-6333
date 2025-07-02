import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import BusinessOverview from '../components/BusinessOverview';
import CompetitiveAnalysis from '../components/CompetitiveAnalysis';
import SEOStrategy from '../components/SEOStrategy';
import KeywordResearch from '../components/KeywordResearch';
import ContentStrategy from '../components/ContentStrategy';
import PlatformAnalysis from '../components/PlatformAnalysis';
import GrowthOpportunities from '../components/GrowthOpportunities';
import Metrics from '../components/Metrics';
import ActionPlan from '../components/ActionPlan';
import Navigation from '../components/Navigation';

const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', title: 'Overview', component: Hero },
    { id: 'business', title: 'Business', component: BusinessOverview },
    { id: 'competitive', title: 'Competition', component: CompetitiveAnalysis },
    { id: 'seo', title: 'SEO Strategy', component: SEOStrategy },
    { id: 'keywords', title: 'Keywords', component: KeywordResearch },
    { id: 'content', title: 'Content', component: ContentStrategy },
    { id: 'platform', title: 'Platform', component: PlatformAnalysis },
    { id: 'growth', title: 'Growth', component: GrowthOpportunities },
    { id: 'metrics', title: 'Metrics', component: Metrics },
    { id: 'action', title: 'Action Plan', component: ActionPlan }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation 
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main className="pt-20">
        {sections.map(({ id, component: Component }) => (
          <motion.section
            key={id}
            id={id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => setActiveSection(id)}
          >
            <Component />
          </motion.section>
        ))}
      </main>
    </div>
  );
};

export default LandingPage;