import React from "react";
import { Coins, Sparkles } from "lucide-react";

type Badge = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

type AvatarHubProps = {
  avatarUrl: string;
  coins: number;
  badges: Badge[];
  level?: number;
  onCustomize: () => void;
};

const AvatarHub: React.FC<AvatarHubProps> = ({
  avatarUrl,
  coins,
  badges,
  level = 1,
  onCustomize,
}) => {
  return (
    <section
      aria-label="Avatar and gamification hub"
      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        🎭 Avatar Hub
      </h2>

      {/* Avatar */}
      <div className="relative w-36 h-36 mx-auto mb-4">
        <img
          src={avatarUrl}
          alt="User avatar"
          className="w-full h-full rounded-full object-cover border-4 border-indigo-600 shadow-lg"
        />
        <span className="absolute -bottom-2 right-2 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow">
          Lv {level}
        </span>
      </div>

      {/* Coins */}
      <div className="flex items-center justify-center gap-2 text-lg font-semibold text-gray-700 mb-6">
        <Coins className="text-yellow-500" size={20} />
        <span className="text-indigo-600">
          {coins.toLocaleString()} Coins
        </span>
      </div>

      {/* Badges */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {badges.length === 0 ? (
          <p className="text-sm text-gray-500">
            No badges yet. Complete lessons to earn some!
          </p>
        ) : (
          badges.map((badge) => (
            <div
              key={badge.id}
              title={badge.name}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 hover:bg-indigo-100 transition transform hover:scale-110 cursor-pointer shadow-sm"
            >
              {badge.icon}
            </div>
          ))
        )}
      </div>

      {/* Customize Button */}
      <button
        onClick={onCustomize}
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        <Sparkles size={16} />
        Customize Avatar
      </button>
    </section>
  );
};

export default AvatarHub;
