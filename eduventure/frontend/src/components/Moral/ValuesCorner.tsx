import React from 'react';
import { Heart } from 'lucide-react';

const ValuesCorner: React.FC = () => {
  // Values ki list jisme har value ka icon, title aur description hai
  const values = [
    {
      icon: '💝',
      title: 'Honesty',
      description: 'Always speak the truth and be genuine in your actions.',
    },
    {
      icon: '🤝',
      title: 'Kindness',
      description: 'Be compassionate and helpful to others around you.',
    },
    {
      icon: '💪',
      title: 'Courage',
      description: "Stand up for what is right, even when it's difficult.",
    },
    {
      icon: '🙏',
      title: 'Gratitude',
      description: 'Appreciate the good things in life and thank others.',
    },
    {
      icon: '⚖️',
      title: 'Justice',
      description: 'Treat everyone fairly and equally with respect.',
    },
    {
      icon: '🌱',
      title: 'Patience',
      description: 'Wait calmly and work steadily towards your goals.',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift max-w-md mx-auto">
      {/* Header with icon and title */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg flex items-center justify-center text-white">
          <Heart size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Values Corner</h3>
      </div>

      {/* List of values with animated slide-in */}
      <div className="space-y-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 bg-pink-50 rounded-xl border border-pink-200 animate-slide-in-bottom"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-2xl select-none">{value.icon}</div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesCorner;
