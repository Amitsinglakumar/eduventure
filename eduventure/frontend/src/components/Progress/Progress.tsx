import React from 'react';
import ProgressOverview from './ProgressOverview';
import SubjectProgress from './SubjectProgress';
import BadgeCollection from './BadgeCollection';

const Progress: React.FC = () => {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto space-y-12">
      {/* Header section with title and motivating description */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 select-none">📈 Your Learning Journey</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Track your amazing progress and see how much you've grown! 
          Every step forward is a victory worth celebrating.
        </p>
      </header>

      {/* Responsive grid showing overview, subject-wise progress, and badges */}
      <section className="grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <ProgressOverview />
        <SubjectProgress />
        <BadgeCollection />
      </section>
    </div>
  );
};

export default Progress;
