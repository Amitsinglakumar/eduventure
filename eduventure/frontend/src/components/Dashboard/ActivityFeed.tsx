import React from "react";
import { Clock } from "lucide-react";

type Activity = {
  id: string;
  description: string;
  date: string; // ISO string
  icon?: React.ReactNode;
};

type ActivityFeedProps = {
  activities: Activity[];
};

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <section
      aria-label="Recent activity feed"
      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        🧭 Recent Activity
      </h2>

      {activities.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No recent activity yet. Start learning to earn XP!
        </div>
      ) : (
        <ul className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

          {activities.map((activity) => (
            <li key={activity.id} className="relative flex gap-4">
              {/* Icon */}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                {activity.icon ?? <Clock size={18} />}
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-50 rounded-xl p-4 hover:bg-indigo-50 transition">
                <p className="text-gray-800 font-medium">
                  {activity.description}
                </p>
                <time
                  dateTime={activity.date}
                  className="block text-xs text-gray-500 mt-1"
                >
                  {new Date(activity.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ActivityFeed;
