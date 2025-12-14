import React from 'react';
import { BookOpen } from 'lucide-react';
import { useEduVenture } from '../../context/EduVentureContext';

const SubjectProgress: React.FC = () => {
  // Context se subjects ki list aur progress data le rahe hain
  const { state } = useEduVenture();

  // Overall progress calculate kar rahe hain all subjects ka average leke
  const overallProgress = Math.round(
    state.subjects.reduce((acc, subject) => acc + subject.progress, 0) / state.subjects.length
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift max-w-md mx-auto">
      {/* Header with book icon and title */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center text-white">
          <BookOpen size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 select-none">Subject Progress</h3>
      </div>

      {/* Each subject progress bar with animated entry */}
      <div className="space-y-4">
        {state.subjects.map((subject, index) => (
          <div
            key={subject.id}
            className="animate-slide-in-bottom"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <span className="text-2xl select-none">{subject.icon}</span>
                <span className="font-medium text-gray-800">{subject.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-600">{subject.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 progress-glow">
              <div
                className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${subject.progress}%` }}
                aria-valuenow={subject.progress}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
                aria-label={`${subject.name} progress`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Overall progress summary bar */}
      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Overall Progress</span>
          <span className="text-sm font-semibold text-gray-800">{overallProgress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${overallProgress}%` }}
            aria-valuenow={overallProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
            aria-label="Overall subjects progress"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SubjectProgress;
