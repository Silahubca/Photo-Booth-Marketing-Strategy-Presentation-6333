import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiInstagram, FiLinkedin, FiFacebook, FiVideo, FiEdit } = FiIcons;

const ContentStrategy = () => {
  const blogTopics = [
    {
      title: "10 Reasons Why Every Wedding Needs a Photo Booth",
      category: "Wedding",
      seoValue: "High",
      target: "Engaged Couples"
    },
    {
      title: "How Drone Videography Captures the Magic of Whistler Weddings",
      category: "Drone + Wedding",
      seoValue: "High",
      target: "Whistler Couples"
    },
    {
      title: "The Ultimate Guide to Choosing the Perfect Photo Booth",
      category: "Educational",
      seoValue: "Medium",
      target: "Event Planners"
    },
    {
      title: "5 Creative Ways to Use a Photo Booth at Corporate Events",
      category: "Corporate",
      seoValue: "Medium",
      target: "Corporate Planners"
    },
    {
      title: "Why 360° Photo Booths Are Taking Over Vancouver Events",
      category: "Technology",
      seoValue: "High",
      target: "Tech-Savvy Clients"
    }
  ];

  const socialContent = [
    {
      platform: "Instagram",
      icon: FiInstagram,
      content: "Behind-the-scenes footage of drone shoots and photo booth setups",
      frequency: "Daily",
      focus: "Visual Storytelling"
    },
    {
      platform: "LinkedIn",
      icon: FiLinkedin,
      content: "Case studies showcasing ROI from corporate events using combined services",
      frequency: "3x/week",
      focus: "B2B Engagement"
    },
    {
      platform: "Facebook",
      icon: FiFacebook,
      content: "Client testimonials and event highlight reels",
      frequency: "Daily",
      focus: "Community Building"
    }
  ];

  const videoContent = [
    {
      title: "Meet the Pilots: Jordan and Kitz",
      description: "A short video introducing the drone experts",
      purpose: "Humanize the Brand",
      duration: "2-3 minutes"
    },
    {
      title: "Top 5 Drone Shots for Weddings",
      description: "A visually engaging video showcasing drone capabilities",
      purpose: "Showcase Expertise",
      duration: "3-4 minutes"
    },
    {
      title: "360° Photo Booth Experience",
      description: "Interactive demonstration of our premium photo booth technology",
      purpose: "Product Demonstration",
      duration: "1-2 minutes"
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
            Content Marketing Strategy
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Strategic content creation to establish authority, drive engagement, and convert prospects.
          </p>
        </motion.div>

        {/* Blog Content Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiFileText} className="inline-block h-8 w-8 mr-3" />
            Blog Content Topics
          </h3>
          <div className="space-y-4">
            {blogTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 flex items-center justify-between"
              >
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">{topic.title}</h4>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm">
                      {topic.category}
                    </span>
                    <span className="text-white/70">Target: {topic.target}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  topic.seoValue === 'High' 
                    ? 'bg-green-600/30 text-green-200' 
                    : 'bg-yellow-600/30 text-yellow-200'
                }`}>
                  {topic.seoValue} SEO Value
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Social Media Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {socialContent.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"
              >
                <SafeIcon icon={social.icon} className="h-12 w-12 text-white mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">{social.platform}</h4>
                <p className="text-white/80 mb-4">{social.content}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Frequency:</span>
                    <span className="text-purple-300">{social.frequency}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Focus:</span>
                    <span className="text-purple-300">{social.focus}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Content Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <SafeIcon icon={FiVideo} className="inline-block h-8 w-8 mr-3" />
            Video Content Strategy
          </h3>
          <div className="space-y-6">
            {videoContent.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 rounded-lg p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{video.title}</h4>
                  <span className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm">
                    {video.duration}
                  </span>
                </div>
                <p className="text-white/80 mb-3">{video.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">Purpose: {video.purpose}</span>
                  <SafeIcon icon={FiVideo} className="h-5 w-5 text-white/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentStrategy;