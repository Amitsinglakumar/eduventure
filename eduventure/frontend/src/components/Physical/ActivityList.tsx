import React from 'react';
import { Play, Clock, Zap } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

interface ActivityListProps {
  onStartExercise: () => void;
}

const ActivityList: React.FC<ActivityListProps> = ({ onStartExercise }) => {
  // EduVenture context se physical activities ka state le rahe hain
  const { state } = useEduVenture();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift max-w-md mx-auto">
      {/* Header with icon and title */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-600 rounded-lg flex items-center justify-center text-white">
          <Zap size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Today's Activities</h3>
      </div>

      {/* Activities list with hover and click effects */}
      <div className="space-y-4">
        {state.physical_activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100 hover:border-red-300 transition-all duration-200 group cursor-pointer"
            onClick={onStartExercise} // Activity par click karne pe exercise start ho jayegi
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onStartExercise();
            }}
            aria-label={`Start exercise: ${activity.name}`}
          >
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                {activity.name}
              </h4>
              <p className="text-sm text-gray-600">{activity.type}</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1 text-red-600 select-none">
                <Clock size={16} />
                <span className="text-sm font-medium">{activity.duration}</span>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white group-hover:bg-red-600 transition-colors duration-200">
                <Play size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button for whole exercise session start */}
      <button
        onClick={onStartExercise}
        className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg focus:outline-none focus:ring-4 focus:ring-red-400"
        aria-label="Start full exercise session"
      >
        🏃‍♂️ Start Exercise Session
      </button>
    </div>
  );
};

export default ActivityList;
