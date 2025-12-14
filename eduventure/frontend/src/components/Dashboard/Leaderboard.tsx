import React from "react";
import { Crown, Medal } from "lucide-react";

type Leader = {
  id: string;
  name: string;
  xp: number;
  avatarUrl?: string;
};

type LeaderboardProps = {
  leaders: Leader[];
};

const rankStyles = [
  {
    icon: <Crown className="text-yellow-500" />,
    bg: "bg-yellow-50 border-yellow-300",
  },
  {
    icon: <Medal className="text-gray-400" />,
    bg: "bg-gray-50 border-gray-300",
  },
  {
    icon: <Medal className="text-orange-500" />,
    bg: "bg-orange-50 border-orange-300",
  },
];

const Leaderboard: React.FC<LeaderboardProps> = ({ leaders }) => {
  return (
    <section
      aria-label="Leaderboard of top learners"
      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800">
        🏆 Leaderboard
      </h2>

      <ol className="space-y-3">
        {leaders.map((leader, index) => {
          const isTop3 = index < 3;
          const style = isTop3 ? rankStyles[index] : null;

          return (
            <li
              key={leader.id}
              className={`flex items-center gap-4 p-4 rounded-xl border transition ${
                isTop3
                  ? style?.bg
                  : "bg-gray-50 border-gray-200 hover:border-indigo-300"
              }`}
            >
              {/* Rank */}
              <div className="w-8 flex justify-center font-bold text-indigo-600">
                {isTop3 ? style?.icon : index + 1}
              </div>

              {/* Avatar */}
              {leader.avatarUrl ? (
                <img
                  src={leader.avatarUrl}
                  alt={`${leader.name}'s avatar`}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold uppercase">
                  {leader.name[0]}
                </div>
              )}

              {/* Name */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 truncate">
                  {leader.name}
                </p>
              </div>

              {/* XP */}
              <span className="text-sm font-bold text-indigo-600">
                {leader.xp.toLocaleString()} XP
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Leaderboard;
