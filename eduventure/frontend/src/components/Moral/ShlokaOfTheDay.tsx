import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

const ShlokaOfTheDay: React.FC = () => {
  // Context se shlokas ka state le rahe hain
  const { state } = useEduVenture();
  // Current shloka index track karne ke liye local state
  const [currentShloka, setCurrentShloka] = useState(0);

  // Next shloka display karne ka function, circular list me cycle karta hai
  const nextShloka = () => {
    setCurrentShloka((prev) => (prev + 1) % state.shlokas.length);
  };

  const shloka = state.shlokas[currentShloka];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift max-w-md mx-auto">
      {/* Header with title and refresh button */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 select-none">Shloka of the Day</h3>
        </div>
        <button
          onClick={nextShloka}
          aria-label="Show next shloka"
          className="p-2 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <RefreshCw size={16} className="text-amber-600" />
        </button>
      </div>

      {/* Shloka content */}
      <div className="text-center space-y-4">
        <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
          <p className="text-lg font-medium text-amber-800 mb-3 leading-relaxed select-text">
            {shloka.sanskrit}
          </p>
          <p className="text-gray-700 italic mb-2 select-text">{shloka.translation}</p>
          <p className="text-sm text-amber-600 font-medium select-text">- {shloka.source}</p>
        </div>

        {/* Reflection encouragement section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-center space-x-2 mb-2 select-none">
            <span className="text-2xl">🧘‍♀️</span>
            <span className="text-sm font-medium">Daily Wisdom</span>
          </div>
          <p className="text-sm opacity-90">
            Reflect on this ancient wisdom and see how it applies to your life today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShlokaOfTheDay;
