import React from 'react';
import { Award } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

const RecentAchievements: React.FC = () => {
  const { state } = useEduVenture();

  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto">
      <header className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white">
          <Award size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Recent Achievements</h3>
      </header>

      <div className="space-y-4">
        {state.achievements.slice(0, 3).map((achievement, index) => (
          <article
            key={index}
            className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-200 ${
              achievement.unlocked
                ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
                : 'bg-gray-50 border-gray-200 opacity-60 grayscale'
            }`}
            aria-live="polite"
            aria-atomic="true"
          >
            <div className={`text-3xl ${achievement.unlocked ? 'animate-bounce' : ''}`}>
              {achievement.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800">{achievement.name}</h4>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
            {achievement.unlocked && (
              <div
                className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                aria-label="Unlocked achievement indicator"
                role="img"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentAchievements;
