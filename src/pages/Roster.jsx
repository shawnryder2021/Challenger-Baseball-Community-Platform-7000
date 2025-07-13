import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiMail, FiPhone, FiEdit, FiPlus, FiStar, FiAward } = FiIcons;

const Roster = () => {
  const [selectedTab, setSelectedTab] = useState('players');

  const players = [
    {
      id: 1,
      name: 'Alex Johnson',
      age: 12,
      position: 'Pitcher',
      jersey: 7,
      photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=150&h=150&fit=crop&crop=face',
      parent: 'Sarah Johnson',
      phone: '(555) 123-4567',
      email: 'sarah.johnson@email.com',
      achievements: ['Most Improved Player 2023', 'Team Spirit Award'],
      favoritePosition: 'Pitcher',
      joinedDate: '2022-03-15'
    },
    {
      id: 2,
      name: 'Maya Rodriguez',
      age: 11,
      position: 'Catcher',
      jersey: 3,
      photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face',
      parent: 'Carlos Rodriguez',
      phone: '(555) 234-5678',
      email: 'carlos.rodriguez@email.com',
      achievements: ['Best Teammate 2023'],
      favoritePosition: 'Catcher',
      joinedDate: '2021-08-20'
    },
    {
      id: 3,
      name: 'Tommy Chen',
      age: 13,
      position: 'First Base',
      jersey: 12,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      parent: 'Lisa Chen',
      phone: '(555) 345-6789',
      email: 'lisa.chen@email.com',
      achievements: ['Home Run Champion 2023', 'Leadership Award'],
      favoritePosition: 'First Base',
      joinedDate: '2020-05-10'
    },
    {
      id: 4,
      name: 'Emma Davis',
      age: 10,
      position: 'Outfield',
      jersey: 9,
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
      parent: 'Michael Davis',
      phone: '(555) 456-7890',
      email: 'michael.davis@email.com',
      achievements: ['Rookie of the Year 2023'],
      favoritePosition: 'Center Field',
      joinedDate: '2023-02-28'
    },
    {
      id: 5,
      name: 'Jordan Smith',
      age: 12,
      position: 'Shortstop',
      jersey: 5,
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      parent: 'Amanda Smith',
      phone: '(555) 567-8901',
      email: 'amanda.smith@email.com',
      achievements: ['Defensive Player Award 2023'],
      favoritePosition: 'Shortstop',
      joinedDate: '2021-11-12'
    },
    {
      id: 6,
      name: 'Riley Taylor',
      age: 11,
      position: 'Second Base',
      jersey: 4,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      parent: 'Jennifer Taylor',
      phone: '(555) 678-9012',
      email: 'jennifer.taylor@email.com',
      achievements: ['Most Enthusiastic Player 2023'],
      favoritePosition: 'Second Base',
      joinedDate: '2022-07-05'
    }
  ];

  const coaches = [
    {
      id: 1,
      name: 'Coach Mike Wilson',
      role: 'Head Coach',
      experience: '8 years',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      phone: '(555) 789-0123',
      email: 'mike.wilson@email.com',
      certifications: ['Youth Baseball Certified', 'First Aid Certified'],
      background: 'Former college baseball player with a passion for youth development.'
    },
    {
      id: 2,
      name: 'Coach Sarah Martinez',
      role: 'Assistant Coach',
      experience: '5 years',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      phone: '(555) 890-1234',
      email: 'sarah.martinez@email.com',
      certifications: ['Youth Sports Psychology', 'Positive Coaching Alliance'],
      background: 'Specializes in building confidence and teaching fundamental skills.'
    },
    {
      id: 3,
      name: 'Coach David Brown',
      role: 'Skills Coach',
      experience: '3 years',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      phone: '(555) 901-2345',
      email: 'david.brown@email.com',
      certifications: ['Adaptive Sports Instructor'],
      background: 'Focuses on individualized skill development and adaptive techniques.'
    }
  ];

  const PlayerCard = ({ player }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-400"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={player.photo}
            alt={player.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-primary-600 shadow-lg">
          #{player.jersey}
        </div>
      </div>
      
      <div className="p-6 pt-16">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{player.name}</h3>
          <p className="text-primary-600 font-medium">{player.position}</p>
          <p className="text-gray-500 text-sm">Age {player.age}</p>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <SafeIcon icon={FiUsers} className="w-4 h-4 text-primary-500" />
            <span>Parent: {player.parent}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <SafeIcon icon={FiPhone} className="w-4 h-4 text-primary-500" />
            <span>{player.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <SafeIcon icon={FiMail} className="w-4 h-4 text-primary-500" />
            <span className="truncate">{player.email}</span>
          </div>
        </div>

        {player.achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
              <SafeIcon icon={FiAward} className="w-4 h-4 mr-1 text-yellow-500" />
              Achievements
            </h4>
            <div className="space-y-1">
              {player.achievements.map((achievement, index) => (
                <div key={index} className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded">
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex space-x-2">
          <button className="flex-1 bg-primary-50 text-primary-700 py-2 rounded-lg hover:bg-primary-100 transition-colors text-sm font-medium">
            Contact Parent
          </button>
          <button className="p-2 text-gray-400 hover:text-primary-600 transition-colors">
            <SafeIcon icon={FiEdit} className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const CoachCard = ({ coach }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-green-400 to-blue-400"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={coach.photo}
            alt={coach.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-medium text-green-600 shadow-lg">
          {coach.experience}
        </div>
      </div>
      
      <div className="p-6 pt-16">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{coach.name}</h3>
          <p className="text-green-600 font-medium">{coach.role}</p>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <SafeIcon icon={FiPhone} className="w-4 h-4 text-green-500" />
            <span>{coach.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <SafeIcon icon={FiMail} className="w-4 h-4 text-green-500" />
            <span className="truncate">{coach.email}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Certifications</h4>
          <div className="space-y-1">
            {coach.certifications.map((cert, index) => (
              <div key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                {cert}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">{coach.background}</p>

        <button className="w-full bg-green-50 text-green-700 py-2 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium">
          Contact Coach
        </button>
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
            Team Roster
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our amazing team of players and dedicated coaching staff.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setSelectedTab('players')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedTab === 'players'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Players ({players.length})
            </button>
            <button
              onClick={() => setSelectedTab('coaches')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedTab === 'coaches'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Coaches ({coaches.length})
            </button>
          </div>
        </motion.div>

        {/* Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-end mb-6"
        >
          <button className="flex items-center space-x-2 bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors">
            <SafeIcon icon={FiPlus} className="w-5 h-5" />
            <span>Add {selectedTab === 'players' ? 'Player' : 'Coach'}</span>
          </button>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {selectedTab === 'players'
            ? players.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <PlayerCard player={player} />
                </motion.div>
              ))
            : coaches.map((coach, index) => (
                <motion.div
                  key={coach.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <CoachCard coach={coach} />
                </motion.div>
              ))
          }
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">{players.length}</div>
            <div className="text-gray-600">Total Players</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">{coaches.length}</div>
            <div className="text-gray-600">Coaching Staff</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {Math.round(players.reduce((sum, p) => sum + p.age, 0) / players.length)}
            </div>
            <div className="text-gray-600">Average Age</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {players.reduce((sum, p) => sum + p.achievements.length, 0)}
            </div>
            <div className="text-gray-600">Team Awards</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Roster;