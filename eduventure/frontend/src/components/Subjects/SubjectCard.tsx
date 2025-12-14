import React from 'react';
import { ChevronRight } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  icon: string; // Usually emoji or icon markup for simplicity
  levels: string[];
  xp_per_level: number;
  progress: number; // Progress percentage for this subject
}

interface SubjectCardProps {
  subject: Subject;
  onClick: () => void; // Click handler to navigate/open subject details
  delay: number; // Animation delay for staggered effect
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick, delay }) => {
  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover-lift cursor-pointer animate-slide-in-bottom"
      style={{ animationDelay: `${delay}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      aria-label={`Open subject ${subject.name} with ${subject.levels.length} levels`}
    >
      {/* Subject header with icon, name, levels count and arrow */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center text-4xl select-none">
          {subject.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{subject.name}</h3>
          <p className="text-gray-600 text-sm">{subject.levels.length} levels available</p>
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" aria-hidden="true" />
      </div>

      {/* Progress bar with percentage */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2 select-none">
          <span>Progress</span>
          <span>{subject.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 progress-glow">
          <div
            className="bg-gradient-to-r from-indigo-400 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${subject.progress}%` }}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={subject.progress}
            aria-label={`${subject.name} progress`}
          />
        </div>
      </div>

      {/* XP info and status */}
      <div className="flex justify-between items-center select-none">
        <span className="text-sm text-gray-500">+{subject.xp_per_level} XP per level</span>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="text-xs text-green-600 font-medium">Active</span>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
