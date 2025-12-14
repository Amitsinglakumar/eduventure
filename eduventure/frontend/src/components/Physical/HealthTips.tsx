import React from 'react';
import { Lightbulb } from 'lucide-react';

const HealthTips: React.FC = () => {
  // Daily health tips ki list jo user ko motivate kare health maintain karne ke liye
  const tips = [
    'Drink plenty of water throughout the day',
    'Take short breaks during study time to stretch',
    'Get at least 8-9 hours of sleep every night',
    'Eat fruits and vegetables with every meal',
    'Play outdoor games for fresh air and fun',
    'Wash hands frequently to stay healthy',
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift max-w-md mx-auto">
      {/* Header with icon and title */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white">
          <Lightbulb size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Health Tips</h3>
      </div>

      {/* List of health tips with delayed slide-in animation */}
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200 animate-slide-in-bottom"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-yellow-500 text-lg mt-0.5 select-none">💡</div>
            <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
          </div>
        ))}
      </div>

      {/* Motivational footer */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white text-center select-none">
        <p className="text-sm font-medium">💪 Remember: A healthy body helps create a healthy mind!</p>
      </div>
    </div>
  );
};

export default HealthTips;
