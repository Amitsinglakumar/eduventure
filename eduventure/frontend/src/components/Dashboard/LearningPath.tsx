import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lock } from 'lucide-react';

type Milestone = {
  id: string;
  title: string;
  description: string;
  achieved: boolean;
  unlocksNext?: boolean;
};

type LearningPathProps = {
  milestones: Milestone[];
};

const LearningPath: React.FC<LearningPathProps> = ({ milestones }) => {
  return (
    <section
      aria-label="Personalized learning path"
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 select-none">Learning Path</h2>

      <ol className="border-l-4 border-indigo-600 relative">
        {milestones.map((milestone, index) => (
          <motion.li
            key={milestone.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-6 ml-6 relative"
          >
            <span
              className={`absolute -left-4 top-1 w-8 h-8 rounded-full flex items-center justify-center border-4 ${
                milestone.achieved ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-300 text-gray-400'
              }`}
              aria-label={milestone.achieved ? 'Completed milestone' : 'Pending milestone'}
              role="img"
            >
              {milestone.achieved ? <CheckCircle className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
            </span>

            <div className="mb-1 text-lg font-semibold text-gray-700">{milestone.title}</div>
            <p className="text-gray-600">{milestone.description}</p>

            {milestone.unlocksNext && milestone.achieved && (
              <p className="mt-1 text-sm font-medium text-green-600 select-none">
                🎉 Next milestone unlocked!
              </p>
            )}
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default LearningPath;
