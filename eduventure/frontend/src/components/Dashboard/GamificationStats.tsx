import React from "react";
import { Trophy, Star, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useEduVenture } from "../../context/EduVentureContext";

const GamificationStats: React.FC = () => {
  const { state } = useEduVenture();

  const xp = state.student?.totalXP || 0;
  const level = state.student?.level || 1;
  const streak = state.student?.streak || 0;
  const badges = state.student?.badges?.length || 0;

  const nextLevelXp = level * 1000;
  const progress = Math.min((xp / nextLevelXp) * 100, 100);

  const items = [
    {
      label: "Level",
      value: level,
      icon: <Trophy className="text-purple-600" />,
      bg: "bg-purple-100",
    },
    {
      label: "XP",
      value: xp,
      icon: <Star className="text-yellow-500" />,
      bg: "bg-yellow-100",
    },
    {
      label: "Streak",
      value: `${streak} days`,
      icon: <Zap className="text-orange-500" />,
      bg: "bg-orange-100",
    },
    {
      label: "Badges",
      value: badges,
      icon: <Target className="text-blue-600" />,
      bg: "bg-blue-100",
    },
  ];

  return (
    <section className="space-y-6">
      {/* STATS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm"
          >
            <div className={`p-3 rounded-xl ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{item.label}</p>
              <p className="text-xl font-bold text-gray-800">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* LEVEL PROGRESS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Level {level} Progress</span>
          <span>
            {xp} / {nextLevelXp} XP
          </span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default GamificationStats;
