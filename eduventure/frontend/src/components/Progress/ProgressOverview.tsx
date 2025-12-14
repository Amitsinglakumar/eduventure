import React from 'react';
import { TrendingUp, Calendar, Target, Star } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

const ProgressOverview: React.FC = () => {
  // EduVenture context se student ka overall progress data le rahe hain
  const { state } = useEduVenture();
  const { student } = state;

  // Overview stats ki array jisme label, value, aur recent change dikhate hain with colors and icons
  const overviewStats = [
    {
      icon: TrendingUp,
      label: 'Total XP',
      value: student.totalXP.toLocaleString(),
      change: '+245 this week',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Target,
      label: 'Current Level',
      value: student.level,
      change: 'Next: Level ' + (student.level + 1),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Calendar,
      label: 'Learning Streak',
      value: student.streak + ' days',
      change: 'Personal best!',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Star,
      label: 'Completion Rate',
      value: '87%',
      change: '+5% this month',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift max-w-md mx-auto">
      {/* Header section */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white">
          <TrendingUp size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Progress Overview</h3>
      </div>

      {/* Stats listing with animated appearance */}
      <div className="space-y-4">
        {overviewStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className={`flex items-center justify-between p-4 ${stat.bgColor} rounded-xl animate-slide-in-bottom`}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="group"
              aria-label={`${stat.label}: ${stat.value}, change: ${stat.change}`}
            >
              <div className="flex items-center space-x-3">
                <Icon size={20} className={stat.color} aria-hidden="true" />
                <div>
                  <div className="font-semibold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${stat.color}`}>{stat.change}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Motivational footer */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white text-center select-none" role="note" aria-live="polite">
        <p className="text-sm font-medium">
          🎉 Amazing work! You're in the top 10% of learners this month!
        </p>
      </div>
    </div>
  );
};

export default ProgressOverview;
