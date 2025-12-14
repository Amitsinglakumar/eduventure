import React from 'react';
import { Trophy, Zap, Target, Award } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

const StatsRow: React.FC = () => {
  const { state } = useEduVenture();
  const { student } = state;

  const stats = [
    {
      icon: Trophy,
      label: 'Total XP',
      value: student.totalXP.toLocaleString(),
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: Target,
      label: 'Current Level',
      value: student.level,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Zap,
      label: 'Learning Streak',
      value: `${student.streak} days`,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Award,
      label: 'Badges Earned',
      value: student.badges.length,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section aria-label="Student statistics" className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(({ icon: Icon, label, value, color, bgColor }, index) => (
        <article
          key={label}
          className={`${bgColor} rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 stats-row-delay-${index}`}
          tabIndex={0}
          role="region"
          aria-labelledby={`${label.replace(/\s/g, '-').toLowerCase()}-title`}
        >
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
              <Icon size={24} />
            </div>
            <div>
              <h3 id={`${label.replace(/\s/g, '-').toLowerCase()}-title`} className="text-2xl font-bold text-gray-800">
                {value}
              </h3>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default StatsRow;
