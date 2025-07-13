import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays, startOfWeek } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiMapPin, FiUsers, FiPlus, FiEdit, FiTrash2 } = FiIcons;

const Schedule = () => {
  const [selectedView, setSelectedView] = useState('upcoming');
  const [showAddEvent, setShowAddEvent] = useState(false);

  const events = [
    {
      id: 1,
      title: 'Season Opener vs. Eagles',
      type: 'game',
      date: '2024-03-16',
      time: '10:00 AM',
      location: 'Memorial Park Field 1',
      opponent: 'Eagles',
      description: 'Our first game of the season! Come cheer on the team.'
    },
    {
      id: 2,
      title: 'Weekly Practice',
      type: 'practice',
      date: '2024-03-18',
      time: '4:00 PM',
      location: 'Memorial Park Field 2',
      description: 'Regular practice session focusing on batting and fielding.'
    },
    {
      id: 3,
      title: 'Team Photo Day',
      type: 'event',
      date: '2024-03-20',
      time: '3:30 PM',
      location: 'Memorial Park Pavilion',
      description: 'Annual team photos. Please wear your team jersey!'
    },
    {
      id: 4,
      title: 'Home Game vs. Cardinals',
      type: 'game',
      date: '2024-03-23',
      time: '11:00 AM',
      location: 'Memorial Park Field 1',
      opponent: 'Cardinals',
      description: 'Home game against the Cardinals. Snack bar will be open!'
    },
    {
      id: 5,
      title: 'Skills Workshop',
      type: 'practice',
      date: '2024-03-25',
      time: '4:00 PM',
      location: 'Community Center Gym',
      description: 'Indoor skills workshop focusing on base running and strategy.'
    }
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case 'game': return '⚾';
      case 'practice': return '🏃';
      case 'event': return '🎉';
      default: return '📅';
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'game': return 'from-red-500 to-red-600';
      case 'practice': return 'from-blue-500 to-blue-600';
      case 'event': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const AddEventForm = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={() => setShowAddEvent(false)}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">Add New Event</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter event title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="game">Game</option>
              <option value="practice">Practice</option>
              <option value="event">Team Event</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter event description"
            ></textarea>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Add Event
            </button>
            <button
              type="button"
              onClick={() => setShowAddEvent(false)}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Team Schedule
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with all our games, practices, and special events.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0"
        >
          <div className="flex space-x-2">
            <button
              onClick={() => setSelectedView('upcoming')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedView === 'upcoming'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setSelectedView('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedView === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              All Events
            </button>
          </div>
          <button
            onClick={() => setShowAddEvent(true)}
            className="flex items-center space-x-2 bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5" />
            <span>Add Event</span>
          </button>
        </motion.div>

        {/* Events List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${getEventColor(event.type)}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getEventColor(event.type)} rounded-lg flex items-center justify-center text-white text-xl`}>
                      {getEventIcon(event.type)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                      <span className="text-sm text-gray-500 capitalize">{event.type}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      <SafeIcon icon={FiEdit} className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 transition-colors">
                      <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <SafeIcon icon={FiCalendar} className="w-5 h-5 text-primary-500" />
                    <span>{format(new Date(event.date), 'EEEE, MMMM d, yyyy')}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <SafeIcon icon={FiClock} className="w-5 h-5 text-primary-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary-500" />
                    <span>{event.location}</span>
                  </div>
                  {event.opponent && (
                    <div className="flex items-center space-x-3 text-gray-600">
                      <SafeIcon icon={FiUsers} className="w-5 h-5 text-primary-500" />
                      <span>vs. {event.opponent}</span>
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full bg-primary-50 text-primary-700 py-2 rounded-lg hover:bg-primary-100 transition-colors font-medium">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">8</div>
            <div className="text-gray-600">Games This Season</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-gray-600">Practice Sessions</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-gray-600">Special Events</div>
          </div>
        </motion.div>
      </div>

      {showAddEvent && <AddEventForm />}
    </div>
  );
};

export default Schedule;