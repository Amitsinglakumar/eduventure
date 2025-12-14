import React from 'react';
import { BookOpen, Home, Dumbbell, Heart, TrendingUp } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

const Header: React.FC = () => {
  // EduVenture context se state aur setCurrentSection function le rahe hain
  const { state, setCurrentSection } = useEduVenture();
  const { student, currentSection } = state;

  // Navigation items jisme har ek ka ID, label, aur icon hai
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'physical', label: 'Physical', icon: Dumbbell },
    { id: 'moral', label: 'Values', icon: Heart },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo section: animated E letter with platform name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl animate-pulse-glow">
              E
            </div>
            <h1 className="text-2xl font-bold gradient-text">EduVenture</h1>
          </div>

          {/* Navigation menu, desktop only, buttons with active highlight */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id; // check karo current section active hai ya nahi

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)} // click pe section change karo
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={`Go to ${item.label}`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Student info display: name, level and avatar icon */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="font-semibold text-gray-800">{student.name}</div>
              <div className="text-sm text-gray-500">Level {student.level}</div>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl animate-float" role="img" aria-label="Student avatar">
              🎓
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
