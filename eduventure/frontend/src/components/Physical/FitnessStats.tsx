import React from 'react';
import { TrendingUp, Heart, Target, Award } from 'lucide-react';

const FitnessStats: React.FC = () => {
  // Fitness stats with labels, values, icons, and colors for visual emphasis
  const stats = [
    { label: 'Weekly Goal', value: '5/7 days', icon: Target, color: 'text-blue-600' },
    { label: 'Avg. Duration', value: '15 mins', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Fitness Score', value: '8.5/10', icon: Heart, color: 'text-red-600' },
    { label: 'Streak', value: '12 days', icon: Award, color: 'text-purple-600' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift max-w-md mx-auto">
      {/* Header with icon and title */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white">
          <TrendingUp size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Fitness Stats</h3>
      </div>

      {/* List of fitness statistics */}
      <div className="space-y-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <Icon size={20} className={stat.color} />
                <span className="text-gray-600">{stat.label}</span>
              </div>
              <span className="font-semibold text-gray-800">{stat.value}</span>
            </div>
          );
        })}
      </div>

      {/* Health Status message */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-semibold text-green-700 select-none">Health Status</span>
        </div>
        <p className="text-sm text-gray-600">
          Excellent! You're maintaining a great exercise routine. Keep up the fantastic work!
        </p>
      </div>
    </div>
  );
};

export default FitnessStats;
