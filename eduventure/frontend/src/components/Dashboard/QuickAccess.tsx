import React from 'react';
import { BookOpen, Dumbbell, Heart, Brain } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

const QuickAccess: React.FC = () => {
  const { setCurrentSection } = useEduVenture();

  const quickActions = [
    {
      icon: BookOpen,
      label: 'Study Math',
      color: 'from-blue-400 to-blue-600',
      action: () => setCurrentSection('course'),
    },
    {
      icon: Dumbbell,
      label: 'Exercise',
      color: 'from-red-400 to-red-600',
      action: () => setCurrentSection('physical'),
    },
    {
      icon: Heart,
      label: 'Read Story',
      color: 'from-pink-400 to-pink-600',
      action: () => setCurrentSection('moral'),
    },
    {
      icon: Brain,
      label: 'Learn Science',
      color: 'from-green-400 to-green-600',
      action: () => setCurrentSection('subjects'),
    },
  ];

  return (
    <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
      <header className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center text-white">
          <Brain size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Quick Access</h3>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {quickActions.map(({ icon: Icon, label, color, action }, index) => (
          <button
            key={index}
            onClick={action}
            type="button"
            className={`flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-r ${color} text-white font-medium transition-transform duration-200 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300`}
            aria-label={label}
          >
            <Icon size={24} className="mb-2" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickAccess;
