import React from "react";
import { CheckCircle, Clock, Target, Sparkles } from "lucide-react";
import { useEduVenture } from "../../context/EduVentureContext";

type Activity = {
  type: string;
  completed: boolean;
  xp: number;
  title: string;
  icon: React.ReactNode;
};

const DailyChallenges: React.FC = () => {
  const { state, completeActivity, addXP } = useEduVenture();

  const handleCompleteChallenge = (activity: Activity) => {
    if (activity.completed) return;

    completeActivity(activity.type);
    addXP(activity.xp);
  };

  return (
    <section className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      {/* Header */}
      <header className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow">
          <Target size={20} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Daily Challenges
          </h2>
          <p className="text-sm text-gray-500">
            Complete tasks to earn XP
          </p>
        </div>
      </header>

      {/* Challenges */}
      <div className="space-y-4">
        {state.activities.map((activity: Activity, index: number) => (
          <button
            key={index}
            onClick={() => handleCompleteChallenge(activity)}
            disabled={activity.completed}
            className={`w-full p-4 rounded-xl border transition-all flex items-center justify-between ${
              activity.completed
                ? "bg-green-50 border-green-200 cursor-default"
                : "bg-gray-50 border-gray-200 hover:bg-indigo-50 hover:border-indigo-300"
            }`}
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="text-2xl">{activity.icon}</div>

              <div className="text-left">
                <p className="font-semibold text-gray-800">
                  {activity.title}
                </p>
                <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium">
                  <Sparkles size={14} />
                  +{activity.xp} XP
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              {activity.completed ? (
                <>
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-sm font-semibold text-green-600">
                    Done
                  </span>
                </>
              ) : (
                <>
                  <Clock className="text-gray-400" size={20} />
                  <span className="text-sm font-medium text-gray-500">
                    Pending
                  </span>
                </>
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default DailyChallenges;
