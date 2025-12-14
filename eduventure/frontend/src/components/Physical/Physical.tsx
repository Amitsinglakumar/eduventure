import React, { useState } from 'react';
import ActivityList from './ActivityList';
import ExerciseTimer from './ExerciseTimer';
import FitnessStats from './FitnessStats';
import HealthTips from './HealthTips';

const Physical: React.FC = () => {
  // Local state to control when ExerciseTimer modal dikhana hai
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto space-y-12">
      {/* Section heading and intro */}
      <header className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 select-none">💪 Physical Education</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Stay healthy and strong! Regular exercise helps your body grow and keeps your mind sharp. 
          Choose an activity and start your fitness journey today!
        </p>
      </header>

      {/* Grid layout with 3 main physical education widgets */}
      <section className="grid gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {/* Activity list jaha activities dikhenge aur timer start karne ka button */}
        <ActivityList onStartExercise={() => setShowTimer(true)} />

        {/* Fitness stats user ke health progress batate hain */}
        <FitnessStats />

        {/* Health tips jo daily life me help karenge */}
        <HealthTips />
      </section>

      {/* ExerciseTimer modal jab user exercise start karta hai */}
      {showTimer && <ExerciseTimer onClose={() => setShowTimer(false)} />}
    </div>
  );
};

export default Physical;
