import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSend, FiPaperclip, FiSmile, FiUsers, FiSearch, FiMoreVertical, FiPhone, FiVideo } = FiIcons;

const Chat = () => {
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [newMessage, setNewMessage] = useState('');

  const channels = [
    {
      id: 'general',
      name: 'General Chat',
      description: 'Team-wide discussions',
      members: 24,
      unread: 3,
      lastMessage: 'Great game everyone!',
      lastTime: '10:30 AM'
    },
    {
      id: 'parents',
      name: 'Parents Only',
      description: 'Parent coordination',
      members: 12,
      unread: 1,
      lastMessage: 'Carpool schedule for next week?',
      lastTime: '9:45 AM'
    },
    {
      id: 'coaches',
      name: 'Coaching Staff',
      description: 'Coaches discussion',
      members: 3,
      unread: 0,
      lastMessage: 'Practice plan for Thursday',
      lastTime: 'Yesterday'
    },
    {
      id: 'events',
      name: 'Events & Planning',
      description: 'Team events and activities',
      members: 18,
      unread: 5,
      lastMessage: 'Team picnic planning',
      lastTime: '2:15 PM'
    }
  ];

  const messages = [
    {
      id: 1,
      user: 'Coach Mike',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face',
      message: 'Great job at practice today everyone! I saw some real improvement in our batting.',
      time: '10:30 AM',
      isCoach: true
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face',
      message: 'Alex was so excited after practice! Thank you for the encouragement.',
      time: '10:32 AM'
    },
    {
      id: 3,
      user: 'Carlos Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      message: 'Maya has been practicing her catching at home. She\'s really dedicated!',
      time: '10:35 AM'
    },
    {
      id: 4,
      user: 'Coach Sarah',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=40&h=40&fit=crop&crop=face',
      message: 'Don\'t forget team photo day is this Wednesday. Please have everyone wear their jerseys!',
      time: '10:40 AM',
      isCoach: true
    },
    {
      id: 5,
      user: 'Lisa Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      message: 'Will do! Tommy is so excited for the team photo.',
      time: '10:42 AM'
    },
    {
      id: 6,
      user: 'Michael Davis',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      message: 'Emma keeps talking about how much fun she had today. Thank you for making this such a positive experience for all the kids!',
      time: '10:45 AM'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          style={{ height: 'calc(100vh - 8rem)' }}
        >
          <div className="flex h-full">
            {/* Sidebar */}
            <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col">
              {/* Sidebar Header */}
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Team Chat</h2>
                <div className="relative">
                  <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Channel List */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Channels
                  </h3>
                  <div className="space-y-2">
                    {channels.map((channel) => (
                      <motion.button
                        key={channel.id}
                        onClick={() => setSelectedChannel(channel.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                          selectedChannel === channel.id
                            ? 'bg-primary-100 border-l-4 border-primary-500'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`font-medium ${
                            selectedChannel === channel.id ? 'text-primary-700' : 'text-gray-800'
                          }`}>
                            # {channel.name}
                          </span>
                          {channel.unread > 0 && (
                            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                              {channel.unread}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 truncate mb-1">
                          {channel.lastMessage}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span className="flex items-center">
                            <SafeIcon icon={FiUsers} className="w-3 h-3 mr-1" />
                            {channel.members}
                          </span>
                          <span>{channel.lastTime}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-200 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      # {channels.find(c => c.id === selectedChannel)?.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {channels.find(c => c.id === selectedChannel)?.description} • {' '}
                      {channels.find(c => c.id === selectedChannel)?.members} members
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      <SafeIcon icon={FiPhone} className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      <SafeIcon icon={FiVideo} className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      <SafeIcon icon={FiUsers} className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
                      <SafeIcon icon={FiMoreVertical} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex space-x-3"
                  >
                    <img
                      src={message.avatar}
                      alt={message.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`font-semibold ${
                          message.isCoach ? 'text-green-600' : 'text-gray-800'
                        }`}>
                          {message.user}
                        </span>
                        {message.isCoach && (
                          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                            Coach
                          </span>
                        )}
                        <span className="text-sm text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{message.message}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-200 bg-white">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    <SafeIcon icon={FiPaperclip} className="w-5 h-5" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder={`Message # ${channels.find(c => c.id === selectedChannel)?.name}`}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-12"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      <SafeIcon icon={FiSmile} className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    type="submit"
                    disabled={!newMessage.trim()}
                    className={`p-3 rounded-lg transition-colors ${
                      newMessage.trim()
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <SafeIcon icon={FiSend} className="w-5 h-5" />
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">
                  Press Enter to send • Shift + Enter for new line
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;