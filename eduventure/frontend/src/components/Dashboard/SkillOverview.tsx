import React from 'react';

type Skill = {
  id: string;
  name: string;
  proficiency: number; // 0-100
};

type SkillOverviewProps = {
  skills: Skill[];
};

const SkillOverview: React.FC<SkillOverviewProps> = ({ skills }) => {
  return (
    <section aria-label="Skill development overview" className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 select-none">Skill Overview</h2>
      <div className="space-y-5">
        {skills.map(({ id, name, proficiency }) => (
          <div key={id} className="space-y-1">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
              <span className="text-sm font-medium text-indigo-600">{proficiency}%</span>
            </div>
            <div
              className="w-full bg-gray-200 rounded-full h-4 overflow-hidden"
              role="progressbar"
              aria-valuenow={proficiency}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${name} proficiency level`}
            >
              <div
                className="h-4 bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillOverview;
