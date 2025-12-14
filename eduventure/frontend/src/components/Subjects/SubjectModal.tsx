import React from 'react';
import { X, Star, Play } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

interface SubjectModalProps {
  subjectId: string;
  onClose: () => void;
}

const SubjectModal: React.FC<SubjectModalProps> = ({ subjectId, onClose }) => {
  // Context se subjects aur addXP function le rahe hain
  const { state, addXP } = useEduVenture();
  // Subject find kar rahe hain id ke basis par
  const subject = state.subjects.find((s) => s.id === subjectId);

  if (!subject) return null; // Agar subject na mile to kuch na dikhayein

  // Level start karne ka function jo XP add karega aur modal band karega
  const handleStartLevel = (levelIndex: number) => {
    const levelName = subject.levels[levelIndex];

    // Shuruaat ki alert message
    alert(`🚀 Starting ${subject.name}: ${levelName}\n\nThis would open the interactive learning module!`);

    // Simulate kar rahe hain completion after 2 seconds with XP reward
    setTimeout(() => {
      addXP(subject.xp_per_level);
      alert(`🎓 Level completed! You earned ${subject.xp_per_level} XP!`);
    }, 2000);

    // Modal band kar do
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-bounce-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl select-none">
              {subject.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{subject.name}</h3>
              <p className="text-gray-600 select-none">Choose a level to start learning</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close subject modal"
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Levels listing */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid gap-4">
            {subject.levels.map((level, index) => (
              <div
                key={index}
                onClick={() => handleStartLevel(index)}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md cursor-pointer transition-all duration-200 group"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleStartLevel(index);
                }}
                aria-label={`Start Level ${index + 1}: ${level}, earns ${subject.xp_per_level} XP`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold select-none">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 group-hover:text-blue-600">{`Level ${index + 1}: ${level}`}</div>
                    <div className="text-sm text-gray-600 select-none">{`+${subject.xp_per_level} XP`}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-yellow-500 select-none">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors duration-200">
                    <Play size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectModal;
