import React from 'react';
import { X, BookOpen } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

interface StoryModalProps {
  story: any;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  // Context ke methods XP add karne aur streak update ke liye
  const { addXP, updateStreak } = useEduVenture();

  // Jab story complete hoti hai to finalize karne ka function
  const handleCompleteStory = () => {
    addXP(15); // XP add karo
    updateStreak(); // streak update karo
    alert('📚 Story completed! You earned 15 XP for reading!');
    onClose(); // modal band karo
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-bounce-in">
        {/* Header: Title, Source & Close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{story.title}</h3>
              <p className="text-purple-600 font-medium">From: {story.source}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close story modal"
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Story Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6 border border-purple-200">
              <h4 className="text-lg font-semibold text-purple-800 mb-3">The Story</h4>
              <p className="text-gray-700 leading-relaxed text-lg select-text">{story.content}</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center space-x-2">
                <span>💡</span>
                <span>Moral of the Story</span>
              </h4>
              <p className="text-gray-700 text-lg font-medium italic select-text">"{story.lesson}"</p>
            </div>
          </div>
        </div>

        {/* Footer with Complete Story Button */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <button
            onClick={handleCompleteStory}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400"
          >
            📖 Mark as Read (+15 XP)
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
