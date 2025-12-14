import React from 'react';
import RecentAchievements from '../Dashboard/RecentAchievements';
import StatsRow from '../Dashboard/StatsRow';
import WelcomeBanner from '../Dashboard/WelcomeBanner';

const DashboardPage: React.FC = () => {
  return (
    <main className="space-y-10 px-4 py-8 max-w-7xl mx-auto">
      <WelcomeBanner />
      <StatsRow />
      <RecentAchievements />
    </main>
  );
};

export default DashboardPage;
