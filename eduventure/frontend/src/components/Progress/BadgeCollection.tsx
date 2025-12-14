import React from 'react';
import { Award } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

const BadgeCollection: React.FC = () => {
  // EduVenture context se achievements ki list le rahe hain
  const { state } = useEduVenture();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift max-w-3xl mx-auto">
      {/* Header with icon and title */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white">
          <Award size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Badge Collection</h3>
      </div>

      {/* Grid of badges with conditional styles for unlocked/locked */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {state.achievements.map((achievement, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 animate-bounce-in ${
              achievement.unlocked
                ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300 shadow-lg'
                : 'bg-gray-50 border-gray-200 opacity-60'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
            aria-label={`${achievement.name} badge ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            role="group"
          >
            <div className={`text-4xl mb-2 ${achievement.unlocked ? 'animate-float' : 'grayscale'}`}>
              {achievement.icon}
            </div>
            <h4
              className={`text-sm font-semibold text-center mb-1 ${
                achievement.unlocked ? 'text-gray-800' : 'text-gray-500'
              }`}
            >
              {achievement.name}
            </h4>
            <p
              className={`text-xs text-center leading-tight ${
                achievement.unlocked ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              {achievement.description}
            </p>
            {achievement.unlocked && <div className="mt-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>}
          </div>
        ))}
      </div>

      {/* Summary footer showing total badges unlocked */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white select-none">
          <div className="text-2xl mb-2" aria-hidden="true">🏆</div>
          <p className="text-sm font-medium">
            {state.achievements.filter(a => a.unlocked).length} of {state.achievements.length} badges earned
          </p>
          <p className="text-xs opacity-90 mt-1">Keep learning to unlock more achievements!</p>
        </div>
      </div>
    </div>
  );
};

export default BadgeCollection;
