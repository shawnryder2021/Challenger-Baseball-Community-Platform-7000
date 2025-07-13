import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚾</span>
              </div>
              <span className="text-xl font-bold">Challenger Baseball</span>
            </div>
            <p className="text-gray-300 mb-4">
              Building confidence, friendships, and memories through the joy of baseball. 
              Every player is a champion here!
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-400" />
              <span className="text-sm">Made with love for our amazing team</span>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-400" />
                <span>team@challengerbaseball.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-400" />
                <span>(555) 123-TEAM</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-400" />
                <span>Memorial Park, Field 1<br />123 Park Ave, City, State</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Team Schedule
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Player Roster
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Photo Gallery
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors">
                Team Chat
              </a>
              <a href="#" className="block text-gray-300 hover:text-primary-400 transition-colors">
                League Information
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Challenger Baseball Team. Built with love for our amazing community.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
