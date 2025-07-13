import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiUsers, FiCamera, FiMessageCircle, FiHeart, FiStar } = FiIcons;

const Home = () => {
  const features = [
    {
      icon: FiCalendar,
      title: 'Team Schedule',
      description: 'Stay updated with all games, practices, and team events',
      link: '/schedule',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiUsers,
      title: 'Player Roster',
      description: 'Meet our amazing team members and coaching staff',
      link: '/roster',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiCamera,
      title: 'Photo Gallery',
      description: 'Share and view memorable moments from our games',
      link: '/gallery',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FiMessageCircle,
      title: 'Team Chat',
      description: 'Connect with other families and stay in touch',
      link: '/chat',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const announcements = [
    {
      title: 'Season Opener This Saturday!',
      content: 'Join us for our first game of the season at Memorial Park. Game starts at 10 AM.',
      date: '2024-03-15',
      priority: 'high'
    },
    {
      title: 'Team Photo Day',
      content: 'Don\'t forget to wear your team jersey for our annual team photo next practice.',
      date: '2024-03-18',
      priority: 'medium'
    },
    {
      title: 'Equipment Check',
      content: 'Please ensure all players have their gloves and helmets for this week\'s practice.',
      date: '2024-03-20',
      priority: 'low'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-primary-600 to-secondary-500 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Welcome to Our Team!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Building friendships, confidence, and memories through the joy of baseball. 
              Every player is a champion here!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center space-x-2 text-lg"
            >
              <SafeIcon icon={FiHeart} className="w-6 h-6 text-red-300" />
              <span>Inclusive • Supportive • Fun</span>
              <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform brings families together with tools designed to keep everyone connected and informed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              >
                <Link
                  to={feature.link}
                  className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Team Announcements
            </h2>
            <p className="text-lg text-gray-600">
              Stay up to date with the latest team news and important information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                  announcement.priority === 'high' ? 'border-red-500' :
                  announcement.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    announcement.priority === 'high' ? 'bg-red-100 text-red-800' :
                    announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {announcement.priority.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">{announcement.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {announcement.title}
                </h3>
                <p className="text-gray-600">
                  {announcement.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              More Than Just Baseball
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Our Challenger Baseball program is about building a community where every player feels valued, 
              supported, and celebrated. Together, we create lasting friendships and unforgettable memories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-primary-700 font-medium shadow-md">
                Inclusive Environment
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-primary-700 font-medium shadow-md">
                Skill Development
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-primary-700 font-medium shadow-md">
                Family Support
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-primary-700 font-medium shadow-md">
                Community Building
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;