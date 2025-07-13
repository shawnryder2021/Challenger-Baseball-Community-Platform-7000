import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCamera, FiVideo, FiUpload, FiHeart, FiMessageCircle, FiShare2, FiX, FiPlay } = FiIcons;

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const mediaItems = [
    {
      id: 1,
      type: 'photo',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      title: 'Season Opener Victory!',
      description: 'Our team celebrating after winning the season opener 12-8',
      date: '2024-03-16',
      likes: 24,
      comments: 8,
      uploadedBy: 'Coach Mike'
    },
    {
      id: 2,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1580189615381-f6e8dfb6b3a3?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1580189615381-f6e8dfb6b3a3?w=400&h=300&fit=crop',
      title: 'Alex\'s Amazing Catch',
      description: 'Watch Alex make an incredible diving catch in center field!',
      date: '2024-03-16',
      likes: 31,
      comments: 12,
      uploadedBy: 'Sarah Johnson',
      duration: '0:45'
    },
    {
      id: 3,
      type: 'photo',
      url: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
      title: 'Team Photo Day',
      description: 'Annual team photo with all our amazing players and coaches',
      date: '2024-03-20',
      likes: 45,
      comments: 15,
      uploadedBy: 'Coach Sarah'
    },
    {
      id: 4,
      type: 'photo',
      url: 'https://images.unsplash.com/photo-1562019434-e46c2d5b0a3d?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1562019434-e46c2d5b0a3d?w=400&h=300&fit=crop',
      title: 'Practice Makes Perfect',
      description: 'Players working on their batting skills during practice',
      date: '2024-03-18',
      likes: 18,
      comments: 5,
      uploadedBy: 'David Brown'
    },
    {
      id: 5,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      title: 'Tommy\'s Home Run',
      description: 'Tommy hits his first home run of the season!',
      date: '2024-03-23',
      likes: 38,
      comments: 20,
      uploadedBy: 'Lisa Chen',
      duration: '1:12'
    },
    {
      id: 6,
      type: 'photo',
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      title: 'Team Huddle',
      description: 'Team coming together for a motivational huddle before the game',
      date: '2024-03-16',
      likes: 22,
      comments: 7,
      uploadedBy: 'Amanda Smith'
    }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.type === selectedFilter);

  const MediaModal = ({ media, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={media.url}
            alt={media.title}
            className="w-full h-96 object-cover"
          />
          {media.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                <SafeIcon icon={FiPlay} className="w-8 h-8 text-primary-600" />
              </button>
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <SafeIcon icon={FiX} className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{media.title}</h3>
              <p className="text-gray-600 mb-2">{media.description}</p>
              <p className="text-sm text-gray-500">
                Uploaded by {media.uploadedBy} on {media.date}
              </p>
            </div>
            {media.type === 'video' && (
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                {media.duration}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                <SafeIcon icon={FiHeart} className="w-5 h-5" />
                <span>{media.likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors">
                <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
                <span>{media.comments}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                <SafeIcon icon={FiShare2} className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const UploadModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={() => setShowUpload(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4">Upload Media</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Photos or Videos
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors">
              <SafeIcon icon={FiUpload} className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Drag & drop files here or click to browse</p>
              <input type="file" multiple accept="image/*,video/*" className="hidden" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Enter a title for your media"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="Describe what's happening in the photo/video"
            ></textarea>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Upload
            </button>
            <button
              type="button"
              onClick={() => setShowUpload(false)}
              className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
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
            Team Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capture and share the amazing moments from our games, practices, and team events.
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
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              All Media ({mediaItems.length})
            </button>
            <button
              onClick={() => setSelectedFilter('photo')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'photo'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              <SafeIcon icon={FiCamera} className="w-4 h-4" />
              <span>Photos ({mediaItems.filter(item => item.type === 'photo').length})</span>
            </button>
            <button
              onClick={() => setSelectedFilter('video')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedFilter === 'video'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-primary-50'
              }`}
            >
              <SafeIcon icon={FiVideo} className="w-4 h-4" />
              <span>Videos ({mediaItems.filter(item => item.type === 'video').length})</span>
            </button>
          </div>
          <button
            onClick={() => setShowUpload(true)}
            className="flex items-center space-x-2 bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition-colors"
          >
            <SafeIcon icon={FiUpload} className="w-5 h-5" />
            <span>Upload Media</span>
          </button>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3 group-hover:bg-white transition-colors">
                          <SafeIcon icon={FiPlay} className="w-6 h-6 text-primary-600" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {item.duration}
                      </div>
                    </>
                  )}
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.type === 'video' 
                        ? 'bg-red-100 text-red-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {item.type === 'video' ? 'Video' : 'Photo'}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.uploadedBy}</span>
                    <span>{item.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <SafeIcon icon={FiHeart} className="w-4 h-4" />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
                        <span className="text-sm">{item.comments}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-primary-600 transition-colors">
                      <SafeIcon icon={FiShare2} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <SafeIcon icon={FiCamera} className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">No media found</h3>
            <p className="text-gray-500">Be the first to upload some photos or videos!</p>
          </motion.div>
        )}
      </div>

      {selectedMedia && (
        <MediaModal 
          media={selectedMedia} 
          onClose={() => setSelectedMedia(null)} 
        />
      )}

      {showUpload && <UploadModal />}
    </div>
  );
};

export default Gallery;