import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import StatsRow from "./StatsRow";
import DailyChallenges from "./DailyChallenges";
import RecentAchievements from "./RecentAchievements";
import QuickAccess from "./QuickAccess";
import CourseProgress from "./CourseProgress";

const Dashboard: React.FC = () => {
  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto space-y-10">
      {/* HERO / PLAYER INTRO */}
      <WelcomeBanner />

      {/* STATS HUD */}
      <StatsRow />

      {/* MAIN GRID */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT COLUMN – MAIN GAMEPLAY */}
        <div className="xl:col-span-2 space-y-8">
          <DailyChallenges />

          <CourseProgress
            courses={[
              {
                id: "math",
                title: "Mathematics Basics",
                completedLessons: 6,
                totalLessons: 10,
              },
              {
                id: "cs",
                title: "Computer Fundamentals",
                completedLessons: 4,
                totalLessons: 12,
              },
            ]}
          />
        </div>

        {/* RIGHT COLUMN – PLAYER STATUS */}
        <div className="space-y-8">
          <RecentAchievements />
          <QuickAccess />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
